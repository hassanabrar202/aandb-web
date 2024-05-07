import {webApi} from "./config";

class ProductApi {
    createAd = (body) => webApi().post('/products', body);
    get = () => webApi().get('/products');
}

export const productApi = new ProductApi();
