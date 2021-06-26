import React, { useState } from 'react';
import styles from './App.module.css'
import Switch from "react-switch";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const App = () => {
  let location = useLocation();
  const history = useHistory();
  const [checked, setChecked] = useState(false);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
    if (location.pathname === '/cv') history.push('/form')
    if (location.pathname === '/cv') history.push('/form')

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

export default App;
