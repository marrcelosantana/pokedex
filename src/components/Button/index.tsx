import { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  return <button type="button" className={styles.button} {...props} />;
}
