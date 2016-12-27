/*globals sap*/
/*jslint nomen:true*/

sap.ui.define([
	"jquery.sap.global",
	"sap/m/VBox"
], function ($, VBox) {
	
	"use strict";

	return VBox.extend("utegration.fiori.frontend.control.AnimateVBox", {
        metadata: {
        	library: "utegration.fiori.frontend.control",
        	properties: {
        		"order": {
        			type: "int",
        			defaultValue: 0
        		},
        		"animation": {
        			type: "utegration.fiori.frontend.control.AnimateBoxAnimationType",
        			defaultValue: "Show"
        		}
        	}
        },
        init: function () {
        	$.sap.includeStyleSheet("control/css/AnimateObject.css");
        },
        onBeforeRendering: function () {
        	// this.setVisible(false);
        },
        onAfterRendering: function () {
        	if (this.getOrder()) {
        		this.addStyleClass("utg-fiori-animateObj");

        		switch(this.getAnimation()) {
        			case "Show":
        				this.addStyleClass("hidden");
        				break;
        			default:
        		}
        	}
        },
        performAnimation: function () {
        	if (this.getOrder()) {
        		switch(this.getAnimation()) {
        			case "Show":
        				this.removeStyleClass("hidden");
        				break;
        			default:
        		}
        	}
        },
        rollbackAnimation: function () {
        	if (this.getOrder()) {
        		switch(this.getAnimation()) {
        			case "Show":
        				this.addStyleClass("hidden");
        				break;
        			default:
        		}
        	}
        },
        renderer: "sap.m.VBoxRenderer"
    });
});