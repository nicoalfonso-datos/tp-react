import CartWidget from './CartWidget'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Musical Store 2.0</h2>
      <div className="navbar-menu">
        <ul className="navbar-categorias">
          <li><a href="#">Guitarras</a></li>
          <li><a href="#">Bajos</a></li>
          <li><a href="#">Baterías</a></li>
          <li><a href="#">Teclados</a></li>
          <li><a href="#">Accesorios</a></li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  )
}

export default Navbar
