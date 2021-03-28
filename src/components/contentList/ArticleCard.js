import React from 'react'
import Share from '../Share'
import '../../css/articleCard.css'

const ArticleCard = ({obj}) => {
    return (
        <>
            <div className='articleCard'>
                <img src={obj.img} alt={obj.tle}/>
                <div>
                    <p className="listTle">{obj.tle}</p>
                    <Share url={obj.url} />
                    <p className="listCat">Category: {obj.cat.charAt(0).toUpperCase() + obj.cat.slice(1)}</p>
                </div>
            </div>
        </>
    )
}

export default ArticleCard