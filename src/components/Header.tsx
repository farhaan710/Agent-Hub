import React from 'react';
import { Bot, ShoppingCart, User, Search } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: 'home' | 'marketplace' | 'sell' | 'cart' | 'profile' | 'login') => void;
  cartItemCount: number;
  isLoggedIn: boolean;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, cartItemCount, isLoggedIn }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-3 group"
            >
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-3 rounded-xl group-hover:scale-105 transition-transform duration-200">
                <Bot className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                AgentHub
              </span>
            </button>
          </div>

          <nav className="hidden md:flex space-x-2">
            <button
              onClick={() => onNavigate('home')}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                currentPage === 'home'
                  ? 'text-blue-700 bg-blue-50 shadow-sm'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('marketplace')}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                currentPage === 'marketplace'
                  ? 'text-blue-700 bg-blue-50 shadow-sm'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Marketplace
            </button>
            <button
              onClick={() => onNavigate('sell')}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                currentPage === 'sell'
                  ? 'text-blue-700 bg-blue-50 shadow-sm'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Sell Agent
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-all duration-200">
              <Search className="h-5 w-5" />
            </button>
            <button 
              onClick={() => onNavigate('cart')}
              className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-all duration-200 relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => onNavigate(isLoggedIn ? 'profile' : 'login')}
              className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-all duration-200"
            >
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;