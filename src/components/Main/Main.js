import React from "react";
import styles from './Main.module.css';
import MainPage from './MainPage/MainPage';
import AuthorizationPage from "./AuthorizationPage/AuthorizationPage";
import SearchPage from "./SearchPage/SearchPage";
import ResultsPage from "./ResultsPage/ResultsPage";
import { Route, Routes } from "react-router-dom";

export default function Main() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/authorization" element={<AuthorizationPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </div>
  )
}
