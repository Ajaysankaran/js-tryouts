import { Input } from '@/components/styled-components'
import { ArrowLeft, ChevronLeft, JoinLeft, SwipeLeft } from '@mui/icons-material'
import { useRouter } from 'next/router'
import React, { ComponentProps, useReducer } from 'react'

interface UserState {
  firstName: string
  lastName?: string
  userName: string
  email: string
  password: string
  nationality: string
}

enum UserActionsType {
  ADD_USER = "ADD_USER"
}

interface UserAction {
  type: UserActionsType
  payload: UserState
}

function reducer(state?: UserState, action?: UserAction) {
  if (action?.type === UserActionsType.ADD_USER) {
    console.log("dispatching")
    return {
      ...state, ...action.payload
    }
  }
  throw new Error('Unknown action.')
}

const RegisterUser = () => {

  const [state, dispatch] = useReducer(reducer, { firstName: "", userName: "", email: "", password: "", nationality: "" });

  const onInputChange = (key: string, value: string) => {
    dispatch()
    console.log(state)
  }

  const router = useRouter();

  return (
    <div className='flex items-center justify-center h-screen p-5 bg-black'>
      <div className='absolute m-3 left-0 top-0 '><button onClick={() => router.back()}><ChevronLeft /> Back</button></div>
      <div className="grid grid-cols-2 gap-5 shadow-2xl shadow-rose-900 p-5 border border-rose-950 rounded-md bg-black">
        <div className='col-span-2 text-3xl flex font-bold justify-center py-4'>Register User</div>
        <div className="grid grid-rows-1 gap-3">
          <div>
            <label className='block'>First Name</label>
            <Input placeholder='First Name' onBlur={e => onInputChange('firstName', e.target.value)} />
          </div>
          <div>
            <label className='block'>Last Name</label>
            <Input placeholder='Last Name' />
          </div>
          <div>
            <label className='block'>Email</label>
            <Input placeholder='Email' />
          </div>
          <div>
            <label className='block'>Password</label>
            <Input placeholder='Password' />
          </div>

        </div>
        <div className='grid grid-rows-1 gap-3'>
          <div>
            <label className='block'>User Name</label>
            <Input placeholder='User Name' />
          </div>
          <div>
            <label className='block'>Nationality</label>
            <select className='flex'>
              <option>India</option>
            </select>
          </div>
        </div>
        <div className='col-span-2 mt-3 flex'>
          <button className='p-3 bg-red-950'>Register</button>
        </div>
      </div>
    </div>
  )
}

export default RegisterUser