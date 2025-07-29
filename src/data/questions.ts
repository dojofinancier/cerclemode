import { QuizQuestion } from '../types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Ton samedi idéal avec les enfants :",
    options: [
      { text: "Une activité improvisée : randonnée, géocaching, nouveau musée ou parc.", archetype: 'A' },
      { text: "Un moment tranquille : cuisiner ensemble, jaser, lire.", archetype: 'C' },
      { text: "Un horaire précis avec les activités et objectifs planifiés d'avance.", archetype: 'S' },
      { text: "Enseigner des habiletés pratiques (cuisine, budget, petites réparations) dans un cadre stable.", archetype: 'G' }
    ]
  },
  {
    id: 2,
    question: "Quand un conflit éclate entre les enfants, tu…",
    options: [
      { text: "Rappelles les règles et les conséquences pour éviter que ça se reproduise.", archetype: 'G' },
      { text: "Cherches la cause du problème et proposes une solution structurée.", archetype: 'S' },
      { text: "Donnes la parole à chacun et valides ce qu'ils ressentent.", archetype: 'C' },
      { text: "Rediriges leur énergie vers un jeu ou un défi collaboratif.", archetype: 'A' }
    ]
  },
  {
    id: 3,
    question: "Le livre/blogue de parentalité que tu ouvrirais en premier :",
    options: [
      { text: "« Disciplines et limites : bâtir des valeurs solides ».", archetype: 'G' },
      { text: "« Des aventures clés en main pour créer des souvenirs ».", archetype: 'A' },
      { text: "« Systèmes simples pour une routine familiale zen ».", archetype: 'S' },
      { text: "« Élever des enfants émotionnellement intelligents ».", archetype: 'C' }
    ]
  },
  {
    id: 4,
    question: "Ta plus grande crainte comme père :",
    options: [
      { text: "Rater des occasions de vraiment connecter avec mes enfants.", archetype: 'C' },
      { text: "Qu'ils manquent d'expériences marquantes ou de souvenirs excitants.", archetype: 'A' },
      { text: "Ne pas réussir à les protéger ou à leur inculquer des valeurs solides.", archetype: 'G' },
      { text: "Perdre du temps dans des routines inefficaces ou ne pas atteindre nos objectifs.", archetype: 'S' }
    ]
  },
  {
    id: 5,
    question: "Pour un voyage en famille, tu :",
    options: [
      { text: "Choisis une destination familière, sécuritaire, avec une routine prévisible.", archetype: 'G' },
      { text: "Crées un fichier budget/logistique/timeline avec plans B.", archetype: 'S' },
      { text: "Demandes à chacun ce qui rendrait le voyage significatif.", archetype: 'C' },
      { text: "Pars dans un endroit plein d'aventures et improvises en chemin.", archetype: 'A' }
    ]
  },
  {
    id: 6,
    question: "Ton réflexe quand ton enfant est frustré par ses devoirs :",
    options: [
      { text: "Valider son émotion, puis proposer ensemble quelques idées de soutien.", archetype: 'C' },
      { text: "Segmenter la tâche en petites étapes avec un plan clair.", archetype: 'S' },
      { text: "Transformer ça en jeu ou défi chronométré.", archetype: 'A' },
      { text: "Insister sur la responsabilité, rester à côté pour s'assurer que c'est bien fait.", archetype: 'G' }
    ]
  },
  {
    id: 7,
    question: "Les écrans à la maison, c'est :",
    options: [
      { text: "Des règles fermes : heures fixes, pas d'exceptions.", archetype: 'G' },
      { text: "Une discussion ouverte : l'impact sur l'humeur, les besoins de chacun.", archetype: 'C' },
      { text: "Un usage créatif : projets, jeux collaboratifs, négociation de temps.", archetype: 'A' },
      { text: "Des limites claires avec des tableaux horaires pour toute la famille.", archetype: 'S' }
    ]
  },
  {
    id: 8,
    question: "Quand ta conjointe/ton partenaire se sent surchargé(e), tu…",
    options: [
      { text: "Écoutes profondément, reconnais sa fatigue, demandes \"Comment je peux t'aider?\"", archetype: 'C' },
      { text: "Proposes un système de partage des tâches ou un nouvel horaire.", archetype: 'S' },
      { text: "Planifies une escapade ou une surprise pour lui/elle changer les idées.", archetype: 'A' },
      { text: "Renforces les responsabilités de chacun pour alléger sa charge mentale.", archetype: 'G' }
    ]
  },
  {
    id: 9,
    question: "Ton enfant vit un conflit avec un ami. Tu :",
    options: [
      { text: "Fais un jeu de rôle pour planifier quoi dire la prochaine fois.", archetype: 'S' },
      { text: "L'aides à mettre des mots sur ses émotions et à pratiquer l'empathie.", archetype: 'C' },
      { text: "L'encourages à essayer une nouvelle activité et se faire d'autres amis.", archetype: 'A' },
      { text: "L'aides à poser ses limites et à se tenir debout.", archetype: 'G' }
    ]
  },
  {
    id: 10,
    question: "Comment suis-tu tes \"progrès\" comme parent ?",
    options: [
      { text: "Au feeling : \"Est-ce qu'on s'est vraiment connectés aujourd'hui?\"", archetype: 'C' },
      { text: "Listes, journaux, indicateurs (temps de qualité, objectifs atteints).", archetype: 'S' },
      { text: "En comptant les aventures et nouveautés vécues chaque mois.", archetype: 'A' },
      { text: "En vérifiant si les règles sont respectées et la responsabilité assumée.", archetype: 'G' }
    ]
  },
  {
    id: 11,
    question: "Une semaine chaotique débarque. Ta réaction :",
    options: [
      { text: "Réorganiser l'horaire, éliminer les tâches non essentielles.", archetype: 'S' },
      { text: "Tenir une petite réunion familiale pour nommer ce que chacun ressent.", archetype: 'C' },
      { text: "Faire quelque chose de complètement différent pour \"reset\" (feu de camp, film tardif).", archetype: 'A' },
      { text: "Resserrer les routines pour ramener l'ordre.", archetype: 'G' }
    ]
  },
  {
    id: 12,
    question: "Comment imagines-tu ton enfant à 25 ans ? Tu veux surtout qu'il/elle…",
    options: [
      { text: "Sache établir des objectifs et les atteindre par lui-même.", archetype: 'S' },
      { text: "Ait une intelligence émotionnelle forte et des relations saines.", archetype: 'C' },
      { text: "Soit curieux, résilient et prêt à explorer sans peur.", archetype: 'A' },
      { text: "Soit responsable, fiable, avec des valeurs solides.", archetype: 'G' }
    ]
  }
];