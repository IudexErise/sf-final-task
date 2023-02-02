import React from "react";
import styles from './SearchPage.module.css';
import SearchForm from "./SearchForm/SearchForm";
import image1 from '../../../assets/images/searchPage1.svg';
import image2 from '../../../assets/images/searchPage2.svg';

export default function SearchPage() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.headline}>Найдите необходимые данные в пару кликов.</h1>
        <p className={styles.text}>Задайте параметры поиска.</p>
        <p className={styles.text}>Чем больше заполните, тем точнее поиск</p>
        <SearchForm />
      </div>
      <div className={styles.imagesContainer}>
        <img src={image1} alt='' className={styles.image} />
        <img src={image2} alt='' className={styles.image} />
      </div>
    </div>
  )
}
