import React from "react";
import Article from "./Article/Article";
import styles from './DocumentsList.module.css';
import Button from './../../../common/Button/Button';

export default function DocumentsList() {
  return (
    <div className={styles.container}>
      <h2 className={styles.headline}>Список документов</h2>
      <Article />
      <div className={styles.buttonContainer}>
        <Button text='Показать больше' disabled={false}/>
      </div>      
    </div>
  )
}
