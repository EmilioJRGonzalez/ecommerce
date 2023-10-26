import cart from '../assets/shopping-cart-304843_640.png'

export const CartWidget = () => {
    return (
        <>
            <img src={cart} alt="Carrito" width={40} />
            <span>2</span>
        </>
    )
}