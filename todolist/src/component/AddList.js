import React, { Component } from 'react';
import './AddList.css';

class AddList extends Component{
    render(){
        const {onAddItem, selectAll} = this.props;
        return(
            <div className="add">
                <div className="circle" onClick={selectAll}></div>
                <div className="input-list">
                    <input type="text" placeholder="add item task" onKeyUp={onAddItem}  />                    
                </div>
            </div>
        );
    }
}
export default AddList;