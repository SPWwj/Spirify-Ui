import React from 'react';
import './Book.scss';

const Book = () => (
  <div className="book-component">
    <div className="cover">
      <div className="book">
        <label htmlFor="page-1" className="book__page book__page--1">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/193203/1111.jpg" alt="" />
        </label>

        <label htmlFor="page-2" className="book__page book__page--4">
          <div className="page__content">
            <h1 className="page__content-title">I</h1>
            <div className="page__content-blockquote">
              <p className="page__content-blockquote-text">Sample Text 1</p>
              <p className="page__content-blockquote-text">Sample Text 2</p>
              <p className="page__content-blockquote-text">Sample Text 3</p>
            </div>
          </div>
        </label>

        <input type="radio" name="page" id="page-1" />

        <input type="radio" name="page" id="page-2" />

        <label htmlFor="page-2" className="book__page book__page--2">
          <div className="book__page-front">
            <div className="page__content">
              <h1 className="page__content-book-title">Foundation</h1>
              <h2 className="page__content-author">Isaac Asimov</h2>
              {/* Other content of the page */}
            </div>
          </div>
          <div className="book__page-back">
            <div className="page__content">
              <h1 className="page__content-title">Contents</h1>
              {/* Other content of the page */}
            </div>
          </div>
        </label>
      </div>
    </div>
  </div>
);

export default Book;
