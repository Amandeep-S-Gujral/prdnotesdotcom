import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import parse from 'html-react-parser'

import { AdminDoc } from '../../dispatcher/adminDoc'
import Header from '../header/Header'
import Footer from '../footer/Footer'

import '../../css/webPolicy.css'

const PrivacyPolicy = () => {

    const { pathname } = useLocation()
    let [data, setData] = useState()
    console.log(pathname)

    let adminDoc = new AdminDoc('GET', pathname.substring(1))

    useEffect(() => {
        adminDoc.getDocByNam(setData)

        return () => setData('')
    }, [])
    return (
        <>
            <Header />
            <div className='policyDisplay'>


                {/*show loading is data === undefined */}
                {!data && <p>Loading...</p>}

                {/*render html response id data is !== undefined */}
                {data && data.map(obj => parse(obj.bdy))}
            </div>
            {data && <Footer />}
        </>
    )
}

export default PrivacyPolicy