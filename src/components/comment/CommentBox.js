import React, { useState, useEffect } from 'react'
import Cookies from 'universal-cookie'

import CommentView from './CommentView'
import {Comment} from '../../dispatcher/comment'

import '../../css/commentBox.css'

let CommentBox = ({ cid }) => {

    let [bdy, setBdy] = useState() 
    let [list, setList] = useState(null) //array of comments stored from GET API

    const cookies = new Cookies()

    useEffect(() => {
        const comment = new Comment('GET', cid)
        comment.getComment(setList)
    }, [cid])

    let handleChange = (e) => {
        setBdy(e.target.value)
    }

    let canclePost = () => {
        setBdy('')
    }

    let handlePost = () => {

        //throw alert is user token is null (i.e. user is not signedIn)
        if ( cookies.get('authToken') === undefined) {
            return window.alert('Please SignIn/SignUp!')
        }

        //post comment onto the database
        const authToken = cookies.get('authToken')
        const comment = new Comment('POST', cid, 'comment', bdy, null, authToken)
        comment.postComment(list, setList)
        setBdy('')
    }

    return (
        <div>
            <div className="commentBox">
                <textarea placeholder="Share your opinion..." value={bdy} onChange={handleChange}></textarea>
                <div>

                    {/* if the cmt is empty, the comment count will not render */}
                    {list === null? <p>0 comment</p> : list && <p>{list.length} comments</p>}
                    <div>
                        <p className="canclePost" onClick={canclePost}>Cancle</p>
                        <button className="submitPost" onClick={handlePost}>Post</button>
                    </div>
                </div>
            </div>

            {/*render all comments in the array if cmt !== undefned */}
            {list && list.map(obj => <CommentView cmt={obj} key={obj.rid} cid={cid} list={list} setList={setList} />)}

        </div>
    )
}

export default CommentBox