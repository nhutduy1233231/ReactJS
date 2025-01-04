import StyledProvider from '@/app/ThemeProvider'
import { ModeButton } from '@/components/mode-button'
import { ReactNode } from 'react'

const PublicLayout = (props: { children: ReactNode }) => {
  return (
    <StyledProvider>
      <div className='w-full max-w-[1140px] mx-auto'>{props.children}</div>
      <ModeButton />
    </StyledProvider>
  )
}

export default PublicLayout
