import React from 'react';
import '../styles/TimelineDashboard.css';

const TimelineDashboard = () => {
  return (
    <div className="timeline-dashboard">
      {/* Header */}
      <div className="timeline-header">
        <h1 className="timeline-title">Timeline</h1>
        <div className="timeline-subheader">
          <span className="today-label">Today</span>
          <span className="date-label">November, 19, 2024</span>
        </div>
      </div>

      {/* Timeline Days */}
      <div className="timeline-days">
        <div className="days-container">
          {['04', '05', '06', '07', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '18', '19', '20', '21'].map((day, index) => (
            <div key={index} className={`day-item ${index === 0 ? 'active' : ''}`}>
              <span className="day-number">{day}</span>
              <div className="day-dot"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Sections */}
      <div className="timeline-sections">
        
        {/* UX Research Section */}
        <div className="timeline-section">
          <div className="section-header">
            <h2 className="section-title">UX Research</h2>
          </div>
          <div className="section-content">
            <div className="task-group">
              <div className="task-item category">
                <span className="task-name">Information Arc...</span>
              </div>
              <div className="task-item">
                <span className="task-name">Login</span>
              </div>
              <div className="task-item">
                <span className="task-name">Profile</span>
                <div className="progress-indicator">
                  <div className="progress-bar" style={{ width: '48%' }}></div>
                  <span className="progress-text">48%</span>
                </div>
              </div>
              <div className="task-item">
                <span className="task-name">Menu</span>
                <div className="progress-indicator">
                  <div className="progress-bar" style={{ width: '54%' }}></div>
                  <span className="progress-text">54%</span>
                </div>
              </div>
              <div className="task-item">
                <span className="task-name">Services</span>
              </div>
              <div className="task-item">
                <span className="task-name">Settings</span>
                <div className="progress-indicator">
                  <div className="progress-bar" style={{ width: '39%' }}></div>
                  <span className="progress-text">39%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="section-divider"></div>

        {/* Design Phase Section */}
        <div className="timeline-section">
          <div className="section-header">
            <h2 className="section-title">Design Phase</h2>
          </div>
          <div className="section-content">
            <div className="task-group">
              <div className="task-item">
                <span className="task-name">Build Wireframe</span>
              </div>
              <div className="task-item">
                <span className="task-name">User Interface D...</span>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="section-divider"></div>

        {/* Photosyping Section */}
        <div className="timeline-section">
          <div className="section-header">
            <h2 className="section-title">Photosyping</h2>
          </div>
          <div className="section-content">
            <div className="task-group">
              <div className="task-item category">
                <span className="task-name">Development</span>
              </div>
              <div className="task-item">
                <span className="task-name">Back-End Dev...</span>
              </div>
              <div className="task-item">
                <span className="task-name">Front-End Dev...</span>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="section-divider"></div>

        {/* Textimodals Section */}
        <div className="timeline-section">
          <div className="section-header">
            <h2 className="section-title">Textimodals</h2>
          </div>
          <div className="section-content">
            <div className="task-group">
              <div className="task-item">
                <span className="task-name">Menu</span>
                <div className="progress-row">
                  <div className="progress-item">
                    <div className="progress-circle" style={{ '--progress': '61%' } as React.CSSProperties}></div>
                    <span className="progress-value">61%</span>
                  </div>
                  <div className="progress-item">
                    <div className="progress-circle" style={{ '--progress': '69%' } as React.CSSProperties}></div>
                    <span className="progress-value">69%</span>
                  </div>
                  <div className="progress-item">
                    <div className="progress-circle" style={{ '--progress': '64%' } as React.CSSProperties}></div>
                    <span className="progress-value">64%</span>
                  </div>
                  <div className="progress-item">
                    <div className="progress-circle" style={{ '--progress': '64%' } as React.CSSProperties}></div>
                    <span className="progress-value">64%</span>
                  </div>
                  <div className="progress-item">
                    <div className="progress-circle" style={{ '--progress': '48%' } as React.CSSProperties}></div>
                    <span className="progress-value">48%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="section-divider"></div>

        {/* Our Portfolio Section */}
        <div className="timeline-section">
          <div className="section-header">
            <h2 className="section-title">Our Portfolio</h2>
          </div>
          <div className="section-content">
            <div className="task-group">
              <div className="task-item">
                <span className="task-name">Profile</span>
                <div className="progress-row">
                  <div className="progress-item">
                    <div className="progress-circle" style={{ '--progress': '46%' } as React.CSSProperties}></div>
                    <span className="progress-value">46%</span>
                  </div>
                  <div className="progress-item">
                    <div className="progress-circle" style={{ '--progress': '63%' } as React.CSSProperties}></div>
                    <span className="progress-value">63%</span>
                  </div>
                  <div className="progress-item">
                    <div className="progress-circle" style={{ '--progress': '58%' } as React.CSSProperties}></div>
                    <span className="progress-value">58%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TimelineDashboard;
