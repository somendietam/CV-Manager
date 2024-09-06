import './App.css'
import LoginForm from './components/LoginForm'
import HomePage from './pages/HomePage'
import { useState } from 'react'

function App() {

  const [user, setUser] = useState("");

  return (
    <div>
      {
        !user.length > 0
          ? <LoginForm setUser={setUser} />
          : <HomePage user={user} setUser={setUser} />
      }
    </div>
  )
}

export default App
