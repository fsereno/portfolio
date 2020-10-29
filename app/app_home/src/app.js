"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, MeshMatcapMaterial, MeshLambertMaterial, PointLight, Mesh, PCFSoftShadowMap, TextureLoader } from 'three';
import Config from  '../../../config.json';
import { SpinnerModule } from '../../js/spinnerModule.js';
import { StringSearchModule } from '../../typeScript/Modules/stringSearchModule/app.js';

const FAUX_LOADING_TIME = 500;
const SEARCH_INPUT_ID = "searchInput";
const MAIN_CONTAINER_ID = "mainContainer";
const CONTENT_CONTAINER_ID = "contentContainer";
const APPLICATION = Config.applications.filter(x => x.isLandingPage)[0];
let _stringSearchModule = new StringSearchModule();

const ThreeModule = function(containerId) {

  let _containerId;
  let _container;
  let _scene;
  let _camera;
  let _renderer;
  let _meshGeometry;
  let _texture;
  let _meshMaterial;
  let _mesh;
  let _loader;

  let setCameraPosition = () => {
    _camera.position.x = 1;
    _camera.position.y = 1.1;
    _camera.position.z = 5;
  }

  let setRenderer = () => {
    let container = document.getElementById(_containerId);
    _renderer.setSize( container.offsetWidth, container.offsetHeight );
    _renderer.shadowMap.enabled = true;
    _renderer.shadowMap.type = PCFSoftShadowMap;
    container.appendChild( _renderer.domElement );
  }

  let setResizeEventHandler = () => {
    window.addEventListener("resize", () => {
      let container = document.getElementById(_containerId);
      _renderer.setSize(container.offsetWidth, container.offsetHeight);
      _camera.aspect = container.offsetWidth / container.offsetHeight;
      _camera.updateProjectionMatrix();
    });
  }

  let addCube = () => {
    _mesh.position.x = 1;
    _mesh.position.y = 1
    _mesh.position.z = 1
    _scene.add(_mesh);
  }

  let addLight = (color = 0xFFFFFF, intensity = 1, distance = 1000, x = 0, y = 0, z = 0) => {
    var light = new PointLight(color, intensity, distance);
    light.position.set(x, y, z);
    _scene.add( light );
  }

  let setAnimationLoop = () => {
    _renderer.setAnimationLoop( function() {
      let time = 0.025;
      _mesh.rotation.x += time * 0.5;
      _mesh.rotation.y += time * 0.5;
      _renderer.render( _scene, _camera );
    });
  }

  let isWebGLAvailable = () => {

    try {

		  var canvas = document.createElement( 'canvas' );
			return !! ( window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ) );

		} catch ( e ) {

			return false;

		}

  }

  let isWebGL2Available = () => {

		try {

			var canvas = document.createElement( 'canvas' );
			return !! ( window.WebGL2RenderingContext && canvas.getContext( 'webgl2' ) );

		} catch ( e ) {

			return false;

		}

  }

  let init = () => {

    _containerId = containerId;
    _container = document.getElementById(_containerId);
    _scene = new Scene();
    _camera = new PerspectiveCamera( 75, _container.offsetWidth / _container.offsetWidth, 0.1, 1000 );
    _renderer = new WebGLRenderer({antialias: true, alpha: true});
    _meshGeometry = new BoxGeometry(3, 3, 3);
    /*_loader = new TextureLoader();
    _loader.load("images/FSLogo.png", (texture) => {
      _texture = texture;
      _texture.anisotropy = _renderer.capabilities.getMaxAnisotropy();
      _meshMaterial = new MeshLambertMaterial({ map: _texture });
      _mesh = new Mesh( _meshGeometry, _meshMaterial );
    }, undefined, (error) => { alert(error) });*/
    
    _texture = new TextureLoader().load("images/FSLogo.png");
    _texture.anisotropy = _renderer.capabilities.getMaxAnisotropy();
    _meshMaterial = new MeshLambertMaterial({ map: _texture });
    _mesh = new Mesh( _meshGeometry, _meshMaterial );
    

    setCameraPosition();
    setRenderer();
    setResizeEventHandler();
    addCube();
    addLight(0xFFFFFF, 2);
    addLight(0xFFFFFF, 1, 1000, 0, 0, 25);
    setAnimationLoop();
  }

  return {
    init: init,
    isWebGLAvailable: isWebGLAvailable,
    isWebGL2Available: isWebGL2Available,

  }
};

let _threeJSModule = ThreeModule("canvasContainer");
const IS_BROWSER_VALID = _threeJSModule.isWebGL2Available() || _threeJSModule.isWebGLAvailable();

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
        applications: Config.applications,
        applicationsImmutable: Config.applications,
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

  renderIntroMedia(props) {
    if (props.isBrowserValid) {
      return <div id="canvasContainer"></div>
    }
    return <img src="images/FSLogo.png" alt="Logo" />
  }

  renderIntroContainer(props) {
    let fadeClass = this.getElementFadeClass(props.fadeIn);
    return (
      <div class="bg-dark" id="introContainer">
        <div id="introContent" class={fadeClass}>
          <div class="text-center element">
            <this.renderIntroMedia isBrowserValid={IS_BROWSER_VALID}/>
          </div>
          <div class="text-center element">
            <h1 class="display-4 mb-0">{Config.author}</h1>
          </div>
          <div class="text-center element">
          <h4 class="display-4 sub-heading lead">{Config.role}</h4>
          </div>
          <div class="text-center element mt-5">
            <button type="button" class="btn btn-white btn-lg" onClick={this.handleScrollBtnClick}>View Portfolio</button>
          </div>
        </div>
      </div>
    );
  }

  renderContenContainer() {
    let fadeClass = this.getElementFadeClass(this.state.hasApplications);
    return (
      <div class={`${fadeClass} container-fluid pt-4 mt-5`} id="contentContainer">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="display-4">{APPLICATION.name}</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h5>{APPLICATION.subHeading}</h5>
            <p class="text-muted">{APPLICATION.description}</p>
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
    );
  }

  componentDidMount() {
    this.delayAppRender();
    if (IS_BROWSER_VALID) {
      _threeJSModule.init();
    }
  }

  render() {
    return (
      <div>
        <SpinnerModule
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