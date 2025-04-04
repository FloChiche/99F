import React from 'react';
import { CarFront, Shield, PenTool as Tool } from 'lucide-react';

const WhyVisit = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pourquoi Nous Rendre Visite ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CarFront className="w-16 h-16 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Large Sélection</h3>
            <p className="text-gray-600">
              Plus de 40 véhicules disponibles sur place. Venez les découvrir et les essayer.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Shield className="w-16 h-16 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Garantie Qualité</h3>
            <p className="text-gray-600">
              Tous nos véhicules sont minutieusement inspectés et certifiés.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Tool className="w-16 h-16 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Service Expert</h3>
            <p className="text-gray-600">
              Notre équipe de professionnels est là pour vous conseiller et vous accompagner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVisit;