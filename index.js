import path from "node:path";
import express, { json } from "express";
import morgan from "morgan";
import js from "express-ejs-layouts";
import { routerHome } from "./Router/home.js";
import appUser from "./Router/user.js";
import sequelize from "./Data/db.js";
import bookRouer from "./Router/book.js";

const PORT = 4040;

const app = express();

sequelize.sync().then(()=>console.log("conectado")).catch(console.log)

app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "/views"));
app.set("layout", "layouts/layout");

app.use(js);
app.use(express.static(path.join(import.meta.dirname, "/public")));
app.use(morgan("dev"));
app.use(json());

app.use("/", routerHome);
app.use("/book",bookRouer);
app.use("/users", appUser);

app.listen(PORT, () => {
  console.log("servidor esta vivio");
  console.log("http://localhost:" + PORT);
});
