import { useState } from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  const [currentPage, setCurrentPage] = useState<'login' | 'signup'>('login')

  return (
    <>
      {currentPage === 'login' ? (
        <Login onSignup={() => setCurrentPage('signup')} />
      ) : (
        <Signup onLogin={() => setCurrentPage('login')} />
      )}
    </>
  )
}

export default App