import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { Agent } from '../types/agent';
import { mockAgents } from '../data/mockData';

interface FeaturedAgentsProps {
  onAgentSelect: (agent: Agent) => void;
}

const FeaturedAgents: React.FC<FeaturedAgentsProps> = ({ onAgentSelect }) => {
  const featuredAgents = mockAgents.filter(agent => agent.featured).slice(0, 3);

  return (
    <section className="py-32" style={{ backgroundColor: '#fffbde' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Featured AI Agents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our most popular and highest-rated AI agents, trusted by thousands of users worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuredAgents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer transform hover:-translate-y-2"
              onClick={() => onAgentSelect(agent)}
            >
              <div className="p-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #91c8e4 0%, #749bc2 100%)' }}>
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="w-10 h-10 rounded-xl"
                    />
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-4 py-2 rounded-full">
                    Featured
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {agent.name}
                </h3>
                
                <p className="text-gray-600 mb-8 line-clamp-2 leading-relaxed">
                  {agent.description}
                </p>
                
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{agent.rating}</span>
                    <span className="text-sm text-gray-500">({agent.reviewCount})</span>
                  </div>
                  <span className="text-3xl font-bold text-gray-900">
                    ${agent.price}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={agent.seller.avatar}
                      alt={agent.seller.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm text-gray-600">{agent.seller.name}</span>
                  </div>
                  
                  <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAgents;