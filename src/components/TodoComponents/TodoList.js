import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
  return (
    <div className="shopping-list">
    {props.todos.map(item) => {
      return (
        <Todo
          item={item}
          toggleItem={props.toggleItem}
        />
      )
    }}
    </div>
  )
};


export default TodoList;
