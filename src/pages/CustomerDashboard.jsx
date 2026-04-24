import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { dummyJobs } from '../data/dummyData';

const CustomerDashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    budget: ''
  });
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert('Job posted successfully!');
      setShowForm(false);
      setFormData({ title: '', description: '', location: '', budget: '' });
    }, 1500);
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
                  <i className="bi bi-house-door me-2 text-primary"></i>
                  Customer Dashboard
                </h1>
                <p className="text-muted mb-0">Manage your jobs and bids</p>
              </div>

              <button
                className="btn btn-primary btn-lg px-4"
                onClick={() => setShowForm(!showForm)}
              >
                <i className="bi bi-plus-circle me-2"></i>
                {showForm ? 'Cancel' : 'Post New Job'}
              </button>
            </div>
          </div>
        </div>

        {/* Post Job Form */}
        {showForm && (
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-lg border-0">
                <div className="card-body p-5">
                  <h3 className="h4 fw-bold mb-4">Post New Job</h3>

                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label className="form-label fw-semibold">Job Title</label>
                        <input
                          type="text"
                          className="form-control"
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-4">
                        <label className="form-label fw-semibold">Budget</label>
                        <input
                          type="number"
                          className="form-control"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold">Location</label>
                      <input
                        type="text"
                        className="form-control"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold">Description</label>
                      <textarea
                        className="form-control"
                        name="description"
                        rows="4"
                        value={formData.description}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-success w-100 py-3 fw-bold"
                      disabled={loading}
                    >
                      {loading ? 'Posting...' : 'Post Job'}
                    </button>
                  </form>

                </div>
              </div>
            </div>
          </div>
        )}

        {/* Jobs List */}
        <div className="row">
          <div className="col-12">
            <h3 className="h4 fw-bold mb-4">
              Your Posted Jobs
            </h3>

            <div className="row g-4">
              {dummyjob.map((job) => (
                <div key={job.id} className="col-lg-6 col-xl-4">
                  <div className="card shadow-sm h-100 border-0">

                    <div className="card-body p-4">
                      <h5 className="fw-bold">{job.title}</h5>
                      <p className="text-muted">{job.description}</p>

                      <div className="mb-3">
                        <strong>Budget:</strong> ₹{job.budget}
                      </div>

                      <div className="mb-3">
                        <strong>Location:</strong> {job.location}
                      </div>

                      <div className="mb-3">
                        <strong>Bids:</strong> {job.bids.length}
                      </div>

                      <div className="d-flex gap-2">
                        <button className="btn btn-outline-primary flex-fill">
                          View Bids
                        </button>

                        <button className="btn btn-success px-3">
                          <i className="bi bi-chat"></i>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default CustomerDashboard;