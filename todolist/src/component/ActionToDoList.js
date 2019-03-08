import React, { Component } from 'react';
import './ActionToDoList.css';
class ActionToDoList extends Component {
  render() {
    const {item} = this.props;
    return (
      <div className="actionApp">
        <p className="countList">{item.length}</p>
        <a href="#aoi">All</a>
        <a href="#oidf">Active</a>
        <a href="#fsdf">complete</a>
        <a href="#sdfs">clean all</a>
      </div>
    );
  }
}

export default ActionToDoList;
