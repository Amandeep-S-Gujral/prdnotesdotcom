import { baseUrl } from '../systemConfig'

export class Content {
    constructor(method, typ, cid) {
        this.typ = typ
        this.method = method
        this.cid = cid
    }

    //get content list
    getContentList(cb) {

        const req = {
            method: this.method,
            headers: {
                "content-type": "application/json",
            }
        }

        fetch(`${baseUrl}/content/${this.typ}`, req)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error(`response failed, code: ${res.status}`)
            })
            .then(data => cb(data))
            .catch(err => window.alert(err))
    }

    //get content body
    getContentBdy(cb) {

        const req = {
            method: this.method,
            headers: {
                "content-type": "application/json"
            }
        }

        fetch(`${baseUrl}/content/${this.typ}/?cid=${this.cid}`, req)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error(`response failed, ${res.status}`)
            })
            .then(data => data.map(obj => cb(JSON.parse(obj.bdy))))
            .catch(err => window.alert(err))
    }
}

