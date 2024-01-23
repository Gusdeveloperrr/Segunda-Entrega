import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css"; 

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2>No hay productos en el carrito! </h2>
                <Link to="/" className="link-button"> Ver Productos </Link>
            </>
        )
    }

    return (
        <div>
            <div className="cart-item-container">
                {carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)}
            </div>
            <h3>Total: $ {total} </h3>
            <h3>Cantidad Total: {cantidadTotal} </h3>
            <div className="button-container">
                <button onClick={() => vaciarCarrito()}> Vaciar Carrito</button>
                <Link to="/checkout" className="finish-checkout-link"> Finalizar Compra </Link>
            </div>
        </div>
    )
}

export default Cart;
