"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import Config from  '../../../config.json';

class ToDoListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      applications: Config.applications,
      applicationsImmutable: Config.applications
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  render() {
    return (
      <div>
        <form>
          <div class="form-group row">
            <label for="searchInput" class="col-sm-2 col-form-label col-form-label-lg">Search applications</label>
            <div class="col-sm-10">
              <input type="text" id="searchInput" onChange={this.handleChange} class="form-control form-control-lg"/>
            </div>
          </div>
        </form>
        <div class="card-columns">
          {this.state.applications.map((application) => {
            if (application.active && application.include) {
              return (
                <div class="card shadow p-3 bg-white rounded min-height-160">
                  <div class="card-body">
                    <h5 class="card-title">{application.name}</h5>
                    <p class="card-text">{application.subHeading}</p>
                    <a class="btn btn-dark mr-2 mb-2"
                      href={`../${Config.prefix}${application.folder}/${Config.index}`}>
                        View app<i class="fa fa-eye ml-2"></i>
                    </a>
                    <a class="btn btn-dark mb-2"
                      href={`${Config.repoRootUrl}/${Config.folderRoot}/${Config.prefix}${application.folder}`}
                      target="_blank">
                        View code<i class="fa fa-github-square ml-2"></i>
                    </a>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <ToDoListForm />,
  document.getElementById('result')
);