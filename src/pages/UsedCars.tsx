import React, { useState } from 'react';
import { cars } from '../services/carData';
import CarCard from '../components/CarCard';
import CarFilters from '../components/CarFilters';
import SEOHead from '../components/SEOHead';

const UsedCars = () => {
  const [filteredCars, setFilteredCars] = useState(cars.filter(car => car.status === 'Occasion'));

  // Données pour le schéma JSON-LD de la page des véhicules d'occasion
  const usedCarsSchema = {
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
        "mileageFromOdometer": {
          "@type": "QuantitativeValue",
          "value": car.additionalSpecs.find(spec => spec.label === 'Kilométrage')?.value.replace(/[^0-9]/g, '') || '',
          "unitCode": "KMT"
        },
        "modelDate": car.additionalSpecs.find(spec => spec.label === 'Année')?.value || '',
        "offers": {
          "@type": "Offer",
          "price": car.price.replace(/[^0-9]/g, ''),
          "priceCurrency": "EUR",
          "itemCondition": "https://schema.org/UsedCondition",
          "availability": "https://schema.org/InStock",
          "url": `https://driveselect.fr/vehicules/${car.id}`
        }
      }
    }))
  };

  const handleFilterChange = (filters: any) => {
    // Si aucun filtre n'est actif, afficher tous les véhicules d'occasion
    if (Object.keys(filters).length === 0) {
      setFilteredCars(cars.filter(car => car.status === 'Occasion'));
      return;
    }

    let filtered = cars.filter(car => car.status === 'Occasion');

    // Filtrer par prix
    if (filters.price.min) {
      filtered = filtered.filter(car => 
        parseInt(car.price.replace(/[^0-9]/g, '')) >= parseInt(filters.price.min)
      );
    }
    if (filters.price.max) {
      filtered = filtered.filter(car => 
        parseInt(car.price.replace(/[^0-9]/g, '')) <= parseInt(filters.price.max)
      );
    }

    // Filtrer par année
    if (filters.year.min) {
      filtered = filtered.filter(car => car.additionalSpecs.find(spec => 
        spec.label === 'Année' && parseInt(spec.value) >= parseInt(filters.year.min)
      ));
    }
    if (filters.year.max) {
      filtered = filtered.filter(car => car.additionalSpecs.find(spec => 
        spec.label === 'Année' && parseInt(spec.value) <= parseInt(filters.year.max)
      ));
    }

    // Filtrer par kilométrage
    if (filters.mileage.min) {
      filtered = filtered.filter(car => car.additionalSpecs.find(spec => 
        spec.label === 'Kilométrage' && 
        parseInt(spec.value.replace(/[^0-9]/g, '')) >= parseInt(filters.mileage.min)
      ));
    }
    if (filters.mileage.max) {
      filtered = filtered.filter(car => car.additionalSpecs.find(spec => 
        spec.label === 'Kilométrage' && 
        parseInt(spec.value.replace(/[^0-9]/g, '')) <= parseInt(filters.mileage.max)
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
        title="Véhicules d'Occasion Premium | Mercedes, BMW, Audi, Porsche"
        description="Trouvez votre voiture d'occasion premium à Paris. Véhicules Mercedes, BMW, Audi, Porsche sélectionnés et contrôlés. Faible kilométrage, historique vérifié, garantie."
        keywords="voitures occasion paris, véhicules occasion premium, mercedes occasion, bmw occasion, audi occasion, porsche occasion, voiture luxe occasion paris"
        url="/occasions"
        schema={usedCarsSchema}
      />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Véhicules d'Occasion</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Découvrez notre sélection de véhicules d'occasion premium, soigneusement sélectionnés et contrôlés pour vous garantir une fiabilité optimale.
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

export default UsedCars;