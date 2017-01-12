sap.ui.define([
	"jquery.sap.global",
    "utegration/fiori/frontend/model/SlideController",
    "sap/m/Dialog",
    "sap/m/Image",
    "sap/m/Button"
], function($, SlideController, Dialog, Image, Button) {
	
	"use strict";
	
	var CustomController = SlideController.extend("utegration.fiori.frontend.component.designFioriApps.controller.slides.ExOneFlowOne");

	CustomController.prototype.onInit = function () {
		SlideController.prototype.onInit.apply(this, arguments);
    };

    CustomController.prototype.onBeforeRendering = function () {
    	SlideController.prototype.onBeforeRendering.apply(this, arguments);
    };
    
    CustomController.prototype.onAfterRendering = function () {
    	SlideController.prototype.onAfterRendering.apply(this, arguments);
    };
    
    CustomController.prototype.onExit = function () {
        SlideController.prototype.onExit.apply(this, arguments);
    };

	CustomController.prototype.onWorkListPress = function (oEvent) {
		var dialog = new Dialog({
			title: "Worklist",
			contentWidth: "80%",
			contentHeight: "70%",
			draggable: true,
			resizable: true,
			content: new Image({
				src: "img/worklist.png",
				densityAware: false,
				width: "100%"
			}),
			beginButton: new Button({
				text: "Close",
				press: function () {
					dialog.close();
				}
			}),
			afterClose: function() {
			}
		});
 
		//to get access to the global model
		this.getView().addDependent(dialog);
		dialog.open();
	};

	CustomController.prototype.onObjPagePress = function (oEvent) {
		var dialog = new Dialog({
			title: "Object Page",
			contentWidth: "80%",
			contentHeight: "70%",
			draggable: true,
			resizable: true,
			content: new Image({
				src: "img/sap-fiori-2.0.png",
				densityAware: false,
				width: "100%"
			}),
			beginButton: new Button({
				text: "Close",
				press: function () {
					dialog.close();
				}
			}),
			afterClose: function() {
			}
		});
 
		//to get access to the global model
		this.getView().addDependent(dialog);
		dialog.open();
	};



    return CustomController;
});