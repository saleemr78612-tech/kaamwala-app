import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { dummyJobs } from '../data/dummyData';

const ProviderDashboard = () => {
  const [activeTab, setActiveTab] = useState('available');

  const handleBidSubmit = (jobId) => {
    alert(`Bid submitted for job ${jobId}! (Demo)`);
  };

  return (
    <div className="py-4">
      <div className="container">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h1 className="h2 fw-bold text-dark mb-1">
                  <i className="bi bi-tools me-2 text-success"></i>
                  Provider Dashboard
                </h1>
                <p className="text-muted mb-0">Find jobs & manage bids</p>
              </div>
              <div className="d-flex gap-2">
                <Link to="/provider/profile" className="btn btn-outline-secondary">
                  <i className="bi bi-person me-2"></i>Profile
                </Link>
                <button className="btn btn-success">
                  <i className="bi bi-bell me-2"></i>Notifications
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="row mb-5">
          <div className="col-12">
            <ul className="nav nav-tabs nav-tabs-custom mb-4" id="providerTabs">
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeTab === 'available' ? 'active' : ''}`}
                  onClick={() => setActiveTab('available')}
                >
                  Available Jobs ({dummyJobs.length})
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeTab === 'mybids' ? 'active' : ''}`}
                  onClick={() => setActiveTab('mybids')}
                >
                  My Bids (3)
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Available Jobs Tab */}
        {activeTab === 'available' && (
          <div className="row g-4">
            {dummyJobs.map((job) => (
              <div key={job.id} className="col-lg-6 col-xl-4">
                <div className="card shadow-sm h-100 border-0 card-hover">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="card-title fw-bold">{job.title}</h5>
                      <span className="badge bg-warning text-dark">New</span>
                    </div>
                    <p className="text-muted mb-3">{job.description}</p>
                    <ul className="list-unstyled mb-4">
                      <li className="d-flex justify-content-between mb-2">
                        <span>Location:</span> <strong>{job.location}</strong>
                      </li>
                      <li className="d-flex justify-content-between mb-2">
                        <span>Budget:</span> <strong>₹{job.budget}</strong>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>Posted:</span> <strong>{job.postedDate}</strong>
                      </li>
                    </ul>
                    
                    <div className="input-group mb-3">
                      <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Enter your bid (₹)"
                        min="0"
                      />
                      <button 
                        className="btn btn-success"
                        onClick={() => handleBidSubmit(job.id)}
                      >
                        Submit Bid
                      </button>
                    </div>
                    
                    <Link to={`/job/${job.id}`} className="btn btn-outline-primary w-100">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* My Bids Tab */}
        {activeTab === 'mybids' && (
          <div className="row g-4">
            <div className="col-12">
              <div className="alert alert-info">
                <i className="bi bi-info-circle me-2"></i>
                Your bids will appear here once submitted
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProviderDashboard;