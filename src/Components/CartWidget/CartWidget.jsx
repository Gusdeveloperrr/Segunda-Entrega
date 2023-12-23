import React from 'react'
import "./CartWidget.css"

const CartWidget = () => {
    const imgCar = "https://thumbs.dreamstime.com/b/shopping-cart-icon-vector-logo-137282150.jpg"
  return (
    <div>
        <img className='imgCar' src= {imgCar} alt="Carrito de compras" />
        <strong>0</strong>
      
    </div>
  )
}

export default CartWidget