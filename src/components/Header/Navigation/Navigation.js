import React from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.container}>
      <p className={styles.text}>Главная</p>
      <p className={styles.text}>Тарифы</p>
      <p className={styles.text}>FAQ</p>
    </nav>
  )
}
