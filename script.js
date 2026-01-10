// Global variables
let currentLanguage = 'de';
let currentQuestion = 0;
let answers = {};
let scores = {
    strategic: 0,
    creative: 0,
    driven: 0,
    social: 0,
    independent: 0,
    reflective: 0
};

// Embedded translations
const translations = {
  "en": {
    "title": "Life Strategy Test",
    "subtitle": "Discover your personality type",
    "welcome": "Welcome!",
    "description": "This test analyzes your life attitude, goals, mindset, and emotional patterns. Answer 10 questions and discover your personality type.",
    "startButton": "Start Test",
    "questionOf": "Question {current} of {total}",
    "nextButton": "Next",
    "backButton": "Back",
    "showResultButton": "Show Result",
    "retakeButton": "Retake Test",
    "strengths": "Your Strengths:",
    "challenges": "Challenges:",
    "lifeFocus": "Your Life Focus:",
    "impressum": "Imprint",
    "privacy": "Privacy",
    "copyright": "© 2026 Life Strategy Test · powered by",
    "language": "Language"
  },
  "de": {
    "title": "Life Strategy Test",
    "subtitle": "Entdecke deinen Persönlichkeitstyp",
    "welcome": "Willkommen!",
    "description": "Dieser Test analysiert deine Lebenseinstellung, Ziele, Denkweise und emotionalen Muster. Beantworte 10 Fragen und entdecke deinen Persönlichkeitstyp.",
    "startButton": "Test starten",
    "questionOf": "Frage {current} von {total}",
    "nextButton": "Weiter",
    "backButton": "Zurück",
    "showResultButton": "Ergebnis anzeigen",
    "retakeButton": "Test wiederholen",
    "strengths": "Deine Stärken:",
    "challenges": "Herausforderungen:",
    "lifeFocus": "Dein Lebensfokus:",
    "impressum": "Impressum",
    "privacy": "Datenschutz",
    "copyright": "© 2026 Life Strategy Test · unterstützt von",
    "language": "Sprache"
  },
  "fr": {
    "title": "Test de Stratégie de Vie",
    "subtitle": "Découvrez votre type de personnalité",
    "welcome": "Bienvenue !",
    "description": "Ce test analyse votre attitude face à la vie, vos objectifs, votre état d'esprit et vos schémas émotionnels. Répondez à 10 questions et découvrez votre type de personnalité.",
    "startButton": "Commencer le test",
    "questionOf": "Question {current} sur {total}",
    "nextButton": "Suivant",
    "backButton": "Retour",
    "showResultButton": "Afficher le résultat",
    "retakeButton": "Refaire le test",
    "strengths": "Vos forces :",
    "challenges": "Défis :",
    "lifeFocus": "Votre orientation de vie :",
    "impressum": "Mentions légales",
    "privacy": "Confidentialité",
    "copyright": "© 2026 Test de Stratégie de Vie · propulsé par",
    "language": "Langue"
  },
  "es": {
    "title": "Test de Estrategia de Vida",
    "subtitle": "Descubre tu tipo de personalidad",
    "welcome": "¡Bienvenido!",
    "description": "Esta prueba analiza tu actitud ante la vida, objetivos, mentalidad y patrones emocionales. Responde 10 preguntas y descubre tu tipo de personalidad.",
    "startButton": "Comenzar test",
    "questionOf": "Pregunta {current} de {total}",
    "nextButton": "Siguiente",
    "backButton": "Atrás",
    "showResultButton": "Mostrar resultado",
    "retakeButton": "Repetir test",
    "strengths": "Tus fortalezas:",
    "challenges": "Desafíos:",
    "lifeFocus": "Tu enfoque de vida:",
    "impressum": "Aviso legal",
    "privacy": "Privacidad",
    "copyright": "© 2026 Test de Estrategia de Vida · desarrollado por",
    "language": "Idioma"
  }
};

// Embedded test data - continued in next message due to size
const testData = {"meta":{"title":"Life Strategy Personality Test","version":"1.0","description":"A deep personality test that analyzes mindset, goals, discipline, risk tolerance and emotional patterns."},"scales":{"strategic":"Long-term thinking, planning, logic","creative":"Imagination, innovation, emotional expression","driven":"Ambition, discipline, work ethic","social":"Relationships, empathy, communication","independent":"Self-reliance, freedom, autonomy","reflective":"Depth, self-awareness, philosophy"},"questions":[{"id":1,"text":{"en":"When you think about your future, what matters most?","de":"Wenn du an deine Zukunft denkst, was ist am wichtigsten?","fr":"Quand vous pensez à votre avenir, qu'est-ce qui compte le plus ?","es":"Cuando piensas en tu futuro, ¿qué es lo más importante?"},"answers":[{"text":{"en":"Having a clear plan and stable success","de":"Einen klaren Plan und stabilen Erfolg haben","fr":"Avoir un plan clair et un succès stable","es":"Tener un plan claro y éxito estable"},"points":{"strategic":3,"driven":2}},{"text":{"en":"Doing something meaningful and creative","de":"Etwas Bedeutungsvolles und Kreatives tun","fr":"Faire quelque chose de significatif et créatif","es":"Hacer algo significativo y creativo"},"points":{"creative":3,"reflective":2}},{"text":{"en":"Freedom and living on my own terms","de":"Freiheit und nach meinen eigenen Regeln leben","fr":"Liberté et vivre selon mes propres termes","es":"Libertad y vivir según mis propias reglas"},"points":{"independent":3}},{"text":{"en":"Strong relationships and shared experiences","de":"Starke Beziehungen und gemeinsame Erfahrungen","fr":"Relations solides et expériences partagées","es":"Relaciones fuertes y experiencias compartidas"},"points":{"social":3}}]},{"id":2,"text":{"en":"How do you usually make big decisions?","de":"Wie triffst du normalerweise große Entscheidungen?","fr":"Comment prenez-vous généralement les grandes décisions ?","es":"¿Cómo tomas generalmente las decisiones importantes?"},"answers":[{"text":{"en":"By carefully analyzing all options","de":"Indem ich alle Optionen sorgfältig analysiere","fr":"En analysant soigneusement toutes les options","es":"Analizando cuidadosamente todas las opciones"},"points":{"strategic":3}},{"text":{"en":"By following what feels right","de":"Indem ich meinem Gefühl folge","fr":"En suivant ce qui me semble juste","es":"Siguiendo lo que se siente correcto"},"points":{"creative":2,"reflective":2}},{"text":{"en":"I just go for it and adjust later","de":"Ich lege einfach los und passe später an","fr":"Je me lance et j'ajuste plus tard","es":"Simplemente lo hago y ajusto después"},"points":{"driven":3}},{"text":{"en":"I ask people I trust","de":"Ich frage Menschen, denen ich vertraue","fr":"Je demande aux personnes en qui j'ai confiance","es":"Pregunto a personas en las que confío"},"points":{"social":3}}]},{"id":3,"text":{"en":"Which describes you best?","de":"Was beschreibt dich am besten?","fr":"Qu'est-ce qui vous décrit le mieux ?","es":"¿Qué te describe mejor?"},"answers":[{"text":{"en":"I like structure and systems","de":"Ich mag Struktur und Systeme","fr":"J'aime la structure et les systèmes","es":"Me gusta la estructura y los sistemas"},"points":{"strategic":3}},{"text":{"en":"I like ideas and possibilities","de":"Ich mag Ideen und Möglichkeiten","fr":"J'aime les idées et les possibilités","es":"Me gustan las ideas y las posibilidades"},"points":{"creative":3}},{"text":{"en":"I like progress and results","de":"Ich mag Fortschritt und Ergebnisse","fr":"J'aime le progrès et les résultats","es":"Me gusta el progreso y los resultados"},"points":{"driven":3}},{"text":{"en":"I like connection and belonging","de":"Ich mag Verbindung und Zugehörigkeit","fr":"J'aime la connexion et l'appartenance","es":"Me gusta la conexión y la pertenencia"},"points":{"social":3}}]},{"id":4,"text":{"en":"What motivates you the most?","de":"Was motiviert dich am meisten?","fr":"Qu'est-ce qui vous motive le plus ?","es":"¿Qué te motiva más?"},"answers":[{"text":{"en":"Achieving something big","de":"Etwas Großes erreichen","fr":"Réaliser quelque chose de grand","es":"Lograr algo grande"},"points":{"driven":3}},{"text":{"en":"Understanding myself and the world","de":"Mich selbst und die Welt verstehen","fr":"Me comprendre moi-même et le monde","es":"Entenderme a mí mismo y al mundo"},"points":{"reflective":3}},{"text":{"en":"Being free","de":"Frei sein","fr":"Être libre","es":"Ser libre"},"points":{"independent":3}},{"text":{"en":"Being appreciated","de":"Wertgeschätzt werden","fr":"Être apprécié","es":"Ser apreciado"},"points":{"social":3}}]},{"id":5,"text":{"en":"How do you react to failure?","de":"Wie reagierst du auf Misserfolg?","fr":"Comment réagissez-vous à l'échec ?","es":"¿Cómo reaccionas al fracaso?"},"answers":[{"text":{"en":"I analyze what went wrong","de":"Ich analysiere, was schief gelaufen ist","fr":"J'analyse ce qui s'est mal passé","es":"Analizo qué salió mal"},"points":{"strategic":3}},{"text":{"en":"I feel it deeply and rethink my path","de":"Ich fühle es tief und überdenke meinen Weg","fr":"Je le ressens profondément et repense mon chemin","es":"Lo siento profundamente y reconsidero mi camino"},"points":{"reflective":3}},{"text":{"en":"I push harder","de":"Ich gebe noch mehr Gas","fr":"Je pousse plus fort","es":"Me esfuerzo más"},"points":{"driven":3}},{"text":{"en":"I seek support","de":"Ich suche Unterstützung","fr":"Je cherche du soutien","es":"Busco apoyo"},"points":{"social":3}}]},{"id":6,"text":{"en":"Which life feels most attractive to you?","de":"Welches Leben fühlt sich für dich am attraktivsten an?","fr":"Quelle vie vous semble la plus attrayante ?","es":"¿Qué vida te parece más atractiva?"},"answers":[{"text":{"en":"Running something successful","de":"Etwas Erfolgreiches leiten","fr":"Diriger quelque chose de réussi","es":"Dirigir algo exitoso"},"points":{"driven":3,"strategic":2}},{"text":{"en":"Creating art or ideas","de":"Kunst oder Ideen erschaffen","fr":"Créer de l'art ou des idées","es":"Crear arte o ideas"},"points":{"creative":3}},{"text":{"en":"Traveling and being free","de":"Reisen und frei sein","fr":"Voyager et être libre","es":"Viajar y ser libre"},"points":{"independent":3}},{"text":{"en":"Having deep relationships","de":"Tiefe Beziehungen haben","fr":"Avoir des relations profondes","es":"Tener relaciones profundas"},"points":{"social":3}}]},{"id":7,"text":{"en":"How do you see rules?","de":"Wie siehst du Regeln?","fr":"Comment voyez-vous les règles ?","es":"¿Cómo ves las reglas?"},"answers":[{"text":{"en":"They keep things working","de":"Sie halten Dinge am Laufen","fr":"Elles font fonctionner les choses","es":"Mantienen las cosas funcionando"},"points":{"strategic":3}},{"text":{"en":"They limit expression","de":"Sie begrenzen Ausdruck","fr":"Elles limitent l'expression","es":"Limitan la expresión"},"points":{"creative":3}},{"text":{"en":"They exist to be beaten","de":"Sie existieren, um gebrochen zu werden","fr":"Elles existent pour être battues","es":"Existen para ser superadas"},"points":{"driven":3}},{"text":{"en":"They protect people","de":"Sie schützen Menschen","fr":"Elles protègent les gens","es":"Protegen a las personas"},"points":{"social":3}}]},{"id":8,"text":{"en":"When alone, what do you do?","de":"Was machst du, wenn du alleine bist?","fr":"Que faites-vous quand vous êtes seul ?","es":"¿Qué haces cuando estás solo?"},"answers":[{"text":{"en":"Plan or think about goals","de":"Plane oder denke über Ziele nach","fr":"Planifier ou réfléchir aux objectifs","es":"Planear o pensar en objetivos"},"points":{"strategic":3}},{"text":{"en":"Daydream or create","de":"Tagträumen oder kreativ sein","fr":"Rêvasser ou créer","es":"Soñar despierto o crear"},"points":{"creative":3}},{"text":{"en":"Work or train","de":"Arbeiten oder trainieren","fr":"Travailler ou s'entraîner","es":"Trabajar o entrenar"},"points":{"driven":3}},{"text":{"en":"Reflect about life","de":"Über das Leben nachdenken","fr":"Réfléchir à la vie","es":"Reflexionar sobre la vida"},"points":{"reflective":3}}]},{"id":9,"text":{"en":"What annoys you most?","de":"Was nervt dich am meisten?","fr":"Qu'est-ce qui vous agace le plus ?","es":"¿Qué te molesta más?"},"answers":[{"text":{"en":"Chaos and inefficiency","de":"Chaos und Ineffizienz","fr":"Chaos et inefficacité","es":"Caos e ineficiencia"},"points":{"strategic":3}},{"text":{"en":"Being controlled","de":"Kontrolliert werden","fr":"Être contrôlé","es":"Ser controlado"},"points":{"independent":3}},{"text":{"en":"Wasted potential","de":"Verschwendetes Potenzial","fr":"Potentiel gaspillé","es":"Potencial desperdiciado"},"points":{"driven":3}},{"text":{"en":"Cold or distant people","de":"Kalte oder distanzierte Menschen","fr":"Personnes froides ou distantes","es":"Personas frías o distantes"},"points":{"social":3}}]},{"id":10,"text":{"en":"What are you most proud of?","de":"Worauf bist du am meisten stolz?","fr":"De quoi êtes-vous le plus fier ?","es":"¿De qué estás más orgulloso?"},"answers":[{"text":{"en":"My intelligence","de":"Meine Intelligenz","fr":"Mon intelligence","es":"Mi inteligencia"},"points":{"strategic":2,"reflective":1}},{"text":{"en":"My creativity","de":"Meine Kreativität","fr":"Ma créativité","es":"Mi creatividad"},"points":{"creative":3}},{"text":{"en":"My discipline","de":"Meine Disziplin","fr":"Ma discipline","es":"Mi disciplina"},"points":{"driven":3}},{"text":{"en":"My kindness","de":"Meine Freundlichkeit","fr":"Ma gentillesse","es":"Mi amabilidad"},"points":{"social":3}}]}],"types":{"The Strategist":{"dominant":"strategic","description":{"en":"You are a long-term thinker. You like systems, plans and logic. You want to build something stable and powerful.","de":"Du bist ein langfristiger Denker. Du magst Systeme, Pläne und Logik. Du willst etwas Stabiles und Mächtiges aufbauen.","fr":"Vous êtes un penseur à long terme. Vous aimez les systèmes, les plans et la logique. Vous voulez construire quelque chose de stable et puissant.","es":"Eres un pensador a largo plazo. Te gustan los sistemas, los planes y la lógica. Quieres construir algo estable y poderoso."},"strengths":{"en":["Planning","Problem-solving","Discipline"],"de":["Planung","Problemlösung","Disziplin"],"fr":["Planification","Résolution de problèmes","Discipline"],"es":["Planificación","Resolución de problemas","Disciplina"]},"weaknesses":{"en":["Overthinking","Rigidity","Emotional distance"],"de":["Überdenken","Starrheit","Emotionale Distanz"],"fr":["Surréflexion","Rigidité","Distance émotionnelle"],"es":["Pensar demasiado","Rigidez","Distancia emocional"]},"lifeFocus":{"en":"Building security and success through structure.","de":"Sicherheit und Erfolg durch Struktur aufbauen.","fr":"Construire la sécurité et le succès par la structure.","es":"Construir seguridad y éxito a través de la estructura."}},"The Dreamer":{"dominant":"creative","description":{"en":"You live in ideas, imagination and emotions. You want meaning, not just money.","de":"Du lebst in Ideen, Fantasie und Emotionen. Du willst Bedeutung, nicht nur Geld.","fr":"Vous vivez dans les idées, l'imagination et les émotions. Vous voulez du sens, pas seulement de l'argent.","es":"Vives en ideas, imaginación y emociones. Quieres significado, no solo dinero."},"strengths":{"en":["Creativity","Vision","Empathy"],"de":["Kreativität","Vision","Empathie"],"fr":["Créativité","Vision","Empathie"],"es":["Creatividad","Visión","Empatía"]},"weaknesses":{"en":["Lack of structure","Over-sensitivity","Distraction"],"de":["Mangel an Struktur","Überempfindlichkeit","Ablenkung"],"fr":["Manque de structure","Hypersensibilité","Distraction"],"es":["Falta de estructura","Hipersensibilidad","Distracción"]},"lifeFocus":{"en":"Expressing yourself and finding purpose.","de":"Sich selbst ausdrücken und Sinn finden.","fr":"S'exprimer et trouver un but.","es":"Expresarte y encontrar propósito."}},"The Warrior":{"dominant":"driven","description":{"en":"You are ambitious, competitive and determined. You want to win.","de":"Du bist ehrgeizig, wettbewerbsorientiert und entschlossen. Du willst gewinnen.","fr":"Vous êtes ambitieux, compétitif et déterminé. Vous voulez gagner.","es":"Eres ambicioso, competitivo y determinado. Quieres ganar."},"strengths":{"en":["Discipline","Resilience","Leadership"],"de":["Disziplin","Widerstandsfähigkeit","Führung"],"fr":["Discipline","Résilience","Leadership"],"es":["Disciplina","Resiliencia","Liderazgo"]},"weaknesses":{"en":["Burnout","Impatience","Workaholism"],"de":["Burnout","Ungeduld","Workaholism"],"fr":["Épuisement","Impatience","Workaholisme"],"es":["Agotamiento","Impaciencia","Adicción al trabajo"]},"lifeFocus":{"en":"Achieving greatness through effort.","de":"Größe durch Anstrengung erreichen.","fr":"Atteindre la grandeur par l'effort.","es":"Lograr grandeza a través del esfuerzo."}},"The Connector":{"dominant":"social","description":{"en":"You thrive on relationships and emotions. You want to feel close to others.","de":"Du blühst in Beziehungen und Emotionen auf. Du willst anderen nahe sein.","fr":"Vous vous épanouissez dans les relations et les émotions. Vous voulez vous sentir proche des autres.","es":"Prosperas en relaciones y emociones. Quieres sentirte cerca de los demás."},"strengths":{"en":["Communication","Empathy","Loyalty"],"de":["Kommunikation","Empathie","Loyalität"],"fr":["Communication","Empathie","Loyauté"],"es":["Comunicación","Empatía","Lealtad"]},"weaknesses":{"en":["Dependence","Fear of conflict"],"de":["Abhängigkeit","Angst vor Konflikten"],"fr":["Dépendance","Peur du conflit"],"es":["Dependencia","Miedo al conflicto"]},"lifeFocus":{"en":"Building strong bonds.","de":"Starke Bindungen aufbauen.","fr":"Construire des liens solides.","es":"Construir lazos fuertes."}},"The Lone Wolf":{"dominant":"independent","description":{"en":"You value freedom above everything. You want to live on your own terms.","de":"Du schätzt Freiheit über alles. Du willst nach deinen eigenen Regeln leben.","fr":"Vous valorisez la liberté par-dessus tout. Vous voulez vivre selon vos propres termes.","es":"Valoras la libertad por encima de todo. Quieres vivir según tus propias reglas."},"strengths":{"en":["Self-reliance","Courage","Originality"],"de":["Selbstständigkeit","Mut","Originalität"],"fr":["Autonomie","Courage","Originalité"],"es":["Autosuficiencia","Coraje","Originalidad"]},"weaknesses":{"en":["Isolation","Stubbornness"],"de":["Isolation","Sturheit"],"fr":["Isolement","Obstination"],"es":["Aislamiento","Terquedad"]},"lifeFocus":{"en":"Living freely and authentically.","de":"Frei und authentisch leben.","fr":"Vivre librement et authentiquement.","es":"Vivir libre y auténticamente."}},"The Philosopher":{"dominant":"reflective","description":{"en":"You think deeply about life, emotions and meaning.","de":"Du denkst tief über Leben, Emotionen und Bedeutung nach.","fr":"Vous réfléchissez profondément à la vie, aux émotions et au sens.","es":"Piensas profundamente sobre la vida, las emociones y el significado."},"strengths":{"en":["Insight","Self-awareness","Depth"],"de":["Einsicht","Selbstbewusstsein","Tiefe"],"fr":["Perspicacité","Conscience de soi","Profondeur"],"es":["Perspicacia","Autoconciencia","Profundidad"]},"weaknesses":{"en":["Overthinking","Melancholy"],"de":["Überdenken","Melancholie"],"fr":["Surréflexion","Mélancolie"],"es":["Pensar demasiado","Melancolía"]},"lifeFocus":{"en":"Understanding yourself and the world.","de":"Dich selbst und die Welt verstehen.","fr":"Vous comprendre vous-même et le monde.","es":"Entenderte a ti mismo y al mundo."}}}};

// Change language
function changeLanguage() {
    currentLanguage = document.getElementById('languageSelect').value;
    localStorage.setItem('language', currentLanguage);
    updateUILanguage();
    
    // Refresh question if in test
    if (document.getElementById('questionContainer').style.display === 'block') {
        showQuestion();
    }
}

// Update UI with current language
function updateUILanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update next button text based on question
    if (currentQuestion === (testData?.questions?.length || 10) - 1) {
        document.getElementById('nextBtn').setAttribute('data-i18n', 'showResultButton');
        document.getElementById('nextBtn').textContent = t('showResultButton');
    } else {
        document.getElementById('nextBtn').setAttribute('data-i18n', 'nextButton');
        document.getElementById('nextBtn').textContent = t('nextButton');
    }
}

// Get translated text
function t(key) {
    return translations[currentLanguage]?.[key] || key;
}

// Theme toggle function
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update button appearance based on theme
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

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('language') || 'de';
    currentLanguage = savedLanguage;
    document.getElementById('languageSelect').value = savedLanguage;
    
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

function startTest() {
    if (!testData) {
        alert('Test data is still loading. Please wait a moment.');
        return;
    }
    
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('questionContainer').style.display = 'block';
    currentQuestion = 0;
    answers = {};
    scores = {
        strategic: 0,
        creative: 0,
        driven: 0,
        social: 0,
        independent: 0,
        reflective: 0
    };
    showQuestion();
}

function showQuestion() {
    if (!testData || !testData.questions) {
        console.error('Test data not available');
        return;
    }

    const question = testData.questions[currentQuestion];
    const totalQuestions = testData.questions.length;

    // Update progress
    const progressText = t('questionOf')
        .replace('{current}', currentQuestion + 1)
        .replace('{total}', totalQuestions);
    document.getElementById('progressText').textContent = progressText;
    document.getElementById('progressFill').style.width = `${((currentQuestion + 1) / totalQuestions) * 100}%`;

    // Update question text
    document.getElementById('questionText').textContent = question.text[currentLanguage] || question.text.en;

    // Create answer buttons
    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer.text[currentLanguage] || answer.text.en;
        btn.onclick = () => selectAnswer(index);
        
        if (answers[currentQuestion] === index) {
            btn.classList.add('selected');
        }
        
        answersContainer.appendChild(btn);
    });

    // Update navigation buttons
    document.getElementById('prevBtn').style.display = currentQuestion > 0 ? 'block' : 'none';
    
    if (currentQuestion === totalQuestions - 1) {
        document.getElementById('nextBtn').setAttribute('data-i18n', 'showResultButton');
        document.getElementById('nextBtn').textContent = t('showResultButton');
    } else {
        document.getElementById('nextBtn').setAttribute('data-i18n', 'nextButton');
        document.getElementById('nextBtn').textContent = t('nextButton');
    }
    
    document.getElementById('nextBtn').disabled = answers[currentQuestion] === undefined;
}

function selectAnswer(answerIndex) {
    answers[currentQuestion] = answerIndex;
    
    // Update visual selection
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach((btn, idx) => {
        btn.classList.toggle('selected', idx === answerIndex);
    });

    // Enable next button
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    const question = testData.questions[currentQuestion];
    const selectedAnswer = question.answers[answers[currentQuestion]];

    // Add points to scores
    for (const [scale, points] of Object.entries(selectedAnswer.points)) {
        scores[scale] += points;
    }

    if (currentQuestion < testData.questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        // Subtract points from previous answer
        const prevQuestion = testData.questions[currentQuestion];
        const prevAnswer = prevQuestion.answers[answers[currentQuestion]];
        if (prevAnswer && prevAnswer.points) {
            for (const [scale, points] of Object.entries(prevAnswer.points)) {
                scores[scale] -= points;
            }
        }

        currentQuestion--;
        showQuestion();
    }
}

function showResults() {
    // Find dominant trait
    let maxScore = 0;
    let dominantTrait = '';
    
    for (const [trait, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            dominantTrait = trait;
        }
    }

    // Find matching type
    let resultType = null;
    for (const [typeName, typeData] of Object.entries(testData.types)) {
        if (typeData.dominant === dominantTrait) {
            resultType = { name: typeName, ...typeData };
            break;
        }
    }

    if (!resultType) {
        console.error('No matching type found');
        return;
    }

    // Display results
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'block';

    document.getElementById('resultType').textContent = resultType.name;
    document.getElementById('resultDescription').textContent = 
        resultType.description[currentLanguage] || resultType.description.en;

    const strengthsList = document.getElementById('resultStrengths');
    strengthsList.innerHTML = '';
    const strengths = resultType.strengths[currentLanguage] || resultType.strengths.en;
    strengths.forEach(strength => {
        const li = document.createElement('li');
        li.textContent = strength;
        strengthsList.appendChild(li);
    });

    const weaknessesList = document.getElementById('resultWeaknesses');
    weaknessesList.innerHTML = '';
    const weaknesses = resultType.weaknesses[currentLanguage] || resultType.weaknesses.en;
    weaknesses.forEach(weakness => {
        const li = document.createElement('li');
        li.textContent = weakness;
        weaknessesList.appendChild(li);
    });

    const lifeFocus = resultType.lifeFocus[currentLanguage] || resultType.lifeFocus.en;
    document.getElementById('resultFocus').textContent = `🎯 ${lifeFocus}`;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function restartTest() {
    document.getElementById('resultScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
    currentQuestion = 0;
    answers = {};
    scores = {
        strategic: 0,
        creative: 0,
        driven: 0,
        social: 0,
        independent: 0,
        reflective: 0
    };
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
