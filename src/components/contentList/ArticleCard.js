import React from 'react'
import Share from '../general/Share'
import '../../css/articleCard.css'

const ArticleCard = ({obj}) => {
    return (
        <>
            <div className='articleCard'>
                <img src={obj.img} alt={obj.tle}/>
                <div>
                    <p className="listTle">{obj.tle}</p>
                    <p className="listCat">Category: {obj.cat.charAt(0).toUpperCase() + obj.cat.slice(1)}</p>
                    <Share url={obj.url} />
                </div>
            </div>
        </>
    )
}

export default ArticleCard