import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Mail, CheckCircle } from 'lucide-react';
import { QuizState, Archetype } from '../types/quiz';
import { quizQuestions } from '../data/questions';
import { calculateResult, trackEvent } from '../utils/quizLogic';
import { ProgressBar } from './ProgressBar';
import { sendToMakeCom, testWebhookConnection } from '../utils/webhook';

interface QuizProps {
  onBackToLanding: () => void;
}

const getArchetypeImage = (archetype: string): string => {
  // For hybrid results, take the first archetype
  const primaryArchetype = archetype.includes('-') ? archetype.split('-')[0] : archetype;
  
  switch (primaryArchetype) {
    case 'S':
      return '/Stratege.webp';
    case 'C':
      return '/Connecteur.webp';
    case 'A':
      return '/Aventurier.webp';
    case 'G':
      return '/Gardien.webp';
    default:
      return '/Stratege.webp'; // fallback
  }
};

export const Quiz: React.FC<QuizProps> = ({ onBackToLanding }) => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: [],
    isCompleted: false,
    result: null,
    email: '',
    emailSubmitted: false
  });

  // Track quiz start - must be called before any conditional returns
  React.useEffect(() => {
    if (quizState.currentQuestion === 0 && quizState.answers.length === 0) {
      trackEvent('quiz_started');
    }
  }, [quizState.currentQuestion, quizState.answers.length]);

  // Debug webhook connection on component mount
  React.useEffect(() => {
    testWebhookConnection();
  }, []);

  const handleAnswer = (archetype: Archetype) => {
    const newAnswers = [...quizState.answers, archetype];
    const nextQuestion = quizState.currentQuestion + 1;

    if (nextQuestion >= quizQuestions.length) {
      // Quiz terminé
      const result = calculateResult(newAnswers);
      setQuizState({
        ...quizState,
        answers: newAnswers,
        isCompleted: true,
        result
      });
      trackEvent('quiz_completed', { 
        archetype: result.archetype,
        is_hybrid: result.isHybrid 
      });
    } else {
      setQuizState({
        ...quizState,
        answers: newAnswers,
        currentQuestion: nextQuestion
      });
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quizState.email.trim()) {
      // Send data to Make.com webhook
      if (quizState.result) {
        const webhookData = {
          email: quizState.email,
          archetype: quizState.result.archetype,
          archetypeTitle: quizState.result.title,
          isHybrid: quizState.result.isHybrid,
          answers: quizState.answers,
          completedAt: new Date().toISOString(),
          userAgent: navigator.userAgent,
        };
        
        // Send to webhook (don't wait for response to avoid blocking UI)
        sendToMakeCom(webhookData).catch(error => {
          console.error('Webhook error:', error);
        });
      }
      
      setQuizState({
        ...quizState,
        emailSubmitted: true
      });
      trackEvent('email_submitted', { 
        email: quizState.email,
        archetype: quizState.result?.archetype 
      });
    }
  };

  const handleBackToQuestion = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState({
        ...quizState,
        currentQuestion: quizState.currentQuestion - 1,
        answers: quizState.answers.slice(0, -1)
      });
    }
  };

  // Page des résultats - email soumis
  if (quizState.isCompleted && quizState.emailSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl lg:text-4xl font-heading font-bold text-teal-900 mb-6">
              Merci !
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Tu recevras ton plan d'action personnalisé par courriel dans les prochaines minutes. 
              Vérifie aussi tes courriers indésirables au cas où.
            </p>
            <div className="bg-teal-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-heading font-bold text-teal-900 mb-2">
                {quizState.result?.title}
              </h3>
              <p className="text-slate-700">
                {quizState.result?.description}
              </p>
            </div>
            <button
              onClick={onBackToLanding}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Retour à l'accueil
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Page des résultats avec formulaire email
  if (quizState.isCompleted && quizState.result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h1 className="text-3xl lg:text-4xl font-heading font-bold text-teal-900 mb-4">
                Ton résultat
              </h1>
              <div className="border-2 border-teal-900 rounded-xl p-6 mb-6">
                <h2 className="text-2xl font-heading font-bold mb-3 text-teal-900">
                  {quizState.result.title}
                </h2>
                <div className="w-auto h-50 mx-auto mb-4 rounded-lg overflow-hidden flex justify-center">
                  <img 
                    src={getArchetypeImage(quizState.result.archetype)} 
                    alt={quizState.result.title}
                    className="max-h-48 w-auto object-contain"
                  />
                </div>
                <p className="text-slate-700 leading-relaxed">
                  {quizState.result.description}
                </p>
              </div>
            </div>

            <div className="border-t pt-8">
              <h3 className="text-xl font-heading font-bold text-teal-900 mb-4 text-center">
                Reçois ton plan d'action personnalisé
              </h3>
              <p className="text-slate-600 text-center mb-6">
                Entre ton courriel pour recevoir tes 3 actions concrètes et des ressources exclusives.
              </p>
              
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={quizState.email}
                    onChange={(e) => setQuizState({ ...quizState, email: e.target.value })}
                    placeholder="ton.courriel@exemple.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Envoyer mon plan d'action
                </button>
              </form>
              
              <p className="text-xs text-slate-500 text-center mt-4">
                Tes données sont confidentielles et ne seront jamais vendues.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Questions du quiz
  const currentQ = quizQuestions[quizState.currentQuestion];

  return (
    <div className="min-h-screen bg-teal-900">
      <div className="max-w-4xl mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={quizState.currentQuestion === 0 ? onBackToLanding : handleBackToQuestion}
            className="flex items-center gap-2 text-white hover:text-orange-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {quizState.currentQuestion === 0 ? 'Retour' : 'Question précédente'}
          </button>
          <div className="flex items-center">
            <img 
              src="/Fav.webp" 
              alt="Le Cercle des Pères" 
              className="h-10 w-10"
            />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <ProgressBar 
            current={quizState.currentQuestion + 1} 
            total={quizQuestions.length} 
          />
        </div>

        {/* Question - Centered and taking available space */}
        <div className="flex-1 flex flex-col justify-center max-w-3xl mx-auto w-full">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-12 text-center leading-relaxed">
            {currentQ.question}
          </h2>

          <div className="space-y-6">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.archetype)}
                className="w-full text-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-b-4 border-gray-300 hover:border-orange-400"
              >
                <p className="text-gray-800 font-medium text-lg leading-relaxed">
                  {option.text}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center mt-8 text-sm text-slate-500">
          <p className="text-white opacity-80">Pas de bonne ou mauvaise réponse. Choisis ce qui te ressemble le plus.</p>
        </div>
      </div>
    </div>
  );
};