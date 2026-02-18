import { Card } from '../ui/Card';
import { useLanguage } from '../../contexts/LanguageContext';
import { QuizQuestion as QuizQuestionType } from '../../types';

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedAnswer: number | null;
  onSelectAnswer: (index: number) => void;
  questionNumber: number;
}

export const QuizQuestion = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  questionNumber,
}: QuizQuestionProps) => {
  const { language, t } = useLanguage();

  const questionText = language === 'ar' ? question.question_ar : question.question;
  const options = language === 'ar' ? question.options_ar : question.options;

  return (
    <Card className="p-8">
      <div className="mb-6">
        <span className="inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium mb-4">
          {t('question')} {questionNumber}
        </span>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 leading-relaxed">
          {questionText}
        </h3>
      </div>

      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectAnswer(index)}
            className={`
              w-full text-right rtl:text-right ltr:text-left p-4 rounded-lg border-2 transition-all duration-200
              ${selectedAnswer === index
                ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300'
                : 'border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }
            `}
          >
            <div className="flex items-center gap-3">
              <div
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0
                  ${selectedAnswer === index
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }
                `}
              >
                {String.fromCharCode(65 + index)}
              </div>
              <span className="text-lg flex-1">{option}</span>
            </div>
          </button>
        ))}
      </div>

      {selectedAnswer === null && (
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
          {t('selectAnswer')}
        </p>
      )}
    </Card>
  );
};
