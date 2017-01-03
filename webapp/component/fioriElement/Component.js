/*global Promise*/
sap.ui.define([
    "jquery.sap.global",
    "sap/ovp/app/Component"
], function ($, Component) {

    "use strict";

    var CustomComponent = Component.extend("utegration.fiori.frontend.component.fioriElement.Component", {
    	metadata: {
			manifest: "json"
		}
    });

    CustomComponent.prototype.init = function () {
    	// call the base component's init function
        Component.prototype.init.apply(this);
        
        // create the views based on the url/hash
        // this.getRouter().initialize();
    };

    return CustomComponent;
});