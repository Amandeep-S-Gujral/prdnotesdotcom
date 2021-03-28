import React, { useState } from 'react'

import postCmt from '../../dispatcher/postComment'

import '../../css/replyBox.css'

let ReplyBox = ({cid, rid, userToken, setRbState, cmtArr, setCmt}) => {

    let [bdy, setBdy] = useState()

    const handelChange = (e) => {
        setBdy(e.target.value)
    }

    let handlePost = async () =>{

        //throw alert is user token is null (i.e. user is not signedIn)
        if(userToken === null){
            return window.alert('Please SignIn/SignUp!')
        }
        
        //create reqBody before passing to POST API
        const post = {
            bdy: bdy,
            cid: cid,
            typ: 'reply',
            lnk: rid      
        }
        await postCmt(post, userToken, cmtArr, setCmt)
        setBdy('')
        setRbState(false)

    }

    return (
        <div>
            <div className='replyBox'>
                <textarea onChange={handelChange} placeholder="share your opinion..."></textarea>
                <button onClick={handlePost}>Post</button>
            </div>
        </div>
    )
}

export default ReplyBox