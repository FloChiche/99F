import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { Car } from '../types/car';
import { Navigate } from 'react-router-dom';

interface Customer {
  id: string;
  user_id: string;
  email: string;
  is_admin: boolean;
}

const Admin = () => {
  const { isAdmin, loading } = useAuth();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Car>();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loadingCustomers, setLoadingCustomers] = useState(true);

  useEffect(() => {
    if (isAdmin) {
      fetchCustomers();
    }
  }, [isAdmin]);

  const fetchCustomers = async () => {
    try {
      const { data: customersData, error: customersError } = await supabase
        .from('customers')
        .select(`
          id,
          user_id,
          is_admin,
          auth.users (email)
        `);

      if (customersError) throw customersError;

      const formattedCustomers = customersData.map(customer => ({
        id: customer.id,
        user_id: customer.user_id,
        email: customer.users.email,
        is_admin: customer.is_admin
      }));

      setCustomers(formattedCustomers);
    } catch (error) {
      console.error('Error fetching customers:', error);
      toast.error('Erreur lors du chargement des clients');
    } finally {
      setLoadingCustomers(false);
    }
  };

  const toggleAdminStatus = async (customerId: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('customers')
        .update({ is_admin: !currentStatus })
        .eq('id', customerId);

      if (error) throw error;

      toast.success('Statut administrateur mis à jour');
      fetchCustomers();
    } catch (error) {
      console.error('Error updating admin status:', error);
      toast.error('Erreur lors de la mise à jour du statut');
    }
  };

  const onSubmit = async (data: Car) => {
    try {
      const { error } = await supabase
        .from('cars')
        .insert([{
          ...data,
          additionalSpecs: JSON.stringify(data.additionalSpecs),
          options: JSON.stringify(data.options)
        }]);

      if (error) throw error;

      toast.success('Véhicule ajouté avec succès');
      reset();
    } catch (error) {
      toast.error('Erreur lors de l\'ajout du véhicule');
    }
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!isAdmin) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Administration</h1>
        
        {/* Gestion des clients */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Gestion des clients</h2>
          
          {loadingCustomers ? (
            <div>Chargement des clients...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Statut Admin
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {customers.map((customer) => (
                    <tr key={customer.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {customer.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          customer.is_admin 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {customer.is_admin ? 'Admin' : 'Client'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => toggleAdminStatus(customer.id, customer.is_admin)}
                          className={`px-3 py-1 rounded-md text-sm font-medium ${
                            customer.is_admin
                              ? 'bg-red-100 text-red-700 hover:bg-red-200'
                              : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                          }`}
                        >
                          {customer.is_admin ? 'Retirer admin' : 'Rendre admin'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Ajout de véhicule */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">Ajouter un véhicule</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom du véhicule
                </label>
                <input
                  {...register('name', { required: 'Nom requis' })}
                  className="w-full px-3 py-2 border rounded-lg"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prix
                </label>
                <input
                  {...register('price', { required: 'Prix requis' })}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image URL
                </label>
                <input
                  {...register('image', { required: 'Image requise' })}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Statut
                </label>
                <select
                  {...register('status', { required: 'Statut requis' })}
                  className="w-full px-3 py-2 border rounded-lg"
                >
                  <option value="Neuf">Neuf</option>
                  <option value="Occasion">Occasion</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Spécifications
                </label>
                <input
                  {...register('specs', { required: 'Spécifications requises' })}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Ex: 2.0L • 204ch • Automatique"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  {...register('description', { required: 'Description requise' })}
                  className="w-full px-3 py-2 border rounded-lg"
                  rows={4}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Ajouter le véhicule
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;