import fastify, { type FastifyInstance, type RouteShorthandOptions } from "fastify";
import { userController } from "./routes/userRoute";
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

server.register(userController, { prefix: 'v1' })

export async function start() {
  try {
    await server.listen({port: 3333 });
  } catch (err) {
    console.error(err)
    process.exit(0)    
  }
}