// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import kitten from '../../assets/images/kitten.jpg';

import Container from '../../components/Container';
import Button from '../../components/Button';

import './home.sass';

const Home = () => (
  <Container>
    <img src={kitten} alt="kitten with book" />
    <Link to="/books" className="link">
      <Button innerText="Books" type="book" />
    </Link>
  </Container>
);

export default Home;
