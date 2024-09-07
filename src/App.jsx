import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'

import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
