import sequelize from "../Data/db.js";
import { DataTypes,Model } from "sequelize";

class Libro extends Model{}

Libro.init({
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  titulo:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  autor:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  editorial:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion:{
    type: DataTypes.STRING,
    allowNull: false,
  }

},{sequelize,modelName:"libros",timestamps:false})

export default Libro;

