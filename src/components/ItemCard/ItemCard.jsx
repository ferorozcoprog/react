
export const ItemCard = ({item}) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4 w-64">
        <img src={item.img} alt={item.nombre} className="w-full h-40 object-cover mb-4" />
        <h3 className="text-xl font-semibold">{item.nombre}</h3>
        <p className="text-gray-600">${item.precio}</p>
        <button className="mt-4 bg-blue-500 text-black px-4 py-2 rounded-lg">Agregar al Carrito</button>
     </div>
    );
  };