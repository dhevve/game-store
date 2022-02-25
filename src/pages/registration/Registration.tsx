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
      {auth ? <h1>reg</h1> : <h1>no bitches?</h1>}
    </>
  )
}

export default Registration