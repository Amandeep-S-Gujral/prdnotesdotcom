import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import renderBook from '../../modifiers/renderBook'

import CommentBox from '../comment/CommentBox'
import Meta from '../general/Meta'
import Share from '../general/Share'

import '../../css/bookPage.css'

const BookPage = () => {

    let { cid } = useParams()
    let [data, setData] = useState()

    // const content = new Content('GET', 'books', cid)

    // useEffect(() => {
    //     content.getContentBdy(setData)
    // }, [cid])

    return (
        <div className="display">

            {/*show loading till the data is undefined */}
            {!data && <p>Loading...</p>}

            {/*render meta tags for the page if data !== undefined */}
            {data && <Meta obj={data[data.length-1]} />}

            {/*render page content if data !== undefined */}
            <div className="book">{data && renderBook(data)}</div>

            {/*render share bar for the page */}
            {data && <div className='share'>
                <h2>Share</h2>
                <Share url={data[data.length - 1].url} />
            </div>}

            {/*render comment box for the page */}
            {data && <CommentBox cid={cid} />}

        </div>
    )

}

export default BookPage