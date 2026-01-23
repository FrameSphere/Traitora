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