import React from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../components/UI/Button';
import { useTypedSelector } from '../../hooks/useTypedSelector'

function Profile() {
    const dispatch = useDispatch();
    const {users} = useTypedSelector(state => state.register)
  
      const logout = () => {
        dispatch({ type: "LOGOUT", payload: false });
      }
  
    return (
      <div className='container'>
        <h1>{users[0].name}</h1>
        <Button onClick={logout}>logout</Button>
      </div>
    )
}

export default Profile