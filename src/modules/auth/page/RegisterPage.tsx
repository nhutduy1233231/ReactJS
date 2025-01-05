import { useHeader } from '@/hook/Header'
import { RegisterContainer } from '@/modules/auth/container/RegisterContainer'

const RegisterPage = () => {
  useHeader({
    title: 'Register Page'
  })

  return <RegisterContainer />
}

export default RegisterPage
