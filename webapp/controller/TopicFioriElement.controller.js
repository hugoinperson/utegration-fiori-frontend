sap.ui.define([
	"jquery.sap.global",
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/ComponentContainer"
], function($, Controller, ComponentContainer) {
	
	"use strict";
	
	var CustomController = Controller.extend("utegration.fiori.frontend.controller.TopicFioriElement");

	CustomController.prototype.onInit = function () {
		// Create component
    	sap.ui.component({
            name: "utegration.fiori.frontend.component.fioriElement",
            manifestFirst: true,
            async: true
        }).then(function (oComponent) {
            this.getView().byId("utg-fiori-tileComponentContainer").addContent(
                sap.ushell.Container.createRenderer()
            );
        }.bind(this));
        
        // global variables
    	this._coreEventBus = sap.ui.getCore().getEventBus();
    	this._compRouter = this.getOwnerComponent().getRouter();
    	this._globalToolbar = null;
    };
    
    CustomController.prototype.onAfterRendering = function () {
    	this._subscribeEvents();
    	this._globalToolbar = this.getView().getParent().getParent().getParent().getController()._toolbar;
    };
    
    /*------------------------------------------------------ Events -----------------------------------------------------*/
    
    CustomController.prototype._subscribeEvents = function () {
        this._coreEventBus.subscribe("launchpad", "backToLaunchpad", this._goToLaunchpad, this);
        this._compRouter.getRoute("topic-fioriElement").attachMatched(this._onRefresh, this);
    };
    
    CustomController.prototype._goToLaunchpad = function () {
        this._compRouter.navTo("launchpad");
    };

	CustomController.prototype._onRefresh = function (oEvent) {
    	this._globalToolbar.removeStyleClass("lauchpadMode");
    };
    
    return CustomController;

});