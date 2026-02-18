import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { QuizProgress } from '../components/quiz/QuizProgress';
import { QuizTimer } from '../components/quiz/QuizTimer';
import { QuizQuestion } from '../components/quiz/QuizQuestion';
import { QuizResult } from '../components/quiz/QuizResult';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../contexts/LanguageContext';
import { QuizQuestion as QuizQuestionType, QuizCategory } from '../types';

interface QuizPageProps {
  category: QuizCategory;
  questions: QuizQuestionType[];
  onHome: () => void;
  timeLimit?: number;
}

export const QuizPage = ({ category, questions, onHome, timeLimit }: QuizPageProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);
  const { t } = useLanguage();

  const handleSelectAnswer = (answerIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResult(true);
    saveResult();
  };

  const handleTimeUp = () => {
    setShowResult(true);
    saveResult();
  };

  const saveResult = () => {
    const correctAnswers = userAnswers.filter(
      (answer, index) => answer === questions[index].correctAnswer
    ).length;
    const score = Math.round((correctAnswers / questions.length) * 100);

    const result = {
      score,
      totalQuestions: questions.length,
      correctAnswers,
      date: new Date().toISOString(),
      category,
    };

    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    history.push(result);
    localStorage.setItem('quizHistory', JSON.stringify(history));
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setUserAnswers(new Array(questions.length).fill(null));
    setShowResult(false);
  };

  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === questions[index].correctAnswer
  ).length;
  const score = Math.round((correctAnswers / questions.length) * 100);

  if (showResult) {
    return (
      <QuizResult
        score={score}
        totalQuestions={questions.length}
        correctAnswers={correctAnswers}
        questions={questions}
        userAnswers={userAnswers}
        onRetry={handleRetry}
        onHome={onHome}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <QuizProgress current={currentQuestion + 1} total={questions.length} />
        {timeLimit && <QuizTimer duration={timeLimit} onTimeUp={handleTimeUp} />}
      </div>

      <QuizQuestion
        question={questions[currentQuestion]}
        selectedAnswer={userAnswers[currentQuestion]}
        onSelectAnswer={handleSelectAnswer}
        questionNumber={currentQuestion + 1}
      />

      <div className="flex justify-between items-center mt-6">
        <Button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          variant="outline"
        >
          <span className="flex items-center gap-2">
            <ChevronLeft className="w-5 h-5" />
            {t('previousQuestion')}
          </span>
        </Button>

        {currentQuestion === questions.length - 1 ? (
          <Button onClick={handleSubmit} variant="primary">
            {t('submit')}
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            disabled={userAnswers[currentQuestion] === null}
            variant="primary"
          >
            <span className="flex items-center gap-2">
              {t('nextQuestion')}
              <ChevronRight className="w-5 h-5" />
            </span>
          </Button>
        )}
      </div>
    </div>
  );
};
