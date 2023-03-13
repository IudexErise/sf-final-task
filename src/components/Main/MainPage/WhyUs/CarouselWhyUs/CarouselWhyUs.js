import React from "react";
import Tile from "./Tile/Tile";
import styles from './CarouselWhyUs.module.css';
import tileOneImage from '../../../../../assets/images/stopwatch.svg';
import tileTwoImage from '../../../../../assets/images/search.svg';
import tileThreeImage from '../../../../../assets/images/shield.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../../../../common/NextArrow/NextArrow";
import PreviousArrow from "../../../../common/PreviousArrow/PreviousArrow";

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
    text: 'Защита конфиденциальных сведений, не подлежащих разглашению по федеральному законодательству'
  },
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
    text: 'Защита конфиденциальных сведений, не подлежащих разглашению по федеральному законодательству'
  }
]

let tiles = tilesArray.map((tile) => {
  return (
    <Tile
      image={tile.image}
      text={tile.text}
    />
  )
})


export default function CarouselWhyUs() {

  let settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 1,
        }
      },]
  };

  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        {tiles}
      </Slider>
    </div>
  )
}
