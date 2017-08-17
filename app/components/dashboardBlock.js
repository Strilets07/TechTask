import React, {Component} from 'react';
import {Link} from 'react-router';

export default class DashboardBlock extends Component {
  render () {
    return (
      <div className="dashboardBlock">
      <table>
        <thead>
          <tr className="tdItem">
            <td colSpan="6"><p>Recent order</p></td>
            <td colSpan="3"><img src="../images/3-layers.png" alt="item"/></td>
          </tr>
          <tr className="tdItemList">
            <td>Image</td>
            <td>Product Name</td>
            <td>Product   Code</td>
            <td>Status</td>
            <td>Purchased On</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Tracking No#</td>
          </tr>
        </thead>
        <tbody>
          <tr className="tdItemListBlock">
            <td><img src="../images/item1.png" alt="item"/></td>
            <td>Your Product Title Here</td>
            <td>3BSD59</td>
            <td>Paid</td>
            <td>27 Sep 2015</td>
            <td>$99.00</td>
            <td>2</td>
            <td>#BG6R9853LP</td>
          </tr>
          <tr className="tdItemListBlock">
            <td><img src="../images/item2.png" alt="item"/></td>
            <td>Your Product Title Here</td>
            <td>3BH87G</td>
            <td>Pending</td>
            <td>08 Sep 2015</td>
            <td>$99.00</td>
            <td>2</td>
            <td>#368QRM83B</td>
          </tr>
        </tbody>
      </table>
      </div>
    );
  }
};
