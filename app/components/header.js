import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Header extends Component {
  render () {
    return (
        <div className="header">
              <div className="blockFirst">
                <h2>Dashboard / Home / All Site View</h2>
              </div>
              <div className="blockSecond">
                <p>Reporting Period</p>
                <form>
                  <select>
                    <option >Last 7 Day’s </option>
                    <option >Last 14 Day’s</option>
                    <option defaultValue>Last 30 Day’s</option>
                  </select>
                </form>
              </div>
              {this.props.children}
          </div>
    );
  }
};
