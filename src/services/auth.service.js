import axios from "axios";

const API_URL = 'https://ebono-api.azurewebsites.net/auth';

class AuthService{
    login(user){
        console.log('About the request');
        return axios.post(`${API_URL}/sign-in/account`, JSON.stringify({
            email: user.email,
            password: user.password}),
            {headers: {'Content-Type': 'application/json'}})
            .then(function (response) {
                // console.log(`Response arrived with status ${response.status}`);
                // console.log('printing data response...');
                // console.log(response.data);
                if (response.data.token){
                    // console.log(`user: ${response.data}`);
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data.id;
            })
            .catch(function (error){
                if (error.response){
                    console.log(error.response.status);
                    console.log(error.response.data);
                    console.log(error.response.headers);
                } else if (error.request){
                    console.log(error.request);
                } else {
                    console.log(error.message);
                }
                console.log(error.config);
                return error;
            });
    }
    logout(){
        localStorage.removeItem('user');
    }
    register(user){
        return axios.post(`${API_URL}/sign-up/account`,{
            name: user.name,
            email: user.email,
            password: user.password,
            createdAt: new Date()
        });
    }
}

export default new AuthService();