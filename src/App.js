import React, { useState } from 'react';
import { BrowserRouter as Router, Switch as SwitchRouter, Route, Link, useLocation } from 'react-router-dom';
import styles from './App.module.css'
import Form from './components/Form';
import CV from './components/CV';
import Switch from "react-switch";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const App = () => {
  let location = useLocation();
  const history = useHistory();
  const [checked, setChecked] = useState(false);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
    if (location.pathname === '/form') history.push('/cv')
    if (location.pathname === '/cv') history.push('/form')
  };

  return (
    <>
      <Router>
        <div className={styles.appContainer}>
          <div className={styles.header}>
            <div className={styles.title}>CV Generator</div>
          </div>
          <div className={styles.navBar}>
            <SwitchRouter>
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
              <Route exact path='/form' component={Form} />
              <Route path='/cv' component={CV} />
            </SwitchRouter>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
