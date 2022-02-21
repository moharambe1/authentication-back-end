import { FastifyRequest } from "fastify";


function core_isLogin(request: FastifyRequest):boolean{
  const user:string|undefined =request.session.get("userId");
  if(user!=undefined)
    return true;
  return false;
}

export default core_isLogin;