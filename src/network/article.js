import { request } from "./request.js"


export function updateArticleLikes(id, newLikes) {
    return new Promise((resolve, reject) => {
        // console.log(`/views?id=${id}`);
        // console.log(id,newLikes);


        request({
            url: `http://193.112.121.234/like?id=${id}&newLikes=${newLikes}`,
            method: "get",
        }).then((res) => {
            console.log(res);

            resolve("点赞成功", res.data.likes)
        })
    })

}

export async function _postArticle(article) {
    console.log(article)
    await request({
        url: `/article/post`,
        method: "post",
        data: article
    })
}

export function _updateArticle(article) {
    return new Promise((resolve, reject) => {
        request({
            url: `/article/update`,
            method: "post",
            data: article
        })
            .then((res) => resolve(res))
            .catch(err => reject(err))
    })
}

export function _deleteArticle(id) {
    return new Promise((resolve, reject) => {
        request({
            url: `/article/delete?id=${id}`,
            method: "get",
        })
            .then((res) => resolve(res))
            .catch(err => reject(err))
    })

}
