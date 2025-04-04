import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Car } from '../types/car';
import CarModal from './CarModal';
import LazyImage from './LazyImage';
import { useInView } from 'react-intersection-observer';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleContactClick = () => {
    navigate(`/contact?car=${encodeURIComponent(car.name)}`);
  };

  // Structured data for the car
  const carSchema = {
    '@context': 'https://schema.org',
    '@type': 'Vehicle',
    name: car.name,
    description: car.description,
    image: car.image,
    brand: car.name.split(' ')[0],
    model: car.name.split(' ').slice(1).join(' '),
    vehicleConfiguration: car.specs,
    offers: {
      '@type': 'Offer',
      price: car.price.replace(/[^0-9]/g, ''),
      priceCurrency: 'EUR',
      itemCondition: car.status === 'Neuf' ? 'https://schema.org/NewCondition' : 'https://schema.org/UsedCondition',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'AutoDealer',
        name: 'DriveSelect',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '14 Avenue de la Grande Armée',
          addressLocality: 'Paris',
          postalCode: '75017',
          addressCountry: 'FR'
        }
      }
    }
  };

  return (
    <>
      <div 
        ref={ref}
        className={`bg-white rounded-xl shadow-lg overflow-hidden group h-full transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setShowModal(true)}
      >
        <script type="application/ld+json">
          {JSON.stringify(carSchema)}
        </script>

        <div className="relative">
          <LazyImage 
            src={car.image} 
            alt={`${car.name} - ${car.specs} - ${car.status} chez DriveSelect Paris`}
            className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className={`absolute top-4 right-4 ${car.status === 'Neuf' ? 'bg-blue-600' : 'bg-green-600'} text-white px-3 py-1 rounded-full text-sm font-medium`}>
            {car.status}
          </span>
          {isHovered && (
            <div className="absolute bottom-4 right-4">
              <button 
                className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowModal(true);
                }}
                aria-label={`Voir les détails de ${car.name}`}
              >
                <Eye className="w-5 h-5 text-blue-600" />
              </button>
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex flex-col h-[120px]">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
            <p className="text-gray-600 text-sm flex-grow">{car.specs}</p>
            <p className="text-2xl font-bold text-blue-600 mt-2">{car.price}</p>
          </div>
          <button 
            className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center space-x-2 group mt-4"
            onClick={(e) => {
              e.stopPropagation();
              handleContactClick();
            }}
            aria-label={`Contacter DriveSelect pour ${car.name}`}
          >
            <span>Nous contacter</span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {showModal && (
        <CarModal car={car} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default CarCard;