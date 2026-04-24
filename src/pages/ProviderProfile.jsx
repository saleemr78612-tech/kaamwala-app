import React, { useState } from 'react';

const ProviderProfile = () => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-white pb-0">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="fw-bold mb-0">
                  <i className="bi bi-person-circle me-2 text-primary"></i>
                  My Profile
                </h3>
                <button 
                  className="btn btn-outline-primary"
                  onClick={() => setEditMode(!editMode)}
                >
                  {editMode ? 'Cancel' : 'Edit'}
                </button>
              </div>
            </div>
            <div className="card-body p-5">
              <div className="row align-items-center">
                <div className="col-md-3 text-center mb-4">
                  <div className="avatar mx-auto mb-3">
                    <i className="bi bi-person-circle fs-1 text-muted"></i>
                  </div>
                  {editMode && <input type="file" className="form-control" />}
                </div>
                <div className="col-md-9">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Name</label>
                      <h5 className="mb-0">Rahul Sharma</h5>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Email</label>
                      <p className="mb-0">rahul@example.com</p>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Phone</label>
                      <p className="mb-0">+91 9876543210</p>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Skills</label>
                      <span className="badge bg-primary">React</span>
                      <span className="badge bg-primary">Node.js</span>
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">Bio</label>
                      <p className="mb-0">5+ years experienced Full Stack Developer</p>
                    </div>
                  </div>
                </div>
              </div>
              {editMode && (
                <div className="mt-4 pt-4 border-top">
                  <button className="btn btn-success">Save Changes</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderProfile;