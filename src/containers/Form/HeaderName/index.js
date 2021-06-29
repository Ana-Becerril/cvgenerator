import React, {useState} from 'react';
import styles from './style.module.css';
import Input from '../../../components/Input/Input';

const HeaderName = () => {

    const [firstNameValue, setfirstNameValue] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");
    const [currentRoleValue, setCurrentRoleValue] = useState("");

    const handleChange = (fn,e) => {
        fn(e.target.value);
    };

    return (
        <>
            <div>
                <div className={styles.headerContainer}>
                    <Input
                        onChange={(e) => handleChange(setfirstNameValue, e)}
                        placeholder="First Name"
                        value={firstNameValue}
                        className={styles.nameInput} />
                    
                    <Input
                        onChange={(e) => handleChange(setLastNameValue, e)}
                        placeholder="Last Name"
                        value={lastNameValue} 
                        className={styles.nameInput} />

                    <Input
                        onChange={(e) => handleChange(setCurrentRoleValue, e)}
                        placeholder="Current Role"
                        value={currentRoleValue} 
                        className={styles.nameInput} />

                </div>
    </div>
  </>
  );
};

export default HeaderName;