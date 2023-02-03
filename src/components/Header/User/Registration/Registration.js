import React from 'react';
import styles from './Registration.module.css';
import devider from '../../../../assets/images/devider.svg';

export default function Registration({loggedIn, setLoggedIn}) {
  return (
    <div className={styles.container}>
      <p className={styles.signup}>Зарегистрироваться</p>
      <img src={devider} className={styles.devider} alt='' />
      <button className={styles.signin} onClick={() => setLoggedIn(!loggedIn)}>Войти</button>
    </div>
  )
}
