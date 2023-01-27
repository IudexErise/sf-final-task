import React from 'react';
import styles from './Header.module.css';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import User from './User/User';

export default function Header() {
  return (
    <div className={styles.container}>
      <Logo />
      <Navigation />
      <User />
    </div>
  )
}
