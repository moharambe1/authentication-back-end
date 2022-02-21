import { Core_DataBase } from "./core/db";

declare module NodeJS {
  interface Global {
    core_dataBase: Core_DataBase|undefined
  }
}