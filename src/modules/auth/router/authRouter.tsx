import LoginPage from '@/modules/auth/page/LoginPage'
import RegisterPage from '@/modules/auth/page/RegisterPage'
import { AUTH_SIDE_MAP } from '@/modules/auth/router/authSideMap'

export const AUTH_ROUTER = [
  {
    path: AUTH_SIDE_MAP.login,
    element: <LoginPage />
  },
  {
    path: AUTH_SIDE_MAP.register,
    element: <RegisterPage />
  }
]
