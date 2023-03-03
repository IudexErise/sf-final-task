import React, { useState } from "react";
import ParametersBlock from "./ParametersBlock/ParametersBlock";
import styles from './SearchForm.module.css';
import Button from './../../../common/Button/Button';

export default function SearchForm() {

  const [inn, setInn] = useState('');
  const [documentsNumber, setDocumentsNumber] = useState('');

  function validateInn(inn, error) {
    var result = false;
    if (typeof inn === 'number') {
      inn = inn.toString();
    } else if (typeof inn !== 'string') {
      inn = '';
    }
    if (!inn.length) {
      error.code = 1;
      error.message = 'ИНН пуст';
    } else if (/[^0-9]/.test(inn)) {
      error.code = 2;
      error.message = 'ИНН может состоять только из цифр';
    } else if ([10, 12].indexOf(inn.length) === -1) {
      error.code = 3;
      error.message = 'ИНН может состоять только из 10 или 12 цифр';
    } else {
      var checkDigit = function (inn, coefficients) {
        var n = 0;
        for (var i in coefficients) {
          n += coefficients[i] * inn[i];
        }
        return parseInt(n % 11 % 10);
      };
      switch (inn.length) {
        case 10:
          var n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
          if (n10 === parseInt(inn[9])) {
            result = true;
          }
          break;
        case 12:
          var n11 = checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
          var n12 = checkDigit(inn, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
          if ((n11 === parseInt(inn[10])) && (n12 === parseInt(inn[11]))) {
            result = true;
          }
          break;
      }
      if (!result) {
        error.code = 4;
        error.message = 'Неправильное контрольное число';
      }
    }
    return result;
  }

  return (
    <form className={styles.container}>
      <div className={styles.contents}>
        <div>
          <p className={styles.text}>ИНН компании *</p>
          <input
            className={styles.input}
            placeholder='10 цифр'
            required
            type='number'
            value={inn}
            onChange={(e) => setInn(e.target.value)}
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
            className={styles.input}
            placeholder='От 1 до 1000'
            type='number'
            value={documentsNumber}
            onChange={(e) => setDocumentsNumber(e.target.value)}
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
