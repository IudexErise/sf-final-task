import React, { useState } from "react";
import ParametersBlock from "./ParametersBlock/ParametersBlock";
import styles from './SearchForm.module.css';
import Button from './../../../common/Button/Button';
import { useEffect } from "react";

export default function SearchForm() {

  const [inn, setInn] = useState('');
  const [errorInn, setErrorInn] = useState({ message: 'Введите ИНН', code: 0 });
  const [documentsNumber, setDocumentsNumber] = useState('');
  const [errorDocumentsNumber, setErrorDocumentsNumber] = useState({ message: 'Введите число документов', code: 0 });
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [datesError, setDatesError] = useState({ start: '', end: '', code: 0 });

  function validateInn(inn) {
    if (inn === '') {
      setErrorInn({ message: 'Поле ИНН не может быть пустым', code: 1 });
      return false;
    } else if (inn.length !== 10) {
      setErrorInn({ message: 'ИНН должен содержать ровно 10 цифр', code: 2 });
      return false;
    } else {
      setErrorInn({ message: '', code: 0 });
      return true;
    }
  }

  function validateDocumentsNumber(documentsNumber) {
    if (documentsNumber >= 1 && documentsNumber <= 1000) {
      setErrorDocumentsNumber({ message: '', code: 0 });
      return true;
    } else if (documentsNumber === '') {
      setErrorDocumentsNumber({ message: 'Поле количество документов не может быть пустым', code: 1 });
      return false;
    } else {
      setErrorDocumentsNumber({ message: 'Число должно быть в диапазоне от 1 до 1000', code: 2 });
      return false;
    }
  }

  function validateDates(startDate, endDate) {
    if (startDate === '' && endDate === '') {
      setDatesError({ start: 'Введите начальную дату', end: 'Введите конечную дату', code: 1 });
      return false;
    } else if (startDate === '') {
      setDatesError({ start: 'Введите начальную дату', end: '', code: 2 });
      return false;
    } else if (endDate === '') {
      setDatesError({ start: '', end: 'Введите конечную дату', code: 3 });
      return false;
    } else if (startDate > endDate) {
      setDatesError({ start: 'Начальная дата не может быть больше конечной', end: '', code: 4 });
      return false;
    } else {
      setDatesError({ start: '', end: '', code: 0 });
      return true;
    }
  }

  function validateForm() {
    validateInn(inn);
    validateDocumentsNumber(documentsNumber);
    validateDates(startDate, endDate);
  }

  function sendForm(event) {
    event.preventDefault();
    validateForm();
    if (validateInn(inn) === true && validateDocumentsNumber(documentsNumber) === true && validateDates(startDate, endDate) === true) {
      alert('Данные введены верно');
    } else {
      alert('Исправьте ошибки');
    }
  }

  return (
    <form className={styles.container}>
      <div className={styles.contents}>
        <div>
          <p className={styles.text}>ИНН компании *</p>
          <input
            className={errorInn.code === 0 ? styles.input : styles.inputError}
            placeholder='10 цифр'
            required
            type='number'
            value={inn}
            onChange={(e) => setInn(e.target.value)}
            /* onBlur={() => validateInn(inn)} */
            title={errorInn.message}
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
            className={errorDocumentsNumber.code === 0 ? styles.input : styles.inputError}
            placeholder='От 1 до 1000'
            type='number'
            value={documentsNumber}
            onChange={(e) => setDocumentsNumber(e.target.value)}
            /* onBlur={() => validateDocumentsNumber(documentsNumber)} */
            title={errorDocumentsNumber.message}
            required
          />
          <p className={styles.text}>Диапазон поиска *</p>
          <div className={styles.dates}>
            <input
              className={datesError.code === 0 || datesError.code === 3 ? styles.select : styles.selectError}
              type='date'
              required
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              /* onBlur={() => validateDates(startDate, endDate)} */
              title={datesError.start}
            />
            <input
              className={datesError.code === 0 || datesError.code === 2 || datesError.code === 4 ? styles.select : styles.selectError}
              type='date'
              required
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              /* onBlur={() => validateDates(startDate, endDate)} */
              title={datesError.end}
            />
          </div>
        </div>
        <div>
          <ParametersBlock />
          <div className={styles.buttonBlock}>
            <Button text='Поиск' onClick={(event) => sendForm(event)} />
            <p className={styles.subText}>* Обязательные к заполнению поля</p>
          </div>
        </div>
      </div>
    </form>
  )
}
