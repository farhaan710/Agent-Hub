import React, { useState } from 'react';
import { Search, Filter, Star, Grid, List } from 'lucide-react';
import { Agent } from '../types/agent';
import { mockAgents, categories } from '../data/mockData';

interface MarketplaceProps {
  onAgentSelect: (agent: Agent) => void;
}

const Marketplace: React.FC<MarketplaceProps> = ({ onAgentSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredAgents = mockAgents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || agent.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedAgents = [...filteredAgents].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return b.reviewCount - a.reviewCount;
    }
  });

  return (
    <section className="py-16 min-h-screen" style={{ backgroundColor: '#fffbde' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Agent Marketplace</h1>
          <p className="text-xl text-gray-600">Discover and purchase AI agents for every use case</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative">
              <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search agents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-xl transition-all ${viewMode === 'grid' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}
                style={{ backgroundColor: viewMode === 'grid' ? '#91c8e4' : 'transparent', color: viewMode === 'grid' ? 'white' : undefined }}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-xl transition-all ${viewMode === 'list' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}
                style={{ backgroundColor: viewMode === 'list' ? '#91c8e4' : 'transparent', color: viewMode === 'list' ? 'white' : undefined }}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex justify-between items-center mb-12">
          <p className="text-lg text-gray-600">
            Showing {sortedAgents.length} of {mockAgents.length} agents
          </p>
        </div>

        {/* Agents Grid */}
        <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {sortedAgents.map((agent) => (
            <div
              key={agent.id}
              className={`bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 cursor-pointer group transform hover:-translate-y-1 ${
                viewMode === 'list' ? 'flex items-center space-x-8 p-8' : 'p-8'
              }`}
              onClick={() => onAgentSelect(agent)}
            >
              <div className={`${viewMode === 'list' ? 'flex-shrink-0' : ''}`}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #91c8e4 0%, #749bc2 100%)' }}>
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-10 h-10 rounded-xl"
                  />
                </div>
              </div>
              
              <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {agent.name}
                  </h3>
                  <span className="text-2xl font-bold text-gray-900">
                    ${agent.price}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                  {agent.description}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{agent.rating}</span>
                    <span className="text-sm text-gray-500">({agent.reviewCount})</span>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {agent.category}
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <img
                    src={agent.seller.avatar}
                    alt={agent.seller.name}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-sm text-gray-600">{agent.seller.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketplace;