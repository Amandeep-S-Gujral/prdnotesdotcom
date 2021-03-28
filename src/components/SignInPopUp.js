import React from "react"
import Cookies from 'universal-cookie'

import { signInWithGoogle, signInWithFb, signInWithGithub, signInWithTwitter } from '../dispatcher/signInMethods'
import { signInMethods } from '../systemConfig'

import '../css/signInPopUp.css'

const SignInPopUp = ({ setState}) => {

    const cookies = new Cookies()

    //close the PopUp on click of close button
    let handleClose = () => {
        document.getElementById('signInPopUp').style.display = "none"
        return setState(false)
    }

    //login user
    let handleClick = (e) => {

        //login via google account
        if (e.target.value === 'google') {
            signInWithGoogle()
                .then(result => {
                    cookies.set('prdUser', result.user)
                    return result.user
                })
                .then(user => user.getIdToken())
                .then(token => cookies.set('prdToken', token))
                .then(() => setState(false))
                .catch(error => window.alert(error.message))
        }

        //signIn with facebook        
        if (e.target.value === 'facebook'){
            signInWithFb()
                .then(result =>{
                    cookies.set('prdUser', result.user)
                    return result.user
                })
                .then(user => user.getIdToken())
                .then(token => cookies.set('prdToken', token))
                .then(() => setState(false))
                .catch(error => window.alert(error.message))
        }

        //signIn with twitter
        if (e.target.value === 'twitter'){
            signInWithTwitter()
                .then(result =>{
                    cookies.set('prdUser', result.user)
                    return result.user
                })
                .then(user => user.getIdToken())
                .then(token => cookies.set('prdToken', token))
                .then(() => setState(false))
                .catch(error => window.alert(error.message))
        }

        //signIn with github
        if (e.target.value === 'github'){
            signInWithGithub()
                .then(result =>{
                    cookies.set('prdUser', result.user)
                    console.log(cookies.get('prdUser'))
                    return result.user
                })
                .then(user => user.getIdToken())
                .then(token => cookies.set('prdToken', token))
                .then(() => setState(false))
                .catch(error => window.alert(error.message))
        }
    }

    return (
        <div id="signInPopUp">
            <div>
                <header><h2>Choose Your SignIn Provider </h2>
                    <button className="closeBtn" onClick={handleClose}>X</button></header>

                {/*render buttons based on the signIn methods saved in system config */}
                {signInMethods.map((obj, index) => <div className="signInDiv" key={index}>
                    <button className="signInBtn" onClick={handleClick} value={obj.method}>
                        <img src={obj.icon} alt={obj.method+' icon'} />
                        {obj.method.charAt(0).toUpperCase() + obj.method.slice(1)}
                    </button>
                </div>)}
            </div>
        </div>
    )
}

export default SignInPopUp