import React from "react";
import styles from './Tariff.module.css';
import tariffLogo from '../../../../assets/beginner.svg';
import tick from '../../../../assets/tick.svg';
import Button from './../../../common/Button/Button';

export default function Tariff() {
  return (
    <div className={styles.container}>

      <div className={styles.headline}>
        <div>
          <p className={styles.name}>Beginner</p>
          <p className={styles.text}>Для небольшого исследования</p>
        </div>
        <img src={tariffLogo} alt='' />
      </div>

      <div className={styles.details}>
        <div className={styles.current}>
          <p className={styles.currentText}>Текущий тариф</p>
        </div>
        <div className={styles.containerPrice}>
          <span className={styles.deal}>799 ₽</span>
          <span className={styles.price}>1200 ₽</span>
        </div>        
        <p className={styles.text}>или 150 ₽/мес. при рассрочке на 24 мес.</p>
        <p className={styles.textBold}>В тариф входит:</p>
        <div className={styles.perks}>
          <img scr={tick} alt='' />
          <p className={styles.text}>Безлимитная история запросов</p>
          <img scr={tick} alt='' />
          <p className={styles.text}>Безопасная сделка</p>
          <img scr={tick} alt='' />
          <p className={styles.text}>Поддержка 24/7</p>
        </div>
        <div className={styles.containerButton}>
          <Button text='Перейти в личный кабинет'/>
        </div>
      </div>
    </div>
  )
}
