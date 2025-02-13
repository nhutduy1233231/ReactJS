import { Layout } from 'antd'
import { ReactNode } from 'react'
import SiderComp from '~/app/layout/private/sider'
const { Header } = Layout

interface PrivateLayoutProps {
  children: ReactNode
}

const PrivateLayout = (props: PrivateLayoutProps) => {
  return (
    <div className='w-full h-screen flex'>
      <div className='sider'>
        <SiderComp />
      </div>
      <div className='flex-1 overflow-auto'>
        <div className='header sticky top-0'>
          <Header className='!p-0 !bg-[var(--bg)]'></Header>
        </div>
        <div className='m-6 p-6 border border-[var(--placeholder)] rounded-[8px] bg-[var(--bg)]'>{props.children}</div>
      </div>
    </div>
  )
}

export default PrivateLayout
