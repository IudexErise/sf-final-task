import React from "react";
import styles from './WhyUs.module.css';
import sectionImage1 from '../../../../assets/images/section2-1.svg';
import sectionImage2 from '../../../../assets/images/section2-2.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselWhyUs from "./CarouselWhyUs/CarouselWhyUs";


export default function WhyUs() {
  return (
    <section className={styles.container} id='faq'>
      <h2 className={styles.headline}>Почему именно мы</h2>      
        <CarouselWhyUs />
      <div className={styles.imagesContainer}>
        <img src={sectionImage1} alt='' className={styles.image1} />
        <img src={sectionImage2} alt='' className={styles.image2} />
      </div>
    </section>
  )
}
