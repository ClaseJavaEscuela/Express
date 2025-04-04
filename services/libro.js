import Libro from "../models/libro.js";

export class serviceLibro{
  static async createBook(infoBook){
    try {
      const newBook = await Libro.create(infoBook);
      if(!newBook){
        throw new Error("No se pudo crear el libro");
      }
      return {message:null,data:newBook};
    } catch (error) {
      return {message:error.message,data:null};
    }
  }

  static async getBooks(){
    try {
      const books = await Libro.findAll();
      if(books.length == 0 ){
        throw new Error("No hay libros");
      }
      return {message:null,data:books};
    } catch (error) {
      return {message:error.message,data:null};
    }
  }

}

