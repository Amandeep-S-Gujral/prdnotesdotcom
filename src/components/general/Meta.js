import React from 'react'
import Helmet from 'react-helmet'

const Meta = ({obj}) => {
    return (
        <Helmet>
            {/* general tags */}
            <title>PrdNotes.com</title>
            <meta name="title" content={obj.tle} />
            <meta name="description" content={obj.des} />

            {/* openGraph tags */}
            <meta property="og:url" content={obj.url} />
            <meta property="og:title" content={obj.tle} />
            <meta property="og:description" content={obj.des} />
            <meta property="og:image" content={obj.img} />
            <meta property="og:type" content="website" />

            {/* Twitter Card tags */}
            <meta name="twitter:title" content={obj.tle} />
            <meta name="twitter:description" content={obj.des} />
            <meta name="twitter:image" content={obj.img} />
            <meta name="twitter:card" content="summary" />
        </Helmet>
    )
}

export default Meta
