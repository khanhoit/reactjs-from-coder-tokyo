import React, { Component } from 'react';
import TodoList from './Component/TodoList';
import AddList from './Component/AddList';
import ActionToDoList from './Component/ActionToDoList';
import './App.css';

class App extends Component {
 constructor(){
    super(); 
    let data = localStorage.getItem('todo');
    if(data){
      data = JSON.parse(data);
    }else{
      data = {todoitem:[]};
    }
    
   this.state =data;
   this.onRemoveItem= this.onRemoveItem.bind(this);
   this.onAddItem= this.onAddItem.bind(this);
   this.onComplete= this.onComplete.bind(this);
   this.selectAll = this.selectAll.bind(this);
    console.log('hihi');
   this.closeTabBrowser();
  }
 onAddItem(event){
     if(event.keyCode===13){
       const {todoitem} = this.state;
       todoitem.push({title:event.currentTarget.value,isComplete:false});
       this.setState({
         todoitem: todoitem 
        });
        event.currentTarget.value ="";
     }   
 }
 onComplete(index){
    return ()=>{
      const{todoitem} = this.state;
      todoitem[index].isComplete=!todoitem[index].isComplete;
      this.setState({
        todoitem: todoitem
      })
    }
  }
  selectAll(){
    const {todoitem} = this.state;
    todoitem.map(item=>{
      item.isComplete = !item.isComplete;
      return item;
    })
    this.setState(
      {
        todoitem : todoitem
      }
      )
    }
    onRemoveItem(index){
      return (event)=>{
        this.setState({
          todoitem : [...this.state.todoitem.slice(0,index),...this.state.todoitem.slice(index+1)]
        });
      } 
    }
    
    closeTabBrowser(){
      const data = this.state;
      window.onbeforeunload = function (e) {
        e = e || window.event;
    
        // For IE and Firefox prior to version 4
        if (e) {
            alert('hihi');
            localStorage.setItem('todo',JSON.stringify(data));
            // e.returnValue = 'Sure?';
          }
          
        // For Safari
        // return 'Sure?';
    };  
   }

  render() {
    const {todoitem} = this.state;
    if(todoitem.length!==0)
      return (
        <div className="App">

          <AddList selectAll={this.selectAll} onAddItem={this.onAddItem}/>
          {
            todoitem.map((item,index)=>
              <TodoList item={item} key={index} onRemoveItem={this.onRemoveItem(index)} onComplete={this.onComplete(index)}
              />
            )
          }
          <ActionToDoList item={todoitem}/>
        </div>
      );
    else{
      return (
        <div className="App">
          <AddList selectAll={this.selectAll} onAddItem={this.onAddItem}/>
        </div>
      ); 
    }
  }
}

export default App;
