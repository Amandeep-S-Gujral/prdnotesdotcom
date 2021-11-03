const commentSorter = (arr) => {

    //get the arry of comments where typ===comment
    let cmtArr = arr.filter(obj => obj.typ === 'comment')

    //sort the array in assending order
    let sortArr = arr.sort((a,b) =>a.timestamp-b.timestamp)
    let finalArr = []

    //club the reply with their respective comments
    cmtArr.forEach(obj => sortArr.forEach(obj1 => {
        if(obj.lnk === obj1.lnk){
            finalArr.push(obj1)
        }
    }))
    
    return finalArr
}

export default commentSorter