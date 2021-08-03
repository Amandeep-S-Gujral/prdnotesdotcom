const apiRequestModelFactory = (obj) => new ApiRequestModel()

class ApiRequestModel {
    constructor() {
        this.method = ''
        this.headers = {
            "content-type": "application/json",
            authorization: null
        }
        this.credentials = 'include'
        this.mode = 'cors'
        this.body = null
    }

    setHttpMethod(method) {
        if (['GET', 'POST', 'PATCH', 'DELETE'].indexOf(method) > -1) {
            this.method = method
            return this
        }
        throw new Error('invalid http method')
    }

    setAuthorization(token) {
        this.authorization = token
    }

    setBody(obj) {
        if (typeof obj == 'object') {
            this.body = JSON.stringify(obj)
            return this
        }
        throw new Error('invalid request body object')
    }
}

export default apiRequestModelFactory