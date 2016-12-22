sap.ui.define([
	"jquery.sap.global",
    "sap/ui/core/mvc/Controller"
], function($, Controller) {
	
	"use strict";
	
	var CustomController = Controller.extend("utegration.fiori.frontend.component.introduction.controller.Main");

	CustomController.prototype.onInit = function () {
		this._slideNavContainer = this.getView().byId("utg-fiori-SlidePagesNavContainer");
    };

    CustomController.prototype.onBeforeRendering = function () {
    };
    
    CustomController.prototype.onAfterRendering = function () {
    };
    
    CustomController.prototype.onNextSlide = function () {
    	console.log('nextSlide');	
    };
    
    CustomController.prototype.onPrevSlide = function () {
    	console.log('prevSlide');	
    };

    return CustomController;

});