import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const services = [
    { name: 'Electrician', icon: 'bi bi-lightning-charge', color: 'primary' },
    { name: 'Plumber', icon: 'bi bi-water', color: 'info' },
    { name: 'Carpenter', icon: 'bi bi-hammer', color: 'warning' },
    { name: 'Painter', icon: 'bi bi-brush', color: 'danger' },
    { name: 'AC Repair', icon: 'bi bi-fan', color: 'success' },
    { name: 'Mechanic', icon: 'bi bi-gear', color: 'secondary' },
  ];

  return (
    <>
      <section className="hero-section d-flex align-items-center text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Find Skilled Professionals 
                <span className="d-block">For Your Home Needs</span>
              </h1>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <Link to="/login" className="btn btn-light btn-lg px-5">
                  <i className="bi bi-search me-2"></i>Find Service
                </Link>
                <Link to="/signup" className="btn btn-outline-light btn-lg px-5">
                  <i className="bi bi-person-plus me-2"></i>Become Provider
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-4">Popular Services</h2>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card card-hover h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-5">
                    <i className={`${service.icon} display-1 text-${service.color} opacity-75 mb-4`}></i>
                    <h5 className="card-title fw-bold text-dark">{service.name}</h5>
                    <Link to="/login" className="btn btn-outline-primary mt-3">Book Now</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;