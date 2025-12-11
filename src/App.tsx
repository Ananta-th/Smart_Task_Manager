import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { TaskPage } from './pages/TaskPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { Dashboard } from './components/Dashboard';
import { ProfilePage } from './components/ProfilePage';
import { KanbanBoard } from './components/KanbanBoard';
import { MainLayout } from './components/MainLayout';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'tasks' | 'login' | 'signup' | 'dashboard' | 'profile' | 'kanban' | 'timeline'>('home');

  if (currentView === 'home') {
    return (
      <HomePage
        onGetStarted={() => setCurrentView('dashboard')}
        onLoginClick={() => setCurrentView('login')}
        onSignupClick={() => setCurrentView('signup')}
      />
    );
  }

  if (currentView === 'login') {
    return (
      <LoginPage
        onBackToHome={() => setCurrentView('home')}
        onSignupClick={() => setCurrentView('signup')}
        onLoginSuccess={() => setCurrentView('dashboard')}
      />
    );
  }

  if (currentView === 'signup') {
    return (
      <SignupPage
        onBackToHome={() => setCurrentView('home')}
        onLoginClick={() => setCurrentView('login')}
        onSignupSuccess={() => setCurrentView('dashboard')}
      />
    );
  }

  if (['dashboard', 'profile', 'kanban', 'timeline'].includes(currentView)) {
    return (
      <MainLayout
        currentView={currentView === 'dashboard' ? 'dashboard' : currentView === 'profile' ? 'profile' : 'kanban'}
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
      </MainLayout>
    );
  }

  return <TaskPage onHomeClick={() => setCurrentView('home')} />;
}
