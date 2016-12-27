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
        	$.sap.includeStyleSheet("control/css/SlideNavContainer.css");
        },
        onBeforeRendering: function () {
        },
        onAfterRendering: function () {
        	this.addStyleClass("utg-fiori-slideContainer");
        	this.addStyleClass("utg-fiori-slideContainerBackground-" + this.getCurrentPage().getBackground());
        	this._currentBackground = this.getCurrentPage().getBackground();
        },
        handleKeyboardArrow: function (oEvent) {
        	if (oEvent.type === "keydown") {
        		var pages = this.getPages(),
        			targetIndex = null,
        			targetPage = null,
    				currentPage = this.getCurrentPage(),
    				currentIndex = pages.indexOf(currentPage);
        		
        		// next slide
	    		if (oEvent.keyCode === 39){
	    			targetIndex = currentIndex + 1;
	    			targetPage = pages[targetIndex];
	    			
	    			if (targetPage && targetIndex >= 0) {
	    				this.fireNextSlide();
	    				this.updateStyleForNewSlide(targetIndex);
	    			}
	    		}
	    		
	    		// previous slide
	    		if (oEvent.keyCode === 37){ 
	    			targetIndex = currentIndex - 1;
	    			targetPage = pages[targetIndex];

					if (targetPage && targetIndex >= 0) {
	    				this.firePrevSlide(); 
	    				this.updateStyleForNewSlide(targetIndex);
	    			}
	    		}
	    	}
        },
        updateStyleForNewSlide: function (targetIndex) {
        	var newPage = this.getPages()[targetIndex];
        	
        	this.removeStyleClass("utg-fiori-slideContainerBackground-" + this._currentBackground);
        	this.addStyleClass("utg-fiori-slideContainerBackground-" + newPage.getBackground());
        	this._currentBackground = newPage.getBackground();
        },
        renderer: "sap.m.NavContainerRenderer"
    });
});