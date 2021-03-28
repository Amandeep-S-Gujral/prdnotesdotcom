import firebase from 'firebase/app'
import 'firebase/auth'
import config from '../serviceAccountKeys.json'

firebase.initializeApp(config);

const googleProvider = new firebase.auth.GoogleAuthProvider()
const fbProvider = new firebase.auth.FacebookAuthProvider()
const githubProvider = new firebase.auth.GithubAuthProvider()
const twitterProvider = new firebase.auth.TwitterAuthProvider()

googleProvider.setCustomParameters({ prompt: 'select_account' });
githubProvider.setCustomParameters({allow_signup: true})

export const auth = firebase.auth();

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)
export const signInWithFb = () => auth.signInWithPopup(fbProvider)
export const signInWithGithub = () => auth.signInWithPopup(githubProvider)
export const signInWithTwitter = () => auth.signInWithPopup(twitterProvider)
