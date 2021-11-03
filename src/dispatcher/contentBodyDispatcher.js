const contentBodyDispatcherFactory = (obj) => new ContentBodyDispatcher(obj)

export class ContentBodyDispatcher {
    constructor(obj) {
        this.url = new URL('contentBody/', obj.baseUrl())
        this.apiRequestModel = obj.apiRequestModel()
    }

    async getContentBodyByCid(cid) {
        const req = this.apiRequestModel.setHttpMethod('GET').setBodyNull()
        this.url.search = new URLSearchParams({ cid })
        return await this.fetch(this.url, { ...req })
    }

    async setSocialAttribute(attributeName, cid) {
        const req = this.apiRequestModel.setHttpMethod('PATCH').setBody({ cid })
        const url = new URL('socialAttribute/', this.url)
        url.search = new URLSearchParams({ attributeName })
        return await this.fetch(url, { ...req })
    }

    async fetch(url, req) {
        let data
        await fetch(url, req)
            .then(res => res.json())
            .then(obj => data = obj)
            .catch(err => data = err)
        return data
    }
}

export default contentBodyDispatcherFactory
