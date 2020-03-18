"use strict;"

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
      if (this.name.length > 0) {
        this.items.push(this.name);
        this.name = "";
      }
    }
  }
});