/*global Promise*/
sap.ui.define([
    "jquery.sap.global",
    "sap/ui/core/UIComponent"
], function ($, UIComponent) {

    "use strict";

    var CustomComponent = UIComponent.extend("utegration.fiori.frontend.component.launchpad.Component", {
    	metadata: {
			manifest: "json"
		}
    });

    CustomComponent.prototype.init = function () {
    	// call the base component's init function
        UIComponent.prototype.init.apply(this);
        
        // create the views based on the url/hash
        this.getRouter().initialize();
    };

    return CustomComponent;
});