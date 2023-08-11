import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";


export const CartView = () => {
    const { cart, totalCompra, vaciarCarrito, removerDelCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        
        return (
            <div className="bg-light p-4 rounded-md shadow">
                <h2 className="text-2xl font-semibold mb-4">Tu carrito está vacío</h2>
                <hr className="my-4" />
                <Link to="/" className="btn btn-success">
                    Ir a comprar
                </Link>
            </div>
        );  
    }

    return (
    
        <div className="bg-light p-4 rounded-md shadow">
            <h2 className="text-2xl font-semibold mb-4">Tu compra</h2>
            <hr className="my-4" />

            {
            
            cart.map((item) => (
            
            <div key={item.id} className="mb-4">
                <h3 className="text-lg font-semibold mb-2">{item.nombre}</h3>
                <img src={item.img} alt={item.nombre} className="w-100 h-auto mb-2" style={{ maxWidth: '200px', maxHeight: '200px' }} />
                <p className="mb-1">Precio: ${item.precio * item.cantidad}</p>
                <p className="mb-2">Cantidad: {item.cantidad}</p>
                <button
                onClick={() => removerDelCarrito(item.id)}
                className="btn btn-danger btn-sm"
                >
                    <i className="bi bi-trash"></i> Eliminar
                </button>
                <hr className="my-2" />
            </div>
            ))
            }

            <div>
                <h4 className="text-2xl font-semibold mb-4">Total: ${totalCompra()}</h4>
                <button
                    onClick={vaciarCarrito}
                    className="btn btn-danger mr-2"
                >
                    Vaciar carrito
                </button>
                <Link to="/checkout" className="btn btn-success">
                    Terminar mi compra
                </Link>
            </div>
        </div>
    );
}   