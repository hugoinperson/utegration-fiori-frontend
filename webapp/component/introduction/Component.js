/*global Promise*/
sap.ui.define([
    "jquery.sap.global",
    "sap/ui/core/UIComponent"
], function ($, UIComponent) {

    "use strict";

    var CustomComponent = UIComponent.extend("utegration.fiori.frontend.component.introduction.Component");

    CustomComponent.prototype.init = function () {
        UIComponent.prototype.init.apply(this);
        this.getRouter().initialize();
    };

    return CustomComponent;
});
