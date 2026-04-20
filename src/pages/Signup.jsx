import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'customer'
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setLoading(true);
      
      setTimeout(() => {
        setLoading(false);
        alert(`Signup successful as ${formData.role === 'customer' ? 'Customer' : 'Provider'}!`);
        navigate(formData.role === 'customer' ? '/customer/dashboard' : '/provider/dashboard');
      }, 2000);
    }
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-5">
                <div className="text-center mb-5">
                  <div className="d-flex align-items-center justify-content-center mb-4">
                    <div className="bg-success rounded-circle p-3 me-3">
                      <i className="bi bi-person-plus text-white fs-3"></i>
                    </div>
                    <h1 className="h3 mb-0 fw-bold text-dark">Create Account</h1>
                  </div>
                  <p className="text-muted">Join KaamWala today</p>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Role Selection */}
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold mb-2 d-block">I am a:</label>
                      <div className="d-flex gap-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="role"
                            id="customer"
                            value="customer"
                            checked={formData.role === 'customer'}
                            onChange={handleChange}
                          />
                          <label className="form-check-label fw-semibold" htmlFor="customer">
                            <i className="bi bi-house-door me-1"></i>
                            Customer
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="role"
                            id="provider"
                            value="provider"
                            checked={formData.role === 'provider'}
                            onChange={handleChange}
                          />
                          <label className="form-check-label fw-semibold" htmlFor="provider">
                            <i className="bi bi-tools me-1"></i>
                            Service Provider
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">Full Name</label>
                      <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-person"></i></span>
                        <input
                          type="text"
                          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                        />
                        {errors.name && <div className="invalid-feedback d-block">{errors.name}</div>}
                      </div>
                    </div>

                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">Phone</label>
                      <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-phone"></i></span>
                        <input
                          type="tel"
                          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="03XX-XXXXXXX"
                        />
                        {errors.phone && <div className="invalid-feedback d-block">{errors.phone}</div>}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">Email</label>
                    <div className="input-group">
                      <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                      <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                      />
                      {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">Password</label>
                      <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-lock"></i></span>
                        <input
                          type="password"
                          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="At least 6 characters"
                        />
                        {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">Confirm Password</label>
                      <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-lock"></i></span>
                        <input
                          type="password"
                          className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Repeat password"
                        />
                        {errors.confirmPassword && <div className="invalid-feedback d-block">{errors.confirmPassword}</div>}
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-success w-100 py-3 fw-bold mb-3"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Creating Account...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-person-plus me-2"></i>
                        Create Account
                      </>
                    )}
                  </button>

                  <div className="text-center">
                    <p className="mb-0 text-muted">
                      Already have an account?{' '}
                      <Link to="/login" className="text-primary fw-semibold text-decoration-none">
                        Sign in here
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;