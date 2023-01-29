import React, { useState } from "react";
import styles from './Parameter.module.css';

export default function Parameter({ id, text }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className={styles.container} >
      <input
        onClick={() => setClicked(!clicked)}
        type='checkbox'
        id={id}
        className={clicked ? styles.inputClicked : styles.inputInactive}
      />
      <label
        for={id}
        className={clicked ? styles.labelClicked : styles.labelInactive} 
      >
        {text}
      </label>
    </div>
  )
}
