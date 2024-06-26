import { webApi } from '../config';

class AuthApi {
    login = (body) => webApi().post('/auth', body);
    refresh = (body) => webApi({ auth: true }).post('/auth/refresh-token/', body);
    logout = () => webApi({ auth: true }).post('/auth/logout/');

    register = (body) => webApi().post('/users', body);

    users = (query) => webApi().get(`/users?limit=${query.limit}&offset=${query.offset}`);

    updateUser  = (id,body) => webApi({auth:true}).patch(`/users/${id}`, body);

    deleteUser  = (id) => webApi({auth:true}).delete(`/users/${id}`);

}

export const authApi = new AuthApi();
