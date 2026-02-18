import { Award, CheckCircle, XCircle, Home, RotateCcw } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useLanguage } from '../../contexts/LanguageContext';
import { QuizQuestion } from '../../types';

interface QuizResultProps {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  questions: QuizQuestion[];
  userAnswers: (number | null)[];
  onRetry: () => void;
  onHome: () => void;
}

export const QuizResult = ({
  score,
  totalQuestions,
  correctAnswers,
  questions,
  userAnswers,
  onRetry,
  onHome,
}: QuizResultProps) => {
  const { t, language } = useLanguage();

  const getMotivationalMessage = () => {
    const percentage = (correctAnswers / totalQuestions) * 100;
    if (percentage >= 80) return t('excellentScore');
    if (percentage >= 60) return t('goodScore');
    return t('needImprovement');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-8 text-center mb-8">
        <div className="flex justify-center mb-6">
          <div className="p-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full">
            <Award className="w-16 h-16 text-white" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {t('yourScore')}
        </h2>

        <div className="text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
          {score}%
        </div>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
          {correctAnswers} {t('of')} {totalQuestions} {t('correctAnswers')}
        </p>

        <p className="text-lg text-emerald-600 dark:text-emerald-400 italic mb-8">
          {getMotivationalMessage()}
        </p>

        <div className="flex gap-4 justify-center">
          <Button onClick={onRetry} variant="primary" size="lg">
            <span className="flex items-center gap-2">
              <RotateCcw className="w-5 h-5" />
              {t('tryAgain')}
            </span>
          </Button>
          <Button onClick={onHome} variant="outline" size="lg">
            <span className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              {t('backToHome')}
            </span>
          </Button>
        </div>
      </Card>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {language === 'ar' ? 'مراجعة الإجابات' : 'Review Answers'}
        </h3>

        {questions.map((question, index) => {
          const userAnswer = userAnswers[index];
          const isCorrect = userAnswer === question.correctAnswer;
          const questionText = language === 'ar' ? question.question_ar : question.question;
          const options = language === 'ar' ? question.options_ar : question.options;

          return (
            <Card key={question.id} className="p-6">
              <div className="flex items-start gap-3 mb-4">
                {isCorrect ? (
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                )}
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                    {index + 1}. {questionText}
                  </p>

                  <div className="space-y-2">
                    {options.map((option, optIndex) => {
                      const isUserAnswer = userAnswer === optIndex;
                      const isCorrectAnswer = optIndex === question.correctAnswer;

                      return (
                        <div
                          key={optIndex}
                          className={`
                            p-3 rounded-lg border-2
                            ${isCorrectAnswer
                              ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                              : isUserAnswer
                              ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                              : 'border-gray-200 dark:border-gray-700'
                            }
                          `}
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{String.fromCharCode(65 + optIndex)}.</span>
                            <span>{option}</span>
                            {isCorrectAnswer && (
                              <CheckCircle className="w-4 h-4 text-green-500 ml-auto" />
                            )}
                            {isUserAnswer && !isCorrectAnswer && (
                              <XCircle className="w-4 h-4 text-red-500 ml-auto" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
