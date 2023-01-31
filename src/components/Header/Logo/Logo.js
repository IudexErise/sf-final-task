import React from 'react';
import styles from './Logo.module.css';
import logo from '../../../assets/images/logo-header.svg';

export default function Logo() {
  return (
    <div className={styles.container}>
      <img src={logo} alt='company logo' className={styles.image}/>
    </div>
  )
}
