import React from 'react';
import { Clock, MapPin, Users, ChevronRight, Calendar, ChevronDown, MoreVertical, Plus } from 'lucide-react';
import '../styles/Timeline.css';

interface TimelineEvent {
  id: string;
  time: string;
  title: string;
  location: string;
  participants: number;
  tags: string[];
  isActive?: boolean;
}

const Timeline = () => {
  const events = [
    {
      time: '09:00 AM - 10:00 AM',
      title: 'Team Meeting',
      location: 'Conference Room A',
      participants: 12,
      tags: ['Meeting', 'Team'],
      isActive: true
    },
    {
      time: '10:30 AM - 11:30 AM',
      title: 'Project Review',
      location: 'Zoom Call',
      participants: 8,
      tags: ['Review', 'Project X'],
      isActive: false
    },
    {
      time: '01:00 PM - 02:00 PM',
      title: 'Lunch Break',
      location: 'Cafeteria',
      participants: 0,
      tags: ['Break'],
      isActive: false
    }
  ];

  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <h1>Timeline</h1>
        <div className="timeline-controls">
          <div className="date-picker">
            <Calendar size={16} />
            <span>Today, 16 Sep 2021</span>
            <ChevronDown size={16} />
          </div>
          <div className="view-options">
            <button className="active">Day</button>
            <button>Week</button>
            <button>Month</button>
          </div>
          <button className="add-event-btn">
            <Plus size={16} />
            <span>Add Event</span>
          </button>
        </div>
      </div>

      <div className="events-container">
        {events.map((event, index) => (
          <div key={index} className={`event-card ${event.isActive ? 'active' : ''}`}>
            <div className="event-time">
              <Clock size={14} />
              <span>{event.time}</span>
              {event.isActive && <span className="active-badge">Now</span>}
            </div>
            <div className="event-content">
              <div className="event-header">
                <h3>{event.title}</h3>
                <button className="more-options">
                  <MoreVertical size={16} />
                </button>
              </div>
              <div className="event-details">
                <span className="detail">
                  <MapPin size={14} />
                  {event.location}
                </span>
                <span className="detail">
                  <Users size={14} />
                  {event.participants} participants
                </span>
              </div>
              <div className="event-tags">
                {event.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <ChevronRight className="event-arrow" size={20} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
