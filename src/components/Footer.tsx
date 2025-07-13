
import { Heart, Phone, Mail, Flower, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-rose-500 to-purple-600 p-3 rounded-2xl shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="font-playfair text-2xl font-bold text-white">
                  Doula Debora Maria
                </span>
                <p className="font-inter text-sm text-gray-300">Goiânia, Goiás</p>
              </div>
            </div>
            
            <p className="font-inter text-gray-300 leading-relaxed max-w-md">
              Oferecendo suporte emocional, físico e informativo para um dos momentos mais especiais da sua vida. Estou aqui para acompanhar você com carinho e profissionalismo em toda Goiânia.
            </p>
            
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 p-2 rounded-xl">
                <Flower className="h-5 w-5 text-white" />
              </div>
              <span className="font-inter text-sm text-gray-300 italic">Cuidando com amor desde 0000</span>
            </div>
          </div>

          {/* Contato */}
          <div className="space-y-6">
            <h3 className="font-playfair text-xl font-bold text-white">
              Contato
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-r from-rose-500 to-purple-600 p-2 rounded-lg group-hover:shadow-lg transition-shadow">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <span className="font-inter text-gray-300 group-hover:text-white transition-colors">debora@doulagoiania.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-r from-rose-500 to-purple-600 p-2 rounded-lg group-hover:shadow-lg transition-shadow">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span className="font-inter text-gray-300 group-hover:text-white transition-colors">Goiânia, Goiás</span>
              </div>
            </div>
          </div>

          {/* Serviços */}
          <div className="space-y-6">
            <h3 className="font-playfair text-xl font-bold text-white">
              Serviços
            </h3>
            <ul className="space-y-3 font-inter text-gray-300">
              <li className="flex items-start space-x-2 group">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="group-hover:text-white transition-colors">Acompanhamento Pré-natal</span>
              </li>
              <li className="flex items-start space-x-2 group">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="group-hover:text-white transition-colors">Suporte durante o Parto</span>
              </li>
              <li className="flex items-start space-x-2 group">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="group-hover:text-white transition-colors">Cuidados Pós-parto</span>
              </li>
              <li className="flex items-start space-x-2 group">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="group-hover:text-white transition-colors">Apoio à Amamentação</span>
              </li>
            </ul>
            
            {/* Redes Sociais */}
            <div className="pt-4">
              <h4 className="font-playfair text-lg font-semibold text-white mb-3">
                Siga-me
              </h4>
              <div className="flex space-x-3">
                <div className="bg-gradient-to-r from-rose-500 to-purple-600 p-3 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <Instagram className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <Facebook className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="font-inter text-gray-400 text-sm">
            © 2024 Doula Debora Maria. Todos os direitos reservados. Feito com ❤️ para famílias especiais em Goiânia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
