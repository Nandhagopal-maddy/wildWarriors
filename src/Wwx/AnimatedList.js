import React from 'react';
import styles from './Wwx.module.css'
import { motion } from 'framer-motion';

const items = ['Unique courses offering unforgettable memories, indoors or outdoors.', 'Expert management from start to finish.', 'Who is it for? If your group is aged between 06-60 years ', '17 events and 6200 participants so far (School sports day, Corporate Events, Team bonding, Outbound Training, Birthday Parties etc.) '];

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedList = () => {
  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={listVariants}
      className={styles.gridContainer}
      style={{ listStyleType: 'none' }}
    >
      {items.map((item, index) => (
        <motion.li key={index} variants={itemVariants} className={styles.box3} style={{ marginBottom: '10px' }}>
          {item}
        </motion.li>
      ))}
      <div className={styles.heading2}>
        OCR E<span className={styles.charcoal}>X</span>PERIENCE
      </div>
    </motion.ul>
  );
};

export default AnimatedList;