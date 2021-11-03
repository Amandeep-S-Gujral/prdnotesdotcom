import React from 'react'
import Share from '../general/Share'

import '../../css/bookCard.css'

const BookCard = ({obj}) => {
    return(
        <div className="bookCard">
            <img src ={obj.image} alt="book cover" />
            <div>
                <p className="lstTle">{obj.title} ({obj.subTitle})</p>
                <p className="cat">Category: {obj.category}</p>
                <Share url='https://www.prdnotes.com/book' />
            </div>
        </div>
    )
}

export default BookCard