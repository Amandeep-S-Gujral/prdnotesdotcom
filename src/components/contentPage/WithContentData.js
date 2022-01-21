import React from 'react'

const WithContentData = (container) => {
    return class ContentContainer extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                cid: this.props.match.params.cid,
                url: "https://prdnotes.com" + this.props.match.url,
            }
            this.handleBookCoverChange = this.handleBookCoverChange.bind(this)
        }

        async componentDidMount() {
            let res = await container.contentDispatcher().getContentBodyByCid(this.state.cid)
            const data = res.pop()
            if (data.type === 'book') {
                let bookCover = JSON.parse(data.detail).frontImage
                this.setState({ data, bookCover })
                return
            }
            this.setState({ data })
        }

        handleBookCoverChange = (e) => {
            const bookCover = e.target.src
            this.setState({ bookCover })
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
                    <container.SocialBar container={container} data={this.state.data} />
                    <div className="display">
                        <container.Page
                            container={container}
                            data={this.state.data}
                            bookCover={this.state.bookCover}
                            handleChange={this.handleBookCoverChange} />
                        <div>
                            <h3>Share</h3>
                            <container.Share url={this.state.url} />
                            <container.CommentBox cid={this.state.cid} />
                        </div>
                    </div>
                    <container.Footer />
                </>
            )
        }
    }
}

export default WithContentData