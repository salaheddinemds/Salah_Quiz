# الصلاح Quiz - Islamic Quiz Platform

A modern, responsive, production-ready Islamic Quiz Website built with React and TypeScript.

## Features

### 🌍 Multi-Language Support
- Full bilingual support (Arabic RTL + English LTR)
- Dynamic language switching with localStorage persistence
- Comprehensive translation system

### 📚 Quiz Categories
1. **Quran Quiz** - Test your knowledge about the Holy Quran
2. **Sunnah Quiz** - Learn about the Prophet's traditions
3. **Prophets Stories** - Stories and lessons from the Prophets
4. **Islamic Meanings** - Islamic terms and concepts
5. **General Knowledge** - General Islamic knowledge

### 🎯 Quiz Features
- Multiple choice questions
- Progress tracking with visual progress bar
- Timer system (optional, 10 minutes default)
- Score calculation and tracking
- Detailed result page with answer review
- Navigation between questions (Next/Previous)
- Answer validation
- Motivational Islamic messages based on performance
- Local storage for quiz history

### 🎨 UI/UX Features
- Clean, modern, Islamic-inspired design
- Responsive mobile-first layout
- Dark/Light mode toggle
- Smooth animations and transitions
- Accessible Arabic and English fonts (Tajawal & Inter)
- Loading states and skeletons
- Toast-style notifications
- Islamic geometric subtle design accents

### 📱 Pages
- **Home Page**: Hero section, category cards, statistics
- **Quiz Pages**: Interactive quiz interface for each category
- **About Me**: Developer profile and mission statement
- **Contact**: Contact form with validation

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter + Tajawal)

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, Navbar, Layout
│   ├── quiz/            # Quiz-related components
│   ├── home/            # Home page components
│   └── ui/              # Reusable UI components (Button, Card, Input)
├── contexts/            # React contexts (Theme, Language)
├── pages/               # Page components (Home, Quiz, About, Contact)
├── lib/                 # Utilities and configurations
├── types/               # TypeScript type definitions
├── hooks/               # Custom React hooks
├── data/                # Sample quiz data
└── App.tsx              # Main application component
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd islamic-quiz-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npm run typecheck` - Run TypeScript type checking

## Key Features Implementation

### Language Context
- Manages current language (Arabic/English)
- Provides translation function `t()`
- Handles RTL/LTR direction switching
- Persists language preference in localStorage

### Theme Context
- Light/Dark mode support
- Persists theme preference in localStorage
- Applies dark class to HTML element

### Quiz System
- Loads questions from local sample data based on category
- Manages quiz state (current question, answers, timer)
- Calculates scores and saves results
- Provides detailed answer review

### Data Persistence
- Quiz history stored in localStorage
- Language preference stored in localStorage
- Theme preference stored in localStorage

## Sample Quiz Data

Local sample data includes 25 questions across 5 categories:
- 5 Quran questions
- 5 Sunnah questions
- 5 Prophets questions
- 5 Islamic Meanings questions
- 5 General Knowledge questions

Each question includes:
- English and Arabic text
- 4 multiple choice options in both languages
- Correct answer index
- Category classification
- Difficulty level

## Customization

### Adding More Questions
Add questions directly in [src/data/sampleQuizData.ts](src/data/sampleQuizData.ts).

### Adding New Categories
1. Update TypeScript types in [src/types/index.ts](src/types/index.ts)
2. Add category card in [src/pages/Home.tsx](src/pages/Home.tsx)
3. Add translations in [src/lib/translations.ts](src/lib/translations.ts)
4. Add category questions in [src/data/sampleQuizData.ts](src/data/sampleQuizData.ts)

### Styling
- Tailwind configuration in `tailwind.config.js`
- Custom styles in `src/index.css`
- Component-specific styles using Tailwind classes

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- RTL language support
- Responsive design for all screen sizes

## Performance

- Code splitting with React lazy loading (future enhancement)
- Optimized bundle size
- Lazy loading for images
- Local data for fast quiz loading

## Accessibility

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast ratios for text
- Screen reader friendly

## Future Enhancements

- Optional backend integration
- User profiles and quiz history dashboard
- Leaderboard system
- Quiz difficulty filtering
- Timed challenges
- Share results on social media
- Offline mode with service workers
- Progressive Web App (PWA) support
- Admin dashboard for managing questions

## Credits

**Developer**: Salah Eddine Mds

**Technologies Used**:
- React & TypeScript
- Vite
- Tailwind CSS
- Lucide React

## License

All rights reserved © 2026 الصلاح Quiz

---

Made with ❤️ by Salah Eddine Mds
