sap.ui.define([
	"jquery.sap.global",
    "sap/ui/core/mvc/Controller"
], function($, Controller) {
	
	"use strict";
	
	var CustomController = Controller.extend("utegration.fiori.frontend.controller.Launchpad");

	CustomController.prototype.onInit = function () {
    	// global variables
    	this.launchpadWrapper = this.getView().byId("utg-fiori-launchpad-wrapper");
    	this.meArea = this.getView().byId("utg-fiori-launchpad-meArea");
    	this.main = this.getView().byId("utg-fiori-launchpad-main");
    	this.notiCenter = this.getView().byId("utg-fiori-launchpad-notiCenter");
    	this._coreEventBus = sap.ui.getCore().getEventBus();
    	// Startup functions
        this._subscribeEvents();
    };

    CustomController.prototype.onBeforeRendering = function () {
    };
    
    CustomController.prototype.onAfterRendering = function () {
    };
    
    /*------------------------------------------------------ Events -----------------------------------------------------*/
    
    CustomController.prototype._subscribeEvents = function () {
        this._coreEventBus.subscribe("launchpad", "onHomePress", this._onHomePress, this);
        this._coreEventBus.subscribe("launchpad", "onUserAvatarPress", this._onUserAvatarPress, this);
        this._coreEventBus.subscribe("launchpad", "onNotiCenterPress", this._onNotiCenterPress, this);
    };
    
    CustomController.prototype._onHomePress = function (oEvent) {
    	var that = this,
    		$launchpadWrapper = $(that.launchpadWrapper.getDomRef());
    	
    	// If Me Area is open
    	if (that.meArea.getVisible()) {
    		$launchpadWrapper.css("overflow-x", "auto");
			$launchpadWrapper.animate({scrollLeft: $launchpadWrapper.width()}, 800, function(){
				that.meArea.setVisible(false);
				$launchpadWrapper.css("overflow-x", "hidden");
			});
    	}
    	
    	// If Notification Center is open
    	if (that.notiCenter.getVisible()) {
    		$launchpadWrapper.css("overflow-x", "auto");
			$launchpadWrapper.animate({scrollLeft: 0}, 800, function(){
				that.notiCenter.setVisible(false);
				$launchpadWrapper.css("overflow-x", "hidden");
			});
    	}
    };
    
    CustomController.prototype._onUserAvatarPress = function (oEvent) {
    	var that = this,
    		$launchpadWrapper = $(that.launchpadWrapper.getDomRef());
    	
    	if (!that.meArea.getVisible()) {
    		$launchpadWrapper.css("overflow-x", "auto");
    		that.meArea.setVisible(true);
    		setTimeout(function(){
    			$launchpadWrapper.scrollLeft($launchpadWrapper.width());
    			$launchpadWrapper.animate({scrollLeft: 0}, 800, function(){
    				that.notiCenter.setVisible(false);
    				$launchpadWrapper.css("overflow-x", "hidden");	
    			});
    		}, 0);
    	}
    };
    
    CustomController.prototype._onNotiCenterPress = function (oEvent) {
    	var that = this,
    		$launchpadWrapper = $(that.launchpadWrapper.getDomRef());
    	
    	if (!that.notiCenter.getVisible()) {
    		$launchpadWrapper.css("overflow-x", "auto");
    		that.notiCenter.setVisible(true);
    		setTimeout(function(){
    			$launchpadWrapper.scrollLeft();
    			$launchpadWrapper.animate({scrollLeft: $launchpadWrapper[0].scrollWidth}, 800, function(){
    				that.meArea.setVisible(false);
    				$launchpadWrapper.css("overflow-x", "hidden");
    			});
    		}, 0);
    	}
    };
    
    /*-------------------------------------------------- UI Interaction -------------------------------------------------*/
    
    
    
    

    return CustomController;

});