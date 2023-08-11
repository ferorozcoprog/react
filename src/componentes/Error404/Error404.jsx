import React from 'react';

export const Error404 = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl text-gray-600 mt-4">Página no encontrada</p>
        <p className="text-gray-500 mt-2">La página que estás buscando no existe.</p>
        <a href="/" className="text-blue-500 hover:underline mt-4 block">Volver a la página de inicio</a>
      </div>
    </div>
  );
};