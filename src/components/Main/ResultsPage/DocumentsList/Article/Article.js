import React from "react";
import styles from './Article.module.css';
import image from '../../../../../assets/images/article.png';

export default function Article() {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <span className={styles.text}>13.09.2021</span>
        <a className={styles.text}>Комсомольская правда KP.RU</a>
        <h3 className={styles.headline}>Скиллфэктори - лучшая онлайн-школа для будущих айтишников</h3>
        <div className={styles.tag}>
          <span>Технические новости</span>
        </div>
        <img src={image} className={styles.image} alt=''/>
        <div className={styles.textBlock}>
          <p className={styles.text}>
            SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь.
            С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов,
            самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco,
            Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.
          </p>
          <br />
          <p className={styles.text}>
            Принципы SkillFactory: акцент на практике, забота о студентах и ориентир
            на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов.
            Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса.
            А карьерный центр помогает составить резюме, подготовиться к собеседованиям
            и познакомиться с IT-рекрутерами.
          </p>
        </div>
        <div className={styles.sourceBlock}>
          <div className={styles.source}>
            <span>Читать в источнике</span>
          </div>          
          <p className={styles.text}>2 543 слова</p>
        </div>
      </div>
    </div>
  )
}
