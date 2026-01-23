/**
 * TRAITORA ADAPTIVE ENGINE
 * 
 * Implementiert den adaptiven Algorithmus basierend auf:
 * - Item Response Theory (IRT) - 2PL Model
 * - Informationsgewinn-Maximierung
 * - Dynamischer Testabbruch bei ausreichender Präzision
 */

class AdaptiveEngine {
  constructor(questionPool, traitDefinitions) {
    this.questionPool = questionPool;
    this.traitDefinitions = traitDefinitions;
    
    // Initialize trait estimates (theta)
    this.traitEstimates = {};
    this.traitVariances = {};
    this.standardErrors = {};  // IRT Standard Errors
    
    // Initialize all traits to neutral (0) with high uncertainty
    Object.keys(traitDefinitions).forEach(trait => {
      this.traitEstimates[trait] = 0.0;
      this.traitVariances[trait] = 1.0;  // High initial uncertainty
      this.standardErrors[trait] = 1.0;   // High initial SE
    });
    
    this.answeredQuestions = new Set();
    this.answerHistory = [];
    this.consistencyScores = {};
    this.inconsistencyFlags = [];
    this.responsePatterns = {};  // Track response patterns per trait
  }

  /**
   * Wähle die nächste beste Frage aus
   * @returns {Object} Die nächste Frage
   */
  selectNextQuestion() {
    let bestQuestion = null;
    let maxScore = -Infinity;

    for (const question of this.questionPool) {
      // Skip bereits beantwortete Fragen
      if (this.answeredQuestions.has(question.id)) {
        continue;
      }

      // Berechne Score für diese Frage
      const score = this.calculateQuestionScore(question);

      if (score > maxScore) {
        maxScore = score;
        bestQuestion = question;
      }
    }

    return bestQuestion;
  }

  /**
   * IRT 2PL Model: Berechnet Wahrscheinlichkeit einer Antwort
   * P(X = 1 | θ) = 1 / (1 + e^(-a(θ - b)))
   * @param {number} theta - Trait level
   * @param {number} difficulty - Item difficulty (b)
   * @param {number} discrimination - Item discrimination (a)
   * @returns {number} Probability [0, 1]
   */
  irtProbability(theta, difficulty, discrimination) {
    return 1 / (1 + Math.exp(-discrimination * (theta - difficulty)));
  }

  /**
   * Fisher Information für ein Item bei gegebenem theta
   * I(θ) = a² * P(θ) * Q(θ)
   * @param {number} theta - Trait level
   * @param {number} difficulty - Item difficulty
   * @param {number} discrimination - Item discrimination
   * @returns {number} Information value
   */
  fisherInformation(theta, difficulty, discrimination) {
    const p = this.irtProbability(theta, difficulty, discrimination);
    const q = 1 - p;
    return Math.pow(discrimination, 2) * p * q;
  }

  /**
   * Maximum Likelihood Estimation für theta
   * Iterativ theta anpassen basierend auf Antworten
   * @param {string} trait - Trait name
   * @param {number} response - Response value [-1, 1]
   * @param {number} difficulty - Item difficulty
   * @param {number} discrimination - Item discrimination
   * @returns {number} Updated theta
   */
  updateThetaMLE(trait, response, difficulty, discrimination) {
    let theta = this.traitEstimates[trait];
    const maxIterations = 10;
    const convergenceThreshold = 0.001;
    
    // Convert response [-1, 1] to probability [0, 1]
    const observedP = (response + 1) / 2;
    
    for (let i = 0; i < maxIterations; i++) {
      const predictedP = this.irtProbability(theta, difficulty, discrimination);
      const error = observedP - predictedP;
      
      if (Math.abs(error) < convergenceThreshold) break;
      
      // Newton-Raphson update
      const information = this.fisherInformation(theta, difficulty, discrimination);
      if (information > 0.001) {
        theta += (error * discrimination) / information;
      }
      
      // Constrain theta to reasonable range [-3, 3]
      theta = Math.max(-3, Math.min(3, theta));
    }
    
    return theta;
  }

  /**
   * Berechnet Standard Error basierend auf Fisher Information
   * SE(θ) = 1 / √(Σ Information)
   * @param {string} trait - Trait name
   * @returns {number} Standard error
   */
  calculateStandardError(trait) {
    let totalInformation = 0;
    
    this.answerHistory.forEach(item => {
      if (item.traits[trait] !== undefined) {
        const difficulty = item.difficulty || 0;
        const discrimination = item.discrimination || 1.0;
        const info = this.fisherInformation(
          this.traitEstimates[trait],
          difficulty,
          discrimination
        );
        totalInformation += info;
      }
    });
    
    // Prevent division by zero
    if (totalInformation < 0.01) totalInformation = 0.01;
    
    return 1 / Math.sqrt(totalInformation);
  }

  /**
   * Berechnet den Informationsgewinn-Score einer Frage (IRT-basiert)
   * @param {Object} question 
   * @returns {number} Score
   */
  calculateQuestionScore(question) {
    let totalScore = 0;
    let relevantTraits = 0;

    // Extrahiere alle Traits aus den Antworten
    const questionTraits = new Set();
    question.answers.forEach(answer => {
      Object.keys(answer.traits).forEach(trait => questionTraits.add(trait));
    });

    const difficulty = question.difficulty || 0;
    const discrimination = question.discrimination || 1.0;

    // Berechne Score basierend auf Fisher Information
    questionTraits.forEach(trait => {
      if (this.traitEstimates[trait] !== undefined) {
        // IRT Fisher Information - wie viel Info bringt diese Frage?
        const theta = this.traitEstimates[trait];
        const fisherInfo = this.fisherInformation(theta, difficulty, discrimination);
        
        // Current Standard Error - höherer SE = mehr Unsicherheit = mehr zu gewinnen
        const currentSE = this.standardErrors[trait] || 1.0;
        
        // Novelty: Neue Trait-Kombinationen werden bevorzugt
        const noveltyScore = this.calculateNoveltyScore(trait);
        
        // Content Balancing: Bevorzuge weniger gemessene Traits
        const balancingFactor = this.getContentBalancingFactor(trait);
        
        // Kombiniere alle Faktoren
        totalScore += fisherInfo * currentSE * noveltyScore * balancingFactor;
        relevantTraits++;
      }
    });

    // Normalisiere auf Anzahl relevanter Traits
    return relevantTraits > 0 ? totalScore / relevantTraits : 0;
  }

  /**
   * Berechnet Novelty-Score (bevorzugt weniger gemessene Traits)
   * @param {string} trait 
   * @returns {number}
   */
  calculateNoveltyScore(trait) {
    const measurementCount = this.answerHistory.filter(answer => 
      Object.keys(answer.traits).includes(trait)
    ).length;
    
    // Weniger gemessene Traits bekommen höheren Score
    return 1.0 / (1.0 + measurementCount * 0.2);
  }

  /**
   * Content Balancing Factor - stellt sicher, dass alle Traits gemessen werden
   * @param {string} trait
   * @returns {number} Balancing factor [0.5, 2.0]
   */
  getContentBalancingFactor(trait) {
    const allTraits = Object.keys(this.traitEstimates);
    const measurementCounts = {};
    
    // Zähle Messungen pro Trait
    allTraits.forEach(t => {
      measurementCounts[t] = this.answerHistory.filter(answer => 
        Object.keys(answer.traits).includes(t)
      ).length;
    });
    
    const avgMeasurements = Object.values(measurementCounts).reduce((a, b) => a + b, 0) / allTraits.length;
    const thisMeasurements = measurementCounts[trait] || 0;
    
    // Wenn dieser Trait unterrepräsentiert ist, erhöhe den Faktor
    if (thisMeasurements < avgMeasurements * 0.7) {
      return 1.5;  // Bevorzuge unterrepräsentierte Traits
    } else if (thisMeasurements > avgMeasurements * 1.3) {
      return 0.7;  // Reduziere überrepräsentierte Traits
    }
    
    return 1.0;  // Normal
  }

  /**
   * Verarbeite eine Antwort und update die Schätzungen
   * @param {Object} question 
   * @param {number} answerIndex 
   */
  processAnswer(question, answerIndex) {
    const answer = question.answers[answerIndex];
    
    // Speichere Antwort mit vollständigen IRT-Parametern
    this.answeredQuestions.add(question.id);
    this.answerHistory.push({
      questionId: question.id,
      answerIndex: answerIndex,
      traits: answer.traits,
      difficulty: question.difficulty || 0,
      discrimination: question.discrimination || 1.0,
      reverse: question.reverse || false
    });

    // Update Trait-Schätzungen mit IRT
    this.updateTraitEstimates(answer, question);
    
    // Check Konsistenz (immer, nicht nur bei Reverse Items)
    this.checkConsistency(question, answer);
  }

  /**
   * Update Trait-Schätzungen mit IRT Maximum Likelihood Estimation
   * @param {Object} answer 
   * @param {Object} question 
   */
  updateTraitEstimates(answer, question) {
    const difficulty = question.difficulty || 0;
    const discrimination = question.discrimination || 1.0;
    
    Object.entries(answer.traits).forEach(([trait, value]) => {
      if (this.traitEstimates[trait] !== undefined) {
        // IRT MLE Update
        const newTheta = this.updateThetaMLE(trait, value, difficulty, discrimination);
        this.traitEstimates[trait] = newTheta;
        
        // Update Standard Error basierend auf Fisher Information
        this.standardErrors[trait] = this.calculateStandardError(trait);
        
        // Legacy Varianz für Kompatibilität (entspricht SE²)
        this.traitVariances[trait] = Math.pow(this.standardErrors[trait], 2);
        
        // Track response pattern für diesen Trait
        if (!this.responsePatterns[trait]) {
          this.responsePatterns[trait] = [];
        }
        this.responsePatterns[trait].push({
          value: value,
          questionId: question.id,
          theta: newTheta,
          se: this.standardErrors[trait]
        });
      }
    });
  }

  /**
   * Prüfe Konsistenz bei Reverse Items und Response Patterns
   * @param {Object} question 
   * @param {Object} answer 
   */
  checkConsistency(question, answer) {
    Object.keys(answer.traits).forEach(trait => {
      if (!this.consistencyScores[trait]) {
        this.consistencyScores[trait] = [];
      }
      this.consistencyScores[trait].push({
        value: answer.traits[trait],
        questionId: question.id,
        isReverse: question.reverse
      });
    });
    
    // Prüfe auf Inkonsistenzen
    this.detectInconsistencies();
  }

  /**
   * Erkennt inkonsistente Antwortmuster
   * @returns {Array} Array von Inkonsistenz-Warnungen
   */
  detectInconsistencies() {
    const inconsistencies = [];
    
    Object.entries(this.consistencyScores).forEach(([trait, scores]) => {
      if (scores.length >= 3) {
        const values = scores.map(s => s.value);
        
        // Berechne Varianz
        const mean = values.reduce((a, b) => a + b, 0) / values.length;
        const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length;
        
        // Hohe Varianz deutet auf inkonsistente Antworten hin
        if (variance > 1.2 && trait.includes('check')) {
          inconsistencies.push({
            trait: trait,
            variance: variance,
            severity: variance > 1.5 ? 'high' : 'medium',
            message: `Inkonsistente Antworten bei ${trait} erkannt`
          });
        }
        
        // Prüfe speziell Reverse Items
        const reverseItems = scores.filter(s => s.isReverse);
        if (reverseItems.length >= 2) {
          const reverseValues = reverseItems.map(s => s.value);
          const reverseVariance = this.calculateVariance(reverseValues);
          
          if (reverseVariance > 1.0) {
            inconsistencies.push({
              trait: trait,
              variance: reverseVariance,
              severity: 'medium',
              message: `Widersprüchliche Antworten bei Reverse Items (${trait})`
            });
          }
        }
      }
    });
    
    // Speichere neue Inkonsistenzen
    inconsistencies.forEach(inc => {
      if (!this.inconsistencyFlags.some(existing => 
        existing.trait === inc.trait && existing.message === inc.message
      )) {
        this.inconsistencyFlags.push(inc);
      }
    });
    
    return inconsistencies;
  }

  /**
   * Berechnet Varianz eines Arrays
   * @param {Array} values
   * @returns {number}
   */
  calculateVariance(values) {
    if (values.length === 0) return 0;
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    return values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length;
  }

  /**
   * Bestimme ob der Test beendet werden kann (IRT-basiert)
   * @returns {boolean}
   */
  shouldTerminateTest() {
    // Minimum Anzahl Fragen
    if (this.answeredQuestions.size < 10) {
      return false;
    }

    // Maximum Anzahl Fragen
    if (this.answeredQuestions.size >= 40) {
      return true;
    }

    // Prüfe ob Standard Error niedrig genug ist (IRT-basiert)
    const avgSE = this.getAverageStandardError();
    const seThreshold = 0.4;  // SE < 0.4 bedeutet reliable Messung
    
    // Zusätzlich: Mindestens 3 Messungen pro Trait
    const minMeasurementsPerTrait = this.checkMinimumCoverage(3);
    
    return avgSE < seThreshold && minMeasurementsPerTrait;
  }

  /**
   * Berechne durchschnittlichen Standard Error
   * @returns {number}
   */
  getAverageStandardError() {
    const ses = Object.values(this.standardErrors);
    return ses.reduce((sum, se) => sum + se, 0) / ses.length;
  }

  /**
   * Prüfe ob jeder Trait mindestens N mal gemessen wurde
   * @param {number} minCount - Minimum measurements
   * @returns {boolean}
   */
  checkMinimumCoverage(minCount) {
    const allTraits = Object.keys(this.traitEstimates);
    
    for (const trait of allTraits) {
      const measurements = this.answerHistory.filter(answer => 
        Object.keys(answer.traits).includes(trait)
      ).length;
      
      if (measurements < minCount) {
        return false;
      }
    }
    
    return true;
  }

  /**
   * Berechne durchschnittliche Varianz
   * @returns {number}
   */
  getAverageVariance() {
    const variances = Object.values(this.traitVariances);
    return variances.reduce((sum, v) => sum + v, 0) / variances.length;
  }

  /**
   * Berechne Konfidenz als Prozent (IRT-basiert)
   * @returns {number} 0-100
   */
  getConfidencePercent() {
    const avgSE = this.getAverageStandardError();
    
    // SE -> Konfidenz Mapping
    // SE = 0.3 -> 95% Konfidenz
    // SE = 0.5 -> 80% Konfidenz
    // SE = 1.0 -> 40% Konfidenz
    let baseConfidence = Math.max(0, Math.min(100, 100 - (avgSE * 60)));
    
    // Reduziere Konfidenz bei Inkonsistenzen
    const inconsistencyPenalty = this.inconsistencyFlags.length * 5;
    baseConfidence = Math.max(0, baseConfidence - inconsistencyPenalty);
    
    // Erhöhe Konfidenz bei vielen Messungen
    const measurementBonus = Math.min(10, this.answeredQuestions.size / 3);
    
    return Math.round(Math.min(100, baseConfidence + measurementBonus));
  }

  /**
   * Hole die finalen Ergebnisse (IRT-erweitert)
   * @returns {Object}
   */
  getResults() {
    // Sortiere Traits nach Stärke UND Zuverlässigkeit
    const scoredTraits = Object.entries(this.traitEstimates).map(([trait, theta]) => ({
      trait,
      theta,
      se: this.standardErrors[trait] || 1.0,
      reliability: 1 / (1 + this.standardErrors[trait]),
      combinedScore: Math.abs(theta) * (1 / (1 + this.standardErrors[trait]))
    }));
    
    const sortedTraits = scoredTraits
      .sort((a, b) => b.combinedScore - a.combinedScore)
      .slice(0, 8);  // Top 8 Traits

    // Erstelle detailliertes Profil mit IRT-Metriken
    const profile = sortedTraits.map(item => ({
      trait: item.trait,
      name: this.traitDefinitions[item.trait]?.name || item.trait,
      description: this.traitDefinitions[item.trait]?.description,
      score: item.theta,
      scorePercent: Math.round((item.theta + 3) / 6 * 100),  // -3 bis 3 -> 0 bis 100
      standardError: item.se,
      reliability: item.reliability,
      confidence: this.getTraitConfidence(item.trait),
      measurements: this.answerHistory.filter(a => 
        Object.keys(a.traits).includes(item.trait)
      ).length
    }));

    return {
      profile: profile,
      totalQuestions: this.answeredQuestions.size,
      confidence: this.getConfidencePercent(),
      avgStandardError: this.getAverageStandardError(),
      inconsistencies: this.inconsistencyFlags,
      qualityIndicators: {
        hasInconsistencies: this.inconsistencyFlags.length > 0,
        inconsistencyCount: this.inconsistencyFlags.length,
        avgMeasurementsPerTrait: this.answeredQuestions.size / Object.keys(this.traitEstimates).length,
        reliability: this.getOverallReliability()
      },
      rawEstimates: { ...this.traitEstimates },
      standardErrors: { ...this.standardErrors },
      variances: { ...this.traitVariances }
    };
  }

  /**
   * Berechnet Gesamt-Zuverlässigkeit des Tests
   * @returns {number} 0-1
   */
  getOverallReliability() {
    const avgSE = this.getAverageStandardError();
    const baseReliability = 1 / (1 + avgSE);
    
    // Reduziere bei Inkonsistenzen
    const inconsistencyFactor = Math.max(0.5, 1 - (this.inconsistencyFlags.length * 0.1));
    
    return Math.min(1, baseReliability * inconsistencyFactor);
  }

  /**
   * Berechne Konfidenz für einen einzelnen Trait (IRT-basiert)
   * @param {string} trait 
   * @returns {number} 0-100
   */
  getTraitConfidence(trait) {
    const se = this.standardErrors[trait] || 1.0;
    
    // SE zu Konfidenz Mapping
    // SE = 0.3 -> 95% Konfidenz
    // SE = 0.5 -> 80% Konfidenz  
    // SE = 1.0 -> 40% Konfidenz
    const baseConfidence = Math.max(0, Math.min(100, 100 - (se * 60)));
    
    // Anzahl Messungen berücksichtigen
    const measurements = this.answerHistory.filter(a => 
      Object.keys(a.traits).includes(trait)
    ).length;
    
    const measurementBonus = Math.min(10, measurements * 2);
    
    return Math.round(Math.min(100, baseConfidence + measurementBonus));
  }

  /**
   * Generiere Interpretation basierend auf Profil
   * @param {string} language 
   * @returns {string}
   */
  generateInterpretation(language = 'de') {
    const results = this.getResults();
    const dominantTraits = results.profile.slice(0, 3);

    const interpretations = {
      de: `Dein Persönlichkeitsprofil zeigt besonders ausgeprägte Merkmale in: ${
        dominantTraits.map(t => t.name.de).join(', ')
      }. Dies deutet auf eine ${this.getProfileType(dominantTraits, 'de')} hin.`,
      en: `Your personality profile shows particularly pronounced characteristics in: ${
        dominantTraits.map(t => t.name.en).join(', ')
      }. This indicates a ${this.getProfileType(dominantTraits, 'en')} type.`,
      fr: `Votre profil de personnalité montre des caractéristiques particulièrement prononcées dans: ${
        dominantTraits.map(t => t.name.fr).join(', ')
      }. Cela indique un type ${this.getProfileType(dominantTraits, 'fr')}.`,
      es: `Tu perfil de personalidad muestra características particularmente pronunciadas en: ${
        dominantTraits.map(t => t.name.es).join(', ')
      }. Esto indica un tipo ${this.getProfileType(dominantTraits, 'es')}.`
    };

    return interpretations[language] || interpretations.de;
  }

  /**
   * Bestimme Profil-Typ basierend auf dominanten Traits
   * @param {Array} traits 
   * @param {string} language 
   * @returns {string}
   */
  getProfileType(traits, language) {
    const types = {
      analytical_organized: {
        de: "strategisch-analytische Persönlichkeit",
        en: "strategic-analytical personality",
        fr: "personnalité stratégique-analytique",
        es: "personalidad estratégico-analítica"
      },
      creative_independent: {
        de: "kreativ-unabhängige Persönlichkeit",
        en: "creative-independent personality",
        fr: "personnalité créative-indépendante",
        es: "personalidad creativo-independiente"
      },
      social_empathic: {
        de: "sozial-empathische Persönlichkeit",
        en: "social-empathetic personality",
        fr: "personnalité sociale-empathique",
        es: "personalidad social-empática"
      },
      ambitious_driven: {
        de: "ehrgeizige und zielstrebige Persönlichkeit",
        en: "ambitious and driven personality",
        fr: "personnalité ambitieuse et déterminée",
        es: "personalidad ambiciosa y decidida"
      },
      balanced: {
        de: "ausgewogene Persönlichkeit",
        en: "balanced personality",
        fr: "personnalité équilibrée",
        es: "personalidad equilibrada"
      }
    };

    // Einfache Logik zur Typenbestimmung
    const traitNames = traits.map(t => t.trait);
    
    if (traitNames.includes('analytical') && traitNames.includes('organized')) {
      return types.analytical_organized[language];
    } else if (traitNames.includes('creative') && traitNames.includes('independent')) {
      return types.creative_independent[language];
    } else if (traitNames.includes('social') && traitNames.includes('empathic')) {
      return types.social_empathic[language];
    } else if (traitNames.includes('ambitious')) {
      return types.ambitious_driven[language];
    } else {
      return types.balanced[language];
    }
  }
}
