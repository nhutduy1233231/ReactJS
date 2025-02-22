import 'normalize.css'
import '~styles/global.scss'
import '~styles/tailwind.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router'
import ConfigProvider from '~/app/layout/configProvider'
import PrivateLayout from '~/app/layout/private'
import { Example } from '~/Example'
import store from '~/store'
import { envSettings } from './constants/enviroment'

const EXAMPLE_ROUTER = [
  {
    path: '/',
    element: (
      <PrivateLayout>
        <h1 className='text-3xl font-bold underline text-[#fff000]'>Hello world!</h1>
        <p className='text-blue-600 dark:text-sky-400'>The quick brown fox...</p>
        <Example />
      </PrivateLayout>
    )
  },
  { path: '/admin', element: <PrivateLayout>admin</PrivateLayout> }
]

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider>
        <Router basename={envSettings.baseUrl}>
          <Routes>
            {EXAMPLE_ROUTER.map((el) => {
              return <Route key={el.path} path={el.path} element={el.element} />
            })}
          </Routes>
        </Router>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
)
