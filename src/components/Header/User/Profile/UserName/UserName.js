import React from 'react';
import styles from './UserName.module.css';
import avatar from '../../../../../assets/avatar.png';

export default function UserName() {
  return (
    <div className={styles.container}>
      <div className={styles.textBlock}>      
        <span className={styles.userName}>Вячеслав С</span>
        <span className={styles.logout}>Выйти</span>
      </div>
      <img src={avatar} />
    </div>
  )
}
