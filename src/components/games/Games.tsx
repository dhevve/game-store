import React, {FC, useState} from 'react'
import style from "./game-card/cardGame.module.scss"
import CardGame from './game-card/CardGame'
import SearchInput from '../search/SearchInput'
import {games} from "../../data/data"
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Button from '../UI/Button'
import Popup from './Popup'
import Sort from './Sort'


const Games: FC = () => {
  const dispatch = useDispatch()
  const [gamesList, setGamesList] = useState([...games])
  const {auth} = useTypedSelector(state => state.auth)
  const [value, setValue] = useState<string>("")
  const [cost, setCost] = useState<boolean>()
  const [year, setYear] = useState<boolean>()
  const [popup, setPopup] = useState<boolean>(false)

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

  const showPopup = () => {
    setPopup(!popup)
  }

  return (
    <>
    <div className={style.inputGrid}>
      <SearchInput value={value} onChangeText={onChangeText}/>
      <div className={style.buttonWrapper}>
        <Sort cost={cost} year={year} filtred={filtred} setGamesList={setGamesList} setCost={setCost} setYear={setYear}/>
        <Button onClick={showPopup}>genre</Button>
        {popup && 
          <Popup setGamesList={setGamesList} setPopup={setPopup}/>
        }
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