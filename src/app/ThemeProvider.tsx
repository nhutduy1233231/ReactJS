import { ThemeProvider } from '@/components/theme-provider'
import { ReactNode } from 'react'

const StyledProvider = (props: { children: ReactNode }) => {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      {props.children}
    </ThemeProvider>
  )
}

export default StyledProvider
