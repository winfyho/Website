import axios from 'axios'
export function request(config){

    const instance = axios.create({
        baseURL:"",
        timeout:5000
    })

    return instance(config)
}