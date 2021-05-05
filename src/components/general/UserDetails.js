import React from 'react'

import Cookies from 'universal-cookie'
import { auth } from "../../dispatcher/signInMethods";

import "../../css/userDetails.css"

const UserDetails = ({ setState }) => {

    const cookies = new Cookies()

    //open signInPopUp to choose provider
    let handleSignIn = () => {
        setState(true)
    }

    let handleSignOut = () => {

        //logout user
        auth.signOut()
            .then(() => {
                cookies.remove('prdUser', {path:'/'})
                cookies.remove('authToken', {path: '/'})
                window.location.reload()
                return
            })
            .catch(error => window.alert(error.message))
    }
    return (
        <div id='userMaster'>
            {/*render user details on login */}
            {cookies.get('prdUser') && <div id="userDetail">
                <img id='profilePic' src={cookies.get('prdUser').photoURL} alt='profilePic' />
                <p id='userName'>{cookies.get('prdUser').displayName}</p>
            </div>}

            {/*render button to signIn or signOut*/}
            {
                cookies.get('prdUser') === undefined ? <button className="signIn" onClick={handleSignIn}>SignIn/SignUp</button>
                    : <button className="signIn" onClick={handleSignOut}>SignOut</button>
            }
        </div>
    )
}

export default UserDetails