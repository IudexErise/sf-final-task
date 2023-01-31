import React from "react";
import styles from './GeneralInformation.module.css';
import arrowPrevious from '../../../../assets/images/arrow-left.svg';
import arrowNext from '../../../../assets/images/arrow-right.svg';

export default function GeneralInformation() {
  return (
    <div className={styles.container}>
      <h2 className={styles.headline}>Общая сводка</h2>
      <p className={styles.text}>Найдено 4 221 вариантов</p>
      <div className={styles.tableContainer}>
        <button className={styles.button}>
          <img src={arrowPrevious} alt='arrow previous' />
        </button>
        <div className={styles.table}>
          <div className={styles.tableHead}>
            <p>Период</p>
            <p>Всего</p>
            <p>Риски</p>
          </div>
        </div>
        <button className={styles.button}>
          <img src={arrowNext} alt='arrow next' />
        </button>
      </div>
    </div>
  )
}
