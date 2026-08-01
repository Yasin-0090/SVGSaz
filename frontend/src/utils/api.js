import axios from 'axios'
// const local_api = 'http://localhost:5000'
// const production_api = ''

const token = localStorage.getItem('canva_token')

const api = axios.create({
    baseURL: "https://svgsaz.onrender.com",
    headers : {
        'Authorization' : token ? `Bearer ${token}`: ''
    },
    // withCredentials : true
})

export default api