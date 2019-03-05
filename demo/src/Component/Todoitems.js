import React, { Component } from 'react';

class Todoitems extends Component{
    
    render(){
        const {items} = this.props;
        let className = '';
        if(items.isDelete){
            className += ' item'; 
        }
        return (
            <div className={className}>
                <p>{items.title}</p>
            </div>
        );
    }
}

export default Todoitems;