import { FC, useState } from 'react'

const App: FC = () => {
  const [fullname] = useState('Dư Thanh Được')
  return (
    <div>
      <h1>{fullname}</h1>
      <h2>Bài viết được viết tại blog {process.env.HOST}</h2>
      <div className='text-3xl font-bold underline'>Hello world!</div>
    </div>
  )
}

export default App
