import React from 'react'
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    VKShareButton,
    WhatsappShareButton,
    } from 'react-share'
import {
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    VKIcon,
    WhatsappIcon,
    } from "react-share";

let Share = ({ url }) => {
    return (
        <div>
            <WhatsappShareButton
                url={url}>
                <WhatsappIcon size={32} round={true} style={{padding: "5px"}}/>
            </WhatsappShareButton>
            <FacebookShareButton
                url={url}
                hashtag="#camperstribe">
                <FacebookIcon size={32} round={true} style={{padding: "5px"}} />
            </FacebookShareButton>
            <LinkedinShareButton
                url={url}>
                <LinkedinIcon size={32} round={true} style={{padding: "5px"}} />
            </LinkedinShareButton>
            <TwitterShareButton
                url={url}>
                <TwitterIcon size={32} round={true} style={{padding: "5px"}}/>
            </TwitterShareButton>
            <VKShareButton
                url={url}>
                <VKIcon size={32} round={true} style={{padding: "5px"}}/>
            </VKShareButton>
        </div>
    )
}

export default Share