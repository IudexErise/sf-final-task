import React from "react";
import styles from './SearchHeadline.module.css';
import image from '../../../../assets/results.svg';

export default function SearchHeadline() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.headline}>Ищем. Скоро будут результаты</h1>
        <p className={styles.text}>Поиск может занять некоторое время, просим сохранять терпение.</p>
      </div>
      <img src={image} alt='' />      
    </div>
  )
}
