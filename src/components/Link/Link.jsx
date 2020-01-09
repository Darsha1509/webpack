// @flow
import React, { type Node } from 'react';
import { Link } from 'react-router-dom';

import './Link.sass';

type Props = {
  address: string,
  children: Node,
};

const CustomLink = ({ address, children }: Props) => (
  <Link to={address} className="link">
    {children}
  </Link>
);

export default CustomLink;
