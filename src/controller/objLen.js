let objLen = (obj) => {
    let count = 0
    let i
    for(i in obj){
        if(obj.hasOwnProperty(i)){
            count++
        }
    }
    return count;
}

export default objLen