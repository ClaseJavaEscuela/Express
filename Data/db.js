import { Sequelize } from 'sequelize';
import 'dotenv/config'
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER,process.env.DB_PASSWORD, {
  host:process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT,
});

sequelize.authenticate()
.then(()=> console.log("contectando ... ")).catch(console.log)

export default sequelize;


