import { ReactNode } from 'react'
import { Link } from 'react-router'

interface PublicLayoutProps {
  children: ReactNode
}

const PublicLayout = (props: PublicLayoutProps) => {
  return (
    <div className=''>
      <div className=''>
        <h1>Public Layout</h1>
        <Link to={'/'}>Home</Link>
        <Link to={'/admin'}>Test</Link>
      </div>
      {props.children}
    </div>
  )
}

export default PublicLayout
