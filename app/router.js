import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Header from './components/header';
import MainLayout from './components/mainLayout';

import Sidebar from './components/sidebar';
import DashboardList from './components/dashboardList';
import DashboardBlock from './components/dashboardBlock';
import DashboardBlockExample from './components/dashboardBlockExample';
import Layouts from './components/layouts';
import Pages from './components/pages';
import Message from './components/message';


export default (
  <Router history={browserHistory}>
      <Route component={MainLayout}>

          <Route path="/">
            <IndexRoute component={DashboardList}/>
          </Route>
          <Route path="/DashboardBlock">
                  <IndexRoute component={DashboardBlock}/>
          </Route>
          <Route path="/dashboardBlockExample">
                  <IndexRoute component={DashboardBlockExample}/>
          </Route>

          <Route path="/layouts">
                    <IndexRoute component={Layouts}/>
          </Route>

          <Route path="/pages">
                    <IndexRoute component={Pages}/>
          </Route>

          <Route path="/message">
                    <IndexRoute component={Message}/>
          </Route>

      </Route>
  </Router>
)
