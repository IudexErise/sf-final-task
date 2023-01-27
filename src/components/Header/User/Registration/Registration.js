import React from 'react';
import styles from './Registration.module.css';
import devider from '../../../../assets/devider.svg';

export default function Registration() {
  return (
    <div className={styles.registration}>
      <a href='' className={styles.signup}>Зарегистрироваться</a>
      <img src={devider} className={styles.devider} />
      <button className={styles.signin}>Войти</button>
    </div>
  )
}
