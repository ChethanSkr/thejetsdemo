import { Menu, Search, ShoppingCart, User } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/95 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?auto=format&fit=crop&q=80&w=100" 
              alt="The Jets Logo" 
              className="h-10 w-10 rounded-full"
            />
            <h1 className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              THE JETS
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#achievements" className="hover:text-blue-400 transition-colors">Achievements</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#products" className="hover:text-blue-400 transition-colors">Products</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors" />
            <User className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors" />
            <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors" />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Home</a>
            <a href="#about" className="block px-3 py-2 hover:bg-gray-800 rounded-md">About</a>
            <a href="#achievements" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Achievements</a>
            <a href="#projects" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Projects</a>
            <a href="#products" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Products</a>
            <a href="#contact" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}