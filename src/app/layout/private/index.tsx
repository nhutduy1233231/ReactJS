import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

const PrivateLayout = (props: { children: ReactNode }) => {
  return (
    <div className=''>
      <Link to={'/'}>Home</Link>
      <Link to={'/test'}>Test</Link>
      <h1>Private Layout</h1>
      {props.children}
    </div>
  )
}

export default PrivateLayout
