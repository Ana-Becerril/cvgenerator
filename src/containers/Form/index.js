import React from 'react';
import styles from './style.module.css';
import Education from './Education';

const Form = () => {

  return (
  <>
    <div>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <h2>Personal Information</h2>
          <form>
            <Education/>
          </form>
        </div>
      </div>
    </div>
  </>
  );
};

export default Form;