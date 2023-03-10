import React from "react";
import styles from './Tile.module.css';

export default function Tile({image, text}) {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <img src={image} alt='' className={styles.image}/>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  )
}
