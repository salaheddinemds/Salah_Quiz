import { BookOpen } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/Button';

interface HeroProps {
  onExplore: () => void;
}

export const Hero = ({ onExplore }: HeroProps) => {
  const { t } = useLanguage();

  return (
    <div className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl overflow-hidden shadow-2xl mb-12">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

      <div className="relative px-8 py-16 md:py-24 text-center text-white">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full">
            <BookOpen className="w-16 h-16" />
          </div>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {t('heroTitle')}
        </h2>

        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
          {t('heroSubtitle')}
        </p>

        <Button
          size="lg"
          onClick={onExplore}
          className="bg-white !text-gray-800 hover:bg-gray-100 shadow-xl font-bold"
        >
          <span className="flex items-center gap-2">
            {t('exploreQuizzes')}
            <BookOpen className="w-5 h-5" />
          </span>
        </Button>
      </div>
    </div>
  );
};
