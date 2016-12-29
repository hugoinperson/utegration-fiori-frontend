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
        		this.addStyleClass("hidden");
        	}
        },
        performAnimation: function () {
        	if (this.getOrder()) {
        		this.removeStyleClass("hidden");
        	}
        },
        rollbackAnimation: function () {
        	if (this.getOrder()) {
        		this.addStyleClass("hidden");
        	}
        },
        renderer: "sap.m.TextRenderer"
    });
});