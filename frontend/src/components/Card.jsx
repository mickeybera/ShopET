import React from 'react';
import { Link } from 'react-router-dom';

function Card({ item }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 duration-300 cursor-pointer">
      <img src={item.image} alt={item.name} className="h-48 w-full object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
        <p className="text-gray-600 mt-2">{item.description}</p>
        <p className="text-yellow-500 font-bold mt-4">${item.price}</p>
        <Link to={'/cart'}>
          <button className="mt-6 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-400 transition duration-300">
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Card;

