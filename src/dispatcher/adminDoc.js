import { baseUrl } from '../systemConfig'

export class AdminDoc {
    constructor(method, nam) {
        this.method = method
        this.nam = nam
    }

    async getDocByNam(cb) {

        const req = {
            method : this.method,
            headers: {
                "content-type": "application/json"
            },
            credentials: "include",
            mode: "cors"
        }

        await fetch(`${baseUrl}/adminDoc/${this.nam}`, req)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error(`response failed, code: ${res.status}`)
            })
            .then(data => cb(data))
            .catch(err => window.alert(err))
    }
}
