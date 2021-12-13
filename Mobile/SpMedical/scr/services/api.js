//axios importado
import axios from 'axios';


//Chamada de requisições
const api = axios.create({
    //Define a url
baseURL: 'http://192.168.3.175:5000/api'

})

//define exportação
export default api;

