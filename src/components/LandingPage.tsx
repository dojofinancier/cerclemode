import React from 'react';
import { ArrowRight, Clock, Target, Lock, CheckCircle, Users, Heart, Lightbulb, ChevronDown } from 'lucide-react';
import { Header } from './Header';

interface LandingPageProps {
  onStartQuiz: () => void;
  onLogin: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStartQuiz, onLogin }) => {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqItems = [
    {
      question: "Combien de temps ça prend ?",
      answer: "Moins de 2 minutes. Le quiz contient 12 questions rapides, et tu reçois ton résultat immédiatement."
    },
    {
      question: "C'est gratuit ?",
      answer: "Oui, le quiz et le résultat sont entièrement gratuits. L'application à une cohorte privée est optionnelle."
    },
    {
      question: "Mes réponses sont-elles confidentielles ?",
      answer: "Absolument. Tes données ne sont jamais vendues et ne servent qu'à améliorer notre offre de services."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header onStartQuiz={onStartQuiz} onLogin={onLogin} />

      {/* Hero Section */}
      <section className="bg-teal-900 pt-32 pb-20 lg:pt-40 lg:pb-32" style={{ paddingTop: '10rem', paddingBottom: '8rem' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Quel est ton <span className="text-orange-500">Mode Papa</span> ?
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Découvre en 90 secondes ton archétype de père — et comment l'utiliser pour créer plus de connexion, moins de friction.
          </p>
          <button
            onClick={onStartQuiz}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            Commencer le quiz
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Pourquoi faire ce quiz */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-teal-900 text-center mb-12">
            Pourquoi faire ce quiz ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-heading font-bold text-teal-900 mb-2">Rapide</h3>
              <p className="text-slate-600">12 questions, moins de 2 minutes.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <Target className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-heading font-bold text-teal-900 mb-2">Personnalisé</h3>
              <p className="text-slate-600">Résultat instantané + mini-plan d'action selon ton profil.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <Lightbulb className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-heading font-bold text-teal-900 mb-2">Utile maintenant</h3>
              <p className="text-slate-600">Un conseil pratique pour ce soir avec tes enfants.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <Lock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-heading font-bold text-teal-900 mb-2">Exclusif</h3>
              <p className="text-slate-600">Accès prioritaire à nos cohortes privées (sur invitation).</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button
              onClick={onStartQuiz}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
            >
              Commencer le quiz
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Ce que tu reçois */}
      <section className="py-16 bg-teal-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">
            Ce que tu reçois
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 text-center">🧭</div>
              <h3 className="text-xl font-heading font-bold text-teal-900 mb-3">
                Ton archétype de père
              </h3>
              <p className="text-slate-600">
                Stratège, Connecteur, Aventurier ou Gardien — découvre quel type de père tu es naturellement.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 text-center">🎯</div>
              <h3 className="text-xl font-heading font-bold text-teal-900 mb-3">
                3 actions simples
              </h3>
              <p className="text-slate-600">
                Des conseils concrets que tu peux appliquer dès cette semaine avec tes enfants.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 text-center">🔐</div>
              <h3 className="text-xl font-heading font-bold text-teal-900 mb-3">
                Accès aux cohortes privées
              </h3>
              <p className="text-slate-600">
                Option d'appliquer à une cohorte privée de 6-10 pères pour aller plus loin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ce n'est pas juste pour le fun */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-teal-900 mb-8">
            Ce n'est pas juste pour le fun
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Ce quiz n'est pas un "gimmick". Les résultats sont basés sur des approches de parentalité positives, 
            sans jugement. L'objectif : t'aider à mieux comprendre tes forces naturelles et identifier 
            des pistes concrètes pour améliorer ta relation avec tes enfants.
          </p>
          <div className="mt-8">
            <button
              onClick={onStartQuiz}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
            >
              Découvrir mon profil
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Express */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-teal-900 text-center mb-12">
            Questions fréquentes
          </h2>
          <div className="space-y-8">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-heading font-bold text-teal-900">
                    {item.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-teal-600 transition-transform duration-200 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-slate-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-heading font-bold mb-2">Le Cercle des Pères</h3>
            <p className="text-gray-300 mb-6">Cohortes privées pour pères ambitieux.</p>
            <p className="text-sm text-teal-300 mb-4">
              Contact : <a href="mailto:salut@lecercledesperes.com" className="hover:text-white">salut@lecercledesperes.com</a>
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Mentions légales</a>
              <a href="#" className="hover:text-white">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};