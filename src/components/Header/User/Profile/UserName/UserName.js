import React from 'react';
import styles from './UserName.module.css';
import avatar from '../../../../../assets/avatar.png';

export default function UserName({loggedIn, setLoggedIn}) {
  return (
    <div className={styles.container}>
      <div className={styles.textBlock}>      
        <span className={styles.userName}>Вячеслав С</span>
        <span className={styles.logout} onClick={() => setLoggedIn(!loggedIn)}>Выйти</span>
      </div>
      <img src={avatar} alt='' />
    </div>
  )
}
