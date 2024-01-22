import axios from 'axios'

export default class ProductService {
  static async getAll() {
    const response = await axios.get(
      'https://purpleschool.ru/pizza-api-demo/products'
    )

    return response
  }
}
