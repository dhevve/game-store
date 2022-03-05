import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import ShoppingBasketCart from '../../components/shoppingBasketCart/ShoppingBasketCart'
import { useDispatch } from 'react-redux'

const ShoppingBasket = () => {
  const {basket} = useTypedSelector(state => state.basket)
  const dispatch = useDispatch();

  const removeBasket = (id: number) => {
    dispatch({ type: "REMOVE_GAME", payload: id });
  }

  return (
    <div>
    {basket.length === 0 ? <h1>Basket is empty</h1> : <div>
      {basket.map(game => (
        <div className="container" key={game.id}>
          <ShoppingBasketCart id={game.id} remove={removeBasket} name={game.name} price={game.price}/>
        </div>
      ))}
      </div>
    }
    </div>
  )
}

export default ShoppingBasket