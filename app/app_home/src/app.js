"use strict;"

import "regenerator-runtime/runtime";

import React from 'react';
import ReactDOM from 'react-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { SpinnerComponent } from '../../js/modules/react/spinnerComponent.js';
import { StringSearchUtil } from '../../typeScript/Utils/stringSearchUtil/dist/index';
import { WebGLCheckerUtil } from "../../js/modules/utils/webGLCheckerUtil";
import { HomeThreeModule } from "./homeThreeModule.js";
import { ConfigUtil } from "../../js/modules/utils/configUtil";
import { ApplicationSortUtil } from "../../typeScript/Utils/applicationsSortUtil/dist/Utils/applicationsSortUtil/index";

const FAUX_LOADING_TIME = 500;
const NAVBAR_SCROLL_DOWN_CLASS = "scroll-down";
const SEARCH_INPUT_ID = "searchInput";
const MAIN_CONTAINER_ID = "mainContainer";
const NAV_ID = "navBar";
const CONTENT_CONTAINER_ID = "contentContainer";
const IS_BROWSER_VALID = WebGLCheckerUtil.isWebGL2Available() || WebGLCheckerUtil.isWebGLAvailable();
const CONFIG = ConfigUtil.get();
const APP_CONFIG = ConfigUtil.get("home");

CONFIG.applications.sort(ApplicationSortUtil.sorter);

class HomeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applications: [],
      applicationsImmutable: [],
      hasApplications: false,
      showClear: false,
      showIntro: false,
      showSpinner: true,
      isBrowserValid: true
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleQuickFilter = this.handleQuickFilter.bind(this);
    this.handleClearSearch = this.handleClearSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleScrollBtnClick = this.handleScrollBtnClick.bind(this);
    this.handleNavBarScrollClass = this.handleNavBarScrollClass.bind(this);
    this.RenderClearBtn = this.RenderClearBtn.bind(this);
    this.RenderIntroContainer = this.RenderIntroContainer.bind(this);
    this.RenderContenContainer = this.RenderContenContainer.bind(this);
    this.RenderCardContainer = this.RenderCardContainer.bind(this);
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
        ? StringSearchUtil.searchCriterions(criterions, searchTerm)
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
    if (StringSearchUtil.searchDoesNotExist(existingValue, searchTerm)) {
      let combinedSearch = StringSearchUtil.combineSearchTerms(existingValue, searchTerm);
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

  addNavBarScrollDownClass(condition = true) {
    let navbar = document.getElementById(NAV_ID);
    if ( condition ) {
      navbar.classList.remove(NAVBAR_SCROLL_DOWN_CLASS);
    } else {
      navbar.classList.add(NAVBAR_SCROLL_DOWN_CLASS);
    }
  }

  isScrollYAtZero() {
    return window.scrollY === 0;
  }

  handleNavBarScrollClass() {
    this.addNavBarScrollDownClass(this.isScrollYAtZero());
  }

  addNavbarTransScrollEventListener() {
    this.addNavBarScrollDownClass();
    window.addEventListener("scroll", this.handleNavBarScrollClass);
  }

  handleScrollBtnClick(event) {
    event.preventDefault();
    let container = document.getElementById(CONTENT_CONTAINER_ID);
    window.scrollTo({top: container.offsetTop - 50,left: 0, behavior: "smooth"});
  }

  handleSubmit(event){
    event.preventDefault();
  }

  delayAppRender() {
    setTimeout(() => {
      this.removeDarkClass();
      this.setState({
        applications: CONFIG.applications,
        applicationsImmutable: CONFIG.applications,
        hasApplications: true,
        showIntro: true,
        showSpinner: false
      });
    }, FAUX_LOADING_TIME);
  }

  removeDarkClass() {
    let mainContainer = document.getElementById(MAIN_CONTAINER_ID);
    mainContainer.classList.remove("bg-dark");
  }

  getElementFadeClass (condition = false) {
    let fadeClass = "fade-element";
    fadeClass = condition ? `${fadeClass} in` : fadeClass;
    return fadeClass;
  }

  RenderClearBtn() {
    if (this.state.showClear) {
      return(
        <div className="input-group-append" id="cancelBtn">
          <button className="btn" type="button" onClick={this.handleClearSearch}>
              <span className="lr">
                  <span className="rl"></span>
              </span>
          </button>
        </div>
      )
    }
    return null;
  }

  RenderIntroContainer(props) {
    let fadeClass = this.getElementFadeClass(props.fadeIn);
    return (
      <div className="bg-dark" id="introContainer">
        <div id="introContent" className={fadeClass}>
          <div id="canvasContainer"></div>
          <div id="introContentInner">
            <div id="introImage" className="text-center element">
              <img className="img-fluid" src="images/FSLogo.png" alt="Logo" />
            </div>
            <div id="introHeadings" className="text-center element">
              <h1 className="display-4 mb-0">{CONFIG.author}</h1>
              <h4 className="display-4 sub-heading lead text-white">{CONFIG.role}</h4>
            </div>
            <div id="btnContainer" className="text-center element pt-2">
              <button type="button" className="btn btn-outline-light" onClick={this.handleScrollBtnClick}>View Portfolio</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  RenderApplicationCards(props) {
    if (props.condition) {
      return (
        <Card className="grid-item" key={`${props.application.name}`}>
          <Card.Body>
            <Card.Title>
              {props.application.name}
            </Card.Title>
            <Card.Text>
              {props.application.subHeading}
            </Card.Text>
            <Card.Link className="btn btn-outline-dark btn-sm card-link" href={`${CONFIG.prefix}${props.application.folder}/index.html`}>View application</Card.Link>
            <Row className="mt-3">
              <Col>
                {props.application.labels ? props.application.labels.map(x => {
                  const label = CONFIG.labels[x];
                  return(
                    <Badge key={x} variant={label.class} className="text-light mr-2">{label.name}</Badge>
                  )
                }) : null }
              </Col>
            </Row>
          </Card.Body>
        </Card>
      );
    } else {
      return null;
    }
  }

  RenderCardContainer(props) {
    if (props.applications.length > 0) {
      return (
        <div className="card-columns">
          {props.applications.map((application, index) => {
            return (<this.RenderApplicationCards
              application={application}
              condition={application.active && application.include}
            />)
          })}
        </div>
      )
    } else {
      return null;
    }
  }

  RenderContenContainer() {
    let fadeClass = this.getElementFadeClass(this.state.hasApplications);
    return (
      <div className={`${fadeClass} container-fluid pt-4 mt-5`} id="contentContainer">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="display-4">{APP_CONFIG.name}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h5>{APP_CONFIG.subHeading}</h5>
            <p className="text-muted">{APP_CONFIG.description}</p>
            <hr/>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div id="searchBar" className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-search"></i>
              </span>
            </div>
            <input type="text" className="form-control" placeholder="Search applications..." id="searchInput" onChange={this.handleSearchChange}/>
            <this.RenderClearBtn/>
            <div className="input-group-append">
              <button id="openFilterBtn" className="btn btn-dark" type="button" data-toggle="collapse" data-target="#filterContainer" aria-expanded="false" aria-controls="filterContainer">
                <i className="fa fa-filter"></i>
              </button>
            </div>
          </div>
          <div className="collapse" id="filterContainer">
            <div className="pb-3">
              <label className="d-flex flex-row justify-content-center">Quick search</label>
              <div className="btn-group d-flex flex-row justify-content-center">
                <button type="button" className="btn btn-outline-dark flex-grow-0" value="React" onClick={this.handleQuickFilter}>React</button>
                <button type="button" className="btn btn-outline-dark flex-grow-0" value="TypeScript" onClick={this.handleQuickFilter}>TypeScript</button>
                <button type="button" className="btn btn-outline-dark flex-grow-0" value=".NET Core" onClick={this.handleQuickFilter}>.NET Core</button>
              </div>
            </div>
          </div>
        </form>
        <this.RenderCardContainer applications={this.state.applications.filter(x => x.featured)} />
        <this.RenderCardContainer applications={this.state.applications.filter(x => !x.featured)} />
      </div>
    );
  }

  componentDidMount() {
    this.delayAppRender();
    this.addNavbarTransScrollEventListener();
    if (IS_BROWSER_VALID) {
      HomeThreeModule.then((homeThreeModule) => homeThreeModule.init());
    }
  }

  render() {
    return (
      <div>
        <SpinnerComponent
          show={this.state.showSpinner}
        />
        <this.RenderIntroContainer
          fadeIn={this.state.showIntro}
        />
        <this.RenderContenContainer/>
      </div>
    );
  }
}

ReactDOM.render(
  <HomeApp />,
  document.getElementById('result')
);