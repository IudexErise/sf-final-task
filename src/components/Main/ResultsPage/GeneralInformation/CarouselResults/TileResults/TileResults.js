import React from "react";
import styles from './TileResults.module.css';

export default function TileResults( {period, total, risks} ) {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <span className={styles.text}>{period}</span>
        <span className={styles.text}>{total}</span>
        <span className={styles.text}>{risks}</span>
      </div>      
    </div>
  )
}