sap.ui.define([
	"jquery.sap.global",
    "sap/ui/core/mvc/Controller"
], function($, Controller) {
	
	"use strict";
	
	var CustomController = Controller.extend("utegration.fiori.frontend.controller.Launchpad");

	CustomController.prototype.onInit = function () {
    	// global variables
    	this.hostPage = this.getView().byId("utg-fiori-hostPage");
    	this.shell = this.getView().byId("utg-fiori-shell");
    	// static variables
    	this.slideId = "utg-slide-";
    };

    CustomController.prototype.onBeforeRendering = function () {
    };
    
    CustomController.prototype.onAfterRendering = function () {
    	var that = this;
    	
    	this.hostPage.getHeaderContent()[0].getParent().attachBrowserEvent("mouseenter", function (oEvent) {
    		that.shell.addStyleClass("show");
    	});
    	
    	this.hostPage.getHeaderContent()[0].getParent().attachBrowserEvent("mouseleave", function (oEvent) {
    		that.shell.removeStyleClass("show");
    	});
    };
    
    

    return CustomController;

});