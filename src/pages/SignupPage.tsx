import React, { useState } from 'react';
import '../styles/LoginPage.css';
import { User, Mail, Phone, MapPin, Lock, Eye, EyeOff } from 'lucide-react';

interface SignupPageProps {
  onBackToHome?: () => void;
  onLoginClick?: () => void;
  onSignupSuccess?: () => void;
}

export function SignupPage({ onBackToHome, onLoginClick, onSignupSuccess }: SignupPageProps) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup attempt', { username, email, contact, address, password });
    // Simulate successful signup
    if (username && email && password) {
      onSignupSuccess?.();
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">SIGN UP</h1>
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-field">
            <label htmlFor="username">Username</label>
            <div style={{ position: 'relative' }}>
              <User className="field-icon" size={18} />
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
                style={{ paddingLeft: '40px' }}
              />
            </div>
          </div>

          <div className="login-field">
            <label htmlFor="email">Email</label>
            <div style={{ position: 'relative' }}>
              <Mail className="field-icon" size={18} />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                style={{ paddingLeft: '40px' }}
              />
            </div>
          </div>

          <div className="login-field">
            <label htmlFor="contact">Contact</label>
            <div style={{ position: 'relative' }}>
              <Phone className="field-icon" size={18} />
              <input
                id="contact"
                type="tel"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Enter your contact number"
                required
                style={{ paddingLeft: '40px' }}
              />
            </div>
          </div>

          <div className="login-field">
            <label htmlFor="address">Address</label>
            <div style={{ position: 'relative' }}>
              <MapPin className="field-icon" size={18} />
              <input
                id="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
                required
                style={{ paddingLeft: '40px' }}
              />
            </div>
          </div>

          <div className="login-field">
            <label htmlFor="password">Password</label>
            <div style={{ position: 'relative' }}>
              <Lock className="field-icon" size={18} />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                style={{ paddingLeft: '40px', paddingRight: '40px' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button type="submit" className="login-submit">
            Sign Up
          </button>
        </form>

        <div className="login-footer-pill">
          <span className="login-footer-text">Already have an account? </span>
          <button
            type="button"
            className="login-footer-link"
            onClick={onLoginClick}
          >
            Login
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
          <button 
            onClick={onBackToHome}
            style={{
              background: 'none',
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '8px 16px',
              cursor: 'pointer',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
