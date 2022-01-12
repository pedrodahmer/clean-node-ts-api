import request from 'supertest'
import app from '../config/app'

describe('Signup Routes', () => {
  test('Should return an insertedId on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'pedro',
        email: 'pedrohd1213@gmail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
