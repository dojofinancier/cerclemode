import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { Quiz } from './components/Quiz';
import { LoginModal } from './components/LoginModal';
import { trackEvent } from './utils/quizLogic';

type AppState = 'landing' | 'quiz';

function App() {
  const [currentView, setCurrentView] = useState<AppState>('landing');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleStartQuiz = () => {
    setCurrentView('quiz');
    trackEvent('cta_click_start_quiz');
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
  };

  const handleLogin = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginModalOpen(false);
  };

  React.useEffect(() => {
    // Update page title based on current view
    if (currentView === 'landing') {
      document.title = 'Quel est ton Mode Papa ? | Le Cercle des Pères';
    } else {
      document.title = 'Quiz Mode Papa | Le Cercle des Pères';
    }

    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Découvre ton archétype de père en 90 secondes. Résultat instantané + actions concrètes. Une initiative du Cercle des Pères.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Découvre ton archétype de père en 90 secondes. Résultat instantané + actions concrètes. Une initiative du Cercle des Pères.';
      document.head.appendChild(meta);
    }
  }, [currentView]);

  return (
    <div className="min-h-screen">
      {currentView === 'landing' ? (
        <LandingPage onStartQuiz={handleStartQuiz} onLogin={handleLogin} />
      ) : (
        <Quiz onBackToLanding={handleBackToLanding} />
      )}
      
      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLogin} />
    </div>
  );
}

export default App;