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
                <div className={styles.contact}>CONTACT</div>
                <div>{datos.address}</div>
                <div>{datos.email}</div>
                <div>{datos.phone}</div>
                <div>{datos.linkedin}</div>
              </div>
              <div className={styles.rightContainers}>
                  <div className={styles.skillsContainer}>
                    <h3> SKILLS</h3>
                    <li>{datos.skills}</li>
                  </div>
                  <div className={styles.experienceContainer}>
                  <h3> EXPERIENCE</h3>
                  <div>{datos.position}</div>
                  <div>{datos.company}</div>
                  <div>{datos.city}</div>
                  <div>{datos.from}</div>
                  <div>{datos.to}</div>
                </div>
                <div className={styles.educationContainer}>
                <h3> EDUCATION</h3>
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