"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import Config from  '../../../config.json';
import { SpinnerModule } from '../../js/spinnerModule.js';
import { StringSearchModule } from '../../typeScript/Modules/stringSearchModule/app.js';

const FAUX_LOADING_TIME = 500;
const SEARCH_INPUT_ID = "searchInput";
const MAIN_CONTAINER_ID = "mainContainer";
const CONTENT_CONTAINER_ID = "contentContainer";
const INTRO_CONTAINER_ID = "introContainer";
let _spinnerModule = SpinnerModule();
let _stringSearchModule = new StringSearchModule();

class HomeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applications: [],
      applicationsImmutable: [],
      hasApplications: false,
      showClear: false,
      showIntro: false,
      showSpinner: true
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleQuickFilter = this.handleQuickFilter.bind(this);
    this.handleClearSearch = this.handleClearSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleScrollBtnClick = this.handleScrollBtnClick.bind(this);
    this.renderClearBtn = this.renderClearBtn.bind(this);
    this.renderIntroContainer = this.renderIntroContainer.bind(this);
    this.renderContenContainer = this.renderContenContainer.bind(this);
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

  handleSearch(searchTerm) {
    if (searchTerm.length > 0) {
      let filteredApplications = this.filterApplications(this.state.applicationsImmutable, searchTerm);
      this.setState({
        applications: filteredApplications,
        showClear: true
      });
    } else {
      this.setState({
        applications:this.state.applicationsImmutable,
        showClear: false
      });
    }
  }

  handleSearchChange(event) {
    let searchTerm = event.target.value;
    this.handleSearch(searchTerm);
  }

  handleQuickFilter(event) {
    let searchTerm = event.target.value;
    let element = document.getElementById(SEARCH_INPUT_ID);
    let existingValue = element.value;
    if (_stringSearchModule.searchDoesNotExist(existingValue, searchTerm)) {
      let combinedSearch = _stringSearchModule.combineSearchTerms(existingValue, searchTerm);
      element.value = combinedSearch
      this.handleSearch(combinedSearch);
    }
  }

  handleClearSearch() {
    let element = document.getElementById(SEARCH_INPUT_ID);
    element.value = "";
    this.setState({
      applications: this.state.applicationsImmutable,
      showClear: false
    })
  }

  handleScrollBtnClick(event) {
    let $container = $(`#${CONTENT_CONTAINER_ID}`);
    let $introContainer = $(`#${INTRO_CONTAINER_ID}`);
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: $container.offset().top - 50
    }, 1000, "swing", () => {
      $introContainer.remove();
    });
  }

  handleSubmit(event){
    event.preventDefault();
  }

  delayAppRender() {
    setTimeout(() => {
      this.removeDarkClass();
      this.setState({
        applications: Config.applications,
        applicationsImmutable: Config.applications,
        hasApplications: true,
        showIntro: true,
        showSpinner: false
      });
    }, FAUX_LOADING_TIME);
  }

  removeDarkClass() {
    $(`#${MAIN_CONTAINER_ID}`).removeClass("bg-dark")
  }

  renderClearBtn() {
    if (this.state.showClear) {
      return(
        <div class="input-group-append" id="cancelBtn">
          <button class="btn" type="button" onClick={this.handleClearSearch}>
            <i class="fa fa-times"></i>
          </button>
        </div>
      )
    }
    return null;
  }

  renderIntroContainer(props) {
    let fade = "fade-element";
    fade = props.fadeIn ? `${fade} in` : fade;
    return (
      <div class="bg-dark py-5 mt-5" id="introContainer">
        <div class={fade}>
          <div class="text-center element">
            <img alt="Logo" src="images/FSLogo.png"/>
          </div>
          <div class="text-center element">
            <h1 class="display-4 mb-0">Fabio Sereno Test 2</h1>
          </div>
          <div class="text-center element">
            <h4 class="display-4 sub-heading lead">Software developer</h4>
          </div>
          <div class="text-center element mt-5">
            <button type="button" class="btn btn-white btn-lg" onClick={this.handleScrollBtnClick}>View Portfolio</button>
          </div>
        </div>
      </div>
    );
  }

  renderContenContainer() {
    return (
      <div id="appContainer">
        <div class="container-fluid pt-4 mt-5" id="contentContainer">
          <div class="row">
            <div class="col-lg-12">
              <h2 class="display-4">Portfolio</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <h5>By Fabio Sereno</h5>
              <p class="text-muted">Highly Experienced Full Stack Web Developer of 10+ years (6+ in the FinTech sector). Highly self-motivated, enthusiastic, professional and a team player. Possesses strong analytical and problem solving skills, code proficiency, and an ability to follow through with projects from initiation to completion with innovation and creativity.</p>
              <hr/>
            </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div id="searchBar" class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-search"></i>
                </span>
              </div>
              <input type="text" class="form-control" placeholder="Search applications..." id="searchInput" onChange={this.handleSearchChange}/>
              <this.renderClearBtn/>
              <div class="input-group-append">
                <button id="openFilterBtn" class="btn btn-dark" type="button" data-toggle="collapse" data-target="#filterContainer" aria-expanded="false" aria-controls="filterContainer">
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
                  );
                }
              })}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.delayAppRender();
  }

  render() {
    return (
      <div>
        <_spinnerModule.Render
          show={this.state.showSpinner}
        />
        <this.renderIntroContainer
          fadeIn={this.state.showIntro}
        />
        <this.renderContenContainer/>
      </div>
    );
  }
}

ReactDOM.render(
  <HomeApp />,
  document.getElementById('result')
);