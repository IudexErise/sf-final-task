import React from "react";
import Headline from "./Headline/Headline";
import styles from './Main.module.css';
import Tariffs from "./Tariffs/Tariffs";
import WhyUs from "./WhyUs/WhyUs";

export default function Main() {
  return (
    <div className={styles.container}>
      <Headline />
      <WhyUs />
      <Tariffs />
    </div>
    
  )
}
