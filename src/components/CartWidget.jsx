import { Link } from 'react-router-dom'
import cart from '../assets/shopping-cart-304843_640.png'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

export const CartWidget = () => {
    const { items } = useContext(CartContext);

    const total = items.reduce((count, item) => count + item.quantity, 0)

    return (
        <Link to="/cart">
            <img src={cart} alt="Carrito" width={40} />
            <span>{total} </span>
        </Link>
    )
}