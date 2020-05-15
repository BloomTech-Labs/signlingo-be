/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/
const server = require("../api/server");
const supertest = require('supertest');
const request = supertest(server);

server.get('/test', async (req, res) => {
    res.json({message: 'pass!'})
  })

describe("test Endpoint", () =>{
  it('Gets the test endpoint', async done => {
    // Sends GET Request to /test endpoint
    const res = await request.get('/test')

    expect(response.status).toBe(200)
    expect(response.body.message).toBe('pass!')
    done()
  })
})
