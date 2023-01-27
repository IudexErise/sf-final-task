import React from "react";
import Button from "../../common/Button/Button";
import styles from './Headline.module.css';
import image from '../../../assets/section1.png';

export default function Headline() {
  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.headline}>сервис по поиску публикаций о компании <br /> по его ИНН</h1>
        <p className={styles.text}>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
        <Button text='Запросить данные' />
      </div>
      <img src={image} />
    </section>
  )
}
