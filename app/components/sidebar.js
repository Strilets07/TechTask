import React, {Component} from 'react';
import {Link} from 'react-router';
import DashboardList from './dashboardList'


export default class Sidebar extends Component {
  state = {
    condition: false,
    visibleDash: false,
    color_bg: true,
  }

  handleClick = () => {
    this.setState({
      condition: !this.state.condition
    });
  }
  handleClickBlock = () => {
    this.setState({visibleDash: !this.state.visibleDash});
  }


  render () {
    return (
      <div>
        <div className={ "container " + (this.state.condition ? "toggle" : "sidebar")}>
          <div
          className="sibeBarIcon sibeBarIconToggle"
          onClick={this.handleClick}>
          </div>
          <div className="sidebarlogo">
            <h1 className="sidebarlogoName">{!this.state.condition ? 'Company' : 'C'}</h1>
          </div>
          <div className="userBlock userBlockToggle">
            <div className="userLogo">
            </div>
            <div className="userInfo">
              <p>User Name</p>
              <p>Company name</p>
            </div>
          </div>
          <div className="sidebarGeneral sidebarGeneralToggle">
            <h3>general</h3>
          </div>
          <div className="sidebarItem">
            <ul className="sidebarItemList sidebarItemListToggle">
              <li><Link to={"/"}>
                <img src="../images/dashboard-icon.png" alt="dashboard-icon"/>
                <p className="sidebarItemListName sidebarItemListNameToggle" onClick={this.handleClickBlock} >Dashboard</p>
                {this.state.visibleDash ? <DashboardList /> : null}
              </Link></li>
              <li><Link to={"/layouts"}>
                <img src="../images/layouts-icon.png" alt="layout"/>
                <p className="sidebarItemListName sidebarItemListNameToggle">Layouts</p>
              </Link></li>
              <li><Link to={"/pages"}>
                <img src="../images/pages-icon.png" alt="pages-icon"/>
                <p className="sidebarItemListName sidebarItemListNameToggle">Pages</p>
              </Link></li>
              <li><Link to={"/message"}>
                <img src="../images/message.png" alt="message"/>
                <p className="sidebarItemListName sidebarItemListNameToggle">Message</p>
              </Link></li>
            </ul>
          </div>
        </div>
        <main>
        {this.props.children}
        </main>
      </div>
    )
  }
};
