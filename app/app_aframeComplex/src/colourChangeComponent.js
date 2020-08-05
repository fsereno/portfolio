"use strict;"

define(function() {
    AFRAME.registerComponent("color-change", {
        init: function(){
            this.el.addEventListener("mouseenter", function(){
                var colour = `#${Math.floor(Math.random()*16777215).toString(16)}`;
                this.setAttribute("color", colour);
            });
        }
    });
});