import { webApi } from './config'

class ProductApi {
  createAd = (body) => webApi({ auth: true }).post('/products', body)
  uploadImage = (body) => webApi({ auth: true,formData:true }).post('/image', body)
  get = (tab, email) => webApi().get(`/products`)
  getByCategory = (query) => webApi({ auth: true }).get(`/products-by-category?limit=${query.limit}&offset=${query.offset}&category=${query.category}&email=${query.email}`,true)
  getById = (id) => webApi({ auth: true }).get(`/products/${id}`)


}

export const productApi = new ProductApi()
