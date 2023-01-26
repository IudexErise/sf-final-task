import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo-header.svg';
import devider from '../../assets/devider.svg';

function Header () {
  return (
    <div className={styles.container}>
      <img src={logo} alt='company logo'/>
      <div className={styles.links}>
        <a href=''>Главная</a>
        <a href=''>Тарифы</a>
        <a href=''>FAQ</a>
      </div>
      <div className={styles.limits}>
          <p className={styles.limits_text}>Использовано компаний</p>
          <p className={styles.limits_used}>34</p>
          <p className={styles.limits_text}>Лимит по компаниям</p>
          <p className={styles.limits_total}>100</p>
      </div>
      <div className={styles.registration}>
        <a href='' className={styles.signup}>Зарегистрироваться</a>
        <img src={devider} className={styles.devider}/>
        <button className={styles.signin}>Войти</button>
      </div>
    </div>
  )
}

export default Header;