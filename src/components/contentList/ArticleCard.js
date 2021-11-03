import React from 'react'
import Share from '../general/Share'
import '../../css/articleCard.css'

const ArticleCard = ({obj}) => {
    return (
        <>
            <div className='articleCard'>
                <img src={obj.image} alt={obj.title}/>
                <div>
                    <p className="listTle">{obj.title}</p>
                    <p className="listCat">Category: {obj.category.charAt(0).toUpperCase() + obj.category.slice(1)}</p>
                    <Share url={obj.url} />
                </div>
            </div>
        </>
    )
}

export default ArticleCard