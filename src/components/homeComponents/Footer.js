import React from 'react'
import {Link} from 'react-router-dom'

import {ftrList} from '../../systemConfig'

import '../../css/footer.css'

const Footer = () =>{
    return(
        <div className="footer">
            <ul>
                {ftrList.map(val =><li key={val}>
                    <Link className="footerLink" to={`/${val}`}>{val.replaceAll('-',' ')}</Link>
                </li>)}
            </ul>

        </div>
    )
}

export default Footer