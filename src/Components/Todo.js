import React, { useEffect, useState } from 'react'
import { useToDoContext } from '../Context/ToDoAppProvider'
const Todo = () => {
  const { inputValue, setInputValue, list , insert, remove , update, edit} = useToDoContext();
  const [state , setState] = useState(0);

  return (
    <div className='container'>
      <div className='input-container'>
        <input type='text' placeholder='Enter Your todo' className='to-do-input' value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button className='to-do-button' onClick={insert}>{edit ? "Update" :'Ok'}</button>
      </div>
      <div className='to-do-list-container'>
        {
          list.map(({id , title , completed}) => (
            <div className='to-do-list' key={id}>
              <p>{title}</p>
              <button onClick={()=>remove(id)}>Delete</button>
              <button onClick={()=>update(id)}>Update</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Todo