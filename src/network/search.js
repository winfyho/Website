import {getAllFiles} from "./file.js"
import { log } from "util"

export function searchFile(keyword){
    let res = getAllFiles()
    // console.log(res);
    let results = []

    res.forEach(item => {
        var reg = new RegExp(keyword,'i');  
        if(item.match(reg)){
            results.push({
                path:item,
                title:item.split('/').slice(2)
            })
        }
    })
    return results
    
}