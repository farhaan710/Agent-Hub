import React, { useState } from 'react';
import { User, Settings, Package, CreditCard, Bell, Shield, Edit3, Star } from 'lucide-react';

interface ProfileProps {
  onNavigate: (page: 'marketplace') => void;
}

const Profile: React.FC<ProfileProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'purchases', label: 'My Purchases', icon: Package },
    { id: 'sales', label: 'My Sales', icon: CreditCard },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="py-16 min-h-screen" style={{ backgroundColor: '#fffbde' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">My Profile</h1>
          <p className="text-xl text-gray-600">Manage your account and track your AI agent activities</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <div className="text-center mb-8">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Profile"
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">John Doe</h3>
                <p className="text-gray-600">john.doe@example.com</p>
                <div className="flex items-center justify-center space-x-1 mt-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">4.8 rating</span>
                </div>
              </div>

              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all ${
                        activeTab === tab.id
                          ? 'text-white'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      style={{ 
                        backgroundColor: activeTab === tab.id ? '#91c8e4' : 'transparent'
                      }}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
                    <Package className="h-12 w-12 mx-auto mb-4" style={{ color: '#749bc2' }} />
                    <div className="text-3xl font-bold text-gray-900 mb-2">12</div>
                    <div className="text-gray-600">Agents Purchased</div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
                    <CreditCard className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
                    <div className="text-gray-600">Agents Sold</div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
                    <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">4.8</div>
                    <div className="text-gray-600">Average Rating</div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                      <Package className="h-8 w-8" style={{ color: '#749bc2' }} />
                      <div>
                        <p className="font-medium text-gray-900">Purchased CustomerChat Pro</p>
                        <p className="text-sm text-gray-600">2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                      <CreditCard className="h-8 w-8 text-green-600" />
                      <div>
                        <p className="font-medium text-gray-900">Sold DataInsight AI</p>
                        <p className="text-sm text-gray-600">1 week ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'purchases' && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-8">My Purchases</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-6 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #91c8e4 0%, #749bc2 100%)' }}>
                        <img
                          src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400"
                          alt="Agent"
                          className="w-8 h-8 rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">CustomerChat Pro</h3>
                        <p className="text-sm text-gray-600">Purchased on Jan 15, 2024</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">$149</div>
                      <button className="text-sm transition-colors" style={{ color: '#749bc2' }}
                              onMouseEnter={(e) => e.currentTarget.style.color = '#4682a9'}
                              onMouseLeave={(e) => e.currentTarget.style.color = '#749bc2'}>
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'sales' && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900">My Sales</h2>
                  <button
                    onClick={() => onNavigate('marketplace')}
                    className="text-white px-6 py-3 rounded-xl transition-colors"
                    style={{ backgroundColor: '#749bc2' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4682a9'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#749bc2'}
                  >
                    Sell New Agent
                  </button>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-6 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #91c8e4 0%, #749bc2 100%)' }}>
                        <img
                          src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=400"
                          alt="Agent"
                          className="w-8 h-8 rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">DataInsight AI</h3>
                        <p className="text-sm text-gray-600">3 sales this month</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">$597</div>
                      <p className="text-sm text-gray-600">Total earnings</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-8">Account Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        defaultValue="John Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue="john.doe@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                      <textarea
                        rows={4}
                        defaultValue="AI enthusiast and developer with 5+ years of experience creating intelligent solutions."
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="text-white px-8 py-3 rounded-xl transition-colors"
                            style={{ backgroundColor: '#749bc2' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4682a9'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#749bc2'}>
                      Save Changes
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-8">Notifications</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">Email notifications</h3>
                        <p className="text-sm text-gray-600">Receive updates about your purchases and sales</p>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">Marketing emails</h3>
                        <p className="text-sm text-gray-600">Get notified about new features and promotions</p>
                      </div>
                      <input type="checkbox" className="rounded" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;