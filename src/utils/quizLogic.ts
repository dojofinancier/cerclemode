import { Archetype, QuizResult } from '../types/quiz';

export const calculateResult = (answers: Archetype[]): QuizResult => {
  const counts = { S: 0, C: 0, A: 0, G: 0 };
  
  answers.forEach(answer => {
    counts[answer]++;
  });

  const maxCount = Math.max(...Object.values(counts));
  const topArchetypes = Object.entries(counts)
    .filter(([_, count]) => count === maxCount)
    .map(([archetype, _]) => archetype as Archetype);

  if (topArchetypes.length === 1) {
    const archetype = topArchetypes[0];
    return {
      archetype,
      title: getArchetypeTitle(archetype),
      description: getArchetypeDescription(archetype),
      isHybrid: false
    };
  } else {
    // Profil mixte
    const hybridTitle = getHybridTitle(topArchetypes);
    const hybridDescription = getHybridDescription(topArchetypes);
    return {
      archetype: topArchetypes.join('-'),
      title: `Profil mixte : ${hybridTitle}`,
      description: hybridDescription,
      isHybrid: true
    };
  }
};

const getHybridTitle = (archetypes: Archetype[]): string => {
  const titles = archetypes.map(archetype => {
    const baseTitle = getArchetypeTitle(archetype);
    // Remove "Le" or "L'" from second title onwards
    if (archetypes.indexOf(archetype) > 0) {
      return baseTitle.replace(/^Le\s/, '').replace(/^L'/, '');
    }
    return baseTitle;
  });
  return titles.join('–');
};

const getHybridDescription = (archetypes: Archetype[]): string => {
  const descriptions = archetypes.map(archetype => getArchetypeDescription(archetype));
  return descriptions.join('\n\n');
};

const getArchetypeTitle = (archetype: Archetype): string => {
  const titles = {
    S: 'Le Stratège',
    C: 'Le Connecteur',
    A: 'L\'Aventurier',
    G: 'Le Gardien'
  };
  return titles[archetype];
};

const getArchetypeDescription = (archetype: Archetype): string => {
  const descriptions = {
    S: "Tu es l'architecte de la famille : routines, objectifs, efficacité. Ton prochain niveau : laisser un peu de place à la spontanéité sans perdre ta structure.",
    C: "Tu mènes par l'empathie et la présence. Ta force, c'est de faire sentir à tes enfants qu'ils comptent. Ton défi : créer des systèmes pour protéger ton énergie.",
    A: "Tu rends l'enfance mémorable : nouvelles idées, sorties, projets. Ton opportunité : assurer une base de routine pour soutenir l'exploration à long terme.",
    G: "Tu es l'ancre de la famille : sécurité, principes, constance. Ton défi : saupoudrer de la nouveauté et vérifier régulièrement l'état émotionnel de chacun."
  };
  return descriptions[archetype];
};

export const trackEvent = (eventName: string, properties?: any) => {
  // Analytics tracking placeholder
  console.log(`Event: ${eventName}`, properties);
  
  // Google Analytics / GTM integration would go here
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, properties);
  }
};