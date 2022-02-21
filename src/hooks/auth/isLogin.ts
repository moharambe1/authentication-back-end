import { FastifyReply, FastifyRequest } from "fastify";
import core_isLogin from "../../core/auth/core_isLogin";



function hok_isLogin(request: FastifyRequest, reply: FastifyReply, done: Function) {
  
  const login = core_isLogin(request);

  if (login)
    done();

  reply.statusCode = 400;
  reply.send({ stateCode: reply.statusCode, error: "Bad Request", message: "Invalid user" });

}

export default hok_isLogin;