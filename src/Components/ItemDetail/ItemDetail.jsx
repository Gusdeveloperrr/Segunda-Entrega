import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Contador from '../Contador/Contador';
import { CarritoContext } from '../../context/CarritoContext';
import './ItemDetail.css'; 

const ItemDetail = ({ id, nombre, stock, precio, img }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarAlCarrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
  };

  return (
    <div className='item-detail-container'>
      <header>{nombre}</header>
      <div className='image-container'>
        <img src={img} alt={nombre} />
      </div>
      <section>
        <p>Precio: {precio}</p>
        <p>ID: {id}</p>
       
      </section>
      <footer>
        {agregarCantidad > 0 ? (
          <Link to="/cart" className='more-info-link'>
            Terminar Compra
          </Link>
        ) : (
          <Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
        )}
      </footer>
    </div>
  );
};

export default ItemDetail;
