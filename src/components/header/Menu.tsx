import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import style from "./header.module.scss"

interface MenuProps {
    showHandler: () => void,
    setShow: any, 
    auth: boolean
}

const Menu: FC<MenuProps> = ({showHandler, setShow, auth}) => {
  return (
    <div className={style.menu}>
        <div className={style.burgerBtn} onClick={showHandler}><span /></div>
        <Link className={style.itemBurger} onClick={showHandler} to="/">Home</Link>
        <Link className={style.itemBurger}  onClick={showHandler} to="/basket">Shopping basket</Link>
        {auth ? <Link className={style.itemBurger}  onClick={showHandler} to="/profile">Profile</Link> : <Link className={style.itemBurger}  onClick={() => setShow(false)} to="/registration">Registration</Link>}
    </div> 
  )
}

export default Menu