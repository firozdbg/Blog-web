import React from 'react'
import { useDispatch } from 'react-redux';
import authService, { AuthService } from '../../appwrite/auth';
import { logout } from '../../store/authSlice';
function LogOutButton() {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
    })
  }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={logOutHandler}>LogOut</button>
  )
}

export default LogOutButton