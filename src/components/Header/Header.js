import React from 'react';
import styles from './Header.module.css';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import Limits from './User/Profile/Limits/Limits';
import User from './User/User';
import sidemenu from '../../assets/images/sidemenu.svg';
import { useState } from 'react';
import Sidemenu from './Sidemenu/Sidemenu';

export default function Header() {
  const [extended, setExtended] = useState(false);

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
      <button 
        className={[styles['mobileShow'], styles['button']].join(' ')}
        onClick={() => setExtended(!extended)}>      
        <img src={sidemenu} alt='side menu' />
      </button>
      {extended && <Sidemenu extended={extended} setExtended={setExtended} /> }       
    </div>
  )
}
