import React from 'react';
import '../styles/Dashboard.css';
import { LayoutDashboard, ListChecks, User, Clock, LogOut } from 'lucide-react';

interface MainLayoutProps {
  currentView: 'dashboard' | 'kanban' | 'profile' | 'timeline';
  onNavigate: (view: 'dashboard' | 'kanban' | 'profile' | 'timeline') => void;
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
          
          <div className="mt-auto">
            <button
              className="shell-nav-icon text-red-500 hover:bg-red-50"
              onClick={() => {
                // Add your logout logic here
                console.log('Logging out...');
                // Example: window.location.href = '/login';
              }}
              title="Logout"
            >
              <LogOut size={22} />
            </button>
          </div>
        </div>
      </aside>

      <div className="shell-main">
        <main className="shell-content">{children}</main>
      </div>
    </div>
  );
}
