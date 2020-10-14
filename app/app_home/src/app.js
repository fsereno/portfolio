"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import Config from  '../../../config.json';
import { SpinnerModule } from '../../js/spinnerModule.js';
import { StringSearchModule } from '../../typeScript/Modules/stringSearchModule/app.js';

const FAUX_LOADING_TIME = 1000;
let _spinnerModule = SpinnerModule({ contentId : "contentContainer" });
let _stringSearchModule = new StringSearchModule();

class HomeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applications: [],
      applicationsImmutable: [],
      hasApplications: false,
      searchTerm: ""
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleQuickFilter = this.handleQuickFilter.bind(this);
    this.renderHandler = this.renderHandler.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  filterApplications(applications, searchTerm) {
    let filteredApplications = applications.filter((application) => {
      let criterions = [
        application.name,
        application.subHeading,
        application.description,
        application.searchTerms
      ]
      let result = application.active && application.include
        ? _stringSearchModule.searchCriterions(criterions, searchTerm)
        : false
      return result;
    });
    return filteredApplications;
  }

  handleSearch(searchTerm){
    let filteredApplications = this.filterApplications(this.state.applicationsImmutable, searchTerm);
    this.setState({
      applications: filteredApplications
    });
  }

  handleSearchChange(event) {
    let searchTerm = event.target.value;
    this.handleSearch(searchTerm);
  }

  handleQuickFilter(event) {
    let searchTerm = event.target.value;
    let element = document.getElementById("searchInput");
    element.value = searchTerm;
    this.handleSearch(searchTerm);
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
          <div id="searchBar" class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-search"></i>
              </span>
            </div>
            <input type="text" class="form-control" placeholder="Search applications..." id="searchInput" onChange={this.handleSearchChange}/>
            <div class="input-group-append">
              <button class="btn btn-dark" type="button" data-toggle="collapse" data-target="#filterContainer" aria-expanded="false" aria-controls="filterContainer">
                <i class="fa fa-filter"></i>
              </button>
            </div>
          </div>
          <div class="collapse" id="filterContainer">
            <div class="pb-3">
              <label class="d-flex flex-row justify-content-center">Quick search</label>
              <div class="btn-group d-flex flex-row justify-content-center">
                <button type="button" class="btn btn-outline-dark" value="React" onClick={this.handleQuickFilter}>React</button>
                <button type="button" class="btn btn-outline-dark" value="TypeScript" onClick={this.handleQuickFilter}>TypeScript</button>
                <button type="button" class="btn btn-outline-dark" value=".Net Core" onClick={this.handleQuickFilter}>.Net Core</button>
              </div>
            </div>
          </div>
        </form>
          <div id="applicationsContainer" class="card-columns">
            {this.state.applications.map((application) => {
              if (application.active && application.include) {
                return (
                  <div class="card p-3 bg-white min-height-160">
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