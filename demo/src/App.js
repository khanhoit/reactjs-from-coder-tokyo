import React, { Component } from 'react';
import Todoitems from './Component/Todoitems'
import './Component/Todoitems.css'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.items= [
     {title: 'items1',isDelete:true},
     {title:'items2'},
     {title:'items3'}
    ];
  }
  
  render() {
    return (
      <div className="App">{
          this.items.map((item,index)=><Todoitems key={index} items={item} />)
          
        }
      </div>
    );
  }

}

export default App;
