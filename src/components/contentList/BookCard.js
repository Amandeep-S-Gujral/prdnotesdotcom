import React from 'react'

import Share from '../general/Share'

import '../../css/bookCard.css'

const BookCard = ({obj}) => {
    return(
        <div className="bookCard">
            <img src ={obj.img} alt="book cover" />
            <div>
                <p className="lstTle">{obj.tle} ({obj.subTle})</p>
                <p className="cat">Category: {obj.cat}</p>
                <Share url='https://www.prdnotes.com/book' />
            </div>
        </div>
    )
}

export default BookCard