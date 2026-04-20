import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand text-primary fw-bold" to="/">
          <i className="bi bi-tools me-2"></i>KaamWala
        </Link>

        {!isAuthPage && (
          <>
            <button className="navbar-toggler" onClick={() => setIsOpen(!isOpen)}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
              </ul>
              <div className="d-flex gap-2">
                <Link to="/login" className="btn btn-outline-primary">Login</Link>
                <Link to="/signup" className="btn btn-primary">Sign Up</Link>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;