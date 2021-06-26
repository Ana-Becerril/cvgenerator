import React, { useState } from 'react';
import styles from './style.module.css'
import Switch from "react-switch";
import { useHistory, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const history = useHistory();
  
  const [checked, setChecked] = useState(false);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
    if (location.pathname === '/') history.push('/cv')
    if (location.pathname === '/cv') history.push('/')

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