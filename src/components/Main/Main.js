import React from "react";
import styles from './Main.module.css';
import MainPage from './MainPage/MainPage';
import Authorization from "./Authorization/Authorization";
import SearchPage from "./SearchPage/SearchPage";

export default function Main() {
  return (
    <div className={styles.container}>
      {/* <MainPage /> */}
      {/* <Authorization /> */}
      <SearchPage />
    </div>
  )
}
