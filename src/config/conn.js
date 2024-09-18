import { Sequelize } from "sequelize";
import dotenv from "dotenv"

dotenv.config()

const conn = new Sequelize(
  db.bd,
  db.user,
  db.password,
  // "echoBlog", "root", "Sen@iDev77!.", 
  {
  host: "localhost",
  dialect: "mysql",
});

export default conn