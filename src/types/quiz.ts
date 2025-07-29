export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface QuizOption {
  text: string;
  archetype: Archetype;
}

export type Archetype = 'S' | 'C' | 'A' | 'G';

export interface QuizResult {
  archetype: Archetype | string;
  title: string;
  description: string;
  isHybrid: boolean;
}

export interface QuizState {
  currentQuestion: number;
  answers: Archetype[];
  isCompleted: boolean;
  result: QuizResult | null;
  email: string;
  emailSubmitted: boolean;
}