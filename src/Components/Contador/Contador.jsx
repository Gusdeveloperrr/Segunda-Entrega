import { useState } from "react";
import "./Contador.css"; 

const Contador = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);

    const sumarContador = () => {
        if(contador < stock ){
            setContador(contador + 1);
        }
    }

    const restarContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <div className="contador-container">
            <button className="contador-btn" onClick={restarContador}> - </button>
            <p className="contador-value"> {contador} </p>
            <button className="contador-btn" onClick={sumarContador}> + </button>

            <button className="agregar-btn" onClick={() => funcionAgregar(contador)}> Agregar al Carrito </button>
        </div>
    );
}

export default Contador;
