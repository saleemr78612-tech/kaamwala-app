import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CustomerDashboard from './pages/CustomerDashboard';
import ProviderDashboard from './pages/ProviderDashboard';
import CustomerOrders from './pages/CustomerOrders';
import PostJob from './PostJob';
import ProviderProfile from './pages/ProviderProfile';
import ProviderJobs from './pages/ProviderJobs';
import JobBids from './pages/JobBids';


function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services" element={<LandingPage />} />
          <Route path="/contact" element={<LandingPage />} />
          
          {/* Customer Routes */}
          <Route path="/customer/dashboard" element={<CustomerDashboard />} />
          <Route path="/customer/orders" element={<CustomerOrders />} />
          <Route path="/customer/post-job" element={<PostJob />} />
          <Route path="/customer/job/:id/bids" element={<JobBids />} />
          
          {/* Provider Routes */}
          <Route path="/provider/dashboard" element={<ProviderDashboard />} />
          <Route path="/provider/profile" element={<ProviderProfile />} />
          <Route path="/provider/jobs" element={<ProviderJobs />} />
          
          {/* Fallback */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;