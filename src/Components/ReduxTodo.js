import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const ReduxTodo = () => {
  const [inputValue, setInputValue] = useState();
  const todoList = useSelector((state) => state);
  console.log("🚀 ~ ReduxTodo ~ todoList:", todoList)

  const handleTodo = () => {

  }
  
  return (
    <div className='container'>
      <div className='input-container'>
        <input type='text' placeholder='Enter Your todo' className='to-do-input' value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button className='to-do-button' onClick={handleTodo}>Ok</button>
        {/* <button className='to-do-button' onClick={insert}>{edit ? "Update" :'Ok'}</button> */}
      </div>
      {/* <div className='to-do-list-container'>
        {
          todoList.map(({ id, title, completed }) => (
            <div className='to-do-list' key={id}>
              <p>{title}</p>
              <button onClick={() => { }}>Delete</button>
              <button onClick={() => { }}>Update</button>
            </div>
          ))
        }
      </div> */}
    </div>
  )
}

export default ReduxTodo