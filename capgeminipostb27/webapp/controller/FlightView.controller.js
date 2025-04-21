sap.ui.define([
    "./BaseController",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageBox"
], (Controller, Filter, FilterOperator, MessageBox) => {
    "use strict";

    return Controller.extend("app.capgeminipostb27.controller.FlightView", {
        onInit: function() {
            this._getData()
        },
        _getData:function(){
            let entitySet = `/WASet`;
            let oModel = this.getOwnerComponent().getModel();
            oModel.read(entitySet, {
                success: (oData, response) => {
                    var oModelData = new sap.ui.model.json.JSONModel(oData.results);
                    this.getView().setModel(oModelData, "FlightDetails");
                },
                error: () => {}
            });
        },
        onCreate: function() {
            var oRouter = this.getRouter();
            oRouter.navTo("RouteCreateView");
        },

        onSearch: function() {
            let aFilter = [];
            let sCarrId = this.getView().byId("idFiltercarr").getValue();
            let sBookId = this.getView().byId("idFilterBook").getValue();
            if (sCarrId) {
                let filterName = new Filter("Carrid", FilterOperator.Contains, sCarrId);
                aFilter.push(filterName);
            }
            if (sBookId) {
                let filterName = new Filter("Bookid", FilterOperator.Contains, sBookId);
                aFilter.push(filterName);
            }

            let oTable = this.getView().byId("idFlightTab");
            let oBinding = oTable.getBinding("items");
            oBinding.filter(aFilter);
        },

        onRowSelection:function(oEvent){
            let oItem = oEvent.getParameter("listItem");
            let oContext = oItem.getBindingContextPath("FlightDetails");
            let aItem = oContext.split("/");
            let index = aItem[aItem.length-1];
            let oRouter = this.getRouter();
                oRouter.navTo("RouteDetailView",{
                    indexDetail:index
                })


        },










        onDelete: function(oEvent) {
            let oContext = oEvent.getSource().getBindingContext("FlightDetails").getObject();
            MessageBox.confirm("Are you sure you want to delete?", {
                onClose: (choice) => {
                    if (choice==='OK') {
                        this._onDeleteCall(oContext)

                    }
                }
            });
        },

        _onDeleteCall:function(parm){
            let key1 = parm.Carrid
            let key2 = parm.Connid
            let key3 = parm.Bookid
            let key4 = parm.Fldate
            key4 = key4.replace(/-/g, "");

            let oModel = this.getOwnerComponent().getModel();

            let entity = `/WASet(Carrid='${key1}',Connid='${key2}',Bookid='${key3}',Fldate='${key4}')`;
            oModel.remove(entity,{
                success:(resp)=>{
                    MessageBox.success("Record deleted",{
                        onClose:function(){
                             this._getData()
                        }.bind(this)
                    });
                },
                error:(err)=>{
                    MessageBox.error("Record delete failed");

                }
            })

        }

    });
});
