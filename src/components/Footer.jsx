import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5 className="fw-bold mb-3">
              <i className="bi bi-tools me-2"></i>KaamWala
            </h5>
            <p className="text-light opacity-75">
              Connect with verified professionals for home services.
            </p>
          </div>
          <div className="col-md-6 text-end">
            <p className="opacity-75 mb-0">&copy; 2024 KaamWala. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;