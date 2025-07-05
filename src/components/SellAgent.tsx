import React, { useState } from 'react';
import { Upload, DollarSign, Tag, FileText, Save } from 'lucide-react';

interface SellAgentProps {
  onNavigate: (page: 'home' | 'marketplace') => void;
}

const SellAgent: React.FC<SellAgentProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    longDescription: '',
    price: '',
    category: '',
    tags: '',
    capabilities: '',
    useCases: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Agent submitted for review! We\'ll notify you once it\'s approved.');
    onNavigate('marketplace');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-16 min-h-screen" style={{ backgroundColor: '#fffbde' }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Sell Your AI Agent</h1>
          <p className="text-xl text-gray-600">Share your AI creation with the world and earn money</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-10">Basic Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Agent Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your agent's name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a category</option>
                  <option value="customer-service">Customer Service</option>
                  <option value="data-analysis">Data Analysis</option>
                  <option value="content-creation">Content Creation</option>
                  <option value="automation">Automation</option>
                  <option value="productivity">Productivity</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mt-8">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Short Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Brief description of your agent (max 200 characters)"
              />
            </div>

            <div className="mt-8">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Detailed Description *
              </label>
              <textarea
                name="longDescription"
                value={formData.longDescription}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Provide a detailed description of your agent's functionality and benefits"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-10">Pricing & Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Price (USD) *
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    min="1"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="99"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Tags
                </label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="chatbot, automation, ai (comma-separated)"
                />
              </div>
            </div>

            <div className="mt-8">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Key Capabilities *
              </label>
              <textarea
                name="capabilities"
                value={formData.capabilities}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="List the main capabilities of your agent (one per line)"
              />
            </div>

            <div className="mt-8">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Use Cases *
              </label>
              <textarea
                name="useCases"
                value={formData.useCases}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Describe specific use cases where your agent excels (one per line)"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-10">Media & Files</h2>
            
            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-16 text-center transition-colors"
                 style={{ borderColor: '#91c8e4' }}
                 onMouseEnter={(e) => e.currentTarget.style.borderColor = '#749bc2'}
                 onMouseLeave={(e) => e.currentTarget.style.borderColor = '#91c8e4'}>
              <Upload className="h-16 w-16 text-gray-400 mx-auto mb-6" />
              <p className="text-gray-600 mb-4 text-lg">Upload your agent files</p>
              <p className="text-gray-500 mb-8">Drag and drop or click to browse</p>
              <button
                type="button"
                className="text-white px-8 py-3 rounded-xl transition-colors"
                style={{ backgroundColor: '#749bc2' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4682a9'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#749bc2'}
              >
                Choose Files
              </button>
            </div>
          </div>

          <div className="flex justify-between pt-8">
            <button
              type="button"
              onClick={() => onNavigate('marketplace')}
              className="px-8 py-4 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors text-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-white px-10 py-4 rounded-xl font-semibold transition-colors flex items-center space-x-3 text-lg"
              style={{ backgroundColor: '#749bc2' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4682a9'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#749bc2'}
            >
              <Save className="h-6 w-6" />
              <span>Submit for Review</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellAgent;