import React from 'react';
import '../styles/Dashboard.css';
import { Search, Bell, User as UserIcon } from 'lucide-react';

export function ProfilePage() {
  return (
    <div className="dashboard-container">
      <main className="main-content">
        <header className="header">
          <div className="header-left">
            <h1 className="page-title">Settings</h1>
            <p className="page-subtitle">Manage your personal information</p>
          </div>
          <div className="header-right">
            <div className="search-bar">
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
            <div className="user-profile">
              <UserIcon size={20} />
            </div>
          </div>
        </header>

        <div className="profile-banner">
          <div className="profile-cover" />
          <div className="profile-header">
            <div className="profile-avatar-wrapper">
              <img
                src="https://images.unsplash.com/photo-1526481280695-3c687fd543c0?auto=format&fit=crop&w=160&q=80"
                alt="Cybernetic avatar"
                className="profile-avatar"
              />
            </div>
            <div className="profile-title-group">
              <h2 className="profile-title">Settings</h2>
              <p className="profile-subtitle">My details</p>
            </div>
            <div className="profile-actions">
              <button className="btn-secondary">Cancel</button>
              <button className="btn-primary">Save</button>
            </div>
          </div>
          <div className="profile-tabs">
            <button className="profile-tab active">My details</button>
            <button className="profile-tab">Profile</button>
            <button className="profile-tab">Password</button>
            <button className="profile-tab">Team</button>
            <button className="profile-tab">Plan</button>
            <button className="profile-tab">Email</button>
            <button className="profile-tab">Notifications</button>
          </div>
        </div>

        <section className="profile-form">
          <div className="form-row">
            <div className="form-field">
              <label>First name</label>
              <input type="text" placeholder="Ananta" />
            </div>
            <div className="form-field">
              <label>Last name</label>
              <input type="text" placeholder="Thapa" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field full">
              <label>Email</label>
              <div className="input-with-icon">
                <span className="input-icon">@</span>
                <input type="email" placeholder="anantathapa14@gmail.com" />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field full">
              <label>Avatar</label>
              <div className="upload-area">
                <div className="upload-icon" />
                <p>Click to upload or drag and drop</p>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Role</label>
              <input type="text" placeholder="Product Designer" />
            </div>
            <div className="form-field">
              <label>Country</label>
              <input type="text" placeholder="Nepal" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
