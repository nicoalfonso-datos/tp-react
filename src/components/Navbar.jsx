import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Musical Store 2.0</h2>
      <div className="navbar-menu">
        <ul className="navbar-categorias">
          <li><NavLink to="/" end>Inicio</NavLink></li>
          <li><NavLink to="/category/guitarras">Guitarras</NavLink></li>
          <li><NavLink to="/category/bajos">Bajos</NavLink></li>
          <li><NavLink to="/category/baterias">Baterías</NavLink></li>
          <li><NavLink to="/category/teclados">Teclados</NavLink></li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  )
}

export default Navbar
