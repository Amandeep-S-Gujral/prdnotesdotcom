import React from "react"
import Cookies from 'universal-cookie'

import { signInProvider } from '../../dispatcher/signInMethods'
import { signInMethods } from '../../systemConfig'


import '../../css/signInPopUp.css'

const SignInPopUp = () => {

    const cookies = new Cookies()

    //login user
    let handleClick = (e) => {

        signInProvider(e.target.value)
            .then(result => {
                cookies.set('prdUser', result.user, {path:'/', sameSite: 'none', secure: true})
                return result.user
            })
            .then(user => user.getIdToken())
            .then(token => cookies.set('authToken', token, {path: '/'}))
            .then(() => window.location.reload())
            .catch(error => window.alert(error.message))
    }

    return (
        <div id="signInPopUp">
            <div>
                <header><h2>Choose Your SignIn Provider </h2></header>
                
                {/*render buttons based on the signIn methods saved in system config */}
                {signInMethods.map((obj, index) => <div className="signInDiv" key={index}>
                    <button className="signInBtn" onClick={handleClick} value={obj.method}>
                        <img src={obj.icon} alt={obj.method + ' icon'} />
                        {obj.method.charAt(0).toUpperCase() + obj.method.slice(1)}
                    </button>
                </div>)}
            </div>
        </div>
    )
}

export default SignInPopUp