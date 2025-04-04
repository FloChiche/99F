import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import { ReviewProvider } from './contexts/ReviewContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NewCars from './pages/NewCars';
import UsedCars from './pages/UsedCars';
import Services from './pages/Services';
import Team from './pages/Team';
import Contact from './pages/Contact';
import TestDrive from './pages/TestDrive';
import TestDriveConfirmation from './pages/TestDriveConfirmation';
import Blog from './pages/Blog';
import BrandPage from './pages/BrandPage';

function App() {
  return (
    <HelmetProvider>
      <ReviewProvider>
        <Router>
          <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vehicules-neufs" element={<NewCars />} />
                <Route path="/occasions" element={<UsedCars />} />
                <Route path="/services" element={<Services />} />
                <Route path="/equipe" element={<Team />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/reserver-essai" element={<TestDrive />} />
                <Route path="/confirmation-essai" element={<TestDriveConfirmation />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/marques/:brand" element={<BrandPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <Toaster position="top-right" />
        </Router>
      </ReviewProvider>
    </HelmetProvider>
  );
}

export default App;