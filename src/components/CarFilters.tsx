import React, { useState } from 'react';
import { Sliders, ChevronDown } from 'lucide-react';

interface FilterProps {
  onFilterChange: (filters: any) => void;
}

const CarFilters: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [yearRange, setYearRange] = useState({ min: '', max: '' });
  const [mileageRange, setMileageRange] = useState({ min: '', max: '' });
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedFuels, setSelectedFuels] = useState<string[]>([]);
  const [selectedTransmissions, setSelectedTransmissions] = useState<string[]>([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const brands = ['Mercedes', 'BMW', 'Audi', 'Porsche', 'Tesla', 'Lexus'];
  const fuels = ['Essence', 'Diesel', 'Électrique', 'Hybride'];
  const transmissions = ['Automatique', 'Manuelle'];

  const handleFilterChange = () => {
    const filters = {
      price: priceRange,
      year: yearRange,
      mileage: mileageRange,
      brands: selectedBrands,
      fuels: selectedFuels,
      transmissions: selectedTransmissions
    };

    // Check if any filter is active
    const hasActiveFilters = Object.entries(filters).some(([_, value]) => {
      if (Array.isArray(value)) {
        return value.length > 0;
      }
      if (typeof value === 'object') {
        return Object.values(value).some(v => v !== '');
      }
      return false;
    });

    onFilterChange(hasActiveFilters ? filters : {});
  };

  const resetFilters = () => {
    setPriceRange({ min: '', max: '' });
    setYearRange({ min: '', max: '' });
    setMileageRange({ min: '', max: '' });
    setSelectedBrands([]);
    setSelectedFuels([]);
    setSelectedTransmissions([]);
    onFilterChange({});
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const toggleFuel = (fuel: string) => {
    setSelectedFuels(prev => 
      prev.includes(fuel) 
        ? prev.filter(f => f !== fuel)
        : [...prev, fuel]
    );
  };

  const toggleTransmission = (transmission: string) => {
    setSelectedTransmissions(prev => 
      prev.includes(transmission) 
        ? prev.filter(t => t !== transmission)
        : [...prev, transmission]
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Sliders className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-semibold">Filtres</h2>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={resetFilters}
            className="text-sm text-gray-600 hover:text-blue-600"
          >
            Réinitialiser
          </button>
          <button 
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="md:hidden"
          >
            <ChevronDown className={`w-5 h-5 transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      <div className={`space-y-6 ${isFiltersOpen ? 'block' : 'hidden md:block'}`}>
        {/* Prix */}
        <div>
          <h3 className="font-medium mb-2">Prix</h3>
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Min"
              className="w-1/2 px-3 py-2 border rounded-lg"
              value={priceRange.min}
              onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
            />
            <input
              type="number"
              placeholder="Max"
              className="w-1/2 px-3 py-2 border rounded-lg"
              value={priceRange.max}
              onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
            />
          </div>
        </div>

        {/* Année */}
        <div>
          <h3 className="font-medium mb-2">Année</h3>
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Min"
              className="w-1/2 px-3 py-2 border rounded-lg"
              value={yearRange.min}
              onChange={(e) => setYearRange({ ...yearRange, min: e.target.value })}
            />
            <input
              type="number"
              placeholder="Max"
              className="w-1/2 px-3 py-2 border rounded-lg"
              value={yearRange.max}
              onChange={(e) => setYearRange({ ...yearRange, max: e.target.value })}
            />
          </div>
        </div>

        {/* Kilométrage */}
        <div>
          <h3 className="font-medium mb-2">Kilométrage</h3>
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Min"
              className="w-1/2 px-3 py-2 border rounded-lg"
              value={mileageRange.min}
              onChange={(e) => setMileageRange({ ...mileageRange, min: e.target.value })}
            />
            <input
              type="number"
              placeholder="Max"
              className="w-1/2 px-3 py-2 border rounded-lg"
              value={mileageRange.max}
              onChange={(e) => setMileageRange({ ...mileageRange, max: e.target.value })}
            />
          </div>
        </div>

        {/* Marques */}
        <div>
          <h3 className="font-medium mb-2">Marques</h3>
          <div className="grid grid-cols-2 gap-2">
            {brands.map(brand => (
              <label key={brand} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <span>{brand}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Carburant */}
        <div>
          <h3 className="font-medium mb-2">Carburant</h3>
          <div className="grid grid-cols-2 gap-2">
            {fuels.map(fuel => (
              <label key={fuel} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedFuels.includes(fuel)}
                  onChange={() => toggleFuel(fuel)}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <span>{fuel}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Transmission */}
        <div>
          <h3 className="font-medium mb-2">Transmission</h3>
          <div className="grid grid-cols-2 gap-2">
            {transmissions.map(transmission => (
              <label key={transmission} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedTransmissions.includes(transmission)}
                  onChange={() => toggleTransmission(transmission)}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <span>{transmission}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={handleFilterChange}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Appliquer les filtres
        </button>
      </div>
    </div>
  );
};

export default CarFilters;