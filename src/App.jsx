import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import LikeButton from './pages/Level-1/LikeButton'
import ListInput from './pages/Level-1/ListInput'

function App() {
  return (
    <div className='grid gap-10'>
      <ListInput />
    </div>
  )
}

export default App
