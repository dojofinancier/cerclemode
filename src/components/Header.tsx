import React from 'react';
import { ArrowRight, User } from 'lucide-react';

interface HeaderProps {
  onStartQuiz: () => void;
  onLogin: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onStartQuiz, onLogin }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-teal-900 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/Cercle_White_Small.webp" 
              alt="Le Cercle des Pères" 
              className="h-12 w-auto lg:h-16 max-w-[200px] lg:max-w-[300px]"
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onStartQuiz}
              className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 lg:px-6 lg:py-3 rounded-lg font-semibold text-xs lg:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-1 lg:gap-2"
            >
              <span className="hidden sm:inline">Commencer le quiz</span>
              <span className="sm:hidden">Quiz</span>
              <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4" />
            </button>
            <button
              onClick={onLogin}
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white p-2 lg:px-6 lg:py-3 rounded-lg font-semibold text-sm lg:text-base transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              <User className="w-4 h-4 lg:w-4 lg:h-4" />
              <span className="hidden lg:inline">Mon compte</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};