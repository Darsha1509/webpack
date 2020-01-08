// @flow
import React from 'react';
import img from '../assets/images/cat.jpeg';
import books from '../content/books.json';

import './App.sass';

const App = () => (
  <div>
    <h1>My React App!</h1>
    <img src={img} alt="kitten" />
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
  </div>
);

export default App;
