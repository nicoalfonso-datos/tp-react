import { useState } from 'react'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getFirebaseErrorMessage } from '../services/getFirebaseErrorMessage'
import './Navbar.css'

function Navbar() {
  const { user, loading, logout } = useAuth()
  const [logoutError, setLogoutError] = useState('')

  async function handleLogout() {
    try {
      await logout()
      setLogoutError('')
    } catch (error) {
      setLogoutError(getFirebaseErrorMessage(error))
    }
  }

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand" aria-label="Musical Store 2.0 - Inicio">
        <span className="navbar-logo-mark" aria-hidden="true">
          <img src="/musical-store-logo.png" alt="" />
        </span>
        <span className="navbar-brand-text">Musical Store <strong>2.0</strong></span>
      </NavLink>
      <div className="navbar-menu">
        <ul className="navbar-categorias">
          <li><NavLink to="/" end>Inicio</NavLink></li>
          <li><NavLink to="/category/guitarras">Guitarras</NavLink></li>
          <li><NavLink to="/category/bajos">Bajos</NavLink></li>
          <li><NavLink to="/category/baterias">Baterías</NavLink></li>
          <li><NavLink to="/category/teclados">Teclados</NavLink></li>
        </ul>
        <CartWidget />
        <div className="navbar-account">
          {loading ? (
            <span>Verificando sesión...</span>
          ) : user ? (
            <>
              <span className="navbar-user-email">{user.email}</span>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </>
          ) : (
            <>
              <NavLink to="/login">Ingresar</NavLink>
              <NavLink to="/register">Crear cuenta</NavLink>
            </>
          )}
          {logoutError && <span className="navbar-error">{logoutError}</span>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
