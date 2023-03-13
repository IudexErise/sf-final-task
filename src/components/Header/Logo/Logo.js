import React from 'react';
import styles from './Logo.module.css';
import logo from '../../../assets/images/logo-header.svg';
import { HashLink } from 'react-router-hash-link';

export default function Logo() {
  return (
    <HashLink to='/' className={styles.container}>
      <img src={logo} alt='company logo' className={styles.image}/>
    </HashLink>
  )
}
