import React from "react";
import { Link } from "react-router-dom";

export const ItemCard = ({ item }) => {

  return (
    <div className="card shadow-lg rounded-lg p-2 w-100 mb-3">
      <img src={item.img} alt={item.nombre} className="card-img-top w-full h-32 object-cover mb-2" />
      <h4 className="card-title text-md font-semibold">{item.nombre}</h4>
      <p className="card-text text-gray-600 mb-1">${item.precio}</p>
      <Link className="btn btn-primary btn-sm" to={`/detail/${item.id}`}>
        Detalles
      </Link>
    </div>
  );
}