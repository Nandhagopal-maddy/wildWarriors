import Image from 'next/image';
import styles from './History.module.css';
import { useEffect } from 'react';
import { color } from 'framer-motion';
import { faRunning,faFlagCheckered,faUsers,faEye,faRoadBarrier,faRoad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function History() {
    useEffect(()=>{

    },[])
    const locations=[
        {
            name:'delhi',
            top:'27%',
            left:'30%',
            delay:'500ms'
        }
    ]
    
     
  return (
    <><div className={styles.historyContainer}>
         <div className={styles.containerStyle}>
      <div className={styles.boxStyle}>
      <FontAwesomeIcon icon={faRunning} style={{ fontSize: '40px' , marginLeft: '20px'}} />  
      <h1>Seasons</h1>
      <p className={styles.statsStyle}>7</p>
      </div>
      <div className={styles.boxStyle}>
        <FontAwesomeIcon icon={faFlagCheckered} style={{ fontSize: '35px', marginLeft: '60px'}} />
        <h1>Races Organised</h1>
        <p className={styles.statsStyle}> 73</p>
      </div>
      <div className={styles.boxStyle}>
        <FontAwesomeIcon icon={faUsers} style={{fontSize: '30px', marginLeft:'30px'}} />
        <h1>Participants</h1>
        <p className={styles.statsStyle}>21K+</p>     
      </div>
      </div>
              <div className={styles.mapContainer}>
                  <img
                      src="/WWindia.png"
                      alt="India Map"
                      className={styles['india-map']} />
                  <div className={`${styles.icon} animate__animated animate__fadeInDownBig `} style={{ top: '26%', left: '30%', "animation-delay": "500ms" }}>
                      <img src="/location.svg" alt="Location Icon" />
                      <span className={styles.locatorsName}>Delhi</span>
                  </div>
                  <div className={`${styles.icon} animate__animated animate__fadeInDownBig `} style={{ top: '32%', left: '47%', "animation-delay": "700ms" }}>
                      <img src="/location.svg" alt="Location Icon" />
                      <span className={styles.locatorsName}>Pokhara, Nepal</span>
                  </div>
                  <div id='dehradun' className={`${styles.icon} animate__animated animate__fadeInDownBig`} style={{ top: '24%', left: '33%', "animation-delay": "900ms" }}>
                      <img src="/location.svg" alt="Location Icon" />
                      <span className={styles.locatorsName}>Dehradun</span>
                  </div>
                  <div className={`${styles.icon} animate__animated animate__fadeInDownBig `} style={{ top: '26%', left: '39%', "animation-delay": "1100ms" }}>
                      <img src="/location.svg" alt="Location Icon" />
                      <span className={styles.locatorsName}>Rishikesh</span>
                  </div>
                  <div className={`${styles.icon} animate__animated animate__fadeInDownBig custom-animation5`} style={{ top: '63%', left: '51%', "animation-delay": "1300ms" }}>
                      <img src="/location.svg" alt="Location Icon" />
                      <span className={styles.locatorsName}> Vizag</span>
                  </div>
                  <div className={`${styles.icon} animate__animated animate__fadeInDownBig custom-animation6`} style={{ top: '76%', left: '40%', "animation-delay": "1500ms" }}>
                      <img src="/location.svg" alt="Location Icon" />
                      <span className={styles.locatorsName}>Chennai</span>
                  </div>
                  <div className={`${styles.icon} animate__animated animate__fadeInDownBig custom-animation7`} style={{ top: '79%', left: '26%', "animation-delay": "1700ms" }}>
                      <img src="/location.svg" alt="Location Icon" />
                      <span className={styles.locatorsName}>Coimbatore</span>
                  </div>
                  <div className={`${styles.icon} animate__animated animate__fadeInDownBig custom-animation8`} style={{ top: '86%', left: '32%', "animation-delay": "1900ms" }}>
                      <img src="/location.svg" alt="Location Icon" />
                      <span className={styles.locatorsName}>Kodaikanal</span>
                  </div>
                  <div className={`${styles.icon} animate__animated animate__fadeInDownBig custom-animation9`} style={{ top: '72%', left: '30%', "animation-delay": "2100ms" }}>
                      <img src="/location.svg" alt="Location Icon" />
                      <span className={styles.locatorsName}>Bengaluru</span>
                  </div>
                  <div className={`${styles.icon} animate__animated animate__fadeInDownBig custom-animation10`} style={{ top: '95%', left: '35%', "animation-delay": "2300ms" }}>
                      <img src="/location.svg" alt="Location Icon" />
                      <span className={styles.locatorsName}>Dambulla, Srilanka</span>
                  </div>
              </div>
              <div className={styles.containerStyle}>
          <div className={styles.boxStyle}>
            <FontAwesomeIcon icon={faEye} style={{fontSize: '30px', marginLeft: '30px'}} />
        <h1>Spectators</h1>
        <p className={styles.statsStyle}>40K+</p>
      </div>
      <div className={styles.boxStyle}>
        <FontAwesomeIcon icon={faRoadBarrier } style={{fontSize: '40px', marginLeft:'55px'}} />
      <h1>Obstacles Overcome</h1>
        <p className={styles.statsStyle}>300K+</p>
      </div>
      <div className={styles.boxStyle}>
      <FontAwesomeIcon icon={faRoad } style={{fontSize: '35px', marginLeft:'40px'}} />
      <h1>Kilometres Run</h1>
      <p className={styles.statsStyle}>90K+</p>
      </div>
            </div>
          </div>
          </>
  );
}