import { Sequelize } from 'sequelize';

const sequelize = new Sequelize("basePrueba", "root", "Luis2010", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});


sequelize.authenticate()
.then(()=> console.log("contectando ... ")).catch(console.log)

export default sequelize;


