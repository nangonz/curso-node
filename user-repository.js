import DBLocal from 'db-local'

const { Squema } = new DBLocal({ path: './db' })

const User = Squema('User', {
  _id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true }
})

export class UserRepository {
  static create ({ username, password }) {
    // 1. validaciones del username y password (opcional: usar zod como bibliotecas de validaciones)
    if (typeof username !== 'string') throw new Error('username must be a string')
    if (typeof username.length < 3) throw new Error('username must be at least 3 characters long')

    if (typeof password !== 'string') throw new Error('password must be a string')
    if (typeof username.length < 6) throw new Error('password must be at least 6 characters long')

    // 2. Asegurarse que el username no existe
    const user = User.findOne({ username })
    if (user) throw new Error('username already ecist')
  }

  static login ({ username, password }) {}
}
