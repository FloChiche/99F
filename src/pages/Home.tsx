import React from 'react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import FeaturedCars from '../components/FeaturedCars';
import WhyVisit from '../components/WhyVisit';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Concessionnaire Automobile Premium à Paris"
        description="DriveSelect, votre concessionnaire automobile premium à Paris. Large sélection de véhicules neufs et d'occasion Mercedes, BMW, Audi, Porsche. Essai routier et financement personnalisé."
        keywords="voiture luxe paris, concessionnaire premium, mercedes paris, bmw paris, audi paris, porsche paris, voiture occasion luxe, voiture neuve premium"
        url="/"
      />
      <Hero />
      <FeaturedCars />
      <WhyVisit />
      <ContactSection />
    </div>
  );
};

export default Home;