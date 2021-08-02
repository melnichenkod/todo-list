import React from 'react'
import './item-add-form.css'

const ItemAddForm = () => {
  return (
    <form className='item-add-form d-flex'>
      <input type="text"
             className='form-control'
             placeholder='Whats need to be done'
      />
      <button type='submit' className='btn btn-outline-secondary'>Add</button>
      
    </form>
  )
}

export default ItemAddForm