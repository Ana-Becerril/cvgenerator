import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Form from '../Form/index';
import CV from '../CV/index';
import Header from '../Header'


const Routes = () => (
        <>
          <Router>
            <Header/>
                <Switch>
                  <Route exact path='/' component={Form} />
                  <Route path='/cv' component={CV} />
                </Switch>
          </Router>
        </>
      );





export default Routes;

