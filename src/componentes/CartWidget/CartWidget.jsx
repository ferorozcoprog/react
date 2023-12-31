import { useContext } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'



export const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return (
        <Link to="/cart" className='text-black text-3xl cursor-pointer flex gap-1'>
            <FaShoppingCart />
            <span>{totalCantidad()}</span>
        </Link>
    )
}