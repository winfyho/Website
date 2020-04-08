export function getLocalStorage(key){
    let value = window.localStorage.getItem(key)
    if(value){
        return JSON.parse(value)
    }else{
        return null
    }
}

export function setLocalStorage(key,value){
    if(value){
        window.localStorage.setItem("item",JSON.stringify(value))
        return {
            state:"success",
            setData:{...value}
        }
    }else{
        return {
            state:"error",
            errMsg:"set数据不能为空",
            key
        }
    }
}