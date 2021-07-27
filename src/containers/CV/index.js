import React from 'react';
import styles from './style.module.css';

const CV = ({ datos, chipsArr, experiences, educations }) => {


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
                  <h3> SOFT SKILLS</h3>
                  <ul className={styles.skillsList}>
                    {(chipsArr.skills.length > 0) ? chipsArr.skills.map((chips) => <li>{chips}</li>) : null}
                  </ul>
                </div>


                <div className={styles.experienceContainer}>
                  <h3> EXPERIENCE</h3>
                  {experiences.map((sectionExperiences) => {
                    return (<>
                      <div className={styles.position}>{sectionExperiences.position}</div>
                      <div className={styles.companyData}>
                        <div className={styles.company}>{sectionExperiences.company}</div>
                        <div>{'|' + sectionExperiences.from}</div>
                        <div>-</div>
                        <div>{sectionExperiences.to}</div>
                      </div>
                      <ul>
                        <li className={styles.activity}>{sectionExperiences.activity} </li>
                        <li className={styles.achievement}>{sectionExperiences.achievement} </li>
                      </ul>
                    </>)
                  })}
                    
                </div>

                <div className={styles.educationContainer}>
                  <h3> EDUCATION</h3>
                  <div className={styles.degree}>{datos.degree}</div>
                  <div className={styles.companyData}>
                    <div className={styles.university}>{datos.university}</div>
                    <div className={styles.educationData}>{'|' + datos.fromEducation}</div>
                    <div>-</div>
                    <div className={styles.educationData}>{datos.toEducation}</div>
                  </div>
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