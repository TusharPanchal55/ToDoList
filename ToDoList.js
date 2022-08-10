import React from 'react'
import './ToDoList';

function ToDotask(props) {
 
  return <div>
    {props.taskList.map(todo => {
      return (
        <div className='list'>
      <p>{todo.kaarya}</p>
      <button className='canbutton'>cancle</button>
      </div>
      );
    })}
  </div>;
}

export default ToDotask;