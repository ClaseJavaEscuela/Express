import { Router } from "express";
import { bookController } from "../controllers/bookController.js";

const bookRouer = Router();

bookRouer.get('/',bookController.getAllBooks);
bookRouer.post('/',bookController.createNewBook);

export default bookRouer;
