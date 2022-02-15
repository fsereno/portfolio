"use strict;"

import React from 'react';
import { PuzzleModalComponent } from '../../js/modules/react/puzzleModalComponent.js';
import { SpinnerComponent } from '../../js/modules/react/spinnerComponent.js'
import { ErrorModalComponent } from '../../js/modules/react/errorModalComponent.js';
import CoffeeMakerComponent from './coffeeMakerComponent';

const PUZZLE = "3 + 1 + 1 =";
export default class CoffeeMakerApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSpinner: false,
      showPuzzleModal: true,
      showErrorModal: false,
      isPuzzleValid: false
    };
    this.handleIsPuzzleValid = this.handleIsPuzzleValid.bind(this);
    this.handlePuzzleModalClose = this.handlePuzzleModalClose.bind(this);
    this.handlePuzzleModalShow = this.handlePuzzleModalShow.bind(this);
    this.handleErrorModalClose = this.handleErrorModalClose.bind(this);
    this.handleBeforeAjax = this.handleBeforeAjax.bind(this);
    this.handleFailedAjax = this.handleFailedAjax.bind(this);
    this.setShowSpinner = this.setShowSpinner.bind(this);
  }

  setShowSpinner(value) {
    this.setState({
      showSpinner: value
    })
  }

  handleBeforeAjax() {
    this.setState({
      showSpinner: true,
      showPuzzleModal: false
    });
  }

  handleFailedAjax() {
    this.setState({
      showErrorModal: true,
      showSpinner: false
    });
  }

  handleIsPuzzleValid() {
    this.setState({
      isPuzzleValid: true,
      showPuzzleModal: false
    })
  }

  handlePuzzleModalClose() {
    this.setState({
      showPuzzleModal: false
    })
  }

  handlePuzzleModalShow() {
    this.setState({
      showPuzzleModal: true
    })
  }

  handleErrorModalClose() {
    this.setState({
      showErrorModal: false
    })
  }

  render() {
    return (
      <div>
        <ErrorModalComponent
          id="errorModal"
          show={this.state.showErrorModal}
          handleClose={this.handleErrorModalClose}
        />
        <SpinnerComponent
          show={this.state.showSpinner}
        />
        <PuzzleModalComponent
          answer={5}
          puzzle={PUZZLE}
          show={this.state.showPuzzleModal}
          handleClose={this.handlePuzzleModalClose}
          handleShow={this.handlePuzzleModalShow}
          handleIsValid={this.handleIsPuzzleValid}
        />
        <CoffeeMakerComponent
          isPuzzleValid={this.state.isPuzzleValid}
          handleBeforeAjax={this.handleBeforeAjax}
          handleFailedAjax={this.handleFailedAjax}
          handlePuzzleModalShow={this.handlePuzzleModalShow}
          setShowSpinner={this.setShowSpinner}
        />
      </div>
    );
  }
}