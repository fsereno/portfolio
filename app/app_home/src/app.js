"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import Config from  '../../../config.json';

class ToDoListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applications: Config.applications,
      applicationsImmutable: Config.applications
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let searchTerm = event.target.value.toUpperCase();
    let filteredApplications = this.state.applicationsImmutable.filter((application) => {
        return application.name.toUpperCase().includes(searchTerm)
        || application.subHeading.toUpperCase().includes(searchTerm)
        || application.description.toUpperCase().includes(searchTerm)
      });
    this.setState({
      applications: filteredApplications
    });
  }

  render() {
    return (
      <div>
        <form>
        <div id="searchBar" class="input-group mb-3 rounded shadow-sm">
          <input type="text" class="form-control" placeholder="Search all available applications..." id="searchInput" onChange={this.handleChange} />
          <div class="input-group-append">
            <span class="input-group-text">
              <i class="fa fa-search"></i>
            </span>
          </div>
        </div>
        </form>
        <div id="applicationsContainer" class="card-columns">
          {this.state.applications.map((application) => {
            if (application.active && application.include) {
              return (
                <div class="card shadow-sm p-3 bg-white rounded min-height-160">
                  <div class="card-body">
                    <h5 class="card-title">{application.name}</h5>
                    <p class="card-text">{application.subHeading}</p>
                    <a class="btn btn-dark mr-2 mb-2"
                      href={`${Config.prefix}${application.folder}/${Config.index}`}>
                        View app<i class="fa fa-eye ml-2"></i>
                    </a>
                    <a class="btn btn-dark mb-2"
                      href={`${Config.repoRootUrl}/${Config.folderRoot}${Config.prefix}${application.folder}`}
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