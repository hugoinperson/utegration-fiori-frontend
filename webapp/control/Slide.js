/*globals sap*/
/*jslint nomen:true*/

sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/Control"
], function ($, Control) {
	
	"use strict";

	return Control.extend("utegration.fiori.frontend.control.Slide", {
        metadata: {
        	library: "utegration.fiori.frontend.control",
        	properties: {
        		"background": {
        			type: "utegration.fiori.frontend.control.SlideBackgroundType",
        			defaultValue: "Dark"
        		}
        	},
        	aggregations : {
        		slideView: {type : "sap.ui.core.mvc.XMLView", multiple : false, visibility: "public"}
            },
            defaultAggregation : "slideView"
        },
        init: function () {
        },
        renderer: {
        	render: function (oRm, oControl) {
        		oRm.write("<div");
				oRm.writeControlData(oControl);
				oRm.addClass("utg-fiori-slide");
				if (oControl.getBackground()) {
					oRm.addClass("slideBackground-" + oControl.getBackground());	
				}
				oRm.writeClasses();
				oRm.write(">");
				oRm.renderControl(oControl.getAggregation("slideView"));
				oRm.write("</div>");
        	}
        }
    });
});