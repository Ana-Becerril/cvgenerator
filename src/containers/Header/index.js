import React from 'react';
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons';

const Header = () => {


  return (
    <>
        <div className={styles.appContainer}>
          <div className={styles.header}>
            <FontAwesomeIcon icon={faFile} className={styles.ifile}/>
            <div className={styles.title}>CV Generator</div>
          </div>
        </div>
    </>
  );
}

export default Header;