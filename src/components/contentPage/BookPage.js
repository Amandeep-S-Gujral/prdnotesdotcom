import React from 'react'

const BookPage = ({container, data}) => {
    return(
        <div className='bookPage'>
        {container.htmlReactParser(container.render().body(data.body))}
      </div>
    )
}