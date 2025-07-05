import React from 'react';
import { Trash2, ArrowLeft, CreditCard, ShoppingBag } from 'lucide-react';
import { Agent } from '../types/agent';

interface CartProps {
  items: Agent[];
  onRemoveItem: (agentId: string) => void;
  onNavigate: (page: 'marketplace') => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemoveItem, onNavigate }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here!');
  };

  if (items.length === 0) {
    return (
      <div className="py-16 min-h-screen" style={{ backgroundColor: '#fffbde' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center py-24">
            <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-8" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-xl text-gray-600 mb-12">Discover amazing AI agents in our marketplace</p>
            <button
              onClick={() => onNavigate('marketplace')}
              className="text-white px-8 py-4 rounded-xl font-semibold transition-colors text-lg"
              style={{ backgroundColor: '#749bc2' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4682a9'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#749bc2'}
            >
              Browse Marketplace
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 min-h-screen" style={{ backgroundColor: '#fffbde' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <button
          onClick={() => onNavigate('marketplace')}
          className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 mb-12 group"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-lg">Continue Shopping</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-12">Shopping Cart</h1>
            
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #91c8e4 0%, #749bc2 100%)' }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 rounded-xl"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {item.category}
                        </span>
                        <span className="text-sm text-gray-600">by {item.seller.name}</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900 mb-4">${item.price}</div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-xl transition-all"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sticky top-32">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({items.length} items)</span>
                  <span className="font-medium">${total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Processing fee</span>
                  <span className="font-medium">$0</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-xl font-semibold text-gray-900">Total</span>
                    <span className="text-xl font-bold text-gray-900">${total}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full text-white py-4 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-3 text-lg"
                style={{ backgroundColor: '#749bc2' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4682a9'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#749bc2'}
              >
                <CreditCard className="h-6 w-6" />
                <span>Proceed to Checkout</span>
              </button>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                  Secure checkout powered by industry-leading encryption
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;