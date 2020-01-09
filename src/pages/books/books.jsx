// @flow

import React from 'react';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

import Button from '../../components/Button';
import Container from '../../components/Container';
import Link from '../../components/Link';

import books from '../../content/books.json';

const Books = () => (
  <Container>
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
    <Link address="/">
      <Button innerText="Go to the main page" icon={<ArrowBackIosRoundedIcon />} />
    </Link>
  </Container>
);

export default Books;
