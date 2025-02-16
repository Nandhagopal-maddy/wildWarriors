import React from 'react';
import styles from './Wwx.module.css'
import AnimatedList from './AnimatedList';
const Wwx = () => {
  return (
    <><div>
          <h1 className={styles.heading1}>WWX</h1>
          <div className={styles.box}>
              <div className={styles.heading2}>OCR E<span className={styles.charcoal}>X</span>PERIENCE</div>
          </div>
      </div><div className={styles.heading3}>
      India’s only Customised & fun Obstacle Course Experiences for
      Educational Institutes, Corporates & Private Groups
          </div>
          <div className={styles.container}>
          
          <div className={styles.box1}>
         
          “We're the only brand in India that specialises in making personalised
OCR experiences for Schools, Colleges, Corporate Parks, and more. No matter if
it's indoors or outdoors, our unique courses promise to give participants memories to
cherish. Furthermore, our expertise extends to seamlessly orchestrating events from
start to finish.”

          </div>
          <div className={styles.box2}>
          <AnimatedList />
          </div>
          </div>
          </>
          
  );
};

export default Wwx;