import { request } from "./reques.js"
import { getFileList } from "./file.js"
import axios from 'axios'

export function getStudyPager(name) {

    return new Promise((resolve, reject) => {

        // 获取文件列表，侧边栏数据
        const pager = getFileList(name)
        // console.log(pager);

        resolve(pager)
    })
}

export function getStudyMarkdown(url) {
    return new Promise((resolve, reject) => {


        axios.get(url).then((res) => {
            console.log("请求md文件", url, res);
            resolve(res.data)
        });

    })
}

