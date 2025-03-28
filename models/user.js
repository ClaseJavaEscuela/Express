import { DataTypes, Model } from "sequelize";
import sequelize from "../Data/db.js";

class User extends Model {}

User.init({
	id:{
		type:DataTypes.INTEGER,
		primaryKey:true,
		autoIncrement:true,
		allowNull:false
	},
	nombre:{
		type:DataTypes.STRING,
		allowNull:false,
	},
	apellido:{
		type:DataTypes.STRING,
		allowNull:false
	},
	email:{
		type:DataTypes.STRING
	},
	peso:{
		type:DataTypes.DOUBLE
	},
	edad:{
		type:DataTypes.INTEGER,
	},
}, 
{ sequelize, modelName: "User", tableName: "usuarios", timestamps:false});

export default User;
