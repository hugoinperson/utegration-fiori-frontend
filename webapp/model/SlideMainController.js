sap.ui.define([
	"jquery.sap.global",
    "sap/ui/core/mvc/Controller"
], function($, Controller) {
	
	"use strict";
	
	var CustomController = Controller.extend("utegration.fiori.frontend.model.SlideMainController");

	CustomController.prototype.onInit = function () {
		// Global variables
		this._slideNavContainer = this.getView().byId("utg-fiori-SlidePagesNavContainer");
		this._compRouter = this.getOwnerComponent().getRouter();
		this._currentSlidePageIndex = null;
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
    		// if no page number specified, then go to the first page
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
    		
    	// update current slide page index
    	this._currentSlidePageIndex = targetIndex;
		
		if (targetPage && targetIndex > currentIndex) {
			this._slideNavContainer.to(targetPage);
		}
		
		if (targetPage && targetIndex < currentIndex) {
			this._slideNavContainer.backToPage(targetPage);
		}
    };
    

    /*---------------------------------------------------- UI Actions ---------------------------------------------------*/
    
    CustomController.prototype.onNextSlide = function () {
    	this._routeToSlide(this._currentSlidePageIndex + 1);
    };
    
    CustomController.prototype.onPrevSlide = function () {
    	this._routeToSlide(this._currentSlidePageIndex - 1);
    };
    
    CustomController.prototype._routeToSlide = function (targetIndex) {
    	this._compRouter.navTo("main", {
			slidePageNum: targetIndex + 1 < 10 ? "0" + String(targetIndex + 1) : String(targetIndex + 1)
		});	
    };

    return CustomController;

});