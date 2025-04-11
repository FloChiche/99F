import { OpenAI } from 'openai';
import { Message } from '../types/chatbot';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

const MODEL = import.meta.env.VITE_OPENAI_MODEL || 'gpt-3.5-turbo';

export const sendMessage = async (messages: Message[]): Promise<string> => {
  try {
    const response = await openai.chat.completions.create({
      model: MODEL,
      messages: messages.map(msg => ({
        role: msg.role,
        content: msg.content
      })),
      temperature: 0.7,
      max_tokens: 500
    });
    
    return response.choices[0].message.content || 'Désolé, je n\'ai pas pu générer de réponse.';
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message à OpenAI:', error);
    throw new Error('Désolé, une erreur est survenue lors de la communication avec le chatbot.');
  }
}; 