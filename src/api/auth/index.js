import { webApi } from '../config';

class AuthApi {
    login = (body) => webApi().post('/auth', body);
    refresh = (body) => webApi({ auth: true }).post('/auth/refresh-token/', body);
    logout = () => webApi({ auth: true }).post('/auth/logout/');

    register = (body) => webApi().post('/users', body);
}

export const authApi = new AuthApi();
