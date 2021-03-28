const url = 'https://us-central1-prdnotesdotcom.cloudfunctions.net/app/api/content'

const getContent = (cid, typ, cb) => {
    //fetch data from the api by passing cid as query params
    fetch(`${url}/${typ}/?cid=${cid}`, { method: 'GET', headers: { 'content-type': 'application/json' } })
        .then(res => res.json())
        .then(data => data.map(obj => cb(JSON.parse(obj.bdy))))
        .catch(err => cb(err))
}

export default getContent