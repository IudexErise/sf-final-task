import React, { useState } from "react";
import ParametersBlock from "./ParametersBlock/ParametersBlock";
import styles from './SearchForm.module.css';
import Button from './../../../common/Button/Button';

export default function SearchForm() {

  const [inn, setInn] = useState('');
  const [documentsNumber, setDocumentsNumber] = useState('');
  const [error, setError] = useState({message: 'Введите ИНН', code: 0});

  function validateInn(inn) {
    if (inn === '') {
        setError({message: 'ИНН не может быть пустым', code: 1})    
    } else if (inn.length !== 10) {
        setError({message: 'ИНН должен содержать 10 цифр', code: 2})  
    } else {
      setError({message: '', code: 0})
    }
  }

  function validateDocumentsNumber(documentsNumber) {
    if (documentsNumber >= 1 && documentsNumber <= 1000) {
      return true
    } else if (documentsNumber === '') {
      return true
    } else {
      return false
    }
  }

  return (
    <form className={styles.container}>
      <div className={styles.contents}>
        <div>
          <p className={styles.text}>ИНН компании *</p>
          <input
            className={error.code === 0 ? styles.input : styles.inputError}
            placeholder='10 цифр'
            required
            type='number'
            value={inn}
            onChange={(e) => setInn(e.target.value)}
            onBlur={() => validateInn(inn, error)}
            title={error.message}
          />
          <p className={styles.text}>Тональность</p>
          <select className={styles.select}>
            <option />
            <option>Негативная</option>
            <option>Нейтральная</option>
            <option>Позитивная</option>
          </select>
          <p className={styles.text}>Количество документов в выдаче *</p>
          <input
            className={validateDocumentsNumber(documentsNumber) ? styles.input : styles.inputError}
            placeholder='От 1 до 1000'
            type='number'
            value={documentsNumber}
            onChange={(e) => setDocumentsNumber(e.target.value)}
            onBlur={() => validateDocumentsNumber(documentsNumber)}
            title={validateDocumentsNumber(documentsNumber) ? '' : 'Введите число в диапазоне от 1 до 1000'}
          />
          <p className={styles.text}>Диапазон поиска *</p>
          <div className={styles.dates}>
            <input
              className={styles.select}
              type='date'
              required
            />
            <input
              className={styles.select}
              type='date'
              required
            />
          </div>
        </div>
        <div>
          <ParametersBlock />
          <div className={styles.buttonBlock}>
            <Button text='Поиск'/>
            <p className={styles.subText}>* Обязательные к заполнению поля</p>
          </div>
        </div>
      </div>
    </form>
  )
}
