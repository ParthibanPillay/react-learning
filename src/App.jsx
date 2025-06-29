import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import UserForm from './pages/userForm';
import VisibilityToggle from './pages/VisibilityToggle'
import OnOff from './pages/OnOff'
import BgChanger from './pages/BgChanger'

function App() {
  return (
    <div className='grid gap-10'>
      <UserForm />
      <VisibilityToggle />
      <OnOff />
      <BgChanger />
    </div>
  )
}

export default App
