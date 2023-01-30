import React from "react";
import styles from './Button.module.css';

export default function Button({ text, disabled }) {
  return (
    <button
      className={styles.button}
      disabled={disabled}
    >
      {text}
    </button>
  )
}
