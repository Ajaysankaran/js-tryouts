import { ChevronLeft } from '@mui/icons-material'
import { useRouter } from 'next/router'
import React from 'react'

const Login = () => {

  const router = useRouter()

  const onSignup = () => {
    router.push('login/register-user');
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='absolute m-3 left-0 top-0 '><button onClick={() => router.back()}><ChevronLeft /> Back</button></div>

      <div className="grid grid-rows-1 gap-3">
        <h1>Login</h1>
        <div>
          <input placeholder='username' />
        </div>
        <div>
          <input placeholder='password' />
        </div>
        <div className='flex justify-between'>
          <button className='p-3 bg-rose-950 rounded-lg'>Login</button>
          <button className='p-3 bg-rose-950 rounded-lg' onClick={onSignup}>Signup</button>
        </div>
      </div>
    </div>
  )
}

export default Login