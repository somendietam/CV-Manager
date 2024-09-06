import React from 'react'

const HomePage = ({ user, setUser }) => {

  const handleLogout = () => {
    setUser([])
  }

  return (
    <div>
      <h1>Bienvenido</h1>
      <h2>{user}</h2>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  )
}

export default HomePage
