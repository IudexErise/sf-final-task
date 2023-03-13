import React from "react";
import styles from './GeneralInformation.module.css';
import CarouselResults from "./CarouselResults/CarouselResults";

export default function GeneralInformation() {
  return (
    <div className={styles.container}>
      <h2 className={styles.headline}>Общая сводка</h2>
      <p className={styles.text}>Найдено 4 221 вариантов</p>
      <div className={styles.carousel}>
        <div className={styles.carouselHead}>
          <span className={styles.category}>Период</span>
          <span className={styles.category}>Риски</span>
          <span className={styles.category}>Всего</span>
        </div>
        <CarouselResults />
      </div>        
    </div>
  )
}
