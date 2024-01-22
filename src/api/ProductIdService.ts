import axios from 'axios'

export default class ProductIdService {
  static async getAll(id: number) {
    const response = await axios.get(
      `https://purpleschool.ru/pizza-api-demo/products/${id}`
    )

    return response
  }
}
