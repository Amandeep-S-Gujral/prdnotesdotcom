import { baseUrl } from '../systemConfig'
import commentSorter from '../modifiers/commentSorter'

export class Comment {
    constructor(method, cid, typ, bdy, lnk, tkn) {
        this.method = method
        this.cid = cid
        this.typ = typ
        this.bdy = bdy
        this.lnk = lnk
        this.tkn = tkn
    }

    //get comments
    getComment(cb) {

        const req = {
            method: this.method,
            headers: {
                "content-type": "application/json",
            },
            credentials: 'include',
            mode: 'cors'     
        }

        fetch(`${baseUrl}/comment/?cid=${this.cid}`, req)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error(`response failed, ${res.status}`)
            })
            .then(data => {
                let arr = []
                if (data) {
                    data.map(obj => arr.push(obj))
                    return cb(commentSorter(arr))
                }
                //if data is undefined, pass null to callback function
                cb(null)
            })
            .catch(err => console.error(err))
    }

    //post comment
    postComment(arr, cb) {

        const req = {
            method: this.method,
            headers: {
                authorization: this.tkn,
                "content-type": "application/json"
            },
            credentials:'include',
            mode: 'cors',
            body: JSON.stringify({
                bdy: this.bdy,
                cid: this.cid,
                typ: this.typ,
                lnk: this.lnk
            })
        }

        fetch(`${baseUrl}/comment`, req)
        .then(res =>{
            if(res.ok){
                return res.json()
            }
            
            throw new Error('Authorization Failed! Please try to login again.')
        })
        .then(data =>{
            
            //check if array of comments is not null
            if(arr !== null){
                return cb(commentSorter([...arr, data]))
            }
            return cb([data])
        })
        .catch(err => window.alert(err))
    }
}