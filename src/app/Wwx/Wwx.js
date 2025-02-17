import React from 'react';
import styles from './Wwx.module.css'
import AnimatedList from './AnimatedList';
const Wwx = () => {
  return (
    <><div>
      </div><div className={styles.heading3}>
      India’s only Customised & fun Obstacle Course Experiences for
      Educational Institutes, Corporates & Private Groups
          </div>
          <div className={styles.container}>
          
          <div className={styles.box1}>
          <img loading="lazy" decoding="async" width="10" height="10" src="https://dkkit.rometheme.pro/djogging/wp-content/uploads/sites/65/2023/01/Quotes-Iscon.png" className={styles.quote} alt="" srcset="https://dkkit.rometheme.pro/djogging/wp-content/uploads/sites/65/2023/01/Quotes-Iscon.png 600w, https://dkkit.rometheme.pro/djogging/wp-content/uploads/sites/65/2023/01/Quotes-Iscon-300x300.png 300w, https://dkkit.rometheme.pro/djogging/wp-content/uploads/sites/65/2023/01/Quotes-Iscon-150x150.png 150w" sizes="(max-width: 100px) 10vw, 100px"/>
        <p>  “We're the only brand in India that specialises in making personalised
OCR experiences for Schools, Colleges, Corporate Parks, and more. No matter if
it's indoors or outdoors, our unique courses promise to give participants memories to
cherish. Furthermore, our expertise extends to seamlessly orchestrating events from
start to finish.”</p>
          </div>
          <div className={styles.box4}>
          <AnimatedList />
          </div>
          </div>
          </>
          
  );
};

export default Wwx;