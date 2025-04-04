import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CarModal from './CarModal';
import { cars } from '../services/carData';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const FeaturedCars = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const navigate = useNavigate();

  // Prendre les 6 premières voitures pour l'affichage
  const featuredCars = cars.slice(0, 6);

  const handleContactClick = (carName: string) => {
    navigate(`/contact?car=${encodeURIComponent(carName)}`);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Nos Véhicules à la Une</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Découvrez notre sélection de véhicules premium, minutieusement choisis pour leur qualité exceptionnelle
        </p>
        
        <div className="relative px-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ 
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                effect: 'slide',
              },
              1024: {
                slidesPerView: 3,
                effect: 'slide',
              },
            }}
            className="pb-12"
          >
            {featuredCars.map((car) => (
              <SwiperSlide key={car.id}>
                <div 
                  className="bg-white rounded-xl shadow-lg overflow-hidden group h-full transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
                  onMouseEnter={() => setHoveredId(car.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setSelectedCar(car)}
                >
                  <div className="relative">
                    <img 
                      src={car.image} 
                      alt={car.name}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className={`absolute top-4 right-4 ${car.status === 'Neuf' ? 'bg-blue-600' : 'bg-green-600'} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {car.status}
                    </span>
                    {hoveredId === car.id && (
                      <div className="absolute bottom-4 right-4">
                        <button 
                          className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCar(car);
                          }}
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
                        handleContactClick(car.name);
                      }}
                    >
                      <span>Nous contacter</span>
                      <svg 
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => navigate('/vehicules-neufs')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2 group"
          >
            <span>Voir tous nos véhicules</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {selectedCar && (
        <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
      )}
    </section>
  );
};

export default FeaturedCars;