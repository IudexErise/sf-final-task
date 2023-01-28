import React from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.container}>
      <a href=''>Главная</a>
      <a href=''>Тарифы</a>
      <a href=''>FAQ</a>
    </nav>
  )
}
