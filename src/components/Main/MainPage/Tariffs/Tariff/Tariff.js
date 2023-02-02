import React from "react";
import styles from './Tariff.module.css';
import Button from './../../../../common/Button/Button';
import tick from '../../../../../assets/images/tick.svg';

export default function Tariff({ tariffName, tariffDescription, tariffLogo, currentTariff,
  deal, price, installment, installmentPayment, perk1, perk2, perk3 }) {

  return (
    <div className={[styles['container'], styles[`${tariffName}Border-${currentTariff}`]].join(' ')}>

      <div className={[styles['headlineBlock'], styles[tariffName]].join(' ')}>
        <div>
          <p className={[styles['name'], styles[tariffName]].join(' ')}>{tariffName}</p>
          <p className={[styles['text'], styles[tariffName]].join(' ')}>{tariffDescription}</p>
        </div>
        <img src={tariffLogo} alt='' />
      </div>

      <div className={styles.details}>
        {currentTariff ?
          <div className={styles.current}>
            <p className={styles.currentText}>Текущий тариф</p>
          </div>
          :
          <div className={styles.currentMock}></div>
        }
        <div className={styles.containerPrice}>
          <span className={styles.deal}>{deal}</span>
          <span className={styles.price}>{price}</span>
        </div>
        {installment ?
          <p className={styles.text}>или {installmentPayment} ₽/мес. при рассрочке на 24 мес.</p>
          :
          <div className={styles.installmentMock}></div>
        }
        <p className={styles.textBold}>В тариф входит:</p>
        <div className={styles.perks}>
          <img src={tick} alt='' />
          <p className={styles.text}>{perk1}</p>
          <img src={tick} alt='' />
          <p className={styles.text}>{perk2}</p>
          <img src={tick} alt='' />
          <p className={styles.text}>{perk3}</p>
        </div>
        <div className={styles.containerButton}>
          {currentTariff ? 
            <button className={styles.button}>Перейти в личный кабинет</button>
          : 
            <Button text='Подробнее' />}
        </div>
      </div>
    </div>
  )
}
