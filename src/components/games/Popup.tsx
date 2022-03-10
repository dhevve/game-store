import React, { FC } from 'react'
import Button from '../UI/Button'
import style from "./game-card/cardGame.module.scss"
import {games} from "../../data/data"

interface PopupProps {
    setGamesList: any,
    setPopup: any
}

const Popup: FC<PopupProps> = ({setGamesList, setPopup}) => {
    const rpg = () => {
        setGamesList(games.filter((t) => t.genre === "RPG"))
        setPopup(false)
    }
  
    const shooter = () => {
        setGamesList(games.filter((t) => t.genre === "shooter"))
        setPopup(false)
    }
  
    const br = () => {
        setGamesList(games.filter((t) => t.genre === "BR"))
        setPopup(false)
    }
  
    const all = () => {
      setGamesList(games)
      setPopup(false)
    }

  return (
    <div className={style.popup}>
          <Button onClick={all}>all</Button>
          <Button onClick={rpg}>rpg</Button>
          <Button onClick={shooter}>shooter</Button>
          <Button onClick={br}>BR</Button>
    </div>
  )
}

export default Popup