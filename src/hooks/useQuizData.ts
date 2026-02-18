import { useState, useEffect } from 'react';
import { QuizQuestion, QuizCategory } from '../types';
import {
  // generalQuestions,
  // meaningsQuestions,
  // prophetsQuestions,
  quranQuestions,
  sunnahQuestions,
} from '../data/sampleQuizData';

const questionBank: Record<QuizCategory, QuizQuestion[]> = {
  quran: quranQuestions,
  sunnah: sunnahQuestions,
  // prophets: prophetsQuestions,
  // meanings: meaningsQuestions,
  // general: generalQuestions,
} as Record<QuizCategory, QuizQuestion[]>;

export const useQuizData = (category: QuizCategory | null) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!category) {
      setQuestions([]);
      setError(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const localQuestions = questionBank[category] || [];
    setQuestions(localQuestions);
    setLoading(false);
  }, [category]);

  return { questions, loading, error };
};
