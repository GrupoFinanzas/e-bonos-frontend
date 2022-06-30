import authHeader from "./auth-header";
import axios from "axios";

const API_URL = 'https://ebono-api.azurewebsites.net/api/v1/accounts';

class UsersApiService {
    getAll(){
        console.log(authHeader());
        return axios.get(API_URL, {headers: authHeader()});
    }
    
    getById(id){
        console.log('printing header...');
        console.log(authHeader());
        console.log(`endpoint: ${API_URL}/${id}`);
        return axios.get(`${API_URL}/${id}`, {headers: authHeader()});
    }
}
export default new UsersApiService();