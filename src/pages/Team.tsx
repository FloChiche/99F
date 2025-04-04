import { Mail, Phone, Award } from 'lucide-react';

const teamMembers = [
  {
    id: 5,
    name: "Hamza Sayadi",
    role: "Directeur Commercial",
    image: "https://i.imgur.com/l93ShNR.jpeg",
    email: "h.sayadi@driveselect.fr",
    phone: "+33 7 23 45 67 89",
    expertise: ["Mercedes-Benz", "Porsche", "Audi"],
    description: "Passionné par l'automobile de luxe depuis toujours, je mets mon expertise au service de nos clients pour les accompagner dans leur projet d'acquisition.",
    experience: "3 ans"
  },
  {
    id: 1,
    name: "Quentin Bonnet",  
    role: "Conseiller Commercial",
    image: "https://i.imgur.com/GlN55Yy.png",
    email: "q.bonnet@driveselect.fr",
    phone: "+33 7 23 45 67 88",
    expertise: ["Mercedes-Benz", "Audi"],
    description: "Passionné par l'automobile de luxe depuis toujours, je mets mon expertise au service de nos clients pour les accompagner dans leur projet d'acquisition.",
    experience: "5 ans"
  },
  {
    id: 2,
    name: "Florian Chicheportiche",
    role: "CEO",
    image: "https://i.imgur.com/LQjmS03.png",
    email: "f.chicheportiche@driveselect.fr",
    phone: "+33 1 23 45 67 90",
    expertise: ["Mercedes-Benz", "Porsche", "BMW", "Audi"],
    description: "Spécialisée dans les nouvelles technologies automobiles, j'accompagne nos clients vers une mobilité plus responsable sans compromis sur le luxe.",
    experience: "10 ans"
  },
  {
    id: 3,
    name: "Alexandre Grosse",
    role: "Stagiaire sans renouvelement de contrat",
    image: "https://i.imgur.com/IICh1C8.jpeg",
    email: "a.grosse@driveselect.fr",
    phone: "+33 1 23 45 67 91",
    expertise: ["Tesla", "BMW", "Lexus"],
    description: "Ancien pilote amateur, je partage ma passion pour les voitures sportives et aide nos clients à trouver lxe véhicule qui correspond à leurs attentes.",
    experience: "10 ans"
  },
  {
    id: 4,
    name: "Arthur Champagne-Fortere",
    role: "Responsable Financement",
    image: "https://i.imgur.com/UfJQJ6r.jpeg",
    email: "a.champagne-fortere@driveselect.fr",
    phone: "+33 1 23 45 67 92",
    expertise: ["Crédit", "Leasing", "LOA"],
    description: "Experte en solutions financières, je trouve les meilleures options de financement adaptées à chaque projet d'acquisition.",
    experience: "4 ans"
  }
];

const Team = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900 pt-32 pb-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center bg-fixed"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 text-transparent bg-clip-text">
            Notre Équipe
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Une équipe de passionnés à votre service pour vous accompagner dans toutes les étapes de votre projet automobile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="relative p-6 text-white">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-blue-300">{member.role}</p>
                  </div>

                  <div className="flex items-center text-sm">
                    <Award className="w-4 h-4 mr-1 text-blue-400" />
                    <span>{member.experience}</span>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Mail className="w-4 h-4 mr-2 text-blue-400" />
                        <span>{member.email}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="w-4 h-4 mr-2 text-blue-400" />
                        <span>{member.phone}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((exp, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-blue-500/30 rounded-full text-xs backdrop-blur-sm border border-blue-400/20"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm text-blue-100">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;