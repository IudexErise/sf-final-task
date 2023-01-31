import React from "react";
import styles from './AuthorizationPage.module.css';
import characters from '../../../assets/images/authorization.svg';
import LoginForm from "./LoginForm/LoginForm";

export default function AuthorizationPage() {
  return (
    <div className={styles.container}>

      <div className={styles.containerHeadline}>
      <h1 className={styles.headline}>
        Для оформления подписки
        на тариф, необходимо авторизоваться.
      </h1>
      <img src={characters} alt='' className={styles.image} />
      </div>
      <LoginForm />
      
    </div>
  )
}
