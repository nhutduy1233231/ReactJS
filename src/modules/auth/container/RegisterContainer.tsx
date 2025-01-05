import { Input } from '@/components/ui/input'

export const RegisterContainer = () => {
  return (
    <div className='register__container'>
      <div className='h-[25vh]'></div>
      <div className='auth__box'>
        <h2 className='auth__title'>Register Form</h2>
        <div className='auth__input-group'>
          <Input type='email' placeholder='Email' />
          <Input placeholder='First Name' />
          <Input placeholder='Last Name' />
          <Input placeholder='Birthday' />
          <Input type='password' placeholder='Password' />
          <Input type='password' placeholder='Confirm Password' />
        </div>
      </div>
    </div>
  )
}
