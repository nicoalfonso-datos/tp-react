import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { auth, isFirebaseConfigured } from '../firebase/config'

export const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!auth) {
      setLoading(false)
      return
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  function register(email, password) {
    if (!auth) {
      throw new Error('Firebase todavía no está configurado en el archivo .env.')
    }

    return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(email, password) {
    if (!auth) {
      throw new Error('Firebase todavía no está configurado en el archivo .env.')
    }

    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    if (!auth) {
      throw new Error('Firebase todavía no está configurado en el archivo .env.')
    }

    return signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout, isFirebaseConfigured }}>
      {children}
    </AuthContext.Provider>
  )
}
