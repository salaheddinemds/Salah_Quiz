import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface QuizTimerProps {
  duration: number;
  onTimeUp: () => void;
}

export const QuizTimer = ({ duration, onTimeUp }: QuizTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const { t } = useLanguage();

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isLowTime = timeLeft < 60;

  return (
    <div
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg font-medium
        ${isLowTime
          ? 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400'
          : 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
        }
      `}
    >
      <Clock className="w-5 h-5" />
      <span>
        {t('timeRemaining')}: {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
};
