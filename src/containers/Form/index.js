import React from 'react';
import styles from './style.module.css';
import HeaderName from './HeaderName';


const Form = ({onChange, firstNameValue, lastNameValue, currentRoleValue}) => {

  return (
  <>
    <div>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <div className={styles.mainContainers}>
            <div className={styles.left}>
            <HeaderName
            handleChange={onChange}
            firstNameValue={firstNameValue}
            lastNameValue={lastNameValue}
            currentRoleValue={currentRoleValue}
            />
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

export default Form;