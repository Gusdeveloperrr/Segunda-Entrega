import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import './CartWidget.css'; 

const CartWidget = () => {
    const { cantidadTotal } = useContext(CarritoContext);

    return (
        <div>
            <Link to="/cart">
                <img className="carrito" src="https://thumbs.dreamstime.com/b/shopping-cart-icon-vector-logo-137282150.jpg" alt="Carrito" />
                {cantidadTotal > 0 && <strong> {cantidadTotal} </strong>}
            </Link>
        </div>
    )
}

export default CartWidget;
