import React from "react";
import styles from './LoginForm.module.css';
import lock from '../../../../assets/lock.svg';
import Button from './../../../common/Button/Button';
import google from '../../../../assets/google.svg';
import facebook from '../../../../assets/facebook.svg';
import yandex from '../../../../assets/yandex.svg';

export default function LoginForm() {
  return (
    <div>
      <img src={lock} alt='' className={styles.image} />
      <div className={styles.form}>
        <div className={styles.container}>
          <div className={styles.linksContainer}>
            <button className={styles.active}>Войти</button>
            <button className={styles.inactive}>Зарегистрироваться</button>
          </div>
          <p className={styles.text}>Логин или номер телефона:</p>
          <input 
            type='tel' 
            required 
            className={styles.input}
            value="+7(___)___-__-__"
            pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
            placeholder="+7(___)___-__-__"
            />
          <p className={styles.text}>Пароль:</p>
          <input type='password' required className={styles.input} />
          <div className={styles.submitButton}>
            <Button text='Войти' />
          </div>
          <a className={styles.link}>Восстановить пароль</a>
          <p className={styles.text}>Войти через:</p>
          <div className={styles.social}>
            <button className={styles.button}>
              <img src={google} alt='Google'/>
            </button>
            <button className={styles.button}>
              <img src={facebook} alt='Facebook'/>
            </button>
            <button className={styles.button}>
              <img src={yandex} alt='Yandex'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
