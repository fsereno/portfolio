"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';

const API_ENDPOINT = "https://www.something.com";

class ShoppingListApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      get: API_ENDPOINT
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleGetSubmit = this.handleGetSubmit.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleGetSubmit(event) {
    event.preventDefault();
    window.open('https://usefulangle.com', '_blank');
  }

  handleAddSubmit(event) {
    event.preventDefault();
    window.open('https://google.com', '_blank');
  }

  handleDeleteSubmit(event) {
    event.preventDefault();
    window.open('https://bbc.co.uk', '_blank');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleGetSubmit} autoComplete="off">
          <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
            <div class="input-group mr-2">
              <div class="input-group-prepend">
                <div class="input-group-text">@</div>
              </div>
              <input type="text" class="form-control" placeholder="Input" aria-label="Input" />
            </div>
            <div class="btn-group" role="group" aria-label="First group">
              <button type="submit" class="btn btn-dark api-link">Get</button>
            </div>
          </div>
        </form>
        <form onSubmit={this.handleAddSubmit} autoComplete="off">
          <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
            <div class="input-group mr-2">
              <div class="input-group-prepend">
                <div class="input-group-text">@</div>
              </div>
              <input required type="text" class="form-control" placeholder="Input" aria-label="Input" />
            </div>
            <div class="btn-group" role="group" aria-label="Second group">
              <button type="submit" class="btn btn-dark api-link">Add</button>
            </div>
          </div>
        </form>
        <form onSubmit={this.handleDeleteSubmit} autoComplete="off">
          <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
            <div class="input-group mr-2">
              <div class="input-group-prepend">
                <div class="input-group-text">@</div>
              </div>
              <input required type="text" class="form-control" placeholder="Input" aria-label="Input" />
            </div>
            <div class="btn-group" role="group" aria-label="Third group">
              <button type="submit" class="btn btn-dark api-link">Delete</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <ShoppingListApp />,
  document.getElementById('result')
);