const contentDispatcherFactory = (obj) => new ContentDispatcher(obj)

export class ContentDispatcher {
    constructor(obj) {
        this.baseUrl = obj.baseUrl().href
        this.apiRequestModel = obj.apiRequestModel()
    }

    async getContentListByType(type) {
        let data
        const req = this.apiRequestModel.setHttpMethod('GET')
        await fetch(`${this.baseUrl}/contentList/?typ=${type}`, { ...req })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error(`response failed, code: ${res.status}`)
            })
            .then(obj => data = obj)
            .catch(err => { throw new Error(err) })
        return data
    }

    async getContentBodyByCid(cid) {
        let data = {}
        const req = this.apiRequestModel.setHttpMethod('GET')
        await fetch(`${this.baseUrl}/contentBody/?cid=${cid}`, { ...req })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error(`response failed, code: ${res.status}`)
            })
            .then(obj => {data = {...obj[0]}})
            .catch(err => window.alert(err))
        return data
    }

    async setSocialAttribute(attributeName, cid){
        let data
        const req = this.apiRequestModel.setHttpMethod('PATCH').setBody({cid})
        await fetch(`${this.baseUrl}/contentBody/socialAttribute/?attributeName=${attributeName}`, {...req})
            .then(res => {
                if(res.ok){
                    return res.json()
                }
                throw new Error(`response failed, code: ${res.status}`)
            })
            .then(obj => data = obj)
            .catch(err => window.alert(err))
        return data
    }
}

export default contentDispatcherFactory
