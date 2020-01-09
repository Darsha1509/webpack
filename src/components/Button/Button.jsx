// @flow

import React, { type Element } from 'react';
import { Button } from '@material-ui/core';

import './Button.sass';

type Props = {
  innerText: string,
  icon: Element<'svg'>,
};

const MyButton = ({ innerText, icon }: Props) => (
  <Button variant="contained" color="primary" className="button">
    {icon}
    <span className="innerText">{innerText}</span>
  </Button>
);

export default MyButton;
