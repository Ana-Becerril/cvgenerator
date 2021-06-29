import React from 'react';
import styles from './style.module.css'
import Switch from "react-switch";

const Header = ({checked, handleChange}) => {


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