export interface QuizQuestion {
  id: string;
  question: string;
  question_ar: string;
  options: string[];
  options_ar: string[];
  correctAnswer: number;
  explanation?: string;
  explanation_ar?: string;
  category: QuizCategory;
}

export type QuizCategory = 'quran' | 'sunnah' | 'prophets' | 'meanings' | 'general';

export interface Quiz {
  id: string;
  title: string;
  title_ar: string;
  description: string;
  description_ar: string;
  category: QuizCategory;
  questions: QuizQuestion[];
  timeLimit?: number;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  date: string;
  category: QuizCategory;
}

export type Language = 'en' | 'ar';

export type Theme = 'light' | 'dark';
