import React, { useState } from 'react';
import '../styles/DashboardCombined.css';
import TaskDoneChart from './TaskDoneChart';

interface DashboardProps {
  onLogout?: () => void;
  onOpenProfile?: () => void;
  onOpenKanban?: () => void;
}

const Dashboard = (_props: DashboardProps) => {
  const [activeFilter, setActiveFilter] = useState('Daily');
  
  return (
    <div className="app-container">
      <div className="dashboard">
        {/* Header with Search */}
        <div className="header-section">
        <div className="search-container">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search anything..."
          />
        </div>
        <h2 className="search-title">Search Tasks</h2>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        {/* Task Completed Card */}
        <div className="stat-card">
          <div className="stat-main">
            <div className="stat-label">Task Completed</div>
            <div className="stat-value">08</div>
          </div>
          <div className="stat-footer">
            <span className="trend-up">10+</span> more
            <div className="trend-text">from last week</div>
          </div>
        </div>

        {/* New Task Card */}
        <div className="stat-card">
          <div className="stat-main">
            <div className="stat-label">New Task</div>
            <div className="stat-value">10</div>
          </div>
          <div className="stat-footer">
            <span className="trend-up">10+</span> more
            <div className="trend-text">from last week</div>
          </div>
        </div>

        {/* Project Done Card */}
        <div className="stat-card">
          <div className="stat-main">
            <div className="stat-label">Project Done</div>
            <div className="stat-value">10</div>
          </div>
          <div className="stat-footer">
            <span className="trend-up">08+</span> more
            <div className="trend-text">from last week</div>
          </div>
        </div>
      </div>

      {/* TaskDoneChart Component */}
      <TaskDoneChart />
      </div>
    </div>
  );
};

export default Dashboard;
