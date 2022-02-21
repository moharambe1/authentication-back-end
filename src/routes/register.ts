import { FastifyInstance, FastifySchema } from "fastify";
import core_emailRegister from "../core/auth/core_emailRegister";
import hok_isNotLogin from "../hooks/auth/isNotLogin";



function register(fastify:FastifyInstance , _:any, done:Function){
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
          register: { type: 'string' }
        }
      }
    }
  }

  fastify.post("/", { schema: LoginSchema }, async (request, res) => {
    console.log("/register")
    const result = await core_emailRegister(request.body as EmailRegister);

    if (result != undefined) {
      res.send({ register: result });
    }else{
      res.send({ register: "failed"});
    }
    
  });

  done();
}

export default register;