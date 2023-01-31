import React from "react";
import styles from './Footer.module.css';
import logo from '../../assets/images/logo-footer.svg';

function Footer () {
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.image}/>
      <div>
        <p className={styles.text}>г. Москва, Цветной б-р, 40</p>
        <p className={styles.text}>+7 495 771 21 11</p>
        <p className={styles.text}>info@skan.ru</p>
        <p className={styles.textCopyright}>Copyright. 2022</p>
      </div>

    </div>
  )
}

export default Footer;