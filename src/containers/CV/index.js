import React from 'react';
import styles from './style.module.css';

const CV = ({datos}) => {



  return (
  <>
    <div>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <div className={styles.mainContainers}>
           <div>{datos.firstName}</div>
           <div>{datos.lastName}</div>
           <div>{datos.role}</div>
           <div>{datos.address}</div>
           <div>{datos.email}</div>
           <div>{datos.phone}</div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default CV;