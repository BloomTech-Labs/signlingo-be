/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/
const request = require('supertest')
const server = require('../api/server')

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(server)
      .post('/api/level_1')
      .send({
        user_Id: 1
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('post')
  })
})
