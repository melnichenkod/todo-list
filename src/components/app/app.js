import React, { Component } from 'react'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import ItemFilter from '../item-filter'
import TodoList from '../todo-list'
import ItemAddForm from '../item-add-form/item-add-form'
import  './app.css'


export default class App extends Component {
  idNumber = 10
  state = {
    todoData: [
    { label: 'Create React App', important: false, done: false, id: 1 },
    { label: 'Make Awesome App', important: true, done: false, id: 2 },
    { label: 'Have a lunch', important: false, done: false, id: 3 }
    ]
  };
  
  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex(item => item.id === id);

      //update object
      const oldItem = todoData[idx];
      const newItem = {...oldItem, done: !oldItem.done}
      //construct newArray
      const newData = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)
      ];
      return {
        todoData: newData
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex(item => item.id === id);

      //update object
      const oldItem = todoData[idx];
      const newItem = {...oldItem, important: !oldItem.important}
      //construct newArray
      const newData = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)
      ];
      return {
        todoData: newData
      }
    })
  }

  deleteItem = (id)=> {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((item) =>{
        return item.id === id
      })
      // const before = todoData.slice(0, idx);
      // const after = todoData.slice(idx + 1);
      const newTodoData = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
      return {
        todoData: newTodoData
      }
    })
  }

  addItem = (label) => {
    const newItem = {
      label,
      important: false,
      done: false,
      id: this.idNumber++
    };
    //add new item in array, change state
    this.setState(({todoData})=> {
      const newTodoData = [...todoData, newItem]
      return {todoData: newTodoData}
    })
    
  }
  
  render(){
    const {todoData} = this.state;
    const doneCount = todoData.filter((item)=> item.done).length;
    const todoCount = todoData.length - doneCount;
    return(
      <div className='todo-app'>
        <AppHeader toDo={todoCount} done={doneCount}></AppHeader>
        <div className="search-panel d-flex" >
          <SearchPanel />
          <ItemFilter />
        </div>
        <TodoList 
          todos={todoData}
          onDeleted ={
            this.deleteItem
          }
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <ItemAddForm
          onItemAdded={this.addItem} />
      </div>
    )
  }
    
}