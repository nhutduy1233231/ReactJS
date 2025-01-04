import { Link, Outlet } from 'react-router-dom'

const PublicLayout = () => {
  return (
    <div className=''>
      <Link to={'/'}>Home</Link>
      <Link to={'/test'}>Test</Link>
      <h1>Public Layout</h1>
      <Outlet />
    </div>
  )
}

export default PublicLayout
