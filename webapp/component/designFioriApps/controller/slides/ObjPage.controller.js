sap.ui.define([
	"jquery.sap.global",
    "utegration/fiori/frontend/model/SlideController",
    "sap/ui/model/json/JSONModel"
], function($, SlideController, JSONModel) {
	
	"use strict";
	
	var CustomController = SlideController.extend("utegration.fiori.frontend.component.designFioriApps.controller.slides.ObjPage");

	CustomController.prototype.onInit = function () {
		SlideController.prototype.onInit.apply(this, arguments);
		
		this.oModel = new JSONModel($.sap.getModulePath("utegration.fiori.frontend.component.designFioriApps.mockdata", "/Products.json"));
		this.getView().setModel(this.oModel);
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

    return CustomController;
});