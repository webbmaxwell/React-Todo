import React from 'react';
import "./TodoComponents/Todo.css";

import TodoList from "./TodoComponents/TodoList.js";
import TodoForm from "./TodoComponents/TodoForm.js";


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos,
    };
  };

  addItem = item => {
    let newItem = {
      name: item,
      id: Date.now(),
      purchased: false
    };
  };

  toggleItem = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(item => {
      if (item.id === id) {
        item.purchased = !item.purchased;
        return item;
      }
      else {
        return item;
      };
    })
  };

  clearComplete = id => {
    const filtered = this.state.todos.filter(item => {
      return item.purchased === false;
    });

    this.setState({ todos: filtered })
  }

  render() {

    if(this.state.todos.length < 1) {
      return (
        <div className="App">
          <div className="header">
            <h1>ToDo List: MVP</h1>
            <TodoList
              todos={this.state.todos}
              toggleItem={this.toggleItem}
            />
            <TodoForm addItem={this.addItem} />
          </div>
          <div>
            <button onClick={this.clearComplete} className="clear-btn">
              Clear Completed
            </button>
          </div>
        </div>
      );
    }

  }
}

export default App;
