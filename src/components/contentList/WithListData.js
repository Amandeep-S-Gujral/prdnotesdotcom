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
            console.log(data)
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
                    <container.Header />
                    <div className='display'>
                        {this.state.data && <>
                            {this.state.data.map((obj, index) =>
                                <a className="linkNoDecoration" key={index} href={`${this.state.url}/${obj.cid}`} >
                                    <container.DisplayCard obj={obj} />
                                </a>
                            )}
                        </>}
                    </div>
                    <container.Footer />
                </>
            )
        }
    }
}

export default WithListData