"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import Config from  '../../../config.json';
import { SpinnerModule } from '../../js/spinnerModule.js'

const FAUX_LOADING_TIME = 1000;
let _spinnerModule = SpinnerModule({ contentId : "contentContainer" });

class HomeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applications: [],
      applicationsImmutable: [],
      hasApplications: false
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.renderHandler = this.renderHandler.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  filterApplications(applications, searchTerm) {
    let filteredApplications = applications.filter((application) => {
        return application.active && application.include ? 
        application.name.toUpperCase().includes(searchTerm)
        || application.subHeading.toUpperCase().includes(searchTerm)
        || application.description.toUpperCase().includes(searchTerm)
        || application.searchTerms.toUpperCase().includes(searchTerm)
        : [];
      });
    return filteredApplications;
  }

  handleSearchChange(event) {
    let searchTerm = event.target.value.toUpperCase();
    let filteredApplications = this.filterApplications(this.state.applicationsImmutable, searchTerm);
    this.setState({
      applications: filteredApplications
    });
  }

  getConfigHandler() {
    setTimeout(() => {
      this.setState({
        applications: Config.applications,
        applicationsImmutable: Config.applications,
        hasApplications: true
      });
    }, FAUX_LOADING_TIME)
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
            <input type="text" class="form-control" placeholder="Search all available applications..." id="searchInput" onChange={this.handleSearchChange} />
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
  <HomeApp />,
  document.getElementById('result')
);