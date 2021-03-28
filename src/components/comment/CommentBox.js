import React, { useState, useEffect } from 'react'

import CommentView from './CommentView'

import getComment from '../../dispatcher/getComment'
import postCmt from '../../dispatcher/postComment'

import '../../css/commentBox.css'

let CommentBox = ({ cid, userToken }) => {

    let [bdy, setBdy] = useState() 
    let [cmt, setCmt] = useState([]) //array of comments stored from GET API

    useEffect(() => {
        const fetchData = async () => await getComment(cid, setCmt)
        fetchData()

    }, [cid])

    let handleChange = (e) => {
        setBdy(e.target.value)
    }

    let canclePost = () => {
        setBdy('')
    }

    let handlePost = async () => {

        //throw alert is user token is null (i.e. user is not signedIn)
        if (userToken === null) {
            return window.alert('Please SignIn/SignUp!')
        }

        //create reqBody before passing to POST API
        const post = {
            bdy: bdy,
            cid: cid,
            typ: 'comment',
            lnk: null
        }
        await postCmt(post, userToken, cmt, setCmt)
        setBdy('')
    }

    return (
        <div>
            <div className="commentBox">
                <textarea placeholder="Share your opinion..." value={bdy} onChange={handleChange}></textarea>
                <div>

                    {/* if the cmt is empty, the comment count will not render */}
                    {cmt && <p>{cmt.length} comments</p>}
                    <div>
                        <p className="canclePost" onClick={canclePost}>Cancle</p>
                        <button className="submitPost" onClick={handlePost}>Post</button>
                    </div>
                </div>

            </div>

            {/*render all comments in the array if cmt !== undefned */}
            {cmt && cmt.map(obj => <CommentView cmt={obj} key={obj.rid} cid={cid} rid={obj.rid} userToken={userToken} cmtArr={cmt} setCmt={setCmt} />)}

        </div>
    )
}

export default CommentBox