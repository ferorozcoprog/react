import React from 'react';

export const ProductCard = ({ name, price, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-64">
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover mb-4" />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">${price}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">Add to Cart</button>
    </div>
  );
};