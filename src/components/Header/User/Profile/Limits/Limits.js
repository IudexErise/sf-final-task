import React from 'react';
import styles from './Limits.module.css';
import axios from "axios";

export default function Limits() {  

  const handleClick = async () => {
    const url = 'https://gateway.scan-interfax.ru/api/v1/account/info'
    let token = localStorage.getItem('token');
    const config = {
      headers: { 'Authorization': `Bearer ${token}` }
    };

    try {
      const response = await axios.get(url, config);
      console.log(response.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <div className={styles.container}>
      <p className={styles.text}>Использовано компаний</p>
      <p className={styles.usedLimit}>34</p>
      <p className={styles.text}>Лимит по компаниям</p>
      <p className={styles.totalLimit}>100</p>
    </div>
  )
}
