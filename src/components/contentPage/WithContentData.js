import React from 'react'

const WithContentData = (container) => {
    return class ContentContainer extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                cid: this.props.match.params.cid
            }
        }

        async componentDidMount() {
            let data = await container.contentDispatcher().getContentBodyByCid(this.state.cid)
            this.setState({ data })
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
                    <container.SocialBar container={container} />
                    <div className="display">
                        <container.Page container={container} type={this.props.type} data={JSON.parse(this.state.data.bdy)} />
                    </div>
                    <container.Footer />
                </>
            )
        }
    }
}

export default WithContentData