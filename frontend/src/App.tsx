import { useState } from 'react'

import Splash from './pages/Splash'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Gameplay from './pages/Gameplay'

type Page = 'splash' | 'login' | 'signup' | 'home' | 'gameplay'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('splash')
  const [playerName, setPlayerName] = useState('Player')

  switch (currentPage) {
    case 'splash':
      return <Splash onDone={() => setCurrentPage('login')} />

    case 'login':
      return (
        <Login
          onSignup={() => setCurrentPage('signup')}
          onLogin={() => setCurrentPage('home')}
        />
      )

    case 'signup':
      return (
        <Signup
          onLogin={() => setCurrentPage('login')}
          onSignupSuccess={(username) => {
            setPlayerName(username)
            setCurrentPage('home')
          }}
        />
      )

    case 'home':
      return (
        <Home
          playerName={playerName}
          onPlay={() => setCurrentPage('gameplay')}
          onLogout={() => setCurrentPage('login')}
        />
      )

    case 'gameplay':
      return (
        <Gameplay
          playerName={playerName}
          onBack={() => setCurrentPage('home')}
        />
      )
  }
}

export default App