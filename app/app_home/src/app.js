"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { SpinnerModule } from '../../js/spinnerModule.js'

let _spinnerModule = SpinnerModule("contentContainer");

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applications: [],
      applicationsImmutable: [],
      config: {},
      hasApplications: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderHandler = this.renderHandler.bind(this);
    this.renderContent = this.renderContent.bind(this);
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

  handleAjax(request) {
      $.ajax(request);
  }

  getConfigHandler() {
    let request = {
      url: "../../config.json",
      type: "GET",
      contentType: 'application/json;',
      success: (response) => {
        setTimeout(() => { 
          this.setState({
            applications: response.applications,
            applicationsImmutable: response.applications,
            config: response,
            hasApplications: true
          });
        }, 1500)
      }
    }
    this.handleAjax(request);
  }

  renderHandler() {
    if (this.state.hasApplications) {
      return(
        <this.renderContent/>
      )
    }
    return(
      <_spinnerModule.Render/>
    )
  }

  renderContent() {
    return (
      <div id="contentContainer">
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
                      href={`${this.state.config.prefix}${application.folder}/${this.state.config.index}`}>
                        View app<i class="fa fa-eye ml-2"></i>
                    </a>
                    <a class="btn btn-dark mb-2"
                      href={`${this.state.config.repoRootUrl}/${this.state.config.folderRoot}${this.state.config.prefix}${application.folder}`}
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
    )
  }

  componentDidMount() {
    this.getConfigHandler();
  }

  render() {
    return (
      this.renderHandler()
    );
  }
}

ReactDOM.render(
  <Home />,
  document.getElementById('result')
);