import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isTeamPage = location.pathname === '/equipe';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > window.innerHeight - 100);
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else if (!isTeamPage) {
      setIsScrolled(true);
    }
  }, [isHomePage, isTeamPage]);

  const shouldShowDark = isScrolled && !isTeamPage;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      shouldShowDark ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Car className={`w-8 h-8 ${shouldShowDark ? 'text-gray-900' : 'text-white'}`} />
            <span className={`text-2xl font-bold ${shouldShowDark ? 'text-gray-900' : 'text-white'}`}>DriveSelect</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${shouldShowDark ? 'text-gray-900' : 'text-white'} hover:text-blue-500 transition-colors`}
            >
              Accueil
            </Link>
            
            <div className="nav-item">
              <button className={`flex items-center space-x-1 ${
                shouldShowDark ? 'text-gray-900' : 'text-white'
              } hover:text-blue-500 transition-colors py-2`}>
                <span>Nos Véhicules</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="nav-dropdown">
                <Link 
                  to="/vehicules-neufs" 
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50 transition-colors"
                >
                  Véhicules Neufs
                </Link>
                <Link 
                  to="/occasions" 
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50 transition-colors"
                >
                  Occasions
                </Link>
                
               
              </div>
            </div>

            <div className="nav-item">
              <button className={`flex items-center space-x-1 ${
                shouldShowDark ? 'text-gray-900' : 'text-white'
              } hover:text-blue-500 transition-colors py-2`}>
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="nav-dropdown">
                <Link 
                  to="/services" 
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50 transition-colors"
                >
                  Nos Services
                </Link>
                <Link 
                  to="/equipe" 
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50 transition-colors"
                >
                  Notre Équipe
                </Link>
              </div>
            </div>

           

            <Link 
              to="/contact" 
              className={`${shouldShowDark ? 'text-gray-900' : 'text-white'} hover:text-blue-500 transition-colors`}
            >
              Contact
            </Link>
          </div>
          
          <button 
            className={`md:hidden ${shouldShowDark ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Menu mobile */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 py-2">
            <Link to="/" className="block px-4 py-2 text-gray-800 hover:text-blue-600">
              Accueil
            </Link>
            <div className="px-4 py-2">
              <div className="font-semibold mb-2">Nos Véhicules</div>
              <Link to="/vehicules-neufs" className="block py-2 pl-4 text-gray-800 hover:text-blue-600">
                Véhicules Neufs
              </Link>
              <Link to="/occasions" className="block py-2 pl-4 text-gray-800 hover:text-blue-600">
                Occasions
              </Link>
            </div>
            <div className="px-4 py-2">
              <div className="font-semibold mb-2">Services</div>
              <Link to="/services" className="block py-2 pl-4 text-gray-800 hover:text-blue-600">
                Nos Services
              </Link>
              <Link to="/equipe" className="block py-2 pl-4 text-gray-800 hover:text-blue-600">
                Notre Équipe
              </Link>
            </div>
           
            <Link to="/contact" className="block px-4 py-2 text-gray-800 hover:text-blue-600">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;