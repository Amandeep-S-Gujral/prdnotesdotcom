import cmtSorter from './commentSorter'

const url = 'http://localhost:5001/prdnotesdotcom/us-central1/app/api/comment'

const getComment = async(cid, cb) => {
    fetch(`${url}/?cid=${cid}`, {method: 'GET', headers:{'content-type': 'application/json'}})
    .then(res => res.json())
    .then(data => {
        
        console.log(data)
        //add all the objects into an array
        let arr = []
        data.map(obj =>arr.push(obj))

        //sort array of comments received via api using comment sorter
        cb(cmtSorter(arr))
    })
    .catch(err => console.log(err))
}

export default getComment