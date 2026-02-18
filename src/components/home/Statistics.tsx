import { BookOpen, CheckCircle, TrendingUp } from 'lucide-react';
import { Card } from '../ui/Card';
import { useLanguage } from '../../contexts/LanguageContext';

interface StatisticsProps {
  totalQuizzes: number;
  questionsAnswered: number;
  averageScore: number;
}

export const Statistics = ({ totalQuizzes, questionsAnswered, averageScore }: StatisticsProps) => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: BookOpen,
      value: totalQuizzes,
      label: t('totalQuizzes'),
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: CheckCircle,
      value: questionsAnswered,
      label: t('questionsAnswered'),
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: TrendingUp,
      value: `${averageScore}%`,
      label: t('averageScore'),
      color: 'from-amber-500 to-amber-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="p-6">
            <div className="flex items-center gap-4">
              <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-xl text-white`}>
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
