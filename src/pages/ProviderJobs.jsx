import React from 'react';
import { Link } from 'react-router-dom';

const ProviderJobs = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h2 className="h3 fw-bold mb-4">Available Jobs</h2>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm hover-shadow">
                <div className="card-body">
                  <h6 className="fw-bold text-primary mb-2">Website Developer</h6>
                  <p className="text-muted small mb-2">Budget: ₹5000</p>
                  <p className="mb-3">Need responsive e-commerce site...</p>
                  <div className="d-flex justify-content-between">
                    <span className="badge bg-warning">5 Bids</span>
                    <Link to="/provider/bid/1/bids" className="btn btn-outline-primary btn-sm">Bid Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderJobs;