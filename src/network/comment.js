import {request} from "./request.js"
export function postComment(comment){
    return new Promise((resolve,reject) => {
        // console.log(comment);
        
        request({
            url:"http://127.0.0.1:3000/comment/add",
            method:"post",
            data:comment
        }).then((res) => {
            resolve(res)
        })
    })
    
}