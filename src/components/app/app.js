import React, { Component } from 'react'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import ItemFilter from '../item-filter'
import TodoList from '../todo-list'
import ItemAddForm from '../item-add-form/item-add-form'
import  './app.css'


const App = () => {
  const todoData = [
    { label: 'Create React App', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
  ]
  
  
    return(
      <div className='todo-app'>
        <AppHeader toDo={3} done={0}></AppHeader>
        <div className="search-panel d-flex" >
          <SearchPanel />
          <ItemFilter />
        </div>
        <TodoList todos={todoData}/>
        <ItemAddForm />
      </div>
    )
}
export default App;