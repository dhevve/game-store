import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom';
import style from "./header.module.scss";
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Menu from './Menu';

const Header: FC = () => {
  const {auth} = useTypedSelector(state => state.auth)
  const [show, setShow] = useState<boolean>(false)

  const burger = () => {
     setShow(true);
  }

  const showHandler = () => {
    setShow(false)
  }

  return (
    <header className={style.header}>
        <div className="container">
          <div className={style.content}>
                <div className={style.logo}>
                  <a href="#!" className={style.logo}>
                      Logo
                  </a>
                </div>
                <nav>
                    <ul className={style.content}>
                        <Link className={style.item} to="/">Home</Link>
                        <Link className={style.item} to="/basket">Shopping basket</Link>
                        {auth ? <Link className={style.item} to="/profile">Profile</Link> : <Link className={style.item} to="/registration">Registration</Link>}
                        <div className={style.burger}>
                            <div className={style.burgerBtn} onClick={burger}><span /></div>
                        </div>
                        {show &&
                          <Menu showHandler={showHandler} setShow={setShow} auth={auth}/>
                        }
                    </ul>
                </nav>
          </div>
        </div>
    </header>
  )
}

export default Header