import React from 'react';
import styles from './style.module.css';
import Header from '../Header'

const Form = () => (
    <>
    <div>
      <Header/>
      <div className= {styles.formContainer}>
          <div className={styles.headerContainer}> Header</div>
          <div className={styles.bodyContainer}>Body</div>
          <div className={styles.footerContainer}>Footer</div>  
      </div>
    </div>
  </>
);

export default Form;