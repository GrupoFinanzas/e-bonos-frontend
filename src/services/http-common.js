import axios from "axios";

export default axios.create({
    baseURL: 'https://ebono-api.azurewebsites.net/api/v1/',
    headers: {
        'Content-type':'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
})