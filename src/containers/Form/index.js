import React from 'react';
import styles from './style.module.css';
import HeaderName from './HeaderName';
import Education from './Education';

const Form = () => {

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
            <Education/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Form;