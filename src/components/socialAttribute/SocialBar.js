import React from 'react'

import '../../css/socialBar.css'

class SocialBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    async handleClick(e) {
        const socialAttribute = e.target.value
        const cid = this.props.data.cid
        const data = await this.props.container.contentDispatcher().setSocialAttribute(socialAttribute, cid)
    }

    render() {
        return (
            <>
                <div className="bar2">
                    <this.props.container.SocialAttributeButton data={this.state.data} handleClick={this.handleClick} />
                </div>
            </>
        )
    }
}


export default SocialBar