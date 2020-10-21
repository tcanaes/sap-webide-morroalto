sap.ui.define([
	"com/morroalto/MorroAlto/controller/BaseController",
	"sap/ui/core/routing/History"
], function(BaseController, History) {
	"use strict";
	return BaseController.extend("com.morroalto.MorroAlto.controller.MaintenanceMenu", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.morroalto.MorroAlto.view.MaintenanceMenuView
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.morroalto.MorroAlto.view.MaintenanceMenuView
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.morroalto.MorroAlto.view.MaintenanceMenuView
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.morroalto.MorroAlto.view.MaintenanceMenuView
		 */
		//	onExit: function() {
		//
		//	}

		handleNavBack: function() {
			// var oHistory, sPreviousHash;
			// oHistory = History.getInstance();
			// sPreviousHash = oHistory.getPreviousHash();
			// if (sPreviousHash !== undefined) {
			//  	window.history.go(-1);
			// } else {
			//   var oRouter = this.getRouter();
			//   oRouter.navTo("MainMenu", {}, true /*no history*/ );
			// }
			this.goBack("MainMenu");
		}
	});
});