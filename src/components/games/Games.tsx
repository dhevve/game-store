import React, { FC, useState } from 'react'
import {IArr} from "../../types/Arr"
import Search from '../search/Search'
import CardGame from './game-card/CardGame'
import style from "./game-card/cardGame.module.scss"

const Games: FC = () => {
    const [value, setValue] = useState<string>("")
    const [games] = useState<IArr[]>([
        {name: "PUBG", price: 30},
        {name: "The witcher 3", price: 30},
        {name: "Metro 2033", price: 30},
    ])

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    }

    const filtred = games.filter(game => {
      return game.name.toLowerCase().includes(value.toLowerCase());
    })
 
  return (
    <>
      <Search value={value} onChangeText={onChangeText}/>
      <div className={style.cards}>
          {filtred.map((game) => (
            <CardGame key={game.name} name={game.name} price={game.price}/>
          ))}
      </div>
    </>
  )
}

export default Games