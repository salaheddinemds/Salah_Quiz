import { Heart, Github, Instagram, Linkedin, Mail, Globe } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer = ({ onNavigate }: FooterProps) => {
  const { t, language } = useLanguage();

  const quickLinks = [
    'home',
    'quranQuiz',
    'sunnahQuiz',
    'aboutMe',
    'contact',
  ] as const;

  const islamicQuotes = {
    ar: 'يَا أَيُّهَا النَّاسُ إِنَّ وَعْدَ اللَّهِ حَقٌّ ۖ فَلَا تَغُرَّنَّكُمُ الْحَيَاةُ الدُّنْيَا ۖ وَلَا يَغُرَّنَّكُم بِاللَّهِ الْغَرُورُ﴾ [ فاطر: 5]',
    en: 'O people! Indeed, the promise of Allah is true. So do not let the worldly life deceive you, and do not let the Deceiver deceive you about Allah. - Quran 35:5',
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{t('siteName')}</h3>
            <p className="text-sm leading-relaxed">
              {language === 'ar'
                ? 'منصة تعليمية إسلامية تفاعلية لاختبار وتعزيز المعرفة الدينية\nصدقة جارية - لا تنسونا من صالح دعائكم'
                : 'An interactive Islamic educational platform to test and enhance religious knowledge\nSadaqah Jariyah - Please remember us in your righteous prayers'
              }
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => onNavigate(link)}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {t(link)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('followUs')}</h4>
            <div className="flex gap-3 mb-6 flex-wrap">
              <a
                href="https://github.com/salaheddinemds"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-emerald-600 transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/salah_eddine.mds/#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-emerald-600 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/salah-eddine-mendas"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-emerald-600 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:mm_mendas@esi.dz"
                className="p-2 bg-gray-800 rounded-lg hover:bg-emerald-600 transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://salaheddinemds.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-emerald-600 transition-colors"
                title="Portfolio"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-emerald-400 mb-2">{t('islamicQuote')}</h5>
              <p className="text-sm italic">{islamicQuotes[language]}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm flex items-center justify-center gap-2">
            © 2026 {t('siteName')} - {t('allRightsReserved')}
            <span className="inline-flex items-center gap-1">
              <span>{language === 'ar' ? 'صُنع بـ' : 'Made with'}</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>{language === 'ar' ? 'بواسطة صلاح الدين' : 'by Salah Eddine'}</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
