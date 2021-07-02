import React from 'react';
import styles from './style.module.css'
const Header = () => {


  return (
    <>
        <div className={styles.appContainer}>
          <div className={styles.header}>
            <div className={styles.title}>CV Generator</div>
          </div>
        </div>
    </>
  );
}

export default Header;