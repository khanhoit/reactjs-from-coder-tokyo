import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoList.css';

class TodoList extends Component{
    render(){
        const {item,onRemoveItem,onComplete} = this.props;
        return(
            <div className={ classNames("todolist")}>
                <div className= {classNames("circle",{isComplete:item.isComplete})} onClick={onComplete} ></div>
                <div className="content" >{
                    item.title
                }</div>
                <div className="close" onClick={onRemoveItem} ></div>
            </div>
        );
    }
}
export default TodoList;