import React, { FC } from 'react'
import Button from '../../UI/Button'
import style from "./cardGame.module.scss" 

interface CardGameProps {
    name: string,
    price: number,
    img?: string,
    addBasket: (name: any, price: number) => void
}

const CardGame: FC<CardGameProps> = ({name, price, img, addBasket}) => {
  return (
      <div className={style.cardGridSpace}>
          <a className={style.card} style={{backgroundImage: img}}>

              <div>
                <h1>{name}</h1>
                <button onClick={() => addBasket(name, price)}>buy</button>
              </div>
              <p>{price}$</p>

          </a>
      </div>

  )
}

export default CardGame