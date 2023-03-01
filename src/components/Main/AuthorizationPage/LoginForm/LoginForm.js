import React, { useState } from "react";
import styles from './LoginForm.module.css';
import lock from '../../../../assets/images/lock.svg';
import Button from './../../../common/Button/Button';
import google from '../../../../assets/images/google.svg';
import facebook from '../../../../assets/images/facebook.svg';
import yandex from '../../../../assets/images/yandex.svg';
import axios from "axios";

export default function LoginForm() {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const url = 'https://gateway.scan-interfax.ru/api/v1/account/login'

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, { login: login, password: password });
      console.log(response.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <div>
      <img src={lock} alt='' className={styles.image} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div className={styles.linksContainer}>
            <button className={styles.active} disabled>Войти</button>
            <button className={styles.inactive} disabled>Зарегистрироваться</button>
          </div>
          <p className={styles.text}>Логин или номер телефона:</p>
          <input
            type='tel'
            required
            className={styles.input}
            placeholder="+7(___)___-__-__"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <p className={styles.text}>Пароль:</p>
          <input
            type='password'
            required
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='new-password'
          />
          <div className={styles.submitButton}>
            <Button text='Войти' />
          </div>
          <a className={styles.link}>Восстановить пароль</a>
          <p className={styles.text}>Войти через:</p>
          <div className={styles.social}>
            <button className={styles.button} disabled>
              <img src={google} alt='Google' />
            </button>
            <button className={styles.button} disabled>
              <img src={facebook} alt='Facebook' />
            </button>
            <button className={styles.button} disabled>
              <img src={yandex} alt='Yandex' />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
