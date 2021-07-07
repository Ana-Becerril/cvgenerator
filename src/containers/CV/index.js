import React from 'react';
import styles from './style.module.css';

const CV = ({ datos }) => {



  return (
    <>
      <div>
        <div className={styles.formContainer}>
          <div className={styles.form}>
            <div className={styles.mainContainers}>

              <div className={styles.headerNameContainer}>
                <div>{datos.firstName}</div>
                <div>{datos.lastName}</div>
                <div>{datos.role}</div>
                <p>Persona</p>
                <div>{datos.address}</div>
                <div>{datos.email}</div>
                <div>{datos.phone}</div>
              </div>

              <div>{datos.position}</div>
              <div>{datos.company}</div>
              <div>{datos.city}</div>
              <div>{datos.from}</div>
              <div>{datos.to}</div>
              <div>{datos.university}</div>
              <div>{datos.cityEducation}</div>
              <div>{datos.degree}</div>
              <div>{datos.subject}</div>
              <div>{datos.fromEducation}</div>
              <div>{datos.toEducation}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CV;