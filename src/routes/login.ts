import { FastifyInstance, FastifySchema } from "fastify";
import core_emailLogin from "../core/auth/core_emailLogin";
import core_postgress from "../core/db/core_postgres";
import hok_isNotLogin from "../hooks/auth/isNotLogin";
import { Dcr_FastifyInstance } from "../types/decorators/dcr_postgres";



function Login(fastify: FastifyInstance, _: any, done: Function) {

  fastify.addHook("preHandler", hok_isNotLogin);


  const LoginSchema: FastifySchema = {
    body: {
      type: 'object',
      required: [
        'email',
        'password',
      ],
      properties: {
        email: { type: 'string' },
        password: { type: 'string' },
      },
    },

    response: {
      200: {
        type: 'object',
        properties: {
          login: { type: 'string' }
        }
      }
    }
  }

  fastify.post("/", { schema: LoginSchema }, async (request, res) => {

    const userId = await core_emailLogin(request.body as EmailLogin);

    if (userId != undefined) {
      request.session.set("userId", userId);
      res.send({ login: userId });
    }else{
      res.send({ login: "failed "+userId });
    }
    
  });

  done();
}

export default Login;