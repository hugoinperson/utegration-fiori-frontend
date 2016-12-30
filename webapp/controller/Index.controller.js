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
    	this._compRouter = this.getOwnerComponent().getRouter();
    	this._coreEventBus = sap.ui.getCore().getEventBus();
    	// Startup functions
        this._subscribeEvents();
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
    
    /*------------------------------------------------------ Events -----------------------------------------------------*/
    
    CustomController.prototype._subscribeEvents = function () {
        this._compRouter.getRoute("launchpad").attachMatched(this._onLaunchpad, this);
    };
    
    CustomController.prototype._onLaunchpad = function (oEvent) {
    	this._toolbar.addStyleClass("lauchpadMode");
    };
    
    /*-------------------------------------------------- UI Interaction -------------------------------------------------*/
    
    CustomController.prototype.onHomePress = function (oEvent) {
    	// Launchpad page will subscribe this event
    	this._coreEventBus.publish("launchpad", "onHomePress", {});
    	// Other pages will subscribe to this event
    	this._coreEventBus.publish("launchpad", "backToLaunchpad", {});
    };
    
    CustomController.prototype.onUserAvatarPress = function (oEvent) {
    	setTimeout(function(){
			// Launchpad page will subscribe this event
    		this._coreEventBus.publish("launchpad", "onUserAvatarPress", {});
		}.bind(this), 0);
    	// Other pages will subscribe to this event
    	this._coreEventBus.publish("launchpad", "backToLaunchpad", {});
    };
    
    CustomController.prototype.onNotiCenterPress = function (oEvent) {
    	setTimeout(function(){
			// Launchpad page will subscribe this event
	    	this._coreEventBus.publish("launchpad", "onNotiCenterPress", {});
		}.bind(this), 0);
    	
    	// Other pages will subscribe to this event
    	this._coreEventBus.publish("launchpad", "backToLaunchpad", {});
    };

    return CustomController;

});