import React, { createContext, useContext, useState } from 'react';
import { Message, ChatbotContextType } from '../types/chatbot';
import * as chatbotService from '../services/chatbotService';
import { toast } from 'react-hot-toast';

// Message système initial pour guider le modèle
const SYSTEM_MESSAGE: Message = {
  role: 'system',
  content: `Vous êtes l'assistant virtuel de DriveSelect, concession automobile située au 14 Av. de la Grande Armée, 75017 Paris.
  
  RÈGLES IMPORTANTES:
  1. Soyez TRÈS CONCIS et précis dans vos réponses (2-3 phrases maximum pour les questions générales)
  2. Répondez de façon plus détaillée uniquement aux questions spécifiques
  3. Connaissez toutes les marques et modèles de voitures, sans favoriser aucune marque
  4. Donnez des informations générales sur les voitures mais évitez les spécifications techniques précises
  5. Pour toute question complexe, technique ou précise, terminez votre réponse en suggérant de "contacter notre équipe de conseillers" ou "prendre rendez-vous en concession"
  6. Répondez uniquement en français
  
  Horaires: Lun-Sam 9h-19h | Directeur: Alexandre Grosse | Service client: 01.23.45.67.89
  ATTENTION: Ne répondez pas à des questions qui ne sont pas liées à la concession automobile et a la culture automobile. 
  Si la question n'est pas liée à la concession automobile, répondez " je ne suis pas en mesure de répondre à cette question ".
  Pour un essai routier: formulaire sur site ou téléphone.`
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