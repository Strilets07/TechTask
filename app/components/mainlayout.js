import React, {Component} from 'react';
import Header from './header'
import Sidebar from './sidebar'

export default class MainLayout extends Component {
  render () {
    return (
      <div>
          <Header/>
          <Sidebar/>
          <div>{this.props.children}</div>
      </div>
    );
  }
};
