import 'normalize.css'
import '~styles/global.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router'
import PublicLayout from '~/app/layout/public'
import { envSettings } from '~/helper/settings'

const EXAMPLE_ROUTER = [
  { path: '/', element: <PublicLayout>index</PublicLayout> },
  { path: '/admin', element: <PublicLayout>admin</PublicLayout> }
]

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router basename={envSettings.baseUrl}>
      <Routes>
        {EXAMPLE_ROUTER.map((el) => {
          return <Route key={el.path} path={el.path} element={el.element} />
        })}
      </Routes>
    </Router>
  </React.StrictMode>
)
