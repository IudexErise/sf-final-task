import React from "react";
import Button from "../../../common/Button/Button";
import styles from './MainHeadline.module.css';
import image from '../../../../assets/images/section1.png';
import { Link } from "react-router-dom";

export default function MainHeadline() {
  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.headline}>сервис по поиску публикаций о компании <br /> по его ИНН</h1>
        <p className={styles.text}>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
        <Link to='/search'>
          <Button text='Запросить данные' />
        </Link>
      </div>
      <img src={image} className={styles.image} alt='' />
    </section>
  )
}
