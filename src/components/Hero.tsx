import React from 'react';
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: 'marketplace' | 'sell') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #4682a9 0%, #749bc2 50%, #91c8e4 100%)' }}>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="text-center">
          <div className="flex justify-center mb-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <Sparkles className="h-12 w-12 text-yellow-300" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-12 leading-tight">
            The Future of AI
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Starts Here
            </span>
          </h1>
          
          <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-16 leading-relaxed">
            Discover, buy, and sell cutting-edge AI agents. From customer service bots to data analysts, 
            find the perfect AI assistant for your needs or monetize your own creations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-24">
            <button
              onClick={() => onNavigate('marketplace')}
              className="bg-white text-blue-800 px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all duration-200 flex items-center justify-center space-x-3 group shadow-xl"
            >
              <span>Explore Agents</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => onNavigate('sell')}
              className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-800 transition-all duration-200"
            >
              Sell Your Agent
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-10 border border-white/25 hover:bg-white/20 transition-all duration-300">
              <Shield className="h-12 w-12 text-green-300 mb-8 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-4">Secure & Trusted</h3>
              <p className="text-white/80 leading-relaxed">
                All agents are verified and tested for quality and security
              </p>
            </div>
            
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-10 border border-white/25 hover:bg-white/20 transition-all duration-300">
              <Zap className="h-12 w-12 text-yellow-300 mb-8 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-4">Instant Deployment</h3>
              <p className="text-white/80 leading-relaxed">
                Deploy purchased agents instantly with our one-click integration
              </p>
            </div>
            
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-10 border border-white/25 hover:bg-white/20 transition-all duration-300">
              <Sparkles className="h-12 w-12 text-purple-300 mb-8 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-4">Premium Quality</h3>
              <p className="text-white/80 leading-relaxed">
                Curated collection of high-performance AI agents
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;