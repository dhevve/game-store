import React, {FC, useState} from 'react'
import style from "./game-card/cardGame.module.scss"
import CardGame from './game-card/CardGame'
import SearchInput from '../search/SearchInput'
import {games} from "../../data/data"
import { useDispatch } from 'react-redux'


const Games: FC = () => {
  const [value, setValue] = useState<string>("")
  const dispatch = useDispatch()


  const addBasket = (name: any, price: number) => {
    const newTodo = {
      id: Date.now(),
      name: name,
      price: price
    };
    dispatch({ type: "ADD_GAME", payload: newTodo });
  }

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const filtred = games.filter(game => {
      return game.name.toLowerCase().includes(value.toLowerCase());
  })

  return (
    <>
      <SearchInput value={value} onChangeText={onChangeText}/>
      <div className={style.cards}>
             {filtred.map((game) => (
                <CardGame addBasket={addBasket} key={game.name} name={game.name} price={game.price} img={game.img}/>
            ))}
      </div>
    </>
  )
}

export default Games