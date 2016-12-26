	sap.ui.define([
	"jquery.sap.global",
    "sap/ui/core/mvc/Controller"
], function($, Controller) {
	
	"use strict";
	
	var CustomController = Controller.extend("utegration.fiori.frontend.component.introduction.controller.Main");

	CustomController.prototype.onInit = function () {
		// Global variables
		this._slideNavContainer = this.getView().byId("utg-fiori-SlidePagesNavContainer");
		this._compRouter = this.getOwnerComponent().getRouter();
		// Startup functions
        this._subscribeEvents();
    };

    CustomController.prototype.onBeforeRendering = function () {
    };
    
    CustomController.prototype.onAfterRendering = function () {
    };
    
    /*------------------------------------------------------ Events -----------------------------------------------------*/

    CustomController.prototype._subscribeEvents = function () {
        this._compRouter.getRoute("main").attachPatternMatched(this._onRefresh, this);
    };
    
    CustomController.prototype._onRefresh = function (oEvent) {
    	var routeName = oEvent.getParameters().name,
    		slidePageNum = oEvent.getParameters().arguments.slidePageNum;
    	
    	if (!slidePageNum) {
    		this._compRouter.navTo(routeName, {
    			slidePageNum: "01"
    		});
    	} else {
    		this._navToSlide(slidePageNum);
    	}
    };
    
    CustomController.prototype._navToSlide = function (slidePageNum) {
    	var pages = this._slideNavContainer.getPages(),
    		targetIndex = parseInt(slidePageNum, 10) - 1,
    		targetPage = pages[targetIndex],
    		currentPage = this._slideNavContainer.getCurrentPage(),
    		currentIndex = pages.indexOf(currentPage);
    		
		
		if (targetPage && targetIndex > currentIndex) {
			this._slideNavContainer.to(targetPage);
		}
		
		if (targetPage && targetIndex < currentIndex) {
			this._slideNavContainer.backToPage(targetPage);
		}
		
		
    };
    
    
    
    
    CustomController.prototype.onNextSlide = function () {
    	console.log('nextSlide');	
    };
    
    CustomController.prototype.onPrevSlide = function () {
    	console.log('prevSlide');	
    };

    return CustomController;

});