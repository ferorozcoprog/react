import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { ItemCount} from "../../componentes/ItemCount/ItemCount"


export const ItemDetail = ({item}) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }

    return (
        <div className="card shadow-lg rounded-lg p-2 w-10 mb-4 mr-4">
            <img src={item.img} alt={item.nombre} className="w-full h-64 object-cover rounded-md mb-4" />
                <h2 className="text-2xl font-semibold mb-2">{item.nombre}</h2>
                <p className="text-gray-700 mb-4">{item.descripcion}</p>
                <p className="text-xl font-semibold text-gray-900">${item.precio}</p>

            {isInCart(item.id) ? (
                <Link className="btn btn-success mt-4" to="/cart">
                    Ir al Carrito
                </Link>
            ) : (
            <ItemCount
                max={item.stock}
                cantidad={cantidad}
                setCantidad={setCantidad}
                agregar={handleAgregar}
            />
      )}
        </div>
  );
};