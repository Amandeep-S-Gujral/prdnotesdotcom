const contentListDispatcherFactory = (obj) => new ContentListDispatcher(obj)

export class ContentListDispatcher {
    constructor(obj) {
        this.url = new URL('contentList/', obj.baseUrl())
        this.apiRequestModel = obj.apiRequestModel()
    }

    async getContentListByType(type) {
        const req = this.apiRequestModel.setHttpMethod('GET').setBodyNull()
        this.url.search = new URLSearchParams({type})
        return await this.fetch(this.url, {...req})
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

export default contentListDispatcherFactory
