import React from 'react'

const WithContentData = (container) => {
    return class ContentContainer extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                cid: this.props.match.params.cid,
                url: "https://prdnotes.com" + this.props.match.url
            }
        }

        async componentDidMount() {
            let res = await container.contentDispatcher().getContentBodyByCid(this.state.cid)
            const data = res.pop()
            this.setState({data})
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
                {console.log(this.state)}
                    <container.Header />
                    <container.SocialBar container={container} data={this.state.data} />
                    <div className="display">
                        <container.Page container={container} data={this.state.data} />
                        <h3>Share</h3>
                        <container.Share url={this.state.url} />
                        <container.CommentBox cid={this.state.cid} />
                    </div>
                    <container.Footer />
                </>
            )
        }
    }
}

export default WithContentData