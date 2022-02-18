import React from 'react'
import { useSelector } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const ShoppingBasket = () => {
  const {basket} = useTypedSelector(state => state.basket)
  return (
    <>
      {basket.map(game => (
        <li key={game.id}>{game.name} {game.price}$</li>
      ))}
    </>
  )
}

export default ShoppingBasket