/*globals sap*/
/*jslint nomen:true*/

sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/Control"
], function ($, Control) {
	
	"use strict";

	return Control.extend("utegration.fiori.frontend.control.FormatText", {
        metadata: {
        	library: "utegration.fiori.frontend.control",
        	properties: {
        		"order": {
        			type: "int",
        			defaultValue: 0
        		},
        		"color": {
        			type: "utegration.fiori.frontend.control.TextColorType",
        			defaultValue: "White"
        		},
        		"level": {
        			type: "utegration.fiori.frontend.control.TextLevelType",
        			defaultValue: "Normal"
        		}
        	},
        	aggregations : {
        		content: {type : "sap.ui.core.Control", multiple : true, visibility: "public"}
            },
            defaultAggregation : "content"
        },
        init: function () {
        },
        onBeforeRendering: function () {
        },
        onAfterRendering: function () {
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
        renderer: {
        	render: function (oRm, oControl) {
        		oRm.write("<div");
				oRm.writeControlData(oControl);
				oRm.addClass("utg-fiori-formatText");
				if (oControl.getLevel()) {
					oRm.addClass("textLevel-" + oControl.getLevel());	
				}
				if (oControl.getColor()) {
					oRm.addClass("textColor-" + oControl.getColor());	
				}
				oRm.writeClasses();
				oRm.write(">");
				oControl.getAggregation("content").forEach(function(oContentControl) {
					oRm.renderControl(oContentControl);	
				});
				oRm.write("</div>");
        	}
        }
    });
});