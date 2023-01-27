import React from 'react';
import styles from './Limits.module.css';

export default function Limits() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Использовано компаний</p>
      <p className={styles.usedLimit}>34</p>
      <p className={styles.text}>Лимит по компаниям</p>
      <p className={styles.totalLimit}>100</p>
    </div>
  )
}
