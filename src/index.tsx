import './index.css'

import App from '@/App'
import PrivateLayout from '@/app/layout/private'
import PublicLayout from '@/app/layout/public'
import { envSettings } from '@/app/settings'
import { AUTH_ROUTER } from '@/modules/auth/router/authRouter'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const ExampleRouter = [
  { path: '/', element: <App /> },
  { path: '/test', element: <div>Test</div> },
  { path: '*', element: <div>Not Found</div> }
]

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router basename={envSettings.baseUrl}>
      <Routes>
        {ExampleRouter.map((el) => {
          return <Route key={el.path} path={el.path} element={<PrivateLayout>{el.element}</PrivateLayout>} />
        })}

        {/* public router */}
        {AUTH_ROUTER.map((el) => {
          return <Route key={el.path} path={el.path} element={<PublicLayout>{el.element}</PublicLayout>} />
        })}
      </Routes>
    </Router>
  </React.StrictMode>
)
