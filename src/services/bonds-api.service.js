import http from './http-common';
import authHeader from "./auth-header";

class BondsApiService {
    getAll() {
        return http.get('/bonds', { headers: authHeader() });
    }
    getById(id) {
        return http.get(`/bonds/${id}`, { headers: authHeader() });
    }
    getAllByUserId(id) {
        return http.get(`/accounts/${id}/bonds`, { headers: authHeader() });
    }
    create(data) {
        return http.post('/bonds', data, { headers: authHeader() });
    }
    update(id, data) {
        return http.put(`/bonds/${id}`, data, { headers: authHeader() });
    }
    delete(id) {
        return http.delete(`/bonds/${id}`, { headers: authHeader() });
    }
}

export default new BondsApiService()