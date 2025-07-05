import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedAgents from './components/FeaturedAgents';
import Marketplace from './components/Marketplace';
import Footer from './components/Footer';
import AgentDetail from './components/AgentDetail';
import SellAgent from './components/SellAgent';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Login from './components/Login';
import { Agent } from './types/agent';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'marketplace' | 'sell' | 'agent' | 'cart' | 'profile' | 'login'>('home');
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState<Agent[]>([]);

  const navigateToAgent = (agent: Agent) => {
    setSelectedAgent(agent);
    setCurrentPage('agent');
  };

  const navigateToPage = (page: 'home' | 'marketplace' | 'sell' | 'cart' | 'profile' | 'login') => {
    if ((page === 'sell' || page === 'profile') && !isLoggedIn) {
      setCurrentPage('login');
      return;
    }
    setCurrentPage(page);
    setSelectedAgent(null);
  };

  const addToCart = (agent: Agent) => {
    if (!cartItems.find(item => item.id === agent.id)) {
      setCartItems([...cartItems, agent]);
    }
  };

  const removeFromCart = (agentId: string) => {
    setCartItems(cartItems.filter(item => item.id !== agentId));
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentPage={currentPage} 
        onNavigate={navigateToPage} 
        cartItemCount={cartItems.length}
        isLoggedIn={isLoggedIn}
      />
      
      {currentPage === 'home' && (
        <>
          <Hero onNavigate={navigateToPage} />
          <FeaturedAgents onAgentSelect={navigateToAgent} />
        </>
      )}
      
      {currentPage === 'marketplace' && (
        <Marketplace onAgentSelect={navigateToAgent} />
      )}
      
      {currentPage === 'sell' && (
        <SellAgent onNavigate={navigateToPage} />
      )}
      
      {currentPage === 'agent' && selectedAgent && (
        <AgentDetail 
          agent={selectedAgent} 
          onBack={() => navigateToPage('marketplace')}
          onAddToCart={addToCart}
        />
      )}

      {currentPage === 'cart' && (
        <Cart 
          items={cartItems}
          onRemoveItem={removeFromCart}
          onNavigate={navigateToPage}
        />
      )}

      {currentPage === 'profile' && (
        <Profile onNavigate={navigateToPage} />
      )}

      {currentPage === 'login' && (
        <Login onLogin={handleLogin} onNavigate={navigateToPage} />
      )}
      
      <Footer />
    </div>
  );
}

export default App;