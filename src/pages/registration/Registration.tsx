import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import SearchInput from '../../components/search/SearchInput'
import Button from '../../components/UI/Button'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { IUsers } from '../../types/Arr'
import style from "./registration.module.scss"
/* import { users } from '../../data/users'
import { IUsers } from '../../types/Arr' */

const user = {id: 1, name: "admin", password: "admin"}

const Registration = () => {
  const dispatch = useDispatch();
  const {users} = useTypedSelector(state => state.register)
  const [name, setName] = useState<string>("")
  const [password, setPassword] = useState<string>("")


    const login = () => {
      const newUser: IUsers = {
        name: name,
        password: password
      }
      if(name.includes(users[0].name) && password.includes(users[0].password))

        dispatch({ type: "LOGIN", payload: true });
        dispatch({ type: "ADD_USER", payload: newUser });
    }

    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    }

    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    }

  return (
    <div className='container'>
      <div className={style.registration}>
          <h1>Login</h1>
          <h3>Name</h3>

          <SearchInput value={name} onChangeText={changeName}/>

          <h3>Password</h3>
          
          <SearchInput value={password} onChangeText={changePassword}/>
          <Button onClick={login}>login</Button>
      </div>
    </div>
  )
}

export default Registration