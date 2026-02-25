import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { QuizPage } from './pages/QuizPage';
import { AboutMe } from './pages/AboutMe';
import { Contact } from './pages/Contact';
import { KisasWaEibar } from './pages/KisasWaEibar';
import { useQuizData } from './hooks/useQuizData';
import { QuizCategory } from './types';
import { useLanguage } from './contexts/LanguageContext';

type Page = 'home' | 'quranQuiz' | 'sunnahQuiz' | 'prophetsQuiz' | 'meaningsQuiz' | 'generalKnowledge' | 'kisasWaEibar' | 'aboutMe' | 'contact' | 'quiz';

const AppContent = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentCategory, setCurrentCategory] = useState<QuizCategory | null>(null);
  const { questions, loading } = useQuizData(currentCategory);
  const { t } = useLanguage();

  const handleNavigate = (page: string) => {
    const pageMap: Record<string, { page: Page; category?: QuizCategory }> = {
      home: { page: 'home' },
      quranQuiz: { page: 'quiz', category: 'quran' },
      sunnahQuiz: { page: 'quiz', category: 'sunnah' },
      prophetsQuiz: { page: 'quiz', category: 'prophets' },
      meaningsQuiz: { page: 'quiz', category: 'meanings' },
      generalKnowledge: { page: 'quiz', category: 'general' },
      kisasWaEibar: { page: 'kisasWaEibar' },
      aboutMe: { page: 'aboutMe' },
      contact: { page: 'contact' },
    };

    const target = pageMap[page];
    if (target) {
      setCurrentPage(target.page);
      if (target.category) {
        setCurrentCategory(target.category);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleStartQuiz = (category: QuizCategory) => {
    setCurrentCategory(category);
    setCurrentPage('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setCurrentCategory(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    if (currentPage === 'home') {
      return <Home onStartQuiz={handleStartQuiz} onOpenKisasWaEibar={() => handleNavigate('kisasWaEibar')} />;
    }

    if (currentPage === 'quiz' && currentCategory) {
      if (loading) {
        return (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300">{t('loading')}</p>
            </div>
          </div>
        );
      }

      if (questions.length === 0) {
        return (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-300">{t('noQuestionsAvailable')}</p>
          </div>
        );
      }

      return (
        <QuizPage
          category={currentCategory}
          questions={questions}
          onHome={handleBackToHome}
          timeLimit={600}
        />
      );
    }

    if (currentPage === 'aboutMe') {
      return <AboutMe />;
    }

    if (currentPage === 'kisasWaEibar') {
      return <KisasWaEibar />;
    }

    if (currentPage === 'contact') {
      return <Contact />;
    }

    return <Home onStartQuiz={handleStartQuiz} onOpenKisasWaEibar={() => handleNavigate('kisasWaEibar')} />;
  };

  return (
    <Layout currentPage={currentPage} onNavigate={handleNavigate}>
      {renderPage()}
    </Layout>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
