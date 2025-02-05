import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to EventEats</h1>
      <p className="text-lg mb-6">Delicious catering solutions for all your events.</p>
      <Link to="/menu" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Explore Menu
      </Link>
    </div>
  );
};

export default HomePage;
