import React, { useState } from 'react';
import { Car, HandshakeIcon, BadgeCheck, ShieldCheck } from 'lucide-react';
import CustomerReviews from '../components/CustomerReviews';
import ReviewForm from '../components/ReviewForm';
import Map from '../components/Map';

const Services = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);

  const services = [
    {
      icon: <Car className="w-12 h-12 text-blue-600" />,
      title: "Véhicules Premium",
      description: "Large sélection de véhicules haut de gamme neufs et d'occasion, rigoureusement sélectionnés pour leur qualité."
    },
    {
      icon: <HandshakeIcon className="w-12 h-12 text-blue-600" />,
      title: "Reprise de Véhicule",
      description: "Estimation gratuite et transparente de votre véhicule actuel pour une reprise aux meilleures conditions."
    },
    {
      icon: <BadgeCheck className="w-12 h-12 text-blue-600" />,
      title: "Financement Sur Mesure",
      description: "Solutions de financement personnalisées pour répondre à vos besoins, avec des offres de crédit et de leasing avantageuses."
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
      title: "Garantie Premium",
      description: "Garanties étendues pour une tranquillité d'esprit totale, avec une couverture complète adaptée à chaque véhicule."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Nos Services</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Découvrez nos services premium dédiés à votre satisfaction dans l'acquisition de votre prochain véhicule.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <CustomerReviews />
      
      <div className="text-center pb-16">
        <button 
          onClick={() => setShowReviewForm(true)}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
        >
          Laissez votre avis
        </button>
      </div>

      {showReviewForm && <ReviewForm onClose={() => setShowReviewForm(false)} />}

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Notre Showroom</h2>
        <Map />
      </div>
    </div>
  );
};

export default Services;