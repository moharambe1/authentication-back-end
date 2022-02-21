import core_postgress from "./core_postgres";


class core_DataBase{

  pg:core_postgress;
  constructor(){
    this.pg=new core_postgress({ connectionString: process.env.PG_CONNECTIONSTRING ,ssl:true});
  }

}

const core_dataBase=new core_DataBase();

export default core_dataBase;