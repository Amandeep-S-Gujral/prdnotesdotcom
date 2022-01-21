import React from 'react'

const SocialAttributeButton = ({ data, handleClick }) => {
    return (
        <>
            <button className="button1" value='like' onClick={handleClick}>
            👍 like {data.like ? data.like : ""}
            </button>
            {/* <button className="button1" value="share" onClick={handleClick}>
                🍻 share {data.share ? data.share : ""}
            </button> */}
        </>
    )
}

export default SocialAttributeButton