import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostJob = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-white border-0 pb-0">
              <h3 className="fw-bold mb-0">
                <i className="bi bi-plus-circle me-2 text-success"></i>
                Post New Job
              </h3>
            </div>
            <div className="card-body p-5">
              <form>
                <div className="mb-4">
                  <label className="form-label fw-semibold">Job Title</label>
                  <input type="text" className="form-control" placeholder="e.g. Need Website Developer" />
                </div>
                
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-semibold">Budget</label>
                    <input type="number" className="form-control" placeholder="₹5000" />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-semibold">Category</label>
                    <select className="form-select">
                      <option>Web Development</option>
                      <option>Graphic Design</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Description</label>
                  <textarea className="form-control" rows="5" placeholder="Describe your requirements..."></textarea>
                </div>

                <div className="d-flex gap-3">
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary flex-fill"
                    onClick={() => navigate('/customer/dashboard')}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-success flex-fill">
                    Post Job
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostJob;