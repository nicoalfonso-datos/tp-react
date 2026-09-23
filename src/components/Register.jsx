import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getFirebaseErrorMessage } from '../services/getFirebaseErrorMessage'
import './AuthForm.css'

function Register() {
  const { register, isFirebaseConfigured } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setLoading(true)

    try {
      await register(email, password)
      navigate('/checkout', { replace: true })
    } catch (error) {
      setError(getFirebaseErrorMessage(error))
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <h1>Crear cuenta</h1>
        {!isFirebaseConfigured && (
          <p className="auth-warning">Completá el archivo .env para conectar Firebase.</p>
        )}
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label>
            Contraseña (mínimo 6 caracteres)
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              minLength="6"
              required
            />
          </label>
          {error && <p className="auth-error">{error}</p>}
          <button type="submit" disabled={loading || !isFirebaseConfigured}>
            {loading ? 'Creando cuenta...' : 'Registrarme'}
          </button>
        </form>
        <p>¿Ya tenés cuenta? <Link to="/login">Iniciá sesión</Link></p>
      </section>
    </main>
  )
}

export default Register
