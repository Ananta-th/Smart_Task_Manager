import React from 'react';
import '../styles/MessagesPage.css';
import { Search, Plus, MoreVertical, Send, Paperclip, Smile, Image as ImageIcon } from 'lucide-react';

export function MessagesPage() {
  return (
    <div className="messages-page">
      <aside className="messages-sidebar">
        <div className="messages-sidebar-header">
          <h2 className="messages-title">Messages</h2>
        </div>

        <div className="messages-search">
          <Search size={16} className="messages-search-icon" />
          <input className="messages-search-input" placeholder="Search..." />
        </div>

        <div className="messages-list">
          <button className="messages-item active" type="button">
            <div className="messages-avatar">N</div>
            <div className="messages-item-body">
              <div className="messages-item-top">
                <div className="messages-item-name">Nischal Bhattarai</div>
                <div className="messages-item-time">4:30 PM</div>
              </div>
              <div className="messages-item-sub">
                <span className="messages-item-status">Typing...</span>
                <span className="messages-item-badge">2</span>
              </div>
            </div>
          </button>

          <button className="messages-item" type="button">
            <div className="messages-avatar">D</div>
            <div className="messages-item-body">
              <div className="messages-item-top">
                <div className="messages-item-name">Design Team</div>
                <div className="messages-item-time">9:36 AM</div>
              </div>
              <div className="messages-item-sub">Hello! Everyone</div>
            </div>
          </button>

          <button className="messages-item" type="button">
            <div className="messages-avatar">P</div>
            <div className="messages-item-body">
              <div className="messages-item-top">
                <div className="messages-item-name">Pramod Shrestha</div>
                <div className="messages-item-time">1:15 AM</div>
              </div>
              <div className="messages-item-sub">Wow really Cool</div>
            </div>
          </button>

          <div className="messages-section-label">All Message</div>

          <button className="messages-item" type="button">
            <div className="messages-avatar">K</div>
            <div className="messages-item-body">
              <div className="messages-item-top">
                <div className="messages-item-name">Kebin Maharjan</div>
                <div className="messages-item-time">1:15 AM</div>
              </div>
              <div className="messages-item-sub">Wow really Cool</div>
            </div>
          </button>
        </div>
      </aside>

      <section className="messages-chat">
        <div className="messages-chat-header">
          <div className="messages-chat-header-left">
            <div className="messages-chat-avatar">DT</div>
            <div>
              <div className="messages-chat-title">Design Team</div>
              <div className="messages-chat-subtitle">60 member, 10 online</div>
            </div>
          </div>
          <div className="messages-chat-header-right">
            <button className="messages-icon-btn" type="button" aria-label="Add">
              <Plus size={16} />
            </button>
            <button className="messages-icon-btn" type="button" aria-label="More">
              <MoreVertical size={16} />
            </button>
          </div>
        </div>

        <div className="messages-chat-body">
          <div className="messages-day-sep">Today, November 19</div>

          <div className="messages-bubble-row">
            <div className="messages-bubble-avatar">N</div>
            <div className="messages-bubbles">
              <div className="messages-bubble">Hi, Are you still Web Designer.</div>
              <div className="messages-bubble">Would love to see some Design</div>
            </div>
          </div>

          <div className="messages-bubble-row">
            <div className="messages-bubble-avatar">D</div>
            <div className="messages-bubbles">
              <div className="messages-bubble">Hey, happy to hear from you. Yes, I will be back in a couple of days.</div>
              <div className="messages-bubble">Here are some design I took earlier today.</div>
              <div className="messages-bubble messages-bubble-media">
                <div className="messages-media-grid">
                  <div className="messages-media-card"></div>
                  <div className="messages-media-card"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="messages-bubble-row mine">
            <div className="messages-bubbles">
              <div className="messages-bubble messages-bubble-mine">Great! That’s a nice design idea.</div>
            </div>
            <div className="messages-bubble-avatar">ME</div>
          </div>
        </div>

        <div className="messages-composer">
          <button className="messages-icon-btn" type="button" aria-label="Attach">
            <Paperclip size={16} />
          </button>
          <input className="messages-composer-input" placeholder="Add a comment..." />
          <button className="messages-icon-btn" type="button" aria-label="Emoji">
            <Smile size={16} />
          </button>
          <button className="messages-icon-btn" type="button" aria-label="Image">
            <ImageIcon size={16} />
          </button>
          <button className="messages-send" type="button" aria-label="Send">
            <Send size={16} />
          </button>
        </div>
      </section>

      <aside className="messages-info">
        <div className="messages-profile">
          <div className="messages-profile-avatar"></div>
          <div className="messages-profile-name">Kebin Maharjan</div>
          <div className="messages-profile-handle">@KebinM</div>
        </div>

        <div className="messages-members">
          <div className="messages-members-header">
            <div className="messages-members-title">Members</div>
            <button className="messages-add-member" type="button">
              <Plus size={16} />
              Add Member
            </button>
          </div>

          <div className="messages-member">
            <div className="messages-member-avatar"></div>
            <div className="messages-member-name">Pramod Shrestha</div>
          </div>
          <div className="messages-member">
            <div className="messages-member-avatar"></div>
            <div className="messages-member-name">Nischal Maharjan</div>
          </div>
          <div className="messages-member">
            <div className="messages-member-avatar"></div>
            <div className="messages-member-name">Dikxhit Maharjan</div>
          </div>
          <div className="messages-member">
            <div className="messages-member-avatar"></div>
            <div className="messages-member-name">Diwas Bhattarai</div>
          </div>
        </div>
      </aside>
    </div>
  );
}
