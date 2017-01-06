/*globals sap*/
/*jslint nomen:true*/

sap.ui.define([
	"jquery.sap.global",
	"sap/m/Text"
], function ($, Text) {
	
	"use strict";

	return Text.extend("utegration.fiori.frontend.control.Text", {
        metadata: {
        	library: "utegration.fiori.frontend.control",
        	properties: {
        		"order": {
        			type: "int",
        			defaultValue: 0
        		},
        		"isEmoji": {
        			type: "boolean",
        			defaultValue: false
        		}
        	}
        },
        init: function () {
        	if (Text.prototype.init) {
        		Text.prototype.init.apply(this, arguments);
        	}
        },
        onBeforeRendering: function () {
        	if (Text.prototype.onBeforeRendering) {
        		Text.prototype.onBeforeRendering.apply(this, arguments);
        	}
        },
        onAfterRendering: function () {
        	if (Text.prototype.onAfterRendering) {
        		Text.prototype.onAfterRendering.apply(this, arguments);
        	}
        	if (this.getOrder()) {
        		this.addStyleClass("utg-fiori-animateObj");
        		this.addStyleClass("utg-fiori-hidden");
        	}
        	if (this.getIsEmoji()) {
        		this.addStyleClass("utg-fiori-emoji");
        	}
        	this.addStyleClass("utg-fiori-text");
        },
        performAnimation: function () {
        	if (this.getOrder()) {
        		this.removeStyleClass("utg-fiori-hidden");
        	}
        },
        rollbackAnimation: function () {
        	if (this.getOrder()) {
        		this.addStyleClass("utg-fiori-hidden");
        	}
        },
        renderer: "sap.m.TextRenderer"
    });
});