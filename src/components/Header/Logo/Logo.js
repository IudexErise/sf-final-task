import React from 'react';
import styles from './Logo.module.css';
import logo from '../../../assets/logo-header.svg';

export default function Logo() {
  return (
    <div className={styles.container}>
      <img src={logo} alt='company logo' />
    </div>
  )
}
