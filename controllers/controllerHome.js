import ServiceHome from "../services/home.js";

export class controllerHome {
  static async getInfo(req, res) {
    try {
      const listaDeProductos = await ServiceHome.getDataHome();
      if( listaDeProductos.message){
        throw new Error("Error el obtener lo usuarios");
      }
      //recibe dos paramentos 1._ vista 2._ objeto donde estan los valores a mostrar
      res.render("home/index", {
        encabezado: "Bienvenido a esta pagina",
        productos: listaDeProductos.data,
        titulo: "Bienvenido ala pagina pricipal",
      });
    } catch (e) {
      res.status(404).json({ message: e.message });
    }
  }

  static async getUserByID(req,res){
    try{
      const { id }= req.params;

      const user = await ServiceHome.getByID(id);

      if(user.message){
        throw new Error(user.message);
      }
      res.render("home/infoUser", {
        encabezado: "Usuarios",
        infoUser:user.data[0],
        titulo: "Informacion del usuario",
      });

    }catch(e){
      res.json({info:e.message}).status(404);
    }
  }

  static newInfo(req, res) {
    res.render("/home/newItem");
  }
  static updateInfo(req, res) {
    res.json({ metodo: "metodo put de la ruta home" });
  }
  static deleteInfo(req, res) {
    res.render("home/Delete");
  }
}
