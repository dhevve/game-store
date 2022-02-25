import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const Registration = () => {
  const dispatch = useDispatch();
  const {auth} = useTypedSelector(state => state.auth)

    const login = () => {
      dispatch({ type: "LOGIN", payload: true });
    }

  return (
    <>
      <button onClick={login}>login</button>
      {auth ? <h1>reg</h1> : <img src='https://i.kym-cdn.com/entries/icons/mobile/000/039/393/cover2.jpg'/>}
    </>
  )
}

export default Registration