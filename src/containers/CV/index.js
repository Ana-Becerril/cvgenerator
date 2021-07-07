import React from 'react';
import styles from './style.module.css';

const CV = ({ datos }) => {



  return (
    <>
      <div>
        <div className={styles.formContainer}>
          <div className={styles.page}>
            <div className={styles.mainContainers}>
              <div className={styles.headerNameContainer}>
                <h1>{datos.firstName}</h1>
                <h1>{datos.lastName}</h1>
                <div className={styles.role}>{datos.role}</div>
                <p></p>Address
                <div>{datos.address}</div>
                <p></p>Email
                <div>{datos.email}</div>
                <p></p>Phone
                <div>{datos.phone}</div>
              </div>
              <div className={styles.rightContainers}>
              <div className={styles.experienceContainer}>
                <div>{datos.description}</div>
                <div>{datos.position}</div>
                <div>{datos.company}</div>
                <div>{datos.city}</div>
                <div>{datos.from}</div>
                <div>{datos.to}</div>
              </div>
              <div className={styles.educationContainer}>
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
        </div>
      </div>
    </>
  );
};

export default CV;