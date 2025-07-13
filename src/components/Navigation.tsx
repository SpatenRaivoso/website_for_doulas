
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Sobre Mim', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contato', path: '/contato' }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md fixed w-full top-0 z-50 shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-r from-rose-500 to-purple-600 p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <div>
              <span className="font-playfair text-xl font-bold text-gray-900">
                Doula Debora Maria
              </span>
              <p className="font-inter text-xs text-gray-500">Goiânia, GO</p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-inter font-medium transition-all duration-300 relative group ${
                    isActive
                      ? 'text-rose-500'
                      : 'text-gray-600 hover:text-rose-500'
                  }`
                }
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
            <button className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-6 py-3 rounded-xl font-inter font-semibold hover:from-rose-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 relative overflow-hidden group">
              <span className="relative z-10">Agendar Consulta</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-rose-500 focus:outline-none transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 rounded-b-2xl shadow-xl">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 font-inter font-medium transition-all duration-300 rounded-xl ${
                      isActive
                        ? 'text-rose-500 bg-rose-50 shadow-lg'
                        : 'text-gray-600 hover:text-rose-500 hover:bg-rose-50'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="px-4 py-3">
                <button className="w-full bg-gradient-to-r from-rose-500 to-purple-600 text-white px-6 py-3 rounded-xl font-inter font-semibold hover:from-rose-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
                  Agendar Consulta
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
