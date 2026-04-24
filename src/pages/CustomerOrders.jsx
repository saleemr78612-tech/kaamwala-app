import React from 'react';
import { Link } from 'react-router-dom';

const CustomerOrders = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="h3 fw-bold">My Orders</h2>
            <Link to="/customer/post-job" className="btn btn-primary">
              <i className="bi bi-plus-circle me-2"></i>Post New Job
            </Link>
          </div>
          
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <p className="text-muted text-center py-5">
                No orders yet. <Link to="/customer/post-job">Post your first job</Link> to get started!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerOrders;