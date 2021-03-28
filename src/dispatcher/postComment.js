import cmtSorter from './commentSorter'

const url = 'http://localhost:5001/prdnotesdotcom/us-central1/app/api/comment'

let postCmt = (data, token, arr, cb) => {
    fetch(`${url}`, { method: 'POST', headers: { authorization: `${token}`, 'content-type': 'application/json' }, body: JSON.stringify(data) })
        .then(res => res.json())
        .then(data => {

            //create a new array containing the latest comment got in response of the API
            let newArr = arr === []? [data] : [...arr, data]

            //sort comments using cmtSorter
            return cb(cmtSorter(newArr))
        })
    .catch(e => window.alert(e))
}

export default postCmt