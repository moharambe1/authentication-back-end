import { FastifyReply, FastifyRequest } from "fastify";
import core_isLogin from "../../core/auth/core_isLogin";



function hok_isNotLogin(request: FastifyRequest, reply: FastifyReply, done: Function) {

  const login = core_isLogin(request);
  if (!login)
    done();
  else {
    reply.status(400);
    reply.send({ stateCode: reply.statusCode, error: "Bad Request", message: "You are login" });
    done()
  }

}

export default hok_isNotLogin;