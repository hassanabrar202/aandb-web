import { webApi } from './config'

class ProductApi {
  createAd = (body) => webApi().post('/products', body)
  get = (tab, email) => webApi().get(`/products?tab=${tab}&email=${email}`)
}

export const productApi = new ProductApi()
