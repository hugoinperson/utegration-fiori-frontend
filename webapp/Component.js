sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"utegration/fiori/frontend/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	var CustomComponent = UIComponent.extend("utegration.fiori.frontend.Component", {
		metadata: {
			manifest: "json"
		}
	});

	CustomComponent.prototype.init = function () {
		// call the base component's init function
        UIComponent.prototype.init.apply(this);
        
		// create the views based on the url/hash
        this.getRouter().initialize();
        
        // set the device model
		this.setModel(models.createDeviceModel(), "device");
		
        this.subscribeEvent();
    };
    
    CustomComponent.prototype.subscribeEvent = function () {
        var oCoreEventBus = sap.ui.getCore().getEventBus();

        oCoreEventBus.subscribe("launchpad", "routing", this.goToPage, this);
    };

    CustomComponent.prototype.goToPage = function (sChannel, sEvent, oPayload) {
        this.getRouter().navTo(oPayload.route);
    };

	return CustomComponent;
});