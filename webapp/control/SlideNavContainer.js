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
	    			}
	    		}
	    		
	    		// previous slide
	    		if (oEvent.keyCode === 37){ 
	    			targetIndex = currentIndex - 1;
	    			targetPage = pages[targetIndex];

					if (targetPage && targetIndex >= 0) {
	    				this.firePrevSlide(); 
	    			}
	    		}
	    		
	    		// previous animation
	    		if (oEvent.keyCode === 38){ 
	    			this.getCurrentPage().getAggregation("slideView").fireEvent("rollbackAnimation");
	    		}

	    		// next slide
	    		if (oEvent.keyCode === 40){
	    			this.getCurrentPage().getAggregation("slideView").fireEvent("performAnimation");
	    		}
	    	}
        },
        _afterTransitionCallback: function () {
        	if (NavContainer.prototype._afterTransitionCallback) {
        		NavContainer.prototype._afterTransitionCallback.apply(this, arguments);
        		this._updateStyleForNewSlide();
        	}
        },
        _updateStyleForNewSlide: function () {
        	this.removeStyleClass("utg-fiori-slideContainerBackground-" + this._currentBackground);
        	this.addStyleClass("utg-fiori-slideContainerBackground-" + this.getCurrentPage().getBackground());
        	this._currentBackground = this.getCurrentPage().getBackground();
        },
        renderer: "sap.m.NavContainerRenderer"
    });
});