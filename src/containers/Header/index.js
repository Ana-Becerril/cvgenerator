import React, { useState } from 'react';
import styles from './style.module.css'
import Switch from "react-switch";
import CV from "../CV"
import Form from "../Form"

const Header = () => {
  
  const [checked, setChecked] = useState(false);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };

  return (
    <>
        <div className={styles.appContainer}>
          <div className={styles.header}>
            <div className={styles.title}>CV Generator</div>
          </div>
          <div className={styles.navBar}>
              <Switch
                onChange={handleChange}
                checked={checked}
                uncheckedIcon={false}
                checkedIcon={false}
                offColor="#9052aa"
                onColor="#d6bcfa"
                offHandleColor="#ffffff"
                onHandleColor="#ffffff"
              />
          </div>
        </div>
    </>
  );
}

export default Header;