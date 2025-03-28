import { Router } from "express";
import { controllerUser } from "../controllers/controllersUser.js";

const appUser = Router();

appUser.get('/',controllerUser.getUser);
appUser.post('/',controllerUser.loginUser);

export default appUser;