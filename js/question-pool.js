const QUESTION_POOL = [
  {
    id: "Q001",
    text: {
      de: "Wie triffst du normalerweise wichtige Entscheidungen?",
      en: "How do you usually make important decisions?",
      fr: "Comment prenez-vous généralement des décisions importantes?",
      es: "¿Cómo tomas generalmente decisiones importantes?"
    },
    answers: [
      {
        text: {
          de: "Ich analysiere alle Optionen logisch und systematisch",
          en: "I analyze all options logically and systematically",
          fr: "J'analyse toutes les options logiquement et systématiquement",
          es: "Analizo todas las opciones lógica y sistemáticamente"
        },
        traits: {
          analytical: 0.9,
          impulsive: -0.6,
          emotional: -0.4
        }
      },
      {
        text: {
          de: "Ich folge meinem Bauchgefühl",
          en: "I follow my gut feeling",
          fr: "Je suis mon instinct",
          es: "Sigo mi intuición"
        },
        traits: {
          impulsive: 0.8,
          analytical: -0.5,
          emotional: 0.4
        }
      },
      {
        text: {
          de: "Ich frage andere um Rat",
          en: "I ask others for advice",
          fr: "Je demande conseil aux autres",
          es: "Pido consejo a otros"
        },
        traits: {
          social: 0.7,
          independent: -0.6,
          collaborative: 0.8
        }
      },
      {
        text: {
          de: "Ich handle schnell und passe bei Bedarf an",
          en: "I act quickly and adjust if needed",
          fr: "J'agis rapidement et j'ajuste si nécessaire",
          es: "Actúo rápidamente y ajusto si es necesario"
        },
        traits: {
          impulsive: 0.7,
          flexible: 0.8,
          analytical: -0.4
        }
      }
    ],
    difficulty: 0.0,
    discrimination: 1.0,
    reverse: false
  },

  {
    id: "Q002",
    text: {
      de: "Was motiviert dich am meisten im Leben?",
      en: "What motivates you most in life?",
      fr: "Qu'est-ce qui vous motive le plus dans la vie?",
      es: "¿Qué te motiva más en la vida?"
    },
    answers: [
      {
        text: {
          de: "Erfolg und Anerkennung erreichen",
          en: "Achieving success and recognition",
          fr: "Atteindre le succès et la reconnaissance",
          es: "Lograr éxito y reconocimiento"
        },
        traits: {
          ambitious: 0.9,
          competitive: 0.7,
          achievement_oriented: 0.9
        }
      },
      {
        text: {
          de: "Anderen Menschen helfen",
          en: "Helping other people",
          fr: "Aider les autres",
          es: "Ayudar a otras personas"
        },
        traits: {
          empathic: 0.9,
          altruistic: 0.9,
          social: 0.7
        }
      },
      {
        text: {
          de: "Freiheit und Unabhängigkeit",
          en: "Freedom and independence",
          fr: "Liberté et indépendance",
          es: "Libertad e independencia"
        },
        traits: {
          independent: 0.9,
          autonomous: 0.9,
          rule_averse: 0.5
        }
      },
      {
        text: {
          de: "Neues lernen und mich entwickeln",
          en: "Learning new things and developing myself",
          fr: "Apprendre de nouvelles choses et me développer",
          es: "Aprender cosas nuevas y desarrollarme"
        },
        traits: {
          growth_oriented: 0.9,
          curious: 0.8,
          reflective: 0.7
        }
      }
    ],
    difficulty: 0.0,
    discrimination: 1.2,
    reverse: false
  },

  {
    id: "Q003",
    text: {
      de: "Bei Problemen denke ich meistens:",
      en: "When facing problems, I usually think:",
      fr: "Face aux problèmes, je pense généralement:",
      es: "Ante problemas, generalmente pienso:"
    },
    answers: [
      {
        text: {
          de: "Was ist die logischste Lösung?",
          en: "What is the most logical solution?",
          fr: "Quelle est la solution la plus logique?",
          es: "¿Cuál es la solución más lógica?"
        },
        traits: {
          analytical: 0.9,
          systematic: 0.8,
          rational: 0.9
        }
      },
      {
        text: {
          de: "Wie fühle ich mich dabei?",
          en: "How do I feel about it?",
          fr: "Comment je me sens par rapport à cela?",
          es: "¿Cómo me siento al respecto?"
        },
        traits: {
          emotional: 0.9,
          intuitive: 0.7,
          analytical: -0.6
        }
      },
      {
        text: {
          de: "Was würden andere tun?",
          en: "What would others do?",
          fr: "Que feraient les autres?",
          es: "¿Qué harían otros?"
        },
        traits: {
          social: 0.7,
          consensus_seeking: 0.8,
          independent: -0.7
        }
      },
      {
        text: {
          de: "Lass es mich einfach ausprobieren!",
          en: "Let me just try it!",
          fr: "Laissez-moi juste essayer!",
          es: "¡Déjame intentarlo!"
        },
        traits: {
          impulsive: 0.8,
          action_oriented: 0.9,
          risk_taking: 0.7
        }
      }
    ],
    difficulty: 0.3,
    discrimination: 1.3,
    reverse: false
  },

  {
    id: "Q004",
    text: {
      de: "In einer Gruppe bin ich meistens:",
      en: "In a group, I am usually:",
      fr: "Dans un groupe, je suis généralement:",
      es: "En un grupo, normalmente soy:"
    },
    answers: [
      {
        text: {
          de: "Der Organisator und Koordinator",
          en: "The organizer and coordinator",
          fr: "L'organisateur et coordinateur",
          es: "El organizador y coordinador"
        },
        traits: {
          leadership: 0.9,
          organized: 0.8,
          social: 0.6
        }
      },
      {
        text: {
          de: "Der kreative Ideengeber",
          en: "The creative idea generator",
          fr: "Le générateur d'idées créatives",
          es: "El generador de ideas creativas"
        },
        traits: {
          creative: 0.9,
          innovative: 0.9,
          visionary: 0.7
        }
      },
      {
        text: {
          de: "Der Zuhörer und Vermittler",
          en: "The listener and mediator",
          fr: "L'auditeur et médiateur",
          es: "El oyente y mediador"
        },
        traits: {
          empathic: 0.9,
          diplomatic: 0.8,
          social: 0.8
        }
      },
      {
        text: {
          de: "Lieber für mich alleine",
          en: "Preferably on my own",
          fr: "De préférence seul",
          es: "Preferiblemente solo"
        },
        traits: {
          independent: 0.9,
          introverted: 0.8,
          social: -0.8
        }
      }
    ],
    difficulty: 0.2,
    discrimination: 1.1,
    reverse: false
  },

  {
    id: "Q005",
    text: {
      de: "Wenn etwas schiefgeht, reagiere ich:",
      en: "When something goes wrong, I react:",
      fr: "Quand quelque chose ne va pas, je réagis:",
      es: "Cuando algo sale mal, reacciono:"
    },
    answers: [
      {
        text: {
          de: "Ruhig und analysiere die Situation",
          en: "Calmly and analyze the situation",
          fr: "Calmement et j'analyse la situation",
          es: "Con calma y analizo la situación"
        },
        traits: {
          emotionally_stable: 0.9,
          rational: 0.8,
          stress_resistant: 0.9
        }
      },
      {
        text: {
          de: "Ich bin zunächst frustriert oder gestresst",
          en: "I'm initially frustrated or stressed",
          fr: "Je suis d'abord frustré ou stressé",
          es: "Inicialmente estoy frustrado o estresado"
        },
        traits: {
          emotionally_stable: -0.7,
          stress_sensitive: 0.8,
          reactive: 0.7
        }
      },
      {
        text: {
          de: "Ich suche sofort nach Lösungen",
          en: "I immediately look for solutions",
          fr: "Je cherche immédiatement des solutions",
          es: "Busco soluciones inmediatamente"
        },
        traits: {
          action_oriented: 0.9,
          problem_solver: 0.9,
          proactive: 0.8
        }
      },
      {
        text: {
          de: "Ich hole mir Unterstützung von anderen",
          en: "I get support from others",
          fr: "Je cherche du soutien auprès des autres",
          es: "Busco apoyo de otros"
        },
        traits: {
          collaborative: 0.8,
          support_seeking: 0.9,
          social: 0.7
        }
      }
    ],
    difficulty: 0.4,
    discrimination: 1.2,
    reverse: false
  },

  {
    id: "Q006",
    text: {
      de: "Bei neuen Gelegenheiten:",
      en: "With new opportunities:",
      fr: "Avec de nouvelles opportunités:",
      es: "Ante nuevas oportunidades:"
    },
    answers: [
      {
        text: {
          de: "Springe ich sofort rein!",
          en: "I jump right in!",
          fr: "Je me lance immédiatement!",
          es: "¡Me lanzo directamente!"
        },
        traits: {
          impulsive: 0.9,
          risk_taking: 0.8,
          adventurous: 0.9
        }
      },
      {
        text: {
          de: "Ich überlege erst sorgfältig",
          en: "I think carefully first",
          fr: "Je réfléchis d'abord soigneusement",
          es: "Primero pienso cuidadosamente"
        },
        traits: {
          cautious: 0.9,
          reflective: 0.8,
          impulsive: -0.8
        }
      },
      {
        text: {
          de: "Ich teste es erstmal im Kleinen",
          en: "I test it on a small scale first",
          fr: "Je le teste d'abord à petite échelle",
          es: "Primero lo pruebo a pequeña escala"
        },
        traits: {
          systematic: 0.7,
          risk_averse: 0.6,
          strategic: 0.8
        }
      },
      {
        text: {
          de: "Ich warte ab, was andere machen",
          en: "I wait to see what others do",
          fr: "J'attends de voir ce que font les autres",
          es: "Espero a ver qué hacen otros"
        },
        traits: {
          cautious: 0.8,
          risk_averse: 0.9,
          conformist: 0.7
        }
      }
    ],
    difficulty: 0.5,
    discrimination: 1.4,
    reverse: false
  },

  {
    id: "Q007",
    text: {
      de: "Meine Arbeitsweise ist eher:",
      en: "My way of working is rather:",
      fr: "Ma façon de travailler est plutôt:",
      es: "Mi forma de trabajar es más bien:"
    },
    answers: [
      {
        text: {
          de: "Strukturiert und geplant",
          en: "Structured and planned",
          fr: "Structurée et planifiée",
          es: "Estructurada y planificada"
        },
        traits: {
          organized: 0.9,
          disciplined: 0.9,
          systematic: 0.8
        }
      },
      {
        text: {
          de: "Flexibel und spontan",
          en: "Flexible and spontaneous",
          fr: "Flexible et spontanée",
          es: "Flexible y espontánea"
        },
        traits: {
          flexible: 0.9,
          spontaneous: 0.8,
          organized: -0.7
        }
      },
      {
        text: {
          de: "Chaotisch aber effektiv",
          en: "Chaotic but effective",
          fr: "Chaotique mais efficace",
          es: "Caótica pero efectiva"
        },
        traits: {
          creative: 0.7,
          unconventional: 0.8,
          organized: -0.8
        }
      },
      {
        text: {
          de: "Abhängig von meiner Stimmung",
          en: "Depends on my mood",
          fr: "Dépend de mon humeur",
          es: "Depende de mi estado de ánimo"
        },
        traits: {
          mood_dependent: 0.9,
          inconsistent: 0.7,
          emotionally_driven: 0.8
        }
      }
    ],
    difficulty: 0.3,
    discrimination: 1.2,
    reverse: false
  },

  {
    id: "Q008",
    text: {
      de: "Ich beschäftige mich gerne mit:",
      en: "I enjoy dealing with:",
      fr: "J'aime m'occuper de:",
      es: "Me gusta tratar con:"
    },
    answers: [
      {
        text: {
          de: "Abstrakten Ideen und Theorien",
          en: "Abstract ideas and theories",
          fr: "Idées abstraites et théories",
          es: "Ideas abstractas y teorías"
        },
        traits: {
          abstract_thinking: 0.9,
          intellectual: 0.9,
          creative: 0.7
        }
      },
      {
        text: {
          de: "Konkreten praktischen Aufgaben",
          en: "Concrete practical tasks",
          fr: "Tâches pratiques concrètes",
          es: "Tareas prácticas concretas"
        },
        traits: {
          practical: 0.9,
          down_to_earth: 0.8,
          abstract_thinking: -0.6
        }
      },
      {
        text: {
          de: "Künstlerischen Projekten",
          en: "Artistic projects",
          fr: "Projets artistiques",
          es: "Proyectos artísticos"
        },
        traits: {
          creative: 0.9,
          artistic: 0.9,
          expressive: 0.8
        }
      },
      {
        text: {
          de: "Technischen Problemen",
          en: "Technical problems",
          fr: "Problèmes techniques",
          es: "Problemas técnicos"
        },
        traits: {
          analytical: 0.8,
          logical: 0.9,
          technical: 0.9
        }
      }
    ],
    difficulty: 0.2,
    discrimination: 1.1,
    reverse: false
  },

  {
    id: "Q009",
    text: {
      de: "Ich lüge nie. (Ehrlichkeitsprüfung)",
      en: "I never lie. (Honesty check)",
      fr: "Je ne mens jamais. (Contrôle d'honnêteté)",
      es: "Nunca miento. (Control de honestidad)"
    },
    answers: [
      {
        text: {
          de: "Stimme voll zu",
          en: "Strongly agree",
          fr: "Tout à fait d'accord",
          es: "Totalmente de acuerdo"
        },
        traits: {
          honesty_check: -1.0
        }
      },
      {
        text: {
          de: "Stimme zu",
          en: "Agree",
          fr: "D'accord",
          es: "De acuerdo"
        },
        traits: {
          honesty_check: -0.7
        }
      },
      {
        text: {
          de: "Teils teils",
          en: "Somewhat",
          fr: "Un peu",
          es: "En parte"
        },
        traits: {
          honesty_check: 0.3
        }
      },
      {
        text: {
          de: "Stimme nicht zu",
          en: "Disagree",
          fr: "Pas d'accord",
          es: "No estoy de acuerdo"
        },
        traits: {
          honesty_check: 0.8
        }
      }
    ],
    difficulty: 0.0,
    discrimination: 0.5,
    reverse: true
  },

  {
    id: "Q010",
    text: {
      de: "Manchmal sage ich nicht die ganze Wahrheit.",
      en: "Sometimes I don't tell the whole truth.",
      fr: "Parfois je ne dis pas toute la vérité.",
      es: "A veces no digo toda la verdad."
    },
    answers: [
      {
        text: {
          de: "Stimme voll zu",
          en: "Strongly agree",
          fr: "Tout à fait d'accord",
          es: "Totalmente de acuerdo"
        },
        traits: {
          honesty_check: 0.9
        }
      },
      {
        text: {
          de: "Stimme zu",
          en: "Agree",
          fr: "D'accord",
          es: "De acuerdo"
        },
        traits: {
          honesty_check: 0.7
        }
      },
      {
        text: {
          de: "Teils teils",
          en: "Somewhat",
          fr: "Un peu",
          es: "En parte"
        },
        traits: {
          honesty_check: 0.3
        }
      },
      {
        text: {
          de: "Stimme nicht zu",
          en: "Disagree",
          fr: "Pas d'accord",
          es: "No estoy de acuerdo"
        },
        traits: {
          honesty_check: -0.8
        }
      }
    ],
    difficulty: 0.0,
    discrimination: 0.5,
    reverse: true
  },
  {
  id: "Q011",
  text: {
    de: "Wie gehst du an komplexe Probleme heran?",
    en: "How do you approach complex problems?",
    fr: "Comment abordez-vous les problèmes complexes ?",
    es: "¿Cómo abordas los problemas complejos?"
  },
  answers: [
    {
      text: {
        de: "Ich zerlege sie in einzelne logische Schritte",
        en: "I break them down into logical steps",
        fr: "Je les décompose en étapes logiques",
        es: "Los divido en pasos lógicos"
      },
      traits: {
        analytical: 0.8,
        organized: 0.4,
        impulsive: -0.5
      }
    },
    {
      text: {
        de: "Ich folge meinem ersten Impuls",
        en: "I follow my first instinct",
        fr: "Je suis mon premier instinct",
        es: "Sigo mi primer impulso"
      },
      traits: {
        impulsive: 0.8,
        analytical: -0.6,
        risk_taking: 0.3
      }
    },
    {
      text: {
        de: "Ich bespreche es mit anderen",
        en: "I discuss it with others",
        fr: "J'en discute avec d'autres",
        es: "Lo hablo con otras personas"
      },
      traits: {
        social: 0.6,
        empathic: 0.4,
        independent: -0.3
      }
    }
  ]
},

{
  id: "Q012",
  text: {
    de: "Wie reagierst du, wenn sich Pläne spontan ändern?",
    en: "How do you react when plans change spontaneously?",
    fr: "Comment réagissez-vous lorsque les plans changent spontanément ?",
    es: "¿Cómo reaccionas cuando los planes cambian espontáneamente?"
  },
  answers: [
    {
      text: {
        de: "Ich passe mich schnell an",
        en: "I adapt quickly",
        fr: "Je m'adapte rapidement",
        es: "Me adapto rápidamente"
      },
      traits: {
        emotionally_stable: 0.6,
        risk_taking: 0.3,
        organized: -0.4
      }
    },
    {
      text: {
        de: "Das stresst mich zunächst",
        en: "It stresses me at first",
        fr: "Cela me stresse au début",
        es: "Al principio me estresa"
      },
      traits: {
        emotionally_stable: -0.6,
        organized: 0.2
      }
    },
    {
      text: {
        de: "Ich versuche, den ursprünglichen Plan beizubehalten",
        en: "I try to stick to the original plan",
        fr: "J'essaie de maintenir le plan initial",
        es: "Intento mantener el plan original"
      },
      traits: {
        organized: 0.6,
        independent: 0.3,
        impulsive: -0.4
      }
    }
  ]
},

{
  id: "Q013",
  text: {
    de: "Was motiviert dich am meisten?",
    en: "What motivates you the most?",
    fr: "Qu'est-ce qui vous motive le plus ?",
    es: "¿Qué te motiva más?"
  },
  answers: [
    {
      text: {
        de: "Persönlicher Erfolg und Fortschritt",
        en: "Personal success and progress",
        fr: "Le succès personnel et le progrès",
        es: "El éxito personal y el progreso"
      },
      traits: {
        ambitious: 0.8,
        independent: 0.4
      }
    },
    {
      text: {
        de: "Harmonie und gute Beziehungen",
        en: "Harmony and good relationships",
        fr: "L'harmonie et de bonnes relations",
        es: "La armonía y las buenas relaciones"
      },
      traits: {
        empathic: 0.7,
        social: 0.5
      }
    },
    {
      text: {
        de: "Neue Erfahrungen und Abwechslung",
        en: "New experiences and variety",
        fr: "De nouvelles expériences et de la variété",
        es: "Nuevas experiencias y variedad"
      },
      traits: {
        creative: 0.6,
        risk_taking: 0.5,
        organized: -0.4
      }
    }
  ]
},

{
  id: "Q014",
  text: {
    de: "Wie arbeitest du am liebsten?",
    en: "How do you prefer to work?",
    fr: "Comment préférez-vous travailler ?",
    es: "¿Cómo prefieres trabajar?"
  },
  answers: [
    {
      text: {
        de: "Allein und selbstbestimmt",
        en: "Alone and self-directed",
        fr: "Seul et de manière autonome",
        es: "Solo y de forma autónoma"
      },
      traits: {
        independent: 0.8,
        social: -0.5
      }
    },
    {
      text: {
        de: "Im Team mit klarer Rollenverteilung",
        en: "In a team with clear roles",
        fr: "En équipe avec des rôles clairs",
        es: "En equipo con roles claros"
      },
      traits: {
        social: 0.6,
        organized: 0.4
      }
    },
    {
      text: {
        de: "Flexibel, je nach Situation",
        en: "Flexibly, depending on the situation",
        fr: "De manière flexible selon la situation",
        es: "De forma flexible según la situación"
      },
      traits: {
        emotionally_stable: 0.5,
        creative: 0.3
      }
    }
  ]
},

{
  id: "Q015",
  text: {
    de: "Wie gehst du mit Risiken um?",
    en: "How do you deal with risks?",
    fr: "Comment gérez-vous les risques ?",
    es: "¿Cómo manejas los riesgos?"
  },
  answers: [
    {
      text: {
        de: "Ich gehe sie bewusst ein",
        en: "I consciously take them",
        fr: "Je les prends consciemment",
        es: "Los asumo conscientemente"
      },
      traits: {
        risk_taking: 0.8,
        ambitious: 0.4
      }
    },
    {
      text: {
        de: "Ich versuche sie zu minimieren",
        en: "I try to minimize them",
        fr: "J'essaie de les minimiser",
        es: "Intento minimizarlos"
      },
      traits: {
        analytical: 0.6,
        organized: 0.5,
        risk_taking: -0.6
      }
    },
    {
      text: {
        de: "Ich vermeide sie möglichst",
        en: "I avoid them as much as possible",
        fr: "Je les évite autant que possible",
        es: "Los evito en la medida de lo posible"
      },
      traits: {
        emotionally_stable: -0.4,
        risk_taking: -0.8
      }
    }
  ]
},
{
  id: "Q016",
  text: {
    de: "Wie gehst du mit neuen Informationen um?",
    en: "How do you deal with new information?",
    fr: "Comment gérez-vous de nouvelles informations ?",
    es: "¿Cómo manejas la nueva información?"
  },
  answers: [
    {
      text: {
        de: "Ich überprüfe sie kritisch und vergleiche mehrere Quellen",
        en: "I critically evaluate it and compare multiple sources",
        fr: "Je l'évalue de manière critique et compare plusieurs sources",
        es: "La evalúo críticamente y comparo varias fuentes"
      },
      traits: {
        analytical: 0.8,
        independent: 0.3
      }
    },
    {
      text: {
        de: "Ich verlasse mich auf mein Bauchgefühl",
        en: "I rely on my gut feeling",
        fr: "Je me fie à mon intuition",
        es: "Me guío por mi intuición"
      },
      traits: {
        impulsive: 0.6,
        analytical: -0.5
      }
    },
    {
      text: {
        de: "Ich tausche mich mit anderen darüber aus",
        en: "I discuss it with others",
        fr: "J'en discute avec d'autres",
        es: "Lo comento con otras personas"
      },
      traits: {
        social: 0.6,
        empathic: 0.4
      }
    }
  ]
},

{
  id: "Q017",
  text: {
    de: "Wie wichtig ist dir Ordnung im Alltag?",
    en: "How important is order in your daily life?",
    fr: "Quelle importance accordez-vous à l'ordre au quotidien ?",
    es: "¿Qué importancia tiene el orden en tu vida diaria?"
  },
  answers: [
    {
      text: {
        de: "Sehr wichtig, ich brauche klare Strukturen",
        en: "Very important, I need clear structures",
        fr: "Très importante, j'ai besoin de structures claires",
        es: "Muy importante, necesito estructuras claras"
      },
      traits: {
        organized: 0.8,
        emotionally_stable: 0.3
      }
    },
    {
      text: {
        de: "Hilfreich, aber nicht entscheidend",
        en: "Helpful, but not essential",
        fr: "Utile, mais pas essentiel",
        es: "Útil, pero no esencial"
      },
      traits: {
        organized: 0.4
      }
    },
    {
      text: {
        de: "Eher unwichtig, ich arbeite flexibel",
        en: "Rather unimportant, I work flexibly",
        fr: "Plutôt sans importance, je travaille de manière flexible",
        es: "Poco importante, trabajo de forma flexible"
      },
      traits: {
        creative: 0.4,
        organized: -0.6
      }
    }
  ]
},

{
  id: "Q018",
  text: {
    de: "Wie reagierst du auf emotionale Situationen anderer?",
    en: "How do you react to emotional situations of others?",
    fr: "Comment réagissez-vous aux situations émotionnelles des autres ?",
    es: "¿Cómo reaccionas ante situaciones emocionales de otros?"
  },
  answers: [
    {
      text: {
        de: "Ich fühle stark mit und möchte helfen",
        en: "I strongly empathize and want to help",
        fr: "Je ressens fortement de l'empathie et veux aider",
        es: "Siento mucha empatía y quiero ayudar"
      },
      traits: {
        empathic: 0.8,
        social: 0.4
      }
    },
    {
      text: {
        de: "Ich höre zu, bleibe aber sachlich",
        en: "I listen but remain objective",
        fr: "J'écoute mais reste objectif",
        es: "Escucho, pero me mantengo objetivo"
      },
      traits: {
        analytical: 0.4,
        empathic: 0.3
      }
    },
    {
      text: {
        de: "Ich halte emotionalen Abstand",
        en: "I keep emotional distance",
        fr: "Je garde une distance émotionnelle",
        es: "Mantengo distancia emocional"
      },
      traits: {
        emotionally_stable: 0.5,
        empathic: -0.6
      }
    }
  ]
},

{
  id: "Q019",
  text: {
    de: "Wie gehst du mit Konkurrenz um?",
    en: "How do you deal with competition?",
    fr: "Comment gérez-vous la concurrence ?",
    es: "¿Cómo manejas la competencia?"
  },
  answers: [
    {
      text: {
        de: "Sie motiviert mich zusätzlich",
        en: "It motivates me even more",
        fr: "Elle me motive encore davantage",
        es: "Me motiva aún más"
      },
      traits: {
        ambitious: 0.8,
        emotionally_stable: 0.3
      }
    },
    {
      text: {
        de: "Ich ignoriere sie und konzentriere mich auf mich",
        en: "I ignore it and focus on myself",
        fr: "Je l'ignore et me concentre sur moi-même",
        es: "La ignoro y me concentro en mí"
      },
      traits: {
        independent: 0.6
      }
    },
    {
      text: {
        de: "Sie setzt mich unter Druck",
        en: "It puts me under pressure",
        fr: "Elle me met sous pression",
        es: "Me pone bajo presión"
      },
      traits: {
        emotionally_stable: -0.6,
        ambitious: 0.2
      }
    }
  ]
},

{
  id: "Q020",
  text: {
    de: "Wie triffst du Entscheidungen unter Zeitdruck?",
    en: "How do you make decisions under time pressure?",
    fr: "Comment prenez-vous des décisions sous pression temporelle ?",
    es: "¿Cómo tomas decisiones bajo presión de tiempo?"
  },
  answers: [
    {
      text: {
        de: "Schnell und intuitiv",
        en: "Quickly and intuitively",
        fr: "Rapidement et intuitivement",
        es: "Rápidamente e intuitivamente"
      },
      traits: {
        impulsive: 0.7,
        risk_taking: 0.4
      }
    },
    {
      text: {
        de: "Strukturiert trotz des Drucks",
        en: "Structured despite the pressure",
        fr: "De manière structurée malgré la pression",
        es: "De forma estructurada a pesar de la presión"
      },
      traits: {
        analytical: 0.6,
        emotionally_stable: 0.4
      }
    },
    {
      text: {
        de: "Ich versuche, Zeit zu gewinnen",
        en: "I try to gain more time",
        fr: "J'essaie de gagner du temps",
        es: "Intento ganar tiempo"
      },
      traits: {
        organized: 0.4,
        impulsive: -0.5
      }
    }
  ]
},

{
  id: "Q021",
  text: {
    de: "Wie gehst du an neue Projekte heran?",
    en: "How do you approach new projects?",
    fr: "Comment abordez-vous de nouveaux projets ?",
    es: "¿Cómo abordas nuevos proyectos?"
  },
  answers: [
    {
      text: {
        de: "Mit einer klaren Planung von Anfang an",
        en: "With clear planning from the start",
        fr: "Avec une planification claire dès le départ",
        es: "Con una planificación clara desde el inicio"
      },
      traits: {
        organized: 0.7,
        analytical: 0.4
      }
    },
    {
      text: {
        de: "Ich starte einfach und passe mich an",
        en: "I just start and adapt along the way",
        fr: "Je commence simplement et m'adapte en cours de route",
        es: "Simplemente empiezo y me adapto"
      },
      traits: {
        creative: 0.5,
        impulsive: 0.4
      }
    },
    {
      text: {
        de: "Ich lasse mich von meiner Motivation leiten",
        en: "I let my motivation guide me",
        fr: "Je me laisse guider par ma motivation",
        es: "Me dejo guiar por mi motivación"
      },
      traits: {
        ambitious: 0.6,
        independent: 0.3
      }
    }
  ]
},

{
  id: "Q022",
  text: {
    de: "Wie wichtig ist dir die Meinung anderer?",
    en: "How important is the opinion of others to you?",
    fr: "Quelle importance a pour vous l'opinion des autres ?",
    es: "¿Qué importancia tiene para ti la opinión de los demás?"
  },
  answers: [
    {
      text: {
        de: "Sehr wichtig, ich beziehe sie stark ein",
        en: "Very important, I strongly consider it",
        fr: "Très importante, je la prends fortement en compte",
        es: "Muy importante, la tengo muy en cuenta"
      },
      traits: {
        empathic: 0.6,
        social: 0.5
      }
    },
    {
      text: {
        de: "Sie ist hilfreich, aber nicht entscheidend",
        en: "It is helpful, but not decisive",
        fr: "Elle est utile, mais pas décisive",
        es: "Es útil, pero no decisiva"
      },
      traits: {
        emotionally_stable: 0.4
      }
    },
    {
      text: {
        de: "Ich treffe Entscheidungen unabhängig davon",
        en: "I make decisions independently of it",
        fr: "Je prends des décisions indépendamment",
        es: "Tomo decisiones independientemente"
      },
      traits: {
        independent: 0.8,
        social: -0.4
      }
    }
  ]
},

{
  id: "Q023",
  text: {
    de: "Wie gehst du mit Unsicherheit um?",
    en: "How do you deal with uncertainty?",
    fr: "Comment gérez-vous l'incertitude ?",
    es: "¿Cómo manejas la incertidumbre?"
  },
  answers: [
    {
      text: {
        de: "Ich bleibe ruhig und flexibel",
        en: "I remain calm and flexible",
        fr: "Je reste calme et flexible",
        es: "Me mantengo tranquilo y flexible"
      },
      traits: {
        emotionally_stable: 0.7,
        creative: 0.3
      }
    },
    {
      text: {
        de: "Ich versuche Kontrolle herzustellen",
        en: "I try to establish control",
        fr: "J'essaie d'établir un contrôle",
        es: "Intento establecer control"
      },
      traits: {
        organized: 0.5,
        analytical: 0.4
      }
    },
    {
      text: {
        de: "Ich fühle mich schnell unwohl",
        en: "I quickly feel uncomfortable",
        fr: "Je me sens rapidement mal à l'aise",
        es: "Me siento incómodo rápidamente"
      },
      traits: {
        emotionally_stable: -0.7
      }
    }
  ]
},

{
  id: "Q024",
  text: {
    de: "Wie wichtig ist dir persönliches Wachstum?",
    en: "How important is personal growth to you?",
    fr: "Quelle importance a pour vous le développement personnel ?",
    es: "¿Qué importancia tiene para ti el crecimiento personal?"
  },
  answers: [
    {
      text: {
        de: "Sehr wichtig, ich arbeite aktiv daran",
        en: "Very important, I actively work on it",
        fr: "Très important, j'y travaille activement",
        es: "Muy importante, trabajo activamente en ello"
      },
      traits: {
        ambitious: 0.7,
        analytical: 0.3
      }
    },
    {
      text: {
        de: "Wichtig, aber nicht mein Hauptfokus",
        en: "Important, but not my main focus",
        fr: "Important, mais pas mon objectif principal",
        es: "Importante, pero no es mi enfoque principal"
      },
      traits: {
        emotionally_stable: 0.4
      }
    },
    {
      text: {
        de: "Ich mache mir darüber wenig Gedanken",
        en: "I rarely think about it",
        fr: "Je n'y pense que rarement",
        es: "Rara vez pienso en ello"
      },
      traits: {
        ambitious: -0.6
      }
    }
  ]
},

{
  id: "Q025",
  text: {
    de: "Wie gehst du mit neuen und unbekannten Situationen um?",
    en: "How do you handle new and unfamiliar situations?",
    fr: "Comment gérez-vous des situations nouvelles et inconnues ?",
    es: "¿Cómo manejas situaciones nuevas y desconocidas?"
  },
  answers: [
    {
      text: {
        de: "Neugierig und offen",
        en: "Curious and open",
        fr: "Curieux et ouvert",
        es: "Curioso y abierto"
      },
      traits: {
        creative: 0.6,
        risk_taking: 0.4
      }
    },
    {
      text: {
        de: "Vorsichtig, aber interessiert",
        en: "Cautious but interested",
        fr: "Prudent mais intéressé",
        es: "Cauteloso pero interesado"
      },
      traits: {
        analytical: 0.4,
        risk_taking: -0.3
      }
    },
    {
      text: {
        de: "Eher zurückhaltend",
        en: "Rather reserved",
        fr: "Plutôt réservé",
        es: "Más bien reservado"
      },
      traits: {
        emotionally_stable: -0.4,
        risk_taking: -0.6
      }
    }
  ]
},
{
  id: "Q026",
  text: {
    de: "Wie gehst du vor, wenn du ein schwieriges Ziel erreichen willst?",
    en: "How do you proceed when you want to achieve a difficult goal?",
    fr: "Comment procédez-vous lorsque vous souhaitez atteindre un objectif difficile ?",
    es: "¿Cómo procedes cuando quieres alcanzar un objetivo difícil?"
  },
  answers: [
    {
      text: {
        de: "Ich entwickle einen klaren Plan mit Zwischenschritten",
        en: "I develop a clear plan with intermediate steps",
        fr: "Je développe un plan clair avec des étapes intermédiaires",
        es: "Desarrollo un plan claro con pasos intermedios"
      },
      traits: {
        organized: 0.7,
        analytical: 0.4,
        ambitious: 0.3
      }
    },
    {
      text: {
        de: "Ich arbeite kontinuierlich darauf hin, egal wie lange es dauert",
        en: "I work steadily toward it, no matter how long it takes",
        fr: "Je travaille régulièrement pour l'atteindre, peu importe le temps",
        es: "Trabajo de forma constante, sin importar el tiempo"
      },
      traits: {
        ambitious: 0.7,
        emotionally_stable: 0.4
      }
    },
    {
      text: {
        de: "Ich lasse mich von meiner aktuellen Motivation leiten",
        en: "I let my current motivation guide me",
        fr: "Je me laisse guider par ma motivation du moment",
        es: "Me dejo guiar por mi motivación actual"
      },
      traits: {
        impulsive: 0.5,
        organized: -0.4
      }
    }
  ]
},

{
  id: "Q027",
  text: {
    de: "Wie reagierst du, wenn jemand deine Meinung kritisiert?",
    en: "How do you react when someone criticizes your opinion?",
    fr: "Comment réagissez-vous lorsque quelqu'un critique votre opinion ?",
    es: "¿Cómo reaccionas cuando alguien critica tu opinión?"
  },
  answers: [
    {
      text: {
        de: "Ich prüfe sachlich, ob die Kritik berechtigt ist",
        en: "I objectively evaluate whether the criticism is justified",
        fr: "J'évalue objectivement si la critique est justifiée",
        es: "Evalúo objetivamente si la crítica está justificada"
      },
      traits: {
        analytical: 0.6,
        emotionally_stable: 0.4
      }
    },
    {
      text: {
        de: "Ich nehme sie mir emotional zu Herzen",
        en: "I take it emotionally to heart",
        fr: "Je la prends à cœur émotionnellement",
        es: "Me lo tomo de forma emocional"
      },
      traits: {
        empathic: 0.4,
        emotionally_stable: -0.6
      }
    },
    {
      text: {
        de: "Ich bleibe bei meiner Meinung",
        en: "I stick to my opinion",
        fr: "Je reste sur ma position",
        es: "Me mantengo en mi opinión"
      },
      traits: {
        independent: 0.6,
        social: -0.3
      }
    }
  ]
},

{
  id: "Q028",
  text: {
    de: "Wie verhältst du dich in Gruppenentscheidungen?",
    en: "How do you behave in group decisions?",
    fr: "Comment vous comportez-vous lors de décisions de groupe ?",
    es: "¿Cómo te comportas en decisiones grupales?"
  },
  answers: [
    {
      text: {
        de: "Ich bringe aktiv meine Ideen ein",
        en: "I actively contribute my ideas",
        fr: "Je contribue activement avec mes idées",
        es: "Aporto activamente mis ideas"
      },
      traits: {
        social: 0.6,
        ambitious: 0.3
      }
    },
    {
      text: {
        de: "Ich höre zuerst zu und beobachte",
        en: "I listen first and observe",
        fr: "J'écoute d'abord et j'observe",
        es: "Primero escucho y observo"
      },
      traits: {
        analytical: 0.4,
        empathic: 0.4
      }
    },
    {
      text: {
        de: "Ich treffe meine Entscheidung unabhängig von der Gruppe",
        en: "I make my decision independently of the group",
        fr: "Je prends ma décision indépendamment du groupe",
        es: "Tomo mi decisión independientemente del grupo"
      },
      traits: {
        independent: 0.7,
        social: -0.4
      }
    }
  ]
},

{
  id: "Q029",
  text: {
    de: "Wie gehst du mit Routinen um?",
    en: "How do you deal with routines?",
    fr: "Comment gérez-vous les routines ?",
    es: "¿Cómo manejas las rutinas?"
  },
  answers: [
    {
      text: {
        de: "Sie geben mir Sicherheit und Struktur",
        en: "They give me security and structure",
        fr: "Elles me donnent de la sécurité et de la structure",
        es: "Me dan seguridad y estructura"
      },
      traits: {
        organized: 0.7,
        emotionally_stable: 0.4
      }
    },
    {
      text: {
        de: "Ich halte sie ein, passe sie aber an",
        en: "I follow them but adapt them",
        fr: "Je les respecte mais je les adapte",
        es: "Las sigo, pero las adapto"
      },
      traits: {
        creative: 0.4,
        organized: 0.3
      }
    },
    {
      text: {
        de: "Ich vermeide Routinen, wenn möglich",
        en: "I avoid routines when possible",
        fr: "J'évite les routines si possible",
        es: "Evito las rutinas cuando es posible"
      },
      traits: {
        creative: 0.6,
        organized: -0.6
      }
    }
  ]
},

{
  id: "Q030",
  text: {
    de: "Wie triffst du Entscheidungen mit unsicherem Ausgang?",
    en: "How do you make decisions with uncertain outcomes?",
    fr: "Comment prenez-vous des décisions à l'issue incertaine ?",
    es: "¿Cómo tomas decisiones con resultados inciertos?"
  },
  answers: [
    {
      text: {
        de: "Ich bewerte Chancen und Risiken sorgfältig",
        en: "I carefully evaluate risks and opportunities",
        fr: "J'évalue soigneusement les risques et opportunités",
        es: "Evalúo cuidadosamente riesgos y oportunidades"
      },
      traits: {
        analytical: 0.7,
        risk_taking: -0.3
      }
    },
    {
      text: {
        de: "Ich entscheide mich auch ohne alle Informationen",
        en: "I decide even without all information",
        fr: "Je décide même sans toutes les informations",
        es: "Decido incluso sin toda la información"
      },
      traits: {
        risk_taking: 0.7,
        impulsive: 0.4
      }
    },
    {
      text: {
        de: "Ich vermeide solche Entscheidungen möglichst",
        en: "I try to avoid such decisions",
        fr: "J'essaie d'éviter ce type de décisions",
        es: "Intento evitar este tipo de decisiones"
      },
      traits: {
        emotionally_stable: -0.4,
        risk_taking: -0.6
      }
    }
  ]
},

{
  id: "Q031",
  text: {
    de: "Wie gehst du mit den Gefühlen anderer um?",
    en: "How do you deal with the feelings of others?",
    fr: "Comment gérez-vous les émotions des autres ?",
    es: "¿Cómo manejas los sentimientos de los demás?"
  },
  answers: [
    {
      text: {
        de: "Ich nehme sie sehr bewusst wahr",
        en: "I am very aware of them",
        fr: "Je les perçois très consciemment",
        es: "Los percibo muy conscientemente"
      },
      traits: {
        empathic: 0.7,
        social: 0.4
      }
    },
    {
      text: {
        de: "Ich versuche sachlich zu bleiben",
        en: "I try to remain objective",
        fr: "J'essaie de rester objectif",
        es: "Intento mantenerme objetivo"
      },
      traits: {
        emotionally_stable: 0.4,
        empathic: 0.3
      }
    },
    {
      text: {
        de: "Ich halte bewusst Abstand",
        en: "I consciously keep distance",
        fr: "Je garde consciemment mes distances",
        es: "Mantengo distancia conscientemente"
      },
      traits: {
        independent: 0.4,
        empathic: -0.6
      }
    }
  ]
},

{
  id: "Q032",
  text: {
    de: "Wie wichtig ist dir Selbstbestimmung?",
    en: "How important is self-determination to you?",
    fr: "Quelle importance a pour vous l'autodétermination ?",
    es: "¿Qué importancia tiene para ti la autodeterminación?"
  },
  answers: [
    {
      text: {
        de: "Sehr wichtig, ich möchte frei entscheiden",
        en: "Very important, I want to decide freely",
        fr: "Très importante, je veux décider librement",
        es: "Muy importante, quiero decidir libremente"
      },
      traits: {
        independent: 0.8,
        ambitious: 0.3
      }
    },
    {
      text: {
        de: "Wichtig, aber im Austausch mit anderen",
        en: "Important, but in exchange with others",
        fr: "Importante, mais en échange avec les autres",
        es: "Importante, pero en intercambio con otros"
      },
      traits: {
        social: 0.4,
        independent: 0.4
      }
    },
    {
      text: {
        de: "Nicht besonders wichtig",
        en: "Not particularly important",
        fr: "Pas particulièrement importante",
        es: "No especialmente importante"
      },
      traits: {
        independent: -0.6
      }
    }
  ]
},

{
  id: "Q033",
  text: {
    de: "Wie gehst du mit Rückschlägen um?",
    en: "How do you deal with setbacks?",
    fr: "Comment gérez-vous les revers ?",
    es: "¿Cómo manejas los contratiempos?"
  },
  answers: [
    {
      text: {
        de: "Ich bleibe ruhig und mache weiter",
        en: "I stay calm and keep going",
        fr: "Je reste calme et je continue",
        es: "Me mantengo tranquilo y continúo"
      },
      traits: {
        emotionally_stable: 0.7,
        ambitious: 0.4
      }
    },
    {
      text: {
        de: "Ich analysiere, was schiefgelaufen ist",
        en: "I analyze what went wrong",
        fr: "J'analyse ce qui n'a pas fonctionné",
        es: "Analizo qué salió mal"
      },
      traits: {
        analytical: 0.6,
        organized: 0.3
      }
    },
    {
      text: {
        de: "Sie entmutigen mich schnell",
        en: "They discourage me quickly",
        fr: "Ils me découragent rapidement",
        es: "Me desaniman rápidamente"
      },
      traits: {
        emotionally_stable: -0.7
      }
    }
  ]
},

{
  id: "Q034",
  text: {
    de: "Wie wichtig ist dir Kreativität im Alltag?",
    en: "How important is creativity in everyday life?",
    fr: "Quelle importance a la créativité dans votre quotidien ?",
    es: "¿Qué importancia tiene la creatividad en tu vida diaria?"
  },
  answers: [
    {
      text: {
        de: "Sehr wichtig, sie treibt mich an",
        en: "Very important, it drives me",
        fr: "Très importante, elle me motive",
        es: "Muy importante, me impulsa"
      },
      traits: {
        creative: 0.7,
        independent: 0.3
      }
    },
    {
      text: {
        de: "Situationsabhängig",
        en: "Depending on the situation",
        fr: "Selon la situation",
        es: "Depende de la situación"
      },
      traits: {
        creative: 0.4
      }
    },
    {
      text: {
        de: "Eher zweitrangig",
        en: "Rather secondary",
        fr: "Plutôt secondaire",
        es: "Más bien secundaria"
      },
      traits: {
        creative: -0.6
      }
    }
  ]
},

{
  id: "Q035",
  text: {
    de: "Wie triffst du Entscheidungen, wenn viel auf dem Spiel steht?",
    en: "How do you make decisions when a lot is at stake?",
    fr: "Comment prenez-vous des décisions lorsque beaucoup est en jeu ?",
    es: "¿Cómo tomas decisiones cuando hay mucho en juego?"
  },
  answers: [
    {
      text: {
        de: "Überlegt und kontrolliert",
        en: "Thoughtfully and controlled",
        fr: "De manière réfléchie et contrôlée",
        es: "De forma reflexiva y controlada"
      },
      traits: {
        analytical: 0.5,
        emotionally_stable: 0.5
      }
    },
    {
      text: {
        de: "Mutig und entschlossen",
        en: "Boldly and decisively",
        fr: "Avec audace et détermination",
        es: "Con valentía y determinación"
      },
      traits: {
        risk_taking: 0.6,
        ambitious: 0.4
      }
    },
    {
      text: {
        de: "Zögerlich",
        en: "Hesitantly",
        fr: "Avec hésitation",
        es: "Con vacilación"
      },
      traits: {
        emotionally_stable: -0.5,
        risk_taking: -0.4
      }
    }
  ]
},
{
  id: "Q036",
  text: {
    de: "Wie gehst du vor, wenn du vor einer schwierigen Entscheidung stehst?",
    en: "How do you proceed when facing a difficult decision?",
    fr: "Comment procédez-vous face à une décision difficile ?",
    es: "¿Cómo procedes cuando enfrentas una decisión difícil?"
  },
  answers: [
    {
      text: {
        de: "Ich sammle möglichst viele Informationen",
        en: "I gather as much information as possible",
        fr: "Je rassemble autant d'informations que possible",
        es: "Recojo la mayor cantidad de información posible"
      },
      traits: {
        analytical: 0.7,
        organized: 0.4
      }
    },
    {
      text: {
        de: "Ich entscheide nach meinem Gefühl",
        en: "I decide based on my feelings",
        fr: "Je décide selon mon ressenti",
        es: "Decido según mis sentimientos"
      },
      traits: {
        impulsive: 0.6,
        analytical: -0.4
      }
    },
    {
      text: {
        de: "Ich hole mir Feedback von anderen",
        en: "I seek feedback from others",
        fr: "Je demande l'avis des autres",
        es: "Busco la opinión de otros"
      },
      traits: {
        social: 0.6,
        empathic: 0.4
      }
    }
  ]
},

{
  id: "Q037",
  text: {
    de: "Wie wichtig ist dir es, die Kontrolle zu behalten?",
    en: "How important is it for you to stay in control?",
    fr: "Quelle importance accordez-vous au fait de garder le contrôle ?",
    es: "¿Qué tan importante es para ti mantener el control?"
  },
  answers: [
    {
      text: {
        de: "Sehr wichtig, ich plane lieber selbst",
        en: "Very important, I prefer to plan myself",
        fr: "Très important, je préfère planifier moi-même",
        es: "Muy importante, prefiero planificar yo mismo"
      },
      traits: {
        organized: 0.7,
        independent: 0.4
      }
    },
    {
      text: {
        de: "Situationsabhängig",
        en: "It depends on the situation",
        fr: "Cela dépend de la situation",
        es: "Depende de la situación"
      },
      traits: {
        emotionally_stable: 0.4
      }
    },
    {
      text: {
        de: "Nicht besonders wichtig",
        en: "Not particularly important",
        fr: "Pas particulièrement important",
        es: "No especialmente importante"
      },
      traits: {
        risk_taking: 0.4,
        organized: -0.4
      }
    }
  ]
},

{
  id: "Q038",
  text: {
    de: "Wie verhältst du dich, wenn jemand Hilfe braucht?",
    en: "How do you behave when someone needs help?",
    fr: "Comment vous comportez-vous lorsque quelqu'un a besoin d'aide ?",
    es: "¿Cómo te comportas cuando alguien necesita ayuda?"
  },
  answers: [
    {
      text: {
        de: "Ich biete meine Unterstützung sofort an",
        en: "I immediately offer my support",
        fr: "J'offre immédiatement mon aide",
        es: "Ofrezco mi apoyo de inmediato"
      },
      traits: {
        empathic: 0.7,
        social: 0.5
      }
    },
    {
      text: {
        de: "Ich helfe, wenn ich darum gebeten werde",
        en: "I help when asked",
        fr: "J'aide lorsqu'on me le demande",
        es: "Ayudo cuando me lo piden"
      },
      traits: {
        empathic: 0.4,
        independent: 0.3
      }
    },
    {
      text: {
        de: "Ich halte mich eher zurück",
        en: "I tend to hold back",
        fr: "J'ai tendance à me retenir",
        es: "Tiendo a mantenerme al margen"
      },
      traits: {
        empathic: -0.6,
        independent: 0.4
      }
    }
  ]
},

{
  id: "Q039",
  text: {
    de: "Wie gehst du mit ehrgeizigen Zielen um?",
    en: "How do you deal with ambitious goals?",
    fr: "Comment gérez-vous des objectifs ambitieux ?",
    es: "¿Cómo manejas objetivos ambiciosos?"
  },
  answers: [
    {
      text: {
        de: "Ich setze alles daran, sie zu erreichen",
        en: "I do everything I can to achieve them",
        fr: "Je mets tout en œuvre pour les atteindre",
        es: "Hago todo lo posible para alcanzarlos"
      },
      traits: {
        ambitious: 0.8,
        emotionally_stable: 0.3
      }
    },
    {
      text: {
        de: "Ich gehe sie Schritt für Schritt an",
        en: "I approach them step by step",
        fr: "Je les aborde étape par étape",
        es: "Los abordo paso a paso"
      },
      traits: {
        ambitious: 0.5,
        organized: 0.4
      }
    },
    {
      text: {
        de: "Ich halte sie eher niedrig",
        en: "I tend to keep them modest",
        fr: "J'ai tendance à les garder modestes",
        es: "Tiendo a mantenerlos modestos"
      },
      traits: {
        ambitious: -0.6,
        emotionally_stable: 0.3
      }
    }
  ]
},

{
  id: "Q040",
  text: {
    de: "Wie reagierst du auf unerwartete Veränderungen?",
    en: "How do you react to unexpected changes?",
    fr: "Comment réagissez-vous aux changements inattendus ?",
    es: "¿Cómo reaccionas ante cambios inesperados?"
  },
  answers: [
    {
      text: {
        de: "Ich passe mich schnell an",
        en: "I adapt quickly",
        fr: "Je m'adapte rapidement",
        es: "Me adapto rápidamente"
      },
      traits: {
        emotionally_stable: 0.6,
        creative: 0.4
      }
    },
    {
      text: {
        de: "Ich brauche etwas Zeit",
        en: "I need some time",
        fr: "J'ai besoin d'un peu de temps",
        es: "Necesito algo de tiempo"
      },
      traits: {
        organized: 0.4,
        emotionally_stable: -0.3
      }
    },
    {
      text: {
        de: "Ich fühle mich schnell überfordert",
        en: "I quickly feel overwhelmed",
        fr: "Je me sens vite dépassé",
        es: "Me siento rápidamente abrumado"
      },
      traits: {
        emotionally_stable: -0.7
      }
    }
  ]
},

{
  id: "Q041",
  text: {
    de: "Wie triffst du Entscheidungen im Alltag?",
    en: "How do you make decisions in everyday life?",
    fr: "Comment prenez-vous des décisions au quotidien ?",
    es: "¿Cómo tomas decisiones en la vida diaria?"
  },
  answers: [
    {
      text: {
        de: "Überlegt und strukturiert",
        en: "Thoughtfully and structured",
        fr: "De manière réfléchie et structurée",
        es: "De forma reflexiva y estructurada"
      },
      traits: {
        analytical: 0.6,
        organized: 0.4
      }
    },
    {
      text: {
        de: "Spontan",
        en: "Spontaneously",
        fr: "Spontanément",
        es: "De forma espontánea"
      },
      traits: {
        impulsive: 0.7,
        risk_taking: 0.3
      }
    },
    {
      text: {
        de: "Abhängig von der Situation",
        en: "Depending on the situation",
        fr: "Selon la situation",
        es: "Dependiendo de la situación"
      },
      traits: {
        emotionally_stable: 0.4
      }
    }
  ]
},

{
  id: "Q042",
  text: {
    de: "Wie wichtig ist dir Zusammenarbeit?",
    en: "How important is collaboration to you?",
    fr: "Quelle importance a la collaboration pour vous ?",
    es: "¿Qué importancia tiene la colaboración para ti?"
  },
  answers: [
    {
      text: {
        de: "Sehr wichtig",
        en: "Very important",
        fr: "Très importante",
        es: "Muy importante"
      },
      traits: {
        social: 0.7,
        empathic: 0.4
      }
    },
    {
      text: {
        de: "Hilfreich, aber nicht zwingend",
        en: "Helpful, but not essential",
        fr: "Utile, mais pas indispensable",
        es: "Útil, pero no esencial"
      },
      traits: {
        independent: 0.4
      }
    },
    {
      text: {
        de: "Eher unwichtig",
        en: "Rather unimportant",
        fr: "Plutôt sans importance",
        es: "Más bien poco importante"
      },
      traits: {
        independent: 0.6,
        social: -0.5
      }
    }
  ]
},

{
  id: "Q043",
  text: {
    de: "Wie gehst du mit neuen Ideen um?",
    en: "How do you deal with new ideas?",
    fr: "Comment gérez-vous de nouvelles idées ?",
    es: "¿Cómo manejas nuevas ideas?"
  },
  answers: [
    {
      text: {
        de: "Ich greife sie begeistert auf",
        en: "I embrace them enthusiastically",
        fr: "Je les adopte avec enthousiasme",
        es: "Las adopto con entusiasmo"
      },
      traits: {
        creative: 0.7,
        risk_taking: 0.3
      }
    },
    {
      text: {
        de: "Ich prüfe sie erst kritisch",
        en: "I evaluate them critically first",
        fr: "Je les évalue d'abord de manière critique",
        es: "Primero las evalúo críticamente"
      },
      traits: {
        analytical: 0.6
      }
    },
    {
      text: {
        de: "Ich stehe ihnen eher skeptisch gegenüber",
        en: "I tend to be skeptical",
        fr: "J'ai tendance à être sceptique",
        es: "Tiendo a ser escéptico"
      },
      traits: {
        creative: -0.6,
        organized: 0.3
      }
    }
  ]
},

{
  id: "Q044",
  text: {
    de: "Wie gehst du mit Verantwortung um?",
    en: "How do you deal with responsibility?",
    fr: "Comment gérez-vous les responsabilités ?",
    es: "¿Cómo manejas la responsabilidad?"
  },
  answers: [
    {
      text: {
        de: "Ich übernehme sie gerne",
        en: "I gladly take responsibility",
        fr: "Je prends volontiers des responsabilités",
        es: "Asumo la responsabilidad con gusto"
      },
      traits: {
        ambitious: 0.6,
        independent: 0.4
      }
    },
    {
      text: {
        de: "Ich teile sie lieber",
        en: "I prefer to share it",
        fr: "Je préfère la partager",
        es: "Prefiero compartirla"
      },
      traits: {
        social: 0.5,
        empathic: 0.3
      }
    },
    {
      text: {
        de: "Ich vermeide sie, wenn möglich",
        en: "I avoid it when possible",
        fr: "Je l'évite si possible",
        es: "La evito cuando es posible"
      },
      traits: {
        ambitious: -0.6,
        emotionally_stable: -0.3
      }
    }
  ]
},

{
  id: "Q045",
  text: {
    de: "Wie gehst du mit Stress um?",
    en: "How do you handle stress?",
    fr: "Comment gérez-vous le stress ?",
    es: "¿Cómo manejas el estrés?"
  },
  answers: [
    {
      text: {
        de: "Ich bleibe ruhig und fokussiert",
        en: "I stay calm and focused",
        fr: "Je reste calme et concentré",
        es: "Me mantengo tranquilo y enfocado"
      },
      traits: {
        emotionally_stable: 0.7,
        analytical: 0.3
      }
    },
    {
      text: {
        de: "Ich reagiere emotional",
        en: "I react emotionally",
        fr: "Je réagis émotionnellement",
        es: "Reacciono emocionalmente"
      },
      traits: {
        emotionally_stable: -0.7
      }
    },
    {
      text: {
        de: "Ich lenke mich ab",
        en: "I distract myself",
        fr: "Je me distraits",
        es: "Me distraigo"
      },
      traits: {
        impulsive: 0.4,
        organized: -0.3
      }
    }
  ]
},
{
  id: "Q046",
  text: {
    de: "Wie wichtig ist dir persönliche Weiterentwicklung?",
    en: "How important is personal growth to you?",
    fr: "Quelle importance accordez-vous au développement personnel ?",
    es: "¿Qué tan importante es para ti el desarrollo personal?"
  },
  answers: [
    {
      text: {
        de: "Extrem wichtig",
        en: "Extremely important",
        fr: "Extrêmement important",
        es: "Extremadamente importante"
      },
      traits: {
        ambitious: 0.7,
        analytical: 0.3
      }
    },
    {
      text: {
        de: "Wichtig, aber nicht mein Fokus",
        en: "Important, but not my main focus",
        fr: "Important, mais pas mon objectif principal",
        es: "Importante, pero no es mi enfoque principal"
      },
      traits: {
        emotionally_stable: 0.4
      }
    },
    {
      text: {
        de: "Eher unwichtig",
        en: "Rather unimportant",
        fr: "Plutôt sans importance",
        es: "Más bien poco importante"
      },
      traits: {
        ambitious: -0.6
      }
    }
  ]
},

{
  id: "Q047",
  text: {
    de: "Wie gehst du mit Kritik um?",
    en: "How do you deal with criticism?",
    fr: "Comment gérez-vous la critique ?",
    es: "¿Cómo manejas la crítica?"
  },
  answers: [
    {
      text: {
        de: "Ich nehme sie an und reflektiere",
        en: "I accept it and reflect on it",
        fr: "Je l'accepte et j'y réfléchis",
        es: "La acepto y reflexiono"
      },
      traits: {
        analytical: 0.6,
        emotionally_stable: 0.4
      }
    },
    {
      text: {
        de: "Ich verteidige meine Position",
        en: "I defend my position",
        fr: "Je défends ma position",
        es: "Defiendo mi posición"
      },
      traits: {
        independent: 0.6,
        emotionally_stable: -0.3
      }
    },
    {
      text: {
        de: "Kritik belastet mich",
        en: "Criticism affects me emotionally",
        fr: "La critique m'affecte émotionnellement",
        es: "La crítica me afecta emocionalmente"
      },
      traits: {
        emotionally_stable: -0.7
      }
    }
  ]
},

{
  id: "Q048",
  text: {
    de: "Wie wichtig ist dir Ehrlichkeit?",
    en: "How important is honesty to you?",
    fr: "Quelle importance a l'honnêteté pour vous ?",
    es: "¿Qué tan importante es la honestidad para ti?"
  },
  answers: [
    {
      text: {
        de: "Sehr wichtig, auch wenn es unbequem ist",
        en: "Very important, even if it is uncomfortable",
        fr: "Très importante, même si c'est inconfortable",
        es: "Muy importante, incluso si es incómodo"
      },
      traits: {
        independent: 0.4,
        empathic: 0.3
      }
    },
    {
      text: {
        de: "Wichtig, aber mit Feingefühl",
        en: "Important, but with sensitivity",
        fr: "Importante, mais avec tact",
        es: "Importante, pero con sensibilidad"
      },
      traits: {
        empathic: 0.6
      }
    },
    {
      text: {
        de: "Situationsabhängig",
        en: "Depends on the situation",
        fr: "Cela dépend de la situation",
        es: "Depende de la situación"
      },
      traits: {
        emotionally_stable: 0.3
      }
    }
  ]
},

{
  id: "Q049",
  text: {
    de: "Wie reagierst du, wenn etwas schiefgeht?",
    en: "How do you react when something goes wrong?",
    fr: "Comment réagissez-vous quand quelque chose tourne mal ?",
    es: "¿Cómo reaccionas cuando algo sale mal?"
  },
  answers: [
    {
      text: {
        de: "Ich analysiere den Fehler",
        en: "I analyze the mistake",
        fr: "J'analyse l'erreur",
        es: "Analizo el error"
      },
      traits: {
        analytical: 0.7,
        emotionally_stable: 0.3
      }
    },
    {
      text: {
        de: "Ich ärgere mich kurz und mache weiter",
        en: "I get briefly annoyed and move on",
        fr: "Je m'énerve brièvement et je continue",
        es: "Me molesto brevemente y sigo adelante"
      },
      traits: {
        emotionally_stable: 0.4
      }
    },
    {
      text: {
        de: "Es zieht mich runter",
        en: "It pulls me down emotionally",
        fr: "Cela me décourage",
        es: "Me desanima"
      },
      traits: {
        emotionally_stable: -0.7
      }
    }
  ]
},

{
  id: "Q050",
  text: {
    de: "Wie wichtig ist dir Sicherheit?",
    en: "How important is security to you?",
    fr: "Quelle importance a la sécurité pour vous ?",
    es: "¿Qué tan importante es la seguridad para ti?"
  },
  answers: [
    {
      text: {
        de: "Sehr wichtig",
        en: "Very important",
        fr: "Très importante",
        es: "Muy importante"
      },
      traits: {
        organized: 0.6,
        risk_taking: -0.4
      }
    },
    {
      text: {
        de: "Ausgewogen wichtig",
        en: "Important, but balanced",
        fr: "Importante, mais équilibrée",
        es: "Importante, pero equilibrada"
      },
      traits: {
        emotionally_stable: 0.4
      }
    },
    {
      text: {
        de: "Nicht besonders wichtig",
        en: "Not particularly important",
        fr: "Pas particulièrement importante",
        es: "No especialmente importante"
      },
      traits: {
        risk_taking: 0.6
      }
    }
  ]
},

{
  id: "Q051",
  text: {
    de: "Wie verbringst du lieber deine Freizeit?",
    en: "How do you prefer to spend your free time?",
    fr: "Comment préférez-vous passer votre temps libre ?",
    es: "¿Cómo prefieres pasar tu tiempo libre?"
  },
  answers: [
    {
      text: {
        de: "Mit anderen Menschen",
        en: "With other people",
        fr: "Avec d'autres personnes",
        es: "Con otras personas"
      },
      traits: {
        social: 0.7
      }
    },
    {
      text: {
        de: "Alleine",
        en: "Alone",
        fr: "Seul(e)",
        es: "Solo"
      },
      traits: {
        independent: 0.7
      }
    },
    {
      text: {
        de: "Abwechselnd",
        en: "A mix of both",
        fr: "Un mélange des deux",
        es: "Una mezcla de ambos"
      },
      traits: {
        emotionally_stable: 0.4
      }
    }
  ]
},

{
  id: "Q052",
  text: {
    de: "Wie wichtig ist dir Ordnung?",
    en: "How important is order to you?",
    fr: "Quelle importance accordez-vous à l'ordre ?",
    es: "¿Qué tan importante es el orden para ti?"
  },
  answers: [
    {
      text: {
        de: "Sehr wichtig",
        en: "Very important",
        fr: "Très important",
        es: "Muy importante"
      },
      traits: {
        organized: 0.7
      }
    },
    {
      text: {
        de: "Ganz okay, aber flexibel",
        en: "Nice to have, but flexible",
        fr: "Appréciable, mais flexible",
        es: "Agradable, pero flexible"
      },
      traits: {
        creative: 0.4
      }
    },
    {
      text: {
        de: "Eher unwichtig",
        en: "Rather unimportant",
        fr: "Plutôt sans importance",
        es: "Más bien poco importante"
      },
      traits: {
        organized: -0.6,
        creative: 0.3
      }
    }
  ]
},

{
  id: "Q053",
  text: {
    de: "Wie gehst du mit Risiken um?",
    en: "How do you deal with risks?",
    fr: "Comment gérez-vous les risques ?",
    es: "¿Cómo manejas los riesgos?"
  },
  answers: [
    {
      text: {
        de: "Ich gehe sie bewusst ein",
        en: "I take them consciously",
        fr: "Je les prends consciemment",
        es: "Los asumo conscientemente"
      },
      traits: {
        risk_taking: 0.7,
        analytical: 0.3
      }
    },
    {
      text: {
        de: "Ich vermeide sie eher",
        en: "I tend to avoid them",
        fr: "J'ai tendance à les éviter",
        es: "Tiendo a evitarlos"
      },
      traits: {
        risk_taking: -0.7
      }
    },
    {
      text: {
        de: "Kommt auf die Situation an",
        en: "It depends on the situation",
        fr: "Cela dépend de la situation",
        es: "Depende de la situación"
      },
      traits: {
        emotionally_stable: 0.4
      }
    }
  ]
},

{
  id: "Q054",
  text: {
    de: "Wie wichtig ist dir Kreativität im Alltag?",
    en: "How important is creativity in everyday life?",
    fr: "Quelle importance a la créativité dans votre quotidien ?",
    es: "¿Qué tan importante es la creatividad en tu día a día?"
  },
  answers: [
    {
      text: {
        de: "Sehr wichtig",
        en: "Very important",
        fr: "Très importante",
        es: "Muy importante"
      },
      traits: {
        creative: 0.7
      }
    },
    {
      text: {
        de: "Ab und zu",
        en: "From time to time",
        fr: "De temps en temps",
        es: "De vez en cuando"
      },
      traits: {
        creative: 0.4
      }
    },
    {
      text: {
        de: "Eher unwichtig",
        en: "Rather unimportant",
        fr: "Plutôt sans importance",
        es: "Más bien poco importante"
      },
      traits: {
        creative: -0.6
      }
    }
  ]
},

{
  id: "Q055",
  text: {
    de: "Wie gehst du mit Unsicherheit um?",
    en: "How do you deal with uncertainty?",
    fr: "Comment gérez-vous l'incertitude ?",
    es: "¿Cómo manejas la incertidumbre?"
  },
  answers: [
    {
      text: {
        de: "Ich bleibe ruhig und flexibel",
        en: "I stay calm and flexible",
        fr: "Je reste calme et flexible",
        es: "Me mantengo tranquilo y flexible"
      },
      traits: {
        emotionally_stable: 0.7
      }
    },
    {
      text: {
        de: "Ich versuche, sie zu reduzieren",
        en: "I try to reduce it",
        fr: "J'essaie de la réduire",
        es: "Intento reducirla"
      },
      traits: {
        organized: 0.6
      }
    },
    {
      text: {
        de: "Sie stresst mich stark",
        en: "It stresses me out a lot",
        fr: "Cela me stresse beaucoup",
        es: "Me estresa mucho"
      },
      traits: {
        emotionally_stable: -0.7
      }
    }
  ]
},
{
  id: "Q056",
  text: {
    de: "Wie planst du größere Aufgaben?",
    en: "How do you plan larger tasks?",
    fr: "Comment planifiez-vous les tâches importantes ?",
    es: "¿Cómo planificas tareas grandes?"
  },
  answers: [
    {
      text: {
        de: "Mit klaren Schritten und Zeitplänen",
        en: "With clear steps and timelines",
        fr: "Avec des étapes claires et des échéanciers",
        es: "Con pasos claros y cronogramas"
      },
      traits: {
        organized: 0.7,
        analytical: 0.4
      }
    },
    {
      text: {
        de: "Grob, den Rest entscheide ich spontan",
        en: "Roughly, I decide the rest spontaneously",
        fr: "Grossièrement, je décide le reste spontanément",
        es: "De forma general, el resto lo decido espontáneamente"
      },
      traits: {
        impulsive: 0.6,
        organized: -0.4
      }
    },
    {
      text: {
        de: "Ich plane kaum im Voraus",
        en: "I hardly plan ahead",
        fr: "Je planifie rarement à l'avance",
        es: "Casi no planifico con antelación"
      },
      traits: {
        impulsive: 0.7,
        organized: -0.6
      }
    }
  ]
},

{
  id: "Q057",
  text: {
    de: "Wie reagierst du auf starke Emotionen anderer?",
    en: "How do you react to strong emotions of others?",
    fr: "Comment réagissez-vous aux émotions fortes des autres ?",
    es: "¿Cómo reaccionas ante emociones fuertes de otras personas?"
  },
  answers: [
    {
      text: {
        de: "Ich versuche, sie zu verstehen",
        en: "I try to understand them",
        fr: "J'essaie de les comprendre",
        es: "Intento comprenderlas"
      },
      traits: {
        empathic: 0.7,
        social: 0.4
      }
    },
    {
      text: {
        de: "Ich halte emotionalen Abstand",
        en: "I keep emotional distance",
        fr: "Je garde une distance émotionnelle",
        es: "Mantengo distancia emocional"
      },
      traits: {
        emotionally_stable: 0.5,
        empathic: -0.4
      }
    },
    {
      text: {
        de: "Das überfordert mich schnell",
        en: "It overwhelms me quickly",
        fr: "Cela me submerge rapidement",
        es: "Me abruma rápidamente"
      },
      traits: {
        emotionally_stable: -0.7
      }
    }
  ]
},

{
  id: "Q058",
  text: {
    de: "Wie wichtig ist dir Eigenverantwortung?",
    en: "How important is personal responsibility to you?",
    fr: "Quelle importance a la responsabilité personnelle pour vous ?",
    es: "¿Qué tan importante es la responsabilidad personal para ti?"
  },
  answers: [
    {
      text: {
        de: "Sehr wichtig",
        en: "Very important",
        fr: "Très importante",
        es: "Muy importante"
      },
      traits: {
        independent: 0.7,
        ambitious: 0.4
      }
    },
    {
      text: {
        de: "Wichtig, aber im Team geteilt",
        en: "Important, but shared in a team",
        fr: "Importante, mais partagée en équipe",
        es: "Importante, pero compartida en equipo"
      },
      traits: {
        social: 0.5,
        independent: 0.3
      }
    },
    {
      text: {
        de: "Eher zweitrangig",
        en: "Rather secondary",
        fr: "Plutôt secondaire",
        es: "Más bien secundaria"
      },
      traits: {
        independent: -0.6
      }
    }
  ]
},

{
  id: "Q059",
  text: {
    de: "Wie triffst du Entscheidungen unter Zeitdruck?",
    en: "How do you make decisions under time pressure?",
    fr: "Comment prenez-vous des décisions sous pression temporelle ?",
    es: "¿Cómo tomas decisiones bajo presión de tiempo?"
  },
  answers: [
    {
      text: {
        de: "Schnell und intuitiv",
        en: "Quickly and intuitively",
        fr: "Rapidement et intuitivement",
        es: "Rápida e intuitivamente"
      },
      traits: {
        impulsive: 0.7,
        risk_taking: 0.4
      }
    },
    {
      text: {
        de: "Ruhig und überlegt",
        en: "Calmly and thoughtfully",
        fr: "Calmement et avec réflexion",
        es: "Con calma y reflexión"
      },
      traits: {
        emotionally_stable: 0.6,
        analytical: 0.4
      }
    },
    {
      text: {
        de: "Mit Unsicherheit",
        en: "With uncertainty",
        fr: "Avec incertitude",
        es: "Con incertidumbre"
      },
      traits: {
        emotionally_stable: -0.6
      }
    }
  ]
},

{
  id: "Q060",
  text: {
    de: "Wie wichtig sind dir klare Regeln?",
    en: "How important are clear rules to you?",
    fr: "Quelle importance accordez-vous à des règles claires ?",
    es: "¿Qué tan importantes son las reglas claras para ti?"
  },
  answers: [
    {
      text: {
        de: "Sehr wichtig",
        en: "Very important",
        fr: "Très importantes",
        es: "Muy importantes"
      },
      traits: {
        organized: 0.7
      }
    },
    {
      text: {
        de: "Hilfreich, aber nicht zwingend",
        en: "Helpful, but not mandatory",
        fr: "Utiles, mais pas obligatoires",
        es: "Útiles, pero no obligatorias"
      },
      traits: {
        emotionally_stable: 0.4
      }
    },
    {
      text: {
        de: "Sie schränken mich ein",
        en: "They restrict me",
        fr: "Elles me limitent",
        es: "Me limitan"
      },
      traits: {
        creative: 0.5,
        organized: -0.6
      }
    }
  ]
},

{
  id: "Q061",
  text: {
    de: "Wie gehst du mit neuen Ideen um?",
    en: "How do you deal with new ideas?",
    fr: "Comment gérez-vous les nouvelles idées ?",
    es: "¿Cómo manejas las nuevas ideas?"
  },
  answers: [
    {
      text: {
        de: "Ich bin sofort begeistert",
        en: "I am immediately enthusiastic",
        fr: "Je suis immédiatement enthousiaste",
        es: "Me entusiasman de inmediato"
      },
      traits: {
        creative: 0.7,
        impulsive: 0.3
      }
    },
    {
      text: {
        de: "Ich prüfe sie kritisch",
        en: "I evaluate them critically",
        fr: "Je les évalue de manière critique",
        es: "Las evalúo críticamente"
      },
      traits: {
        analytical: 0.6
      }
    },
    {
      text: {
        de: "Ich bin eher skeptisch",
        en: "I am rather skeptical",
        fr: "Je suis plutôt sceptique",
        es: "Soy más bien escéptico"
      },
      traits: {
        creative: -0.5
      }
    }
  ]
},

{
  id: "Q062",
  text: {
    de: "Wie wichtig ist dir Anerkennung von anderen?",
    en: "How important is recognition from others to you?",
    fr: "Quelle importance a la reconnaissance des autres pour vous ?",
    es: "¿Qué tan importante es el reconocimiento de los demás para ti?"
  },
  answers: [
    {
      text: {
        de: "Sehr wichtig",
        en: "Very important",
        fr: "Très importante",
        es: "Muy importante"
      },
      traits: {
        social: 0.6,
        ambitious: 0.4
      }
    },
    {
      text: {
        de: "Angenehm, aber nicht entscheidend",
        en: "Nice, but not crucial",
        fr: "Agréable, mais pas crucial",
        es: "Agradable, pero no crucial"
      },
      traits: {
        emotionally_stable: 0.5
      }
    },
    {
      text: {
        de: "Unwichtig",
        en: "Unimportant",
        fr: "Sans importance",
        es: "No es importante"
      },
      traits: {
        independent: 0.6
      }
    }
  ]
},

{
  id: "Q063",
  text: {
    de: "Wie gehst du mit Konflikten um?",
    en: "How do you handle conflicts?",
    fr: "Comment gérez-vous les conflits ?",
    es: "¿Cómo manejas los conflictos?"
  },
  answers: [
    {
      text: {
        de: "Ich suche das Gespräch",
        en: "I seek dialogue",
        fr: "Je cherche le dialogue",
        es: "Busco el diálogo"
      },
      traits: {
        social: 0.6,
        empathic: 0.5
      }
    },
    {
      text: {
        de: "Ich ziehe mich zurück",
        en: "I withdraw",
        fr: "Je me retire",
        es: "Me retiro"
      },
      traits: {
        independent: 0.4,
        social: -0.4
      }
    },
    {
      text: {
        de: "Konflikte belasten mich stark",
        en: "Conflicts stress me a lot",
        fr: "Les conflits me stressent beaucoup",
        es: "Los conflictos me estresan mucho"
      },
      traits: {
        emotionally_stable: -0.7
      }
    }
  ]
},

{
  id: "Q064",
  text: {
    de: "Wie wichtig ist dir Erfolg im Vergleich zu Zufriedenheit?",
    en: "How important is success compared to contentment for you?",
    fr: "Quelle importance a le succès par rapport à la satisfaction pour vous ?",
    es: "¿Qué tan importante es el éxito en comparación con la satisfacción para ti?"
  },
  answers: [
    {
      text: {
        de: "Erfolg steht im Vordergrund",
        en: "Success comes first",
        fr: "Le succès passe avant tout",
        es: "El éxito es lo principal"
      },
      traits: {
        ambitious: 0.7
      }
    },
    {
      text: {
        de: "Beides ist gleich wichtig",
        en: "Both are equally important",
        fr: "Les deux sont également importants",
        es: "Ambos son igual de importantes"
      },
      traits: {
        emotionally_stable: 0.5
      }
    },
    {
      text: {
        de: "Zufriedenheit ist wichtiger",
        en: "Contentment is more important",
        fr: "La satisfaction est plus importante",
        es: "La satisfacción es más importante"
      },
      traits: {
        ambitious: -0.5
      }
    }
  ]
},

{
  id: "Q065",
  text: {
    de: "Wie gehst du mit Verantwortung um?",
    en: "How do you deal with responsibility?",
    fr: "Comment gérez-vous les responsabilités ?",
    es: "¿Cómo manejas la responsabilidad?"
  },
  answers: [
    {
      text: {
        de: "Ich übernehme sie gerne",
        en: "I gladly take it on",
        fr: "Je l'assume volontiers",
        es: "La asumo con gusto"
      },
      traits: {
        ambitious: 0.6,
        independent: 0.4
      }
    },
    {
      text: {
        de: "Wenn nötig",
        en: "When necessary",
        fr: "Si nécessaire",
        es: "Cuando es necesario"
      },
      traits: {
        emotionally_stable: 0.4
      }
    },
    {
      text: {
        de: "Ich vermeide sie eher",
        en: "I tend to avoid it",
        fr: "J'ai tendance à l'éviter",
        es: "Tiendo a evitarla"
      },
      traits: {
        ambitious: -0.6
      }
    }
  ]
},
{
  id: "Q066",
  text: {
    de: "Wie gehst du mit unerwarteten Problemen um?",
    en: "How do you deal with unexpected problems?",
    fr: "Comment gérez-vous les problèmes inattendus ?",
    es: "¿Cómo manejas los problemas inesperados?"
  },
  answers: [
    {
      text: {
        de: "Ich analysiere die Situation sachlich",
        en: "I analyze the situation objectively",
        fr: "J'analyse la situation de manière objective",
        es: "Analizo la situación objetivamente"
      },
      traits: {
        analytical: 0.7,
        emotionally_stable: 0.4
      }
    },
    {
      text: {
        de: "Ich reagiere spontan",
        en: "I react spontaneously",
        fr: "Je réagis spontanément",
        es: "Reacciono espontáneamente"
      },
      traits: {
        impulsive: 0.7,
        risk_taking: 0.3
      }
    },
    {
      text: {
        de: "Ich suche Unterstützung",
        en: "I seek support",
        fr: "Je cherche du soutien",
        es: "Busco apoyo"
      },
      traits: {
        social: 0.6,
        empathic: 0.4
      }
    }
  ]
},

{
  id: "Q067",
  text: {
    de: "Wie wichtig ist dir Struktur im Alltag?",
    en: "How important is structure in your daily life?",
    fr: "Quelle importance a la structure dans votre quotidien ?",
    es: "¿Qué tan importante es la estructura en tu día a día?"
  },
  answers: [
    {
      text: {
        de: "Sehr wichtig",
        en: "Very important",
        fr: "Très importante",
        es: "Muy importante"
      },
      traits: {
        organized: 0.7
      }
    },
    {
      text: {
        de: "Hilfreich, aber flexibel",
        en: "Helpful, but flexible",
        fr: "Utile, mais flexible",
        es: "Útil, pero flexible"
      },
      traits: {
        emotionally_stable: 0.4
      }
    },
    {
      text: {
        de: "Eher störend",
        en: "Rather limiting",
        fr: "Plutôt contraignante",
        es: "Más bien limitante"
      },
      traits: {
        creative: 0.5,
        organized: -0.6
      }
    }
  ]
},

{
  id: "Q068",
  text: {
    de: "Wie gehst du mit fremden Meinungen um?",
    en: "How do you deal with opposing opinions?",
    fr: "Comment gérez-vous les opinions différentes ?",
    es: "¿Cómo manejas opiniones diferentes?"
  },
  answers: [
    {
      text: {
        de: "Ich höre offen zu",
        en: "I listen openly",
        fr: "J'écoute avec ouverture",
        es: "Escucho con apertura"
      },
      traits: {
        empathic: 0.6,
        social: 0.4
      }
    },
    {
      text: {
        de: "Ich hinterfrage sie kritisch",
        en: "I question them critically",
        fr: "Je les questionne de manière critique",
        es: "Las cuestiono críticamente"
      },
      traits: {
        analytical: 0.6,
        independent: 0.3
      }
    },
    {
      text: {
        de: "Sie beeinflussen mich kaum",
        en: "They hardly influence me",
        fr: "Elles m'influencent peu",
        es: "Me influyen poco"
      },
      traits: {
        independent: 0.6
      }
    }
  ]
},

{
  id: "Q069",
  text: {
    de: "Wie wichtig ist dir persönlicher Erfolg?",
    en: "How important is personal success to you?",
    fr: "Quelle importance a le succès personnel pour vous ?",
    es: "¿Qué tan importante es el éxito personal para ti?"
  },
  answers: [
    {
      text: {
        de: "Sehr wichtig",
        en: "Very important",
        fr: "Très important",
        es: "Muy importante"
      },
      traits: {
        ambitious: 0.7
      }
    },
    {
      text: {
        de: "Wichtig, aber nicht alles",
        en: "Important, but not everything",
        fr: "Important, mais pas tout",
        es: "Importante, pero no lo es todo"
      },
      traits: {
        emotionally_stable: 0.4
      }
    },
    {
      text: {
        de: "Eher unwichtig",
        en: "Rather unimportant",
        fr: "Plutôt sans importance",
        es: "Más bien poco importante"
      },
      traits: {
        ambitious: -0.6
      }
    }
  ]
},

{
  id: "Q070",
  text: {
    de: "Wie gehst du mit neuen Herausforderungen um?",
    en: "How do you approach new challenges?",
    fr: "Comment abordez-vous les nouveaux défis ?",
    es: "¿Cómo afrontas nuevos desafíos?"
  },
  answers: [
    {
      text: {
        de: "Motiviert und neugierig",
        en: "Motivated and curious",
        fr: "Motivé et curieux",
        es: "Motivado y curioso"
      },
      traits: {
        ambitious: 0.5,
        creative: 0.4
      }
    },
    {
      text: {
        de: "Vorsichtig und abwägend",
        en: "Cautious and deliberate",
        fr: "Prudent et réfléchi",
        es: "Cauto y reflexivo"
      },
      traits: {
        analytical: 0.5,
        risk_taking: -0.4
      }
    },
    {
      text: {
        de: "Mit Zurückhaltung",
        en: "With hesitation",
        fr: "Avec hésitation",
        es: "Con duda"
      },
      traits: {
        emotionally_stable: -0.5
      }
    }
  ]
},

{
  id: "Q071",
  text: {
    de: "Wie wichtig ist dir Harmonie im sozialen Umfeld?",
    en: "How important is harmony in your social environment?",
    fr: "Quelle importance a l'harmonie dans votre environnement social ?",
    es: "¿Qué tan importante es la armonía en tu entorno social?"
  },
  answers: [
    {
      text: {
        de: "Sehr wichtig",
        en: "Very important",
        fr: "Très importante",
        es: "Muy importante"
      },
      traits: {
        empathic: 0.7,
        social: 0.4
      }
    },
    {
      text: {
        de: "Angenehm, aber nicht entscheidend",
        en: "Nice, but not crucial",
        fr: "Agréable, mais pas essentiel",
        es: "Agradable, pero no crucial"
      },
      traits: {
        emotionally_stable: 0.4
      }
    },
    {
      text: {
        de: "Eher unwichtig",
        en: "Rather unimportant",
        fr: "Plutôt sans importance",
        es: "Más bien poco importante"
      },
      traits: {
        empathic: -0.6
      }
    }
  ]
},

{
  id: "Q072",
  text: {
    de: "Wie arbeitest du unter Druck?",
    en: "How do you work under pressure?",
    fr: "Comment travaillez-vous sous pression ?",
    es: "¿Cómo trabajas bajo presión?"
  },
  answers: [
    {
      text: {
        de: "Konzentriert und ruhig",
        en: "Focused and calm",
        fr: "Concentré et calme",
        es: "Concentrado y tranquilo"
      },
      traits: {
        emotionally_stable: 0.7,
        analytical: 0.3
      }
    },
    {
      text: {
        de: "Schnell, aber unruhig",
        en: "Fast but restless",
        fr: "Rapide mais agité",
        es: "Rápido pero inquieto"
      },
      traits: {
        impulsive: 0.6,
        emotionally_stable: -0.4
      }
    },
    {
      text: {
        de: "Ich vermeide Drucksituationen",
        en: "I avoid pressure situations",
        fr: "J'évite les situations de pression",
        es: "Evito situaciones de presión"
      },
      traits: {
        emotionally_stable: -0.6
      }
    }
  ]
},

{
  id: "Q073",
  text: {
    de: "Wie wichtig ist dir Selbstbestimmung?",
    en: "How important is self-determination to you?",
    fr: "Quelle importance a l'autonomie pour vous ?",
    es: "¿Qué tan importante es la autodeterminación para ti?"
  },
  answers: [
    {
      text: {
        de: "Sehr wichtig",
        en: "Very important",
        fr: "Très importante",
        es: "Muy importante"
      },
      traits: {
        independent: 0.7
      }
    },
    {
      text: {
        de: "Wichtig, aber mit Rücksicht auf andere",
        en: "Important, but considering others",
        fr: "Importante, mais en tenant compte des autres",
        es: "Importante, pero considerando a los demás"
      },
      traits: {
        empathic: 0.4,
        independent: 0.3
      }
    },
    {
      text: {
        de: "Eher zweitrangig",
        en: "Rather secondary",
        fr: "Plutôt secondaire",
        es: "Más bien secundaria"
      },
      traits: {
        independent: -0.6
      }
    }
  ]
},

{
  id: "Q074",
  text: {
    de: "Wie gehst du mit Routinen um?",
    en: "How do you deal with routines?",
    fr: "Comment gérez-vous les routines ?",
    es: "¿Cómo manejas las rutinas?"
  },
  answers: [
    {
      text: {
        de: "Sie geben mir Sicherheit",
        en: "They give me security",
        fr: "Elles me donnent de la sécurité",
        es: "Me dan seguridad"
      },
      traits: {
        organized: 0.6,
        emotionally_stable: 0.4
      }
    },
    {
      text: {
        de: "Ich brauche Abwechslung",
        en: "I need variety",
        fr: "J'ai besoin de variété",
        es: "Necesito variedad"
      },
      traits: {
        creative: 0.6,
        impulsive: 0.3
      }
    },
    {
      text: {
        de: "Sie langweilen mich",
        en: "They bore me",
        fr: "Elles m'ennuient",
        es: "Me aburren"
      },
      traits: {
        organized: -0.6,
        creative: 0.4
      }
    }
  ]
},

{
  id: "Q075",
  text: {
    de: "Wie gehst du mit Fehlern anderer um?",
    en: "How do you deal with mistakes of others?",
    fr: "Comment gérez-vous les erreurs des autres ?",
    es: "¿Cómo manejas los errores de los demás?"
  },
  answers: [
    {
      text: {
        de: "Verständnisvoll und unterstützend",
        en: "Understanding and supportive",
        fr: "Compréhensif et solidaire",
        es: "Comprensivo y solidario"
      },
      traits: {
        empathic: 0.7,
        social: 0.4
      }
    },
    {
      text: {
        de: "Sachlich und lösungsorientiert",
        en: "Objective and solution-oriented",
        fr: "Objectif et orienté solutions",
        es: "Objetivo y orientado a soluciones"
      },
      traits: {
        analytical: 0.6
      }
    },
    {
      text: {
        de: "Eher ungeduldig",
        en: "Rather impatient",
        fr: "Plutôt impatient",
        es: "Más bien impaciente"
      },
      traits: {
        emotionally_stable: -0.4,
        empathic: -0.5
      }
    }
  ]
},
{
  id: "Q076",
  text: {
    de: "Wie gehst du mit Stresssituationen um?",
    en: "How do you handle stressful situations?",
    fr: "Comment gérez-vous les situations stressantes ?",
    es: "¿Cómo manejas las situaciones de estrés?"
  },
  answers: [
    {
      text: {
        de: "Ruhig und überlegt",
        en: "Calm and deliberate",
        fr: "Calme et réfléchi",
        es: "Tranquilo y reflexivo"
      },
      traits: {
        emotionally_stable: 0.7,
        analytical: 0.4
      }
    },
    {
      text: {
        de: "Spontan, ich improvisiere",
        en: "Spontaneous, I improvise",
        fr: "Spontané, j'improvise",
        es: "Espontáneo, improviso"
      },
      traits: {
        impulsive: 0.7,
        risk_taking: 0.4
      }
    },
    {
      text: {
        de: "Ich ziehe mich zurück",
        en: "I withdraw",
        fr: "Je me retire",
        es: "Me retiro"
      },
      traits: {
        emotionally_stable: -0.6
      }
    }
  ]
},

{
  id: "Q077",
  text: {
    de: "Wie wichtig ist dir Teamarbeit?",
    en: "How important is teamwork to you?",
    fr: "Quelle importance a le travail en équipe pour vous ?",
    es: "¿Qué tan importante es el trabajo en equipo para ti?"
  },
  answers: [
    {
      text: {
        de: "Sehr wichtig",
        en: "Very important",
        fr: "Très important",
        es: "Muy importante"
      },
      traits: {
        social: 0.7,
        empathic: 0.4
      }
    },
    {
      text: {
        de: "Abhängig von der Situation",
        en: "Depends on the situation",
        fr: "Cela dépend de la situation",
        es: "Depende de la situación"
      },
      traits: {
        independent: 0.4
      }
    },
    {
      text: {
        de: "Eher unwichtig",
        en: "Rather unimportant",
        fr: "Plutôt sans importance",
        es: "Más bien poco importante"
      },
      traits: {
        independent: 0.6,
        social: -0.5
      }
    }
  ]
},

{
  id: "Q078",
  text: {
    de: "Wie gehst du an kreative Aufgaben heran?",
    en: "How do you approach creative tasks?",
    fr: "Comment abordez-vous les tâches créatives ?",
    es: "¿Cómo abordas tareas creativas?"
  },
  answers: [
    {
      text: {
        de: "Mit Begeisterung und neuen Ideen",
        en: "With enthusiasm and new ideas",
        fr: "Avec enthousiasme et de nouvelles idées",
        es: "Con entusiasmo e ideas nuevas"
      },
      traits: {
        creative: 0.7,
        impulsive: 0.3
      }
    },
    {
      text: {
        de: "Systematisch und geplant",
        en: "Systematic and planned",
        fr: "De manière systématique et planifiée",
        es: "De forma sistemática y planificada"
      },
      traits: {
        analytical: 0.6,
        organized: 0.4
      }
    },
    {
      text: {
        de: "Eher zögerlich",
        en: "Rather hesitant",
        fr: "Plutôt hésitant",
        es: "Más bien vacilante"
      },
      traits: {
        creative: -0.5,
        emotionally_stable: -0.3
      }
    }
  ]
},

{
  id: "Q079",
  text: {
    de: "Wie gehst du mit Konflikten in Gruppen um?",
    en: "How do you handle conflicts in groups?",
    fr: "Comment gérez-vous les conflits en groupe ?",
    es: "¿Cómo manejas conflictos en grupos?"
  },
  answers: [
    {
      text: {
        de: "Ich versuche zu vermitteln",
        en: "I try to mediate",
        fr: "J'essaie de médiatiser",
        es: "Intento mediar"
      },
      traits: {
        empathic: 0.7,
        social: 0.5
      }
    },
    {
      text: {
        de: "Ich ziehe klare Grenzen",
        en: "I set clear boundaries",
        fr: "Je fixe des limites claires",
        es: "Establezco límites claros"
      },
      traits: {
        independent: 0.6
      }
    },
    {
      text: {
        de: "Ich vermeide den Konflikt",
        en: "I avoid the conflict",
        fr: "J'évite le conflit",
        es: "Evito el conflicto"
      },
      traits: {
        emotionally_stable: -0.5
      }
    }
  ]
},

{
  id: "Q080",
  text: {
    de: "Wie wichtig ist dir Eigeninitiative?",
    en: "How important is personal initiative to you?",
    fr: "Quelle importance a l'initiative personnelle pour vous ?",
    es: "¿Qué tan importante es la iniciativa personal para ti?"
  },
  answers: [
    {
      text: {
        de: "Sehr wichtig",
        en: "Very important",
        fr: "Très importante",
        es: "Muy importante"
      },
      traits: {
        independent: 0.7,
        ambitious: 0.4
      }
    },
    {
      text: {
        de: "Manchmal, je nach Aufgabe",
        en: "Sometimes, depending on the task",
        fr: "Parfois, selon la tâche",
        es: "A veces, según la tarea"
      },
      traits: {
        analytical: 0.4
      }
    },
    {
      text: {
        de: "Nicht so wichtig",
        en: "Not very important",
        fr: "Peu important",
        es: "No es muy importante"
      },
      traits: {
        independent: -0.6
      }
    }
  ]
},

{
  id: "Q081",
  text: {
    de: "Wie gehst du mit Veränderungen um?",
    en: "How do you handle changes?",
    fr: "Comment gérez-vous les changements ?",
    es: "¿Cómo manejas los cambios?"
  },
  answers: [
    {
      text: {
        de: "Offen und flexibel",
        en: "Open and flexible",
        fr: "Ouvert et flexible",
        es: "Abierto y flexible"
      },
      traits: {
        emotionally_stable: 0.7,
        risk_taking: 0.4
      }
    },
    {
      text: {
        de: "Ich plane Anpassungen sorgfältig",
        en: "I plan adjustments carefully",
        fr: "Je planifie les ajustements soigneusement",
        es: "Planifico los ajustes cuidadosamente"
      },
      traits: {
        analytical: 0.6,
        organized: 0.4
      }
    },
    {
      text: {
        de: "Es fällt mir schwer",
        en: "I find it difficult",
        fr: "Je trouve cela difficile",
        es: "Me resulta difícil"
      },
      traits: {
        emotionally_stable: -0.6
      }
    }
  ]
},

{
  id: "Q082",
  text: {
    de: "Wie wichtig ist dir Abenteuerlust?",
    en: "How important is your sense of adventure?",
    fr: "Quelle importance a votre goût de l'aventure ?",
    es: "¿Qué tan importante es tu sentido de la aventura?"
  },
  answers: [
    {
      text: {
        de: "Sehr wichtig",
        en: "Very important",
        fr: "Très important",
        es: "Muy importante"
      },
      traits: {
        risk_taking: 0.7,
        impulsive: 0.4
      }
    },
    {
      text: {
        de: "Ab und zu",
        en: "From time to time",
        fr: "De temps en temps",
        es: "De vez en cuando"
      },
      traits: {
        risk_taking: 0.4
      }
    },
    {
      text: {
        de: "Nicht so wichtig",
        en: "Not very important",
        fr: "Peu important",
        es: "No es muy importante"
      },
      traits: {
        risk_taking: -0.6
      }
    }
  ]
},

{
  id: "Q083",
  text: {
    de: "Wie gehst du mit Kritik an deiner Kreativität um?",
    en: "How do you handle criticism of your creativity?",
    fr: "Comment gérez-vous la critique de votre créativité ?",
    es: "¿Cómo manejas las críticas a tu creatividad?"
  },
  answers: [
    {
      text: {
        de: "Ich reflektiere sie offen",
        en: "I reflect on it openly",
        fr: "J'y réfléchis ouvertement",
        es: "Lo reflexiono abiertamente"
      },
      traits: {
        creative: 0.6,
        analytical: 0.4
      }
    },
    {
      text: {
        de: "Es trifft mich emotional",
        en: "It affects me emotionally",
        fr: "Cela m'affecte émotionnellement",
        es: "Me afecta emocionalmente"
      },
      traits: {
        emotionally_stable: -0.6
      }
    },
    {
      text: {
        de: "Ich ignoriere es",
        en: "I ignore it",
        fr: "Je l'ignore",
        es: "Lo ignoro"
      },
      traits: {
        independent: 0.5
      }
    }
  ]
},

{
  id: "Q084",
  text: {
    de: "Wie wichtig ist dir Pünktlichkeit?",
    en: "How important is punctuality to you?",
    fr: "Quelle importance a la ponctualité pour vous ?",
    es: "¿Qué tan importante es la puntualidad para ti?"
  },
  answers: [
    {
      text: {
        de: "Sehr wichtig",
        en: "Very important",
        fr: "Très importante",
        es: "Muy importante"
      },
      traits: {
        organized: 0.7
      }
    },
    {
      text: {
        de: "Angenehm, aber kein Muss",
        en: "Nice, but not essential",
        fr: "Bien, mais pas essentiel",
        es: "Agradable, pero no esencial"
      },
      traits: {
        emotionally_stable: 0.4
      }
    },
    {
      text: {
        de: "Mir egal",
        en: "I don't care",
        fr: "Peu importe",
        es: "Me da igual"
      },
      traits: {
        impulsive: 0.5,
        organized: -0.6
      }
    }
  ]
},

{
  id: "Q085",
  text: {
    de: "Wie gehst du mit komplexen Problemen um?",
    en: "How do you deal with complex problems?",
    fr: "Comment gérez-vous les problèmes complexes ?",
    es: "¿Cómo manejas problemas complejos?"
  },
  answers: [
    {
      text: {
        de: "Analysiere Schritt für Schritt",
        en: "I analyze step by step",
        fr: "J'analyse étape par étape",
        es: "Analizo paso a paso"
      },
      traits: {
        analytical: 0.7,
        organized: 0.4
      }
    },
    {
      text: {
        de: "Improvisiere nach Gefühl",
        en: "I improvise intuitively",
        fr: "J'improvise intuitivement",
        es: "Improviso intuitivamente"
      },
      traits: {
        impulsive: 0.6,
        risk_taking: 0.4
      }
    },
    {
      text: {
        de: "Hole mir Rat von anderen",
        en: "I seek advice from others",
        fr: "Je demande conseil aux autres",
        es: "Busco consejo de otros"
      },
      traits: {
        social: 0.6,
        empathic: 0.3
      }
    }
  ]
},
{
  id: "Q086",
  text: {
    de: "Wie gehst du mit Rückschlägen um?",
    en: "How do you deal with setbacks?",
    fr: "Comment gérez-vous les revers ?",
    es: "¿Cómo manejas los contratiempos?"
  },
  answers: [
    {
      text: {
        de: "Ich lerne daraus und mache weiter",
        en: "I learn from them and move on",
        fr: "J'apprends d'eux et continue",
        es: "Aprendo de ellos y sigo adelante"
      },
      traits: {
        emotionally_stable: 0.7,
        ambitious: 0.4
      }
    },
    {
      text: {
        de: "Es trifft mich hart",
        en: "It hits me hard",
        fr: "Cela me frappe fort",
        es: "Me impacta mucho"
      },
      traits: {
        emotionally_stable: -0.6
      }
    },
    {
      text: {
        de: "Ich frage andere nach Rat",
        en: "I ask others for advice",
        fr: "Je demande conseil aux autres",
        es: "Pregunto a otros por consejo"
      },
      traits: {
        social: 0.5,
        empathic: 0.4
      }
    }
  ]
},

{
  id: "Q087",
  text: {
    de: "Wie gehst du mit finanziellen Risiken um?",
    en: "How do you handle financial risks?",
    fr: "Comment gérez-vous les risques financiers ?",
    es: "¿Cómo manejas los riesgos financieros?"
  },
  answers: [
    {
      text: {
        de: "Ich kalkuliere genau",
        en: "I calculate carefully",
        fr: "Je calcule soigneusement",
        es: "Calculo cuidadosamente"
      },
      traits: {
        analytical: 0.6,
        risk_taking: -0.3
      }
    },
    {
      text: {
        de: "Ich investiere mutig",
        en: "I invest boldly",
        fr: "J'investis audacieusement",
        es: "Invierto con audacia"
      },
      traits: {
        risk_taking: 0.7,
        impulsive: 0.4
      }
    },
    {
      text: {
        de: "Ich lasse andere entscheiden",
        en: "I let others decide",
        fr: "Je laisse les autres décider",
        es: "Dejo que otros decidan"
      },
      traits: {
        independent: -0.5,
        social: 0.4
      }
    }
  ]
},

{
  id: "Q088",
  text: {
    de: "Wie gehst du mit Routineaufgaben um?",
    en: "How do you deal with routine tasks?",
    fr: "Comment gérez-vous les tâches routinières ?",
    es: "¿Cómo manejas las tareas rutinarias?"
  },
  answers: [
    {
      text: {
        de: "Effizient und strukturiert",
        en: "Efficiently and structured",
        fr: "Efficacement et structuré",
        es: "Eficientemente y estructurado"
      },
      traits: {
        organized: 0.7,
        analytical: 0.3
      }
    },
    {
      text: {
        de: "Langweilig, aber notwendig",
        en: "Boring but necessary",
        fr: "Ennuyeux mais nécessaire",
        es: "Aburrido pero necesario"
      },
      traits: {
        emotionally_stable: 0.4
      }
    },
    {
      text: {
        de: "Ich versuche sie zu vermeiden",
        en: "I try to avoid them",
        fr: "J'essaie de les éviter",
        es: "Intento evitarlas"
      },
      traits: {
        creative: 0.5,
        organized: -0.6
      }
    }
  ]
},

{
  id: "Q089",
  text: {
    de: "Wie wichtig ist dir Networking?",
    en: "How important is networking to you?",
    fr: "Quelle importance a le réseautage pour vous ?",
    es: "¿Qué tan importante es para ti el networking?"
  },
  answers: [
    {
      text: {
        de: "Sehr wichtig",
        en: "Very important",
        fr: "Très important",
        es: "Muy importante"
      },
      traits: {
        social: 0.7,
        ambitious: 0.4
      }
    },
    {
      text: {
        de: "Nützlich, aber nicht entscheidend",
        en: "Useful but not crucial",
        fr: "Utile mais pas crucial",
        es: "Útil pero no crucial"
      },
      traits: {
        independent: 0.4
      }
    },
    {
      text: {
        de: "Eher unwichtig",
        en: "Rather unimportant",
        fr: "Plutôt sans importance",
        es: "Más bien poco importante"
      },
      traits: {
        independent: 0.6,
        social: -0.5
      }
    }
  ]
},

{
  id: "Q090",
  text: {
    de: "Wie gehst du mit Kritik an deiner Arbeit um?",
    en: "How do you handle criticism of your work?",
    fr: "Comment gérez-vous la critique de votre travail ?",
    es: "¿Cómo manejas la crítica a tu trabajo?"
  },
  answers: [
    {
      text: {
        de: "Ich reflektiere und verbessere mich",
        en: "I reflect and improve",
        fr: "Je réfléchis et m'améliore",
        es: "Reflexiono y mejoro"
      },
      traits: {
        analytical: 0.6,
        emotionally_stable: 0.4
      }
    },
    {
      text: {
        de: "Es trifft mich emotional",
        en: "It affects me emotionally",
        fr: "Cela m'affecte émotionnellement",
        es: "Me afecta emocionalmente"
      },
      traits: {
        emotionally_stable: -0.6
      }
    },
    {
      text: {
        de: "Ich ignoriere sie",
        en: "I ignore it",
        fr: "Je l'ignore",
        es: "Lo ignoro"
      },
      traits: {
        independent: 0.5
      }
    }
  ]
},

{
  id: "Q091",
  text: {
    de: "Wie wichtig ist dir Innovationsfähigkeit?",
    en: "How important is your ability to innovate?",
    fr: "Quelle importance a votre capacité d'innovation ?",
    es: "¿Qué tan importante es tu capacidad de innovar?"
  },
  answers: [
    {
      text: {
        de: "Sehr wichtig",
        en: "Very important",
        fr: "Très important",
        es: "Muy importante"
      },
      traits: {
        creative: 0.7,
        independent: 0.4
      }
    },
    {
      text: {
        de: "Angenehm, aber kein Muss",
        en: "Nice, but not necessary",
        fr: "Agréable mais pas indispensable",
        es: "Agradable, pero no necesario"
      },
      traits: {
        creative: 0.4
      }
    },
    {
      text: {
        de: "Nicht wichtig",
        en: "Not important",
        fr: "Pas important",
        es: "No es importante"
      },
      traits: {
        creative: -0.6
      }
    }
  ]
},

{
  id: "Q092",
  text: {
    de: "Wie gehst du mit Risiken in Projekten um?",
    en: "How do you handle risks in projects?",
    fr: "Comment gérez-vous les risques dans les projets ?",
    es: "¿Cómo manejas los riesgos en proyectos?"
  },
  answers: [
    {
      text: {
        de: "Ich plane genau und kalkuliere",
        en: "I plan carefully and calculate",
        fr: "Je planifie soigneusement et calcule",
        es: "Planifico cuidadosamente y calculo"
      },
      traits: {
        analytical: 0.5,
        risk_taking: -0.4
      }
    },
    {
      text: {
        de: "Ich handle mutig und spontan",
        en: "I act boldly and spontaneously",
        fr: "J'agis audacieusement et spontanément",
        es: "Actúo con audacia y espontaneidad"
      },
      traits: {
        risk_taking: 0.7,
        impulsive: 0.4
      }
    },
    {
      text: {
        de: "Ich lasse andere entscheiden",
        en: "I let others decide",
        fr: "Je laisse les autres décider",
        es: "Dejo que otros decidan"
      },
      traits: {
        independent: -0.5,
        social: 0.4
      }
    }
  ]
},

{
  id: "Q093",
  text: {
    de: "Wie wichtig ist dir Effizienz?",
    en: "How important is efficiency to you?",
    fr: "Quelle importance a l'efficacité pour vous ?",
    es: "¿Qué tan importante es la eficiencia para ti?"
  },
  answers: [
    {
      text: {
        de: "Sehr wichtig",
        en: "Very important",
        fr: "Très important",
        es: "Muy importante"
      },
      traits: {
        organized: 0.7,
        analytical: 0.4
      }
    },
    {
      text: {
        de: "Wünschenswert, aber nicht entscheidend",
        en: "Desirable but not crucial",
        fr: "Souhaitable mais pas crucial",
        es: "Deseable pero no crucial"
      },
      traits: {
        emotionally_stable: 0.4
      }
    },
    {
      text: {
        de: "Mir egal",
        en: "I don't care",
        fr: "Peu importe",
        es: "Me da igual"
      },
      traits: {
        creative: 0.5,
        organized: -0.6
      }
    }
  ]
},

{
  id: "Q094",
  text: {
    de: "Wie gehst du mit Feedback von Kollegen um?",
    en: "How do you handle feedback from colleagues?",
    fr: "Comment gérez-vous les retours de vos collègues ?",
    es: "¿Cómo manejas el feedback de colegas?"
  },
  answers: [
    {
      text: {
        de: "Ich höre zu und setze es um",
        en: "I listen and implement it",
        fr: "J'écoute et je mets en pratique",
        es: "Escucho y lo implemento"
      },
      traits: {
        social: 0.5,
        analytical: 0.4
      }
    },
    {
      text: {
        de: "Ich reflektiere kritisch",
        en: "I reflect critically",
        fr: "Je réfléchis de manière critique",
        es: "Reflexiono críticamente"
      },
      traits: {
        analytical: 0.7
      }
    },
    {
      text: {
        de: "Ich ignoriere es meist",
        en: "I mostly ignore it",
        fr: "Je l'ignore généralement",
        es: "Lo ignoro la mayoría del tiempo"
      },
      traits: {
        independent: 0.5
      }
    }
  ]
},

{
  id: "Q095",
  text: {
    de: "Wie gehst du mit Unsicherheiten um?",
    en: "How do you deal with uncertainties?",
    fr: "Comment gérez-vous les incertitudes ?",
    es: "¿Cómo manejas las incertidumbres?"
  },
  answers: [
    {
      text: {
        de: "Ich plane und kalkuliere",
        en: "I plan and calculate",
        fr: "Je planifie et calcule",
        es: "Planifico y calculo"
      },
      traits: {
        analytical: 0.6,
        emotionally_stable: 0.4
      }
    },
    {
      text: {
        de: "Ich handle spontan",
        en: "I act spontaneously",
        fr: "J'agis spontanément",
        es: "Actúo espontáneamente"
      },
      traits: {
        impulsive: 0.6,
        risk_taking: 0.4
      }
    },
    {
      text: {
        de: "Ich bitte andere um Rat",
        en: "I ask others for advice",
        fr: "Je demande conseil aux autres",
        es: "Pido consejo a otros"
      },
      traits: {
        social: 0.5,
        empathic: 0.4
      }
    }
  ]
},

{
  id: "Q096",
  text: {
    de: "Wie gehst du mit Konkurrenz um?",
    en: "How do you deal with competition?",
    fr: "Comment gérez-vous la concurrence ?",
    es: "¿Cómo manejas la competencia?"
  },
  answers: [
    {
      text: {
        de: "Motiviert und ehrgeizig",
        en: "Motivated and ambitious",
        fr: "Motivé et ambitieux",
        es: "Motivado y ambicioso"
      },
      traits: {
        ambitious: 0.7,
        competitive: 0.5
      }
    },
    {
      text: {
        de: "Ich vergleiche nur, ohne Stress",
        en: "I compare but stay relaxed",
        fr: "Je compare mais reste détendu",
        es: "Comparo pero me mantengo relajado"
      },
      traits: {
        emotionally_stable: 0.6
      }
    },
    {
      text: {
        de: "Ich ignoriere Konkurrenz",
        en: "I ignore competition",
        fr: "J'ignore la concurrence",
        es: "Ignoro la competencia"
      },
      traits: {
        independent: 0.5
      }
    }
  ]
},

{
  id: "Q097",
  text: {
    de: "Wie gehst du mit Mehrfachaufgaben um?",
    en: "How do you handle multitasking?",
    fr: "Comment gérez-vous le multitâche ?",
    es: "¿Cómo manejas múltiples tareas?"
  },
  answers: [
    {
      text: {
        de: "Ich priorisiere und strukturiere",
        en: "I prioritize and structure",
        fr: "Je priorise et structure",
        es: "Prioritizo y estructuro"
      },
      traits: {
        organized: 0.7,
        analytical: 0.4
      }
    },
    {
      text: {
        de: "Ich mache spontan, was gerade passt",
        en: "I do whatever fits spontaneously",
        fr: "Je fais ce qui convient spontanément",
        es: "Hago lo que encaje espontáneamente"
      },
      traits: {
        impulsive: 0.7,
        risk_taking: 0.4
      }
    },
    {
      text: {
        de: "Ich delegiere viel",
        en: "I delegate a lot",
        fr: "Je délègue beaucoup",
        es: "Delego mucho"
      },
      traits: {
        social: 0.5,
        independent: 0.3
      }
    }
  ]
},

{
  id: "Q098",
  text: {
    de: "Wie wichtig ist dir langfristige Planung?",
    en: "How important is long-term planning to you?",
    fr: "Quelle importance a la planification à long terme pour vous ?",
    es: "¿Qué tan importante es la planificación a largo plazo para ti?"
  },
  answers: [
    {
      text: {
        de: "Sehr wichtig",
        en: "Very important",
        fr: "Très important",
        es: "Muy importante"
      },
      traits: {
        organized: 0.7,
        analytical: 0.4
      }
    },
    {
      text: {
        de: "Hilfreich, aber nicht zwingend",
        en: "Helpful but not mandatory",
        fr: "Utile mais pas obligatoire",
        es: "Útil, pero no obligatorio"
      },
      traits: {
        emotionally_stable: 0.4
      }
    },
    {
      text: {
        de: "Ich lebe lieber spontan",
        en: "I prefer to live spontaneously",
        fr: "Je préfère vivre spontanément",
        es: "Prefiero vivir espontáneamente"
      },
      traits: {
        impulsive: 0.6,
        organized: -0.5
      }
    }
  ]
},

{
  id: "Q099",
  text: {
    de: "Wie gehst du mit kritischen Entscheidungen um?",
    en: "How do you handle critical decisions?",
    fr: "Comment gérez-vous les décisions critiques ?",
    es: "¿Cómo manejas decisiones críticas?"
  },
  answers: [
    {
      text: {
        de: "Analysiere und überlege gründlich",
        en: "I analyze and think carefully",
        fr: "J'analyse et réfléchis attentivement",
        es: "Analizo y reflexiono cuidadosamente"
      },
      traits: {
        analytical: 0.7,
        organized: 0.4
      }
    },
    {
      text: {
        de: "Handle intuitiv",
        en: "I act intuitively",
        fr: "J'agis intuitivement",
        es: "Actúo intuitivamente"
      },
      traits: {
        impulsive: 0.6,
        risk_taking: 0.4
      }
    },
    {
      text: {
        de: "Hole Rat ein",
        en: "I seek advice",
        fr: "Je demande conseil",
        es: "Busco consejo"
      },
      traits: {
        social: 0.5,
        independent: 0.3
      }
    }
  ]
}
];


const TRAIT_DEFINITIONS = {
  analytical: {
    name: {
      de: "Analytisches Denken",
      en: "Analytical Thinking",
      fr: "Pensée Analytique",
      es: "Pensamiento Analítico"
    },
    description: {
      de: "Neigung zu logischem, systematischem Denken",
      en: "Tendency towards logical, systematic thinking",
      fr: "Tendance à la pensée logique et systématique",
      es: "Tendencia al pensamiento lógico y sistemático"
    }
  },
  impulsive: {
    name: {
      de: "Impulsivität",
      en: "Impulsiveness",
      fr: "Impulsivité",
      es: "Impulsividad"
    },
    description: {
      de: "Tendenz zu spontanen Entscheidungen und Handlungen",
      en: "Tendency towards spontaneous decisions and actions",
      fr: "Tendance aux décisions et actions spontanées",
      es: "Tendencia a decisiones y acciones espontáneas"
    }
  },
  social: {
    name: {
      de: "Soziale Orientierung",
      en: "Social Orientation",
      fr: "Orientation Sociale",
      es: "Orientación Social"
    },
    description: {
      de: "Fokus auf soziale Beziehungen und Interaktionen",
      en: "Focus on social relationships and interactions",
      fr: "Concentration sur les relations et interactions sociales",
      es: "Enfoque en relaciones e interacciones sociales"
    }
  },
  independent: {
    name: {
      de: "Unabhängigkeit",
      en: "Independence",
      fr: "Indépendance",
      es: "Independencia"
    },
    description: {
      de: "Präferenz für eigenständiges Handeln und Denken",
      en: "Preference for autonomous action and thinking",
      fr: "Préférence pour l'action et la pensée autonomes",
      es: "Preferencia por acción y pensamiento autónomos"
    }
  },
  emotionally_stable: {
    name: {
      de: "Emotionale Stabilität",
      en: "Emotional Stability",
      fr: "Stabilité Émotionnelle",
      es: "Estabilidad Emocional"
    },
    description: {
      de: "Fähigkeit, unter Stress ruhig und ausgeglichen zu bleiben",
      en: "Ability to remain calm and balanced under stress",
      fr: "Capacité à rester calme et équilibré sous le stress",
      es: "Capacidad de mantenerse tranquilo y equilibrado bajo estrés"
    }
  },
  organized: {
    name: {
      de: "Organisiertheit",
      en: "Organization",
      fr: "Organisation",
      es: "Organización"
    },
    description: {
      de: "Tendenz zu Struktur, Planung und Ordnung",
      en: "Tendency towards structure, planning and order",
      fr: "Tendance à la structure, la planification et l'ordre",
      es: "Tendencia hacia estructura, planificación y orden"
    }
  },
  creative: {
    name: {
      de: "Kreativität",
      en: "Creativity",
      fr: "Créativité",
      es: "Creatividad"
    },
    description: {
      de: "Neigung zu innovativem und unkonventionellem Denken",
      en: "Tendency towards innovative and unconventional thinking",
      fr: "Tendance à la pensée innovante et non conventionnelle",
      es: "Tendencia al pensamiento innovador y no convencional"
    }
  },
  empathic: {
    name: {
      de: "Empathie",
      en: "Empathy",
      fr: "Empathie",
      es: "Empatía"
    },
    description: {
      de: "Fähigkeit, sich in andere hineinzuversetzen",
      en: "Ability to empathize with others",
      fr: "Capacité à faire preuve d'empathie envers les autres",
      es: "Capacidad de empatizar con otros"
    }
  },
  ambitious: {
    name: {
      de: "Ehrgeiz",
      en: "Ambition",
      fr: "Ambition",
      es: "Ambición"
    },
    description: {
      de: "Streben nach Erfolg und Leistung",
      en: "Striving for success and achievement",
      fr: "Aspiration au succès et à la réussite",
      es: "Aspiración al éxito y logros"
    }
  },
  risk_taking: {
    name: {
      de: "Risikobereitschaft",
      en: "Risk-Taking",
      fr: "Prise de Risque",
      es: "Toma de Riesgos"
    },
    description: {
      de: "Bereitschaft, Risiken einzugehen",
      en: "Willingness to take risks",
      fr: "Volonté de prendre des risques",
      es: "Disposición a asumir riesgos"
    }
  }
};