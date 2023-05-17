"use strict;"

import React from 'react';
import { KeyGeneratorUtil } from '../../typeScript/Utils/keyGeneratorUtil/dist/index';

export default class CoffeeMakerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.renderProcessHeading = this.renderProcessHeading.bind(this);
  }

  renderProcessHeading() {
    if (this.props.log.length > 0) {
      return <h3 className="mb-4">Log of tasks carried out</h3>
    }
    return null;
  }

  render() {
    return (
      <>
        <div className="row mb-3">
          <div className="col-lg-6">
            <button id="runSync" type="button" className="btn btn-dark mr-2" onClick={this.props.handleRun}>Run Sync</button>
            <button id="runAsync" type="button" className="btn btn-dark mr-2" onClick={this.props.handleRunAsync}>Run Async</button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <p className="text-muted">
              (Processing is delayed for this demonstration)
            </p>
          <this.renderProcessHeading/>
            <ul id="resultOutput" className="list-group">
              {this.props.log.map((item, index) => {
                let key = KeyGeneratorUtil.generate(item.detail);
                return (
                  <li key={key} className="list-group-item d-flex align-items-center">
                      <span className="badge badge-primary badge-pill mr-3 bg-dark">{index+1}</span>
                      {item.detail}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}