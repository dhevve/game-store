import React, {FC, useState} from 'react'
import style from "./game-card/cardGame.module.scss"
import CardGame from './game-card/CardGame'
import SearchInput from '../search/SearchInput'
import {games} from "../../data/data"
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'


const Games: FC = () => {
  const [value, setValue] = useState<string>("")
  const [gg, setGG] = useState<boolean>(false)
  const {auth} = useTypedSelector(state => state.auth)
  const dispatch = useDispatch()


  const addBasket = (name: any, price: number | string) => {
    const newTodo = {
      id: Date.now(),
      name: name,
      price: price
    };
    if (auth === true) {
      dispatch({ type: "ADD_GAME", payload: newTodo });
    } else {
      alert("Register")
    }
  }

  const changer = () => {
    setGG(!gg)
  }

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const filtred = games.filter(game => {
      return game.name.toLowerCase().includes(value.toLowerCase());
  })

  const cost = [...games].sort((a, b) => a.price > b.price ? 1 : -1)

  return (
    <>
      <SearchInput value={value} onChangeText={onChangeText}/>
      <div className={style.cards}>
        {gg ? <>{cost.map((game) => (
          <CardGame addBasket={addBasket} key={game.name} name={game.name} price={game.price} img={game.img}/>
        ))}</> :
         <>{filtred.map((game) => (
                <CardGame addBasket={addBasket} key={game.name} name={game.name} price={game.price} img={game.img}/>
            ))}</>}
            
      </div>
      <button onClick={changer}>click</button>
    </>
  )
}

export default Games