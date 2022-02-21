import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import core_postgress from "../../core/db/core_postgres";
import { Dcr_FastifyInstance } from "../../types/decorators/dcr_postgres";

//:Function(request: FastifyRequest, reply: FastifyReply, done: Function)
/*
function dcr_BuildPostgres<T >(fastify: FastifyInstance) : Dcr_FastifyInstance<T> {
  if((fastify as any).psg===undefined )
    fastify.decorate('psg', new core_postgress(fastify));

  let result=(fastify as any as Dcr_FastifyInstance<T>);
  
  ss;
  
  return ss;
}*/
/*
function dcr_BuildPostgres(fastify: FastifyInstance): core_postgress {
  if ((fastify as any).psg == undefined && fastify.pg)
  {
    console.log("init Posgtgress")

    return (fastify.decorate('psg', new core_postgress(fastify)) as any).psg as core_postgress;
  }
  else{
    console.log("Is allrede build Postgres Dec")
    return (fastify as any).psg as core_postgress;
  }

}

export default dcr_BuildPostgres;*/