import React from "react";
import styles from './SearchPage.module.css';
import SearchForm from "./SearchForm/SearchForm";
import image from '../../../assets/images/searchPage.svg';

export default function SearchPage() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.headline}>Найдите необходимые данные в пару кликов.</h1>
        <p className={styles.text}>Задайте параметры поиска.</p>
        <p className={styles.text}>Чем больше заполните, тем точнее поиск</p>
        <SearchForm />
      </div>
      <img src={image} alt='' className={styles.image} />
    </div>
  )
}
