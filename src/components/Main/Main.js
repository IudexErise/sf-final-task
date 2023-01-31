import React from "react";
import styles from './Main.module.css';
import MainPage from './MainPage/MainPage';
import AuthorizationPage from "./AuthorizationPage/AuthorizationPage";
import SearchPage from "./SearchPage/SearchPage";
import ResultsPage from "./ResultsPage/ResultsPage";

export default function Main() {
  return (
    <div className={styles.container}>
      <MainPage />
      <AuthorizationPage />
      <SearchPage />
      <ResultsPage />
    </div>
  )
}
