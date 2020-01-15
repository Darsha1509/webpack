import React, { FunctionComponent } from 'react';
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';
import kitten from '../../assets/images/kitten.jpg';

import Container from '../../components/Container';
import Button from '../../components/Button';
import Link from '../../components/Link';

const Home: FunctionComponent<{}> = () => (
  <Container>
    <img src={kitten} alt="kitten with book" />
    <Link address="/books">
      <Button innerText="Books" icon={<ImportContactsRoundedIcon />} />
    </Link>
  </Container>
);

export default Home;
