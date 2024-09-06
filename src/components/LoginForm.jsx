import React from 'react'
import "./LoginForm.css"
import { useState } from 'react'

const LoginForm = ({setUser}) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (username === "" || password === "") {
      setError(true)
      return
    }
    setError(false)

    setUser([username])
  }
  return (
    <section>
      <h1>Login</h1>

      <form className='form' onSubmit={handleSubmit}>
        <h3>Usuario</h3>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <h3>Contraseña</h3>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button>Iniciar Sesión</button>
      </form>
      {error && <p>Todos los campos son obligatorios</p>}
    </section>
  )
}

export default LoginForm
