import React from 'react';
import '../styles/DashboardCombined.css';
import { LayoutDashboard, ListChecks, User, Clock, MessageSquare, LogOut } from 'lucide-react';

interface MainLayoutProps {
  currentView: 'dashboard' | 'kanban' | 'profile' | 'timeline' | 'messages';
  onNavigate: (view: 'dashboard' | 'kanban' | 'profile' | 'timeline' | 'messages') => void;
  children: React.ReactNode;
}

export function MainLayout({ currentView, onNavigate, children }: MainLayoutProps) {
  return (
    <div className="app-shell">
      <aside className="shell-sidebar">
        <div className="shell-sidebar-inner">
          <button
            className={`shell-nav-icon ${currentView === 'dashboard' ? 'active' : ''}`}
            onClick={() => onNavigate('dashboard')}
          >
            <LayoutDashboard size={22} />
          </button>
          <button
            className={`shell-nav-icon ${currentView === 'kanban' ? 'active' : ''}`}
            onClick={() => onNavigate('kanban')}
          >
            <ListChecks size={22} />
          </button>
          <button
            className={`shell-nav-icon ${currentView === 'profile' ? 'active' : ''}`}
            onClick={() => onNavigate('profile')}
          >
            <User size={22} />
          </button>
          <button
            className={`shell-nav-icon ${currentView === 'timeline' ? 'active' : ''}`}
            onClick={() => onNavigate('timeline')}
          >
            <Clock size={22} />
          </button>

          <button
            className={`shell-nav-icon ${currentView === 'messages' ? 'active' : ''}`}
            onClick={() => onNavigate('messages')}
            title="Messages"
          >
            <MessageSquare size={22} />
          </button>
          
          <div className="mt-auto">
            <button
              className="shell-nav-icon text-red-500 hover:bg-red-50"
              onClick={() => {
                // Clear user session data
                localStorage.removeItem('userToken');
                localStorage.removeItem('userData');
                
                // Redirect to login page
                window.location.href = '/login';
              }}
              title="Logout"
            >
              <LogOut size={22} />
            </button>
          </div>
        </div>
      </aside>

      <div className={`shell-main ${currentView === 'timeline' ? 'timeline-main' : ''}`}>
        <main className={`shell-content ${currentView === 'timeline' ? 'timeline-view' : ''}`}>{children}</main>
      </div>
    </div>
  );
}
