import React from "react";
import Tariff from "./Tariff/Tariff";
import styles from './Tariffs.module.css';

export default function Tariffs() {
  return (
    <section className={styles.container}>
      <h2>Тарифы</h2>
      <div className={styles.items}>
        <Tariff />
        <Tariff />
        <Tariff />
      </div>  
    </section>
  )
}
