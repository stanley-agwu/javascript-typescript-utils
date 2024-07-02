import { PropsWithChildren } from 'react';

import styles from './InputGroup.module.scss';

export const InputGroupItem = (props: PropsWithChildren) => (
  <div className={styles.item}>{props.children}</div>
);
