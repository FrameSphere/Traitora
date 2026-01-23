# 🧠 Traitora - Adaptiver Persönlichkeitstest

Ein wissenschaftlich fundierter, adaptiver Persönlichkeitstest basierend auf **Item Response Theory (IRT)**.

## 🎯 Was ist Traitora?

Traitora ist ein moderner Persönlichkeitstest, der sich **intelligent an deine Antworten anpasst**. Anders als statische Tests mit fixen Fragen wählt Traitora gezielt die Fragen aus, die den höchsten Informationsgewinn für dein Persönlichkeitsprofil bringen.

### Wissenschaftlicher Hintergrund

Der Test basiert auf:
- **Item Response Theory (IRT)** - 2PL Model
- **Adaptive Testing** - wie bei modernen IQ-Tests
- **Informationsgewinn-Maximierung**
- **Bayesian Updates** für Trait-Schätzungen

## ⚡ Features

- ✅ **Adaptive Fragenauswahl** - intelligenter Algorithmus
- ✅ **Effizient** - präzise Ergebnisse in minimaler Zeit
- ✅ **Multi-dimensional** - misst mehrere Persönlichkeits-Traits gleichzeitig
- ✅ **Dynamische Testlänge** - endet bei ausreichender Präzision
- ✅ **4 Sprachen** - Deutsch, Englisch, Französisch, Spanisch
- ✅ **Dark/Light Mode**
- ✅ **SEO-optimiert** - alle Sprachen
- ✅ **Responsive Design** - funktioniert auf allen Geräten

## 📁 Projektstruktur

```
traitora/
├── index.html                  # Hauptseite
├── style.css                   # Styling (identisch zu personality test)
├── js/
│   ├── translations.js         # Übersetzungen für alle Sprachen
│   ├── question-pool.js        # ⚡ Fragenpool (HIER FRAGEN HINZUFÜGEN)
│   ├── adaptive-engine.js      # Adaptiver Algorithmus
│   └── main.js                 # Haupt-App-Logik
├── assets/
│   └── favicon.svg             # Icon
├── impressum.html              # Impressum
├── datenschutz.html            # Datenschutz
├── sitemap.xml                 # SEO Sitemap
├── robots.txt                  # Robots
├── _headers                    # Cloudflare Headers
└── _redirects                  # Cloudflare Redirects
```

## 🔧 Wie funktioniert der Algorithmus?

### 1. Initialization
```javascript
// Alle Traits starten bei 0 (neutral) mit hoher Unsicherheit
traitEstimates = { analytical: 0.0, creative: 0.0, ... }
traitVariances = { analytical: 1.0, creative: 1.0, ... }
```

### 2. Fragenauswahl
Der Algorithmus berechnet für jede Frage einen Score:
```javascript
Score = Unsicherheit × Discrimination × Novelty
```
- **Unsicherheit**: Wie unsicher sind wir über diesen Trait?
- **Discrimination**: Wie gut unterscheidet die Frage?
- **Novelty**: Wurde dieser Trait schon oft gemessen?

### 3. Update nach jeder Antwort
```javascript
// Bayesian Update
newEstimate = currentEstimate + (answer - currentEstimate) × weight
newVariance = currentVariance × (1 - weight × 0.5)
```

### 4. Abbruch
Test endet wenn:
- Mindestens 8 Fragen beantwortet UND
- Durchschnittliche Varianz < 0.3 (hohe Präzision) ODER
- 30 Fragen erreicht (Maximum)

## ➕ Neue Fragen hinzufügen

**Einfach in `js/question-pool.js` am Ende des Arrays hinzufügen:**

```javascript
{
  id: "Q011",  // Fortlaufende ID
  text: {
    de: "Deine Frage auf Deutsch?",
    en: "Your question in English?",
    fr: "Votre question en français?",
    es: "Tu pregunta en español?"
  },
  answers: [
    {
      text: {
        de: "Antwort 1",
        en: "Answer 1",
        fr: "Réponse 1",
        es: "Respuesta 1"
      },
      traits: {
        analytical: 0.9,      // +0.9 auf analytical
        impulsive: -0.6       // -0.6 auf impulsive
      }
    },
    // ... weitere Antworten (3-4 empfohlen)
  ],
  difficulty: 0.3,        // 0.0 = neutral, -1 bis +1
  discrimination: 1.2,    // Wie gut unterscheidet die Frage (0.5 - 2.0)
  reverse: false          // true bei Konsistenz-Checks
}
```

### Trait-Werte Richtlinien:
- **-1.0 bis +1.0** - stärker ist selten nötig
- **0.7 - 0.9** - starke Ausprägung
- **0.4 - 0.6** - moderate Ausprägung
- **0.1 - 0.3** - schwache Ausprägung
- **Negative Werte** - gegenteiliges Verhalten

## 🎨 UI-Anpassungen

Das UI ist **identisch** mit dem `personality test` - alle Styles funktionieren gleich.

Zusätzliche Elemente für Traitora:
- **Konfidenz-Anzeige** - zeigt Profil-Schärfe
- **Trait-Cards** - visualisieren einzelne Traits
- **Feature-Highlights** - auf Start-Screen

## 📊 Gemessene Traits

Aktuell implementiert (einfach erweiterbar):
1. **Analytical** - Analytisches Denken
2. **Impulsive** - Impulsivität
3. **Social** - Soziale Orientierung
4. **Independent** - Unabhängigkeit
5. **Emotionally Stable** - Emotionale Stabilität
6. **Organized** - Organisiertheit
7. **Creative** - Kreativität
8. **Empathic** - Empathie
9. **Ambitious** - Ehrgeiz
10. **Risk-Taking** - Risikobereitschaft

## 🚀 Deployment

### Cloudflare Pages
1. Verbinde dein Git Repository
2. Build-Einstellungen:
   - **Build command**: (leer)
   - **Build output**: `/`
3. Fertig! ✅

### Lokales Testen
```bash
# Einfach einen lokalen Server starten:
python -m http.server 8000
# oder
npx serve
```

## 🔍 SEO-Optimierung

- ✅ **Mehrsprachige Meta-Tags** - DE, EN, FR, ES
- ✅ **Schema.org Markup** - Structured Data
- ✅ **Open Graph** - Social Media Previews
- ✅ **Sitemap.xml** - für alle Sprachen
- ✅ **Canonical URLs** - Duplicate Content vermeiden
- ✅ **Alt-Tags** - falls Bilder hinzugefügt werden

## 📝 Lizenz & Credits

- **Entwickelt von**: FrameSphere
- **Algorithmus basiert auf**: Item Response Theory (IRT)
- **UI inspiriert von**: personality test (eigenes Projekt)

## 🆘 Troubleshooting

### Fragen werden nicht geladen
→ Prüfe Browser Console auf Fehler in `question-pool.js`

### Konfidenz steigt nicht
→ Stelle sicher, dass Fragen verschiedene Traits messen

### Test endet zu früh/spät
→ Passe `confidenceThreshold` in `adaptive-engine.js` an (aktuell: 0.3)

## 🎯 Nächste Schritte

1. **Mehr Fragen hinzufügen** - mindestens 30-50 für optimale Adaptation
2. **Neue Traits definieren** - erweitere `TRAIT_DEFINITIONS`
3. **Reverse Items** - füge mehr Konsistenz-Checks hinzu
4. **A/B Testing** - teste verschiedene Schwellenwerte
5. **Datenanalyse** - sammle Nutzer-Feedback

---

**Viel Erfolg mit Traitora!** 🚀
