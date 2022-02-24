import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import ShoppingBasketCart from '../../components/shoppingBasketCart/ShoppingBasketCart'

const ShoppingBasket = () => {
  const {basket} = useTypedSelector(state => state.basket)
  return (
    <>
      {basket.map(game => (
        <div className="container" key={game.id}>
          <ShoppingBasketCart name={game.name} price={game.price}/>
        </div>
      ))}
    </>
  )
}

export default ShoppingBasket