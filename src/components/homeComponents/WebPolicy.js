import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import parse from 'html-react-parser'

import { AdminDoc } from '../../dispatcher/adminDoc'

import '../../css/webPolicy.css'

const PrivacyPolicy = () => {

    const { pathname } = useLocation()
    let [data, setData] = useState()

    let adminDoc = new AdminDoc('GET', pathname.substring(1))

    useEffect(() => {
        adminDoc.getDocByNam(setData)

        return () => setData('')
    }, [])
    return (
        <div className='policyDisplay'>

            {/*show loading is data === undefined */}
            {!data && <p>Loading...</p>}
            
            {/*render html response id data is !== undefined */}
            {data && data.map(obj => parse(obj.bdy))}
        </div>
    )
}

export default PrivacyPolicy