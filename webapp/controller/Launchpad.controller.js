sap.ui.define([
	"jquery.sap.global",
    "sap/ui/core/mvc/Controller"
], function($, Controller) {
	
	"use strict";
	
	var CustomController = Controller.extend("utegration.fiori.frontend.controller.Launchpad");

	CustomController.prototype.onInit = function () {
    	// global variables
    	this.hostPage = this.getView().byId("utg-fiori-hostPage");
    	this.toolbar = this.getView().byId("utg-fiori-toolbar");
    	this.launchpadWrapper = this.getView().byId("utg-fiori-launchpad-wrapper");
    	this.meArea = this.getView().byId("utg-fiori-launchpad-meArea");
    	this.main = this.getView().byId("utg-fiori-launchpad-main");
    	this.notiCenter = this.getView().byId("utg-fiori-launchpad-notiCenter");
    	// static variables
    	this.SLIDE_ID = "utg-slide-";
    };

    CustomController.prototype.onBeforeRendering = function () {
    };
    
    CustomController.prototype.onAfterRendering = function () {
    	var that = this;
    	
    	this.hostPage.getHeaderContent()[0].getParent().attachBrowserEvent("mouseenter", function (oEvent) {
    		that.toolbar.addStyleClass("show");
    	});
    	
    	this.hostPage.getHeaderContent()[0].getParent().attachBrowserEvent("mouseleave", function (oEvent) {
    		that.toolbar.removeStyleClass("show");
    	});
    };
    
    /*-------------------------------------------------- UI Interaction -------------------------------------------------*/
    
    CustomController.prototype.onHomePress = function (oEvent) {
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
    
    CustomController.prototype.onUserAvatarPress = function (oEvent) {
    	var that = this,
    		$launchpadWrapper = $(that.launchpadWrapper.getDomRef());
    	
    	if (!that.meArea.getVisible()) {
    		that.meArea.setVisible(true);
    		setTimeout(function(){
    			$launchpadWrapper.scrollLeft($launchpadWrapper.width());
    			$launchpadWrapper.animate({scrollLeft: 0}, 800, function(){
    				$launchpadWrapper.css("overflow-x", "hidden");	
    			});
    		}, 0);
    	}
    };
    
    CustomController.prototype.onNotiCenterPress = function (oEvent) {
    	var that = this,
    		$launchpadWrapper = $(that.launchpadWrapper.getDomRef());
    	
    	if (!that.notiCenter.getVisible()) {
    		that.notiCenter.setVisible(true);
    		setTimeout(function(){
    			$launchpadWrapper.scrollLeft();
    			$launchpadWrapper.animate({scrollLeft: $launchpadWrapper.width()}, 800, function(){
    				$launchpadWrapper.css("overflow-x", "hidden");	
    			});
    		}, 0);
    	}
    };
    

    return CustomController;

});