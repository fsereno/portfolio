define(function() {
    AFRAME.registerComponent("color-change", {
        init: function(){
            this.el.addEventListener("click", function(){
            var randomColour = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            this.setAttribute("color", randomColour);
            });
        }
    });
});