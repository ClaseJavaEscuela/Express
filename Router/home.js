import { Router } from "express";
import { controllerHome } from "../controllers/controllerHome.js";
export const routerHome = Router();

routerHome.get('/',controllerHome.getInfo)
routerHome.get('/:id(\\d+)',controllerHome.getUserByID);
routerHome.post('/',controllerHome.newInfo)
routerHome.put('/',controllerHome.updateInfo);
routerHome.delete('/',controllerHome.deleteInfo);
