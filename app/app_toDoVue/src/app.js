"use strict;"

import '../../sass/includes/styleDeps.scss';
import '../sass/styles.scss';


import Vue from 'vue';

new Vue({
  el: '#result',
  data: {
    name: "",
    counter: 0,
    counterLimit: 10,
    items: [],
  },
  methods: {
    addItem: function() {
      if (this.name.length > 0 && this.counter < this.counterLimit) {
        this.items.push(this.name);
        this.name = "";
        this.counter = this.counter + 1;
      }
    },
    deleteItem: function(event) {
      let index = Number(event.target.dataset.index);
      this.items.splice(index, 1);
      this.counter = this.counter - 1;
    }
  }
});