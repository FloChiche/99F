import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Venez Nous Rencontrer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <MapPin className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Notre Adresse</h3>
            <p className="text-center text-gray-600">14 Av. de la Grande Armée<br />75017 Paris, France</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <Phone className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Contactez-nous</h3>
            <p className="text-center text-gray-600">+33 1 23 45 67 89<br />contact@autoelite.fr</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <Clock className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Horaires d'ouverture</h3>
            <p className="text-center text-gray-600">Lun-Sam: 9h-19h<br />Dimanche: Fermé</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;