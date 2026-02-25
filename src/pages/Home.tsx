import { BookOpen, BookText, Users, MessageSquare, FileText } from 'lucide-react';
import { Hero } from '../components/home/Hero';
import { CategoryCard } from '../components/home/CategoryCard';
import { useLanguage } from '../contexts/LanguageContext';
import { QuizCategory } from '../types';

interface HomeProps {
  onStartQuiz: (category: QuizCategory) => void;
}

export const Home = ({ onStartQuiz }: HomeProps) => {
  const { t } = useLanguage();

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
        </div>
      </div>
    </div>
  );
};
