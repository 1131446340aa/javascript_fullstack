const server = require('./server')

test('check' , async ()=>{
  const res = await server.get('/json')
  expect(res.body).toEqual({
    a: 3
  })
})