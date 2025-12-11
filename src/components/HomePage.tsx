import React from 'react';
import '../styles/HomePage.css';
import { Button } from './ui/button';
import {
  CheckSquare,
  Instagram,
  Twitter,
  Github,
  Linkedin,
  Facebook,
  Calendar,
  MapPin,
  Clock
} from 'lucide-react';

interface HomePageProps {
  onGetStarted: () => void;
  onLoginClick?: () => void;
  onSignupClick?: () => void;
}

const featuredEvents = [
  {
    id: 1,
    title: 'Modern Web Design',
    description: "Explore the latest trends and tools in responsive web development and UI/UX.",
    icon: <Calendar className="w-8 h-8 text-gray-700" />,
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    description: "An introductory workshop to data analysis, machine learning, and visualization.",
    icon: <Clock className="w-8 h-8 text-gray-700" />,
  },
  {
    id: 3,
    title: 'Product Management Strategy',
    description: "Learn to define, launch, and iterate on successful products from ideation to market.",
    icon: <MapPin className="w-8 h-8 text-gray-700" />,
  },
];

export function HomePage({ onGetStarted, onLoginClick, onSignupClick }: HomePageProps) {
  return (
    <div className="container">
      {/* Abstract Background Shapes */}
      <div className="abstract-bg">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Content Wrapper */}
      <div className="content-wrapper">
        {/* Top Navigation Bar */}
        <div className="navbar">
          <div className="brand">
            <CheckSquare className="text-gray-700 h-6 w-6" />
            <span className="brand-text">ProjectFlow</span>
          </div>
          <div className="nav-buttons">
            <Button variant="ghost" className="btn btn-ghost" onClick={onLoginClick}>Log In</Button>
            <Button className="btn btn-dark" onClick={onSignupClick}>Sign Up</Button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="hero-section">
          <CheckSquare className="hero-icon" />
          <h1 className="hero-title">
            Streamline Your <span className="highlight">Workflow</span>
          </h1>
          <p className="hero-subtitle">
            Intuitive task management and seamless collaboration for teams of all sizes.
          </p>

          <Button
            onClick={onGetStarted}
            className="btn btn-primary"
          >
            Get Started Now
          </Button>

          {/* Screenshot Placeholder */}
          <div className="hero-image-container">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80"
              alt="Project Dashboard"
              className="hero-img"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <h2 className="features-title">
            Key Features Designed for You
          </h2>

          <div className="grid-container">
            {featuredEvents.map((feature) => (
              <div
                key={feature.id}
                className="feature-card"
              >
                <div className="feature-icon-box">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="cta-section">
          <div className="cta-card">
            <h2>
              Ready to Enhance Your Productivity?
            </h2>
            <p>
              Join thousands of teams already leveraging ProjectFlow for superior task management.
            </p>
            <Button
              onClick={onGetStarted}
              className="btn btn-primary"
            >
              Start Managing Task <span>&rarr;</span>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="footer-content">
            <div className="text-sm text-gray-500 font-medium">
              Copyright 2025
            </div>
            <div className="social-icons">
              <Facebook className="social-icon" />
              <Instagram className="social-icon" />
              <Twitter className="social-icon" />
              <Github className="social-icon" />
              <Linkedin className="social-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
