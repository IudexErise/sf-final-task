import React from 'react';
import styles from './Header.module.css';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import Limits from './User/Profile/Limits/Limits';
import User from './User/User';
import sidemenu from '../../assets/images/sidemenu.svg';

export default function Header() {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.mobileHide}>
        <Navigation />
      </div>    
      <div className={styles.mobileShow}>
        <Limits />
      </div>
      <div className={styles.mobileHide}>
        <User />
      </div>
      <button className={[styles['mobileShow'], styles['button']].join(' ')}>      
        <img src={sidemenu} alt='side menu' />
      </button>        
    </div>
  )
}
