import React from 'react';
import { Bot, Twitter, Github, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 rounded-xl" style={{ background: 'linear-gradient(135deg, #749bc2 0%, #4682a9 100%)' }}>
                <Bot className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold">AgentHub</span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              The premier marketplace for AI agents. Discover, buy, and sell cutting-edge AI assistants.
            </p>
            <div className="flex space-x-6">
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Github className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Mail className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-8">Marketplace</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Browse Agents</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Featured</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-8">Sell</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Seller Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Practices</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-8">Company</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2024 AgentHub. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-gray-400 mt-6 md:mt-0">
            <span>Made with</span>
            <Heart className="h-5 w-5 text-red-500" />
            <span>for AI enthusiasts</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;