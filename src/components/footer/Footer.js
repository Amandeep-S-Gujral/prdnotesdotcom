import React from 'react'
import {Link} from 'react-router-dom'

import {footerList} from '../../systemConfig'

import '../../css/footer.css'

const Footer = () =>{
    return(
        <div id="footer">
            <ul>
                {footerList.map(val =><li key={val}>
                    <Link className="link2" to={`/${val}`}>{val}</Link>
                </li>)}
            </ul>

        </div>
    )
}

export default Footer