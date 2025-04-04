import React, { useState } from 'react';
import { User, Settings, History, Car as CarIcon, Bell, Shield, Edit2 } from 'lucide-react';
import { toast } from 'react-hot-toast';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'Jean',
    lastName: 'Dupont',
    email: 'jean.dupont@email.com',
    phone: '06 12 34 56 78',
    address: '123 rue de Paris',
    notifications: {
      newCars: true,
      promotions: false,
      maintenance: true,
      newsletter: true
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simuler la sauvegarde
    setTimeout(() => {
      toast.success('Profil mis à jour avec succès');
      setIsEditing(false);
    }, 500);
  };

  const recentActivity = [
    {
      type: 'test-drive',
      date: '15 mars 2024',
      details: 'Essai BMW X5',
      status: 'Confirmé'
    },
    {
      type: 'contact',
      date: '10 mars 2024',
      details: 'Demande d\'information Mercedes GLE',
      status: 'Répondu'
    },
    {
      type: 'favorite',
      date: '5 mars 2024',
      details: 'Audi Q7 ajouté aux favoris',
      status: 'Disponible'
    }
  ];

  const savedCars = [
    {
      name: 'BMW X5',
      image: 'https://i.gaw.to/vehicles/photos/40/19/401956-2020-bmw-x5.jpg?1024x640',
      price: '75 786 €',
      date: '15 mars 2024'
    },
    {
      name: 'Mercedes GLE',
      image: 'https://i.gaw.to/content/photos/47/71/477149-lexus-nx-2022-cinq-choses-a-savoir.jpeg',
      price: '72 340 €',
      date: '10 mars 2024'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête du profil */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-blue-600" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">
                  {formData.firstName} {formData.lastName}
                </h1>
                <p className="text-gray-600">Membre depuis mars 2024</p>
              </div>
            </div>
          </div>

          {/* Navigation des onglets */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="border-b border-gray-200">
              <nav className="flex">
                <button
                  onClick={() => setActiveTab('personal')}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === 'personal'
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Informations personnelles</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('preferences')}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === 'preferences'
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Settings className="w-4 h-4" />
                    <span>Préférences</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('activity')}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === 'activity'
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <History className="w-4 h-4" />
                    <span>Activité récente</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('saved')}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === 'saved'
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <CarIcon className="w-4 h-4" />
                    <span>Véhicules sauvegardés</span>
                  </div>
                </button>
              </nav>
            </div>

            <div className="p-8">
              {/* Informations personnelles */}
              {activeTab === 'personal' && (
                <form onSubmit={handleSubmit}>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Informations personnelles</h2>
                    <button
                      type="button"
                      onClick={() => setIsEditing(!isEditing)}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                    >
                      <Edit2 className="w-4 h-4" />
                      <span>{isEditing ? 'Annuler' : 'Modifier'}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Adresse
                      </label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                      />
                    </div>
                  </div>

                  {isEditing && (
                    <div className="mt-6 flex justify-end">
                      <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                      >
                        Sauvegarder les modifications
                      </button>
                    </div>
                  )}
                </form>
              )}

              {/* Préférences */}
              {activeTab === 'preferences' && (
                <div>
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-6">Notifications</h2>
                    <div className="space-y-4">
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.notifications.newCars}
                          onChange={(e) => setFormData({
                            ...formData,
                            notifications: {
                              ...formData.notifications,
                              newCars: e.target.checked
                            }
                          })}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <span>Nouveaux véhicules correspondant à mes critères</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.notifications.promotions}
                          onChange={(e) => setFormData({
                            ...formData,
                            notifications: {
                              ...formData.notifications,
                              promotions: e.target.checked
                            }
                          })}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <span>Offres promotionnelles</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.notifications.maintenance}
                          onChange={(e) => setFormData({
                            ...formData,
                            notifications: {
                              ...formData.notifications,
                              maintenance: e.target.checked
                            }
                          })}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <span>Rappels d'entretien</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.notifications.newsletter}
                          onChange={(e) => setFormData({
                            ...formData,
                            notifications: {
                              ...formData.notifications,
                              newsletter: e.target.checked
                            }
                          })}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <span>Newsletter mensuelle</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-6">Sécurité</h2>
                    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                      <Shield className="w-4 h-4" />
                      <span>Changer le mot de passe</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Activité récente */}
              {activeTab === 'activity' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Activité récente</h2>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            {activity.type === 'test-drive' && <CarIcon className="w-5 h-5 text-blue-600" />}
                            {activity.type === 'contact' && <Bell className="w-5 h-5 text-blue-600" />}
                            {activity.type === 'favorite' && <Heart className="w-5 h-5 text-blue-600" />}
                          </div>
                          <div>
                            <p className="font-medium">{activity.details}</p>
                            <p className="text-sm text-gray-500">{activity.date}</p>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          {activity.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Véhicules sauvegardés */}
              {activeTab === 'saved' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Véhicules sauvegardés</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {savedCars.map((car, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-xl overflow-hidden"
                      >
                        <img
                          src={car.image}
                          alt={car.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold mb-2">{car.name}</h3>
                          <p className="text-blue-600 font-medium mb-1">{car.price}</p>
                          <p className="text-sm text-gray-500">Sauvegardé le {car.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;