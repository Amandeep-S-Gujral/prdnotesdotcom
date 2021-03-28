import React from "react";
import { Helmet } from "react-helmet";

const HomeMeta = () =>{
    return(
        <Helmet>
        {/* general tags */}
        <title>PrdNotes.com</title>
        <meta name="title" content="PrdNotes.com" />
        <meta
          name="description"
          content="We compile and share product knowledge"
        />

        {/* openGraph tags */}
        <meta name="og:url" content="www.prdnotes.com" />
        <meta name="og:title" content="Welcome to PrdNotes.com" />
        <meta
          name="og:description"
          content="We compile and share product knowledge"
        />
        <meta
          name="og:image"
          content="https://ik.imagekit.io/prdnotes/Landing_page/product-management-illustration-ny-prdnotes.svg"
        />
        <meta name="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:title" content="PrdNotes.com" />
        <meta
          name="twitter:description"
          content="We compile and share product knowledge"
        />
        <meta
          name="twitter:image"
          content="https://ik.imagekit.io/prdnotes/Landing_page/product-management-illustration-ny-prdnotes.svg"
        />
        <meta name="twitter:card" content="summary" />
      </Helmet>
    )
}

export default HomeMeta