import { type PostEntry } from '../../types'
export const toNewPostEntry = (object: any): PostEntry => {
  return {
    user_id: object.user_id,
    title: object.title,
    description: object.description,
    expiration_date: object.expiration_date,
    image_code: object.image_code,
    status: object.status,
    campus_id: object.campus_id,
    price: object.price
  }
}
