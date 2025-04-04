import React from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Car } from '../types/car';

interface CarModalProps {
  car: Car;
  onClose: () => void;
}

const CarModal: React.FC<CarModalProps> = ({ car, onClose }) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/contact?car=${encodeURIComponent(car.name)}`);
  };

  const handleTestDriveClick = () => {
    navigate(`/reserver-essai?car=${encodeURIComponent(car.name)}`);
  };

  if (!car) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={car.image} 
            alt={car.name} 
            className="w-full h-[400px] object-cover rounded-t-xl"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
          >
            <X className="w-6 h-6 text-gray-800" />
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{car.name}</h2>
              <span className={`${car.status === 'Neuf' ? 'bg-blue-600' : 'bg-green-600'} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                {car.status}
              </span>
            </div>
            <p className="text-3xl font-bold text-blue-600">{car.price}</p>
          </div>

          <p className="text-gray-600 mb-8">{car.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Caractéristiques</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Moteur</span>
                  <span className="font-medium">{car.specs.split('•')[0]}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Puissance</span>
                  <span className="font-medium">{car.specs.split('•')[1]}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Transmission</span>
                  <span className="font-medium">{car.specs.split('•')[2]}</span>
                </div>
                {car.additionalSpecs?.map((spec, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-600">{spec.label}</span>
                    <span className="font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Options</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {car.options?.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button 
              onClick={handleContactClick}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Nous contacter
            </button>
            <button 
              onClick={handleTestDriveClick}
              className="bg-gray-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Réserver un essai
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarModal;