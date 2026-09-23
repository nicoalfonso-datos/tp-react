const errorMessages = {
  'auth/email-already-in-use': 'Ese correo ya tiene una cuenta registrada.',
  'auth/invalid-email': 'Ingresá un correo electrónico válido.',
  'auth/invalid-credential': 'El correo o la contraseña son incorrectos.',
  'auth/user-not-found': 'No encontramos una cuenta con ese correo.',
  'auth/wrong-password': 'La contraseña es incorrecta.',
  'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres.',
  'auth/network-request-failed': 'No se pudo conectar con Firebase. Revisá tu conexión.',
  'permission-denied': 'Firebase rechazó la operación. Revisá las reglas de Firestore.'
}

export function getFirebaseErrorMessage(error) {
  return errorMessages[error.code] || error.message || 'Ocurrió un error. Intentá nuevamente.'
}
