import React, {FC, useState} from 'react'
import style from "./game-card/cardGame.module.scss"
import CardGame from './game-card/CardGame'
import SearchInput from '../search/SearchInput'
import {games} from "../../data/data"
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Button from '../UI/Button'


const Games: FC = () => {
  const {auth} = useTypedSelector(state => state.auth)
  const dispatch = useDispatch()
  const [gamesList, setGamesList] = useState([...games])
  const [value, setValue] = useState<string>("")
  const [cost, setCost] = useState<boolean>()
  const [year, setYear] = useState<boolean>()

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

  const filtred = gamesList.filter(game => {
      return game.name.toLowerCase().includes(value.toLowerCase());
  })

  const sortCost = () => {
    if(cost === true) {
      setGamesList(filtred.sort((a, b) => a.price > b.price ? 1 : -1))
      setCost(false)
    } else {
      setGamesList(filtred.sort((a, b) => a.price < b.price ? 1 : -1))
      setCost(true)
    }
  }
  const sortYear = () => {
    if(year === true) {
      setGamesList(filtred.sort((a, b) => a.year > b.year ? 1 : -1))
      setYear(false)
    } else {
      setGamesList(filtred.sort((a, b) => a.year < b.year ? 1 : -1))
      setYear(true)
    }
  }

  return (
    <>
    <div className={style.inputGrid}>
      <SearchInput value={value} onChangeText={onChangeText}/>
      <div className={style.buttonWrapper}>
        <Button onClick={sortCost}>{cost ? "cost↓" : "cost↑"}</Button>
        <Button onClick={sortYear}>{year ? "year↓" : "year↑"}</Button>
      </div>
    </div>
      <div className={style.cards}>
         {filtred.map((game) => (
              <CardGame addBasket={addBasket} key={game.name} name={game.name} price={game.price} img={game.img}/>
          ))}
      </div>
    </>
  )
}

export default Games