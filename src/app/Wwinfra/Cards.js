import React, { useState } from 'react';
import styles from './Cards.module.css';

const Cards = () => {
    const [activeCard, setActiveCard] = useState(0);
  
    const handleButtonClick = (index) => {
      setActiveCard(index);
    };
  
    return (
      <div className={styles.cardsContainer}>
        <div className={styles.buttonsContainer}>
          <button onClick={() => handleButtonClick(0)}>Introduction</button>
          <button onClick={() => handleButtonClick(1)}>3-step process</button>
          <button onClick={() => handleButtonClick(2)}>Inclusion</button>
        </div>
        <div className={styles.cardsWrapper}>
          <div className={`${styles.card} ${activeCard === 0 ? styles.active : ''}`}>
          <p className={styles.para}>Leveraging the expertise of our team of fitness experts, Wild Warrior Infra stands out in
                      delivering personalised and fully equipped training spaces. We acknowledge the unique
                      goals, budgets, needs, and preferences of each client, thus aiming to provide tailored
                      training environments that precisely address these requirements.</p>
          </div>
          <div className={`${styles.card} ${activeCard === 1 ? styles.active : ''}`}>
          <p>We follow a structured 3-step process: Plan, Procure, and Place. We meticulously assess
                      the available space, devise a plan, procure the necessary equipment, and arrange it
                      according to the devised plan. This comprehensive process enables us to offer end-to-end
                      solutions, transforming vacant spaces into world-class training facilities, from initial planning
                      to equipment installation.</p>
          </div>
          <div className={`${styles.card} ${activeCard === 2 ? styles.active : ''}`}>
          <p>Our marquee projects include the establishment of a functional training space, an Obstacle
                      Course Setup, and an Outdoor Rig at Sol Fitness, Chennai, India's first Fitness resort. We
                      are proud to have created an outdoor training zone and calisthenics park nestled within a
                      forest in Auroville. Furthermore, we've constructed one of Andhra Pradesh's largest training
                      spaces- an Indoor Gym, and installed three Outdoor Rigs at GITAM University,
                      Visakhapatnam.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Cards;