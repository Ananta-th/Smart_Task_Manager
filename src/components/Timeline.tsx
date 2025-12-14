import React from 'react';
import { Clock, MapPin, Users, ChevronRight, Calendar, ChevronDown, MoreVertical, Plus, User, Video, Coffee, Briefcase, Star, Filter, Search } from 'lucide-react';
import '../styles/Timeline.css';
import { useTheme } from '../contexts/ThemeContext';

interface TimelineEvent {
  id: string;
  time: string;
  title: string;
  location?: string;
  participants?: number;
  tags?: string[];
  isActive?: boolean;
  type?: 'meeting' | 'break' | 'work' | 'call';
  participantsList?: string[];
  duration?: string;
  day?: string;
}

const Timeline = () => {
  const { theme } = useTheme();
  
  const events: TimelineEvent[] = [
    {
      id: '1',
      time: '09:00 AM',
      title: 'Design Team Meeting',
      location: 'Conference Room A',
      participants: 8,
      tags: ['Design', 'Team'],
      isActive: true,
      type: 'meeting',
      participantsList: ['Sarah Chen', 'Mike Johnson', 'Emily Davis', 'Alex Kim'],
      duration: '1 hour',
      day: 'Monday'
    },
    {
      id: '2',
      time: '10:30 AM',
      title: 'Client Call',
      location: 'Zoom',
      participants: 4,
      tags: ['Client', 'Important'],
      isActive: false,
      type: 'call',
      participantsList: ['John Smith', 'Lisa Wang'],
      duration: '45 min',
      day: 'Monday'
    },
    {
      id: '3',
      time: '11:30 AM',
      title: 'Coffee Break',
      location: 'Kitchen',
      tags: ['Break'],
      isActive: false,
      type: 'break',
      duration: '30 min',
      day: 'Monday'
    },
    {
      id: '4',
      time: '02:00 PM',
      title: 'Project Review',
      location: 'Office',
      participants: 6,
      tags: ['Project', 'Review'],
      isActive: false,
      type: 'work',
      participantsList: ['Team A', 'Team B'],
      duration: '2 hours',
      day: 'Monday'
    },
    {
      id: '5',
      time: '04:00 PM',
      title: 'Sprint Planning',
      location: 'Meeting Room B',
      participants: 12,
      tags: ['Agile', 'Planning'],
      isActive: false,
      type: 'meeting',
      participantsList: ['Dev Team', 'QA Team', 'Product Manager'],
      duration: '1.5 hours',
      day: 'Tuesday'
    },
    {
      id: '6',
      time: '06:15 PM',
      title: 'Team Standup',
      location: 'Open Space',
      participants: 15,
      tags: ['Daily', 'Team'],
      isActive: false,
      type: 'meeting',
      participantsList: ['All Teams'],
      duration: '30 min',
      day: 'Tuesday'
    },
    {
      id: '7',
      time: '09:00 AM',
      title: 'Code Review',
      location: 'Virtual',
      participants: 4,
      tags: ['Development', 'Review'],
      isActive: false,
      type: 'work',
      participantsList: ['Senior Devs'],
      duration: '45 min',
      day: 'Wednesday'
    },
    {
      id: '8',
      time: '02:00 PM',
      title: 'Client Presentation',
      location: 'Board Room',
      participants: 8,
      tags: ['Client', 'Presentation'],
      isActive: false,
      type: 'meeting',
      participantsList: ['Client Team', 'Sales Team'],
      duration: '2 hours',
      day: 'Wednesday'
    },
    {
      id: '9',
      time: '10:00 AM',
      title: 'Documentation Update',
      location: 'Desk',
      tags: ['Documentation'],
      isActive: false,
      type: 'work',
      duration: '1 hour',
      day: 'Thursday'
    },
    {
      id: '10',
      time: '03:00 PM',
      title: 'Bug Fixing Session',
      location: 'Development Lab',
      participants: 5,
      tags: ['Development', 'Urgent'],
      isActive: false,
      type: 'work',
      participantsList: ['Backend Team'],
      duration: '2 hours',
      day: 'Thursday'
    },
    {
      id: '11',
      time: '11:00 AM',
      title: 'Design Workshop',
      location: 'Creative Space',
      participants: 10,
      tags: ['Design', 'Workshop'],
      isActive: false,
      type: 'meeting',
      participantsList: ['Design Team'],
      duration: '3 hours',
      day: 'Friday'
    },
    {
      id: '12',
      time: '04:30 PM',
      title: 'Team Retrospective',
      location: 'Conference Room C',
      participants: 12,
      tags: ['Agile', 'Retrospective'],
      isActive: false,
      type: 'meeting',
      participantsList: ['All Teams'],
      duration: '1 hour',
      day: 'Friday'
    }
  ];

  const getEventIcon = (type?: string) => {
    switch (type) {
      case 'meeting':
        return <Users size={16} />;
      case 'call':
        return <Video size={16} />;
      case 'break':
        return <Coffee size={16} />;
      case 'work':
        return <Briefcase size={16} />;
      default:
        return <Clock size={16} />;
    }
  };

  const getEventColors = (type?: string, isActive?: boolean) => {
    if (isActive) {
      return {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        border: '1px solid #667eea',
        textColor: '#ffffff'
      };
    }
    
    switch (type) {
      case 'meeting':
        return {
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          border: '1px solid #f093fb',
          textColor: theme === 'dark' ? '#ffffff' : '#1a1a1a'
        };
      case 'call':
        return {
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          border: '1px solid #4facfe',
          textColor: theme === 'dark' ? '#ffffff' : '#1a1a1a'
        };
      case 'break':
        return {
          background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
          border: '1px solid #43e97b',
          textColor: theme === 'dark' ? '#ffffff' : '#1a1a1a'
        };
      case 'work':
        return {
          background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
          border: '1px solid #fa709a',
          textColor: theme === 'dark' ? '#ffffff' : '#1a1a1a'
        };
      default:
        return {
          background: theme === 'dark' ? '#1a1a1a' : '#ffffff',
          border: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`,
          textColor: theme === 'dark' ? '#ffffff' : '#1a1a1a'
        };
    }
  };

  return (
    <div className="timeline-container" style={{ 
      background: theme === 'dark' ? '#0f0f0f' : '#ffffff',
      width: '100%',
      minHeight: '100%',
      overflowX: 'hidden',
      boxSizing: 'border-box'
    }}>
      {/* Header */}
      <div className="timeline-header" style={{ 
        marginBottom: '32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        padding: '20px 20px 0 20px'
      }}>
        <div>
          <h1 style={{ 
            fontSize: '32px', 
            fontWeight: '700', 
            color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
            margin: '0 0 8px 0'
          }}>Timeline</h1>
          <p style={{ 
            fontSize: '16px', 
            color: theme === 'dark' ? '#9ca3af' : '#6b7280',
            margin: '0'
          }}>Manage your daily schedule and events</p>
        </div>
        
        <div className="header-actions" style={{ 
          display: 'flex', 
          gap: '12px', 
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <div className="date-picker" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '8px',
            border: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`,
            background: theme === 'dark' ? '#2a2a2a' : '#ffffff',
            color: theme === 'dark' ? '#ffffff' : '#1a1a1a'
          }}>
            <Calendar size={16} />
            <span style={{ fontSize: '14px' }}>Today, Dec 13 2025</span>
            <ChevronDown size={16} />
          </div>
          
          <button className="filter-btn" style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`,
            background: theme === 'dark' ? '#2a2a2a' : '#ffffff',
            color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px'
          }}>
            <Filter size={16} />
            Filter
          </button>
          
          <button className="search-btn" style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`,
            background: theme === 'dark' ? '#2a2a2a' : '#ffffff',
            color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px'
          }}>
            <Search size={16} />
            Search
          </button>
          
          <button className="add-event-btn" style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: 'none',
            background: '#4f46e5',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px'
          }}>
            <Plus size={16} />
            Add Event
          </button>
        </div>
      </div>

      {/* Timeline Events */}
      <div className="week-timeline" style={{ 
        background: theme === 'dark' ? '#1a1a1a' : '#ffffff',
        borderRadius: '12px',
        border: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`,
        padding: '0 20px 20px 20px',
        overflowX: 'auto',
        width: '100%'
      }}>
        {/* Week Header */}
        <div className="week-header" style={{ 
          display: 'flex', 
          marginBottom: '20px',
          borderBottom: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`,
          paddingBottom: '12px',
          padding: '0 0 0 0'
        }}>
          <div style={{ width: '100px', fontSize: '12px', fontWeight: '600', color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}>WEEK</div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '600', color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}>
            <span>Monday</span>
            <span>Tuesday</span>
            <span>Wednesday</span>
            <span>Thursday</span>
            <span>Friday</span>
          </div>
        </div>

        {/* Day Rows */}
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => {
          const dayEvents = events.filter(event => event.day === day);
          
          return (
            <div key={day} className="day-row" style={{ 
              marginBottom: '24px',
              padding: '16px 20px',
              background: theme === 'dark' ? '#1e1e1e' : '#f8fafc',
              borderRadius: '8px',
              border: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`
            }}>
              {/* Day Header */}
              <div className="day-header" style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '16px'
              }}>
                <h3 style={{ 
                  fontSize: '16px', 
                  fontWeight: '600', 
                  color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
                  margin: '0'
                }}>{day}</h3>
                <span style={{ 
                  fontSize: '12px', 
                  color: theme === 'dark' ? '#9ca3af' : '#6b7280' 
                }}>
                  {dayEvents.length} events
                </span>
              </div>

              {/* Time Interval Chart for the Day */}
              <div className="day-timeline-chart" style={{ 
                background: theme === 'dark' ? '#2a2a2a' : '#ffffff',
                borderRadius: '8px',
                padding: '16px 20px',
                border: `1px solid ${theme === 'dark' ? '#3a3a3a' : '#f3f4f6'}`
              }}>
                {/* Time Header */}
                <div className="time-header" style={{ 
                  display: 'flex', 
                  marginBottom: '12px',
                  borderBottom: `1px solid ${theme === 'dark' ? '#3a3a3a' : '#f3f4f6'}`,
                  paddingBottom: '8px'
                }}>
                  <div style={{ width: '80px', fontSize: '11px', fontWeight: '600', color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}>TIME</div>
                  <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: '600', color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}>
                    <span>9AM</span>
                    <span>11AM</span>
                    <span>1PM</span>
                    <span>3PM</span>
                    <span>5PM</span>
                    <span>7PM</span>
                    <span>9PM</span>
                  </div>
                </div>

                {/* Event Rows for the Day */}
                <div className="event-rows" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {dayEvents.map((event) => {
                    const colors = getEventColors(event.type, event.isActive);
                    const startTime = event.time.split(' - ')[0];
                    const startHour = parseInt(startTime.split(':')[0]);
                    const startMinute = parseInt(startTime.split(' ')[0].split(':')[1]);
                    const isPM = startTime.includes('PM') && startHour !== 12;
                    const hour24 = isPM ? startHour + 12 : startHour;
                    const totalMinutes = hour24 * 60 + startMinute;
                    const position = ((totalMinutes - 540) / 720) * 100; // 9AM = 540 minutes, 9PM = 1260 minutes (12-hour span)
                    
                    return (
                      <div key={event.id} className="event-row" style={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        gap: '12px',
                        minHeight: '32px'
                      }}>
                        {/* Time Label */}
                        <div style={{ 
                          width: '80px', 
                          fontSize: '10px', 
                          fontWeight: '500',
                          color: theme === 'dark' ? '#9ca3af' : '#6b7280'
                        }}>
                          {startTime}
                        </div>

                        {/* Timeline Bar */}
                        <div style={{ 
                          flex: 1, 
                          height: '2px', 
                          background: theme === 'dark' ? '#3a3a3a' : '#f3f4f6',
                          position: 'relative',
                          borderRadius: '1px'
                        }}>
                          {/* Event Box */}
                          <div
                            className="event-box"
                            style={{
                              position: 'absolute',
                              left: `${Math.max(0, Math.min(position, 95))}%`,
                              top: '50%',
                              transform: 'translateY(-50%)',
                              background: colors.background,
                              border: colors.border,
                              borderRadius: '6px',
                              padding: '6px 10px',
                              minWidth: '100px',
                              maxWidth: '180px',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                              boxShadow: event.isActive 
                                ? '0 4px 15px rgba(102, 126, 234, 0.3)' 
                                : '0 2px 8px rgba(0, 0, 0, 0.1)',
                              zIndex: event.isActive ? 10 : 1
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)';
                              e.currentTarget.style.zIndex = '20';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                              e.currentTarget.style.zIndex = event.isActive ? '10' : '1';
                            }}
                          >
                            <div style={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '4px',
                              marginBottom: '2px'
                            }}>
                              {getEventIcon(event.type)}
                              <span style={{ 
                                fontSize: '10px', 
                                fontWeight: '600',
                                color: colors.textColor
                              }}>
                                {event.title}
                              </span>
                            </div>
                            
                            <div style={{ 
                              fontSize: '8px', 
                              color: event.isActive ? 'rgba(255, 255, 255, 0.8)' : (theme === 'dark' ? '#9ca3af' : '#6b7280'),
                              display: 'flex',
                              alignItems: 'center',
                              gap: '2px'
                            }}>
                              <MapPin size={8} />
                              <span>{event.location}</span>
                            </div>

                            {event.isActive && (
                              <div style={{
                                position: 'absolute',
                                top: '-6px',
                                right: '-6px',
                                width: '12px',
                                height: '12px',
                                background: '#ef4444',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '6px',
                                color: '#ffffff',
                                fontWeight: '600'
                              }}>
                                NOW
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
