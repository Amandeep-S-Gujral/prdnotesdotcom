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
        const cid = this.state.data.cid
        const res = await this.props.container.contentDispatcher().setSocialAttribute(socialAttribute, cid)
        if(res){
            const data = this.state.data
            data[socialAttribute] = data[socialAttribute] + 1 || 1 //move this logic to server 07-Aug-2021
            this.setState({data})
            return
        }
    }

    render() {
        return (
            <>
            {console.log(this.state.data)}
                <div className="bar2">
                    <this.props.container.SocialAttributeButton data={this.state.data} handleClick={this.handleClick} />
                </div>
            </>
        )
    }
}


export default SocialBar