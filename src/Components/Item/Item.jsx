

import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'; 

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article>
      <header>
        <h2 className='ti'>{name}</h2>
      </header>
      <div>
        <img src={img} alt={name} />
      </div>
      <div className="price-stock-container">
        <p>Stock Disponible: {stock}</p>
        <p>Precio: ${price}</p>
      </div>
      <footer>
        <Link to={`/item/${id}`}>Mas info</Link>
      </footer>
    </article>
  );
};

export default Item;
