import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MenuPage = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get('/api/menus');
        setMenus(response.data);
      } catch (error) {
        alert('Failed to fetch menus!');
      }
    };
    fetchMenus();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Our Menus</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menus.map((menu) => (
          <div key={menu._id} className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">{menu.name}</h3>
            <p>{menu.description}</p>
            <p className="mt-4 text-xl font-semibold">Price: ${menu.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
