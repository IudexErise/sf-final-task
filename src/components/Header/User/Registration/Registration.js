import React from 'react';
import styles from './Registration.module.css';
import devider from '../../../../assets/images/devider.svg';
import { Link } from 'react-router-dom';

export default function Registration() {
  return (
    <div className={styles.container}>
      <p className={styles.signup}>Зарегистрироваться</p>
      <img src={devider} className={styles.devider} alt='' />
      <Link to='/authorization'>
        <button className={styles.signin}>
          Войти
        </button>
      </Link>
    </div>
  )
}
