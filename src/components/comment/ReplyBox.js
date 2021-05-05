import React, { useState } from 'react'
import Cookies from 'universal-cookie'

import {Comment} from '../../dispatcher/comment'

import '../../css/replyBox.css'

let ReplyBox = ({cid, rid, setRbState, list, setList}) => {

    let [bdy, setBdy] = useState()

    const handelChange = (e) => {
        setBdy(e.target.value)
    }

    let handlePost = async () =>{

        const cookies = new Cookies()
        //throw alert is user token is null (i.e. user is not signedIn)
        if(cookies.get('authToken') === undefined){
            return window.alert('Please SignIn/SignUp!')
        }
        
        //create reqBody before passing to POST API
        const authToken = cookies.get('authToken')
        const comment = new Comment('POST', cid, 'reply', bdy, rid, authToken)
        comment.postComment(list, setList)
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