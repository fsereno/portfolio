"use strict;"

import {  TechLabelNames } from "../../Types/techLabelNames";
import {  LabelCssClasses } from "../../Types/LabelCssClasses";

export class TechLabel {
    constructor( id:number ) {
      this.id = id;
      switch(id) {
        case 0:
          this.name = "JavaScript";
          this.class = "warning";
          break;
        case 1:
          this.name = "C#";
          this.class = "info";
          break;
        case 2:
          this.name = "Cloud";
          this.class = "danger";
          break;
      }
    }

    id: number;
    name: TechLabelNames;
    class: LabelCssClasses;
  }