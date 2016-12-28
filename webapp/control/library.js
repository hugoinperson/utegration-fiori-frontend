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
            "utegration.fiori.frontend.control.AnimateBoxAnimationType",
            "utegration.fiori.frontend.control.TextLevelType",
            "utegration.fiori.frontend.control.TextColorType"
    	],
		controls: [
			"utegration.fiori.frontend.control.SlideNavContainer",
            "utegration.fiori.frontend.control.Slide",
            "utegration.fiori.frontend.control.AnimateVBox",
            "utegration.fiori.frontend.control.FormatText"
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
		Green: "Green",
		LightGreen: "LightGreen",
		Lime: "Lime",
		Amber: "Amber",
		Orange: "Orange",
		BlueGray: "BlueGray",
		Dark: "Dark",
		GreenBlue: "GreenBlue"
	};
	
	utegration.fiori.frontend.control.AnimateBoxAnimationType = {
		Show: "Show"
	};
	
	utegration.fiori.frontend.control.TextLevelType = {
		Normal: "Normal",
		H1: "H1",
		H2: "H2"
	};
	
	utegration.fiori.frontend.control.TextColorType = {
		White: "White",
		Dark: "Dark"
	};
       
	return utegration.fiori.frontend.control;
});