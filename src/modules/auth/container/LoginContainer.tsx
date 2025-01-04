import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { iconUltil } from '@/helpers/iconUltil'
import '@/modules/auth/style/loginStyle.css'

export const LonginContainer = () => {
  return (
    <div className='login__container'>
      <div className='h-[25vh]'></div>
      <div className='login__box'>
        <div className='login__icon__group'>
          <div className='login__icon'>{iconUltil.user}</div>
        </div>
        <h2 className='login__title'>Login Form</h2>
        <div className='login__input__group'>
          <Input type='email' placeholder='Email' />
          <Input type='password' placeholder='Password' />
          <div className='login__forgot-password'>
            <a href='#'>Forgot Password </a>/<a href='#2'> Register</a>
          </div>
        </div>
        <Button className='login__btn--submit'>Login</Button>
      </div>
    </div>
  )
}
