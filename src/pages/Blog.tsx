import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import LazyImage from '../components/LazyImage';

const blogPosts = [
  {
    id: 1,
    title: "Guide d'achat : Comment choisir sa voiture de luxe en 2024",
    excerpt: "Découvrez les critères essentiels pour choisir votre prochaine voiture de luxe...",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    category: "Conseils",
    date: "7 mars 2024",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Les nouvelles technologies des véhicules premium en 2024",
    excerpt: "Le point sur les dernières innovations technologiques du secteur automobile premium...",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    category: "Technologie",
    date: "6 mars 2024",
    readTime: "4 min"
  },
  // Ajoutez plus d'articles...
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <SEOHead
        title="Blog Automobile Premium"
        description="Actualités, conseils et guides sur les voitures de luxe. Découvrez nos articles sur les dernières tendances du secteur automobile premium."
        keywords="blog auto luxe, actualités voitures premium, conseils achat voiture luxe, guide automobile premium"
        url="/blog"
      />

      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Blog DriveSelect</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Découvrez nos articles, conseils et actualités sur l'univers des voitures premium
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1"
            >
              <Link to={`/blog/${post.id}`} className="block">
                <LazyImage
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-blue-600 text-sm font-medium">{post.category}</span>
                    <span className="text-gray-400 text-sm">•</span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <span className="text-blue-600 font-medium">Lire la suite →</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;