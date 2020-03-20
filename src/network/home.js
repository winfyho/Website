import { request } from "./request.js"


export function getHomeData() {
    // return request({
    //     url:"/home"
    // })

    // 模拟数据
    return new Promise((resolve, reject) => {

        const user = {
            username: "winfyho",
            password: "123456"
        }
        const banner = [
            {imgUrl:"1.jpg"},
            {imgUrl:"2.jpg"},
            {imgUrl:"3.jpg"},
            {imgUrl:"4.jpg"},
        ]
        const data = {
            user,
            banner
        }

        setTimeout(() => {
            resolve(data)
        }, 1000);
    })
}