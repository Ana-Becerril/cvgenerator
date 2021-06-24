import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Form from './components/Form';
import CV from './components/CV';


const App = () => (
  <>
  <Router>
    <div>
      <h2>CV generator</h2>
      <ul className="navbar-nav mr-auto">
            <li><Link to={'/form'} className="nav-link"> Form </Link></li>
            <li><Link to={'/cv'} className="nav-link">CV</Link></li>
          </ul>
          <Switch>
              <Route exact path='/form' component={Form} />
              <Route path='/cv' component={CV} />
          </Switch>
    </div>
    </Router>
  </>
);

export default App;
