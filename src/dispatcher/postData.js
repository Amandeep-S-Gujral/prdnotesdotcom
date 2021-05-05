const url = 'https://us-central1-prdnotesdotcom.cloudfunctions.net/app/api'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidHJvdXRkb3R0ZWNobm9sb2dpZXNhdGdtYWlsZG90Y29tIn0.7kOwU84BWtuGbT1knrfBsmaYQUVxEK70M5IkXwB2dEI"

const postData = (data, endpoint, cb) => {
    fetch(`${url}/${endpoint}`, { method: 'POST', headers: { authorization: token, 'content-type': 'application/json' }, body: JSON.stringify(data) })
        .then(res => res.status === 200 ? cb('Thank You!') : window.alert('Try Again!'))
        .catch(err => window.alert(err))
}

export default postData