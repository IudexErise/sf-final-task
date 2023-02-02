import React from "react";
import ParametersBlock from "./ParametersBlock/ParametersBlock";
import styles from './SearchForm.module.css';
import Button from './../../../common/Button/Button';

export default function SearchForm() {
  return (
    <form className={styles.container}>
      <div className={styles.contents}>
        <div>
          <p className={styles.text}>ИНН компании *</p>
          <input className={styles.input} placeholder='10 цифр' />
          <p className={styles.text}>Тональность</p>
          <select className={styles.select} />
          <p className={styles.text}>Количество документов в выдаче *</p>
          <input className={styles.input} placeholder='От 1 до 1000'/>
          <p className={styles.text}>Диапазон поиска *</p>
          <div className={styles.dates}>
            <select className={styles.select} />
            <select className={styles.select} />
          </div>
        </div>
        <div>
          <ParametersBlock />
          <div className={styles.buttonBlock}>
            <Button text='Поиск' disabled={true}/>
            <p className={styles.subText}>* Обязательные к заполнению поля</p>
          </div>          
        </div>        
      </div>
    </form>
  )
}
