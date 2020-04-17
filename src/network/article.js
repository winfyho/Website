import {request} from "./request.js"
export function addArticleViews(id,num){
    return new Promise((resolve,reject) => {
        // console.log(`http://127.0.0.1:3000/article/views?id=${id}`);
        
        
        request({
            url:`http://193.112.121.234/views?id=${id}&num=${num}`,
            method:"get",
        }).then((res) => {
            resolve(res)
        })
    })
    
}

export function updateArticleLikes(id,newLikes){
    return new Promise((resolve,reject) => {
        // console.log(`/views?id=${id}`);
        // console.log(id,newLikes);
        
        
        request({
            url:`http://193.112.121.234/like?id=${id}&newLikes=${newLikes}`,
            method:"get",
        }).then((res) => {
            console.log(res);
            
            resolve("点赞成功",res.data.likes)
        })
    })
    
}