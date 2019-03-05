import React, { Component } from 'react';
import ClassNames from 'classnames';
const RED =0;
const YELLOW =1;
const GREEN =2;

class TrafficLight extends Component{
    // constructor(){
    //     super();
    //     this.state ={
    //         currentColor:RED 
    //     };

    //     setInterval(()=>{
    //         this.setState({
    //             currentColor : this.getCurrentColor(this.state.currentColor)
    //         });
    //     },1000);
    // }

    // getCurrentColor(color){
    //     switch(color){
    //         case RED:
    //             return YELLOW;
    //         case YELLOW:
    //             return GREEN;
    //         default:
    //             return RED;
    //     }
    // }

    render(){
        const {currentColor} = this.props;
        return(
            <div className={ClassNames('container')}>
                <div className={ClassNames('circle','red',{active:currentColor===RED})}></div>
                <div className={ClassNames('circle','yellow',{active: currentColor===YELLOW})}></div>
                <div className={ClassNames('circle','green',{active: currentColor===GREEN})}></div>
            </div>
        );
    }
}

export default TrafficLight;