import { HfInference } from '@huggingface/inference';
import { Message } from '../types/chatbot';

const hf = new HfInference(import.meta.env.VITE_HUGGINGFACE_API_KEY);
const MODEL = import.meta.env.VITE_HUGGINGFACE_MODEL || 'mistralai/Mistral-7B-Instruct-v0.2';

// Formater la conversation pour Hugging Face
const formatConversation = (messages: Message[]): string => {
  // Format pour les modèles de type Mistral
  return messages
    .map(message => {
      if (message.role === 'user') {
        return `<s>[INST] ${message.content} [/INST]`;
      } else if (message.role === 'assistant') {
        return `${message.content} </s>`;
      } else {
        return `${message.content}`;
      }
    })
    .join('\n');
};

export const sendMessage = async (messages: Message[]): Promise<string> => {
  try {
    const conversation = formatConversation(messages);
    
    const result = await hf.textGeneration({
      model: MODEL,
      inputs: conversation,
      parameters: {
        max_new_tokens: 700,
        temperature: 0.5,
        top_p: 0.85,
        do_sample: true,
      }
    });
    
    return result.generated_text.replace(conversation, '').trim();
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message à Hugging Face:', error);
    throw new Error('Désolé, une erreur est survenue lors de la communication avec le chatbot.');
  }
}; 