sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("app.capgepostb27.controller.CreateView", {
        onInit() {
            
        },
        getRouter: function(){
            return this.getOwnerComponent().getRouter()
        }
    });
});