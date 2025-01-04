import StyledProvider from '@/app/ThemeProvider'
import { ReactNode } from 'react'

const PublicLayout = (props: { children: ReactNode }) => {
  return (
    <StyledProvider>
      <div className='w-full max-w-[1140px] mx-auto'>{props.children}</div>
    </StyledProvider>
  )
}

export default PublicLayout
