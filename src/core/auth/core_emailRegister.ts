import core_dataBase from "../db";




async function core_emailRegister(userData: EmailRegister): Promise<String | undefined> {
  let result = undefined;
  const exist = await core_dataBase.pg.checkEmailExist(userData.email);
  
  if (!exist)
    result = await core_dataBase.pg.insertUser(userData);
  else
    return "you are registered"
  if (result === undefined)
    return undefined;

  return "success";
}


export default core_emailRegister;