sap.ui.define([
	"jquery.sap.global",
    "utegration/fiori/frontend/model/SlideMainController"
], function($, SlideMainController) {
	
	"use strict";
	
	var CustomController = SlideMainController.extend("utegration.fiori.frontend.component.launchpad.controller.Main");

	CustomController.prototype.onInit = function () {
		SlideMainController.prototype.onInit.apply(this, arguments);
    };

    CustomController.prototype.onBeforeRendering = function () {
    	SlideMainController.prototype.onBeforeRendering.apply(this, arguments);
    };
    
    CustomController.prototype.onAfterRendering = function () {
    	SlideMainController.prototype.onAfterRendering.apply(this, arguments);
    };
    
    CustomController.prototype.onExit = function () {
        SlideMainController.prototype.onExit.apply(this, arguments);
    };

    return CustomController;

});