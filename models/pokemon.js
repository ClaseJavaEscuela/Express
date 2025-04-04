import { DataTypes,Model } from "sequelize";
import sequelize from "../Data/db.js";

class Pokemon extends Model {}

Pokemon.init({
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  type:{
    type:DataTypes.STRING,
    allowNull:false
  },
  image:{
    type:DataTypes.STRING,
    allowNull:false
  },
  description:{
    type:DataTypes.STRING,
    allowNull:false
  },
  created_at:{
    type:DataTypes.DATE,
    allowNull:false
  },
 
},{sequelize,modelName:"pokemon",timestamps:true})

export default Pokemon;