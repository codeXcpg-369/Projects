sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller,JSONModel) {
    "use strict";
 
    return Controller.extend("app.es5firstprojectb27.controller.View1", {
        onInit: function () {
 
        },
        onSelectItem:function(oEvent){
            let sId=oEvent.getParameter("selectedItem")
            let sKey=sId.getProperty("key")
           
            let oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteView2", {
                index:sKey
            });
        }
    });
});