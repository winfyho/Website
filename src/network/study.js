import { request } from "./request.js"
import { getFileList } from "./file.js"
import axios from 'axios'

export class Article {
    constructor(article) {
        this._id = article._id || ''
        this.url = article.url || ''
        this.title = article.title || '文章标题'
        this.topic = article.topic || ''
        this.body = article.body || ''
        this.time = article.time || 0
        this.views = article.views || 0
        this.likes = article.likes || 0
        this.comments = article.comments || []
    }
    addArticleViews() {
        return new Promise((resolve, reject) => {
            // console.log(`http://127.0.0.1:3000/article/views?id=${id}`);
            request({
                url: `http://127.0.0.1:3000/article/views?id=${this._id}&num=${this.views+1}`,
                method: "get",
            }).then((res) => {
                this.views += 1
                resolve(this.views)
            })
        })
    }
    addArticleLikes(){
        return new Promise((resolve,reject) => {
            // console.log(`http://127.0.0.1:3000/article/views?id=${id}`);
            // console.log(id,newLikes);
            request({
                url:`http://127.0.0.1:3000/article/like?id=${this._id}&newLikes=${this.likes+1}`,
                method:"get",
            }).then((res) => {
                this.likes += 1
                resolve(this.likes)
            })
        })
        
    }
    postComment(comment){
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
}

export function getStudyMDFile(url) {
    return new Promise((resolve, reject) => {

        axios.get(`${url}`).then((res) => {
            // console.log("请求md文件", url, res);
            resolve(res)
        });

    })
}



