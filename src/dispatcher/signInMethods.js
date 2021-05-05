import firebase from 'firebase/app'
import 'firebase/auth'
import config from '../serviceAccountKeys.json'

firebase.initializeApp(config);

//generate provider instances of auth provider
const googleProvider = new firebase.auth.GoogleAuthProvider()
const fbProvider = new firebase.auth.FacebookAuthProvider()
const githubProvider = new firebase.auth.GithubAuthProvider()
const twitterProvider = new firebase.auth.TwitterAuthProvider()

//set up custom parameters for auth providers
googleProvider.setCustomParameters({ prompt: 'select_account' });
githubProvider.setCustomParameters({allow_signup: true})

export const auth = firebase.auth();

const signInWithGoogle = () => auth.signInWithPopup(googleProvider)
const signInWithFb = () => auth.signInWithPopup(fbProvider)
const signInWithGithub = () => auth.signInWithPopup(githubProvider)
const signInWithTwitter = () => auth.signInWithPopup(twitterProvider)

export const signInProvider = (provider) => {
    switch (provider){
        case 'google':
            return signInWithGoogle()
        case 'facebook':
            return signInWithFb()
        case 'github':
            return signInWithGithub()
        case 'twitter':
            return signInWithTwitter()
        default:
            console.log('Please select the provider!')
    }
}