import React, { createContext, useContext, useState } from 'react';

export interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
  image: string;
}

const defaultReviews: Review[] = [
  {
    id: 1,
    name: "Jean Dupont",
    rating: 5,
    date: "15 février 2024",
    comment: "Excellente expérience d'achat ! L'équipe a été très professionnelle et à l'écoute de mes besoins. Ma nouvelle BMW est exactement ce que je cherchais. Le processus de financement était simple et transparent.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    name: "Marie Lambert",
    rating: 5,
    date: "3 février 2024",
    comment: "Très satisfaite de mon expérience chez DriveSelect. Le conseiller a pris le temps de comprendre mes besoins et m'a proposé exactement le véhicule qu'il me fallait. La reprise de mon ancienne voiture s'est faite dans d'excellentes conditions.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    name: "Pierre Martin",
    rating: 5,
    date: "28 janvier 2024",
    comment: "Une concession haut de gamme avec un service irréprochable. J'ai particulièrement apprécié la qualité de la présentation des véhicules et les conditions de financement proposées. Je recommande vivement !",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

interface ReviewContextType {
  reviews: Review[];
  addReview: (review: Omit<Review, 'id' | 'date' | 'image'>) => void;
}

const ReviewContext = createContext<ReviewContextType | undefined>(undefined);

export const ReviewProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [reviews, setReviews] = useState<Review[]>(defaultReviews);

  const addReview = (newReview: Omit<Review, 'id' | 'date' | 'image'>) => {
    const review: Review = {
      ...newReview,
      id: reviews.length + 1,
      date: new Date().toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      image: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000)}?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`
    };

    setReviews([review, ...reviews]);
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview }}>
      {children}
    </ReviewContext.Provider>
  );
};

export const useReviews = () => {
  const context = useContext(ReviewContext);
  if (context === undefined) {
    throw new Error('useReviews must be used within a ReviewProvider');
  }
  return context;
};