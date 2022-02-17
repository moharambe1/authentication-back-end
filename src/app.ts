import Fastify from "fastify";



const build = (opts: FastifyOptions) => {

  const app = Fastify(opts);

  app.get("/", (req, reply) => {
    reply.send({ start: "hello world" });
  });


  return app;
}


export default build;