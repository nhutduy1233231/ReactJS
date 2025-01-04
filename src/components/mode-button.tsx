import { useTheme } from '@/components/theme-provider'
import { Moon, Sun } from 'lucide-react'
export const ModeButton = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className='fixed bottom-5 right-7 z-99 text-lg border-0 outline-none  cursor-pointer'>
      {theme == 'dark' ? (
        <Moon onClick={() => setTheme('light')} className='h-[1.5rem] w-[1.5rem]' />
      ) : (
        <Sun onClick={() => setTheme('dark')} className='h-[1.5rem] w-[1.5rem]' />
      )}
    </div>
  )
}
