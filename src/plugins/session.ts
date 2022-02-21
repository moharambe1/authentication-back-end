import { FastifyInstance } from "fastify";
import fastifyCookie from "fastify-cookie";
import fastifySession from "@fastify/session";


const BuildSession = (fastify: FastifyInstance)=>{
  fastify.register(fastifyCookie);
  fastify.register(fastifySession,{
    secret:"2c4VSUhEW76CgguUYbnUjb48EpnVR5hm",
    saveUninitialized:false,
    cookie:{
      secure:false,
      sameSite:true
    }
  });
}


export default BuildSession;