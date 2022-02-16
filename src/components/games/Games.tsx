import React, {FC} from 'react'
import style from "./game-card/cardGame.module.scss"
import {games} from "../../data/data"
import Search from '../search/Search'

const Games: FC = () => {
 
  return (
    <>
      <div className={style.cards}>
          <Search games={games}/>
      </div>
    </>
  )
}

export default Games