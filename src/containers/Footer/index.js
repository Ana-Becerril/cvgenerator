import React from 'react';
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';



const Footer = () => {


  return (
    <>
        <div className={styles.footerContainer}>
        Made with 💜 by Ana Becerril 
        <div className={styles.iconsContainer}>
        <a href="https://github.com/Ana-Becerril">
        <FontAwesomeIcon icon={faGithubSquare} className={styles.icon}/>
        </a>
        <a href="https://www.linkedin.com/in/anabecbel/">
        <FontAwesomeIcon icon={faLinkedin} className={styles.icon}/>
        </a>
        </div>
        </div>
    </>
  );
}

export default Footer;