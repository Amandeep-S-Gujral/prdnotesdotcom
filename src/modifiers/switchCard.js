import React from 'react'

import ArticleCard from '../components/contentList/ArticleCard'
import BookCard from '../components/contentList/BookCard'

const switchCard = (pgTyp, obj) =>{

    switch(pgTyp){
        case 'article':
            return <ArticleCard obj={obj} />
        case 'book':
            return <BookCard obj={obj} />
        default:
            return window.alert('Please select the page!')
    }
}

export default switchCard