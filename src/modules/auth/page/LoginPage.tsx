import { useHeader } from '@/hook/Header'
import { LonginContainer } from '@/modules/auth/container/LoginContainer'

const LoginPage = () => {
  useHeader({
    title: 'Login Page'
  })

  return <LonginContainer />
}

export default LoginPage
