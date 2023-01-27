import React from 'react';
import styles from './Registration.module.css';
import devider from '../../../../assets/devider.svg';

export default function Registration({loggedIn, setLoggedIn}) {
  return (
    <div className={styles.registration}>
      <a href='/' className={styles.signup}>Зарегистрироваться</a>
      <img src={devider} className={styles.devider} alt='' />
      <button className={styles.signin} onClick={() => setLoggedIn(!loggedIn)}>Войти</button>
    </div>
  )
}
