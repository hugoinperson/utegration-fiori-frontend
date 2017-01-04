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
        	// global variables
        	this._currentBackground = null;
        	this._sComponentName = null;
        	this._sCurrentComponent = null;
        	this._coreEventBus = sap.ui.getCore().getEventBus();
        	this._bHasBindKeyboardEvent = true;
        	
        	NavContainer.prototype.init.apply(this, arguments);
        	$.sap.bindAnyEvent(this.handleKeyboardArrow.bind(this));
        	this._coreEventBus.subscribe("app", "keepCurrentComponentActive", this.keepCurrentComponentActive, this);
        },
        onBeforeRendering: function () {
        	this._sComponentName = this.data("component");
        	this._sCurrentComponent = this.data("component");
        },
        onAfterRendering: function () {
        	this.addStyleClass("utg-fiori-slideContainer");
        	this.addStyleClass("utg-fiori-slideContainerBackground-" + this.getCurrentPage().getBackground());
        	this._currentBackground = this.getCurrentPage().getBackground();
        },
        keepCurrentComponentActive: function (sChannel, sEvent, oPayload) {
        	this._sCurrentComponent = oPayload.sComponentName;
	    },
        handleKeyboardArrow: function (oEvent) {
        	if (oEvent.type === "keydown" && this._sComponentName === this._sCurrentComponent) {
        		var pages = this.getPages(),
        			targetIndex = null,
        			targetPage = null,
    				currentPage = this.getCurrentPage(),
    				currentIndex = pages.indexOf(currentPage),
    				currentSlideView = this.getCurrentPage().getAggregation("slideView"),
    				currentSlideController = currentSlideView.getController();
        		
        		// next slide
	    		if (oEvent.keyCode === 39){
	    			if (currentSlideController._nextAnimateObjIndex === currentSlideController._animateObjs.length) {
	    				// there's no animation to perform on this slide
	    				targetIndex = currentIndex + 1;
		    			targetPage = pages[targetIndex];
		    			
		    			if (targetPage && targetIndex >= 0) {
		    				this.fireNextSlide();
		    			}
	    			} else {
	    				// there are still animations to perform
	    				currentSlideView.fireEvent("performAnimation");
	    			}
	    		}
	    		
	    		// previous slide
	    		if (oEvent.keyCode === 37){ 
	    			if (currentSlideController._nextAnimateObjIndex === 0) {
	    				// there's no animation to perform on this slide
	    				targetIndex = currentIndex - 1;
		    			targetPage = pages[targetIndex];
	
						if (targetPage && targetIndex >= 0) {
		    				this.firePrevSlide(); 
		    			}
	    			} else {
	    				// there are still animations to rollback
	    				currentSlideView.fireEvent("rollbackAnimation");
	    			}
	    		}
	    		
	    		// previous animation
	    		if (oEvent.keyCode === 38){ 
	    			currentSlideView.fireEvent("rollbackAnimation");
	    		}

	    		// next slide
	    		if (oEvent.keyCode === 40){
	    			currentSlideView.fireEvent("performAnimation");
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