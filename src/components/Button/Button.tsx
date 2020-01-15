import React, { ClassicElement, FunctionComponent } from 'react';
import { Button } from '@material-ui/core';

import styles from './Button.sass';

type Props = {
  innerText: string;
  icon: ClassicElement<{}>;
};

const MyButton: FunctionComponent<Props> = ({ innerText, icon }) => (
  <Button variant="contained" color="primary" className={styles.button}>
    {icon}
    <span className={styles.innerText}>{innerText}</span>
  </Button>
);

export default MyButton;
