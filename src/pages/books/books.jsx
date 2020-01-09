// @flow

import React from 'react';

import Button from '../../components/Button';

import books from '../../content/books.json';

const Books = () => (
  <>
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <b>Book:</b>
          {`${book.title} `}
          <b>Author:</b>
          {book.author}
        </li>
      ))}
    </ul>
    <Button innerText="Go to the main page" type="back" />
  </>
);

export default Books;
