import React from "react";
import styles from './Button.module.css';

export default function Button({ text, disabled, onClick }) {
  return (
    <button
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
