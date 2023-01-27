import React from "react";
import Button from "../../common/Button/Button";
import styles from './Headline.module.css';
import image from '../../../assets/section1.png';

export default function Headline() {
  return (
    <section className={styles.container}>
      <div>
        <h1>сервис по поиску публикаций о компании по его ИНН</h1>
        <p>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
        <Button text='Запросить данные' />
      </div>
      <img src={image} />
    </section>
  )
}
