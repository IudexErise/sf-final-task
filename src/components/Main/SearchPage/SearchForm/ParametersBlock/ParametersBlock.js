import React from "react";
import Parameter from "./Parameter/Parameter";
import styles from './ParametersBlock.module.css';

let parametersArray = [
  {
    text: 'Признак максимальной полноты',
    id: 1
  },
  {
    text: 'Упоминания в бизнес-контексте',
    id: 2
  },
  {
    text: 'Главная роль в публикации',
    id: 3
  },
  {
    text: 'Публикации только с риск-факторами',
    id: 4
  },
  {
    text: 'Включать технические новости рынков',
    id: 5
  },
  {
    text: 'Включать анонсы и календари',
    id: 6
  },
  {
    text: 'Включать сводки новостей',
    id: 7
  },
]

let parameters = parametersArray.map((parameter) => {
  return (
    <Parameter 
      text={parameter.text}
      id={parameter.id}
    />
  )
})

export default function ParametersBlock() {
  return (
    <div className={styles.container}>
      {parameters}
    </div>
  )
}
