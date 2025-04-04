import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Clock, Car as CarIcon, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { cars } from '../services/carData';
import { toast } from 'react-hot-toast';

// Heures d'ouverture
const OPENING_HOURS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
];

const TestDrive = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const selectedCarName = queryParams.get('car');
  const selectedCar = cars.find(car => car.name === selectedCarName);

  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [currentWeek, setCurrentWeek] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [currentStep, setCurrentStep] = useState(1);

  // Générer les dates disponibles pour la semaine actuelle
  const getWeekDates = () => {
    const dates = [];
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() + (currentWeek * 7));

    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      if (date.getDay() !== 0) { // Exclure les dimanches
        dates.push(date);
      }
    }

    return dates;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime) {
      toast.error('Veuillez sélectionner une date et une heure');
      return;
    }

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }

    navigate('/confirmation-essai');
  };

  const nextStep = () => {
    if (currentStep === 1 && (!selectedDate || !selectedTime)) {
      toast.error('Veuillez sélectionner une date et une heure');
      return;
    }
    setCurrentStep(2);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* En-tête avec le véhicule sélectionné */}
          {selectedCar && (
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-center gap-6">
                <div className="w-40 h-40 overflow-hidden rounded-lg">
                  <img 
                    src={selectedCar.image} 
                    alt={selectedCar.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">{selectedCar.name}</h2>
                  <div className="space-y-2">
                    <p className="text-gray-600">{selectedCar.specs}</p>
                    <p className="text-blue-600 text-xl font-semibold">{selectedCar.price}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Info className="w-4 h-4 mr-2" />
                      <span>Durée de l'essai : 30 minutes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Étapes de progression */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep === 1 ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
              }`}>
                1
              </div>
              <div className="h-1 w-16 bg-blue-100 mx-2" />
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep === 2 ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
              }`}>
                2
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
            {currentStep === 1 ? (
              <>
                <h2 className="text-2xl font-bold mb-6">Choisissez votre créneau</h2>
                
                {/* Sélection de la date */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium text-gray-700">Sélectionnez une date</h3>
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => setCurrentWeek(prev => Math.max(0, prev - 1))}
                        disabled={currentWeek === 0}
                        className={`p-2 rounded-full ${
                          currentWeek === 0 
                            ? 'text-gray-400 cursor-not-allowed' 
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurrentWeek(prev => prev + 1)}
                        disabled={currentWeek >= 3}
                        className={`p-2 rounded-full ${
                          currentWeek >= 3
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                    {getWeekDates().map((date, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setSelectedDate(date.toISOString().split('T')[0])}
                        className={`p-4 rounded-xl text-center transition-all ${
                          selectedDate === date.toISOString().split('T')[0]
                            ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                            : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        <div className="text-xs uppercase mb-1">
                          {date.toLocaleDateString('fr-FR', { weekday: 'short' })}
                        </div>
                        <div className="text-lg font-semibold">
                          {date.getDate()}
                        </div>
                        <div className="text-xs">
                          {date.toLocaleDateString('fr-FR', { month: 'short' })}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sélection de l'heure */}
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-4">Sélectionnez une heure</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {OPENING_HOURS.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        disabled={!selectedDate}
                        className={`p-4 rounded-xl transition-all ${
                          !selectedDate
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : selectedTime === time
                              ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                              : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span className="font-medium">{time}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center space-x-2"
                  >
                    <span>Suivant</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-6">Vos informations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Jean"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Dupont"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="jean.dupont@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="text-gray-600 hover:text-gray-800 transition-colors flex items-center space-x-2"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span>Retour</span>
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center space-x-2"
                  >
                    <CarIcon className="w-5 h-5" />
                    <span>Confirmer la réservation</span>
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default TestDrive;