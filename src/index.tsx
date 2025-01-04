import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import App from '~/App'
import PrivateLayout from '~/app/layout/private'
import { envSettings } from '~/app/settings'

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
      </Routes>
    </Router>
  </React.StrictMode>
)
