import React, { useState } from 'react'

import unixToUtc from '../../modifiers/unixToUtc'
import ReplyBox from './ReplyBox'

import '../../css/commentView.css'

const CommentView = ({ cmt, cid, list, setList }) => {

    const [rbState, setRbState] = useState(false) //reply box state

    const handleClick = () => {
        setRbState(!rbState)
    }

    return (
        <div>
        {/*comment view is generated dynamically based on the key typ */}
            <div className={cmt.typ}>
                <img className="userPic" src={cmt.pic} alt="User Profile pic" />
                <div>
                    <p className="userName">{cmt.nam} <span className="commentTime">{unixToUtc(cmt.timestamp)}</span></p>
                    <p className="userComment">{cmt.bdy}</p>
                </div>

                {/*click to open reply box to add reply to a comment */}
                {cmt.typ === 'comment' && <button className="userReply" onClick={handleClick}>Reply</button>}

            </div>

            {/*render reply box if typ===comment & replyBoxState===true */}
            {cmt.typ === 'comment' && rbState && <ReplyBox cid={cid} rid={cmt.rid} setRbState={setRbState} list={list} setList={setList} />}
        </div>
    )
}

export default CommentView