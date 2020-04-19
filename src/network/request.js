import axios from 'axios'
export function request(config) {
    // let toast = config.toast
    // console.log(toast.showToast({
    //     icon:'loading',
    //     title:'加载中'
    // }))
    
    const instance = axios.create({
        baseURL: "http://127.0.0.1:3000/",
        timeout: 5000
    })

    // 拦截请求request
    instance.interceptors.request.use(
        config => {
            // console.log(`拦截request的success`,config)
            return config
        },
        err => {
            // console.log(`拦截request的err`,err)
            return err
        })


    // 拦截响应response
    instance.interceptors.response.use(
        response => {
            // console.log(`response success被拦截`,response);
            return response.data
        },
        err => {
            // console.log(`response err被拦截`,err);
            return err 
        }
    )

    // 返回一个Promise
    return instance(config)
}