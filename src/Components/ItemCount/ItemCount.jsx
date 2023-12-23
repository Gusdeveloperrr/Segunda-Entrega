
import React, { useState } from 'react';
import './ItemCount.css'; 

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container">
      <div className="buttons-container">
        <button className="button decrement" onClick={decrement}>-</button>
        <h3 className="quantity">{quantity}</h3>
        <button className="button increment" onClick={increment}>+</button>

      </div>
      <div>
        <button
          className="addToCart"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
