import React from 'react';
import { useParams } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import CarCard from '../components/CarCard';
import { cars } from '../services/carData';
import LazyImage from '../components/LazyImage';

const brandInfo = {
  mercedes: {
    name: 'Mercedes-Benz',
    description: 'Découvrez notre sélection de véhicules Mercedes-Benz, symboles de luxe et d\'innovation.',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    history: 'Mercedes-Benz, pionnier de l\'automobile depuis 1886...',
  },
  bmw: {
    name: 'BMW',
    description: 'Explorez notre gamme BMW, alliance parfaite entre sportivité et élégance.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    history: 'BMW, plus de 100 ans d\'excellence automobile...',
  },
  // Ajoutez d'autres marques...
};

const BrandPage = () => {
  const { brand } = useParams<{ brand: keyof typeof brandInfo }>();
  const info = brandInfo[brand];
  const brandCars = cars.filter(car => car.name.toLowerCase().includes(brand));

  if (!info) return null;

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <SEOHead
        title={`${info.name} | Voitures Premium`}
        description={info.description}
        keywords={`${info.name}, voiture luxe paris, ${info.name} occasion, ${info.name} neuf`}
        image={info.image}
        url={`/marques/${brand}`}
      />

      <div className="relative h-[400px] mb-12">
        <LazyImage
          src={info.image}
          alt={info.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{info.name}</h1>
            <p className="max-w-2xl mx-auto text-lg">{info.description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Histoire de {info.name}</h2>
          <p className="text-gray-600">{info.history}</p>
        </div>

        <h2 className="text-3xl font-bold mb-8">Nos véhicules {info.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {brandCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandPage;