# ⚡ Quick Start: Fragen hinzufügen

## 🎯 In 3 Schritten zur neuen Frage

### Schritt 1: Öffne `js/question-pool.js`

Scrolle zum Ende des `QUESTION_POOL` Arrays (vor dem schließenden `]`).

### Schritt 2: Kopiere diese Vorlage

```javascript
{
  id: "Q011",  // ⚠️ WICHTIG: Fortlaufende Nummer!
  text: {
    de: "Deine Frage auf Deutsch?",
    en: "Your question in English?",
    fr: "Votre question en français?",
    es: "Tu pregunta en español?"
  },
  answers: [
    {
      text: {
        de: "Antwort 1 (Deutsch)",
        en: "Answer 1 (English)",
        fr: "Réponse 1 (French)",
        es: "Respuesta 1 (Spanish)"
      },
      traits: {
        trait_name: 0.8  // Siehe Trait-Liste unten
      }
    },
    {
      text: {
        de: "Antwort 2 (Deutsch)",
        en: "Answer 2 (English)",
        fr: "Réponse 2 (French)",
        es: "Respuesta 2 (Spanish)"
      },
      traits: {
        other_trait: 0.7
      }
    },
    {
      text: {
        de: "Antwort 3 (Deutsch)",
        en: "Answer 3 (English)",
        fr: "Réponse 3 (French)",
        es: "Respuesta 3 (Spanish)"
      },
      traits: {
        another_trait: 0.9
      }
    }
    // Optional: 4. Antwort hinzufügen
  ],
  difficulty: 0.0,      // -1.0 bis +1.0, meist 0.0
  discrimination: 1.0,   // 0.5 bis 2.0, meist 1.0-1.3
  reverse: false        // true nur bei Konsistenz-Checks
},
```

### Schritt 3: Füge ein Komma hinzu!

⚠️ **WICHTIG:** Vergiss nicht das Komma nach der vorigen Frage:

```javascript
// ❌ FALSCH (fehlendes Komma):
  }
  // ... nächste Frage
]

// ✅ RICHTIG (mit Komma):
  },  // ← KOMMA!
  {
    id: "Q011",
    // ...
  }
]
```

## 📝 Verfügbare Traits

Verwende diese Trait-Namen in `traits: { ... }`:

| Trait | Bedeutung | Beispiel-Wert |
|-------|-----------|---------------|
| `analytical` | Analytisches Denken | 0.9 = sehr analytisch |
| `impulsive` | Impulsivität | 0.8 = impulsiv, -0.7 = bedacht |
| `social` | Soziale Orientierung | 0.7 = kontaktfreudig |
| `independent` | Unabhängigkeit | 0.9 = sehr eigenständig |
| `emotionally_stable` | Emotionale Stabilität | 0.8 = ausgeglichen |
| `organized` | Organisiertheit | 0.9 = sehr strukturiert |
| `creative` | Kreativität | 0.8 = kreativ, innovativ |
| `empathic` | Empathie | 0.9 = sehr einfühlsam |
| `ambitious` | Ehrgeiz | 0.8 = zielorientiert |
| `risk_taking` | Risikobereitschaft | 0.7 = risikofreudig |

### Trait-Werte Bedeutung:

```
+0.9 bis +1.0  → Sehr starke Ausprägung
+0.6 bis +0.8  → Starke Ausprägung
+0.3 bis +0.5  → Moderate Ausprägung
+0.1 bis +0.2  → Schwache Ausprägung
 0.0           → Neutral (keine Messung)
-0.1 bis -0.2  → Schwach gegenteilig
-0.3 bis -0.5  → Moderat gegenteilig
-0.6 bis -0.8  → Stark gegenteilig
-0.9 bis -1.0  → Sehr stark gegenteilig
```

## 💡 Fragen-Typen

### Typ 1: Screening-Frage (breiter Einstieg)

```javascript
{
  id: "Q050",
  text: {
    de: "Wie gehst du an neue Herausforderungen heran?",
    en: "How do you approach new challenges?",
    // ...
  },
  answers: [
    {
      text: { de: "Ich plane jeden Schritt genau", en: "I plan every step", /* ... */ },
      traits: { analytical: 0.8, organized: 0.7 }
    },
    {
      text: { de: "Ich probiere einfach aus", en: "I just try it", /* ... */ },
      traits: { impulsive: 0.8, risk_taking: 0.6 }
    },
    {
      text: { de: "Ich hole mir erst Rat", en: "I ask for advice first", /* ... */ },
      traits: { social: 0.7, cautious: 0.5 }
    }
  ],
  difficulty: 0.0,      // Neutral
  discrimination: 1.0,   // Standard
  reverse: false
},
```

### Typ 2: Vertiefungs-Frage (spezifisch)

```javascript
{
  id: "Q051",
  text: {
    de: "Bei wichtigen Entscheidungen verlasse ich mich auf:",
    en: "For important decisions, I rely on:",
    // ...
  },
  answers: [
    {
      text: { de: "Logik und Fakten", en: "Logic and facts", /* ... */ },
      traits: { analytical: 0.9, rational: 0.8 }
    },
    {
      text: { de: "Mein Bauchgefühl", en: "My gut feeling", /* ... */ },
      traits: { intuitive: 0.9, emotional: 0.6 }
    }
  ],
  difficulty: 0.4,      // Leicht schwieriger
  discrimination: 1.3,   // Gute Trennung
  reverse: false
},
```

### Typ 3: Reverse Item (Konsistenz-Check)

```javascript
{
  id: "Q052",
  text: {
    de: "Ich bin immer pünktlich.",
    en: "I am always punctual.",
    // ...
  },
  answers: [
    {
      text: { de: "Stimme voll zu", en: "Strongly agree", /* ... */ },
      traits: { honesty_check: -0.8 }  // Unrealistisch
    },
    {
      text: { de: "Stimme zu", en: "Agree", /* ... */ },
      traits: { honesty_check: -0.4 }
    },
    {
      text: { de: "Teils teils", en: "Neutral", /* ... */ },
      traits: { honesty_check: 0.5 }
    },
    {
      text: { de: "Stimme nicht zu", en: "Disagree", /* ... */ },
      traits: { honesty_check: 0.8 }  // Realistisch
    }
  ],
  difficulty: 0.0,
  discrimination: 0.5,   // Niedrig für Reverse Items
  reverse: true         // ⚠️ WICHTIG!
},
```

## ✅ Checkliste vor dem Speichern

- [ ] ID ist fortlaufend (Q001, Q002, Q003, ...)
- [ ] Alle 4 Sprachen ausgefüllt (de, en, fr, es)
- [ ] Mindestens 3 Antworten (besser 4)
- [ ] Traits verwenden existierende Namen (siehe Liste oben)
- [ ] Trait-Werte zwischen -1.0 und +1.0
- [ ] Komma nach der Frage nicht vergessen
- [ ] `reverse: true` nur bei Konsistenz-Checks

## 🐛 Häufige Fehler

### ❌ Fehler 1: Komma vergessen
```javascript
  }  // ← Fehlt Komma!
  {
    id: "Q011",
```

### ❌ Fehler 2: Unbekannter Trait
```javascript
traits: {
  super_smart: 0.9  // ❌ Existiert nicht!
}
```
→ **Lösung:** Verwende `analytical: 0.9`

### ❌ Fehler 3: Trait-Wert zu hoch
```javascript
traits: {
  analytical: 1.5  // ❌ Maximum ist 1.0!
}
```

### ❌ Fehler 4: Sprache fehlt
```javascript
text: {
  de: "Frage",
  en: "Question"
  // ❌ fr und es fehlen!
}
```

## 🎨 Neue Traits hinzufügen

Wenn du einen **völlig neuen** Trait messen willst:

### 1. Definiere in `question-pool.js` am Ende:

```javascript
// In TRAIT_DEFINITIONS:
new_trait_name: {
  name: {
    de: "Neuer Trait Name",
    en: "New Trait Name",
    fr: "Nouveau Nom de Trait",
    es: "Nuevo Nombre de Rasgo"
  },
  description: {
    de: "Beschreibung des Traits",
    en: "Trait description",
    fr: "Description du trait",
    es: "Descripción del rasgo"
  }
}
```

### 2. Initialisiere in `adaptive-engine.js`:

Der Trait wird automatisch initialisiert! ✅

### 3. Verwende in Fragen:

```javascript
traits: {
  new_trait_name: 0.8
}
```

## 📞 Support

Bei Problemen:
1. Browser Console öffnen (F12)
2. Nach Fehlermeldungen suchen
3. Häufigster Fehler: Syntax (fehlendes Komma, Klammer, etc.)

**Tipp:** Nutze einen JSON Validator online, um Syntax zu prüfen!

---

**Happy Question Building!** 🚀
