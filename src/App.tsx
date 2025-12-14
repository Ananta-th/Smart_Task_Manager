import { useState } from 'react';
import { HomePage } from './components/HomePage';
import TaskPage from './pages/TaskPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import Dashboard from './components/Dashboard';
import { ProfilePage } from './components/ProfilePage';
import KanbanBoard from './components/KanbanBoard';
import Timeline from './components/Timeline';
import { MessagesPage } from './pages/MessagesPage';
import { MainLayout } from './components/MainLayout';
import { ThemeProvider } from './contexts/ThemeContext';

type View = 'home' | 'login' | 'signup' | 'dashboard' | 'profile' | 'kanban' | 'timeline' | 'messages';
type MainView = 'dashboard' | 'profile' | 'kanban' | 'timeline' | 'messages';

const isMainView = (view: View): view is MainView => {
  return (['dashboard', 'profile', 'kanban', 'timeline', 'messages'] as const).includes(view as MainView);
};

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  if (currentView === 'home') {
    return (
      <ThemeProvider>
        <HomePage
          onGetStarted={() => setCurrentView('dashboard')}
          onLoginClick={() => setCurrentView('login')}
          onSignupClick={() => setCurrentView('signup')}
        />
      </ThemeProvider>
    );
  }

  if (currentView === 'login') {
    return (
      <ThemeProvider>
        <LoginPage
          onBackToHome={() => setCurrentView('home')}
          onSignupClick={() => setCurrentView('signup')}
          onLoginSuccess={() => setCurrentView('dashboard')}
        />
      </ThemeProvider>
    );
  }

  if (currentView === 'signup') {
    return (
      <ThemeProvider>
        <SignupPage
          onBackToHome={() => setCurrentView('home')}
          onLoginClick={() => setCurrentView('login')}
          onSignupSuccess={() => setCurrentView('dashboard')}
        />
      </ThemeProvider>
    );
  }

  if (isMainView(currentView)) {
    return (
      <ThemeProvider>
        <MainLayout
          currentView={currentView}
          onNavigate={(view) => setCurrentView(view)}
        >
          {currentView === 'dashboard' && (
            <Dashboard
              onLogout={() => setCurrentView('home')}
              onOpenProfile={() => setCurrentView('profile')}
              onOpenKanban={() => setCurrentView('kanban')}
            />
          )}
          {currentView === 'profile' && <ProfilePage />}
          {currentView === 'kanban' && <KanbanBoard />}
          {currentView === 'timeline' && <Timeline />}
          {currentView === 'messages' && <MessagesPage />}
        </MainLayout>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <TaskPage />
    </ThemeProvider>
  );
}
