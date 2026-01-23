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
    
    // Initialize all traits to neutral (0) with high uncertainty
    Object.keys(traitDefinitions).forEach(trait => {
      this.traitEstimates[trait] = 0.0;
      this.traitVariances[trait] = 1.0;  // High initial uncertainty
    });
    
    this.answeredQuestions = new Set();
    this.answerHistory = [];
    this.consistencyScores = {};
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
   * Berechnet den Informationsgewinn-Score einer Frage
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

    // Berechne Score basierend auf Unsicherheit der gemessenen Traits
    questionTraits.forEach(trait => {
      if (this.traitVariances[trait] !== undefined) {
        // Höhere Varianz = mehr Informationsgewinn möglich
        const uncertaintyScore = this.traitVariances[trait];
        
        // Discrimination der Frage berücksichtigen
        const discriminationScore = question.discrimination || 1.0;
        
        // Novelty: Neue Trait-Kombinationen werden bevorzugt
        const noveltyScore = this.calculateNoveltyScore(trait);
        
        totalScore += uncertaintyScore * discriminationScore * noveltyScore;
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
   * Verarbeite eine Antwort und update die Schätzungen
   * @param {Object} question 
   * @param {number} answerIndex 
   */
  processAnswer(question, answerIndex) {
    const answer = question.answers[answerIndex];
    
    // Speichere Antwort
    this.answeredQuestions.add(question.id);
    this.answerHistory.push({
      questionId: question.id,
      answerIndex: answerIndex,
      traits: answer.traits
    });

    // Update Trait-Schätzungen
    this.updateTraitEstimates(answer, question);
    
    // Check Konsistenz (wenn Reverse Items vorhanden)
    if (question.reverse) {
      this.checkConsistency(question, answer);
    }
  }

  /**
   * Update Trait-Schätzungen mit Bayesian Update
   * @param {Object} answer 
   * @param {Object} question 
   */
  updateTraitEstimates(answer, question) {
    Object.entries(answer.traits).forEach(([trait, value]) => {
      if (this.traitEstimates[trait] !== undefined) {
        const currentEstimate = this.traitEstimates[trait];
        const currentVariance = this.traitVariances[trait];
        
        // Gewichtung basierend auf Discrimination
        const weight = (question.discrimination || 1.0) * 0.3;
        
        // Bayesian Update
        const newEstimate = currentEstimate + (value - currentEstimate) * weight;
        
        // Reduziere Varianz (Unsicherheit nimmt ab)
        const newVariance = currentVariance * (1 - weight * 0.5);
        
        this.traitEstimates[trait] = Math.max(-1, Math.min(1, newEstimate));
        this.traitVariances[trait] = Math.max(0.1, newVariance);
      }
    });
  }

  /**
   * Prüfe Konsistenz bei Reverse Items
   * @param {Object} question 
   * @param {Object} answer 
   */
  checkConsistency(question, answer) {
    // Implementierung für Inconsistency Detection
    Object.keys(answer.traits).forEach(trait => {
      if (!this.consistencyScores[trait]) {
        this.consistencyScores[trait] = [];
      }
      this.consistencyScores[trait].push(answer.traits[trait]);
    });
  }

  /**
   * Bestimme ob der Test beendet werden kann
   * @returns {boolean}
   */
  shouldTerminateTest() {
    // Minimum Anzahl Fragen
    if (this.answeredQuestions.size < 8) {
      return false;
    }

    // Maximum Anzahl Fragen
    if (this.answeredQuestions.size >= 30) {
      return true;
    }

    // Prüfe ob Unsicherheit niedrig genug ist
    const avgVariance = this.getAverageVariance();
    const confidenceThreshold = 0.3;  // Kann angepasst werden
    
    return avgVariance < confidenceThreshold;
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
   * Berechne Konfidenz als Prozent
   * @returns {number} 0-100
   */
  getConfidencePercent() {
    const avgVariance = this.getAverageVariance();
    // 1.0 Varianz = 0% Konfidenz, 0.1 Varianz = 100% Konfidenz
    const confidence = Math.max(0, Math.min(100, (1 - avgVariance) * 111));
    return Math.round(confidence);
  }

  /**
   * Hole die finalen Ergebnisse
   * @returns {Object}
   */
  getResults() {
    // Sortiere Traits nach Stärke
    const sortedTraits = Object.entries(this.traitEstimates)
      .sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]))
      .slice(0, 5);  // Top 5 Traits

    // Erstelle detailliertes Profil
    const profile = sortedTraits.map(([trait, value]) => ({
      trait: trait,
      name: this.traitDefinitions[trait]?.name || trait,
      description: this.traitDefinitions[trait]?.description,
      score: value,
      scorePercent: Math.round((value + 1) * 50),  // -1 bis 1 -> 0 bis 100
      confidence: this.getTraitConfidence(trait)
    }));

    return {
      profile: profile,
      totalQuestions: this.answeredQuestions.size,
      confidence: this.getConfidencePercent(),
      rawEstimates: { ...this.traitEstimates },
      variances: { ...this.traitVariances }
    };
  }

  /**
   * Berechne Konfidenz für einen einzelnen Trait
   * @param {string} trait 
   * @returns {number} 0-100
   */
  getTraitConfidence(trait) {
    const variance = this.traitVariances[trait] || 1.0;
    return Math.round((1 - variance) * 111);
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
