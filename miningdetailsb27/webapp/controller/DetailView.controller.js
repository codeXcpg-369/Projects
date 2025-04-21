sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (BaseController, JSONModel, Fragment, Filter, FilterOperator) {
    "use strict";

    return BaseController.extend("app.miningdetailsb27.controller.DetailView", {
        onInit: function () {
            let oRouter = this.getOwnerComponent().getRouter();
            oRouter.attachRoutePatternMatched(this.onRouteMatched, this);
        },

        onRouteMatched: function (oEvent) {
            let index = oEvent.getParameter("arguments").index;
            let sPath = "miningsModel>/miningData/" + index;
            let oView = this.getView();
            oView.bindElement(sPath);
        },

        onListView: function () {
            let oRouter2 = this.getOwnerComponent().getRouter();
            oRouter2.navTo("RouteMasterView");
        }
    });
});





