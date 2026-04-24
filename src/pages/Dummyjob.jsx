import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DummyJob = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    budget: '',
    description: '',
    deadline: ''
  });

  const categories = [
    'Web Development', 'Mobile App', 'Graphic Design', 
    'Digital Marketing', 'Content Writing', 'SEO'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      alert('Job posted successfully! 🎉');
      navigate('/customer/orders');
    }, 1000);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-xl-8 col-lg-10">
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
            <div className="card-header bg-primary text-white p-4">
              <div className="d-flex align-items-center">
                <i className="bi bi-briefcase fs-2 me-3 opacity-75"></i>
                <div>
                  <h2 className="mb-1 fw-bold">Post New Job</h2>
                  <p className="mb-0 opacity-90">Connect with verified professionals instantly</p>
                </div>
              </div>
            </div>
            
            <div className="card-body p-5">
              <form onSubmit={handleSubmit}>
                {/* Job Title */}
                <div className="mb-4">
                  <label className="form-label fw-semibold fs-5 mb-2">Job Title *</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="e.g. Need React Developer for E-commerce App"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    required
                  />
                </div>

                {/* Budget & Category */}
                <div className="row g-4 mb-5">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold mb-2">Budget (₹) *</label>
                    <div className="input-group">
                      <span className="input-group-text">₹</span>
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        placeholder="5000"
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold mb-2">Category *</label>
                    <select
                      className="form-select form-select-lg"
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      required
                    >
                      <option value="">Choose category</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-5">
                  <label className="form-label fw-semibold fs-5 mb-3">Detailed Description *</label>
                  <textarea
                    className="form-control"
                    rows="6"
                    placeholder="Describe your project requirements, timeline, skills needed, etc..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    required
                  />
                </div>

                {/* Deadline & Location */}
                <div className="row g-4 mb-5">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold mb-2">Deadline</label>
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      value={formData.deadline}
                      onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold mb-2">Location</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Bangalore, Karnataka"
                    />
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="d-flex gap-3 justify-content-end">
                  <Link to="/customer/dashboard" className="btn btn-outline-secondary px-5 py-3">
                    <i className="bi bi-arrow-left me-2"></i>Back to Dashboard
                  </Link>
                  <button type="submit" className="btn btn-success px-5 py-3 fw-semibold">
                    <i className="bi bi-check-circle me-2"></i>
                    Post Job Now
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Features */}
          <div className="row mt-5 g-4 text-center">
            <div className="col-md-4">
              <div className="p-4">
                <i className="bi bi-check-circle-fill text-success fs-1 mb-3"></i>
                <h6 className="fw-bold">Verified Pros</h6>
                <p className="text-muted">Only verified professionals</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4">
                <i className="bi bi-shield-check text-primary fs-1 mb-3"></i>
                <h6 className="fw-bold">Safe Payments</h6>
                <p className="text-muted">Secure escrow payments</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4">
                <i className="bi bi-headset text-info fs-1 mb-3"></i>
                <h6 className="fw-bold">24/7 Support</h6>
                <p className="text-muted">Dedicated support team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DummyJob;