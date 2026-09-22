import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="not-found">
      <h1>Página no encontrada</h1>
      <Link to="/">Volver al inicio</Link>
    </main>
  )
}

export default NotFound
