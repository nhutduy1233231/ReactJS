import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import PublicLayout from '~/app/layout/public'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route path={'/'} element={<>index jsx</>} />
          <Route path={'/test'} element={<>test jsx</>} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
