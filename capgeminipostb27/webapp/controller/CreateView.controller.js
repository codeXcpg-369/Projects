sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("app.capgeminipostb27.controller.CreateView", {
        onInit: function() {
            
        },
        onSubmit: function(){

            //PAYLOAD
            //objects of the input field
            let oCarrId=this.getView().byId("idCarrCr")
            let oConnId=this.getView().byId("idConnCr")
            let oBookId=this.getView().byId("idBookCr")
            let oFDate=this.getView().byId("idDofCr")
            let oODate=this.getView().byId("idDooCr")
            //values for all the fields
            let sCarrId=oCarrId.getValue()
            let sConnId=oConnId.getValue()
            let sBookId=oBookId.getValue()
            let sFDate=oFDate.getValue()
            let sODate=oODate.getValue()

            let payload={
               "Carrid" :sCarrId,
               "Connid" :sConnId,
               "Bookid" :sBookId,
               "Fldate" :sFDate,
               "OrderDate" :sODate
            }

            let oModel=this.getOwnerComponent().getModel()
            let entity="/WASet"

            oModel.create(entity, payload,{
                success:function(response){
                    MessageBox.success("Record Inserted",{
                        onClose: function(){
                            var oRouter=this.getOwnerComponent().getRouter();
                            oRouter.navTo("RouteFlightView")
                            sCarrId.setValue()
                            sConnId.setValue()
                            sBookId.setValue()
                            sFDate.setValue()
                            sODate.setValue()
 
                        }
                    })
                },
                error:function(error){
                    MessageBox.error("Insertion Failed");
                }
            })

            //1. get the model
            //2. we need the entity
            //3. method(theEntity, payload{succ, error})
        }






    });
});