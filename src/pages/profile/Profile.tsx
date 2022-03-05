import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'

function Profile() {
    const dispatch = useDispatch();
    const {users} = useTypedSelector(state => state.register)
  
      const logout = () => {
        dispatch({ type: "LOGOUT", payload: false });
      }
  
    return (
      <div className='container'>
        <h1>{users.map(user => user.name)}</h1>
        <button onClick={logout}>logout</button>
      </div>
    )
}

export default Profile