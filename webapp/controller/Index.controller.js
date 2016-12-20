sap.ui.define([
	"jquery.sap.global",
    "sap/ui/core/mvc/Controller"
], function($, Controller) {
	
	"use strict";
	
	var CustomController = Controller.extend("utegration.fiori.frontend.controller.Index");

	CustomController.prototype.onInit = function () {
    	// global variables
    	this._hostPage = this.getView().byId("utg-fiori-hostPage");
    	this._toolbar = this.getView().byId("utg-fiori-toolbar");
    	this._coreEventBus = sap.ui.getCore().getEventBus();
    	// static variables
    	this.SLIDE_ID = "utg-slide-";
    };

    CustomController.prototype.onBeforeRendering = function () {
    };
    
    CustomController.prototype.onAfterRendering = function () {
    	var that = this;
    	
    	this._hostPage.getHeaderContent()[0].getParent().attachBrowserEvent("mouseenter", function (oEvent) {
    		that._toolbar.addStyleClass("show");
    	});
    	
    	this._hostPage.getHeaderContent()[0].getParent().attachBrowserEvent("mouseleave", function (oEvent) {
    		that._toolbar.removeStyleClass("show");
    	});
    };
    
    /*-------------------------------------------------- UI Interaction -------------------------------------------------*/
    
    CustomController.prototype.onHomePress = function (oEvent) {
    	this._coreEventBus.publish("launchpad", "onHomePress", {});
    };
    
    CustomController.prototype.onUserAvatarPress = function (oEvent) {
    	this._coreEventBus.publish("launchpad", "onUserAvatarPress", {});
    };
    
    CustomController.prototype.onNotiCenterPress = function (oEvent) {
    	this._coreEventBus.publish("launchpad", "onNotiCenterPress", {});
    };

    return CustomController;

});