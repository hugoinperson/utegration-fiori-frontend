sap.ui.define([
	"jquery.sap.global",
    "utegration/fiori/frontend/model/SlideController",
    "sap/ui/model/Filter",
	"sap/ui/model/json/JSONModel"
], function($, SlideController, Filter, JSONModel) {
	
	"use strict";
	
	var CustomController = SlideController.extend("utegration.fiori.frontend.component.designFioriApps.controller.slides.ListReport");

	CustomController.prototype.onInit = function () {
		SlideController.prototype.onInit.apply(this, arguments);
		
		this.oModel = new JSONModel();
		this.oModel.loadData(jQuery.sap.getModulePath("utegration.fiori.frontend.component.designFioriApps.mockdata", "/model.json"), null, false);
		this.getView().setModel(this.oModel);

		this.aKeys = ["Name", "Category", "SupplierName"];
		this.oSelectName = this.getSelect("slName");
		this.oSelectCategory = this.getSelect("slCategory");
		this.oSelectSupplierName = this.getSelect("slSupplierName");
    };

    CustomController.prototype.onBeforeRendering = function () {
    	SlideController.prototype.onBeforeRendering.apply(this, arguments);
    };
    
    CustomController.prototype.onAfterRendering = function () {
    	SlideController.prototype.onAfterRendering.apply(this, arguments);
    };
    
    CustomController.prototype.onExit = function () {
        SlideController.prototype.onExit.apply(this, arguments);
        
        this.aKeys = [];
		this.aFilters = [];
		this.oModel = null;
    };
    
    CustomController.prototype.formatToggleButtonText = function (bValue) {
    	return bValue ? "Collapse Header" : "Expand Header";
    };

    CustomController.prototype.onToggleFooter = function (bValue) {
    	this.getPage().setShowFooter(!this.getPage().getShowFooter());
    };
    
    CustomController.prototype.onSelectChange = function (bValue) {
    	var aCurrentFilterValues = [];

		aCurrentFilterValues.push(this.getSelectedItemText(this.oSelectName));
		aCurrentFilterValues.push(this.getSelectedItemText(this.oSelectCategory));
		aCurrentFilterValues.push(this.getSelectedItemText(this.oSelectSupplierName));

		this.filterTable(aCurrentFilterValues);
    };
    
    CustomController.prototype.filterTable = function (aCurrentFilterValues) {
    	this.getTableItems().filter(this.getFilters(aCurrentFilterValues));
		this.updateFilterCriterias(this.getFilterCriteria(aCurrentFilterValues));
    };
    
    CustomController.prototype.updateFilterCriterias = function (aFilterCriterias) {
    	if (aFilterCriterias.length > 0) { /* We can`t use a single label and change only the model data, */
			this.removeSnappedLabel(); /* because in case of label with an empty text, */
			this.addSnappedLabel(); /* a space for the snapped content will be allocated and can lead to title misalignment */
			this.oModel.setProperty("/Filter/text", this.getFormattedSummaryText(aFilterCriterias));
		} else {
			this.removeSnappedLabel();
		}
    };
    
    CustomController.prototype.addSnappedLabel = function () {
    	this.getPageTitle().addSnappedContent(this.getSnappedLabel());
    };
    
    CustomController.prototype.removeSnappedLabel = function () {
    	this.getPageTitle().destroySnappedContent();
    };
    
    CustomController.prototype.getFilters = function (aCurrentFilterValues) {
    	this.aFilters = [];
		this.aFilters = this.aKeys.map(function (sCriteria, i) {
			return new sap.ui.model.Filter(sCriteria, sap.ui.model.FilterOperator.Contains, aCurrentFilterValues[i]);
		});

		return this.aFilters;
    };
    
    CustomController.prototype.getFilterCriteria = function (aCurrentFilterValues) {
    	return this.aKeys.filter(function (el, i) {
			if (aCurrentFilterValues[i] !== "") return  el;
		});
    };
    
    CustomController.prototype.getFormattedSummaryText = function (aFilterCriterias) {
    	return "Filtered by: " + aFilterCriterias.join(", ");
    };
    
    CustomController.prototype.getTable = function (aFilterCriterias) {
    	return this.getView().byId("idProductsTable");
    };
    
    CustomController.prototype.getTableItems = function (aFilterCriterias) {
    	return this.getTable().getBinding("items");
    };
    
    CustomController.prototype.getSelect = function (sId) {
    	return this.getView().byId(sId);
    };
    
    CustomController.prototype.getSelectedItemText = function (oSelect) {
    	return oSelect.getSelectedItem() ? oSelect.getSelectedItem().getKey() : "";
    };
    
    CustomController.prototype.getPage = function () {
    	return this.getView().byId("dynamicPageId");
    };
    
    CustomController.prototype.getPageTitle = function () {
    	return this.getPage().getTitle();
    };
    
    CustomController.prototype.getSnappedLabel = function () {
    	return new sap.m.Label({text: "{/Filter/text}"});
    };
    

    return CustomController;
});