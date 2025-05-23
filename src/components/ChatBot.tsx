import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, RefreshCw, Phone, UserRound, Sparkles, Car } from 'lucide-react';
import { useChatbot } from '../contexts/ChatbotContext';
import { Link, useNavigate } from 'react-router-dom';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [showContactButton, setShowContactButton] = useState(false);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { messages, isLoading, sendMessage, clearConversation } = useChatbot();
  const navigate = useNavigate();

  // Afficher uniquement les messages utilisateur et assistant (pas les messages système)
  const visibleMessages = messages.filter(msg => msg.role !== 'system');

  // Vérifier si le dernier message contient une invitation à contacter l'équipe
  useEffect(() => {
    if (visibleMessages.length > 0) {
      const lastMessage = visibleMessages[visibleMessages.length - 1];
      if (lastMessage.role === 'assistant') {
        const text = lastMessage.content.toLowerCase();
        const contactPhrases = [
          'contacter notre équipe',
          'contacter nos conseillers',
          'contacter un conseiller',
          'contacter nos spécialistes',
          'contacter l\'équipe',
          'nos conseillers',
          'notre équipe pourra',
          'rendez-vous',
          'visite en concession',
          'visiter notre concession',
        ];
        
        const shouldShowButton = contactPhrases.some(phrase => text.includes(phrase));
        setShowContactButton(shouldShowButton);
      }
    }
  }, [visibleMessages]);

  useEffect(() => {
    // Scroll to bottom when messages change
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    // Focus input when chat is opened
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSend = () => {
    if (input.trim() && !isLoading) {
      sendMessage(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleContactClick = () => {
    setIsOpen(false);
    navigate('/contact');
  };

  const handleInventoryClick = () => {
    sendMessage("Quels véhicules avez-vous actuellement en stock?");
  };

  return (
    <>
      {/* Bouton flottant pour ouvrir le chat */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors z-50"
          aria-label="Ouvrir le chat"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {/* Fenêtre de chat */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 w-80 sm:w-96 bg-white rounded-lg shadow-xl z-50 flex flex-col max-h-[80vh] border border-gray-200">
          {/* En-tête du chat */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-blue-600 text-white rounded-t-lg">
            <h3 className="font-semibold">Assistant DriveSelect</h3>
            <div className="flex space-x-2">
              <button 
                onClick={clearConversation} 
                className="p-1 hover:bg-blue-700 rounded"
                aria-label="Recommencer la conversation"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-1 hover:bg-blue-700 rounded"
                aria-label="Fermer le chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Contenu du chat */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Message de bienvenue si aucun message */}
            {visibleMessages.length === 0 && (
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-gray-700">
                  Bonjour ! Je suis l'assistant virtuel de DriveSelect. Comment puis-je vous aider aujourd'hui ?
                </p>
                
                {/* Boutons de suggestions rapides */}
                <div className="flex flex-wrap gap-2 mt-3">
                  <button
                    onClick={handleInventoryClick}
                    className="flex items-center gap-1 bg-blue-100 hover:bg-blue-200 text-blue-800 py-1 px-3 rounded-full text-xs transition-colors"
                  >
                    <Car className="w-3 h-3" />
                    Voir notre inventaire
                  </button>
                  <button
                    onClick={() => sendMessage("Quels sont vos horaires d'ouverture ?")}
                    className="bg-blue-100 hover:bg-blue-200 text-blue-800 py-1 px-3 rounded-full text-xs transition-colors"
                  >
                    Horaires d'ouverture
                  </button>
                  <button
                    onClick={() => sendMessage("Comment réserver un essai ?")}
                    className="bg-blue-100 hover:bg-blue-200 text-blue-800 py-1 px-3 rounded-full text-xs transition-colors"
                  >
                    Essai routier
                  </button>
                </div>
              </div>
            )}

            {/* Messages de la conversation */}
            {visibleMessages.map((msg, index) => (
              <div 
                key={index} 
                className={`${
                  msg.role === 'user' 
                    ? 'bg-blue-100 ml-6' 
                    : 'bg-gray-100 mr-6'
                } p-3 rounded-lg`}
              >
                <p className="text-sm text-gray-700">{msg.content}</p>
              </div>
            ))}

            {/* Bouton de contact si nécessaire */}
            {showContactButton && !isLoading && (
              <div className="flex justify-center my-2">
                <button
                  onClick={handleContactClick}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition-colors"
                >
                  <UserRound className="w-4 h-4" />
                  Contacter notre équipe
                </button>
              </div>
            )}

            {/* Indicateur de chargement */}
            {isLoading && (
              <div className="bg-gray-100 p-3 rounded-lg mr-6">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}

            {/* Référence pour le scroll automatique */}
            <div ref={messageEndRef} />
          </div>

          {/* Zone de saisie */}
          <div className="p-3 border-t border-gray-200">
            <div className="flex rounded-lg border border-gray-300 overflow-hidden">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Écrivez votre message..."
                className="flex-1 p-2 outline-none"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className={`p-2 ${
                  isLoading || !input.trim() 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            
            {/* Badge Powered by OpenAI */}
            <div className="flex justify-end mt-2">
              <div className="flex items-center text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1">
                <Sparkles className="w-3 h-3 mr-1 text-purple-500" />
                Powered by OpenAI - ChatGPT 3.5 Turbo 
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot; 