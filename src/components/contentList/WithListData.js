import React from 'react'

const WithListData = (container) => {

    return class ListContainer extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                url: this.props.match.url,
                type: this.props.type
            }
        }

        async componentDidMount() {
            await container.apiRequestModel().setHttpMethod('GET')
            let data = await container.contentDispatcher().getContentListByType(this.state.type)
            this.setState({ data: [...data] })
        }

        render() {
            if (this.state.data === undefined) {
                return (
                    <>
                        <container.Header />
                        <container.Loading />
                    </>
                )
            }
            return (
                <>
                {console.log(this.state.url)}
                    <container.Header />
                    <div className='display'>
                        {this.state.data && <div>
                            {this.state.data.map(obj =>
                                <a className = "linkNoDecoration"href={`${this.state.url}/${obj.cid}`} >
                                    <container.DisplayCard obj={obj} />
                                </a>
                            )}
                        </div>}
                    </div>
                    <container.Footer />
                </>
            )
        }
    }
}

export default WithListData