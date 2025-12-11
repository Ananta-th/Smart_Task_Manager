import React, { useState } from 'react';
import '../styles/Dashboard.css';
import {
  Calendar,
  Settings,
  Home,
  LogOut,
  Menu,
  X,
  Search,
  Bell,
  User
} from 'lucide-react';

interface DashboardProps {
  onLogout?: () => void;
  onOpenProfile?: () => void;
  onOpenKanban?: () => void;
}

export function Dashboard({ onLogout, onOpenProfile, onOpenKanban }: DashboardProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeRange, setActiveRange] = useState<'daily' | 'weekly' | 'monthly'>('monthly');

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="logo">
            <Calendar className="logo-icon" />
            <span className="logo-text">EventHub</span>
          </div>
          <button 
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="sidebar-nav">
          <ul className="nav-list">
            <li className="nav-item active">
              <Home className="nav-icon" />
              <span className="nav-text">Dashboard</span>
            </li>
            <li className="nav-item" onClick={onOpenKanban}>
              <Calendar className="nav-icon" />
              <span className="nav-text">My Events</span>
            </li>
            <li className="nav-item">
              <User className="nav-icon" />
              <span className="nav-text">Attendees</span>
            </li>
            <li className="nav-item">
              <Settings className="nav-icon" />
              <span className="nav-text">Settings</span>
            </li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={onLogout}>
            <LogOut className="logout-icon" />
            <span className="logout-text">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header dashboard-header">
          <div className="header-search-wrapper">
            <button className="header-menu-btn">
              <Menu size={20} />
            </button>
            <div className="header-search-input">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search Tasks"
                className="search-input wide"
              />
            </div>
            <button className="header-filter-btn">
              <Calendar size={20} />
            </button>
          </div>
          <div className="header-right">
            <div className="header-top-search">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search anything..."
                className="search-input"
              />
            </div>
            <button className="notification-btn">
              <Bell size={20} />
            </button>
            <div
              className="user-profile"
              onClick={onOpenProfile}
              style={{ cursor: 'pointer' }}
            >
              <User size={20} />
            </div>
          </div>
        </header>

        <section className="stats-row">
          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-label">Task Completed</span>
              <span className="stat-value">08</span>
            </div>
            <div className="stat-mini-chart stat-mini-chart--purple" />
            <p className="stat-footnote"><span className="stat-positive">10+ more</span> from last week</p>
          </div>
          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-label">New Task</span>
              <span className="stat-value">10</span>
            </div>
            <div className="stat-mini-chart stat-mini-chart--blue" />
            <p className="stat-footnote"><span className="stat-positive">10+ more</span> from last week</p>
          </div>
          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-label">Project Done</span>
              <span className="stat-value">10</span>
            </div>
            <div className="stat-mini-chart stat-mini-chart--red" />
            <p className="stat-footnote"><span className="stat-positive">08+ more</span> from last week</p>
          </div>
        </section>

        <section className="task-chart-section">
          <div className="task-chart-header">
            <h2>Task Done</h2>
            <div className="task-chart-tabs">
              <button
                className={`task-chart-tab ${activeRange === 'daily' ? 'active' : ''}`}
                onClick={() => setActiveRange('daily')}
              >
                Daily
              </button>
              <button
                className={`task-chart-tab ${activeRange === 'weekly' ? 'active' : ''}`}
                onClick={() => setActiveRange('weekly')}
              >
                Weekly
              </button>
              <button
                className={`task-chart-tab ${activeRange === 'monthly' ? 'active' : ''}`}
                onClick={() => setActiveRange('monthly')}
              >
                Monthly
              </button>
            </div>
          </div>

          <div className="task-chart">
            <div className="task-chart-grid">
              <div className="task-chart-grid-line" />
              <div className="task-chart-grid-line" />
              <div className="task-chart-grid-line" />
              <div className="task-chart-grid-line" />
            </div>
            <div className="task-chart-area task-chart-area--primary" />
            <div className="task-chart-line task-chart-line--accent" />
            <div className="task-chart-xaxis">
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
