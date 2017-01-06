sap.ui.define([
	"jquery.sap.global",
	"sap/ui/model/json/JSONModel",
	"../../model/Formatter",
    "utegration/fiori/frontend/model/SlideController"
], function($, JSONModel, Formatter, SlideController) {
	
	"use strict";
	
	var CustomController = SlideController.extend("utegration.fiori.frontend.component.principles.controller.slides.Slide-08");

	CustomController.prototype.onInit = function () {
		SlideController.prototype.onInit.apply(this, arguments);
		var oModel = new JSONModel($.sap.getModulePath("utegration.fiori.frontend.component.principles.mockdata", "/products.json"));
		this.getView().setModel(oModel);
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
    
    CustomController.prototype.formatWeightState = Formatter.weightState;

    return CustomController;
});