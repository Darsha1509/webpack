// @flow

import React, { type Node } from 'react';

import './Container.sass';

type Props = {
  children: Node,
};

const Container = ({ children }: Props) => <div className="container">{children}</div>;

export default Container;
