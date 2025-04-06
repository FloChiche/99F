export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatbotContextType {
  messages: Message[];
  isLoading: boolean;
  sendMessage: (content: string) => Promise<void>;
  clearConversation: () => void;
} 