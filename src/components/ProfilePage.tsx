import React, { useState } from 'react';
import '../styles/DashboardCombined.css';
import { Search, Bell, User as UserIcon, Settings, Shield, CreditCard, HelpCircle, LogOut, Moon, Sun, Globe, Smartphone, Mail, Phone, MapPin, Calendar, Briefcase, Award, BookOpen, Target, Users, Zap, Lock, Eye, EyeOff, Camera, Edit3, Save, X, Check, ChevronRight, ArrowLeft, UserPlus, Mail as EmailIcon, Lock as LockIcon, User as UserIcon2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function ProfilePage() {
  const { theme, setTheme } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const handleLogout = () => {
    // Clear user session data
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    
    // Redirect to login page
    window.location.href = '/login';
  };

  return (
    <div className="profile-container" style={{ minHeight: '100vh', overflowY: 'auto', backgroundImage: `url('/signup-screen.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', padding: '0' }}>
      <div className="overlay" style={{ minHeight: '100vh', background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)' }}>
      <div className="profile-header" style={{ background: theme === 'dark' ? '#1a1a1a' : '#ffffff', borderBottom: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`, position: 'sticky', top: 0, zIndex: 10 }}>
        <div className="header-content" style={{ width: '100%', padding: '20px 24px' }}>
          <div className="header-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div className="header-left">
              <h1 style={{ fontSize: '28px', fontWeight: '700', color: theme === 'dark' ? '#ffffff' : '#1a1a1a', margin: '0' }}>Profile Settings</h1>
              <p style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280', margin: '4px 0 0 0' }}>Manage your account settings and preferences</p>
            </div>
            <div className="header-actions" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <button 
                className="theme-toggle-btn"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                style={{
                  padding: '8px 14px',
                  borderRadius: '8px',
                  border: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`,
                  background: theme === 'dark' ? '#2a2a2a' : '#ffffff',
                  color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontSize: '14px'
                }}
              >
                {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
              </button>
              <button 
                className="edit-profile-btn"
                onClick={() => setIsEditing(!isEditing)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  background: '#4f46e5',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontSize: '14px'
                }}
              >
                {isEditing ? <Save size={16} /> : <Edit3 size={16} />}
                {isEditing ? 'Save' : 'Edit Profile'}
              </button>
            </div>
          </div>

          <div className="profile-tabs" style={{ display: 'flex', gap: '2px', background: theme === 'dark' ? '#2a2a2a' : '#f3f4f6', padding: '3px', borderRadius: '8px', flexWrap: 'wrap', width: '100%' }}>
            {['overview', 'personal', 'security', 'preferences', 'notifications'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`profile-tab ${activeTab === tab ? 'active' : ''}`}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  border: 'none',
                  background: activeTab === tab ? (theme === 'dark' ? '#4f46e5' : '#ffffff') : 'transparent',
                  color: activeTab === tab ? (theme === 'dark' ? '#ffffff' : '#1a1a1a') : (theme === 'dark' ? '#9ca3af' : '#6b7280'),
                  fontWeight: activeTab === tab ? '600' : '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textTransform: 'capitalize',
                  fontSize: '14px'
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="profile-content" style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px', paddingBottom: '40px' }}>
        {/* Profile Overview - Signup Screen Style */}
        {activeTab === 'overview' && (
          <div className="overview-section">
            <div className="profile-card" style={{
              background: theme === 'dark' ? '#1a1a1a' : '#ffffff',
              border: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`,
              borderRadius: '16px',
              padding: '32px',
              marginBottom: '24px'
            }}>
              <div className="signup-style-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
                {/* Left Side - Profile Info */}
                <div className="profile-left">
                  <div className="profile-header-section" style={{ marginBottom: '32px' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: '700', color: theme === 'dark' ? '#ffffff' : '#1a1a1a', marginBottom: '8px' }}>Welcome Back!</h2>
                    <p style={{ fontSize: '16px', color: theme === 'dark' ? '#9ca3af' : '#6b7280', marginBottom: '24px' }}>Manage your profile and account settings</p>
                  </div>

                  <div className="profile-avatar-section" style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '32px' }}>
                    <div className="avatar-container" style={{ position: 'relative' }}>
                      <img
                        src="/Profile.jpg"
                        alt="Profile"
                        style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: `4px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}` }}
                      />
                      <button 
                        className="camera-btn"
                        style={{
                          position: 'absolute',
                          bottom: '0',
                          right: '0',
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          background: '#4f46e5',
                          border: '3px solid ' + (theme === 'dark' ? '#1a1a1a' : '#ffffff'),
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer'
                        }}
                      >
                        <Camera size={14} />
                      </button>
                    </div>
                    <div className="profile-info">
                      <h3 style={{ fontSize: '24px', fontWeight: '600', color: theme === 'dark' ? '#ffffff' : '#1a1a1a', margin: '0 0 4px 0' }}>Ananta Thapa</h3>
                      <p style={{ fontSize: '14px', color: theme === 'dark' ? '#9ca3af' : '#6b7280', margin: '0' }}>Product Designer</p>
                    </div>
                  </div>

                  <div className="quick-actions" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <button style={{
                      padding: '12px 20px',
                      borderRadius: '8px',
                      border: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`,
                      background: theme === 'dark' ? '#2a2a2a' : '#ffffff',
                      color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      fontSize: '14px'
                    }}>
                      <UserIcon size={18} />
                      Edit Profile Information
                    </button>
                    <button style={{
                      padding: '12px 20px',
                      borderRadius: '8px',
                      border: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`,
                      background: theme === 'dark' ? '#2a2a2a' : '#ffffff',
                      color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      fontSize: '14px'
                    }}>
                      <Shield size={18} />
                      Security Settings
                    </button>
                    <button 
                      onClick={handleLogout}
                      style={{
                        padding: '12px 20px',
                        borderRadius: '8px',
                        border: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`,
                        background: theme === 'dark' ? '#2a2a2a' : '#ffffff',
                        color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        fontSize: '14px'
                      }}
                    >
                      <LogOut size={18} />
                      Logout
                    </button>
                  </div>
                </div>

                {/* Right Side - Stats & Info */}
                <div className="profile-right">
                  <div className="stats-section" style={{ marginBottom: '32px' }}>
                    <h4 style={{ fontSize: '18px', fontWeight: '600', color: theme === 'dark' ? '#ffffff' : '#1a1a1a', marginBottom: '20px' }}>Account Statistics</h4>
                    <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div className="stat-item" style={{
                        background: theme === 'dark' ? '#2a2a2a' : '#f8fafc',
                        padding: '16px',
                        borderRadius: '12px',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '24px', fontWeight: '700', color: theme === 'dark' ? '#ffffff' : '#1a1a1a', marginBottom: '4px' }}>127</div>
                        <div style={{ fontSize: '12px', color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}>Tasks Completed</div>
                      </div>
                      <div className="stat-item" style={{
                        background: theme === 'dark' ? '#2a2a2a' : '#f8fafc',
                        padding: '16px',
                        borderRadius: '12px',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '24px', fontWeight: '700', color: theme === 'dark' ? '#ffffff' : '#1a1a1a', marginBottom: '4px' }}>89%</div>
                        <div style={{ fontSize: '12px', color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}>Completion Rate</div>
                      </div>
                      <div className="stat-item" style={{
                        background: theme === 'dark' ? '#2a2a2a' : '#f8fafc',
                        padding: '16px',
                        borderRadius: '12px',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '24px', fontWeight: '700', color: theme === 'dark' ? '#ffffff' : '#1a1a1a', marginBottom: '4px' }}>4.9</div>
                        <div style={{ fontSize: '12px', color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}>Average Rating</div>
                      </div>
                      <div className="stat-item" style={{
                        background: theme === 'dark' ? '#2a2a2a' : '#f8fafc',
                        padding: '16px',
                        borderRadius: '12px',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '24px', fontWeight: '700', color: theme === 'dark' ? '#ffffff' : '#1a1a1a', marginBottom: '4px' }}>18</div>
                        <div style={{ fontSize: '12px', color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}>Active Projects</div>
                      </div>
                    </div>
                  </div>

                  <div className="account-info" style={{ marginBottom: '32px' }}>
                    <h4 style={{ fontSize: '18px', fontWeight: '600', color: theme === 'dark' ? '#ffffff' : '#1a1a1a', marginBottom: '20px' }}>Account Information</h4>
                    <div className="info-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div className="info-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}` }}>
                        <span style={{ fontSize: '14px', color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}>Member Since</span>
                        <span style={{ fontSize: '14px', fontWeight: '500', color: theme === 'dark' ? '#ffffff' : '#1a1a1a' }}>March 2023</span>
                      </div>
                      <div className="info-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}` }}>
                        <span style={{ fontSize: '14px', color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}>Account Type</span>
                        <span style={{ fontSize: '14px', fontWeight: '500', color: '#10b981' }}>Pro Member</span>
                      </div>
                      <div className="info-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}` }}>
                        <span style={{ fontSize: '14px', color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}>Location</span>
                        <span style={{ fontSize: '14px', fontWeight: '500', color: theme === 'dark' ? '#ffffff' : '#1a1a1a' }}>Kathmandu, Nepal</span>
                      </div>
                      <div className="info-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0' }}>
                        <span style={{ fontSize: '14px', color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}>Email Verified</span>
                        <span style={{ fontSize: '14px', fontWeight: '500', color: '#10b981' }}>Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Personal Information */}
        {activeTab === 'personal' && (
          <div className="personal-section">
            <div className="section-card" style={{
              background: theme === 'dark' ? '#1a1a1a' : '#ffffff',
              border: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`,
              borderRadius: '16px',
              padding: '32px'
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: theme === 'dark' ? '#ffffff' : '#1a1a1a', marginBottom: '24px' }}>Personal Information</h3>
              
              <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div className="form-field">
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: theme === 'dark' ? '#9ca3af' : '#6b7280', marginBottom: '8px' }}>First Name</label>
                  <input 
                    type="text" 
                    defaultValue="Ananta"
                    disabled={!isEditing}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`,
                      background: theme === 'dark' ? '#2a2a2a' : '#ffffff',
                      color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
                      fontSize: '16px'
                    }}
                  />
                </div>
                
                <div className="form-field">
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: theme === 'dark' ? '#9ca3af' : '#6b7280', marginBottom: '8px' }}>Last Name</label>
                  <input 
                    type="text" 
                    defaultValue="Thapa"
                    disabled={!isEditing}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`,
                      background: theme === 'dark' ? '#2a2a2a' : '#ffffff',
                      color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
                      fontSize: '16px'
                    }}
                  />
                </div>

                <div className="form-field">
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: theme === 'dark' ? '#9ca3af' : '#6b7280', marginBottom: '8px' }}>Email</label>
                  <input 
                    type="email" 
                    defaultValue="anantathapa14@gmail.com"
                    disabled={!isEditing}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`,
                      background: theme === 'dark' ? '#2a2a2a' : '#ffffff',
                      color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
                      fontSize: '16px'
                    }}
                  />
                </div>

                <div className="form-field">
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: theme === 'dark' ? '#9ca3af' : '#6b7280', marginBottom: '8px' }}>Phone</label>
                  <input 
                    type="tel" 
                    defaultValue="+977 9812345678"
                    disabled={!isEditing}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`,
                      background: theme === 'dark' ? '#2a2a2a' : '#ffffff',
                      color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
                      fontSize: '16px'
                    }}
                  />
                </div>

                <div className="form-field">
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: theme === 'dark' ? '#9ca3af' : '#6b7280', marginBottom: '8px' }}>Job Title</label>
                  <input 
                    type="text" 
                    defaultValue="Product Designer"
                    disabled={!isEditing}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`,
                      background: theme === 'dark' ? '#2a2a2a' : '#ffffff',
                      color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
                      fontSize: '16px'
                    }}
                  />
                </div>

                <div className="form-field">
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: theme === 'dark' ? '#9ca3af' : '#6b7280', marginBottom: '8px' }}>Location</label>
                  <input 
                    type="text" 
                    defaultValue="Kathmandu, Nepal"
                    disabled={!isEditing}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`,
                      background: theme === 'dark' ? '#2a2a2a' : '#ffffff',
                      color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
                      fontSize: '16px'
                    }}
                  />
                </div>
              </div>

              <div className="form-field" style={{ marginTop: '20px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: theme === 'dark' ? '#9ca3af' : '#6b7280', marginBottom: '8px' }}>Bio</label>
                <textarea 
                  rows={4}
                  defaultValue="Passionate product designer with 5+ years of experience creating user-centered digital experiences. Specialized in UI/UX design, design systems, and cross-platform applications."
                  disabled={!isEditing}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`,
                    background: theme === 'dark' ? '#2a2a2a' : '#ffffff',
                    color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
                    fontSize: '16px',
                    resize: 'vertical'
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Security Settings */}
        {activeTab === 'security' && (
          <div className="security-section">
            <div className="section-card" style={{
              background: theme === 'dark' ? '#1a1a1a' : '#ffffff',
              border: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`,
              borderRadius: '16px',
              padding: '40px'
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: theme === 'dark' ? '#ffffff' : '#1a1a1a', marginBottom: '30px' }}>Security Settings</h3>
              
              <div className="security-options" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="security-item" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '20px',
                  background: theme === 'dark' ? '#2a2a2a' : '#f8fafc',
                  borderRadius: '12px'
                }}>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', color: theme === 'dark' ? '#ffffff' : '#1a1a1a', margin: '0 0 4px 0' }}>Two-Factor Authentication</h4>
                    <p style={{ fontSize: '14px', color: theme === 'dark' ? '#9ca3af' : '#6b7280', margin: '0' }}>Add an extra layer of security to your account</p>
                  </div>
                  <button style={{
                    padding: '8px 16px',
                    borderRadius: '6px',
                    border: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`,
                    background: theme === 'dark' ? '#1a1a1a' : '#ffffff',
                    color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
                    cursor: 'pointer'
                  }}>
                    Enable
                  </button>
                </div>

                <div className="security-item" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '20px',
                  background: theme === 'dark' ? '#2a2a2a' : '#f8fafc',
                  borderRadius: '12px'
                }}>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', color: theme === 'dark' ? '#ffffff' : '#1a1a1a', margin: '0 0 4px 0' }}>Change Password</h4>
                    <p style={{ fontSize: '14px', color: theme === 'dark' ? '#9ca3af' : '#6b7280', margin: '0' }}>Update your password regularly to keep your account secure</p>
                  </div>
                  <button style={{
                    padding: '8px 16px',
                    borderRadius: '6px',
                    border: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`,
                    background: theme === 'dark' ? '#1a1a1a' : '#ffffff',
                    color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
                    cursor: 'pointer'
                  }}>
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Preferences */}
        {activeTab === 'preferences' && (
          <div className="preferences-section">
            <div className="section-card" style={{
              background: theme === 'dark' ? '#1a1a1a' : '#ffffff',
              border: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`,
              borderRadius: '16px',
              padding: '40px'
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: theme === 'dark' ? '#ffffff' : '#1a1a1a', marginBottom: '30px' }}>Preferences</h3>
              
              <div className="preference-options" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="preference-item">
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: theme === 'dark' ? '#9ca3af' : '#6b7280', marginBottom: '8px' }}>Language</label>
                  <select style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`,
                    background: theme === 'dark' ? '#2a2a2a' : '#ffffff',
                    color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
                    fontSize: '16px'
                  }}>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>

                <div className="preference-item">
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: theme === 'dark' ? '#9ca3af' : '#6b7280', marginBottom: '8px' }}>Theme</label>
                  <div className="theme-options" style={{ display: 'flex', gap: '12px' }}>
                    {['light', 'dark', 'system'].map((themeOption) => (
                      <button
                        key={themeOption}
                        onClick={() => setTheme(themeOption as any)}
                        style={{
                          padding: '10px 16px',
                          borderRadius: '8px',
                          border: `1px solid ${theme === themeOption ? '#4f46e5' : (theme === 'dark' ? '#2a2a2a' : '#e5e7eb')}`,
                          background: theme === themeOption ? '#4f46e5' : (theme === 'dark' ? '#2a2a2a' : '#ffffff'),
                          color: theme === themeOption ? '#ffffff' : (theme === 'dark' ? '#ffffff' : '#1a1a1a'),
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                      >
                        {themeOption === 'light' && <Sun size={16} />}
                        {themeOption === 'dark' && <Moon size={16} />}
                        {themeOption === 'system' && <Settings size={16} />}
                        <span style={{ textTransform: 'capitalize' }}>{themeOption}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Notifications */}
        {activeTab === 'notifications' && (
          <div className="notifications-section">
            <div className="section-card" style={{
              background: theme === 'dark' ? '#1a1a1a' : '#ffffff',
              border: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e7eb'}`,
              borderRadius: '16px',
              padding: '40px'
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: theme === 'dark' ? '#ffffff' : '#1a1a1a', marginBottom: '30px' }}>Notification Preferences</h3>
              
              <div className="notification-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { title: 'Email Notifications', desc: 'Receive email updates about your account activity' },
                  { title: 'Push Notifications', desc: 'Receive push notifications on your mobile device' },
                  { title: 'Task Reminders', desc: 'Get reminded about upcoming tasks and deadlines' },
                  { title: 'Team Updates', desc: 'Stay updated with team activities and changes' }
                ].map((item, index) => (
                  <div key={index} className="notification-item" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px',
                    background: theme === 'dark' ? '#2a2a2a' : '#f8fafc',
                    borderRadius: '8px'
                  }}>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', color: theme === 'dark' ? '#ffffff' : '#1a1a1a', margin: '0 0 4px 0' }}>{item.title}</h4>
                      <p style={{ fontSize: '14px', color: theme === 'dark' ? '#9ca3af' : '#6b7280', margin: '0' }}>{item.desc}</p>
                    </div>
                    <label className="toggle-switch" style={{
                      position: 'relative',
                      width: '48px',
                      height: '24px',
                      display: 'inline-block'
                    }}>
                      <input type="checkbox" defaultChecked style={{ opacity: 0, width: 0, height: 0 }} />
                      <span style={{
                        position: 'absolute',
                        cursor: 'pointer',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: '#4f46e5',
                        borderRadius: '24px',
                        transition: '0.4s'
                      }}></span>
                      <span style={{
                        position: 'absolute',
                        content: '""',
                        height: '18px',
                        width: '18px',
                        left: '3px',
                        bottom: '3px',
                        background: '#ffffff',
                        borderRadius: '50%',
                        transition: '0.4s'
                      }}></span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}
