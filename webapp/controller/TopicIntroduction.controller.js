sap.ui.define([
	"jquery.sap.global",
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/ComponentContainer"
], function($, Controller, ComponentContainer) {
	
	"use strict";
	
	var CustomController = Controller.extend("utegration.fiori.frontend.controller.TopicIntroduction");

	CustomController.prototype.onInit = function () {
		// Create component
    	sap.ui.component({
            name: "utegration.fiori.frontend.component.introduction",
            manifestFirst: true,
            async: true
        }).then(function (oComponent) {
            this.getView().byId("utg-fiori-tileComponentContainer").addContent(
                new ComponentContainer({
                    height: "100%",
                    width: "100%",
                    component: oComponent
                })
            );
        }.bind(this));
        
        // global variables
    	this._coreEventBus = sap.ui.getCore().getEventBus();
        // Startup functions
        this._subscribeEvents();
    };
    
    /*------------------------------------------------------ Events -----------------------------------------------------*/
    
    CustomController.prototype._subscribeEvents = function () {
        this._coreEventBus.subscribe("launchpad", "backToLaunchpad", this._goToLaunchpad, this);
    };
    
    CustomController.prototype._goToLaunchpad = function () {
        this.getOwnerComponent().getRouter().navTo("launchpad");
    };

    return CustomController;

});