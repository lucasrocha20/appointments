import fastify, { type FastifyInstance, type RouteShorthandOptions } from "fastify";
// import fastifyCors from "fastify-cors";

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

// server.register(fastifyCors, { origin: true })

server.post('/user', async (request, reply) => {
  return "Hello world"
});

export async function start() {
  try {
    await server.listen({port: 3000 });
  } catch (err) {
    console.error(err)
    process.exit(0)    
  }
}