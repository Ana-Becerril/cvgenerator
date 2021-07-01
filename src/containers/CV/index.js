import React from 'react';
import styles from './style.module.css';
import HeaderName from '../Form/HeaderName';

const CV = () => {

  return (
  <>
    <div>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <div className={styles.mainContainers}>
            <div className={styles.left}>
            <HeaderName/>
            </div>
            <div className={styles.right}>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default CV;