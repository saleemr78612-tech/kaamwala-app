import React from 'react';
import { Link } from 'react-router-dom';

const JobBids = () => {
  const bids = [
    { id: 1, provider: 'Rahul Sharma', amount: 4500, rating: 4.8 },
    { id: 2, provider: 'Priya Singh', amount: 5000, rating: 4.5 },
  ];

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <h2 className="h3 fw-bold mb-4">Job Bids (Website Development)</h2>
          
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5>Order #ORD001</h5>
              <p>Budget: ₹5000 | Posted: 2 days ago</p>
            </div>
          </div>

          {bids.map(bid => (
            <div key={bid.id} className="card shadow-sm mb-4">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h6 className="fw-bold">{bid.provider}</h6>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <div className="d-flex">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className={`bi bi-star${i < bid.rating ? '-fill' : ''} text-warning`}></i>
                        ))}
                      </div>
                      <span className="text-muted">({bid.rating})</span>
                    </div>
                    <p className="text-muted mb-0">₹{bid.amount} | 3 days delivery</p>
                  </div>
                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-success btn-sm">Accept</button>
                    <button className="btn btn-outline-secondary btn-sm">Chat</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobBids;