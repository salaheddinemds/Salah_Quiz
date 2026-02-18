import { useState } from 'react';
import { Menu, X, Home, BookOpen, BookText, Users, MessageSquare, FileText, User, Mail } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

type NavItem = {
  key: string;
  icon: typeof Home;
};

const navItems: NavItem[] = [
  { key: 'home', icon: Home },
  { key: 'quranQuiz', icon: BookOpen },
  { key: 'sunnahQuiz', icon: BookText },
  { key: 'prophetsQuiz', icon: Users },
  { key: 'meaningsQuiz', icon: MessageSquare },
  { key: 'generalKnowledge', icon: FileText },
  { key: 'aboutMe', icon: User },
  { key: 'contact', icon: Mail },
];

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar = ({ currentPage, onNavigate }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between lg:hidden py-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className="hidden lg:flex items-center justify-center py-3 space-x-1 rtl:space-x-reverse">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.key;
            return (
              <button
                key={item.key}
                onClick={() => handleNavigate(item.key)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200
                  ${isActive
                    ? 'bg-white text-emerald-600 shadow-md'
                    : 'hover:bg-white/10'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{t(item.key as any)}</span>
              </button>
            );
          })}
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => handleNavigate(item.key)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 mb-1
                    ${isActive
                      ? 'bg-white text-emerald-600 shadow-md'
                      : 'hover:bg-white/10'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{t(item.key as any)}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};
