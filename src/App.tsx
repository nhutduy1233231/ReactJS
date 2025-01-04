import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { FC } from 'react'

const App: FC = () => {
  return (
    <div>
      <h2>Bài viết được viết tại blog {process.env.HOST}</h2>
      <div className='text-3xl font-bold underline'>Hello world!</div>
      <Button variant='outline'>Button</Button>
      <br />
      <ModeToggle />
    </div>
  )
}

export default App
