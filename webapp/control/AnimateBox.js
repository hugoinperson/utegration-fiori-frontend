/*globals sap*/
/*jslint nomen:true*/

sap.ui.define([
	"jquery.sap.global",
	"sap/m/FlexBox"
], function ($, FlexBox) {
	
	"use strict";

	return FlexBox.extend("utegration.fiori.frontend.control.AnimateBox", {
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
        },
        onBeforeRendering: function () {
        	// this.setVisible(false);
        },
        onAfterRendering: function () {
        	if (this.getOrder()) {
        		this.addStyleClass("utg-fiori-animateObj");

        		switch(this.getAnimation()) {
        			case "Show":
        				this.addStyleClass("utg-fiori-hidden");
        				break;
        			default:
        		}
        	}
        },
        performAnimation: function () {
        	if (this.getOrder()) {
        		switch(this.getAnimation()) {
        			case "Show":
        				this.removeStyleClass("utg-fiori-hidden");
        				break;
        			default:
        		}
        	}
        },
        rollbackAnimation: function () {
        	if (this.getOrder()) {
        		switch(this.getAnimation()) {
        			case "Show":
        				this.addStyleClass("utg-fiori-hidden");
        				break;
        			default:
        		}
        	}
        },
        renderer: "sap.m.VBoxRenderer"
    });
});