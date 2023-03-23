import Spinner from 'react-bootstrap/Spinner';

import styles from './styles.module.scss';

export function Loading() {
  return (
    <div className={styles.container}>
      <Spinner animation="border" role="status" variant="secondary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
