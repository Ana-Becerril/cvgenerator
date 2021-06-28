import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Form from '../Form';
import CV from '../CV';
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

