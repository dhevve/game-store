import React, {FC, useState} from 'react'
import style from "./game-card/cardGame.module.scss"
import CardGame from './game-card/CardGame'
import SearchInput from '../search/SearchInput'
import {games} from "../../data/data"
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Button from '../UI/Button'


const Games: FC = () => {
  const [value, setValue] = useState<string>("")
  const [sort, setSort] = useState<boolean>()
  const {auth} = useTypedSelector(state => state.auth)
  const dispatch = useDispatch()

  /*
    взять массив, переделать его под мои нужды, а затем изменить его в стейте
  */

  const addBasket = (name: any, price: number | string) => {
    const newGame = {
      id: Date.now(),
      name: name,
      price: price
    };
    if (auth === true) {
      dispatch({ type: "ADD_GAME", payload: newGame });
    } else {
      alert("Register")
    }
  }

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const filtred = games.filter(game => {
      return game.name.toLowerCase().includes(value.toLowerCase());
  })

  const sortCost = () => {
    setSort(!sort)
  }
  

  const cost = [...filtred].sort((a, b) => a.price > b.price ? 1 : -1)

  const costB = [...filtred].sort((a, b) => a.price < b.price ? 1 : -1)

  return (
    <>
    <div className={style.inputGrid}>
      <SearchInput value={value} onChangeText={onChangeText}/>
      <div className={style.buttonWrapper}>
        <Button onClick={sortCost}>{sort ? "price↑" : "price↓"}</Button>
      </div>
    </div>
      <div className={style.cards}>
        { sort ? 
          <>
          {cost.map((game) => (
              <CardGame addBasket={addBasket} key={game.name} name={game.name} price={game.price} img={game.img}/>
          ))}</> :
           <>{costB.map((game) => (
            <CardGame addBasket={addBasket} key={game.name} name={game.name} price={game.price} img={game.img}/>
          ))}</>
      }
      </div>
    </>
  )
}

export default Games