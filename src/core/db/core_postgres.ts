import { Pool, PoolConfig } from "pg";

class core_postgress {
  m_Pool: Pool;

  constructor(ops:PoolConfig) {
    try {
      this.m_Pool = new Pool(ops);
     
    } catch (err) {
      throw Error("Connect connect to dataBase");
    }
  }

  async getUserId(user: EmailLogin):Promise< string|undefined> {
    try {

      const result = await this.m_Pool.query('SELECT userId FROM users WHERE email = $1 AND pass = $2 ', [user.email, user.password]);
      const {rows}=result;
      if (rows.length === 0)
        return undefined;
      return rows[0].userid;

    } catch (err) {
      throw Error("ERROR POSTGRESS GetUserId :" + err);
    }
  }

  async insertUser(user: EmailLogin):Promise<boolean> {
    try {
      await this.m_Pool.query('INSERT INTO users(email,pass) VALUES($1, $2)', [user.email, user.password]);
      return true;
    } catch (err) {
      throw Error("ERROR POSTGRESS InsertUser :" + err);
    }
  }
  async checkEmailExist(email:string):Promise<Boolean>{
    try {

      const {rows} = await this.m_Pool.query('SELECT userId FROM users WHERE email = $1', [email]);
      
      if (rows.length === 0)
        return false;
      return true;

    } catch (err) {
      throw Error("ERROR POSTGRESS checkEmailExist :" + err);
    }
  }

}

export default core_postgress;