import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import styles from './Link.sass';

type Props = {
  address: string,
};

const CustomLink: FunctionComponent<Props> = ({ address, children }) => (
  <Link to={address} className={styles.link}>
    {children}
  </Link>
);

export default CustomLink;
