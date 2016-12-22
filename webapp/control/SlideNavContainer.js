/*globals sap*/
/*jslint nomen:true*/

sap.ui.define([
	"jquery.sap.global",
	"sap/m/NavContainer"
], function ($, NavContainer) {
	
	"use strict";

	return NavContainer.extend("utegration.fiori.frontend.control.SlideNavContainer", {
        metadata: {
        	events: {
        		"nextSlide": {},
        		"prevSlide": {}
        	}
        },
        init: function () {
        	NavContainer.prototype.init.apply(this, arguments);
        	$.sap.bindAnyEvent(this.handleKeyboardArrow.bind(this));
        },
        handleKeyboardArrow: function (oEvent) {
        	if (oEvent.type === "keydown") {
        		// next slide
	    		if (oEvent.keyCode === 39){ this.fireNextSlide(); }
	    		// previous slide
	    		if (oEvent.keyCode === 37){ this.firePrevSlide(); }
	    	}
        },
        renderer: "sap.m.NavContainerRenderer"
    });
});
