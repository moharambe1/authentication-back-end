import core_dataBase from "../db";




async function core_emailLogin(userData: EmailLogin):Promise< String|undefined>{
  const result= await core_dataBase.pg.getUserId(userData);
  
  if(result===undefined )
    return undefined;
  
  return result;
}


export default core_emailLogin;