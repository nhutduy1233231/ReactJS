import '@/modules/auth/style/authCommonStyle.css'
import '@/modules/auth/style/loginStyle.css'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { iconUltil } from '@/helpers/iconUltil'
import { AUTH_SIDE_MAP } from '@/modules/auth/router/authSideMap'
import { Link } from 'react-router-dom'

export const LonginContainer = () => {
  return (
    <div className='login__container'>
      <div className='h-[25vh]'></div>
      <div className='auth__box'>
        <div className='login__icon__group'>
          <div className='login__icon'>{iconUltil.user}</div>
        </div>
        <h2 className='auth__title'>Login Form</h2>
        <div className='auth__input-group'>
          <Input type='email' placeholder='Email' />
          <Input type='password' placeholder='Password' />
          <div className='login__forgot-password'>
            <a href='#'>Forgot Password </a>/<Link to={AUTH_SIDE_MAP.register}>Register</Link>
          </div>
        </div>
        <Button className='auth__btn--submit'>Login</Button>
      </div>
    </div>
  )
}
