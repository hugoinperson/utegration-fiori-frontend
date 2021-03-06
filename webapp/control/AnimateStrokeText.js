/*globals sap*/
/*jslint nomen:true*/

sap.ui.define([
	"jquery.sap.global",
	"sap/m/Text"
], function ($, Text) {
	
	"use strict";

	return Text.extend("utegration.fiori.frontend.control.AnimateStrokeText", {
        metadata: {
        	library: "utegration.fiori.frontend.control",
        	properties: {
        		"order": {
        			type: "int",
        			defaultValue: 0
        		},
        		"showStroke": {
        			type: "boolean",
        			defaultValue: false
        		}
        	}
        },
        init: function () {
        },
        onBeforeRendering: function () {
        },
        onAfterRendering: function () {
        	this.addStyleClass("utg-fiori-animateStrokeText");

        	if (this.getOrder()) {
        		this.addStyleClass("utg-fiori-animateObj");
        	}
        	
        	if (this.getShowStroke()) {
        		this.addStyleClass("stroked");
        	}
        },
        performAnimation: function () {
        	if (this.getOrder()) {
        		this.addStyleClass("stroked");
        	}
        },
        rollbackAnimation: function () {
        	if (this.getOrder()) {
        		this.removeStyleClass("stroked");
        	}
        },
        renderer: "sap.m.TextRenderer"
    });
});