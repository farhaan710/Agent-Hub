import React from 'react';
import { ArrowLeft, Star, ShoppingCart, Shield, Zap, Users, CheckCircle } from 'lucide-react';
import { Agent } from '../types/agent';

interface AgentDetailProps {
  agent: Agent;
  onBack: () => void;
  onAddToCart: (agent: Agent) => void;
}

const AgentDetail: React.FC<AgentDetailProps> = ({ agent, onBack, onAddToCart }) => {
  return (
    <div className="py-16 min-h-screen" style={{ backgroundColor: '#fffbde' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 mb-12 group"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-lg">Back to Marketplace</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12">
              <div className="flex items-start space-x-6 mb-12">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #91c8e4 0%, #749bc2 100%)' }}>
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-14 h-14 rounded-xl"
                  />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">{agent.name}</h1>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">{agent.description}</p>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <Star className="h-6 w-6 text-yellow-400 fill-current" />
                      <span className="font-medium text-gray-700 text-lg">{agent.rating}</span>
                      <span className="text-gray-500">({agent.reviewCount} reviews)</span>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
                      {agent.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Description</h3>
                <p className="text-gray-600 mb-12 text-lg leading-relaxed">{agent.longDescription}</p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {agent.capabilities.map((capability, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{capability}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Use Cases</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {agent.useCases.map((useCase, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6">
                      <span className="text-gray-700">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Seller Info */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">About the Seller</h3>
              <div className="flex items-center space-x-6">
                <img
                  src={agent.seller.avatar}
                  alt={agent.seller.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h4 className="font-medium text-gray-900 text-lg">{agent.seller.name}</h4>
                  <div className="flex items-center space-x-2 mt-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="text-gray-600">{agent.seller.rating} seller rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sticky top-32">
              <div className="text-center mb-8">
                <span className="text-4xl font-bold text-gray-900">${agent.price}</span>
                <p className="text-gray-600 mt-2">One-time purchase</p>
              </div>

              <button 
                onClick={() => onAddToCart(agent)}
                className="w-full text-white py-4 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-3 mb-4 text-lg"
                style={{ backgroundColor: '#749bc2' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4682a9'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#749bc2'}
              >
                <ShoppingCart className="h-6 w-6" />
                <span>Add to Cart</span>
              </button>

              <button className="w-full bg-gray-100 text-gray-700 py-4 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-colors text-lg">
                Try Demo
              </button>

              <div className="mt-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <Shield className="h-6 w-6 text-green-500" />
                  <span className="text-gray-600">30-day money-back guarantee</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Zap className="h-6 w-6 text-yellow-500" />
                  <span className="text-gray-600">Instant deployment</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Users className="h-6 w-6" style={{ color: '#749bc2' }} />
                  <span className="text-gray-600">24/7 support included</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {agent.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm font-medium px-4 py-2 rounded-full"
                    style={{ backgroundColor: '#91c8e4', color: '#4682a9' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetail;