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
            "utegration.fiori.frontend.control.SlideBackgroundType",
            "utegration.fiori.frontend.control.AnimateBoxAnimationType"
    	],
		controls: [
			"utegration.fiori.frontend.control.SlideNavContainer",
            "utegration.fiori.frontend.control.Slide",
            "utegration.fiori.frontend.control.AnimateVBox"
		],
		elements: [],
		interfaces: []
	});

	// Material colors https://www.materialui.co/colors
	utegration.fiori.frontend.control.SlideBackgroundType = {
		Red: "Red",
		Pink: "Pink",
		Indigo: "Indigo",
		Blue: "Blue",
		LightBlue: "LightBlue",
		Cyan: "Cyan",
		Teal: "Teal",
		Green: "Grenn",
		LightGreen: "LightGreen",
		Lime: "Lime",
		Amber: "Amber",
		Orange: "Orange",
		BlueGray: "BlueGray",
		Dark: "Dark"
	};
	
	utegration.fiori.frontend.control.AnimateBoxAnimationType = {
		Show: "Show"
	};
       
	return utegration.fiori.frontend.control;
});