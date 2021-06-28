import React, {useState} from 'react';
import styles from './style.module.css';

const Form = () => {

  return (
  <>
    <div>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <h2>Personal Information</h2>
          <form>
           
            <button type="submit">
              Add 
            </button>
          </form>
        </div>
      </div>
    </div>
  </>
  );
};

export default Form;