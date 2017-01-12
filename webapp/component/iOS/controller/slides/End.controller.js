sap.ui.define([
	"jquery.sap.global",
    "utegration/fiori/frontend/model/SlideController"
], function($, SlideController) {
	
	"use strict";
	
	var CustomController = SlideController.extend("utegration.fiori.frontend.component.iOS.controller.slides.End");

	CustomController.prototype.onInit = function () {
		SlideController.prototype.onInit.apply(this, arguments);
		
		// Global variables
		this._coreEventBus = sap.ui.getCore().getEventBus();
    };

    CustomController.prototype.onBeforeRendering = function () {
    	SlideController.prototype.onBeforeRendering.apply(this, arguments);
    };
    
    CustomController.prototype.onAfterRendering = function () {
    	SlideController.prototype.onAfterRendering.apply(this, arguments);
    };
    
    CustomController.prototype.onExit = function () {
        SlideController.prototype.onExit.apply(this, arguments);
    };
    
    CustomController.prototype.onNextTopic = function () {
		this._coreEventBus.publish("app", "navToTopic", {topic: "topic-buildFioriApps"});
	};

    return CustomController;
});