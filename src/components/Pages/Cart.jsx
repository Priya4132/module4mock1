import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cart=useSelector((state)=>state.cart.items);
    console.log("item in the cart",cart)
  return (
    <div>
      cart page
    </div>
  )
}

export default Cart
