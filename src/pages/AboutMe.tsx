import { Target, Heart, Code } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { useLanguage } from '../contexts/LanguageContext';

export const AboutMe = () => {
  const { t, language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <img 
            src="/SalahEddineMds.jpg" 
            alt={t('aboutMeTitle')} 
            className="w-32 h-32 rounded-full object-cover shadow-lg"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {t('aboutMeTitle')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {t('aboutMeDescription')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card className="p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl">
              <Target className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {t('missionTitle')}
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {t('missionDescription')}
          </p>
        </Card>

        <Card className="p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl">
              <Heart className="w-8 h-8 text-amber-600 dark:text-amber-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {language === 'ar' ? 'الشغف' : 'Passion'}
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {language === 'ar'
              ? 'متحمس لدمج التكنولوجيا الحديثة مع التعليم الإسلامي لجعل المعرفة الدينية متاحة وممتعة للجميع.'
              : 'Passionate about combining modern technology with Islamic education to make religious knowledge accessible and engaging for everyone.'
            }
          </p>
        </Card>
      </div>

      <Card className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
            <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {language === 'ar' ? 'عن المشروع' : 'About This Project'}
          </h2>
        </div>
        <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>
            {language === 'ar'
              ? 'الصلاح Quiz هي منصة تعليمية إسلامية تفاعلية مصممة لمساعدة المسلمين على اختبار وتعزيز معرفتهم بالإسلام. تتضمن المنصة مجموعة شاملة من الاختبارات التي تغطي:'
              : 'Al-Salah Quiz is an interactive Islamic educational platform designed to help Muslims test and enhance their knowledge of Islam. The platform includes a comprehensive collection of quizzes covering:'
            }
          </p>
          <ul className="list-disc list-inside space-y-2 mr-6 rtl:mr-0 rtl:ml-6">
            <li>{language === 'ar' ? 'القرآن الكريم وتفسيره' : 'The Holy Quran and its interpretation'}</li>
            <li>{language === 'ar' ? 'السنة النبوية والأحاديث الشريفة' : 'Prophetic traditions and Hadith'}</li>
            <li>{language === 'ar' ? 'قصص الأنبياء والمرسلين' : 'Stories of Prophets and Messengers'}</li>
            <li>{language === 'ar' ? 'المصطلحات والمفاهيم الإسلامية' : 'Islamic terms and concepts'}</li>
            <li>{language === 'ar' ? 'المعرفة الإسلامية العامة' : 'General Islamic knowledge'}</li>
          </ul>
          <p>
            {language === 'ar'
              ? 'تم بناء هذا المشروع باستخدام تقنيات حديثة مثل React و TypeScript و Tailwind CSS لتوفير تجربة مستخدم سلسة وممتعة.'
              : 'This project is built using modern technologies like React, TypeScript, and Tailwind CSS to provide a smooth and enjoyable user experience.'
            }
          </p>
        </div>
      </Card>
    </div>
  );
};
