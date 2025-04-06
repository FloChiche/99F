import React, { useState } from 'react';
import { cars } from '../services/carData';
import CarCard from '../components/CarCard';
import CarFilters from '../components/CarFilters';
import SEOHead from '../components/SEOHead';
import { Car } from '../types/car';

interface FilterOptions {
  price: {
    min?: string;
    max?: string;
  };
  year: {
    min?: string;
    max?: string;
  };
  mileage: {
    min?: string;
    max?: string;
  };
  brands: string[];
  fuels: string[];
  transmissions: string[];
}

const NewCars = () => {
  const [filteredCars, setFilteredCars] = useState(cars.filter(car => car.status === 'Neuf'));

  // Données pour le schéma JSON-LD de la page des véhicules neufs
  const newCarsSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": filteredCars.map((car, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Vehicle",
        "name": car.name,
        "description": car.description,
        "image": car.image,
        "brand": car.name.split(' ')[0],
        "model": car.name.split(' ').slice(1).join(' '),
        "vehicleConfiguration": car.specs,
        "offers": {
          "@type": "Offer",
          "price": car.price.replace(/[^0-9]/g, ''),
          "priceCurrency": "EUR",
          "itemCondition": "https://schema.org/NewCondition",
          "availability": "https://schema.org/InStock",
          "url": `https://driveselect.fr/vehicules/${car.id}`
        }
      }
    }))
  };

  const handleFilterChange = (filters: FilterOptions) => {
    // Si aucun filtre n'est actif, afficher tous les véhicules neufs
    if (Object.keys(filters).length === 0) {
      setFilteredCars(cars.filter(car => car.status === 'Neuf'));
      return;
    }

    let filtered = cars.filter(car => car.status === 'Neuf');

    // Filtrer par prix
    if (filters.price.min) {
      filtered = filtered.filter(car => 
        parseInt(car.price.replace(/[^0-9]/g, '')) >= parseInt(filters.price.min || '0')
      );
    }
    if (filters.price.max) {
      filtered = filtered.filter(car => 
        parseInt(car.price.replace(/[^0-9]/g, '')) <= parseInt(filters.price.max || '99999999')
      );
    }

    // Filtrer par année
    if (filters.year.min) {
      filtered = filtered.filter(car => car.additionalSpecs.find(spec => 
        spec.label === 'Année' && parseInt(spec.value) >= parseInt(filters.year.min || '0')
      ));
    }
    if (filters.year.max) {
      filtered = filtered.filter(car => car.additionalSpecs.find(spec => 
        spec.label === 'Année' && parseInt(spec.value) <= parseInt(filters.year.max || '9999')
      ));
    }

    // Filtrer par kilométrage
    if (filters.mileage.min) {
      filtered = filtered.filter(car => car.additionalSpecs.find(spec => 
        spec.label === 'Kilométrage' && 
        parseInt(spec.value.replace(/[^0-9]/g, '')) >= parseInt(filters.mileage.min || '0')
      ));
    }
    if (filters.mileage.max) {
      filtered = filtered.filter(car => car.additionalSpecs.find(spec => 
        spec.label === 'Kilométrage' && 
        parseInt(spec.value.replace(/[^0-9]/g, '')) <= parseInt(filters.mileage.max || '9999999')
      ));
    }

    // Filtrer par marque
    if (filters.brands.length > 0) {
      filtered = filtered.filter(car => 
        filters.brands.some((brand: string) => car.name.includes(brand))
      );
    }

    // Filtrer par carburant
    if (filters.fuels.length > 0) {
      filtered = filtered.filter(car => car.additionalSpecs.find(spec => 
        spec.label === 'Carburant' && filters.fuels.includes(spec.value)
      ));
    }

    // Filtrer par transmission
    if (filters.transmissions.length > 0) {
      filtered = filtered.filter(car => car.specs.split('•').some(spec => 
        filters.transmissions.includes(spec.trim())
      ));
    }

    setFilteredCars(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <SEOHead
        title="Véhicules Neufs Premium | Mercedes, BMW, Audi, Porsche"
        description="Découvrez notre sélection de véhicules neufs premium à Paris. Mercedes, BMW, Audi, Porsche configurés avec les dernières technologies et options. Livraison rapide."
        keywords="voitures neuves paris, véhicules neufs premium, mercedes neuve, bmw neuve, audi neuve, porsche neuve, achat voiture neuve paris"
        url="/vehicules-neufs"
        schema={newCarsSchema}
      />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Véhicules Neufs</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Découvrez notre sélection de véhicules neufs, configurés avec les dernières technologies et options.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <CarFilters onFilterChange={handleFilterChange} />
          </div>
          
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredCars.map(car => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
            
            {filteredCars.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Aucun véhicule ne correspond à vos critères.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCars;