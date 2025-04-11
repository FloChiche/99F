import React, { createContext, useContext, useState } from 'react';
import { Message, ChatbotContextType } from '../types/chatbot';
import * as chatbotService from '../services/chatbotService';
import { toast } from 'react-hot-toast';
import { cars } from '../services/carData';

// Message système initial pour guider le modèle
const SYSTEM_MESSAGE: Message = {
  role: 'system',
  content: `Vous êtes l'assistant virtuel de DriveSelect, concessionnaire automobile situé au 14 Av. de la Grande Armée, 75017 Paris.

  RÈGLES STRICTES:
  1. Vous ne devez répondre QU'AUX QUESTIONS LIÉES À L'AUTOMOBILE
  2. Si une question n'est pas liée à l'automobile, répondez: "Je suis désolé, je ne peux répondre qu'aux questions concernant l'automobile. Comment puis-je vous aider concernant nos véhicules ?"
  3. Soyez concis (2-3 phrases maximum)
  4. Ne donnez pas de conseils techniques précis
  5. Pour toute question complexe, suggérez de contacter un conseiller
  6. Répondez uniquement en français
  
  Horaires: Lun-Sam 9h-19h | Directeur: Alexandre Grosse | Service client: 01.23.45.67.89
  
  INVENTAIRE ACTUEL DE VÉHICULES:
  ${cars.map(car => `- ${car.name} (${car.status}): ${car.price}, ${car.specs}, ${car.additionalSpecs.find(spec => spec.label === "Kilométrage")?.value || "0 km"}, ${car.additionalSpecs.find(spec => spec.label === "Année")?.value || ""}, ${car.additionalSpecs.find(spec => spec.label === "Carburant")?.value || ""}, Couleur: ${car.additionalSpecs.find(spec => spec.label === "Couleur")?.value || ""}. ${car.description}`).join('\n')}
  `
};

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export const ChatbotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([SYSTEM_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = { role: 'user', content };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Ajout du message utilisateur à la conversation
      const updatedMessages = [...messages, userMessage];
      
      // Obtention de la réponse du modèle
      const response = await chatbotService.sendMessage(updatedMessages);
      
      // Ajout de la réponse à la conversation
      const assistantMessage: Message = { role: 'assistant', content: response };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Erreur chatbot:', error);
      toast.error('Désolé, je rencontre des difficultés. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  const clearConversation = () => {
    setMessages([SYSTEM_MESSAGE]);
  };

  return (
    <ChatbotContext.Provider value={{ messages, isLoading, sendMessage, clearConversation }}>
      {children}
    </ChatbotContext.Provider>
  );
};

export const useChatbot = () => {
  const context = useContext(ChatbotContext);
  if (context === undefined) {
    throw new Error('useChatbot doit être utilisé à l\'intérieur d\'un ChatbotProvider');
  }
  return context;
}; 