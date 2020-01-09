// @flow

import React from 'react';
import { Button } from '@material-ui/core';

import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

import './Button.sass';

type Props = {
  innerText: string,
  type: string,
};

const MyButton = ({ innerText, type }: Props) => (
  <Button variant="contained" color="primary" className="button">
    {type === 'book' ? <ImportContactsRoundedIcon /> : <ArrowBackIosRoundedIcon />}
    <span className="innerText">{innerText}</span>
  </Button>
);

export default MyButton;
