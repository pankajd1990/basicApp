(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/ag-grid-callapi.ts":
/*!************************************!*\
  !*** ./src/app/ag-grid-callapi.ts ***!
  \************************************/
/*! exports provided: AgGridRndAPiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgGridRndAPiComponent", function() { return AgGridRndAPiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AgGridRndAPiComponent = /** @class */ (function () {
    function AgGridRndAPiComponent(http) {
        this.http = http;
        this.rowData = [];
        this.dataload = false;
        this.display = false;
        this.gridOptions = {};
        this.columnDefs = [
            {
                headerName: "ID",
                width: 250,
                field: "id",
                resizable: true,
            },
            {
                headerName: "EMPLOYEE CITY",
                field: "empcity",
                width: 320,
                resizable: true
            },
            {
                headerName: "EMPLOYEE NAME",
                field: "empname",
                width: 320,
                resizable: true
            },
        ];
        this.defaultColDef = { resizable: true };
        this.components = {
            loadingRenderer: function (params) {
                if (params.value !== undefined) {
                    return params.value;
                }
                else {
                    return '<img src="../images/loading.gif">';
                }
            }
        };
        this.rowBuffer = 0;
        this.rowSelection = "multiple";
        this.rowModelType = "infinite";
        this.paginationPageSize = 1;
        this.cacheOverflowSize = 2;
        this.maxConcurrentDatasourceRequests = 1;
        this.infiniteInitialRowCount = 1;
        this.maxBlocksInCache = 10;
    }
    AgGridRndAPiComponent.prototype.ngAfterViewChecked = function () {
        // setInterval(()=>{
        //     $(".ag-body-viewport.ag-layout-normal").scrollTop(40); 
        // },1000)
    };
    AgGridRndAPiComponent.prototype.ngOnInit = function () {
        this.gridOptions = {
            columnDefs: this.columnDefs,
            enableFilter: true,
            suppressColumnVirtualisation: true,
            enableCellChangeFlash: true,
            suppressSetColumnStateEvents: true,
            rowSelection: "single"
        };
        this.callApi();
    };
    AgGridRndAPiComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.callApi();
    };
    AgGridRndAPiComponent.prototype.callApi = function () {
        var _this = this;
        this.http
            .get("https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json")
            .subscribe(function (data) {
            _this.rowData = data;
        });
    };
    AgGridRndAPiComponent.prototype.scroll = function () {
        console.log(this.gridOptions.api);
        this.gridApi.gridCore.rowRenderer.gridOptionsWrapper.layoutElements[1].scrollTop = this.gridApi.gridCore.rowRenderer.gridOptionsWrapper.layoutElements[1].scrollHeight - 300;
    };
    AgGridRndAPiComponent.prototype.close1 = function () {
        //this.gridApi.destroy();
    };
    AgGridRndAPiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "my-app",
            template: "\n    <button (click)=\"display='true'\">on Show</button>\n    <div style=\"width:100%\">\n    \n    <ag-grid-angular\n        #agGrid\n        style=\"width:100%;height:100%\"\n        id=\"myGrid\"\n        class=\"ag-theme-fresh\"\n        [gridOptions]=\"gridOptions\"\n        [rowData]=\"rowData\"\n        (gridReady)=\"onGridReady($event)\"\n      ></ag-grid-angular>\n   \n  </div>\n\n\n\n\n\n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AgGridRndAPiComponent);
    return AgGridRndAPiComponent;
}());



/***/ }),

/***/ "./src/app/ag-grid-rnd.ts":
/*!********************************!*\
  !*** ./src/app/ag-grid-rnd.ts ***!
  \********************************/
/*! exports provided: AgGridRndComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgGridRndComponent", function() { return AgGridRndComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AgGridRndComponent = /** @class */ (function () {
    function AgGridRndComponent(http) {
        this.http = http;
        this.messages = [];
        this.index = 0;
        this.arr = [];
        this.style = {
            marginTop: '0px',
            width: '100%',
            height: '50%',
            boxSizing: 'border-box'
        };
        this.columnDefs = [
            {
                headerName: "ID",
                width: 250,
                field: "id",
                resizable: true,
            },
            {
                headerName: "EMPLOYEE CITY",
                field: "empcity",
                width: 320,
                resizable: true
            },
            {
                headerName: "EMPLOYEE NAME",
                field: "empname",
                width: 320,
                resizable: true
            },
        ];
    }
    AgGridRndComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addMessage();
        // document.getElementById('ag-class').style.height=$("#ag-class").height()+"px";
        this.http.post('http://localhost/ang1/blog/public/getHugeData', {}).subscribe(function (data) {
            _this.rowData = data['data'];
            _this.display = true;
        });
        this.arr = [{
                id: 1,
                tm: "02:01:01",
                quantity: 10
            },
            {
                id: 1,
                tm: "02:01:01",
                quantity: 10
            },
            {
                id: 1,
                tm: "02:01:02",
                quantity: 10
            },
            {
                id: 1,
                tm: "02:01:03",
                quantity: 5
            },
            {
                id: 1,
                tm: "02:01:03",
                quantity: 5
            }
        ];
        var uniueArr = [];
        var volumeArray = [];
        for (var c = 0; c < this.arr.length; c++) {
            if (uniueArr.indexOf(this.arr[c].tm) == -1) {
                var quat = this.arr[c].quantity;
                uniueArr.push(this.arr[c].tm);
            }
            else {
                quat = quat + this.arr[c].quantity;
                volumeArray.push(quat);
            }
        }
        console.log(uniueArr);
        console.log(volumeArray);
    };
    AgGridRndComponent.prototype.addMessage = function () {
        var detail = (this.index++).toString() + ': PrimeNG rocks';
        this.messages.push({ severity: 'info', summary: 'Info Message', detail: detail });
    };
    AgGridRndComponent.prototype.getHeight = function () {
    };
    AgGridRndComponent.prototype.onFirstDataRendered = function (params) {
        params.api.sizeColumnsToFit();
    };
    AgGridRndComponent.prototype.fillLarge = function () {
        this.setWidthAndHeight('100%', '100%');
    };
    AgGridRndComponent.prototype.fillMedium = function () {
        this.setWidthAndHeight('80%', '60%');
    };
    AgGridRndComponent.prototype.fillExact = function () {
        this.setWidthAndHeight('400px', '400px');
    };
    AgGridRndComponent.prototype.setWidthAndHeight = function (width, height) {
        this.style = {
            marginTop: '0px',
            width: width,
            height: height,
            boxSizing: 'border-box'
        };
    };
    AgGridRndComponent.prototype.ngAfterViewChecked = function () {
    };
    AgGridRndComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'my-app',
            template: "\n\n       \n        \n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AgGridRndComponent);
    return AgGridRndComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div id=\"main\">\r\n    {{appservice.idleState}}\r\n    <!-- <div class=\"container\">\r\n            {{message$ | async }}\r\n            <div *ngIf=\"post | async as a\">\r\n                {{a.text}}\r\n            </div>\r\n            <input type=\"button\" value='Hindi' (click)=\"hindiMessage();\">\r\n            <input type=\"button\" value='Marathi' (click)=\"marathiMessage();\">\r\n            <input type=\"button\" value='EDIT Text' (click)=\"EditText();\">\r\n    </div>\r\n \r\n</div> -->\r\n\r\n<router-outlet ></router-outlet>\r\n<confirmation-box></confirmation-box>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _post_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post.action */ "./src/app/post.action.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AppComponent = /** @class */ (function () {
    function AppComponent(store, appservice, router) {
        this.store = store;
        this.appservice = appservice;
        this.router = router;
        this.title = 'serviceWorker1';
        this.counter = 0;
        this.message$ = this.store.select('message');
        this.post$ = this.store.select('post');
        // this.router.navigate(['candlestick']);
        //  setInterval(()=>{
        //   this.counter=this.counter+1;
        //   if(this.counter <10){
        //     console.log("watching start "+this.counter);
        //    //idle.setAutoResume(5);
        //    this.appservice.idle.stop();
        //   }
        //   else{
        //     console.log("watching start");
        //     console.log(this.appservice.idle.isIdling());
        //    // if( this.counter==10){
        //       if(!this.appservice.idle.isRunning() && !this.appservice.idle.isIdling()){
        //         this.appservice.reset();
        //       }
        //       //clearInterval(1);
        //    // }
        //   }
        // },1000)
        // if(!this.appservice.idle.isRunning() && !this.appservice.idle.isIdling()){
        //   this.appservice.idle.watch();
        // }
    }
    AppComponent.prototype.hindiMessage = function () {
        this.store.dispatch({ type: 'Hindi' });
    };
    AppComponent.prototype.marathiMessage = function () {
        this.store.dispatch({ type: 'Marathi' });
    };
    AppComponent.prototype.EditText = function () {
        this.store.dispatch(new _post_action__WEBPACK_IMPORTED_MODULE_3__["EditText"]('aa'));
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constant.ts":
/*!*********************************!*\
  !*** ./src/app/app.constant.ts ***!
  \*********************************/
/*! exports provided: CONSTANT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTANT", function() { return CONSTANT; });
var CONSTANT = {
    GRID_SIZE: 10,
    ColumnDefs: {
        EmployeeLog: [
            { headerName: 'Sr No', field: 'id', width: 250, hide: false, suppressFilter: true },
            { headerName: 'P Value', field: 'p', width: 250, hide: false, suppressFilter: true },
            { headerName: 'Emloyee Name', field: 'empname', width: 250, hide: false, suppressFilter: true, headerClass: 'cell-wrap-text' },
            { headerName: 'Employee City', field: 'empcity', width: 250, hide: false, suppressFilter: true },
        ]
    }
};


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _redux_auth_auth_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/auth/auth.module */ "./src/app/redux/auth/auth.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _app_redux_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/redux/reducers */ "./src/app/redux/reducers/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _redux_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./redux/dashboard/dashboard.module */ "./src/app/redux/dashboard/dashboard.module.ts");
/* harmony import */ var _fullscreen__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fullscreen */ "./src/app/fullscreen.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _screenfull_dir__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./screenfull-dir */ "./src/app/screenfull-dir.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _primecomponent_inputgroup_ipgroup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./primecomponent/inputgroup/ipgroup */ "./src/app/primecomponent/inputgroup/ipgroup.ts");
/* harmony import */ var _ag_grid_rnd__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ag-grid-rnd */ "./src/app/ag-grid-rnd.ts");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/radiobutton.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_radiobutton__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _ag_grid_callapi__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ag-grid-callapi */ "./src/app/ag-grid-callapi.ts");
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angular-resizable-element */ "./node_modules/angular-resizable-element/fesm5/angular-resizable-element.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
/* harmony import */ var _charts_charts__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./charts/charts */ "./src/app/charts/charts.ts");
/* harmony import */ var _charts_scatter__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./charts/scatter */ "./src/app/charts/scatter.ts");
/* harmony import */ var _charts_barchart1__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./charts/barchart1 */ "./src/app/charts/barchart1.ts");
/* harmony import */ var _market_repay_market_repay__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./market-repay/market-repay */ "./src/app/market-repay/market-repay.ts");
/* harmony import */ var _charts_treeChart__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./charts/treeChart */ "./src/app/charts/treeChart.ts");
/* harmony import */ var _charts_candlestick__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./charts/candlestick */ "./src/app/charts/candlestick.ts");
/* harmony import */ var _charts_parallel__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./charts/parallel */ "./src/app/charts/parallel.ts");
/* harmony import */ var _directive_errorMessage__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./directive/errorMessage */ "./src/app/directive/errorMessage.ts");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/growl */ "./node_modules/primeng/growl.js");
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(primeng_growl__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _market_repay_marketrepay_shailesh__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./market-repay/marketrepay-shailesh */ "./src/app/market-repay/marketrepay-shailesh.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ng-idle/keepalive */ "./node_modules/@ng-idle/keepalive/index.js");
/* harmony import */ var _generic_confirmation_confirmation__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./generic/confirmation/confirmation */ "./src/app/generic/confirmation/confirmation.ts");
/* harmony import */ var _generic_confirmation_confirmation_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./generic/confirmation/confirmation.service */ "./src/app/generic/confirmation/confirmation.service.ts");








// import {SimpleReducer} from './simple.reducer';



// import {LoginComponent} from './redux/login/login.component';
// import {DashboardComponent} from './redux/dashboard/dashboard.component';
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _charts_charts__WEBPACK_IMPORTED_MODULE_28__["ChartComponent"], _fullscreen__WEBPACK_IMPORTED_MODULE_13__["FullscreenComponent"], _screenfull_dir__WEBPACK_IMPORTED_MODULE_15__["ToggleFullscreenDirective"], _ag_grid_rnd__WEBPACK_IMPORTED_MODULE_18__["AgGridRndComponent"], _charts_treeChart__WEBPACK_IMPORTED_MODULE_32__["TreeChart1Component"],
                _primecomponent_inputgroup_ipgroup__WEBPACK_IMPORTED_MODULE_17__["InputGroupComponent"], _charts_candlestick__WEBPACK_IMPORTED_MODULE_33__["CandlestickComponent"], _generic_confirmation_confirmation__WEBPACK_IMPORTED_MODULE_41__["ConfirmationBoxComponent"], _market_repay_marketrepay_shailesh__WEBPACK_IMPORTED_MODULE_38__["MarketRepayShaileshComponent"], _ag_grid_callapi__WEBPACK_IMPORTED_MODULE_25__["AgGridRndAPiComponent"], _charts_scatter__WEBPACK_IMPORTED_MODULE_29__["ScatterChartComponent"], _charts_barchart1__WEBPACK_IMPORTED_MODULE_30__["BarChart1Component"], _charts_parallel__WEBPACK_IMPORTED_MODULE_34__["ParallelchartComponent"], _market_repay_market_repay__WEBPACK_IMPORTED_MODULE_31__["MarketRepayComponent"], _directive_errorMessage__WEBPACK_IMPORTED_MODULE_35__["ErrorMessageDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _redux_auth_auth_module__WEBPACK_IMPORTED_MODULE_3__["AuthModule"], _redux_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_12__["DashboardModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_27__["NgxEchartsModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_36__["TooltipModule"], primeng_growl__WEBPACK_IMPORTED_MODULE_37__["GrowlModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_16__["AgGridModule"].withComponents([]),
                _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production ? _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('/ngsw-worker.js') : []
                // StoreModule.forRoot({message:SimpleReducer})
                ,
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_app_redux_reducers__WEBPACK_IMPORTED_MODULE_9__["reducers"], { metaReducers: _app_redux_reducers__WEBPACK_IMPORTED_MODULE_9__["metaReducers"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([]), _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_40__["NgIdleKeepaliveModule"].forRoot(),
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_19__["CheckboxModule"], angular_resizable_element__WEBPACK_IMPORTED_MODULE_26__["ResizableModule"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_20__["RadioButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_21__["DialogModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"], primeng_button__WEBPACK_IMPORTED_MODULE_23__["ButtonModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_24__["AngularFontAwesomeModule"]
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_39__["AppService"], _generic_confirmation_confirmation_service__WEBPACK_IMPORTED_MODULE_42__["ConfirmationService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _redux_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/login/login.component */ "./src/app/redux/login/login.component.ts");
/* harmony import */ var _redux_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux/dashboard/dashboard.component */ "./src/app/redux/dashboard/dashboard.component.ts");
/* harmony import */ var _fullscreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fullscreen */ "./src/app/fullscreen.ts");
/* harmony import */ var _ag_grid_rnd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ag-grid-rnd */ "./src/app/ag-grid-rnd.ts");
/* harmony import */ var _primecomponent_inputgroup_ipgroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./primecomponent/inputgroup/ipgroup */ "./src/app/primecomponent/inputgroup/ipgroup.ts");
/* harmony import */ var _ag_grid_callapi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ag-grid-callapi */ "./src/app/ag-grid-callapi.ts");
/* harmony import */ var _charts_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./charts/charts */ "./src/app/charts/charts.ts");
/* harmony import */ var _charts_scatter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./charts/scatter */ "./src/app/charts/scatter.ts");
/* harmony import */ var _charts_barchart1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./charts/barchart1 */ "./src/app/charts/barchart1.ts");
/* harmony import */ var _market_repay_market_repay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./market-repay/market-repay */ "./src/app/market-repay/market-repay.ts");
/* harmony import */ var _charts_treeChart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./charts/treeChart */ "./src/app/charts/treeChart.ts");
/* harmony import */ var _charts_candlestick__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./charts/candlestick */ "./src/app/charts/candlestick.ts");
/* harmony import */ var _charts_parallel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./charts/parallel */ "./src/app/charts/parallel.ts");
/* harmony import */ var _market_repay_marketrepay_shailesh__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./market-repay/marketrepay-shailesh */ "./src/app/market-repay/marketrepay-shailesh.ts");

















var routes = [
    { path: 'login', component: _redux_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'dashboard', component: _redux_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'fullscreen', component: _fullscreen__WEBPACK_IMPORTED_MODULE_5__["FullscreenComponent"] },
    { path: "aggrid", component: _ag_grid_rnd__WEBPACK_IMPORTED_MODULE_6__["AgGridRndComponent"] },
    { path: "aggridapi", component: _ag_grid_callapi__WEBPACK_IMPORTED_MODULE_8__["AgGridRndAPiComponent"] },
    { path: 'inputgroup', component: _primecomponent_inputgroup_ipgroup__WEBPACK_IMPORTED_MODULE_7__["InputGroupComponent"] },
    { path: 'chart', component: _charts_charts__WEBPACK_IMPORTED_MODULE_9__["ChartComponent"] },
    { path: 'scatter', component: _charts_scatter__WEBPACK_IMPORTED_MODULE_10__["ScatterChartComponent"] },
    { path: 'barchart1', component: _charts_barchart1__WEBPACK_IMPORTED_MODULE_11__["BarChart1Component"] },
    { path: 'market-repay', component: _market_repay_market_repay__WEBPACK_IMPORTED_MODULE_12__["MarketRepayComponent"] },
    { path: 'treechart', component: _charts_treeChart__WEBPACK_IMPORTED_MODULE_13__["TreeChart1Component"] },
    { path: 'candlestick', component: _charts_candlestick__WEBPACK_IMPORTED_MODULE_14__["CandlestickComponent"] },
    { path: 'parallel', component: _charts_parallel__WEBPACK_IMPORTED_MODULE_15__["ParallelchartComponent"] },
    { path: 'marketrepayshailesh', component: _market_repay_marketrepay_shailesh__WEBPACK_IMPORTED_MODULE_16__["MarketRepayShaileshComponent"] },
    { path: '**', redirectTo: 'login' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_idle_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-idle/core */ "./node_modules/@ng-idle/core/index.js");
/* harmony import */ var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-idle/keepalive */ "./node_modules/@ng-idle/keepalive/index.js");
/* harmony import */ var _app_generic_confirmation_confirmation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/generic/confirmation/confirmation.service */ "./src/app/generic/confirmation/confirmation.service.ts");





var AppService = /** @class */ (function () {
    function AppService(ref, idle, keepalive, ConfirmationSer) {
        var _this = this;
        this.ref = ref;
        this.idle = idle;
        this.keepalive = keepalive;
        this.ConfirmationSer = ConfirmationSer;
        this.idleState = 'Not started.';
        this.timedOut = false;
        this.lastPing = null;
        this.counter = 0;
        idle.setIdle(5);
        idle.setTimeout(3);
        idle.setInterrupts(_ng_idle_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_INTERRUPTSOURCES"]);
        idle.onIdleEnd.subscribe(function () {
            _this.idleState = 'No longer idle.';
            _this.ConfirmationSer.content = '';
            _this.ConfirmationSer.display = false;
            _this.ref.tick();
        });
        idle.onTimeout.subscribe(function () {
            _this.idleState = 'Timed out!';
            _this.timedOut = true;
            _this.ConfirmationSer.content = '';
            _this.ConfirmationSer.display = false;
        });
        idle.onIdleStart.subscribe(function () { return _this.idleState = 'You\'ve gone idle!'; });
        idle.onTimeoutWarning.subscribe(function (countdown) {
            _this.idleState = 'You will time out in ' + countdown + ' seconds!';
            console.log(_this.idleState);
            if (idle.isIdling()) {
                _this.ConfirmationSer.content = _this.idleState;
                _this.ConfirmationSer.display = true;
            }
            else {
                _this.ConfirmationSer.content = '';
                _this.ConfirmationSer.display = false;
            }
        });
        // sets the ping interval to 15 seconds
        keepalive.interval(5);
        keepalive.onPing.subscribe(function () { return _this.lastPing = new Date(); });
        //this.start();
        console.log(this.idle.getInterrupts());
    }
    AppService.prototype.start = function () {
        if (!this.idle.isRunning() && !this.idle.isIdling()) {
            console.log("wathcing start");
            this.idle.watch();
        }
    };
    AppService.prototype.stop = function () {
        console.log("inte");
        this.idle.interrupt();
        console.log(this.idle.isRunning());
        this.idle.stop();
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _ng_idle_core__WEBPACK_IMPORTED_MODULE_2__["Idle"], _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_3__["Keepalive"], _app_generic_confirmation_confirmation_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/charts/barchart1.ts":
/*!*************************************!*\
  !*** ./src/app/charts/barchart1.ts ***!
  \*************************************/
/*! exports provided: BarChart1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChart1Component", function() { return BarChart1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BarChart1Component = /** @class */ (function () {
    function BarChart1Component(http) {
        this.http = http;
    }
    BarChart1Component.prototype.ngAfterViewChecked = function () {
        var chart = document.querySelector("#chart1");
        // this.myChart = echarts.init(chart);
    };
    BarChart1Component.prototype.ngOnInit = function () {
        var xAxisData = [];
        var data1 = [10, 30, 23, 45, 40];
        var data2 = [10, 30, 23, 45, 40];
        console.log(xAxisData);
        console.log(data1);
        console.log(data2);
        this.options = {
            legend: {
                data: ['bar', 'bar2'],
                align: 'left'
            },
            tooltip: {
                trigger: "item",
            },
            xAxis: {
                data: xAxisData,
                silent: false,
                splitLine: {
                    show: false
                }
            },
            yAxis: {},
            series: [{
                    name: 'bar',
                    type: 'bar',
                    data: data1,
                    animationDelay: function (idx) {
                        return idx * 10;
                    },
                    markPoint: {
                        data: [
                            { name: '', value: 2, xAxis: 1, yAxis: 30 }
                        ],
                        tooltip: {
                            trigger: "item",
                            formatter: function (param) {
                                return "<span class='tooltip'>PANKAJ DURVE DURVE SLSPPSS[[[S[</span>";
                            },
                            textStyle: {
                                width: "20%",
                                color: 'white'
                            }
                        }
                    },
                }, {
                    name: 'bar2',
                    type: 'bar',
                    data: data2,
                    animationDelay: function (idx) {
                        return idx * 10 + 100;
                    }
                }],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        };
        this.myChart.setOption(this.options);
        this.myChart.on('rendered', function () {
        });
    };
    BarChart1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "my-app",
            template: "\n \n      \n    <div class=\"card card-accent-info\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Some ECharts event-emitters</h4>\n      <div class=\"mt-4\">\n      \n      <div id=\"chart\" style=\"width: 500px; height: 350px;align:center\"></div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BarChart1Component);
    return BarChart1Component;
}());



/***/ }),

/***/ "./src/app/charts/candlestick.ts":
/*!***************************************!*\
  !*** ./src/app/charts/candlestick.ts ***!
  \***************************************/
/*! exports provided: CandlestickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandlestickComponent", function() { return CandlestickComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CandlestickComponent = /** @class */ (function () {
    function CandlestickComponent(http) {
        this.http = http;
    }
    CandlestickComponent.prototype.ngAfterViewChecked = function () {
        // setInterval(()=>{
        //     $(".ag-body-viewport.ag-layout-normal").scrollTop(40); 
        // },1000)
    };
    CandlestickComponent.prototype.ngOnInit = function () {
        var upColor = 'green';
        var upBorderColor = 'grey';
        var downColor = 'red';
        var downBorderColor = 'yellow';
        //open)，收盘(close)，最低(lowest)，最高(highest)
        this.data0 = this.splitData([
            ['2013/1/24', 2320.26, 2320.26, 2287.3, 2362.94],
            ['2013/1/25', 2300, 2500.3, 2288.26, 2308.38],
            ['2013/1/28', 2295.35, 2291.3, 2295.35, 2346.92],
            ['2013/1/29', 2347.22, 2358.98, 2337.35, 2363.8],
            ['2013/1/30', 2364.75, 2372.48, 2347.89, 2370.89],
        ]);
        console.log(this.data0);
        this.options = {
            title: {
                text: 'PANKAJ DURVE',
                left: 10
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            legend: {
                data: ['K', 'MA5', 'MA10', 'MA20', 'MA30']
            },
            grid: {
                left: '10%',
                right: '10%',
                bottom: '15%'
            },
            xAxis: {
                type: 'category',
                data: this.data0.categoryData,
                scale: true,
                boundaryGap: false,
                axisLine: { onZero: false },
                splitLine: { show: false },
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax'
            },
            yAxis: {
                scale: true,
                splitArea: {
                    show: true
                }
            },
            dataZoom: [
                {
                    type: 'inside',
                    start: 50,
                    end: 100
                },
                {
                    show: true,
                    type: 'slider',
                    y: '90%',
                    start: 50,
                    end: 100
                }
            ],
            series: [
                {
                    name: '日K',
                    type: 'candlestick',
                    data: this.data0.values,
                    itemStyle: {
                        normal: {
                            color: upColor,
                            color0: downColor,
                            borderColor: upBorderColor,
                            borderColor0: downBorderColor
                        }
                    },
                    markPoint: {
                        label: {
                            normal: {
                                formatter: function (param) {
                                    return param != null ? Math.round(param.value) : 'pankaj';
                                }
                            }
                        },
                        data: [
                            {
                                name: 'DIPTI',
                                coord: ['2013/5/31', 2300],
                                value: 2300,
                                itemStyle: {
                                    normal: { color: 'pink' }
                                }
                            },
                            {
                                name: 'highest value',
                                type: 'max',
                                valueDim: 'highest'
                            },
                            {
                                name: 'lowest value',
                                type: 'min',
                                valueDim: 'lowest'
                            },
                            {
                                name: 'average value on close',
                                type: 'average',
                                valueDim: 'close'
                            }
                        ],
                        tooltip: {
                            formatter: function (param) {
                                return param.name + '<br>' + (param.data.coord || '');
                            }
                        }
                    },
                    markLine: {
                        symbol: ['none', 'none'],
                        data: [
                            [
                                {
                                    name: 'from lowest to highest',
                                    type: 'min',
                                    valueDim: 'lowest',
                                    symbol: 'roundRect',
                                    symbolSize: 10,
                                    label: {
                                        normal: { show: false },
                                        emphasis: { show: false }
                                    }
                                },
                                {
                                    type: 'max',
                                    valueDim: 'highest',
                                    symbol: 'circle',
                                    symbolSize: 20,
                                    label: {
                                        normal: { show: false },
                                        emphasis: { show: false }
                                    }
                                }
                            ],
                            {
                                name: 'min line on close',
                                type: 'min',
                                valueDim: 'close'
                            },
                            {
                                name: 'max line on close',
                                type: 'max',
                                valueDim: 'close'
                            }
                        ]
                    }
                },
            ]
        };
    };
    CandlestickComponent.prototype.splitData = function (rawData) {
        var categoryData = [];
        var values = [];
        for (var i = 0; i < rawData.length; i++) {
            categoryData.push(rawData[i].splice(0, 1)[0]);
            values.push(rawData[i]);
        }
        console.log(values);
        return {
            categoryData: categoryData,
            values: values
        };
    };
    CandlestickComponent.prototype.calculateMA = function (dayCount) {
        var result = [];
        for (var i = 0, len = this.data0.values.length; i < len; i++) {
            if (i < dayCount) {
                result.push('-');
                continue;
            }
            var sum = 0;
            for (var j = 0; j < dayCount; j++) {
                sum += this.data0.values[i - j][1];
            }
            result.push(sum / dayCount);
        }
        console.log(result);
        return result;
    };
    CandlestickComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "my-app",
            template: "\n \n      \n    <div class=\"card card-accent-info\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Some ECharts event-emitters</h4>\n      <div class=\"mt-4\">\n        \n          \n      <div echarts [options]=\"options\" class=\"demo-chart\"></div>\n   \n         \n          \n      </div>\n    </div>\n  </div>\n\n\n\n\n\n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CandlestickComponent);
    return CandlestickComponent;
}());



/***/ }),

/***/ "./src/app/charts/charts.ts":
/*!**********************************!*\
  !*** ./src/app/charts/charts.ts ***!
  \**********************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_3__);




var ChartComponent = /** @class */ (function () {
    function ChartComponent(http) {
        this.http = http;
    }
    ChartComponent.prototype.ngAfterViewChecked = function () {
        // setInterval(()=>{
        //     $(".ag-body-viewport.ag-layout-normal").scrollTop(40); 
        // },1000)
    };
    ChartComponent.prototype.ngOnInit = function () {
        var dataAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'];
        var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
        var yMax = 500;
        var dataShadow = [];
        for (var i = 0; i < data.length; i++) {
            dataShadow.push(yMax);
        }
        this.options = {
            title: {
                text: 'Check Console for Events'
            },
            grid: {
                left: "3%",
                right: "2%",
                show: true,
                borderColor: 'rgba(255, 99, 71, 0.5)'
            },
            xAxis: {
                data: dataAxis,
                axisLabel: {
                    inside: true,
                    textStyle: {
                        color: 'rgba(128, 128, 128, 0.5)'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                z: 10
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#999'
                    }
                }
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: [
                {
                    type: 'bar',
                    itemStyle: {
                        normal: { color: 'rgba(0,0,0,0.05)' }
                    },
                    barGap: '-100%',
                    barCategoryGap: '40%',
                    data: dataShadow,
                    animation: false
                },
                {
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: new echarts__WEBPACK_IMPORTED_MODULE_3__["graphic"].LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#83bff6' },
                                { offset: 0.5, color: '#188df0' },
                                { offset: 1, color: '#188df0' }
                            ])
                        },
                        emphasis: {
                            color: new echarts__WEBPACK_IMPORTED_MODULE_3__["graphic"].LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#2378f7' },
                                { offset: 0.7, color: '#2378f7' },
                                { offset: 1, color: '#83bff6' }
                            ])
                        }
                    },
                    data: data
                }
            ]
        };
    };
    ChartComponent.prototype.onChartEvent = function (event, type) {
        console.log('chart event:', type, event);
    };
    ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "my-app",
            template: "\n \n      \n    <div class=\"card card-accent-info\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Some ECharts event-emitters</h4>\n      <div class=\"mt-4\">\n        \n          \n            <div echarts [options]=\"options\" class=\"demo-chart\"\n              (chartInit)=\"onChartEvent($event, 'chartInit')\"\n              (chartClick)=\"onChartEvent($event, 'chartClick')\"\n              (chartDblClick)=\"onChartEvent($event, 'chartDblClick')\"\n              (chartMouseDown)=\"onChartEvent($event, 'chartMouseDown')\"\n              (chartMouseUp)=\"onChartEvent($event, 'chartMouseUp')\"\n              (chartMouseOver)=\"onChartEvent($event, 'chartMouseOver')\"\n              (chartMouseOut)=\"onChartEvent($event, 'chartMouseOut')\"\n              (chartGlobalOut)=\"onChartEvent($event, 'chartGlobalOut')\"\n              (chartContextMenu)=\"onChartEvent($event, 'chartContextMenu')\"\n              (chartDataZoom)=\"onChartEvent($event, 'chartDataZoom')\"\n            ></div>\n         \n          \n      </div>\n    </div>\n  </div>\n\n\n\n\n\n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/charts/parallel.ts":
/*!************************************!*\
  !*** ./src/app/charts/parallel.ts ***!
  \************************************/
/*! exports provided: ParallelchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallelchartComponent", function() { return ParallelchartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ParallelchartComponent = /** @class */ (function () {
    function ParallelchartComponent(http) {
        this.http = http;
    }
    ParallelchartComponent.prototype.ngAfterViewChecked = function () {
        // setInterval(()=>{
        //     $(".ag-body-viewport.ag-layout-normal").scrollTop(40); 
        // },1000)
    };
    ParallelchartComponent.prototype.ngOnInit = function () {
        var dataBJ = [
            [1, 55, 9, 56, 0.46, 18, 6, "A"],
            [2, 25, 11, 21, 0.65, 34, 9, "B"],
        ];
        var dataGZ = [
            [1, 26, 37, 27, 1.163, 27, 13, "1"],
            [2, 85, 62, 71, 1.195, 60, 8, "2"],
        ];
        var dataSH = [];
        // [1,91,45,125,0.82,34,23,"PAN"],
        // [2,65,27,78,0.86,45,29,"KAJ"]];
        var schema = [
            { name: 'date', index: 0, text: 'JABN' },
            { name: 'AQIindex', index: 1, text: 'FEB' },
            { name: 'PM25', index: 2, text: 'MAR' },
            { name: 'PM10', index: 3, text: 'APR' },
            { name: 'CO', index: 4, text: 'MAY' },
            { name: 'NO2', index: 5, text: 'JUN' },
            { name: 'SO2', index: 6, text: 'JUL' },
            { name: '等级', index: 7, text: 'AUG' }
        ];
        var lineStyle = {
            normal: {
                width: 1,
                opacity: 0.5
            }
        };
        this.options = {
            color: [
                '#c23531', '#91c7ae', '#dd8668'
            ],
            legend: {
                top: 10,
                data: ['JAN', 'FEB', 'MAR'],
                itemGap: 20
            },
            parallelAxis: [
                { dim: 0, name: schema[0].text, inverse: true, max: 31, nameLocation: 'start' },
                { dim: 1, name: schema[1].text },
                { dim: 2, name: schema[2].text },
                { dim: 3, name: schema[3].text },
                { dim: 4, name: schema[4].text },
                { dim: 5, name: schema[5].text },
                { dim: 6, name: schema[6].text },
                { dim: 7, name: schema[7].text,
                    type: 'category', data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染'] }
            ],
            parallel: {
                left: '5%',
                right: '13%',
                bottom: '10%',
                top: '20%',
                parallelAxisDefault: {
                    type: 'value',
                    name: 'AQI指数',
                    nameLocation: 'end',
                    nameGap: 20,
                    nameTextStyle: {
                        fontSize: 12
                    }
                }
            },
            series: [
                {
                    name: '北京',
                    type: 'parallel',
                    lineStyle: lineStyle,
                    data: dataBJ
                },
                {
                    name: '上海',
                    type: 'parallel',
                    lineStyle: lineStyle,
                    data: dataSH
                },
                {
                    name: '广州',
                    type: 'parallel',
                    lineStyle: lineStyle,
                    data: dataGZ
                }
            ]
        };
    };
    ParallelchartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "my-app",
            template: "\n \n      \n    <div class=\"card card-accent-info\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Some ECharts event-emitters</h4>\n      <div class=\"mt-4\">\n        \n          \n      <div echarts [options]=\"options\" class=\"demo-chart\"></div>\n   \n         \n          \n      </div>\n    </div>\n  </div>\n\n\n\n\n\n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ParallelchartComponent);
    return ParallelchartComponent;
}());



/***/ }),

/***/ "./src/app/charts/scatter.ts":
/*!***********************************!*\
  !*** ./src/app/charts/scatter.ts ***!
  \***********************************/
/*! exports provided: ScatterChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScatterChartComponent", function() { return ScatterChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ScatterChartComponent = /** @class */ (function () {
    function ScatterChartComponent(http) {
        this.http = http;
        this.options = [];
    }
    ScatterChartComponent.prototype.ngAfterViewChecked = function () {
        // specify chart configuration item and data
        // use configuration item and data specified to show chart
    };
    ScatterChartComponent.prototype.onChartEvent = function (event, type) {
        console.log('chart event:', type, event);
    };
    ScatterChartComponent.prototype.ngOnInit = function () {
        this.draw();
    };
    ScatterChartComponent.prototype.draw = function () {
        var data1 = [];
        var data2 = [];
        var data3 = [];
        var random = function (max) {
            return (Math.random() * max).toFixed(3);
        };
        //for (var i = 0; i < 1; i++) {
        data1.push(['2', '0.9', '1']);
        data2.push(['3', '5', '1']);
        data3.push(['4', '8', '1']);
        //}
        console.log(data1);
        console.log(data2);
        console.log(data3);
        this.options = {
            animation: false,
            legend: {
                data: ['scatter', 'scatter2', 'scatter3']
            },
            tooltip: {},
            xAxis: {
                type: 'value',
                min: 'dataMin',
                max: 'dataMax',
                splitLine: {
                    show: true
                }
            },
            yAxis: {
                type: 'value',
                min: 'dataMin',
                max: 'dataMax',
                splitLine: {
                    show: true
                }
            },
            dataZoom: [
                {
                    type: 'slider',
                    show: true,
                    xAxisIndex: [0],
                    start: 1,
                    end: 35
                },
                {
                    type: 'slider',
                    show: true,
                    yAxisIndex: [0],
                    left: '93%',
                    start: 29,
                    end: 36
                },
                {
                    type: 'inside',
                    xAxisIndex: [0],
                    start: 1,
                    end: 35
                },
                {
                    type: 'inside',
                    yAxisIndex: [0],
                    start: 29,
                    end: 36
                }
            ],
            series: [
                {
                    name: 'scatter',
                    type: 'scatter',
                    itemStyle: {
                        normal: {
                            opacity: 0.8
                        }
                    },
                    symbolSize: function (val) {
                        return val[2] * 40;
                    },
                    data: data1
                },
                {
                    name: 'scatter2',
                    type: 'scatter',
                    itemStyle: {
                        normal: {
                            opacity: 0.8
                        }
                    },
                    symbolSize: function (val) {
                        return val[2] * 40;
                    },
                    data: data2
                },
                {
                    name: 'scatter3',
                    type: 'scatter',
                    itemStyle: {
                        normal: {
                            opacity: 0.8,
                        }
                    },
                    symbolSize: function (val) {
                        return val[2] * 40;
                    },
                    data: data3
                }
            ]
        };
    };
    ScatterChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "my-app",
            template: "\n    <div \n    class=\"mt-4\"\n    echarts [options]=\"options\"\n    style=\"width: 600px;height:400px;\"></div>\n      \n  \n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ScatterChartComponent);
    return ScatterChartComponent;
}());



/***/ }),

/***/ "./src/app/charts/treeChart.ts":
/*!*************************************!*\
  !*** ./src/app/charts/treeChart.ts ***!
  \*************************************/
/*! exports provided: TreeChart1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeChart1Component", function() { return TreeChart1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TreeChart1Component = /** @class */ (function () {
    function TreeChart1Component(http) {
        this.http = http;
        this.mergeData = null;
        this.options = TREE_OPTION;
    }
    TreeChart1Component.prototype.ngAfterViewChecked = function () {
        // setInterval(()=>{
        //     $(".ag-body-viewport.ag-layout-normal").scrollTop(40); 
        // },1000)
    };
    TreeChart1Component.prototype.ngOnInit = function () {
        TREE_OPTION.series[0].data = [TREE_DATA_1];
        TREE_OPTION.series[1].data = [TREE_DATA_2];
        this.mergeData = {
            series: TREE_OPTION.series
        };
    };
    TreeChart1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "my-app",
            template: "\n \n      \n    <div class=\"card card-accent-info\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Some ECharts event-emitters</h4>\n      <div class=\"mt-4\">\n        \n          \n      <div echarts [options]=\"options\" [merge]=\"mergeData\" style=\"height: 600px;\"></div>\n         \n          \n      </div>\n    </div>\n  </div>\n\n\n\n\n\n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TreeChart1Component);
    return TreeChart1Component;
}());

var TREE_OPTION = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    legend: {
        top: '2%',
        left: '3%',
        orient: 'vertical',
        data: [{
                name: 'tree1',
                icon: 'rectangle'
            },
            {
                name: 'tree2',
                icon: 'rectangle'
            }],
        borderColor: '#c23531'
    },
    series: [
        {
            type: 'tree',
            name: 'tree1',
            data: [],
            top: '5%',
            left: '7%',
            bottom: '2%',
            right: '60%',
            symbolSize: 7,
            label: {
                normal: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right'
                }
            },
            leaves: {
                label: {
                    normal: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                }
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
        },
        {
            type: 'tree',
            name: 'tree2',
            data: [],
            top: '20%',
            left: '60%',
            bottom: '22%',
            right: '18%',
            symbolSize: 7,
            label: {
                normal: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right'
                }
            },
            leaves: {
                label: {
                    normal: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                }
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
        }
    ]
};
var TREE_DATA_1 = {
    'name': 'flare',
    'children': [
        {
            'name': 'data',
            'children': [
                {
                    'name': 'converters',
                    'children': [
                        { 'name': 'Converters', 'value': 721 },
                        { 'name': 'DelimitedTextConverter', 'value': 4294 }
                    ]
                },
                {
                    'name': 'DataUtil',
                    'value': 3322
                }
            ]
        },
        {
            'name': 'display',
            'children': [
                { 'name': 'DirtySprite', 'value': 8833 },
                { 'name': 'LineSprite', 'value': 1732 },
                { 'name': 'RectSprite', 'value': 3623 }
            ]
        },
        {
            'name': 'flex',
            'children': [
                { 'name': 'FlareVis', 'value': 4116 }
            ]
        },
        {
            'name': 'query',
            'children': [
                { 'name': 'AggregateExpression', 'value': 1616 },
                { 'name': 'And', 'value': 1027 },
                { 'name': 'Arithmetic', 'value': 3891 },
                { 'name': 'Average', 'value': 891 },
                { 'name': 'BinaryExpression', 'value': 2893 },
                { 'name': 'Comparison', 'value': 5103 },
                { 'name': 'CompositeExpression', 'value': 3677 },
                { 'name': 'Count', 'value': 781 },
                { 'name': 'DateUtil', 'value': 4141 },
                { 'name': 'Distinct', 'value': 933 },
                { 'name': 'Expression', 'value': 5130 },
                { 'name': 'ExpressionIterator', 'value': 3617 },
                { 'name': 'Fn', 'value': 3240 },
                { 'name': 'If', 'value': 2732 },
                { 'name': 'IsA', 'value': 2039 },
                { 'name': 'Literal', 'value': 1214 },
                { 'name': 'Match', 'value': 3748 },
                { 'name': 'Maximum', 'value': 843 },
                {
                    'name': 'methods',
                    'children': [
                        { 'name': 'add', 'value': 593 },
                        { 'name': 'and', 'value': 330 },
                        { 'name': 'average', 'value': 287 },
                        { 'name': 'count', 'value': 277 },
                        { 'name': 'distinct', 'value': 292 },
                        { 'name': 'div', 'value': 595 },
                        { 'name': 'eq', 'value': 594 },
                        { 'name': 'fn', 'value': 460 },
                        { 'name': 'gt', 'value': 603 },
                        { 'name': 'gte', 'value': 625 },
                        { 'name': 'iff', 'value': 748 },
                        { 'name': 'isa', 'value': 461 },
                        { 'name': 'lt', 'value': 597 },
                        { 'name': 'lte', 'value': 619 },
                        { 'name': 'max', 'value': 283 },
                        { 'name': 'min', 'value': 283 },
                        { 'name': 'mod', 'value': 591 },
                        { 'name': 'mul', 'value': 603 },
                        { 'name': 'neq', 'value': 599 },
                        { 'name': 'not', 'value': 386 },
                        { 'name': 'or', 'value': 323 },
                        { 'name': 'orderby', 'value': 307 },
                        { 'name': 'range', 'value': 772 },
                        { 'name': 'select', 'value': 296 },
                        { 'name': 'stddev', 'value': 363 },
                        { 'name': 'sub', 'value': 600 },
                        { 'name': 'sum', 'value': 280 },
                        { 'name': 'update', 'value': 307 },
                        { 'name': 'variance', 'value': 335 },
                        { 'name': 'where', 'value': 299 },
                        { 'name': 'xor', 'value': 354 },
                        { 'name': '_', 'value': 264 }
                    ]
                },
                { 'name': 'Minimum', 'value': 843 },
                { 'name': 'Not', 'value': 1554 },
                { 'name': 'Or', 'value': 970 },
                { 'name': 'Query', 'value': 13896 },
                { 'name': 'Range', 'value': 1594 },
                { 'name': 'StringUtil', 'value': 4130 },
                { 'name': 'Sum', 'value': 791 },
                { 'name': 'Variable', 'value': 1124 },
                { 'name': 'Variance', 'value': 1876 },
                { 'name': 'Xor', 'value': 1101 }
            ]
        },
        {
            'name': 'scale',
            'children': [
                { 'name': 'IScaleMap', 'value': 2105 },
                { 'name': 'LinearScale', 'value': 1316 },
                { 'name': 'LogScale', 'value': 3151 },
                { 'name': 'OrdinalScale', 'value': 3770 },
                { 'name': 'QuantileScale', 'value': 2435 },
                { 'name': 'QuantitativeScale', 'value': 4839 },
                { 'name': 'RootScale', 'value': 1756 },
                { 'name': 'Scale', 'value': 4268 },
                { 'name': 'ScaleType', 'value': 1821 },
                { 'name': 'TimeScale', 'value': 5833 }
            ]
        }
    ]
};
var TREE_DATA_2 = {
    'name': 'flare',
    'children': [
        {
            'name': 'flex',
            'children': [
                { 'name': 'FlareVis', 'value': 4116 }
            ]
        },
        {
            'name': 'scale',
            'children': [
                { 'name': 'IScaleMap', 'value': 2105 },
                { 'name': 'LinearScale', 'value': 1316 },
                { 'name': 'LogScale', 'value': 3151 },
                { 'name': 'OrdinalScale', 'value': 3770 },
                { 'name': 'QuantileScale', 'value': 2435 },
                { 'name': 'QuantitativeScale', 'value': 4839 },
                { 'name': 'RootScale', 'value': 1756 },
                { 'name': 'Scale', 'value': 4268 },
                { 'name': 'ScaleType', 'value': 1821 },
                { 'name': 'TimeScale', 'value': 5833 }
            ]
        },
        {
            'name': 'display',
            'children': [
                { 'name': 'DirtySprite', 'value': 8833 }
            ]
        }
    ]
};


/***/ }),

/***/ "./src/app/directive/errorMessage.ts":
/*!*******************************************!*\
  !*** ./src/app/directive/errorMessage.ts ***!
  \*******************************************/
/*! exports provided: ErrorMessageDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageDirective", function() { return ErrorMessageDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorMessageDirective = /** @class */ (function () {
    function ErrorMessageDirective(elem, renderer) {
        this.elem = elem;
        this.renderer = renderer;
        this.appShadow = 'red';
    }
    ErrorMessageDirective.prototype.ngOnInit = function () {
        //this.renderer.setStyle(this.elem.nativeElement, 'background-color', this.appShadow);
        //this.elem.nativeElement.prepend( "<b>Hello </b>" );
        //this.elem.nativeElement.tooltip( "option", "content", "TOOLTIP CONTENT" );        
    };
    ErrorMessageDirective.prototype.ngAfterViewInit = function () {
        this.$matCard = this.renderer.createElement('DIV');
        this.$matCard.innerHTML = 'PANKAJ DURVE';
        var container = this.elem.nativeElement;
        var parent = this.elem.nativeElement.parentNode;
        var refChild = this.elem.nativeElement;
        this.renderer.createElement("DIV");
        this.renderer.insertBefore(parent, this.$matCard, refChild);
        //this.$matCard.setAttribute('class', 'tooltip');
        // this.elem.nativeElement.setAttribute('pTooltip', 'Please provide name');
        this.elem.nativeElement.setAttribute('data-tooltip', 'Please provide name');
        this.elem.nativeElement.setAttribute('rel', 'tooltip');
        console.log(this.elem.nativeElement.getBoundingClientRect());
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ErrorMessageDirective.prototype, "appShadow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ErrorMessageDirective.prototype, "appShadowX", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ErrorMessageDirective.prototype, "appShadowY", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ErrorMessageDirective.prototype, "appShadowBlur", void 0);
    ErrorMessageDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '.ng-invalid',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ErrorMessageDirective);
    return ErrorMessageDirective;
}());



/***/ }),

/***/ "./src/app/fullscreen.css":
/*!********************************!*\
  !*** ./src/app/fullscreen.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bGxzY3JlZW4uY3NzIn0= */"

/***/ }),

/***/ "./src/app/fullscreen.ts":
/*!*******************************!*\
  !*** ./src/app/fullscreen.ts ***!
  \*******************************/
/*! exports provided: FullscreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenComponent", function() { return FullscreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var FullscreenComponent = /** @class */ (function () {
    function FullscreenComponent(httpClient) {
        this.httpClient = httpClient;
        this.title = 'serviceWorker1';
        this.name = '';
    }
    FullscreenComponent.prototype.ngOnInit = function () {
    };
    FullscreenComponent.prototype.ngAfterViewInit = function () {
    };
    FullscreenComponent.prototype.full = function () {
        var _this = this;
        var myButton = document.getElementById("myButton");
        document.addEventListener("hello", function (event) {
        });
        // ...dispatch on elem!
        var event = new Event("hello", { bubbles: true }); // (2)
        myButton.dispatchEvent(event);
        if (screenfull__WEBPACK_IMPORTED_MODULE_2__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_2__["toggle"]();
        }
        this.httpClient.put("http://127.0.0.1:3000/customers/1", {
            "name": "NewCustomer001",
            "email": "newcustomer001@email.com",
            "tel": "0000252525"
        })
            .subscribe(function (data) {
            console.log("PUT Request is successful ", data);
        }, function (error) {
            console.log("Rrror", error);
            // if (screenfull.enabled) {
            //     screenfull.toggle();
            // }
            _this.name = 'pankaj';
            screenfull__WEBPACK_IMPORTED_MODULE_2__["exit"]();
            // $("#myButton").trigger("click");
        });
    };
    FullscreenComponent.prototype.clickEve = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_2__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_2__["toggle"]();
        }
    };
    FullscreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'full-screen',
            template: "<h1>Hello</h1><button   [name]=\"name\"  (click)=\"full();\">Full screen click</button>\n  <button  id=\"myButton\"   (click)=\"clickEve();\">Full screen window</button>\n\n  <video width=\"100%\" controls id=\"myvideo\">\n  <source src=\"rain.mp4\" type=\"video/mp4\">\n  <source src=\"rain.ogg\" type=\"video/ogg\">\n  Your browser does not support the video tag.\n</video>\n\n\n  ",
            styles: [__webpack_require__(/*! ./fullscreen.css */ "./src/app/fullscreen.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], FullscreenComponent);
    return FullscreenComponent;
}());



/***/ }),

/***/ "./src/app/generic/confirmation/confirmation.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/generic/confirmation/confirmation.service.ts ***!
  \**************************************************************/
/*! exports provided: ConfirmationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationService", function() { return ConfirmationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfirmationService = /** @class */ (function () {
    function ConfirmationService() {
        this.display = false;
    }
    ConfirmationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfirmationService);
    return ConfirmationService;
}());



/***/ }),

/***/ "./src/app/generic/confirmation/confirmation.ts":
/*!******************************************************!*\
  !*** ./src/app/generic/confirmation/confirmation.ts ***!
  \******************************************************/
/*! exports provided: ConfirmationBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationBoxComponent", function() { return ConfirmationBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _confirmation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirmation.service */ "./src/app/generic/confirmation/confirmation.service.ts");



var ConfirmationBoxComponent = /** @class */ (function () {
    function ConfirmationBoxComponent(ConfirmationSer) {
        this.ConfirmationSer = ConfirmationSer;
    }
    ConfirmationBoxComponent.prototype.ngOnInit = function () {
    };
    ConfirmationBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'confirmation-box',
            template: "<p-dialog [(visible)]=\"ConfirmationSer.display\" [focusOnShow]='true' [transitionOptions]=\"'0ms'\">\n  <p-header>\n      Header content here\n  </p-header>\n  {{ConfirmationSer.content}}\n  {{ConfirmationSer.display}}\n  <p-footer>\n      //buttons\n  </p-footer>\n</p-dialog>\n"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_confirmation_service__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]])
    ], ConfirmationBoxComponent);
    return ConfirmationBoxComponent;
}());



/***/ }),

/***/ "./src/app/market-repay/market-repay-shailesh.html":
/*!*********************************************************!*\
  !*** ./src/app/market-repay/market-repay-shailesh.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>shailesh market repay chart</h1>\r\n\r\n\r\n  <ag-grid-angular  style=\"width:1000px;height:250px\"\r\n  id=\"myGrid\"\r\n  class=\"ag-theme-fresh\" [gridOptions]=\"gridOptionsEmpLog\" (gridReady)=\"onGridReadyEmp($event)\"\r\n  [enableColResize]=\"true\" [navigateToNextCell]=\"navigateToNextCell\"  (rowClicked)=\"rowselect();\"\r\n  >\r\n  \r\n  </ag-grid-angular>\r\n  <div class=\"margin-top:10px\">\r\n    {{playPauseCounter}}\r\n      <button style=\"float:left\">\r\n        <span *ngIf=\"!playPauseButton\" (click)=\"pauseButtonClickEvent();\">Pause</span>  \r\n        <span *ngIf=\"playPauseButton\" [class.disablefwdbk]=\"!enBlPlayButton\"  (click)=\"playMarketReplayScocket();\">Play</span>  \r\n        </button>\r\n        <button  style=\"float:left\"    (click)=\"playMarketBackReplayScocket();\">Prev Play</button>\r\n        <button  style=\"float:left\" [class.disablefwdbk]=\"!playPauseButton || !upallowd\"    (click)=\"backwardButtonClickEvent();\">Prev</button>\r\n        <button   style=\"float:left\" [class.disablefwdbk]=\"!playPauseButton ||  !downallowd\"   (click)=\"forwardButtonClickEvent();\">Next</button>\r\n        <button   style=\"float:left\" [class.disablefwdbk]=\"!playPauseButton\" (click)=\"refreshButtonClickEvent();\">Refresh</button>\r\n     </div>\r\n"

/***/ }),

/***/ "./src/app/market-repay/market-repay.html":
/*!************************************************!*\
  !*** ./src/app/market-repay/market-repay.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome market repay chart</h1>\r\n\r\n<!-- <p-dialog [visible]=\"true\" [focusOnShow]='true' [transitionOptions]=\"'0ms'\" [closeOnEscape]=\"true\">\r\n  <p-header>\r\n      Header content here\r\n  </p-header>\r\n  <ag-grid-angular\r\n  #agGrid\r\n  style=\"width:1200px;height:500px\"\r\n  id=\"myGrid\"\r\n  class=\"ag-theme-dark\"\r\n  [gridOptions]=\"gridOptions\"\r\n  [rowData]=\"rowData\"\r\n  [navigateToNextCell]=\"navigateToNextCell\"\r\n  (gridReady)=\"onGridReady($event)\"\r\n></ag-grid-angular>\r\n<div class=\"margin-top:10px\">\r\n<button (click)=\"unwatch();\">\r\n<span *ngIf=\"is_playing\">Pause</span>  \r\n<span *ngIf=\"!is_playing\"  >Play</span>  \r\n</button>\r\n <br><br>\r\n<button (click)=\"watch();\">Prev</button>\r\n<button >Next</button>\r\n</div>\r\n\r\n  <p-footer>\r\n      //buttons\r\n  </p-footer>\r\n</p-dialog>\r\n -->\r\n <!-- <div class=\"container-fluid\">\r\n   <button (click)=\"saveAsExcelFile();\">Export</button>\r\n <div class=\"row\"> -->\r\n   <!-- <div class=\"col-md-4\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 nopadding\">\r\n                <ag-grid-angular        \r\n                id=\"fgrid\"\r\n                class=\"ag-theme-dark\"\r\n                [gridOptions]=\"gridOptions\"\r\n                [rowData]=\"rowData\"\r\n                [navigateToNextCell]=\"navigateToNextCell\"\r\n                (gridReady)=\"onGridReady($event)\"\r\n            ></ag-grid-angular>\r\n         </div>\r\n         <div class=\"col-md-6 nopadding\">\r\n            <ag-grid-angular        \r\n            id=\"fgrid\"\r\n            class=\"ag-theme-dark\"\r\n            [gridOptions]=\"gridOptions\"\r\n            [rowData]=\"rowData\"\r\n            [navigateToNextCell]=\"navigateToNextCell\"\r\n            (gridReady)=\"onGridReady($event)\"\r\n          ></ag-grid-angular>\r\n      \r\n        </div>\r\n   </div>\r\n   <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n          <ag-grid-angular        \r\n          id=\"fgrid\"\r\n          class=\"ag-theme-dark\"\r\n          [gridOptions]=\"gridOptions\"\r\n          [rowData]=\"rowData\"\r\n          [navigateToNextCell]=\"navigateToNextCell\"\r\n          (gridReady)=\"onGridReady($event)\"\r\n        ></ag-grid-angular>\r\n   </div>\r\n\r\n</div>   \r\n </div>\r\n <div class=\"col-md-4\">      \r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <ag-grid-angular        \r\n            id=\"secgrid\"\r\n            class=\"ag-theme-dark\"\r\n            [gridOptions]=\"gridOptions\"\r\n            [rowData]=\"rowData\"\r\n            [navigateToNextCell]=\"navigateToNextCell\"\r\n            (gridReady)=\"onGridReady($event)\"\r\n          ></ag-grid-angular>      \r\n        </div>\r\n\r\n      </div>    \r\n      <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n              <ag-grid-angular        \r\n              id=\"fourgrid\"\r\n              class=\"ag-theme-dark\"\r\n              [gridOptions]=\"gridOptions\"\r\n              [rowData]=\"rowData\"\r\n              [navigateToNextCell]=\"navigateToNextCell\"\r\n              (gridReady)=\"onGridReady($event)\"\r\n            ></ag-grid-angular>      \r\n          </div>\r\n      </div>\r\n          \r\n </div> -->\r\n<!-- <div class=\"col-md-2\">\r\n   \r\n        <ag-grid-angular        \r\n        id=\"thigrid\"\r\n        class=\"ag-theme-dark\"\r\n        [gridOptions]=\"gridOptions\"\r\n        [rowData]=\"rowData\"\r\n        [navigateToNextCell]=\"navigateToNextCell\"\r\n        (gridReady)=\"onGridReady($event)\"\r\n      ></ag-grid-angular>\r\n    \r\n</div> -->\r\n\r\n\r\n\r\n\r\n <!-- </div>\r\n </div> -->\r\n\r\n <div class=\"container-fluid fullscreen\">\r\n{{currentRowHeight}}\r\n  <div class=\"row\" style=\"height:50%\">\r\n       <div class=\"col-md-4 fullscreen\" >\r\n           <div class=\"row\" style=\"height:40%\">\r\n              <div class=\"col-md-12 fullscreen\">\r\n                  <div style=\"height:100%;\">\r\n                   <ag-grid-angular        \r\n                   id=\"gridheight\"\r\n                   class=\"ag-theme-dark\"\r\n                   [gridOptions]=\"gridOptions\"\r\n                   [rowData]=\"rowData\"      \r\n                   [navigateToNextCell]=\"navigateToNextCell\"\r\n                   (gridSizeChanged)=\"onGridSizeChanged($event)\"                          \r\n                   (gridReady)=\"onGridReady($event)\"\r\n                 ></ag-grid-angular>\r\n                 </div>\r\n               </div>       \r\n                                  \r\n           </div>\r\n           <div class=\"row\" style=\"height:25%\">\r\n              <div class=\"col-md-6 fullscreen\">\r\n                  <div style=\"height: 100%; overflow: auto;\">\r\n                      <table style=\"width:40%\">\r\n                          <tr  height=\"30\">\r\n                            <th>Firstname</th>\r\n                            <th>Lastname</th> \r\n                            <th>Age</th>\r\n                          </tr>\r\n                          <tr  height=\"30\">\r\n                            <td>Jill</td>\r\n                            <td>Smith</td>\r\n                            <td>50</td>\r\n                          </tr>\r\n                          <tr  height=\"30\"> \r\n                            <td>Eve</td>\r\n                            <td>Jackson</td>\r\n                            <td>94</td>\r\n                          </tr>\r\n                          <tr  height=\"30\">\r\n                            <td>John</td>\r\n                            <td>Doe</td>\r\n                            <td>80</td>\r\n                          </tr>\r\n                        </table>\r\n                        \r\n                   </div>\r\n                \r\n               </div>       \r\n                                  \r\n           </div>\r\n        \r\n\r\n       </div>\r\n   \r\n\r\n  </div>\r\n </div>"

/***/ }),

/***/ "./src/app/market-repay/market-repay.ts":
/*!**********************************************!*\
  !*** ./src/app/market-repay/market-repay.ts ***!
  \**********************************************/
/*! exports provided: MarketRepayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketRepayComponent", function() { return MarketRepayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);






var MarketRepayComponent = /** @class */ (function () {
    function MarketRepayComponent(http, appSer) {
        this.http = http;
        this.appSer = appSer;
        this.rowData = [];
        this.gridOptions = {};
        this.dataArray = [];
        this.p = 0;
        this.is_playing = true;
        this.data = [];
        this.GRID_LIMIT = 5;
        this.TOTAL_DATA_LIMIT = 10;
        this.currDataOffset = 0;
        this.limittodataFetch = 10;
        this.manualflag = false;
        this.minRowHeight = 25;
        this.columnDefs = [
            {
                headerName: "Price Range",
                width: 40,
                field: "prange",
                resizable: true,
            },
            {
                headerName: "buy",
                children: [
                    {
                        headerName: "From",
                        field: "id",
                        width: 40,
                        resizable: true
                    },
                    {
                        headerName: "To",
                        field: "id",
                        width: 40,
                        resizable: true
                    },
                    {
                        headerName: "Quantity",
                        field: "id",
                        width: 40,
                        resizable: true
                    }
                ]
            },
            {
                headerName: "Sell",
                children: [
                    {
                        headerName: "From",
                        field: "id",
                        width: 40,
                        resizable: true
                    },
                    {
                        headerName: "To",
                        field: "id",
                        width: 40,
                        resizable: true
                    },
                    {
                        headerName: "Quantity",
                        field: "id",
                        width: 40,
                        resizable: true
                    }
                ]
            }
        ];
        this.appSer.start();
        this.data = [{
                id: '101',
            }, {
                id: '102',
            }, {
                id: '1035',
            }, {
                id: '1031',
            }];
    }
    MarketRepayComponent.prototype.ngAfterViewChecked = function () {
        // setInterval(()=>{
        //     $(".ag-body-viewport.ag-layout-normal").scrollTop(40); 
        // },1000)
    };
    MarketRepayComponent.prototype.ngOnInit = function () {
        ;
        this.gridOptions = {
            columnDefs: this.columnDefs,
            enableFilter: true,
            suppressColumnVirtualisation: true,
            enableCellChangeFlash: true,
            suppressSetColumnStateEvents: true,
            rowSelection: "single",
            suppressScrollOnNewData: false
        };
        //this.callApi(0);
        // this.navigateToNextCell = this.navigateToNextCell.bind(this);
        var int = 0;
        var pRange = ["<10", "5%-10%", "10%-%15", "Beyond 15"];
        this.data.forEach(function (element, key) {
            console.log(key);
            element['prange'] = pRange[key];
        });
        this.rowData = this.data;
        console.log(this.rowData);
    };
    MarketRepayComponent.prototype.onGridReady = function (params) {
        var _this = this;
        //console.log("aa");
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        window.addEventListener("resize", function () {
            setTimeout(function () {
                //  params.api.sizeColumnsToFit();
                _this.resizeRow();
            });
        });
    };
    MarketRepayComponent.prototype.onGridReady1 = function (params) {
        var _this = this;
        //console.log("aa");
        this.gridApi1 = params.api;
        this.gridColumnApi1 = params.columnApi;
        window.addEventListener("resize", function () {
            setTimeout(function () {
                //params.api.sizeColumnsToFit();
                _this.resizeRow1();
            });
        });
    };
    MarketRepayComponent.prototype.callApi = function (offset) {
        var _this = this;
        this.is_loaded_data = false;
        var jsonObject = {
            lastSeqNmbr: 1,
            firstid: '',
            prevForwardFlag: 1,
            gotoStartSeqNmbr: 0
        };
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        var options = {
            headers: httpHeaders
        };
        //console.log(this.currDataOffset);
        this.http
            .post("http://localhost/ang1/blog/public/getHugeData", jsonObject, options)
            .subscribe(function (data) {
            _this.is_loaded_data = true;
            // if(this.manualflag==true){
            //if(data['data'].length > 0){
            _this.dataArray = data['resultData']['Activity'];
            var tmp = 1000;
            _this.currDataOffset = offset;
            var pRange = ["<10", "5%-10%", "10%-%15", "Beyond 15"];
            _this.dataArray.forEach(function (element, key) {
                element['rowid'] = key + 1;
                element['id'] = tmp;
                element['prange'] = pRange[key];
                ;
                tmp = tmp + 1000;
            });
            _this.rowData = _this.dataArray;
            _this.resizeRow();
            _this.resizeRow1();
            console.log(_this.rowData);
            //}
            // }
        });
    };
    MarketRepayComponent.prototype.unwatch = function () {
        this.appSer.stop();
    };
    MarketRepayComponent.prototype.watch = function () {
        this.appSer.start();
    };
    MarketRepayComponent.prototype.exportAsExcelFile = function (json, excelFileName) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].json_to_sheet(json);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var workbook1 = { Sheets: { 'data': worksheet }, SheetNames: ['data1'] };
        var excelBuffer;
        xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_append_sheet(workbook1, worksheet);
        xlsx__WEBPACK_IMPORTED_MODULE_4__["write"](workbook);
        this.saveAsExcelFile(excelBuffer, excelFileName);
    };
    MarketRepayComponent.prototype.saveAsExcelFile = function (buffer, fileName) {
        if (fileName === void 0) { fileName = 'pankaj'; }
        var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        var EXCEL_EXTENSION = '.xlsx';
        var data = new Blob([this.data], {
            type: EXCEL_TYPE
        });
        var today = new Date();
        var date = today.getFullYear() + '' + (today.getMonth() + 1) + '' + today.getDate() + '_';
        var time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
        var name = fileName + date + time;
        file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"](data);
    };
    MarketRepayComponent.prototype.onGridSizeChanged = function (params) {
        // var gridHeight =$(".ag-body-viewport").offsetHeight();
        console.log(params);
        this.resizeRow();
    };
    MarketRepayComponent.prototype.onGridSizeChanged1 = function (params) {
        // var gridHeight =$(".ag-body-viewport").offsetHeight();
        console.log(params);
        this.resizeRow1();
    };
    MarketRepayComponent.prototype.resizeRow = function () {
        var _this = this;
        setTimeout(function () {
            var gridHeight = _this.gridApi.gridCore.eGridDiv.children["0"].children["0"].children["0"].children[2].offsetHeight;
            var renderedRows = 4;
            if (renderedRows * _this.minRowHeight >= gridHeight) {
                if (_this.currentRowHeight !== _this.minRowHeight) {
                    _this.currentRowHeight = _this.minRowHeight;
                    _this.gridApi.resetRowHeights();
                }
            }
            else {
                _this.currentRowHeight = Math.floor(gridHeight / renderedRows);
                _this.gridApi.resetRowHeights();
            }
            _this.gridApi.forEachNode(function (rowNode) {
                if (rowNode.data) {
                    rowNode.setRowHeight(_this.currentRowHeight);
                }
            });
            _this.gridApi.onRowHeightChanged();
            //  this.gridApi.sizeColumnsToFit();
        }, 100);
    };
    MarketRepayComponent.prototype.resizeRow1 = function () {
        var _this = this;
        setTimeout(function () {
            var gridHeight = _this.gridApi1.gridCore.eGridDiv.children["0"].children["0"].children["0"].children[2].offsetHeight;
            var renderedRows = 4;
            if (renderedRows * _this.minRowHeight >= gridHeight) {
                if (_this.currentRowHeight !== _this.minRowHeight) {
                    _this.currentRowHeight = _this.minRowHeight;
                    _this.gridApi1.resetRowHeights();
                }
            }
            else {
                _this.currentRowHeight = Math.floor(gridHeight / renderedRows);
                _this.gridApi1.resetRowHeights();
            }
            _this.gridApi1.forEachNode(function (rowNode) {
                if (rowNode.data) {
                    rowNode.setRowHeight(_this.currentRowHeight);
                }
            });
            _this.gridApi1.onRowHeightChanged();
            //this.gridApi1.sizeColumnsToFit();
        }, 100);
    };
    MarketRepayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "market-repay",
            template: __webpack_require__(/*! ./market-repay.html */ "./src/app/market-repay/market-repay.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], MarketRepayComponent);
    return MarketRepayComponent;
}());



/***/ }),

/***/ "./src/app/market-repay/marketrepay-shailesh.ts":
/*!******************************************************!*\
  !*** ./src/app/market-repay/marketrepay-shailesh.ts ***!
  \******************************************************/
/*! exports provided: MarketRepayShaileshComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketRepayShaileshComponent", function() { return MarketRepayShaileshComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");





var MarketRepayShaileshComponent = /** @class */ (function () {
    function MarketRepayShaileshComponent(http, appservice) {
        this.http = http;
        this.appservice = appservice;
        this.activityArr = [];
        this.forwardBackWardFlag = false;
        this.activityPushArr = [];
        this.playPauseButton = false;
        this.prevForwardFlag = 1;
        this.playPauseCounter = 0;
        this.forwardManualFlag = true;
        this.gotoStartSeqNmbr = 0;
        this.isRefresh = false;
        this.enBlPlayButton = true;
        this.upallowd = false;
        this.downallowd = false;
    }
    MarketRepayShaileshComponent.prototype.ngAfterViewChecked = function () {
    };
    MarketRepayShaileshComponent.prototype.ngOnInit = function () {
        this.navigateToNextCell = this.navigateToNextCell.bind(this);
        this.gridOptionsEmpLog = {
            rowData: [],
            columnDefs: _app_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANT"].ColumnDefs.EmployeeLog,
            rowSelection: 'single',
            suppressRowHoverHighlight: true,
            suppressScrollOnNewData: true
        };
        var jsonpbj = this.getJsonForStart();
        this.apicall(jsonpbj);
    };
    MarketRepayShaileshComponent.prototype.apicall = function (jsonObject) {
        var _this = this;
        this.is_loaded_response = false;
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        var options = {
            headers: httpHeaders
        };
        //console.log(this.currDataOffset);
        this.http
            .post("http://localhost/ang1/blog/public/getHugeData", jsonObject, options)
            .subscribe(function (data) {
            _this.is_loaded_response = true;
            _this.subscribeActivity(data);
        });
    };
    MarketRepayShaileshComponent.prototype.subscribeActivity = function (data) {
        var resData = data.resultData;
        if (resData && resData.Activity && resData.Activity.length > 0) {
            //that.activityArr = [];
            this.activityArr = resData.Activity;
            console.log(this.activityArr);
            this.activityArr.sort(this.sortArray("id"));
            var p = 0;
            this.run(p, this.activityArr);
            this.upallowd = true;
            this.downallowd = true;
        }
        if (resData && resData.Activity && resData.Activity.length == 0) {
            //this.appservice.start();
            this.pauseButtonClickEvent();
            if (this.forwardBackWardFlag) {
                this.upallowd = false;
                this.downallowd = true;
                this.enBlPlayButton = true;
            }
            else {
                this.downallowd = false;
                this.enBlPlayButton = false;
                this.upallowd = true;
            }
        }
    };
    MarketRepayShaileshComponent.prototype.run = function (p, activityArr) {
        var _this = this;
        var option = {};
        if (!this.forwardBackWardFlag) {
            //PLAY FORWARD CODE
            if (p != undefined) {
                if (activityArr.length > 0) {
                    var rowData = activityArr[p];
                    if (p++ <= activityArr.length - 1) {
                        setTimeout(function () {
                            var duplicate = false;
                            for (var _i = 0, _a = _this.activityPushArr; _i < _a.length; _i++) {
                                var row = _a[_i];
                                if (row.id == rowData.id) {
                                    duplicate = true;
                                }
                            }
                            var node;
                            if (!duplicate) {
                                _this.activityPushArr.push(rowData);
                            }
                            if (_this.activityPushArr.length > _app_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANT"].GRID_SIZE) {
                                _this.activityPushArr.shift();
                                /*todo : send single row to setHighlighterOnData
                                   check painting of single rows in grid
                                */
                                _this.gridOptionsEmpLog.api.setRowData(_this.activityPushArr);
                                // this.gridApiempLog.gridCore.rowRenderer.gridCore.gridOptionsWrapper.layoutElements[2].scrollTop= 200;//this.gridApiempLog.gridCore.rowRenderer.gridCore.gridOptionsWrapper.layoutElements[2].scrollHeight;
                                // this.gridApiempLog.rowRenderer.gridCore.gridOptionsWrapper.layoutElements[2].scrollTop = Number(this.gridApiempLog.gridCore.rowRenderer.gridCore.gridOptionsWrapper.layoutElements[2].scrollHeight);
                            }
                            else {
                                _this.gridOptionsEmpLog.api.setRowData(_this.activityPushArr);
                            }
                            //this.appservice.idle.interrupt();
                            $("#myGrid").scrollTop = 200; //this.gridApiempLog.gridCore.rowRenderer.gridCore.gridOptionsWrapper.layoutElements[2].scrollHeight;
                            //this.gridApiempLog.rowRenderer.gridCore.gridOptionsWrapper.layoutElements[2].scrollTop = Number(this.gridApiempLog.gridCore.rowRenderer.gridCore.gridOptionsWrapper.layoutElements[2].scrollHeight);
                            var node = _this.gridApiempLog.getRowNode(_this.gridApiempLog.getLastDisplayedRow());
                            node.setSelected(true);
                            _this.playPauseCounter = p;
                            if (!_this.playPauseButton) {
                                _this.run(p, activityArr);
                            }
                            //}
                        }, 50);
                    }
                    else {
                        var jsonObject = {};
                        if (activityArr.length > 0 && this.is_loaded_response) {
                            this.prevForwardFlag = 1;
                            jsonObject = this.getJsonForStart();
                            this.apicall(jsonObject);
                        }
                    }
                }
            }
        }
        else {
            //PLAY PREVIOUS CODE
            //todo1 : desable PREVIOUS  and next button on reacing cache endpoints
            //todo2 : formatting should be in method            
            console.log("value of p==>" + p);
            if (p == 0) {
                console.log("I am at 0");
                activityArr = activityArr.concat(this.activityPushArr);
                this.activityArr = activityArr;
                p = activityArr.length - 1;
                this.playPauseCounter = p;
            }
            if (p >= _app_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANT"].GRID_SIZE) {
                console.log(this.activityArr);
                setTimeout(function () {
                    var rowData = activityArr[p - (_app_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANT"].GRID_SIZE)];
                    if (rowData != undefined) {
                        // rowData.mrFillPrice = Number(rowData.mrFillPrice).toFixed(2);                  
                        p--;
                        _this.playPauseCounter = p;
                        var duplicate = false;
                        var node;
                        for (var _i = 0, _a = _this.activityPushArr; _i < _a.length; _i++) {
                            var row = _a[_i];
                            if (row.id == rowData.id) {
                                duplicate = true;
                            }
                        }
                        //   if (duplicate) {
                        //      return false;
                        //  }
                        if (!duplicate) {
                            _this.activityPushArr.splice(0, 0, rowData);
                            if (_this.activityPushArr.length > _app_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANT"].GRID_SIZE) {
                                _this.activityPushArr.pop();
                                _this.gridOptionsEmpLog.api.setRowData(_this.activityPushArr);
                            }
                            else {
                                _this.gridOptionsEmpLog.api.setRowData(_this.activityPushArr);
                            }
                            if (_this.scrolldir == "B") {
                                _this.gridApiempLog.rowRenderer.gridCore.gridOptionsWrapper.layoutElements[2].scrollTop = 0;
                                node = _this.gridOptionsEmpLog.api.getRowNode(_this.gridApiempLog.getFirstDisplayedRow());
                                node.setSelected(true);
                            }
                            else if (_this.scrolldir == "F" || _this.scrolldir == "") {
                                _this.gridApiempLog.rowRenderer.gridCore.gridOptionsWrapper.layoutElements[2].scrollTop = Number(_this.gridApiempLog.gridCore.rowRenderer.gridCore.gridOptionsWrapper.layoutElements[2].scrollHeight);
                            }
                            if (!_this.playPauseButton) {
                                _this.run(p, activityArr);
                            }
                        }
                    }
                }, 0.5);
            }
            else {
                var jsonObject = {};
                //Debi: should be in 1 method
                if (this.activityArr.length > 0 && this.is_loaded_response) {
                    this.prevForwardFlag = -1;
                    jsonObject = this.getJsonForStart();
                    this.apicall(jsonObject);
                }
            }
        }
    };
    MarketRepayShaileshComponent.prototype.onGridReadyEmp = function (params) {
        var _this = this;
        this.gridApiempLog = params.api;
        this.gridscrollevent = true;
        this.gridApiempLog.rowRenderer.gridCore.gridOptionsWrapper.layoutElements[2].onmousewheel = function (e) {
            //scroll restricted while playing market repay
            if (!_this.playPauseButton) {
                e.preventDefault();
                return false;
            }
            _this.gridscrollevent = false;
            if (!_this.gridscrollevent) {
                if (e.deltaY === 100) {
                    var scrtop = _this.gridApiempLog.rowRenderer.gridCore.gridOptionsWrapper.layoutElements[2].scrollTop;
                    var scrheight = _this.gridApiempLog.rowRenderer.gridCore.gridOptionsWrapper.layoutElements[2].scrollHeight;
                    var innerhei = $(".ag-body-viewport.ag-layout-normal").innerHeight();
                    console.log(scrtop + "+" + innerhei + ">=" + scrheight);
                    // if (scrtop + innerhei >= scrheight) {
                    _this.upallowd = true;
                    //this.forwardButtonClickEvent();     
                    if (!_this.downallowd) {
                        return false;
                    }
                    _this.forwardBackWardFlag = false;
                    _this.forwardManualFlag = false;
                    _this.scrolldir = 'F';
                    _this.run(_this.playPauseCounter, _this.activityArr);
                    // }
                }
                else {
                    if (_this.gridApiempLog.rowRenderer.gridCore.gridOptionsWrapper.layoutElements[2].scrollTop === 0) {
                        //this.backwardButtonClickEvent();
                        var rows = _this.gridOptionsEmpLog.api.getRowNode(_this.gridApiempLog.getFirstDisplayedRow().toString()).data;
                        _this.downallowd = true;
                        if (!_this.upallowd) {
                            return false;
                        }
                        _this.forwardBackWardFlag = true;
                        _this.scrolldir = 'B';
                        _this.run(_this.playPauseCounter, _this.activityArr);
                    }
                }
            }
        };
    };
    MarketRepayShaileshComponent.prototype.playMarketReplayScocket = function () {
        this.playPauseButton = false;
        this.forwardBackWardFlag = false;
        this.forwardManualFlag = true;
        this.appservice.stop();
        if (this.gotoStartSeqNmbr === -1) {
            this.pauseButtonClickEvent();
            // this.genericComponent.showErrorMessage(MessageConstant.MarketReplay.invalidGoto);
        }
        else if (this.gotoStartSeqNmbr === 0) {
            if (this.activityArr.length > 0) {
                this.run(this.playPauseCounter, this.activityArr);
            }
            else {
                var jsonObject = {};
                this.prevForwardFlag = 1;
                jsonObject = this.getJsonForStart();
                this.apicall(jsonObject);
            }
        }
        else {
            var jsonObject = {};
            this.prevForwardFlag = 1;
            jsonObject = this.getJsonForStart();
            this.apicall(jsonObject);
        }
    };
    MarketRepayShaileshComponent.prototype.playMarketBackReplayScocket = function () {
        this.playPauseButton = false;
        this.forwardBackWardFlag = true;
        this.forwardManualFlag = true;
        this.appservice.stop();
        if (this.gotoStartSeqNmbr === -1) {
            this.pauseButtonClickEvent();
            // this.genericComponent.showErrorMessage(MessageConstant.MarketReplay.invalidGoto);
        }
        else if (this.gotoStartSeqNmbr === 0) {
            if (this.activityArr.length > 0) {
                this.run(this.playPauseCounter, this.activityArr);
            }
            else {
                var jsonObject = {};
                this.prevForwardFlag = 1;
                jsonObject = this.getJsonForStart();
                this.apicall(jsonObject);
            }
        }
        else {
            var jsonObject = {};
            this.prevForwardFlag = 1;
            jsonObject = this.getJsonForStart();
            this.apicall(jsonObject);
        }
    };
    MarketRepayShaileshComponent.prototype.pauseButtonClickEvent = function () {
        this.playPauseButton = true;
        this.appservice.start();
        //console.log(this.appservice.idle.getInterrupts());
    };
    MarketRepayShaileshComponent.prototype.backwardButtonClickEvent = function () {
        //todo: make generic method and passs directions for ups/down 
        if (this.playPauseButton) {
            var currow = this.gridApiempLog.getSelectedNodes();
            this.downallowd = true;
            if (currow && currow[0] && currow[0].rowIndex == 0) {
                var rows = this.gridApiempLog.getSelectedRows();
                if (this.upallowd) {
                    this.gridApiempLog.ensureIndexVisible(0);
                    this.forwardBackWardFlag = true;
                    this.scrolldir = 'B';
                    this.run(this.playPauseCounter, this.activityArr);
                }
            }
            else {
                var node1 = this.gridApiempLog.getRowNode(currow[0].rowIndex - 1);
                this.gridApiempLog.ensureIndexVisible(currow[0].rowIndex - 1);
                node1.setSelected(true);
            }
        }
    };
    MarketRepayShaileshComponent.prototype.forwardButtonClickEvent = function () {
        if (this.playPauseButton) {
            var currow = this.gridApiempLog.getSelectedNodes();
            var last_display_row = this.gridApiempLog.getLastDisplayedRow();
            this.enBlPlayButton = true;
            this.upallowd = true;
            if (currow && currow[0] && currow[0].rowIndex < last_display_row) {
                var node1 = this.gridApiempLog.getRowNode(currow[0].rowIndex + 1);
                this.gridApiempLog.ensureIndexVisible(currow[0].rowIndex + 1);
                node1.setSelected(true);
            }
            else {
                var rows = this.gridApiempLog.getSelectedRows();
                if (this.downallowd) {
                    this.forwardBackWardFlag = false;
                    this.forwardManualFlag = false;
                    this.scrolldir = 'F';
                    this.run(this.playPauseCounter, this.activityArr);
                }
            }
        }
    };
    MarketRepayShaileshComponent.prototype.getJsonForStart = function () {
        var lastSeqNum = 0;
        if (!this.forwardBackWardFlag) {
            lastSeqNum = this.activityArr.length != 0 ? this.activityArr[this.activityArr.length - 1].id : 0;
        }
        else {
            lastSeqNum = this.activityArr.length != 0 ? this.activityArr[0].id : 0;
        }
        var jsonObject = {
            lastSeqNmbr: lastSeqNum,
            firstid: '',
            prevForwardFlag: this.prevForwardFlag,
            gotoStartSeqNmbr: this.gotoStartSeqNmbr > 0 ? this.gotoStartSeqNmbr : 0,
        };
        return jsonObject;
    };
    MarketRepayShaileshComponent.prototype.sortArray = function (prop) {
        return function (a, b) {
            if (a[prop] > b[prop]) {
                return 1;
            }
            else if (a[prop] < b[prop]) {
                return -1;
            }
            return 0;
        };
    };
    MarketRepayShaileshComponent.prototype.refreshButtonClickEvent = function (gotoClick) {
        if (!this.playPauseButton) {
            alert("Please Stop first then click on Refresh");
            return false;
        }
        //  this.webSocketService.timeArr = [];    
        this.activityArr = [];
        this.activityPushArr = [];
        this.playPauseCounter = 0;
        this.forwardBackWardFlag = false;
        this.forwardManualFlag = true;
        this.gridOptionsEmpLog.api.setRowData([]);
        this.gotoStartSeqNmbr = 0;
        this.playPauseButton = true;
        this.upallowd = false;
        this.downallowd = true;
        this.enBlPlayButton = true;
    };
    MarketRepayShaileshComponent.prototype.navigateToNextCell = function (params) {
        var KEY_LEFT = 37;
        var KEY_UP = 38;
        var KEY_RIGHT = 39;
        var KEY_DOWN = 40;
        var previousCell = params.previousCellDef;
        var suggestedNextCell = params.nextCellDef;
        var selnode;
        switch (params.key) {
            case KEY_UP:
                var nextRowIndex = previousCell.rowIndex - 1;
                this.downallowd = true;
                if (params.nextCellDef) {
                    selnode = this.gridOptionsEmpLog.api.getRowNode(params.nextCellDef.rowIndex);
                    selnode.setSelected(true);
                }
                if (nextRowIndex < 0) {
                    if (this.playPauseButton) {
                        if (this.upallowd) {
                            this.backwardButtonClickEvent();
                        }
                    }
                    return null;
                }
                else {
                    return {
                        rowIndex: nextRowIndex,
                        column: previousCell.column,
                        floating: previousCell.floating
                    };
                }
            case KEY_DOWN:
                nextRowIndex = previousCell.rowIndex + 1;
                this.upallowd = true;
                if (params.nextCellDef) {
                    selnode = this.gridOptionsEmpLog.api.getRowNode(params.nextCellDef.rowIndex);
                    selnode.setSelected(true);
                }
                var renderedRowCount = this.gridOptionsEmpLog.api.getModel().getRowCount();
                if (nextRowIndex >= renderedRowCount) {
                    var rows = this.gridOptionsEmpLog.api.getSelectedRows();
                    if (this.downallowd) {
                        this.forwardButtonClickEvent();
                    }
                    return null;
                }
                else {
                    return {
                        rowIndex: nextRowIndex,
                        column: previousCell.column,
                        floating: previousCell.floating
                    };
                }
            case KEY_LEFT:
            case KEY_RIGHT:
                return suggestedNextCell;
            default:
                throw "this will never happen, navigation is always on of the 4 keys above";
        }
    };
    MarketRepayShaileshComponent.prototype.rowselect = function () {
    };
    MarketRepayShaileshComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "market-repay",
            template: __webpack_require__(/*! ./market-repay-shailesh.html */ "./src/app/market-repay/market-repay-shailesh.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]])
    ], MarketRepayShaileshComponent);
    return MarketRepayShaileshComponent;
}());



/***/ }),

/***/ "./src/app/post.action.ts":
/*!********************************!*\
  !*** ./src/app/post.action.ts ***!
  \********************************/
/*! exports provided: EDIT_TEXT, UPVOTE, DOWNVOTE, RESET, EditText, UpVote, DownVote, Reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_TEXT", function() { return EDIT_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPVOTE", function() { return UPVOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWNVOTE", function() { return DOWNVOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET", function() { return RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditText", function() { return EditText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpVote", function() { return UpVote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownVote", function() { return DownVote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reset", function() { return Reset; });
var EDIT_TEXT = '[Post] Edit';
var UPVOTE = '[Post] UpVote';
var DOWNVOTE = '[Post] DownVote';
var RESET = '[Post] Reset';
var EditText = /** @class */ (function () {
    function EditText(payload) {
        this.payload = payload;
        this.type = 'EDIT TEXT';
    }
    return EditText;
}());

var UpVote = /** @class */ (function () {
    function UpVote() {
        this.type = 'UPVOTE';
    }
    return UpVote;
}());

var DownVote = /** @class */ (function () {
    function DownVote() {
        this.type = 'DOWNVOTE';
    }
    return DownVote;
}());

var Reset = /** @class */ (function () {
    function Reset() {
        this.type = 'RESET';
    }
    return Reset;
}());



/***/ }),

/***/ "./src/app/primecomponent/inputgroup/ipgroup.html":
/*!********************************************************!*\
  !*** ./src/app/primecomponent/inputgroup/ipgroup.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"first\">Addons</h3>\r\n<div class=\"ui-g ui-fluid\">\r\n    <div class=\"ui-g-12 ui-md-4\">\r\n        <div class=\"ui-inputgroup\">\r\n            <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-user\"></i></span>\r\n            <input type=\"text\" pInputText placeholder=\"Username\">         \r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"ui-g-12 ui-md-4\">\r\n        <div class=\"ui-inputgroup\">\r\n            <span class=\"ui-inputgroup-addon\">$</span>\r\n            <input type=\"text\" pInputText placeholder=\"Price\">   \r\n            <span class=\"ui-inputgroup-addon\">.00</span>      \r\n        </div>\r\n    </div>\r\n            \r\n    <div class=\"ui-g-12 ui-md-4\">\r\n        <div class=\"ui-inputgroup\">\r\n            <span class=\"ui-inputgroup-addon\">www</span>\r\n            <input type=\"text\" pInputText placeholder=\"Website\">      \r\n        </div>\r\n    </div>\r\n</div>\r\n    \r\n<h3>Multiple Addons</h3>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-inputgroup\">\r\n            <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-credit-card\"></i></span>  \r\n            <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-cc-visa\"></i></span>   \r\n            <input type=\"text\" pInputText placeholder=\"Price\"> \r\n            <span class=\"ui-inputgroup-addon\">$</span>  \r\n            <span class=\"ui-inputgroup-addon\">.00</span>      \r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<h3>Button Addons</h3>\r\n<div class=\"ui-g ui-fluid\">\r\n    <div class=\"ui-g-12 ui-md-4\">\r\n        <div class=\"ui-inputgroup\">\r\n            <button pButton type=\"button\" label=\"Search\"></button>\r\n            <input type=\"text\" pInputText placeholder=\"Keyword\">         \r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"ui-g-12 ui-md-4\">\r\n        <div class=\"ui-inputgroup\">\r\n            <input type=\"text\" pInputText placeholder=\"Keyword\">   \r\n            <button pButton type=\"button\" icon=\"fa fa-superpowers\" class=\"ui-button-warn\"></button>      \r\n        </div>\r\n    </div>\r\n            \r\n    <div class=\"ui-g-12 ui-md-4\">\r\n        <div class=\"ui-inputgroup\">\r\n            <button pButton type=\"button\" icon=\"pi pi-check\" class=\"ui-button-success\"></button>    \r\n            <input type=\"text\" pInputText placeholder=\"Vote\">   \r\n            <button pButton type=\"button\" icon=\"pi pi-close\" class=\"ui-button-danger\"></button>      \r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<h3>Checkbox and RadioButton</h3>\r\n<div class=\"ui-g ui-fluid\">\r\n    <div class=\"ui-g-12 ui-md-4\">\r\n        <div class=\"ui-inputgroup\">\r\n            <span class=\"ui-inputgroup-addon\"><p-checkbox></p-checkbox></span>\r\n            <input type=\"text\" pInputText placeholder=\"Username\">         \r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"ui-g-12 ui-md-4\">\r\n        <div class=\"ui-inputgroup\">\r\n            <input type=\"text\" pInputText placeholder=\"Price\">   \r\n            <span class=\"ui-inputgroup-addon\"><p-radioButton></p-radioButton></span>      \r\n        </div>\r\n    </div>\r\n            \r\n    <div class=\"ui-g-12 ui-md-4\">\r\n        <div class=\"ui-inputgroup\">\r\n            <span class=\"ui-inputgroup-addon\"><p-checkbox></p-checkbox></span>\r\n            <input type=\"text\" pInputText placeholder=\"Website\">      \r\n            <span class=\"ui-inputgroup-addon\"><p-radioButton></p-radioButton></span> \r\n        </div>\r\n    </div>\r\n\r\n    <button type=\"button\" (click)=\"showDialog()\" pButton icon=\"pi pi-info-circle\" label=\"Show\"></button>\r\n    <div class=\"resize\" id=\"resize\"      \r\n    >\r\n        <p>Let the user resize both the height and the width of this div element.</p>\r\n        <p>To resize: Click and drag the bottom right corner of this div element.</p>\r\n      </div>\r\n\r\n</div>\r\n\r\n\r\n<p-dialog header=\"Godfather I\" [(visible)]=\"display\" id=\"pan\" [modal]=\"true\" [responsive]=\"true\" [style]=\"{width: '350px', minWidth: '200px'}\" [minY]=\"70\" \r\n        [maximizable]=\"true\" [baseZIndex]=\"10000\"  (resized)=\"onResized($event)\">\r\n    <span>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \r\n        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \r\n        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \r\n        kind and benevolent to those who give respect,\r\n        but given to ruthless violence whenever anything stands against the good of the family.</span>\r\n        <p-footer>\r\n            <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"display=false\" label=\"Yes\"></button>\r\n            <button type=\"button\" pButton icon=\"pi pi-close\" (click)=\"display=false\" label=\"No\" class=\"ui-button-secondary\"></button>\r\n        </p-footer>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/primecomponent/inputgroup/ipgroup.ts":
/*!******************************************************!*\
  !*** ./src/app/primecomponent/inputgroup/ipgroup.ts ***!
  \******************************************************/
/*! exports provided: InputGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupComponent", function() { return InputGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputGroupComponent = /** @class */ (function () {
    function InputGroupComponent() {
        this.display = false;
    }
    InputGroupComponent.prototype.showDialog = function () {
        this.display = true;
    };
    InputGroupComponent.prototype.onResized = function (event) {
        alert("panjkaj");
    };
    InputGroupComponent.prototype.ngAfterViewInit = function () {
        var id = document.getElementById("pan");
        id.addEventListener('mouseover', function (e) {
            var cursor = e.target['style'].cursor;
            console.log(e);
            console.log(id.style.cursor);
        }, false);
    };
    InputGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./ipgroup.html */ "./src/app/primecomponent/inputgroup/ipgroup.html"),
        })
    ], InputGroupComponent);
    return InputGroupComponent;
}());



/***/ }),

/***/ "./src/app/redux/auth/auth.action.ts":
/*!*******************************************!*\
  !*** ./src/app/redux/auth/auth.action.ts ***!
  \*******************************************/
/*! exports provided: PayloadAction, AuthActionTypes, LoginAttempted, LoginFailed, LoginSuccessful, LogoutRequested, LogoutSuccessful */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayloadAction", function() { return PayloadAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function() { return AuthActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAttempted", function() { return LoginAttempted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFailed", function() { return LoginFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSuccessful", function() { return LoginSuccessful; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutRequested", function() { return LogoutRequested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutSuccessful", function() { return LogoutSuccessful; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var PayloadAction = /** @class */ (function () {
    function PayloadAction(payload) {
        this.payload = payload;
    }
    return PayloadAction;
}());

var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["LoginAttempted"] = "[Login Page] User attempted to log in";
    AuthActionTypes["LoginSuccessful"] = "[Auth API] Login successful";
    AuthActionTypes["LoginFailed"] = "[Auth API] Login failed";
    AuthActionTypes["LogoutRequested"] = "[Navbar] Logout requested";
    AuthActionTypes["LogoutSuccessful"] = "[Auth API] Logout successful";
})(AuthActionTypes || (AuthActionTypes = {}));
var LoginAttempted = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginAttempted, _super);
    function LoginAttempted() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = AuthActionTypes.LoginAttempted;
        return _this;
    }
    return LoginAttempted;
}(PayloadAction));

var LoginFailed = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginFailed, _super);
    function LoginFailed() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = AuthActionTypes.LoginFailed;
        return _this;
    }
    return LoginFailed;
}(PayloadAction));

var LoginSuccessful = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginSuccessful, _super);
    function LoginSuccessful() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = AuthActionTypes.LoginSuccessful;
        return _this;
    }
    return LoginSuccessful;
}(PayloadAction));

var LogoutRequested = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LogoutRequested, _super);
    function LogoutRequested() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = AuthActionTypes.LogoutRequested;
        return _this;
    }
    return LogoutRequested;
}(PayloadAction));

var LogoutSuccessful = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LogoutSuccessful, _super);
    function LogoutSuccessful() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = AuthActionTypes.LogoutSuccessful;
        return _this;
    }
    return LogoutSuccessful;
}(PayloadAction));



/***/ }),

/***/ "./src/app/redux/auth/auth.effect.ts":
/*!*******************************************!*\
  !*** ./src/app/redux/auth/auth.effect.ts ***!
  \*******************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _auth_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.action */ "./src/app/redux/auth/auth.action.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/redux/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, authService, router) {
        var _this = this;
        this.actions$ = actions$;
        this.authService = authService;
        this.router = router;
        this.loginAttempted$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_action__WEBPACK_IMPORTED_MODULE_3__["AuthActionTypes"].LoginAttempted), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (data) { return _this.authService
            .login(data.payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (userTokenObj) { return new _auth_action__WEBPACK_IMPORTED_MODULE_3__["LoginSuccessful"](userTokenObj.token); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _auth_action__WEBPACK_IMPORTED_MODULE_3__["LoginFailed"]()); })); }));
        this.loginSuccessful$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_action__WEBPACK_IMPORTED_MODULE_3__["AuthActionTypes"].LoginSuccessful), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(_this.router.navigateByUrl('dashboard')); }));
        this.logoutRequested$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_action__WEBPACK_IMPORTED_MODULE_3__["AuthActionTypes"].LogoutRequested), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.authService.logout().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return new _auth_action__WEBPACK_IMPORTED_MODULE_3__["LogoutSuccessful"](); })); }));
        this.logoutSuccessful$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_action__WEBPACK_IMPORTED_MODULE_3__["AuthActionTypes"].LogoutSuccessful), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.router.navigateByUrl('login'); }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "loginAttempted$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "loginSuccessful$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "logoutRequested$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "logoutSuccessful$", void 0);
    AuthEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/app/redux/auth/auth.module.ts":
/*!*******************************************!*\
  !*** ./src/app/redux/auth/auth.module.ts ***!
  \*******************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/app/redux/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.reducer */ "./src/app/redux/auth/auth.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _auth_effect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.effect */ "./src/app/redux/auth/auth.effect.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.service */ "./src/app/redux/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");











var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature('auth', _auth_reducer__WEBPACK_IMPORTED_MODULE_6__["reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_auth_effect__WEBPACK_IMPORTED_MODULE_8__["AuthEffects"]]),
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/redux/auth/auth.reducer.ts":
/*!********************************************!*\
  !*** ./src/app/redux/auth/auth.reducer.ts ***!
  \********************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.action */ "./src/app/redux/auth/auth.action.ts");


var initialState = {
    username: undefined,
    token: undefined
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _auth_action__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LoginAttempted:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { username: action.payload.username });
        case _auth_action__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LoginFailed:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { username: undefined });
        case _auth_action__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LoginSuccessful:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { token: action.payload });
        case _auth_action__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LogoutSuccessful:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, initialState);
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/redux/auth/auth.service.ts":
/*!********************************************!*\
  !*** ./src/app/redux/auth/auth.service.ts ***!
  \********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthService = /** @class */ (function () {
    function AuthService(httpClient) {
        this.httpClient = httpClient;
    }
    AuthService.prototype.login = function (payload) {
        return this.httpClient.post('https://reqres.in/api/login', payload);
    };
    AuthService.prototype.logout = function () {
        return this.httpClient.get('https://reqres.in/api/users/1');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/redux/dashboard/dashboard.action.ts":
/*!*****************************************************!*\
  !*** ./src/app/redux/dashboard/dashboard.action.ts ***!
  \*****************************************************/
/*! exports provided: PayloadAction, DashboardActionTypes, DashboardLoadStart, DashboardLoadEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayloadAction", function() { return PayloadAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardActionTypes", function() { return DashboardActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardLoadStart", function() { return DashboardLoadStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardLoadEnd", function() { return DashboardLoadEnd; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var PayloadAction = /** @class */ (function () {
    function PayloadAction(payload) {
        this.payload = payload;
    }
    return PayloadAction;
}());

var DashboardActionTypes;
(function (DashboardActionTypes) {
    DashboardActionTypes["DashboardLoadStart"] = "[Dashboard] Dashboard load started";
    DashboardActionTypes["DashboardLoadEnd"] = "[Dashboard] Dashboard load finished";
})(DashboardActionTypes || (DashboardActionTypes = {}));
var DashboardLoadStart = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DashboardLoadStart, _super);
    function DashboardLoadStart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = DashboardActionTypes.DashboardLoadStart;
        return _this;
    }
    return DashboardLoadStart;
}(PayloadAction));

var DashboardLoadEnd = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DashboardLoadEnd, _super);
    function DashboardLoadEnd() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = DashboardActionTypes.DashboardLoadEnd;
        return _this;
    }
    return DashboardLoadEnd;
}(PayloadAction));



/***/ }),

/***/ "./src/app/redux/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/redux/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZHV4L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/redux/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/redux/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\" aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <a class=\"navbar-brand\">{{username$ | async}}</a>\r\n  \r\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\r\n      <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\">Home <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\" (click)=\"logout()\">\r\n          <a class=\"nav-link\">Logout</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  \r\n  Users\r\n  <div *ngFor=\"let x of (dashboardData$|async)\">\r\n    {{ x.first_name }} {{ x.last_name }}\r\n  </div>\r\n\r\n  <p>My favorite color is <del>blue</del> red.</p> <!----My favorite color is blue red. -->\r\n  <p>My favorite <ins>color</ins> is red.</p>\r\n  <p>This is <sub>subscripted</sub> text.</p>\r\n  <p>This is <sup>superscripted</sup> text.</p>\r\n  <p><strong>This text is strong.</strong></p>"

/***/ }),

/***/ "./src/app/redux/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/redux/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _dashboard_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.action */ "./src/app/redux/dashboard/dashboard.action.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_auth_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.action */ "./src/app/redux/auth/auth.action.ts");






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(store) {
        this.store = store;
        this.username$ = this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('auth', 'username'));
        this.dashboardData$ = this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('dashboard', 'dashboardData'));
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _dashboard_action__WEBPACK_IMPORTED_MODULE_3__["DashboardLoadStart"]());
    };
    DashboardComponent.prototype.logout = function () {
        this.store.dispatch(new _auth_auth_action__WEBPACK_IMPORTED_MODULE_5__["LogoutRequested"]());
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/redux/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/redux/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/redux/dashboard/dashboard.effect.ts":
/*!*****************************************************!*\
  !*** ./src/app/redux/dashboard/dashboard.effect.ts ***!
  \*****************************************************/
/*! exports provided: DashboardEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardEffects", function() { return DashboardEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _dashboard_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.action */ "./src/app/redux/dashboard/dashboard.action.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/redux/dashboard/dashboard.service.ts");






var DashboardEffects = /** @class */ (function () {
    function DashboardEffects(actions$, dashboardService) {
        var _this = this;
        this.actions$ = actions$;
        this.dashboardService = dashboardService;
        this.dashboardLoadStart$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_dashboard_action__WEBPACK_IMPORTED_MODULE_3__["DashboardActionTypes"].DashboardLoadStart), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.dashboardService.loadDashboard$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return new _dashboard_action__WEBPACK_IMPORTED_MODULE_3__["DashboardLoadEnd"](data); })); }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DashboardEffects.prototype, "dashboardLoadStart$", void 0);
    DashboardEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"]])
    ], DashboardEffects);
    return DashboardEffects;
}());



/***/ }),

/***/ "./src/app/redux/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/redux/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/redux/dashboard/dashboard.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _dashboard_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.reducer */ "./src/app/redux/dashboard/dashboard.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _dashboard_effect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.effect */ "./src/app/redux/dashboard/dashboard.effect.ts");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/redux/dashboard/dashboard.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");










var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('dashboard', _dashboard_reducer__WEBPACK_IMPORTED_MODULE_5__["reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_dashboard_effect__WEBPACK_IMPORTED_MODULE_7__["DashboardEffects"]])
            ],
            providers: [_dashboard_service__WEBPACK_IMPORTED_MODULE_8__["DashboardService"]],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/redux/dashboard/dashboard.reducer.ts":
/*!******************************************************!*\
  !*** ./src/app/redux/dashboard/dashboard.reducer.ts ***!
  \******************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dashboard_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.action */ "./src/app/redux/dashboard/dashboard.action.ts");
/* harmony import */ var _auth_auth_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.action */ "./src/app/redux/auth/auth.action.ts");



var initialState = {
    dashboardData: undefined
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _dashboard_action__WEBPACK_IMPORTED_MODULE_1__["DashboardActionTypes"].DashboardLoadEnd:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { dashboardData: action.payload.data });
        case _auth_auth_action__WEBPACK_IMPORTED_MODULE_2__["AuthActionTypes"].LogoutSuccessful:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, initialState);
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/redux/dashboard/dashboard.service.ts":
/*!******************************************************!*\
  !*** ./src/app/redux/dashboard/dashboard.service.ts ***!
  \******************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DashboardService = /** @class */ (function () {
    function DashboardService(httpClient) {
        this.httpClient = httpClient;
    }
    DashboardService.prototype.loadDashboard$ = function () {
        return this.httpClient.get('https://reqres.in/api/users');
    };
    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/redux/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/redux/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\r\n    text-align: center;\r\n    background-color: crimson;\r\n    margin: 10px;\r\n  }\r\n  \r\n  button {\r\n    background-color: darkblue;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVkdXgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCIiwiZmlsZSI6InNyYy9hcHAvcmVkdXgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/redux/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/redux/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\">\r\n    <input type=\"text\" class=\"form-control\" [formControl]=\"username\">\r\n    <input type=\"password\" class=\"form-control\" [formControl]=\"password\">\r\n    <button type=\"submit\" class=\"form-control\">Login</button>\r\n  </form>"

/***/ }),

/***/ "./src/app/redux/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/redux/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_auth_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.action */ "./src/app/redux/auth/auth.action.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(store) {
        this.store = store;
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('ThatGuy');
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        this.store.dispatch(new _auth_auth_action__WEBPACK_IMPORTED_MODULE_4__["LoginAttempted"]({ username: this.username.value, password: this.password.value }));
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/redux/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/redux/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/redux/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/redux/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.reducer */ "./src/app/redux/auth/auth.reducer.ts");
/* harmony import */ var _dashboard_dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard/dashboard.reducer */ "./src/app/redux/dashboard/dashboard.reducer.ts");


var reducers = {
    auth: _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"],
    dashboard: _dashboard_dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
};
var metaReducers = [];


/***/ }),

/***/ "./src/app/screenfull-dir.ts":
/*!***********************************!*\
  !*** ./src/app/screenfull-dir.ts ***!
  \***********************************/
/*! exports provided: ToggleFullscreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullscreenDirective", function() { return ToggleFullscreenDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToggleFullscreenDirective = /** @class */ (function () {
    function ToggleFullscreenDirective() {
    }
    ToggleFullscreenDirective.prototype.onClick = function () {
        alert(this.name);
        if (this.name == 'pankaj') {
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ToggleFullscreenDirective.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ToggleFullscreenDirective.prototype, "onClick", null);
    ToggleFullscreenDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[toggleFullscreen]'
        })
    ], ToggleFullscreenDirective);
    return ToggleFullscreenDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Angular RND\serviceWorker1\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map