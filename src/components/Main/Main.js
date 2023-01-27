import React from "react";
import Headline from "./Headline/Headline";
import styles from './Main.module.css';

export default function Main() {
  return (
    <div className={styles.container}>
      <Headline />
    </div>
    
  )
}
