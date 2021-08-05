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
      { label: 'Create React App', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
    ]
  };
  
  onToggleDone = (id) => {
    console.log('Toggle Done', id);
  }

  onToggleImportant = (id) => {
    console.log('Toggle Important', id);
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
      id: this.idNumber++
    };
    //add new item in array, change state
    this.setState(({todoData})=> {
      const newTodoData = [...todoData, newItem]
      return {todoData: newTodoData}
    })
    
  }
  
  render(){
    return(
      <div className='todo-app'>
        <AppHeader toDo={3} done={0}></AppHeader>
        <div className="search-panel d-flex" >
          <SearchPanel />
          <ItemFilter />
        </div>
        <TodoList 
          todos={this.state.todoData}
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