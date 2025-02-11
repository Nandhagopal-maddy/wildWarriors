import React from 'react';
import Image from 'next/image';
import styles from './Wwinfra.module.css'

const Wwinfra = () => {
  return (
    <div className={styles.container}>
          <div className={styles.box1}>
          <h1 className={styles.InfraHeader}>Wild Warrior Obstacle Infra</h1>
          <div className={styles.InfraPara1}>
                  <p className={styles.para}>Leveraging the expertise of our team of fitness experts, Wild Warrior Infra stands out in
                      delivering personalised and fully equipped training spaces. We acknowledge the unique
                      goals, budgets, needs, and preferences of each client, thus aiming to provide tailored
                      training environments that precisely address these requirements.</p>
                      </div>
                      <div className={styles.InfraPara2}>
                  <p>We follow a structured 3-step process: Plan, Procure, and Place. We meticulously assess
                      the available space, devise a plan, procure the necessary equipment, and arrange it
                      according to the devised plan. This comprehensive process enables us to offer end-to-end
                      solutions, transforming vacant spaces into world-class training facilities, from initial planning
                      to equipment installation.</p>
              </div>
                      <div className={styles.InfraPara3}>
                  <p>Our marquee projects include the establishment of a functional training space, an Obstacle
                      Course Setup, and an Outdoor Rig at Sol Fitness, Chennai, India's first Fitness resort. We
                      are proud to have created an outdoor training zone and calisthenics park nestled within a
                      forest in Auroville. Furthermore, we've constructed one of Andhra Pradesh's largest training
                      spaces- an Indoor Gym, and installed three Outdoor Rigs at GITAM University,
                      Visakhapatnam.</p>
                      </div>   
          </div>
          
          <div className={styles.box2}>
          <div className={styles.grid}>
      {[...Array(9)].map((_, index) => (
        <div key={index} className={styles.gridItem}>
          <Image
            src={`/Infraimage${index + 1}.jpg`} // Ensure your images are named image1.jpg, image2.jpg, etc.
            alt={`Image ${index + 1}`}
            width={300}
            height={300}
          />
        </div>
      ))}
    </div>
          </div>
      </div>
    
  );
};

export default Wwinfra;