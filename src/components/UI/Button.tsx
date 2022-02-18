import React, { FC } from 'react'
import style from "./button.module.scss"


const Button: FC = ({children}) => {
  return (
    <button className={style.button}>{children}</button>
  )
}

export default Button