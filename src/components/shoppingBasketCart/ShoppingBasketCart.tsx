import React, { FC } from 'react'
import style from "./shoppingBasketCard.module.scss"

interface ShoppingBasketCartProps {
  name: string,
  price: number | string
}

const ShoppingBasketCart: FC<ShoppingBasketCartProps> = ({name, price}) => {
  return (
            <div className={style.mainContainer}>

              <div className={style.cards}>
                <div className={style.card}>
                  <div className={style.card__icon}><i className="fas fa-bolt"></i></div>
                  <p className={style.card__exit}><i className="fas fa-times"></i></p>
                  <h2 className={style.card__title}>{name}</h2>
                  <p className={style.card__apply}>
                    <a className={style.card__link} href="#">{price}<i className="fas fa-arrow-right"></i></a>
                  </p>
                </div>
                </div>
            </div>
  )
}

export default ShoppingBasketCart