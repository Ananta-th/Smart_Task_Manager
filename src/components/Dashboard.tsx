import React, { useState } from 'react';
import '../styles/DashboardNew.css';

const Dashboard = () => {
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

      {/* Chart Section */}
      <div className="chart-section">
        <div className="chart-header">
          <h3 className="chart-title">Task Done</h3>
          <div className="filter-tabs">
            {['Daily', 'Weekly', 'Monthly'].map((tab) => (
              <button
                key={tab}
                className={`filter-tab ${activeFilter === tab ? 'active' : ''}`}
                onClick={() => setActiveFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Chart Area */}
        <div className="chart-container">
          {/* Month labels at bottom */}
          <div className="month-labels">
            {['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'].map((month) => (
              <div key={month} className="month-label">{month}</div>
            ))}
          </div>
          
          {/* Chart Bars */}
          <div className="chart-bars">
            {/* These would represent data points - creating sample bars */}
            <div className="bar-group">
              <div className="bar bar-1" style={{ height: '75%' }}></div>
            </div>
            <div className="bar-group">
              <div className="bar bar-2" style={{ height: '40%' }}></div>
            </div>
            <div className="bar-group">
              <div className="bar bar-1" style={{ height: '90%' }}></div>
            </div>
            <div className="bar-group">
              <div className="bar bar-2" style={{ height: '60%' }}></div>
            </div>
            <div className="bar-group">
              <div className="bar bar-1" style={{ height: '85%' }}></div>
            </div>
            <div className="bar-group">
              <div className="bar bar-2" style={{ height: '50%' }}></div>
            </div>
            <div className="bar-group">
              <div className="bar bar-1" style={{ height: '95%' }}></div>
            </div>
            <div className="bar-group">
              <div className="bar bar-2" style={{ height: '70%' }}></div>
            </div>
            <div className="bar-group">
              <div className="bar bar-1" style={{ height: '80%' }}></div>
            </div>
            <div className="bar-group">
              <div className="bar bar-2" style={{ height: '45%' }}></div>
            </div>
            <div className="bar-group">
              <div className="bar bar-1" style={{ height: '65%' }}></div>
            </div>
            <div className="bar-group">
              <div className="bar bar-2" style={{ height: '85%' }}></div>
            </div>
          </div>
          
          {/* Y-axis labels */}
          <div className="y-axis">
            <div className="y-label">100</div>
            <div className="y-label">75</div>
            <div className="y-label">50</div>
            <div className="y-label">25</div>
            <div className="y-label">0</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
