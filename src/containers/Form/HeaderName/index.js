import React from 'react';
import styles from './style.module.css';
import Input from '../../../components/Input/Input';

const HeaderName = ({handleChange, firstNameValue, lastNameValue, currentRoleValue}) => {

    const valueChange = (fn,e) => {
        fn(e.target.value);
    };

    return (
        <>
            <div>
                <div className={styles.headerContainer}>
                <form>
                    <Input
                        onChange={handleChange} 
                        placeholder="First Name"
                        value={firstNameValue}
                        className={styles.nameInput} />
                    
                    <Input
                        onChange={handleChange}
                        placeholder="Last Name"
                        value={lastNameValue} 
                        className={styles.nameInput} />

                    <Input
                        onChange={handleChange}
                        placeholder="Current Role"
                        value={currentRoleValue} 
                        className={styles.nameInput} />
                </form>
                </div>
    </div>
  </>
  );
};

export default HeaderName;