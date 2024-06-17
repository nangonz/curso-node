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

    // 2. Asegurarse que el username no existe
    const user = User.findOne({ username })
    if (user) throw new Error('username already ecist')
  }

  static login ({ username, password }) {}
}
