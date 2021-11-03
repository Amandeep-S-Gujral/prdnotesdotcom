import React from 'react'

const renderBook = (array) => {
    let compArr = [] //react dom array which will be retuned as output of the function

    array.forEach(obj => {
        //render title in h1 tag
        if (obj.id === 'tle') {
            compArr.push(
                <h1 key={obj.id} className={obj.id}>
                    {obj.cnt}
                </h1>
            )
        }

        //render subTitle in h2 tag
        if (obj.id === 'subTle') {
            compArr.push(
                <h2 key={obj.id} className={obj.id}>
                    {obj.cnt}
                </h2>
            )
        }

        // render bookImages in img tag
        if (obj.id === 'bokImg') {
            compArr.push(<div className={obj.id}>
                <img id='bokImgDisplay' alt="book cover" src={obj.cnt[0].url} />
                <div className='bokImgBtn'>
                    {obj.cnt.map(obj =>
                        <img
                            alt={`${obj.id} book cover`}
                            src={obj.url}
                            key={obj.id}
                            type="button"
                            name={obj.id}
                            onClick={handleClick} />
                    )}</div>
            </div>)
        }

        //render online store affilate links in select tag
        if (obj.id === 'str') {
            compArr.push(
                <div key={obj.id} className={obj.id}>

                    {/*str list button */}
                    <button className='strBtn'>
                        Online Stores ▼
                    </button>

                    {/*str List Dropdown */}
                    <div className='strLst'>
                    <ul>
                        {obj.lst.map(obj => <li key={obj.sit}>
                                <a
                                    className='strLnk'
                                    href={obj.url}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    {obj.sit}
                                </a>
                            </li>
                        )}
                        </ul>
                    </div>
                </div>
            )
        }

        //render author i anchor tag
        if (obj.id === 'aut') {
            compArr.push(
                <div className={obj.id}>
                    <label className="author">Author: <a href={obj.liUrl}
                        target="_blank"
                        rel="noopener noreferrer">
                        {obj.cnt}
                    </a></label>
                </div>
            )
        }

        //render languages in label tag
        if (obj.id === 'lag') {
            compArr.push(
                <div className={obj.id}>
                    <label>Languages: {obj.cnt.toString()}
                    </label>
                </div>
            )
        }

        //render pages in label tag
        if (obj.id === 'pgs') {
            compArr.push(
                <div className={obj.id}>
                    <label>
                        Pages: {obj.cnt}
                    </label>
                </div>
            )
        }

        //render publisher in label tag
        if (obj.id === 'pub') {
            compArr.push(
                <div className={obj.id}>
                    <label>
                        Publisher: {obj.cnt}
                    </label>
                </div>
            )
        }

        //render brief in p tag
        if (obj.id === 'brf') {
            compArr.push(
                <div className={obj.id}>
                    <label>Review:</label>
                    <p>{obj.cnt}</p>
                </div>
            )
        }

    })
    return compArr
}

const handleClick = (e) => document.getElementById('bokImgDisplay').src = e.target.src

export default renderBook