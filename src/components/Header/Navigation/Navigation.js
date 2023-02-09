import React from 'react';
import styles from './Navigation.module.css';
import { HashLink } from 'react-router-hash-link';

export default function Navigation() {
  return (
    <nav className={styles.container}>
      <HashLink to='/' className={styles.text}>Главная</HashLink>
      <HashLink to='/#tariffs' className={styles.text}>Тарифы</HashLink>
      <HashLink to='/#faq' className={styles.text}>FAQ</HashLink>
    </nav>
  )
}
