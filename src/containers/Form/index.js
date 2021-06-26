import React from 'react';
import styles from './style.module.css';

const Form = () => (
    <>
    <div>
      <div className= {styles.formContainer}>
          <div className={styles.headerContainer}> Header</div>
          <div className={styles.bodyContainer}>Body</div>
          <div className={styles.footerContainer}>Footer</div>  
      </div>
    </div>
  </>
);

export default Form;