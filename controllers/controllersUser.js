export class controllerUser {
  static getUser = (req, res) => {
    res.render("home/user",{encabezado: "Bienvenido a esta pagina",
        titulo: "Informacion del usuarios",})
  };
  static loginUser = (req, res) => {
    res.json({ nota: "metodo para inicar sesion" }).status(200);
  };
} 