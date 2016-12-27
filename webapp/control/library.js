/*globals sap, utegration*/

sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/library"
], function ($, Library) {
		
	"use strict";

	sap.ui.getCore().initLibrary({
		name: "utegration.fiori.frontend.control",
		version: "1.0.0",
		dependencies: [
			"sap.ui.core"
		],
		types: [
            "utegration.fiori.frontend.control.SlideBackgroundType"
    	],
		controls: [
			"utegration.fiori.frontend.control.SlideNavContainer",
            "utegration.fiori.frontend.control.Slide"
		],
		elements: [],
		interfaces: []
	});

	utegration.fiori.frontend.control.SlideBackgroundType = {
		Dark: "Dark",
		Orange: "Orange"
	};
       
	return utegration.fiori.frontend.control;
});
