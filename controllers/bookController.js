import { serviceLibro } from "../services/libro.js";


export class bookController{
  static async createNewBook(req, res){
    try {

      
      const infoBook = await serviceLibro.createBook(req.body);
      if(infoBook.message){
        throw new Error(infoBook.message);
      }

      res.status(200).json(infoBook);
    } catch (error) {
      res.status(400).json({message: error.message});
    }
  }

  static async getAllBooks(req, res){
    try {
      const infoBook = await serviceLibro.getBooks();
      if(infoBook.message){
        throw new Error(infoBook.message);
      }

      res.status(200).json(infoBook);
    } catch (error) {
      res.status(400).json({message: error.message});
    }
  }
}
