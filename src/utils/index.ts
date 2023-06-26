import { type PostEntry } from '../types/express/index'
export const toNewPostEntry = (object: any): PostEntry => {
  return {
    title: object.title,
    description: object.description,
    expiration_date: object.expiration_date,
    status: Boolean(object.status),
    campus_id: Number(object.campus_id),
    price: Number(object.price)
  }
}
