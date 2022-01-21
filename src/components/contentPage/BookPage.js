import React from "react";

const BookPage = ({ container, data, bookCover, handleChange }) => {
  return (
    <div className="bookPage">
      <h1 className="title">Hello Book</h1>
      <h2 className="subTitle">welcome to the world</h2>
      <img
        className="bookCover"
        alt="book cover"
        src={bookCover}
      />
      <div className="bookCoverButton">
        <img alt="front cover" src={JSON.parse(data.detail).frontImage} value='frontImage' onClick={handleChange}/>
        <img alt="back cover" src={JSON.parse(data.detail).backImage} value='backImage' onClick={handleChange}/>
      </div>
      <div className="store">
        {
          JSON.parse(data.store).map((obj, index) => <a
            key={index}
            className="storeButton"
            href={obj.url}
            target="_blank"
            rel="noreferrer">
            {obj.storeName}
          </a>)
        }
      </div>
      <div className="detail">
        <p>Author: {JSON.parse(data.detail).bookAuthor}</p>
        <p>Language: {JSON.parse(data.detail).language}</p>
        <p>Publisher: {JSON.parse(data.detail).publisher}</p>
        <p>Pages: {JSON.parse(data.detail).noOfPages}</p>
        <p>ISBN: {JSON.parse(data.detail).isbn}</p>
      </div>
      <div className="brief">
      {container.htmlReactParser(container.render().body(data.body))}
      </div>
    </div>
  );
};

export default BookPage;
