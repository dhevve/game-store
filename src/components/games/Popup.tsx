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

    const rp = () => {
      setGamesList(games.filter((t) => t.genre === "RP"))
      setPopup(false)
    }

    const sandbox = () => {
      setGamesList(games.filter((t) => t.genre === "sandbox"))
      setPopup(false)
    }
  
    const all = () => {
      setGamesList(games)
      setPopup(false)
    }

  return (
    <div className={style.popup}>
      <div className={style.popBtn}>
          <Button onClick={all}>all</Button>
      </div>
      <div className={style.popBtn}>
          <Button onClick={rpg}>rpg</Button>
      </div>
      <div className={style.popBtn}>
          <Button onClick={shooter}>shooter</Button>
      </div>
      <div className={style.popBtn}>
          <Button onClick={br}>battle-royale</Button>
      </div>
      <div className={style.popBtn}>
          <Button onClick={rp}>role-play</Button>
      </div>
      <div className={style.popBtn}>
          <Button onClick={sandbox}>sandbox</Button>
      </div>
    </div>
  )
}

export default Popup