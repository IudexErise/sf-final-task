import React from "react";
import Tile from "./Tile/Tile";
import styles from './Carousel.module.css';
import tileOneImage from '../../../../../assets/images/stopwatch.svg';
import tileTwoImage from '../../../../../assets/images/search.svg';
import tileThreeImage from '../../../../../assets/images/shield.svg';
import arrowPrevious from '../../../../../assets/images/arrow-left.svg';
import arrowNext from '../../../../../assets/images/arrow-right.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button 
    className={className}
    style={{ ...style, display: "block", width: '39px', height: '39px', background: 'none', border: 'none'}}
    onClick={onClick}>
      <img src={arrowNext} alt='arrow next' />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button 
    className={className}
    style={{ ...style, display: "block", width: '39px', height: '39px', background: 'none', border: 'none'}}
    onClick={onClick}>
      <img src={arrowPrevious} alt='arrow previous' />
    </button>
  );
}

export default function Carousel() {

  let settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        {tiles}
      </Slider>
    </div>
  )
}
