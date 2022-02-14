import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import style from "./header.module.scss";

const Header: FC = () => {
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
                    </ul>
                </nav>
          </div>
        </div>
    </header>
  )
}

export default Header