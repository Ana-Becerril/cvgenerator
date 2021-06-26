import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Form from '../Form/index';
import CV from '../CV/index';
import App from '../../App';


const Routes = () => (
        <>
          <Router>
                <Switch>
                  <Route exact path='/' component={App} />
                  <Route path='/form' component={Form} />
                  <Route path='/cv' component={CV} />
                </Switch>
          </Router>
        </>
      );





export default Routes;

