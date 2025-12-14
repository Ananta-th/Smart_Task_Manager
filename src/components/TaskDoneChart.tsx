import React, { useState } from 'react';
import '../styles/TaskDoneChart.css';

const TaskDoneChart = () => {
  const [activeTab, setActiveTab] = useState('Daily');
  
  // Sample chart data - heights for each month
  const chartData = {
    daily: [75, 60, 85, 45, 90, 55, 70, 80, 65, 50, 75, 60],
    weekly: [80, 65, 70, 55, 85, 60, 75, 90, 70, 58, 82, 68],
    monthly: [60, 75, 50, 85, 65, 80, 55, 70, 90, 65, 75, 85]
  };
  
  const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];
  const tabs = ['Daily', 'Weekly', 'Monthly'];

  return (
    <div className="task-done-chart">
      {/* Header Section */}
      <div className="chart-header">
        <h1 className="chart-title">Task Done</h1>
        <div className="chart-tabs">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Container */}
      <div className="chart-container">
        {/* Y-axis labels */}
        <div className="y-axis">
          <div className="y-label">100</div>
          <div className="y-label">75</div>
          <div className="y-label">50</div>
          <div className="y-label">25</div>
          <div className="y-label">0</div>
        </div>

        {/* Chart Area with Bars */}
        <div className="chart-area">
          {/* Grid Lines */}
          <div className="grid-lines">
            <div className="grid-line"></div>
            <div className="grid-line"></div>
            <div className="grid-line"></div>
            <div className="grid-line"></div>
            <div className="grid-line"></div>
          </div>

          {/* Chart Bars */}
          <div className="bars-container">
            {chartData[activeTab.toLowerCase() as keyof typeof chartData].map((height: number, index: number) => (
              <div key={index} className="bar-group">
                <div 
                  className="chart-bar" 
                  style={{ 
                    height: `${height}%`,
                    animationDelay: `${index * 0.05}s` 
                  }}
                >
                  <div className="bar-value">{height}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* X-axis Month Labels */}
      <div className="x-axis">
        {months.map((month, index) => (
          <div key={index} className="month-label">
            {month}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskDoneChart;
