sap.ui.define([
	"jquery.sap.global",
    "sap/ui/core/mvc/Controller"
], function($, Controller) {
	
	"use strict";
	
	var CustomController = Controller.extend("utegration.fiori.frontend.model.SlideController");

	CustomController.prototype.onInit = function () {
		// Global variables
		this._compRouter = this.getOwnerComponent().getRouter();
		this._animateObjs = null;
		this._nextAnimateObjIndex = 0;
		// Startup functions
        this._subscribeEvents();
    };

    CustomController.prototype.onBeforeRendering = function () {
    };
    
    CustomController.prototype.onAfterRendering = function () {
    	// fetch all the animate objects on this slide
    	this._animateObjs = this._getAllAnimateObjects();
    };
    
    CustomController.prototype.onExit = function () {
        this._unsubscribeEvents();
    };
    
    /*------------------------------------------------------ Helper -----------------------------------------------------*/
    
    CustomController.prototype._getAllAnimateObjects = function () {
    	var aAnimateObjs = [];
    	
    	$(this.getView().getDomRef()).find(".utg-fiori-animateObj").each(function(iIndex, oAnimateObj) {
    		if (oAnimateObj.id) {
    			aAnimateObjs.push(sap.ui.getCore().byId(oAnimateObj.id));
    		}
    	});
    	
    	// sort animate objs by their order
    	aAnimateObjs.sort(function (a, b) {
    		return a.getOrder() - b.getOrder();
    	});
    	
    	return aAnimateObjs;
    };
    
    /*------------------------------------------------------ Events -----------------------------------------------------*/

	CustomController.prototype._subscribeEvents = function () {
        // attach animation nav events
    	this.getView().attachEvent("rollbackAnimation", this._rollbackAnimation.bind(this));
    	this.getView().attachEvent("performAnimation", this._performAnimation.bind(this));
    };
    
    CustomController.prototype._unsubscribeEvents = function () {
        // dettach animation nav events
    	this.getView().detachEvent("rollbackAnimation", this._rollbackAnimation.bind(this));
    	this.getView().detachEvent("performAnimation", this._performAnimation.bind(this));
    };
    
    /*---------------------------------------------------- UI Actions ---------------------------------------------------*/

	CustomController.prototype._rollbackAnimation = function () {
    	var targetAnimateObj = this._animateObjs[this._nextAnimateObjIndex - 1];
    	
    	if (targetAnimateObj) {
    		this._nextAnimateObjIndex--;
    		this._animateObjs[this._nextAnimateObjIndex].rollbackAnimation();
    	}
    };
    
    CustomController.prototype._performAnimation = function () {
    	var targetAnimateObj = this._animateObjs[this._nextAnimateObjIndex];
    	
    	if (targetAnimateObj) {
    		this._animateObjs[this._nextAnimateObjIndex].performAnimation();
    		this._nextAnimateObjIndex++;
    	}
    };


    return CustomController;
});