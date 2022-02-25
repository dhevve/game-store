import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'

function Profile() {
    const dispatch = useDispatch();
    const {auth} = useTypedSelector(state => state.auth)
  
      const loginout = () => {
        dispatch({ type: "LOGOUT", payload: false });
      }
  
    return (
      <>
        <button onClick={loginout}>login</button>
      </>
    )
}

export default Profile