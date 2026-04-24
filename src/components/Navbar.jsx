import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const isLoggedIn = localStorage.getItem('token');

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand text-primary fw-bold fs-3" to="/">
          <i className="bi bi-tools me-2"></i>KaamWala
        </Link>

        {!isAuthPage && (
          <>
            <button 
              className="navbar-toggler" 
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} to="/services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
                </li>
              </ul>

              <div className="d-flex gap-2 align-items-center">
                {isLoggedIn ? (
                  <div className="dropdown">
                    <button 
                      className="btn btn-outline-primary dropdown-toggle d-flex align-items-center gap-2" 
                      type="button" 
                      data-bs-toggle="dropdown"
                    >
                      <i className="bi bi-person-circle"></i>
                      Dashboard
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end shadow-lg border-0 p-0">
                      {/* Customer */}
                      <li><Link className="dropdown-item py-2 px-3" to="/customer/dashboard">Customer Dashboard</Link></li>
                      <li><Link className="dropdown-item py-2 px-3" to="/customer/orders">My Orders</Link></li>
                      <li><Link className="dropdown-item py-2 px-3" to="/customer/post-job">Post Job</Link></li>
                      
                      <li><hr className="dropdown-divider my-0" /></li>
                      
                      {/* Provider */}
                      <li><Link className="dropdown-item py-2 px-3" to="/provider/dashboard">Provider Dashboard</Link></li>
                      <li><Link className="dropdown-item py-2 px-3" to="/provider/profile">Provider Profile</Link></li>
                      <li><Link className="dropdown-item py-2 px-3" to="/provider/jobs">Find Jobs</Link></li>
                      
                      <li><hr className="dropdown-divider my-0" /></li>
                      
                      <li><button className="dropdown-item text-danger py-2 px-3" onClick={handleLogout}>Logout</button></li>
                    </ul>
                  </div>
                ) : (
                  <>
                    <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
                    <Link to="/signup" className="btn btn-primary">Sign Up</Link>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;