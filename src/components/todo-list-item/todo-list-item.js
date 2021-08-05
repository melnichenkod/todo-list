import React, {Component} from 'react'
import './todo-list-item.css'

export default class TodoListItem extends Component{
  state = {
    done: false,
    important: false
  }
  onLabelClick = ()=> {
    this.setState(({done}) => {   //destructure state
      return {
        done: !done
      }
    })
  }
  onImportantClick = () => {
    this.setState((state) => {
      return {
        important: !state.important
      }
    }
    )
  }

  render(){
    const {label, onDeleted, onToggleDone, onToggleImportant} = this.props;
    const {done, important} = this.state;
    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done'
    }
    if (important) {
      classNames += ' important'
    }
    
    return (
      <span className={classNames}>
      <span
        className='todo-list-item-label'
        /* onClick = {this.onLabelClick} */
        onClick = {onToggleDone}>
          {label}
      </span>
        <button type='button'
                className='btn btn-outline-success btn-sm float-right'
                /* onClick = {this.onImportantClick} */
                onClick = {onToggleImportant}>
          <i className='fa fa-exclamation'></i>
        </button>
        <button type='button'
                className='btn btn-outline-danger btn-sm float-right'
                onClick={onDeleted}>
          <i className='fa fa-trash-o'></i>
        </button>
    </span>
    )
  }
}