import React, {useContext}from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {
  let {loginUser} = useContext(AuthContext)
  return (
    <div>
        <form onSubmit={loginUser}>
            <input className='border-2 rounded'type='text' name='username' placeholder='Enter your username'/>
            <input className='border-2 rounded' type='password' name='password' placeholder='Enter your password'/>
            <input className='border-2 rounded bg-rose-500 'type='submit'/>
        </form>
    </div>
  )
}

export default LoginPage