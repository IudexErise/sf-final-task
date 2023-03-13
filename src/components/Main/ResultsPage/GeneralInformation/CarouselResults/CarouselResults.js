import React from "react";
import TileResults from "./TileResults/TileResults";
import styles from './CarouselResults.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../../../../common/NextArrow/NextArrow";
import PreviousArrow from "../../../../common/PreviousArrow/PreviousArrow";

const tilesArray = [
  {
    period: '10.01.2022',
    total: '10',
    risks: '5'
  },
  {
    period: '10.01.2022',
    total: '10',
    risks: '5'
  },
  {
    period: '10.01.2022',
    total: '10',
    risks: '5'
  },
  {
    period: '10.01.2022',
    total: '10',
    risks: '5'
  },
  {
    period: '10.01.2022',
    total: '10',
    risks: '5'
  },
  {
    period: '10.01.2022',
    total: '10',
    risks: '5'
  },
  {
    period: '10.01.2022',
    total: '10',
    risks: '5'
  },
  {
    period: '10.01.2022',
    total: '10',
    risks: '5'
  },
  {
    period: '10.01.2022',
    total: '10',
    risks: '5'
  },
  {
    period: '10.01.2022',
    total: '10',
    risks: '5'
  },
  {
    period: '10.01.2022',
    total: '10',
    risks: '5'
  },
  {
    period: '10.01.2022',
    total: '10',
    risks: '5'
  },
  {
    period: '10.01.2022',
    total: '10',
    risks: '5'
  },
  {
    period: '10.01.2022',
    total: '10',
    risks: '5'
  },
  {
    period: '10.01.2022',
    total: '10',
    risks: '5'
  },
]

let tiles = tilesArray.map((tile) => {
  return (
    <TileResults
      period={tile.period}
      total={tile.total}
      risks={tile.risks}
    />
  )
})


export default function CarouselResults() {

  let settings = {
    dots: false,
    infinite: true,
    speed: 700,
    variableWidth: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow rightAdj='-55px' />,
    prevArrow: <PreviousArrow leftAdj='-170px' />,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          nextArrow: <NextArrow rightAdj='-40px' topAdj='50px' />,
          prevArrow: <PreviousArrow leftAdj='-40px' topAdj='50px' />,
        }
      },]
  };

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {tiles}
      </Slider>
    </div>

  )
}
