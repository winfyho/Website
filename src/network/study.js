import { request } from "./request.js"
import { getFileList } from "./file.js"
import axios from 'axios'



export function getStudyMDFile(url) {
    return new Promise((resolve, reject) => {

        axios.get(`${url}`).then((res) => {
            // console.log("请求md文件", url, res);
            resolve(res)
        });

    })
}



