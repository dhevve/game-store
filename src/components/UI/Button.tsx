import React, { FC } from 'react'
import style from "./button.module.scss"

interface ButtonProps {
  onClick: () => void
}

const Button: FC<ButtonProps> = ({children, onClick}) => {
  return (
    <button onClick={onClick} className={style.button}>{children}</button>
  )
}

export default Button