"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';

class ToDoListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: ["a", "b", "c"]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((item) => {
            return <li>{item}</li>
          })}
        </ul>
        <p>Test: {this.state.value}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <ToDoListForm />,
  document.getElementById('result')
);