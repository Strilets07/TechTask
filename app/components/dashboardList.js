import React, {Component} from 'react';
import {Link} from 'react-router';


export default class DashboardList extends Component {
  render () {
    return (
      <ul className="dashboardList">
         <li><Link to={"/dashboardBlock"}><p>Dashboard 1</p></Link></li>
         <li><Link to={"/dashboardBlockExample"}><p>Dashboard 2</p></Link></li>
         <li><Link to={"/dashboardBlockExample"}><p>Dashboard 3</p></Link></li>
         <li><Link to={"/dashboardBlockExample"}><p>Comming Soon 3</p></Link></li>
      </ul>
    );
  }
};
