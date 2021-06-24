import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styles from './App.module.css'
import Form from './components/Form';
import CV from './components/CV';


const App = () => (
  <>
    <Router>
      <div className={styles.appContainer}>
        <div className={styles.header}>
          <div className={styles.title}>CV Generator</div>
          </div>
        <div className={styles.navBar}>
          <div><Link to={'/form'} className={styles.navLink}> Form </Link></div>
          <div><Link to={'/cv'} className={styles.navLink}> CV </Link></div>
        </div>
        <Switch>
          <Route exact path='/form' component={Form} />
          <Route path='/cv' component={CV} />
        </Switch>
      </div>
    </Router>
  </>
);

export default App;
