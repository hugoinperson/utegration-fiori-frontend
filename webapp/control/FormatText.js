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
        	$.sap.includeStyleSheet("control/css/FormatText.css");
        },
        onBeforeRendering: function () {
        },
        onAfterRendering: function () {
        },
        renderer: {
        	render: function (oRm, oControl) {
        		oRm.write("<div");
				oRm.writeControlData(oControl);
				oRm.addClass("utg-fiori-formatText");
				if (oControl.getLevel()) {
					oRm.addClass("textLevel-" + oControl.getLevel());	
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