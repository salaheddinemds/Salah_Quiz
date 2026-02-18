import { ReactNode } from 'react';
import { Header } from './Header';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Layout = ({ children, currentPage, onNavigate }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header />
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};
