import { LucideIcon } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useLanguage } from '../../contexts/LanguageContext';
import { QuizCategory } from '../../types';

interface CategoryCardProps {
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: LucideIcon;
  category: QuizCategory;
  questionsCount: number;
  onStart: (category: QuizCategory) => void;
}

export const CategoryCard = ({
  title,
  titleAr,
  description,
  descriptionAr,
  icon: Icon,
  category,
  questionsCount,
  onStart,
}: CategoryCardProps) => {
  const { language, t } = useLanguage();

  return (
    <Card hover className="p-6 h-full flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl text-white">
          <Icon className="w-8 h-8" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            {language === 'ar' ? titleAr : title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {questionsCount} {t('questions')}
          </p>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1 leading-relaxed">
        {language === 'ar' ? descriptionAr : description}
      </p>

      <Button onClick={() => onStart(category)} className="w-full">
        {t('startQuiz')}
      </Button>
    </Card>
  );
};
