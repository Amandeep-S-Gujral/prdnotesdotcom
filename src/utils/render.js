const renderFactory = (container) => new Render(container)

class Render{
  constructor(container){
    this.container = container
  }

  body(data){
    const jsonData = JSON.parse(data)
    const htmlData = this.container.draftToHtml(jsonData)
    return htmlData
  }
}

export {
  Render,
  renderFactory
}