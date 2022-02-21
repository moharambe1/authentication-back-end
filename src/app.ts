import Fastify, { FastifyServerOptions } from "fastify";
import BuildSession from "./plugins/session";

import Login from "./routes/login";
import register from "./routes/register";




const build = (opts: FastifyServerOptions) => {

  const fastify = Fastify(opts);  
  BuildSession(fastify);


  fastify.get("/", (req, reply) => { 
    reply.send({ start: "hello world" });
  });
  
  fastify.register(Login,{prefix: "login"});

  fastify.register(register,{prefix: "register"});
  

  return fastify;
}


export default build;