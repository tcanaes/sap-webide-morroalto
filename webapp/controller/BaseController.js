sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function(Controller, History) {
	"use strict";

	return Controller.extend("com.morroalto.MorroAlto.controller.BaseController", {

		getRouter: function () {
			//return UIComponent.getRouterFor(this);
			return this.getOwnerComponent().getRouter();
		},

		goBack: function (viewName = null) {
			
			//First, check if there is a browser history
		    const oHistory = History.getInstance();
		    const sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				//If it does, use browser's back functionality
		 		window.history.go(-1);
		   	} else {
		   		//If it doesnt, get the App Routes and go to the informed viewName
		    	const goToView = (viewName !== null)? viewName: MainMenu;
		    	this.getRouter().navTo(goToView, {}, true /*no history*/);
		 	}
		}

	});

});