
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'; 

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <article className="item-detail-container">
      <header>
        <h2>{name}</h2>
      </header>
      <div className="image-container">
        <img src={img} alt={name} />
      </div>
      <section>
        <p>Categoria: {category}</p>
        <p>Descripcion: {description}</p>
        <p>Precio: ${price}</p>
        <p>Stock Disponible: {stock}</p>
      </section>
      <footer>
        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad sumada', quantity)} />
        <a href={`/item/${id}`} className="more-info-link">
          Más info
        </a>
      </footer>
    </article>
  );
};

export default ItemDetail;
