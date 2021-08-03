import React from 'react'

import Cookies from 'universal-cookie'
import { auth } from "../../dispatcher/signInMethods";
import SignInPopUp from './SignInPopUp';

import "../../css/userDetails.css"

const UserDetails = () => {

    const cookies = new Cookies()

    let handleSignOut = () => {

        //logout user
        auth.signOut()
            .then(() => {
                cookies.remove('prdUser', { path: '/', secure: true })
                cookies.remove('authToken', { path: '/', secure: true })
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
                cookies.get('prdUser') === undefined ?
                    <span className="link1" id="signIn">SignIn/SignUp <SignInPopUp /></span>
                    : <button id="signOut" onClick={handleSignOut}>SignOut</button>
            }
        </div>
    )
}

export default UserDetails