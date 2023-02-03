import React from 'react';
import styles from './Sidemenu.module.css';
import logo from '../../../assets/images/logo-footer.svg';
import cross from '../../../assets/images/cross.svg';
import Navigation from '../Navigation/Navigation';
import User from '../User/User';

export default function Sidemenu({extended, setExtended}) {
  return (
    <div className={styles.container}>
      <div className={styles.topBlock}>
        <img src={logo} alt='' />
        <img src={cross} alt='close' onClick={() => setExtended(!extended)} />
      </div>
      <Navigation />
      <User />
    </div>
  )
}
