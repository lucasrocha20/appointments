import fastify, { type FastifyInstance, type RouteShorthandOptions } from "fastify";

const server: FastifyInstance = fastify({
  logger: true
})

// const opts: RouteShorthandOptions = {
//   schema: {
//     response: {
//       200: {
//         type: 'object',
//         properties: {
//           pong: {
//             type: 'string'
//           }
//         }
//       }
//     }
//   }
// }

server.get('/rota', async (req, res) => {
  return "Hello world"
});

server.listen({ port: 3000 }, (err, address) => { 
  if (err) {
    console.error(err)
    process.exit(0)
  }
  console.log(`Server listening at ${address}`)
})