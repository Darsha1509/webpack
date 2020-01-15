import React, { ElementType, FunctionComponent } from 'react';

import styles from './Container.sass';

const Container: FunctionComponent<{}> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
