import React from 'react';

class TodoForm extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = evnet => {
    event.preventDefault();
    this.props.addItem(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="input"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
