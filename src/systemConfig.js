let navList = [
    'article',
    'book'
]

let ftrList = [
    'privacy-policy',
    'terms-of-use'
]

let baseUrl = 'https://us-central1-prdnotesdotcom.cloudfunctions.net/app/api'

// let baseUrl = 'http://localhost:5001/prdnotesdotcom/us-central1/app/api'

let signInMethods = [
    {
        method: 'google',
        icon: 'https://ik.imagekit.io/prdnotes/Icons/google_logo.svg',
    },
    {
        method: 'facebook',
        icon: 'https://ik.imagekit.io/prdnotes/Icons/faceBook_logo.svg'
    },
    {
        method: 'twitter',
        icon: 'https://ik.imagekit.io/prdnotes/Icons/twitter_logo.svg'
    },
    {
        method: 'github',
        icon: 'https://ik.imagekit.io/prdnotes/Icons/gitHub_logo.svg'
    }
]

export { navList, ftrList, baseUrl, signInMethods }