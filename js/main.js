/**
 * TRAITORA - MAIN APPLICATION FILE
 * Verbindet UI mit Adaptive Engine
 */

// Global variables
// DEFAULT_LANG kann von der jeweiligen Sprachseite gesetzt werden (z.B. de/index.html)
let currentLanguage = (window.DEFAULT_LANG || window.TRAITORA_LANG || localStorage.getItem('language') || 'de');
let adaptiveEngine = null;
let currentQuestion = null;
let questionCount = 0;
let questionHistory = [];  // Speichert {question, answerIndex} für Zurück-Navigation

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Sprache: Priorität hat die in der HTML-Seite gesetzte Sprache (DEFAULT_LANG)
  currentLanguage = window.DEFAULT_LANG || window.TRAITORA_LANG || localStorage.getItem('language') || 'de';
  const selectEl = document.getElementById('languageSelect');
  if (selectEl) selectEl.value = currentLanguage;
  
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  
  if (savedTheme === 'light') {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  } else {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  }
  
  updateUILanguage();
});

/**
 * Change language – navigates to the language subdirectory
 * (used by pages without window.DEFAULT_LANG, kept for backwards compat)
 */
function changeLanguage() {
  const lang = document.getElementById('languageSelect')?.value;
  if (!lang) return;
  // If we're already on a language subpage, navigate
  if (window.DEFAULT_LANG || window.TRAITORA_LANG) {
    const paths = { de: '../de/', en: '../en/', fr: '../fr/', es: '../es/' };
    if (paths[lang]) { window.location.href = paths[lang]; return; }
  }
  currentLanguage = lang;
  localStorage.setItem('language', currentLanguage);
  updateUILanguage();
  if (document.getElementById('questionContainer').style.display === 'block' && currentQuestion) {
    showQuestion();
  }
}

/**
 * Update UI with current language
 */
function updateUILanguage() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      const text = translations[currentLanguage][key];
      if (element.tagName === 'INPUT' || element.tagName === 'BUTTON') {
        element.value = text;
      } else {
        element.innerHTML = text;
      }
    }
  });
}

/**
 * Get translated text
 */
function t(key) {
  return translations[currentLanguage]?.[key] || key;
}

/**
 * Theme toggle
 */
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  
  if (newTheme === 'light') {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  } else {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  }
}

/**
 * Start test
 */
function startTest() {
  if (!QUESTION_POOL || !TRAIT_DEFINITIONS) {
    alert('Test data is still loading. Please wait a moment.');
    return;
  }
  
  // Initialize adaptive engine
  adaptiveEngine = new AdaptiveEngine(QUESTION_POOL, TRAIT_DEFINITIONS);
  questionCount = 0;
  questionHistory = [];  // Reset history
  
  // Hide start screen, show question container
  document.getElementById('startScreen').style.display = 'none';
  document.getElementById('questionContainer').style.display = 'block';
  
  // Show first question
  nextQuestion();
}

/**
 * Select next question using adaptive algorithm
 */
function nextQuestion() {
  // Process previous answer if exists
  if (currentQuestion) {
    const selectedAnswer = document.querySelector('.answer-btn.selected');
    if (!selectedAnswer) {
      return;  // No answer selected
    }
    
    const answerIndex = parseInt(selectedAnswer.dataset.index);
    adaptiveEngine.processAnswer(currentQuestion, answerIndex);
    
    // Speichere in History für Zurück-Navigation
    questionHistory.push({
      question: currentQuestion,
      answerIndex: answerIndex
    });
  }
  
  // Check if test should terminate
  if (adaptiveEngine && adaptiveEngine.shouldTerminateTest()) {
    showResults();
    return;
  }
  
  // Select next question
  currentQuestion = adaptiveEngine.selectNextQuestion();
  
  if (!currentQuestion) {
    // No more questions available
    showResults();
    return;
  }
  
  questionCount++;
  showQuestion();
}

/**
 * Show current question
 */
function showQuestion() {
  // Update progress
  const progressText = t('questionOf').replace('{current}', questionCount);
  document.getElementById('progressText').textContent = progressText;
  
  // Update confidence indicator
  const confidence = adaptiveEngine ? adaptiveEngine.getConfidencePercent() : 0;
  document.getElementById('confidenceFill').style.width = `${confidence}%`;
  document.getElementById('confidencePercent').textContent = `${confidence}%`;
  
  // Update question text
  document.getElementById('questionText').textContent = 
    currentQuestion.text[currentLanguage] || currentQuestion.text.en;
  
  // Create answer buttons
  const answersContainer = document.getElementById('answersContainer');
  answersContainer.innerHTML = '';
  
  currentQuestion.answers.forEach((answer, index) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = answer.text[currentLanguage] || answer.text.en;
    btn.dataset.index = index;
    btn.onclick = () => selectAnswer(index);
    answersContainer.appendChild(btn);
  });
  
  // Wenn wir eine vorherige Antwort haben, markiere sie
  const lastHistoryEntry = questionHistory[questionHistory.length - 1];
  if (lastHistoryEntry && lastHistoryEntry.question.id === currentQuestion.id) {
    const buttons = document.querySelectorAll('.answer-btn');
    buttons[lastHistoryEntry.answerIndex]?.classList.add('selected');
    document.getElementById('nextBtn').disabled = false;
  }
  
  // Update navigation
  document.getElementById('prevBtn').style.display = questionCount > 1 ? 'block' : 'none';
  if (!lastHistoryEntry || lastHistoryEntry.question.id !== currentQuestion.id) {
    document.getElementById('nextBtn').disabled = true;
  }
  
  // Update next button text
  const shouldShowResults = adaptiveEngine && adaptiveEngine.shouldTerminateTest();
  const nextBtnText = shouldShowResults ? 'showResultButton' : 'nextButton';
  document.getElementById('nextBtn').setAttribute('data-i18n', nextBtnText);
  document.getElementById('nextBtn').textContent = t(nextBtnText);
}

/**
 * Select answer
 */
function selectAnswer(answerIndex) {
  // Update visual selection
  const buttons = document.querySelectorAll('.answer-btn');
  buttons.forEach((btn, idx) => {
    btn.classList.toggle('selected', idx === answerIndex);
  });
  
  // Enable next button
  document.getElementById('nextBtn').disabled = false;
}

/**
 * Previous question - gehe zur vorherigen Frage zurück
 */
function previousQuestion() {
  if (questionHistory.length === 0) {
    return;  // Keine vorherige Frage
  }
  
  // Entferne letzte Frage aus History
  questionHistory.pop();
  questionCount--;
  
  // Initialisiere Engine neu
  adaptiveEngine = new AdaptiveEngine(QUESTION_POOL, TRAIT_DEFINITIONS);
  
  // Spiele alle History-Antworten wieder ab
  questionHistory.forEach(entry => {
    adaptiveEngine.processAnswer(entry.question, entry.answerIndex);
  });
  
  // Hole die vorherige Frage
  if (questionHistory.length > 0) {
    currentQuestion = questionHistory[questionHistory.length - 1].question;
  } else {
    // Wenn keine History mehr, hole erste Frage
    currentQuestion = adaptiveEngine.selectNextQuestion();
  }
  
  // Zeige Frage an
  showQuestion();
}

/**
 * Show results
 */
function showResults() {
  const results = adaptiveEngine.getResults();
  
  // Hide question container
  document.getElementById('questionContainer').style.display = 'none';
  document.getElementById('resultScreen').style.display = 'block';
  
  // Create trait profile visualizations
  const traitProfilesContainer = document.getElementById('traitProfiles');
  traitProfilesContainer.innerHTML = '';
  
  results.profile.forEach((trait, index) => {
    const traitCard = document.createElement('div');
    traitCard.className = 'trait-card';
    traitCard.style.animationDelay = `${index * 0.1}s`;
    
    const traitName = trait.name[currentLanguage] || trait.name.en;
    const traitDesc = trait.description?.[currentLanguage] || trait.description?.en || '';
    
    traitCard.innerHTML = `
      <div class="trait-header">
        <h3>${traitName}</h3>
        <span class="trait-score">${trait.scorePercent}%</span>
      </div>
      <div class="trait-bar-container">
        <div class="trait-bar" style="width: ${trait.scorePercent}%"></div>
      </div>
      <p class="trait-description">${traitDesc}</p>
      <div class="trait-confidence">
        <span class="confidence-label">${t('confidence') || 'Messgenauigkeit:'}</span>
        <span class="confidence-value">${trait.confidence}%</span>
      </div>
    `;
    
    traitProfilesContainer.appendChild(traitCard);
  });
  
  // Add interpretation
  const interpretation = adaptiveEngine.generateInterpretation(currentLanguage);
  document.getElementById('profileInterpretation').textContent = interpretation;

  // Add personality types link
  const typesPages = {
    de: 'persoenlichkeitstypen.html',
    en: 'personality-types.html',
    fr: 'types-de-personnalite.html',
    es: 'tipos-de-personalidad.html'
  };
  const typesLabels = {
    de: '🧠 Was bedeutet mein Persönlichkeitstyp?',
    en: '🧠 What does my personality type mean?',
    fr: '🧠 Que signifie mon type de personnalité ?',
    es: '🧠 ¿Qué significa mi tipo de personalidad?'
  };
  const typesLink = typesPages[currentLanguage] || typesPages.de;
  const typesLabel = typesLabels[currentLanguage] || typesLabels.de;

  const existingTypesLink = document.getElementById('result-types-link');
  if (existingTypesLink) existingTypesLink.remove();

  const typesBox = document.createElement('div');
  typesBox.id = 'result-types-link';
  typesBox.style.cssText = 'margin: 1.2rem 0 0; text-align: center;';
  typesBox.innerHTML = `<a href="${typesLink}" style="display:inline-block; background: var(--accent-gradient); color:#fff; font-weight:700; text-decoration:none; padding:0.8rem 1.8rem; border-radius:12px; font-size:0.97rem; transition:opacity 0.2s;" onmouseover="this.style.opacity='0.88'" onmouseout="this.style.opacity='1'">${typesLabel}</a>`;

  const resultActions = document.querySelector('.result-actions');
  if (resultActions) resultActions.after(typesBox);

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Restart test
 */
function restartTest() {
  document.getElementById('resultScreen').style.display = 'none';
  document.getElementById('startScreen').style.display = 'block';
  adaptiveEngine = null;
  currentQuestion = null;
  questionCount = 0;
  questionHistory = [];  // Reset history
  const typesLink = document.getElementById('result-types-link');
  if (typesLink) typesLink.remove();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── WebControl HQ Integration ───────────────────────────────────
(function () {
  const HQ_API = 'https://webcontrol-hq-api.karol-paschek.workers.dev';
  const HQ_SITE_ID = 'traitora';

  // ── Error Tracking ──────────────────────────────────────────
  async function reportError(type, message, stack) {
    try {
      await fetch(HQ_API + '/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          site_id: HQ_SITE_ID,
          error_type: type,
          message: String(message).slice(0, 500),
          stack: stack ? String(stack).slice(0, 2000) : undefined,
          path: location.pathname,
        }),
      });
    } catch (_) { /* never throw */ }
  }

  window.addEventListener('error', function (e) {
    reportError('JS Error', e.message || 'Unknown error', e.error ? e.error.stack : null);
  });

  window.addEventListener('unhandledrejection', function (e) {
    const msg = e.reason instanceof Error ? e.reason.message : String(e.reason);
    const stack = e.reason instanceof Error ? e.reason.stack : null;
    reportError('Unhandled Promise Rejection', msg, stack);
  });

  // ── Vorschläge-Modal ───────────────────────────────────────
  const SUGG_LS_KEY = 'hq_sugg_ts_traitora';
  const SUGG_LIMIT  = 3;
  const SUGG_WINDOW = 5 * 60 * 1000; // 5 Minuten

  function getSuggTimestamps() {
    try { return JSON.parse(localStorage.getItem(SUGG_LS_KEY) || '[]'); }
    catch (_) { return []; }
  }
  function saveSuggTimestamps(arr) {
    try { localStorage.setItem(SUGG_LS_KEY, JSON.stringify(arr)); } catch (_) {}
  }
  function cooldownMinutesLeft() {
    const now = Date.now();
    const recent = getSuggTimestamps().filter(t => now - t < SUGG_WINDOW);
    if (recent.length < SUGG_LIMIT) return 0;
    const oldest = Math.min(...recent);
    return Math.ceil((SUGG_WINDOW - (now - oldest)) / 60000);
  }

  const style = document.createElement('style');
  style.textContent = `
    #hq-sugg-btn {
      position:fixed; bottom:24px; right:24px; z-index:9999;
      width:48px; height:48px; border-radius:50%;
      background:#8b5cf6; border:none; cursor:pointer;
      box-shadow:0 4px 16px rgba(139,92,246,.45);
      display:flex; align-items:center; justify-content:center;
      font-size:20px; transition:transform .15s;
    }
    #hq-sugg-btn:hover { transform:scale(1.1); }
    #hq-sugg-overlay {
      display:none; position:fixed; inset:0; z-index:10000;
      background:rgba(0,0,0,.55); align-items:center; justify-content:center;
    }
    #hq-sugg-overlay.open { display:flex; }
    #hq-sugg-modal {
      background:#1a1a2e; border-radius:14px; padding:28px;
      width:min(420px,90vw); box-shadow:0 20px 60px rgba(0,0,0,.6);
      color:#e4e4e7; border:1px solid rgba(139,92,246,.25);
    }
    #hq-sugg-modal h3 { margin:0 0 6px; font-size:17px; }
    #hq-sugg-modal p  { margin:0 0 18px; font-size:13px; color:#a1a1aa; }
    #hq-sugg-modal textarea, #hq-sugg-modal input {
      width:100%; box-sizing:border-box; border-radius:8px;
      border:1px solid rgba(139,92,246,.3); background:#0f0f1e;
      color:#e4e4e7; padding:10px 12px; font-size:14px;
      font-family:inherit; resize:vertical; outline:none;
    }
    #hq-sugg-modal textarea:focus, #hq-sugg-modal input:focus { border-color:#8b5cf6; }
    #hq-sugg-modal textarea { min-height:100px; margin-bottom:10px; }
    #hq-sugg-modal input   { margin-bottom:16px; }
    #hq-sugg-actions { display:flex; gap:10px; justify-content:flex-end; }
    #hq-sugg-cancel {
      padding:9px 18px; border-radius:8px; border:1px solid rgba(139,92,246,.3);
      background:transparent; color:#a1a1aa; cursor:pointer; font-size:14px;
    }
    #hq-sugg-submit {
      padding:9px 18px; border-radius:8px; border:none;
      background:#8b5cf6; color:#fff; cursor:pointer; font-size:14px; font-weight:600;
    }
    #hq-sugg-submit:disabled { opacity:.5; cursor:not-allowed; }
    #hq-sugg-status { font-size:13px; margin-top:10px; min-height:18px; }
  `;
  document.head.appendChild(style);

  const btn = document.createElement('button');
  btn.id = 'hq-sugg-btn';
  btn.title = 'Feedback / Vorschlag einreichen';
  btn.textContent = '💡';
  document.body.appendChild(btn);

  const overlay = document.createElement('div');
  overlay.id = 'hq-sugg-overlay';
  overlay.innerHTML = `
    <div id="hq-sugg-modal">
      <h3>💡 Vorschlag einreichen</h3>
      <p>Ideen für neue Traits, Fragen oder andere Wünsche – anonym!</p>
      <textarea id="hq-sugg-text" placeholder="z.B. Füge den Trait Wachsam hinzu…" maxlength="500"></textarea>
      <input id="hq-sugg-cat" type="text" placeholder="Kategorie (optional, z.B. Trait, Frage, Bug…)" maxlength="50">
      <div id="hq-sugg-actions">
        <button id="hq-sugg-cancel">Abbrechen</button>
        <button id="hq-sugg-submit">Absenden</button>
      </div>
      <div id="hq-sugg-status"></div>
    </div>
  `;
  document.body.appendChild(overlay);

  const textarea  = document.getElementById('hq-sugg-text');
  const catInput  = document.getElementById('hq-sugg-cat');
  const submitBtn = document.getElementById('hq-sugg-submit');
  const statusEl  = document.getElementById('hq-sugg-status');

  function openModal() {
    statusEl.textContent = '';
    textarea.value = '';
    catInput.value = '';
    submitBtn.disabled = false;
    const mins = cooldownMinutesLeft();
    if (mins > 0) {
      submitBtn.disabled = true;
      statusEl.style.color = '#f59e0b';
      statusEl.textContent = `⏳ Noch ${mins} Min. warten (Max. 3 Vorschläge/Stunde)`;
    }
    overlay.classList.add('open');
    textarea.focus();
  }
  function closeModal() { overlay.classList.remove('open'); }

  btn.addEventListener('click', openModal);
  document.getElementById('hq-sugg-cancel').addEventListener('click', closeModal);
  overlay.addEventListener('click', function (e) { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });

  submitBtn.addEventListener('click', async function () {
    const suggestion = textarea.value.trim();
    const category   = catInput.value.trim();
    if (suggestion.length < 5) {
      statusEl.style.color = '#ef4444';
      statusEl.textContent = 'Bitte mindestens 5 Zeichen eingeben.';
      return;
    }
    const mins = cooldownMinutesLeft();
    if (mins > 0) {
      statusEl.style.color = '#f59e0b';
      statusEl.textContent = `⏳ Noch ${mins} Min. warten.`;
      return;
    }
    submitBtn.disabled = true;
    statusEl.style.color = '#a1a1aa';
    statusEl.textContent = 'Wird gesendet…';
    try {
      const res = await fetch(HQ_API + '/api/suggestions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ site_id: HQ_SITE_ID, suggestion, category }),
      });
      if (res.status === 429) {
        statusEl.style.color = '#f59e0b';
        statusEl.textContent = '⏳ Zu viele Vorschläge. Bitte eine Stunde warten.';
        submitBtn.disabled = true;
        return;
      }
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const now = Date.now();
      const recent = getSuggTimestamps().filter(t => now - t < SUGG_WINDOW);
      recent.push(now);
      saveSuggTimestamps(recent);
      statusEl.style.color = '#22c55e';
      statusEl.textContent = '✓ Danke für deinen Vorschlag!';
      setTimeout(closeModal, 1800);
    } catch (err) {
      reportError('Suggestion Submit Error', err.message, null);
      statusEl.style.color = '#ef4444';
      statusEl.textContent = 'Fehler beim Senden. Bitte versuche es später.';
      submitBtn.disabled = false;
    }
  });
})();
