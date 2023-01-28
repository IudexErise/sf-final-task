import React from "react";
import Tile from "./Tile/Tile";
import styles from './WhyUs.module.css';
import tileOneImage from '../../../../assets/stopwatch.svg';
import tileTwoImage from '../../../../assets/search.svg';
import tileThreeImage from '../../../../assets/shield.svg';
import arrowPrevious from '../../../../assets/arrow-left.svg';
import arrowNext from '../../../../assets/arrow-right.svg';
import sectionImage from '../../../../assets/section2.png';

const tilesArray = [
  {
    image: tileOneImage,
    text: 'Высокая и оперативная скорость обработки заявки'
  },
  {
    image: tileTwoImage,
    text: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос'
  },
  {
    image: tileThreeImage,
    text: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству'
  },
]

let tiles = tilesArray.map((tile) => {
  return (
    <Tile 
      image={tile.image}
      text={tile.text}
    />
  )
})

export default function WhyUs() {
  return (
    <section className={styles.container}>
      <h2>Почему именно мы</h2>
      <div className={styles.carousel}>
        <button className={styles.button}>
          <img src={arrowPrevious} alt='arrow previous' />
        </button>
        {tiles}
        <button className={styles.button}>
          <img src={arrowNext} alt='arrow next' />
        </button>        
      </div>
      <img src={sectionImage} alt='' />
    </section>
  )
}
