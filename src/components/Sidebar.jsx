import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-toggle" 
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <i className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
      </button>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo-text">TiempoTruco</div>
          <div className="sidebar-subtitle">Generador de Horarios UDE</div>
        </div>
        
        <nav className="sidebar-nav">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            <i className="bi bi-calendar-week" aria-label="Horarios"></i> Generar Horarios
          </Link>
        </nav>
        
        <div className="sidebar-footer">
          <div className="sidebar-info">
            <i className="bi bi-info-circle"></i>
            <span>Ingeniería en Informática - UDE</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

