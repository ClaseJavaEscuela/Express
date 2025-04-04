import zod, { object } from 'zod'

const schemaBook = zod.object({
  titulo: zod.string().min(3),
  autor:zod.string().min(3),
  editorial: zod.string().min(3)
})

export const validateBook = (object)=>{
  return schemaBook.safeParse(object);
}