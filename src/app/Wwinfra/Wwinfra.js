import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import styles from './Wwinfra.module.css'
import { useInView } from 'react-intersection-observer';
import Cards from './Cards';

const Wwinfra = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <><div>
      <h1 className={styles.head}>WILD WARRIOR OBSTACLE INFRA
    <div className={styles.InfraHeadIcon}></div>

      </h1>
    </div><div className={styles.container}>
        <div className={styles.box1}>
          <Cards />
        </div>
        <div className={styles.box2}>
          <Slider {...settings}>
            {[...Array(9)].map((_, index) => (
              <div key={index}>
                <img className={styles.gridItem}
                  src={`/Infraimage${index + 1}.jpg`} // Ensure your images are named Infraimage1.jpg, Infraimage2.jpg, etc.
                  alt={`Image ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div></>
    
  );
};

export default Wwinfra;