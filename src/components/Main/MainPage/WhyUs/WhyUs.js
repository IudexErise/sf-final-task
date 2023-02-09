import React from "react";
import Tile from "./Tile/Tile";
import styles from './WhyUs.module.css';
import tileOneImage from '../../../../assets/images/stopwatch.svg';
import tileTwoImage from '../../../../assets/images/search.svg';
import tileThreeImage from '../../../../assets/images/shield.svg';
import arrowPrevious from '../../../../assets/images/arrow-left.svg';
import arrowNext from '../../../../assets/images/arrow-right.svg';
import sectionImage1 from '../../../../assets/images/section2-1.svg';
import sectionImage2 from '../../../../assets/images/section2-2.svg';

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
    <section className={styles.container} id='faq'>
      <h2 className={styles.headline}>Почему именно мы</h2>
      <div className={styles.carousel}>
        <button className={styles.button}>
          <img src={arrowPrevious} alt='arrow previous' />
        </button>
        {tiles}
        <button className={styles.button}>
          <img src={arrowNext} alt='arrow next' />
        </button>
      </div>
      <div className={styles.imagesContainer}>
        <img src={sectionImage1} alt='' className={styles.image1} />
        <img src={sectionImage2} alt='' className={styles.image2} />
      </div>
      
    </section>
  )
}
