import React, { FC } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Button from '../UI/Button'
import style from "./shoppingBasketCard.module.scss"

interface ShoppingBasketCartProps {
  id: number,
  name: string,
  price: number | string,
  remove: (id: number) => void
}

const ShoppingBasketCart: FC<ShoppingBasketCartProps> = ({name, price, remove, id}) => {
  return (
            <div className={style.mainContainer}>
              <div className={style.cards}>
                <div className={style.card}>
                  <div className={style.card__icon}><i className="fas fa-bolt"></i></div>
                  <p className={style.card__exit}><i className="fas fa-times"></i></p>
                  <h2 className={style.card__title}>{name}</h2>
                  <p className={style.card__apply}>
                    {typeof price === "number" ? <a className={style.card__link} href="#">{price}$<i className="fas fa-arrow-right"></i></a> : <a className={style.card__link} href="#">{price}<i className="fas fa-arrow-right"></i></a>}
                  </p>
                  <div>
                    <Button onClick={() => remove(id)}>Delete</Button>
                  </div>
                </div>
                </div>
            </div>
  )
}

export default ShoppingBasketCart