import React from 'react';
import { CheckCircle, Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TestDriveConfirmation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Réservation confirmée !
            </h1>
            <div className="text-gray-600 space-y-4 mb-8">
              <p>
                Nous avons bien reçu votre demande d'essai. Un conseiller vous contactera dans les plus brefs délais pour confirmer votre rendez-vous.
              </p>
              <div className="flex items-center justify-center text-sm">
                <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                <span>Un email de confirmation vous a été envoyé</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 rounded-xl text-gray-700 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Retour à l'accueil
              </Link>
              <Link
                to="/vehicules-neufs"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
              >
                Découvrir nos véhicules
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDriveConfirmation;