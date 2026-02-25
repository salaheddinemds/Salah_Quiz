import { BookOpen, BookText, Users, MessageSquare, FileText, ScrollText } from 'lucide-react';
import { Hero } from '../components/home/Hero';
import { CategoryCard } from '../components/home/CategoryCard';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../contexts/LanguageContext';
import { QuizCategory } from '../types';

interface HomeProps {
  onStartQuiz: (category: QuizCategory) => void;
  onOpenKisasWaEibar: () => void;
}

export const Home = ({ onStartQuiz, onOpenKisasWaEibar }: HomeProps) => {
  const { t, language } = useLanguage();

  const categories = [
    {
      title: 'Quran Quiz',
      titleAr: 'اختبار القرآن',
      description: 'Test your knowledge about the Holy Quran',
      descriptionAr: 'اختبر معرفتك بالقرآن الكريم',
      icon: BookOpen,
      category: 'quran' as QuizCategory,
      questionsCount: 12,
    },
    {
      title: 'Sunnah Quiz',
      titleAr: 'اختبار السنة',
      description: 'Learn about the Prophet\'s traditions',
      descriptionAr: 'تعلم عن سنة النبي الكريم',
      icon: BookText,
      category: 'sunnah' as QuizCategory,
      questionsCount: 10,
    },
    {
      title: 'Prophets Stories',
      titleAr: 'قصص الأنبياء',
      description: 'Stories and lessons from the Prophets',
      descriptionAr: 'قصص ودروس من الأنبياء والمرسلين',
      icon: Users,
      category: 'prophets' as QuizCategory,
      questionsCount: 15,
    },
     {
       title: 'Islamic Meanings',
       titleAr: 'المعاني الإسلامية',
       description: 'Islamic terms and concepts',
       descriptionAr: 'المصطلحات والمفاهيم الإسلامية',
       icon: MessageSquare,
       category: 'meanings' as QuizCategory,
       questionsCount: 12,
     },
     {
       title: 'General Knowledge',
       titleAr: 'المعرفة العامة',
       description: 'General Islamic knowledge',
       descriptionAr: 'المعرفة الإسلامية العامة',
       icon: FileText,
       category: 'general' as QuizCategory,
       questionsCount: 12,
     },
  ];

  const scrollToCategories = () => {
    const element = document.getElementById('categories');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Hero onExplore={scrollToCategories} />

      <div id="categories" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
          {t('quizCategories')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.category}
              {...category}
              onStart={onStartQuiz}
            />
          ))}

          <Card hover className="p-6 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl text-white">
                <ScrollText className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {language === 'ar' ? 'قصص وعبر' : 'Stories and Lessons'}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {language === 'ar' ? '4 قصص' : '4 Stories'}
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1 leading-relaxed">
              {language === 'ar'
                ? 'قصص إسلامية قصيرة مع حكم وعبر نافعة'
                : 'Short Islamic stories with practical wisdom and reflections'}
            </p>

            <Button onClick={onOpenKisasWaEibar} className="w-full">
              {t('openSection')}
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};
