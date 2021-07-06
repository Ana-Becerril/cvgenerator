import React from 'react';
import styles from './style.module.css';
import HeaderName from './HeaderName';
import Experience from './Experience';
import Education from './Education';


const Form = ({handleInputChange}) => {

  return (
  <>
  <div className={styles.formContainer}>
   <HeaderName onChange={handleInputChange}/>
   <Experience onChange={handleInputChange}/>
   <Education onChange={handleInputChange}/>
   </div>
  </>
  );
};

export default Form;