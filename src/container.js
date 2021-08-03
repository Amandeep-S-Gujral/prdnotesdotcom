class Container {
    constructor(){
    }

    setInternalModule(name, module){
        this[name] = () => module(this)
    }

    setModel(name, module){
        this[name] = () => module()
    }

    setExternalModule(name, module){
        this[name] = () => module
    }

    setUrl(name, url){
        this[name] = () => new URL(url)
    }

    setComponent(name, component){
        this[name] = component
    }

    getContainer(){
        return this
    }
}

export default Container