const url = 'https://us-central1-prdnotesdotcom.cloudfunctions.net/app/api/content'

const getList = (endPoint, cb) => {
    fetch(`${url}/${endPoint}`, { method: 'GET', headers: { 'content-type': 'application/json' } })
        .then(res => res.json())
        .then(data => cb(data))
        .catch(err => cb(err))
}

export default getList