import e from "express";
import User from "../models/user.js";
import { where } from "sequelize";

export default class ServiceHome {
  static async getDataHome() {
    try {
      
      const lista = await User.findAll();
      return {message:null, data:lista};

    } catch (e) {
      return { message: e, data: null };
    }
  }

  static addItem(data) {
    return ["hola", "nose que poner"];
  }

  static async getByID(id){
    try {
      const userFind = await User.findAll({
        where:{
          id:id
        }
      });
      if(!userFind.length){
        throw new Error("El id no existe");
      }
      console.log("hola")
      return {message:null,data:userFind};

    } catch (error) {
      return {message:error.message,data:null};
    }
  }

}
