import React from "react";
import MainPage from './MainPage/MainPage';
import styles from './Main.module.css';

export default function Main() {
  return (
    <div className={styles.container}>
      <MainPage />
    </div>
  )
}
