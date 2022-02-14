import React, { FC } from 'react'
import style from "./cardGame.module.scss" 

interface CardGameProps {
    name: string,
    price: number
}

const CardGame: FC<CardGameProps> = ({name, price}) => {
  return (

      <div className={style.cardGridSpace}>
          <div className={style.card}>
            <h1>{name}</h1>
            <p>{price}</p>
          </div>
      </div>

  )
}

export default CardGame