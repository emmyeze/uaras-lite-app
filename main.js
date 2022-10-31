(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\CHUKWUEMEKA EZE\Dropbox\UNIZIK STAFF\UARAS\uaras-angular\uaras-lite-app\src\main.ts */"zUnb");


/***/ }),

/***/ "6FnD":
/*!******************************************************************************!*\
  !*** ./src/app/topview/candidate-admission/candidate-admission.component.ts ***!
  \******************************************************************************/
/*! exports provided: CandidateAdmissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateAdmissionComponent", function() { return CandidateAdmissionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CandidateAdmissionComponent {
    constructor() { }
    ngOnInit() {
    }
}
CandidateAdmissionComponent.ɵfac = function CandidateAdmissionComponent_Factory(t) { return new (t || CandidateAdmissionComponent)(); };
CandidateAdmissionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CandidateAdmissionComponent, selectors: [["app-candidate-admission"]], decls: 2, vars: 0, template: function CandidateAdmissionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "candidate-admission works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtYWRtaXNzaW9uLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "7HpW":
/*!********************************************************************!*\
  !*** ./src/app/layouts/defaultsidenav/defaultsidenav.component.ts ***!
  \********************************************************************/
/*! exports provided: DefaultsidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultsidenavComponent", function() { return DefaultsidenavComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/sidebar/sidebar.component */ "BAfr");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/footer/footer.component */ "aF9I");










class DefaultsidenavComponent {
    constructor(responsive) {
        this.responsive = responsive;
        this.sideNavOpen = true;
    }
    ngOnInit() {
        this.responsive.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].TabletLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].TabletPortrait,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].HandsetLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].HandsetPortrait
        ]).subscribe((result) => {
            this.sideNavOpen = true;
            src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].sideNavOpen = this.sideNavOpen;
            const breakpoints = result.breakpoints;
            if (breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].TabletLandscape]) {
                this.sideNavOpen = true;
            }
            else if (breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].TabletPortrait]) {
                this.sideNavOpen = false;
            }
            else if (breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].HandsetLandscape]) {
                this.sideNavOpen = false;
            }
            else if (breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].HandsetPortrait]) {
                this.sideNavOpen = false;
            }
            src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].sideNavOpen = this.sideNavOpen;
        });
    }
    sideBarToggler() {
        this.sideNavOpen = !this.sideNavOpen;
    }
}
DefaultsidenavComponent.ɵfac = function DefaultsidenavComponent_Factory(t) { return new (t || DefaultsidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
DefaultsidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DefaultsidenavComponent, selectors: [["app-defaultsidenav"]], decls: 7, vars: 1, consts: [["flexLayout", "column", 3, "toggleStatus"], ["mode", "side", 3, "opened"], ["fxFlex", ""], ["flexLayout", "column"]], template: function DefaultsidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("toggleStatus", function DefaultsidenavComponent_Template_app_header_toggleStatus_0_listener() { return ctx.sideBarToggler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-drawer-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-drawer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-footer", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("opened", ctx.sideNavOpen);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawer"], _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nmat-drawer[_ngcontent-%COMP%] {\n  width: 350px;\n}\n\nmat-drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-drawer-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkZWZhdWx0c2lkZW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFBSDs7QUFNQTtFQUNFLFlBQUE7QUFIRjs7QUFPQTtFQUNFLFlBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7QUFKRiIsImZpbGUiOiJkZWZhdWx0c2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0XHJcbiB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgIGhlaWdodDogMTAwJTtcclxuIH1cclxuXHJcbi8vICAuY29udGVudCB7XHJcbi8vICAgIHBhZGRpbmc6IDIwcHg7XHJcbi8vICB9XHJcbm1hdC1kcmF3ZXJ7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG5cclxufVxyXG5cclxubWF0LWRyYXdlci1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxubWF0LWRyYXdlci1jb250ZW50IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "9nCp":
/*!********************************************!*\
  !*** ./src/app/shared/pipes/query.pipe.ts ***!
  \********************************************/
/*! exports provided: QueryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryPipe", function() { return QueryPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class QueryPipe {
    transform(items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(myItem => {
            return myItem.tsID.toLocaleLowerCase().includes(searchText);
        });
    }
}
QueryPipe.ɵfac = function QueryPipe_Factory(t) { return new (t || QueryPipe)(); };
QueryPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "query", type: QueryPipe, pure: true });


/***/ }),

/***/ "A1CT":
/*!*********************************************!*\
  !*** ./src/app/services/utility.service.ts ***!
  \*********************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "7RJT");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_interfaces_ikeyed_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/interfaces/ikeyed-collection */ "FZnX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");




// import { start } from 'repl';
// import { KeyedCollection } from '../interfaces/ikeyed-collection';
// import { BehaviorSubject } from 'rxjs';
class UtilityService {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.isMessageFromMiniSales = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        this.isMessageFromMiniSalesRestaurant = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        this.isMessageStatus = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](0);
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, { duration: 5000, });
    }
    // remove a String and replace
    prepareQuery(query, searchValue) {
        const pieces = query.split(`"${searchValue}"`);
        return pieces.join(searchValue);
    }
    replaceText(query, searchValue, replaceValue) {
        const pieces = query.split(`${searchValue}`);
        return pieces.join(replaceValue);
    }
    prepareNewID4() {
        const today = String(new Date());
        console.log('date string: ', today);
        return today;
    }
    // this ID generator return a random id with a date prefix ie 2021130XXXXXXXX
    prepareNewID3(expectedDigits) {
        const today = new Date();
        const todaysYear = (Number(today.getFullYear()) % 100);
        const todaysMonth = (Number(today.getMonth()) + 1);
        const todaysDay = (Number(today.getDate()));
        const randomNo = String(Math.floor(Math.random() * Math.floor(expectedDigits - 6)));
        let tempRef = String(todaysYear)
            +
                ((String(todaysMonth)).length < 2 ?
                    ('0' + (String(todaysMonth))) : String(todaysMonth))
            +
                ((String(todaysDay)).length < 2 ?
                    ('0' + (String(todaysDay))) : String(todaysDay));
        const tempRef2 = tempRef;
        for (let i = 0; i < (expectedDigits - (tempRef2.length + randomNo.length)); i++) {
            tempRef = tempRef + '0';
        }
        return (tempRef + randomNo);
    }
    prepareNewID(originalString, expectedDigits) {
        let answer = '';
        const tempUserID = Number(originalString) + 1;
        console.log('THIS IS TEMPUSERID: ', tempUserID);
        answer += tempUserID;
        while (answer.length < expectedDigits) {
            answer = '0' + answer;
        }
        return answer;
    }
    prepareNewID2(originalStringwith2digitYear, expectedDigits) {
        const answer = Number(originalStringwith2digitYear);
        console.log('@prepareNewID2', originalStringwith2digitYear);
        let answer3 = (Number(answer)) % (1 * Math.pow(10, expectedDigits - 2)); // reference number
        console.log('@prepareNewID2-answer3', answer3);
        const answer2 = Math.floor(Number(answer) / (1 * Math.pow(10, expectedDigits - 2))); // reference year
        console.log('@prepareNewID2-answer2', answer2);
        const today = new Date();
        const todaysYear = (Number(today.getFullYear()) % 100);
        if (answer2 !== todaysYear) { // not the same year reference
            answer3 = 0;
        }
        const NewNo = String(answer3 + 1); // do the increment in ref
        let tempRef = String(todaysYear);
        const tempRef2 = tempRef;
        for (let i = 0; i < (expectedDigits - (tempRef2.length + NewNo.length)); i++) {
            tempRef = tempRef + '0';
        }
        console.log('@prepareNewID2-result', (tempRef + NewNo));
        return (tempRef + NewNo);
    }
    prepareNewIDHR(originalStringwithTypeCode, expectedDigits) {
        let prefixCode = '';
        let answer3 = 0;
        const splitID = originalStringwithTypeCode.split('');
        if (splitID[1] === 'E') {
            prefixCode = 'TEMP';
            answer3 = Number(originalStringwithTypeCode.split(prefixCode)[1]) ? Number(originalStringwithTypeCode.split(prefixCode)[1]) : 0; // reference number
        }
        else {
            if (splitID[0] === 'D') {
                prefixCode = 'DTS';
                answer3 = Number(originalStringwithTypeCode.split(prefixCode)[1]) ? Number(originalStringwithTypeCode.split(prefixCode)[1]) : 0; // reference number
            }
            else {
                prefixCode = 'TS';
                answer3 = Number(originalStringwithTypeCode.split(prefixCode)[1]) ? Number(originalStringwithTypeCode.split(prefixCode)[1]) : 0; // reference number
            }
        }
        console.log('@prepareNewID2-answer3- LAST NO', answer3);
        const NewNo = String(answer3 + 1); // do the increment in ref
        let tempRef = prefixCode;
        const tempRef2 = tempRef;
        for (let i = 0; i < (expectedDigits - (tempRef2.length + NewNo.length)); i++) {
            tempRef = tempRef + '0';
        }
        console.log('@prepareNewID2-result', (tempRef + NewNo));
        return (tempRef + NewNo);
    }
    sliceTable(myIndex, paginator, data) {
        // console.log('INDEX: ', myIndex);
        // console.log('PAGE INDEX: ', paginator.pageIndex);
        // console.log('PAGE SIZE: ', paginator.pageSize);
        // console.log('INDEX: ', myIndex);
        const startIndex = paginator.pageIndex * paginator.pageSize;
        const myPosition = startIndex + myIndex;
        data.splice(myPosition, 1);
        // console.log('@SPLICE TABLE: ', startIndex, myPosition);
        return data;
    }
    getMyPositionOnTable(myIndex, paginator) {
        const startIndex = paginator.pageIndex * paginator.pageSize;
        const myPosition = startIndex + myIndex;
        return myPosition;
    }
    setSalesMarker(aPaymentType) {
        this.isMessageFromMiniSales.next(aPaymentType);
    }
    setSalesMarkerRestaurant(aPaymentType) {
        this.isMessageFromMiniSalesRestaurant.next(aPaymentType);
    }
    setMessageStatus(aStatus) {
        this.isMessageStatus.next(aStatus);
    }
    translateAptInfo(apType) {
        let roomT = new _shared_interfaces_ikeyed_collection__WEBPACK_IMPORTED_MODULE_1__["KeyedCollection"]();
        roomT.Add('1RS', 'Single Room');
        roomT.Add('1RSELF', 'Self Contained');
        roomT.Add('2B', '2 Bedroom');
        roomT.Add('3B', '3 Bedroom');
        return roomT.Item(apType);
    }
}
UtilityService.ɵfac = function UtilityService_Factory(t) { return new (t || UtilityService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
UtilityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UtilityService, factory: UtilityService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AQhQ":
/*!*************************************************!*\
  !*** ./src/app/services/application.service.ts ***!
  \*************************************************/
/*! exports provided: ApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationService", function() { return ApplicationService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ApplicationService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;
        this.apiUrl2 = 'http://localhost:8000';
        this.passMarkList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.StatusMessageUTME = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
    }
    getProgrammes() {
        // this.angularS1.doConnect();
        const myDeptList = ['LAW', 'SOFTWARE ENGINEERING', 'BUSINESS ADMINISTRATION'];
        return myDeptList;
    }
    getCutoffInfo(department) {
        const BS = new rxjs__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        queryParams = queryParams.append("department", department);
        let answer = [];
        this.http.get(`${this.apiUrl}/api/check-dept-cutoff`, { params: queryParams })
            .subscribe((data) => {
            answer = [];
            console.log('Received data from API', data);
            answer.push(data);
            BS.next(answer);
            BS.complete();
        });
        return BS;
    }
    getPassmarkInfo() {
        // const BS: AsyncSubject<PassMark[]> = new AsyncSubject <PassMark[]>();
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        // queryParams = queryParams.append("department", department );
        // let answer = []
        this.http.get(`${this.apiUrl}/api/get-passmark?option=1`)
            .subscribe((data) => {
            // answer = []
            console.log('Received data from API', data);
            // answer.push(data.data)
            this.passMarkList.next(data.data);
            // BS.complete();
        });
        // return BS;
    }
    setPassmarkInfo(aPassMarkInfo) {
        const BS = new rxjs__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        let passmark = JSON.stringify(aPassMarkInfo);
        queryParams = queryParams.append("passmark", passmark);
        let answer = [passmark];
        this.http.post(`${this.apiUrl}/api/set-passmark`, answer)
            .subscribe((data) => {
            // answer = []
            console.log('Received data from API', data);
            // answer.push(data.data)
            BS.next(1);
            BS.complete();
        });
        return BS;
    }
    editPassmarkInfo(aPassMarkInfo) {
        const BS = new rxjs__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        let passmark = JSON.stringify(aPassMarkInfo);
        console.log('to send data for API', passmark);
        queryParams = queryParams.append("passmark", passmark);
        let answer = [passmark, 1];
        // let answer = []
        // answer.push(passmark)
        this.http.post(`${this.apiUrl}/api/set-passmark`, answer)
            // this.http.post<{data: any, status: number}>(`${this.apiUrl}/api/set-passmark`,{params:queryParams})
            .subscribe((data) => {
            // answer = []
            console.log('Received data from API', data);
            // answer.push(data.data)
            BS.next(1);
            BS.complete();
        });
        return BS;
    }
    deletePassmarkInfo(aPassMarkInfo) {
        const BS = new rxjs__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        let passmark = JSON.stringify(aPassMarkInfo);
        queryParams = queryParams.append("passmark", passmark);
        let answer = [passmark];
        this.http.post(`${this.apiUrl}/api/del-passmark`, answer)
            .subscribe((data) => {
            // answer = []
            console.log('Received data from API', data);
            // answer.push(data.data)
            BS.next(1);
            BS.complete();
        });
        return BS;
    }
    getStudentRecord(studentJAMBRegNo, type = "UTME") {
        const BS = new rxjs__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        queryParams = queryParams.append("regNo", studentJAMBRegNo);
        queryParams = queryParams.append("type", type);
        let answer = [];
        this.http.get(`${this.apiUrl}/api/check-valid-regno`, { params: queryParams })
            .subscribe((data) => {
            answer = [];
            console.log('Received data from API', data);
            answer.push(data);
            BS.next(answer);
            BS.complete();
        });
        return BS;
    }
    getStatus(type = "UTME", lastOpStat) {
        // const BS: AsyncSubject<any[]> = new AsyncSubject <any[]>();
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        queryParams = queryParams.append("type", type);
        queryParams = queryParams.append("lastOpStat", lastOpStat);
        let answer = [];
        this.http.get(`${this.apiUrl}/api/status`, { params: queryParams })
            .subscribe((data) => {
            // answer = []
            console.log('Received data from API', data);
            // answer.push(data)
            this.StatusMessageUTME.next(data.statusMessage);
            // BS.complete();
        });
        // return BS;
    }
    registerStudent(student) {
        const BS = new rxjs__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        const json = JSON.stringify(student);
        queryParams = queryParams.append("student", json);
        console.log('sent data to API', json);
        let answer = [];
        answer.push(json);
        this.http.post(`${this.apiUrl}/api/register-candidate`, answer)
            .subscribe((data) => {
            answer = [];
            console.log('Received data from API', data);
            answer.push(data);
            BS.next(answer);
            BS.complete();
        });
        return BS;
    }
    suggestDepartment(subjectCombo) {
        const BS = new rxjs__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        const json = JSON.stringify({ score: subjectCombo[4], department: subjectCombo[3], sub1: subjectCombo[0], sub2: subjectCombo[1], sub3: subjectCombo[2] });
        queryParams = queryParams.append("subs", json);
        let answer = [];
        this.http.get(`${this.apiUrl2}/api/suggest-department`, { params: queryParams })
            // this.http.get<{combostatus: number, suggest: any[]}>(`${this.apiUrl}/api/suggest-department`,{params:queryParams})
            .subscribe((data) => {
            // answer = []
            console.log('Received data from API', data);
            // answer.push(data)
            BS.next(data);
            BS.complete();
        });
        return BS;
    }
}
ApplicationService.ɵfac = function ApplicationService_Factory(t) { return new (t || ApplicationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ApplicationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ApplicationService, factory: ApplicationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AvYe":
/*!*************************************************************************!*\
  !*** ./src/app/shared/utilities/bottom-sheet/bottom-sheet.component.ts ***!
  \*************************************************************************/
/*! exports provided: BottomSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetComponent", function() { return BottomSheetComponent; });
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class BottomSheetComponent {
    constructor(bottomSheetRef, data) {
        this.bottomSheetRef = bottomSheetRef;
        this.data = data;
    }
    clearBar() {
        this.bottomSheetRef.dismiss({
            message: 'Cancel',
            data: this.data
        });
        event.preventDefault();
    }
    changeStatus() {
        this.bottomSheetRef.dismiss({
            message: 'Status',
            data: this.data
        });
    }
    ngOnInit() {
        console.log('data received', this.data);
        this.name = this.data && this.data.name;
    }
}
BottomSheetComponent.ɵfac = function BottomSheetComponent_Factory(t) { return new (t || BottomSheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__["MatBottomSheetRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__["MAT_BOTTOM_SHEET_DATA"])); };
BottomSheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BottomSheetComponent, selectors: [["app-bottom-sheet"]], decls: 10, vars: 1, consts: [[1, "bottom-sheet"], [1, "message"], ["mat-button", "", "type", "button", "color", "warn", 1, "message", 3, "click"], ["mat-button", "", "type", "submit", "color", "warn", 1, "change", "message", 3, "click"]], template: function BottomSheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Do you want to delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BottomSheetComponent_Template_button_click_6_listener() { return ctx.clearBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BottomSheetComponent_Template_button_click_8_listener() { return ctx.changeStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.name);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".bottom-sheet[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 50px;\r\n  background-color: #BB3F30;\r\n  padding: 10px 20px;\r\n}\r\n.bottom-sheet[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  color: white;\r\n}\r\n.message[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-left: 5px;\r\n  color: black !important;\r\n}\r\nbutton.change[_ngcontent-%COMP%] {\r\n  color: white !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdHRvbS1zaGVldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLE9BQU87RUFDUCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGVBQWU7O0FBRWpCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoiYm90dG9tLXNoZWV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90dG9tLXNoZWV0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkIzRjMwO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxufVxyXG4uYm90dG9tLXNoZWV0IGRpdiB7XHJcbiAgZmxleDogMTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcblxyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuYnV0dG9uLmNoYW5nZSB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    apiUrl: 'http://localhost:3000',
    sideNavOpen: true
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

/***/ "BAfr":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 27, vars: 0, consts: [[1, "profile-card"], [1, "header"], ["src", "/assets/unizik_logo.png", "alt", "licencee logo"], ["MatSubHeader", ""], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "home"], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "utme"], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "de", "disabled", ""], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "prescience", "disabled", ""], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "jupeb", "disabled", ""], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "sup", "disabled", ""], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "candidate-registration"], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "candidate-admission", "disabled", ""], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "settings"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "UNIZIK ADMISSIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "UTME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "DE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "PRESCIENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "JUPEB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "SUP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "CANDIDATE REGISTRATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "CANDIDATE ADMISSION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "SETTINGS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatNavList"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: ["[_nghost-%COMP%] {\n  padding: 20px;\n  background-color: orange;\n}\n[_nghost-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 20px;\n}\n.profile-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0 20px 20px 20px;\n}\n.profile-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  object-fit: cover;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtBQUNGO0FBQUU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFFQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRUoiLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICBtYXQtaWNvbiB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnByb2ZpbGUtY2FyZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMjBweCAyMHB4IDIwcHg7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDoxMDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "E5XQ":
/*!***********************************************!*\
  !*** ./src/app/shared/interfaces/students.ts ***!
  \***********************************************/
/*! exports provided: NigeriaStates, utmeSubjectCode, utmeProgrammes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NigeriaStates", function() { return NigeriaStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utmeSubjectCode", function() { return utmeSubjectCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utmeProgrammes", function() { return utmeProgrammes; });
const NigeriaStates = [
    'Kano',
    'Lagos',
    'Kaduna',
    'Katsina',
    'Oyo',
    'Rivers',
    'Bauchi',
    'Jigawa',
    'Benue',
    'Anambra',
    'Borno',
    'Delta',
    'Imo',
    'Niger',
    'Akwa Ibom',
    'Ogun',
    'Sokoto',
    'Ondo',
    'Osun',
    'Kogi',
    'Zamfara',
    'Enugu',
    'Kebbi',
    'Edo',
    'Plateau',
    'Adamawa',
    'Cross River',
    'Abia',
    'Ekiti',
    'Kwara',
    'Gombe',
    'Yobe',
    'Taraba',
    'Ebonyi',
    'Nasarawa',
    'Bayelsa',
    'FCT'
];
const utmeSubjectCode = ['PHY', 'MTH', 'GOV', 'GEO', 'POA', 'FRE', 'HIS', 'IGB', 'LIT', 'AGR',
    'Music', 'BIO', 'Home ECO', 'ART', 'CHM', 'CRK', 'COM', 'ISS', 'ECO', 'Yoruba'];
const utmeProgrammes = [
    'Agriculture Economics &Extension',
    'Animal Science & Production',
    'Crop Science & Horticulture',
    'Fisheries and Aquaculture',
    'Food Science and Technology',
    'Forestry and Wildlife',
    'Soil Science and Land Management',
    'Science Education-Integrated Science option',
    'Computer Science',
    'Mathematics',
    'Anatomy',
    'Physiology',
    'Applied Biochemistry',
    'Applied Microbiology',
    'Botany',
    'Parasitology and Entomology',
    'Zoology',
    'Science Education-Biology option',
    'Science Education-Chemistry option',
    'Technical Education-Building/Woodwork Technology option',
    'Technical Education-Electrical/ Electronic Technology option',
    'Technical Education-Mechanical/ Automobile Technology option',
    'Radiography',
    'Environmental Health Sciences',
    'Nursing Science',
    'Medical Laboratory Science',
    'Medical Rehabilitation',
    'Human Nutrition And Dietetics',
    'Medicine',
    'Pharmacy',
    'Pharm D',
    'Geological Sciences',
    'Geophysics',
    'Physics and Industrial Physics',
    'Science Education-Mathematics option',
    'Pure & Industrial Chemistry',
    'Statistics',
    'Agricultural and Bio- resources Engineering',
    'Chemical Engineering',
    'Industrial Production Engineering',
    'Mechanical Engineering',
    'Metallurgical/ Material Engineering',
    'Polymer and Textile Engineering',
    'Electronics and Computer Engineering',
    'Civil Engineering',
    'Electrical Engineering',
    'Petroleum Engineering',
    'Building',
    'Library and Information Science',
    'Africa & Asian Studies-Chinese Option',
    'Philosophy',
    'Early Childhood and Primary Education',
    'Guidance and Counseling- Health option',
    'Guidance and Counseling- Biology option',
    'Africa & Asian Studies-Igbo Option',
    'Linguistics',
    'Modern European Languages',
    'Fine and Applied Arts',
    'Law',
    'Human Kinetics',
    'Health Education',
    'Psychology',
    'Geography & Meteorology',
    'Physics',
    'Adult and Continuing Education-Accounting Option',
    'Adult and Continuing Education-Economics Option',
    'Adult and Continuing Education-Marketing Option',
    'Adult and Continuing Education-Mass Communication Option',
    'Adult and Continuing Education-Political Science Option',
    'Adult and Continuing Education-Accounting Option',
    'Educational Management-Science Option',
    'Educational Management-Arts Option',
    'Educational Management-Social/Environmental Option',
    'Educational Management-Management Option',
    'Science Education- Computer Science Option',
    'Environmental Management',
    'Architecture',
    'Quantity Surveying',
    'Surveying and Geo-informatics',
    'Business Education',
    'Business Administration',
    'Marketing',
    'Estate Management',
    'Cooperative Economics and Management',
    'Entrepreneurship',
    'Economics',
    'Accountancy',
    'Banking and Finance',
    'Education Political Science',
    'Political Science',
    'English Language & literature',
    'Sociology',
    'Theatre Arts',
    'Mass Communication',
    'Education English',
    'Music',
    'Religion and Human Relations',
    'Education History',
    'Education French',
    'Education Religion',
    'Education Economics',
    'Education Igbo',
    'Education Fine& Applied Art',
    'Education Music',
    'Public Administration',
    'Agricultural Education',
    'Home Economics Education',
];


/***/ }),

/***/ "FZnX":
/*!********************************************************!*\
  !*** ./src/app/shared/interfaces/ikeyed-collection.ts ***!
  \********************************************************/
/*! exports provided: KeyedCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyedCollection", function() { return KeyedCollection; });
class KeyedCollection {
    constructor() {
        this.items = {};
        this.count = 0;
    }
    ContainsKey(key) {
        return this.items.hasOwnProperty(key);
    }
    Count() {
        return this.count;
    }
    Add(key, value) {
        if (!this.items.hasOwnProperty(key))
            this.count++;
        this.items[key] = value;
    }
    Remove(key) {
        var val = this.items[key];
        delete this.items[key];
        this.count--;
        return val;
    }
    Item(key) {
        return this.items[key];
    }
    Keys() {
        var keySet = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(prop);
            }
        }
        return keySet;
    }
    Values() {
        var values = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                values.push(this.items[prop]);
            }
        }
        return values;
    }
}
// var ages = new Dictionary<Number>();
// ages.Add('Dustin', 36);
// ages.Add('Amy', 25);
// ages.Add('Angie', 35);
// ages.Add('Josh', 4);
// var hasJosh = ages.ContainsKey('Josh'); //will return true
// var hasBen = ages.ContainsKey('Ben'); //will return false
// var amyAge = ages.Item('Amy'); //will return 25
// var keys = ages.Keys(); //will return ['Dustin', 'Amy', 'Angie', 'Josh'];
// var vals = ages.Values(); //will return [36, 25, 35, 4];
// var count = ages.Count(); //will return 4;
// ages.Remove('Josh'); //removes Josh
// count = ages.Count(); //will return 3;


/***/ }),

/***/ "Gyom":
/*!**********************************************************!*\
  !*** ./src/app/topview/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");










function DashboardComponent_mat_grid_tile_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-grid-tile", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-menu", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Expand");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-card-content", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Card Content Here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colspan", card_r1.cols)("rowspan", card_r1.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", card_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r2);
} }
class DashboardComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        /** Based on the screen size, switch from standard to one column per row */
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(({ matches }) => {
            if (matches) {
                return [
                    { title: 'Card 1', cols: 1, rows: 1 },
                    { title: 'Card 2', cols: 1, rows: 1 },
                    { title: 'Card 3', cols: 1, rows: 1 },
                    { title: 'Card 4', cols: 1, rows: 1 }
                ];
            }
            return [
                { title: 'Card 1', cols: 2, rows: 1 },
                { title: 'Card 2', cols: 1, rows: 1 },
                { title: 'Card 3', cols: 1, rows: 2 },
                { title: 'Card 4', cols: 1, rows: 1 }
            ];
        }));
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 6, vars: 3, consts: [[1, "grid-container"], [1, "mat-h1"], ["cols", "2", "rowHeight", "350px"], [3, "colspan", "rowspan", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"], [1, "dashboard-card"], ["mat-icon-button", "", "aria-label", "Toggle menu", 1, "more-button", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["menu", "matMenu"], ["mat-menu-item", ""], [1, "dashboard-card-content"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-grid-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DashboardComponent_mat_grid_tile_4_Template, 17, 4, "mat-grid-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 1, ctx.cards));
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".grid-container[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.dashboard-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgbGVmdDogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJvdHRvbTogMTVweDtcbn1cblxuLm1vcmUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"] });


/***/ }),

/***/ "KIC3":
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/passmark.pipe.ts ***!
  \***********************************************/
/*! exports provided: PassmarkPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassmarkPipe", function() { return PassmarkPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PassmarkPipe {
    transform(items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(myItem => {
            return myItem.year.toLocaleLowerCase().includes(searchText);
        });
    }
}
PassmarkPipe.ɵfac = function PassmarkPipe_Factory(t) { return new (t || PassmarkPipe)(); };
PassmarkPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "passmark", type: PassmarkPipe, pure: true });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ "aF9I");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "aZ8m");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "BAfr");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widgets/card/card.component */ "SHZb");
/* harmony import */ var _directives_app_disable_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/app-disable.directive */ "r0B7");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../material/material.module */ "hctd");
/* harmony import */ var _pipes_query_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/query.pipe */ "9nCp");
/* harmony import */ var _utilities_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utilities/bottom-sheet/bottom-sheet.component */ "AvYe");
/* harmony import */ var _tables_settings_passmark_settings_passmark_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tables/settings-passmark/settings-passmark.component */ "YilV");
/* harmony import */ var _pipes_passmark_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/passmark.pipe */ "KIC3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");

// import {HttpClientModule} from '@angular/common/http';





// import { SchstaffstrengComponent } from './widgets/schstaffstreng/schstaffstreng.component';








// @ts-ignore: Unreachable code error
// import {HighchartsChartModule} from 'highcharts-angular';
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
        ], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"],
        _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
        _directives_app_disable_directive__WEBPACK_IMPORTED_MODULE_7__["AppDisableDirective"],
        _pipes_query_pipe__WEBPACK_IMPORTED_MODULE_9__["QueryPipe"],
        _utilities_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_10__["BottomSheetComponent"],
        _tables_settings_passmark_settings_passmark_component__WEBPACK_IMPORTED_MODULE_11__["SettingsPassmarkComponent"],
        _pipes_passmark_pipe__WEBPACK_IMPORTED_MODULE_12__["PassmarkPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"]], exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"],
        _directives_app_disable_directive__WEBPACK_IMPORTED_MODULE_7__["AppDisableDirective"], _pipes_passmark_pipe__WEBPACK_IMPORTED_MODULE_12__["PassmarkPipe"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        _utilities_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_10__["BottomSheetComponent"],
        _tables_settings_passmark_settings_passmark_component__WEBPACK_IMPORTED_MODULE_11__["SettingsPassmarkComponent"]] }); })();


/***/ }),

/***/ "PhIg":
/*!************************************************!*\
  !*** ./src/app/topview/utme/utme.component.ts ***!
  \************************************************/
/*! exports provided: UtmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtmeComponent", function() { return UtmeComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_application_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/application.service */ "AQhQ");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
















const _c0 = ["UploadFileInput"];
class UtmeComponent {
    constructor(http, formBuilder, applicationService) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.applicationService = applicationService;
        this.selectedStatusMessage = {};
        this.color = 'primary';
        this.mode = 'determinate';
        this.spinnerValue = 0;
        this.title = 'api-nodejs2';
        this.totalmode = 'determinate';
        this.totalvalue = 0;
        // totalbufferValue = 75;
        this.tempmode = 'determinate';
        this.tempvalue = 0;
        this.mainmode = 'determinate';
        this.mainvalue = 0;
        this.loaderForFileUpload = false;
        this.fileName = '';
        this.uploadProgress = 0;
        // @ts-ignore
        this.busyStatus = false;
        const source = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(30000);
        this.subscription = source.subscribe(val => {
            if (this.busyStatus === true) {
                this.applicationService.getStatus();
            }
            else { }
        });
    }
    checkIfBusy() {
        let answer = false;
        if (this.selectedStatusMessage.status === 'busy') {
            answer = true;
        }
        return answer;
    }
    ngOnInit() {
        this.applicationService.getStatus();
        // console.log("ON INIT")
        this.fileUploadForm = this.formBuilder.group({
            myfile: ['']
        });
        this.applicationService.StatusMessageUTME.subscribe((data) => {
            this.selectedStatusMessage = data;
            this.totalvalue = (this.selectedStatusMessage.rowdata_saved_to_temp + this.selectedStatusMessage.rowdata_processed_success
                + this.selectedStatusMessage.rowdata_error) / (this.selectedStatusMessage.total_rowdata_uploaded_to_api * 2) * 100;
            this.tempvalue = (this.selectedStatusMessage.rowdata_saved_to_temp / this.selectedStatusMessage.total_rowdata_uploaded_to_api) * 100;
            this.mainvalue = this.selectedStatusMessage.rowdata_processed_success / this.selectedStatusMessage.total_rowdata_uploaded_to_api * 100;
            if (this.checkIfBusy) {
                this.busyStatus = true;
            }
            // else if (this.selectedStatusMessage){this.busyStatus = false;}
        });
        // this.uploadForm = this.formBuilder.group({
        //   profile: ['']
        // });
    }
    // @ts-ignore
    onFileSelect1(event) {
        let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            // console.log(file);
            // @ts-ignore
            if (!_.includes(af, file.type)) {
                alert('Only EXCEL Docs Allowed!');
            }
            else {
                this.fileInputLabel = file.name;
                // @ts-ignore
                this.fileUploadForm.get('myfile').setValue(file);
            }
        }
    }
    onFileSelect2(event) {
        let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            // console.log(file);
            // @ts-ignore
            if (!_.includes(af, file.type)) {
                alert('Only EXCEL Docs Allowed!');
            }
            else {
                this.fileInputLabel = file.name;
                // @ts-ignore
                this.fileUploadForm.get('myfile').setValue(file);
            }
        }
    }
    onFileSelect(event) {
        if (event.target.files.length > 0) {
            let fileReader = new FileReader();
            const file = event.target.files[0];
            fileReader.readAsArrayBuffer(file);
            // @ts-ignore
            this.fileUploadForm.get('myfile').setValue(file);
            // Upload() {
            fileReader.onload = (e) => {
                console.log('FILE READER ONLOAD RUN');
                this.arrayBuffer = fileReader.result;
                var data = new Uint8Array(this.arrayBuffer);
                this.arr = new Array();
                for (var i = 0; i != data.length; ++i) {
                    this.arr[i] = String.fromCharCode(data[i]);
                }
                this.bstr = this.arr.join("");
            };
        }
        // if (file) {
        //     this.fileName = file.name;
        //     const formData = new FormData();
        //     // @ts-ignore
        //     formData.append("file", this.fileUploadForm.get('myfile').value);
        //     const testData = ['HELPSO'];
        //     this.http.post<any>("http://localhost:3000/api/uploadutme", formData).subscribe(
        //       (res) => {
        //         console.log("SUCCESS")
        //         console.log(res);
        //       },
        //       (err) => {
        //         console.log("ERROR")
        //         console.log(err);
        //       }
        //     );;
        // }
    }
    reset() {
        this.uploadProgress = 0;
        // @ts-ignore
        this.uploadSub = null;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    // @ts-ignore
    onFormSubmit() {
        // @ts-ignore
        // if (!this.fileUploadForm.get('myfile').value) {
        //   alert('Please fill valid details!');
        //   return false;
        // }
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        const formData = new FormData();
        // @ts-ignore
        formData.append('file', this.fileUploadForm.get('myfile').value);
        // @ts-ignore
        console.log('FILE UPLOAD VALUE::', this.fileUploadForm.get('myfile').value);
        // console.log('THIS IS FORMDATA-bstr::',formData, this.bstr)
        // @ts-ignore
        // console.warn('formData::', formData['file'])
        // console.warn('formData2::', formData.get('file'))
        // const upload$ = this.http.post("http://localhost:3000/api/uploadpresciencecandidate", formData, {
        this.busyStatus = true;
        const upload$ = this.http.post("http://localhost:3000/api/uploadutme", formData, {
            reportProgress: true,
            observe: 'events'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            console.warn('formData3::', formData.get('file'));
            this.reset();
        }));
        this.uploadSub = upload$.subscribe(event => {
            if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].UploadProgress) {
                // @ts-ignore
                this.spinnerValue = Math.round(100 * (event.loaded / event.total));
            }
        });
    }
    onFormSubmit1() {
        const inputEl = this.uploadFileInput.nativeElement;
        // @ts-ignore
        const fileCount = inputEl.files.length;
        const formData = new FormData();
        const headers = new Headers();
        headers.set('Accept', 'application/json');
        headers.delete('Content-Type'); // mandate for accepting binary content
        if (fileCount > 0) {
            for (let i = 0; i < fileCount; i++) {
                // @ts-ignore
                formData.append('file', inputEl.files.item(i));
            }
            try {
                this.loaderForFileUpload = true;
                console.log('FORMDATA', formData);
                this.http
                    .post('http://localhost:3000/api/uploadutme', formData)
                    // @ts-ignore
                    .subscribe(Response => {
                    // @ts-ignore
                    if (Response.status) {
                        console.log('File uploaded successfully', 'Success!', Response);
                    }
                    // @ts-ignore
                }, error => {
                    console.log('File contents mismatch', error.statusText);
                });
            }
            catch (e) {
                console.log('Error occured while posting uploaded file. See below message for details : \n');
                console.log(e);
            }
        }
    }
}
UtmeComponent.ɵfac = function UtmeComponent_Factory(t) { return new (t || UtmeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_application_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"])); };
UtmeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UtmeComponent, selectors: [["app-utme"]], viewQuery: function UtmeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.uploadFileInput = _t.first);
    } }, decls: 71, vars: 45, consts: [[3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px", "fxLayoutGap.lt-md", "0px", 1, "input-row"], [1, "custom-file"], ["type", "file", "id", "customFile", "name", "myfile", "accept", ".xlsx,.xls", "multiple", "false", 1, "custom-file-input", 3, "change"], ["UploadFileInput", ""], [1, "example-margin", 3, "mode", "value"], ["mat-stroked-button", "", "color", "primary", "type", "submit"], [1, "time-display"], ["cols", "2", "rowHeight", "80px"], [1, "example-margin", 3, "color", "mode", "value"], [1, "example-h2"], ["cols", "5", "rowHeight", "80px"], [3, "colspan"], [1, "for-status"], [1, "for-status", "errors-highlight"]], template: function UtmeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "UTME Candidates Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function UtmeComponent_Template_form_ngSubmit_4_listener() { return ctx.onFormSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Choose File (.xlx or .xlsx)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function UtmeComponent_Template_input_change_11_listener($event) { return ctx.onFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "mat-progress-spinner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Upload Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-grid-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "mat-progress-bar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Processing details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-grid-list", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-grid-tile", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "mat-progress-bar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-grid-tile", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](42, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "mat-grid-tile", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "mat-grid-tile", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "mat-progress-bar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "mat-grid-tile", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](48, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "mat-grid-tile", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "mat-grid-tile", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, " Total Records from Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "mat-grid-tile", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "mat-grid-tile", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "mat-grid-tile", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, " added to Main table");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "mat-grid-tile", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "mat-grid-tile", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, " Total Errors");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "mat-grid-tile", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "mat-grid-tile", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "mat-grid-tile", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, " Updated on Main table");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.fileUploadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mode", ctx.mode)("value", ctx.spinnerValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Upload status- ", ctx.selectedStatusMessage.status, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("time taken- ", ctx.selectedStatusMessage.time_taken, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx.color)("mode", ctx.totalmode)("value", ctx.totalvalue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](33, 36, ctx.totalvalue, "1.0-0"), "% Complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx.color)("mode", ctx.tempmode)("value", ctx.tempvalue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](42, 39, ctx.tempvalue, "1.0-0"), "% Temp table upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx.color)("mode", ctx.mainmode)("value", ctx.mainvalue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](48, 42, ctx.mainvalue, "1.0-0"), "% Processed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.selectedStatusMessage.total_rowdata_uploaded_to_api);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.selectedStatusMessage.new_rowdata_in_main);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.selectedStatusMessage.rowdata_error);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.selectedStatusMessage.rowdata_info_updated);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", 1);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinner"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridTile"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DecimalPipe"]], styles: ["p[_ngcontent-%COMP%] {\r\n  font-family: Lato;\r\n}\r\n\r\n\r\n.for-status[_ngcontent-%COMP%] {\r\n  padding-top:15px;\r\n  padding-left: 30px;\r\n  font-size:40px;\r\n  text-align:center;\r\n  font-weight:bold;\r\n\r\n}\r\n\r\n\r\n.time-display[_ngcontent-%COMP%] {\r\n  \r\n  align-items:right;\r\n  padding-left:60px;\r\n}\r\n\r\n\r\n.errors-highlight[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0bWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCOztBQUVsQjs7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoidXRtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgZm9udC1mYW1pbHk6IExhdG87XHJcbn1cclxuXHJcblxyXG4uZm9yLXN0YXR1cyB7XHJcbiAgcGFkZGluZy10b3A6MTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgZm9udC1zaXplOjQwcHg7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuXHJcbn1cclxuXHJcbi50aW1lLWRpc3BsYXkge1xyXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXHJcbiAgYWxpZ24taXRlbXM6cmlnaHQ7XHJcbiAgcGFkZGluZy1sZWZ0OjYwcHg7XHJcbn1cclxuXHJcbi5lcnJvcnMtaGlnaGxpZ2h0IHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "SHZb":
/*!*******************************************************!*\
  !*** ./src/app/shared/widgets/card/card.component.ts ***!
  \*******************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");


class CardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-widget-card"]], inputs: { school: "school", count: "count", female: "female", male: "male", logo: "logo" }, decls: 17, vars: 4, consts: [[1, "text"], [1, "total"], [1, "details"], ["color", "primary"], [1, "description"], ["color", "warn"], [1, "chart"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "man");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "girl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.school);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.count);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.male);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.female);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: ["h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n.total[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n\n.details[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 20px;\n  top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtBQUNGIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcblxyXG59XHJcblxyXG4udG90YWwge1xyXG4gIGZvbnQtc2l6ZTogM2VtO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb257XHJcbiAgZm9udC1zaXplOiAgMmVtO1xyXG59XHJcblxyXG4uZGV0YWlsc3tcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLm1hdC1pY29ue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgdG9wOiA1cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


// import { EmailstaffinfoService } from './services/emailstaffinfo.service';
// import { SettingsService } from './services/settings.service';
// import { StaffInfoService } from './services/staff-info.service';
// import { RawUtil, UtilityService } from './services/utility.service';
// import { Staff } from './shared/interfaces/a-staff';
class AppComponent {
    constructor() {
        this.title = 'uaras-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Ta2s":
/*!************************************************************************************!*\
  !*** ./src/app/topview/candidate-registration/candidate-registration.component.ts ***!
  \************************************************************************************/
/*! exports provided: CandidateRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateRegistrationComponent", function() { return CandidateRegistrationComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_shared_interfaces_students__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/interfaces/students */ "E5XQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_application_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/application.service */ "AQhQ");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

















function CandidateRegistrationComponent_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CandidateRegistrationComponent_mat_icon_7_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.clearFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CandidateRegistrationComponent_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CandidateRegistrationComponent_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stat_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", stat_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", stat_r12, " ");
} }
function CandidateRegistrationComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CandidateRegistrationComponent_div_30_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.selectedStudent.phone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CandidateRegistrationComponent_div_30_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.selectedStudent.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CandidateRegistrationComponent_div_30_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.selectedStudent.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CandidateRegistrationComponent_div_30_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.togglePasswordVisibility(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.selectedStudent.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.selectedStudent.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx_r3.showPassword ? "text" : "password")("ngModel", ctx_r3.selectedStudent.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.showPassword ? "visibility_off" : "visibility");
} }
function CandidateRegistrationComponent_p_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p", 23);
} }
function CandidateRegistrationComponent_p_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p", 23);
} }
function CandidateRegistrationComponent_p_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p", 23);
} }
function CandidateRegistrationComponent_p_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " ENGLISH ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CandidateRegistrationComponent_p_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p", 23);
} }
function CandidateRegistrationComponent_mat_chip_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chip_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", chip_r18, " ");
} }
class CandidateRegistrationComponent {
    constructor(applicationService) {
        this.applicationService = applicationService;
        this.selectedStudent = {};
        this.departmentList = [];
        this.Genders = ['M', 'F'];
        this.candidateTypeList = ['UTME', 'DE'];
        this.candidateType = 'UTME';
        this.searchDone = false;
        this.challengePassed = false;
        this.checkVariables = ['utme_aggregate', 'state', 'department'];
        this.checkAnswers = ['', '', ''];
        // StatesList = ['IMO', 'ANAMBRA', 'ENUGU', "EBONYI", "ABIA"];
        this.StatesList = src_app_shared_interfaces_students__WEBPACK_IMPORTED_MODULE_1__["NigeriaStates"];
        this.courseList = src_app_shared_interfaces_students__WEBPACK_IMPORTED_MODULE_1__["utmeSubjectCode"];
        this.programmeList = src_app_shared_interfaces_students__WEBPACK_IMPORTED_MODULE_1__["utmeProgrammes"].sort();
        this.statusMessage = [];
        this.showPassword = false;
        this.envTest = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].sideNavOpen;
    }
    ngOnInit() {
        this.departmentList = this.applicationService.getProgrammes();
    }
    clearFilter() {
        this.selectedStudent = {};
        this.statusMessage = [];
        this.challengePassed = false;
    }
    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }
    checkCutoffMet(cutoffvalue) {
        let answer = false;
        if (this.selectedStudent.utme_aggregate >= cutoffvalue) {
            answer = true;
        }
        return answer;
    }
    takeChallenge() {
        let answer = true;
        return answer;
    }
    getStudentInformation() {
        const AselectedStudent = (this.applicationService.getStudentRecord(this.selectedStudent.reg_num, this.candidateType));
        AselectedStudent.subscribe(data => {
            this.statusMessage = [];
            // console.log({data})
            if (data && data[0].status === 200) {
                this.searchDone = true;
                //   console.log({data})
                // console.log('[0]', data[0])
                // console.log('std record',data[0].studentRecord[0])
                this.statusMessage.push("Examination data found!");
                // save temp student Information
                const tempStudentInfo = data[0].studentRecord[0];
                // set challenge
                this.challengePassed = false;
                this.challengePassed = this.takeChallenge();
                if (this.challengePassed) {
                    this.selectedStudent = tempStudentInfo;
                }
                else { }
                // check if student is registered
                // yes - Load registration status info
                // else -check if result meets department cutoff
                const isRegistered = data[0].studentRecord[0].email !== null && data[0].studentRecord[0].email !== undefined &&
                    data[0].studentRecord[0].email !== '' ? true : false;
                console.log({ isRegistered });
                if (isRegistered) { }
                else {
                    const comboInfo = this.applicationService.suggestDepartment([this.selectedStudent.subject_1,
                        this.selectedStudent.subject_2, this.selectedStudent.subject_3, this.selectedStudent.department,
                        this.selectedStudent.utme_aggregate.toString()]);
                    const cutOffInfo = (this.applicationService.getCutoffInfo(this.selectedStudent.department));
                    cutOffInfo.subscribe(cutoffdata => {
                        console.log("cutoffData:::", cutoffdata);
                        console.log("status:::", cutoffdata[0].status);
                        console.log("length:::", cutoffdata[0].data.length);
                        if (cutoffdata && cutoffdata[0].status === 200 && cutoffdata[0].data.length > 0) {
                            console.log("INSIDE");
                            if (this.checkCutoffMet(cutoffdata[0].data[0].utme_cutoff)) {
                                this.statusMessage.push("You have met department cutoff");
                                this.statusMessage.push("\n");
                                this.statusMessage.push("Instructions:");
                                this.statusMessage.push("Please proceed with your registration");
                                // this.statusMessage.push("Instructions:")
                            }
                            else {
                                this.statusMessage.push("Sorry, you have not met the department cutoff");
                                comboInfo.subscribe((suggestData) => {
                                    if (suggestData.combostatus === 202) {
                                        if (suggestData.suggest.length > 0) {
                                            this.statusMessage.push("Here are a few suggested courses you could do with UNIZIK");
                                            suggestData.suggest.forEach(e => {
                                                this.statusMessage.push(`\n ${e} `);
                                            });
                                            this.statusMessage.push("\n");
                                            this.statusMessage.push("Instructions:");
                                            this.statusMessage.push(`Please go to the nearest JAMB CBT centre`);
                                            this.statusMessage.push(`Change your first choice course to
                  any of the suggested and check back.`);
                                        }
                                        else {
                                            this.statusMessage.push("There are no suggested courses for you at this time.");
                                        }
                                    }
                                });
                            }
                        }
                    });
                }
            }
            else {
                if (data[0].status === 202) {
                    this.statusMessage.push(`Examination data not found!`);
                    this.statusMessage.push("\n");
                    this.statusMessage.push("Instructions:");
                    this.statusMessage.push(`Please go to the nearest JAMB CBT centre`);
                    this.statusMessage.push(`Change your first choice institution to
          Nnamdi Azikiwe University, Awka.`);
                    const temp = this.selectedStudent.reg_num;
                    this.selectedStudent = {};
                    this.selectedStudent.reg_num = temp;
                }
            }
        });
        // console.log("STUDENT RECORD::",this.applicationService.getStudentRecord(this.selectedStudent.reg_num));
    }
    registerStudent() {
        console.log('AT REGISTER STUDENT:: student = ', this.selectedStudent);
        this.applicationService.registerStudent(this.selectedStudent);
    }
    suggestDepartment() {
        this.applicationService.suggestDepartment([this.selectedStudent.subject_1,
            this.selectedStudent.subject_2, this.selectedStudent.subject_3, this.selectedStudent.department,
            this.selectedStudent.utme_aggregate.toString()]).subscribe((suggestData) => {
            if (suggestData.combostatus === 202) {
                if (suggestData.suggest.length > 0) {
                    this.statusMessage.push("Here are a few suggested courses you can do with UNIZIK");
                    suggestData.suggest.forEach(e => {
                        this.statusMessage.push(`\n ${e} `);
                    });
                }
                else {
                    this.statusMessage.push("There are no suggested courses for you at this time.");
                }
            }
        });
    }
    calculateUTMEAgg() {
        this.selectedStudent.utme_aggregate =
            (this.selectedStudent.subject_1_score ? this.selectedStudent.subject_1_score : 0) +
                (this.selectedStudent.subject_2_score ? this.selectedStudent.subject_2_score : 0) +
                (this.selectedStudent.subject_3_score ? this.selectedStudent.subject_3_score : 0) +
                (this.selectedStudent.english_score ? this.selectedStudent.english_score : 0);
        // console.log('AGGREGR', this.selectedStudent.utme_aggregate)
        return this.selectedStudent.utme_aggregate;
    }
    checkLoadedApplication() {
        // console.log('selected student::', this.selectedStudent)
        if (!this.selectedStudent.reg_num || this.selectedStudent.reg_num === '') {
            // console.log('selected student  EMPTY::', this.selectedStudent)
            return false;
        }
        else {
            // console.log('selected student not empty ::', this.selectedStudent)
            return true;
        }
    }
}
CandidateRegistrationComponent.ɵfac = function CandidateRegistrationComponent_Factory(t) { return new (t || CandidateRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_application_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"])); };
CandidateRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CandidateRegistrationComponent, selectors: [["app-candidate-registration"]], decls: 97, vars: 32, consts: [["fxLayout", "column", "fxLayoutGap", "30px", 1, "dialogspacing"], ["fxFlex", ""], ["fxLayout", "column", "fxFlex", "", 1, "dialogspacing"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px", "fxLayoutGap.lt-md", "0px", "fxFlex", "", 1, "input-row"], ["fxFlex", "", "appearance", "fill"], ["matInput", "", "type", "text", "placeholder", "JAMB NO", "name", "jambNo", 3, "ngModel", "ngModelChange"], ["matSuffix", "", "mat-button", "", "mat-icon-button", ""], [3, "click", 4, "ngIf"], [4, "ngIf"], ["fxFlex", "20", "appearance", "fill"], ["required", "", "name", "candidateType", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["matInput", "", "disabled", "", "type", "text", "placeholder", "DEPARTMENT", "name", "department", 1, "displayName", 3, "ngModel", "ngModelChange"], ["class", "input-row", "fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px", "fxLayoutGap.lt-md", "0px", 4, "ngIf"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px", "fxLayoutGap.lt-md", "0px", 1, "input-row"], ["disabled", "", "matInput", "", "type", "text", "placeholder", "FULLNAME", "name", "fullname", 1, "displayName", 3, "ngModel", "ngModelChange"], ["fxFlex", "20"], ["disabled", "", "matInput", "", "type", "text", "placeholder", "GENDER", "name", "gender", 1, "displayName", 3, "ngModel", "ngModelChange"], ["disabled", "", "matInput", "", "type", "text", "placeholder", "STATE", "name", "state", 1, "displayName", 3, "ngModel", "ngModelChange"], ["disabled", "", "matInput", "", "type", "text", "placeholder", "LGA", "name", "lga", 1, "displayName", 3, "ngModel", "ngModelChange"], [1, "score-background"], ["fxLayout", "column", "fxFlex", "15"], ["fxFlex", "", 1, "for-english"], ["class", "for-english", "fxFlex", "", 4, "ngIf"], ["fxFlex", "", "appearance", "outline"], ["disabled", "", "matInput", "", "type", "number", "name", "subject_1_score", 1, "scoreInput", 3, "ngModel", "ngModelChange"], ["disabled", "", "matInput", "", "type", "number", "name", "subject_2_score", 1, "scoreInput", 3, "ngModel", "ngModelChange"], ["disabled", "", "matInput", "", "type", "number", "name", "subject_3_score", 1, "scoreInput", 3, "ngModel", "ngModelChange"], ["fxLayout", "column", "fxFlex", "15", 1, "for-english-group"], ["disabled", "", "matInput", "", "type", "number", "name", "english_score", 1, "scoreInput", 3, "ngModel", "ngModelChange"], ["fxLayout", "column", "fxFlex", ""], ["fxFlex", "50"], ["fxFlex", "", 1, "for-english", "center-item"], ["fxFlex", "", 1, "for-english", "utmefont", "center-item"], ["fxFlex", "", "mat-raised-button", "", "type", "submit", "color", "primary", 3, "disabled", "click"], ["fxFlex", "", "mat-raised-button", "", 1, "typicalbutton"], ["fxFlex", "45", 1, "mat-elevation-z8", "status-panel"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayout.lt-md", "column", "fxLayoutGap", "20px", "fxLayoutGap.lt-md", "0px", 1, "input-row"], ["center-item", ""], ["center-item", "", 1, "mat-chip-list-stacked"], [4, "ngFor", "ngForOf"], [3, "click"], [3, "value"], ["matInput", "", "type", "text", "placeholder", "PHONENO", "name", "phone", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "placeholder", "EMAIL", "name", "email", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "PASSWORD", "name", "password", 3, "type", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "click"]], template: function CandidateRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CandidateRegistrationComponent_Template_input_ngModelChange_5_listener($event) { return ctx.selectedStudent.reg_num = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CandidateRegistrationComponent_mat_icon_7_Template, 2, 0, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CandidateRegistrationComponent_mat_icon_8_Template, 2, 0, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "e.g. JAMBNO 124567CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Insert JAMB NO!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CandidateRegistrationComponent_Template_mat_select_ngModelChange_14_listener($event) { return ctx.candidateType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CandidateRegistrationComponent_mat_option_15_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "e.g. UTME or DE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Candidate type required!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CandidateRegistrationComponent_Template_button_click_20_listener() { return ctx.getStudentInformation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CandidateRegistrationComponent_Template_input_ngModelChange_25_listener($event) { return ctx.selectedStudent.department = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "bio-data");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, CandidateRegistrationComponent_div_30_Template, 9, 5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CandidateRegistrationComponent_Template_input_ngModelChange_33_listener($event) { return ctx.selectedStudent.fullname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CandidateRegistrationComponent_Template_input_ngModelChange_36_listener($event) { return ctx.selectedStudent.sex = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CandidateRegistrationComponent_Template_input_ngModelChange_38_listener($event) { return ctx.selectedStudent.state = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CandidateRegistrationComponent_Template_input_ngModelChange_40_listener($event) { return ctx.selectedStudent.lga = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "exam scores");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](49, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, CandidateRegistrationComponent_p_50_Template, 1, 0, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "mat-form-field", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CandidateRegistrationComponent_Template_input_ngModelChange_53_listener($event) { return ctx.selectedStudent.subject_1_score = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](57, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, CandidateRegistrationComponent_p_58_Template, 1, 0, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "mat-form-field", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CandidateRegistrationComponent_Template_input_ngModelChange_61_listener($event) { return ctx.selectedStudent.subject_2_score = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](65, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, CandidateRegistrationComponent_p_66_Template, 1, 0, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "mat-form-field", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CandidateRegistrationComponent_Template_input_ngModelChange_69_listener($event) { return ctx.selectedStudent.subject_3_score = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, CandidateRegistrationComponent_p_71_Template, 2, 0, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](72, CandidateRegistrationComponent_p_72_Template, 1, 0, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "mat-form-field", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CandidateRegistrationComponent_Template_input_ngModelChange_75_listener($event) { return ctx.selectedStudent.english_score = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "utme total aggregate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CandidateRegistrationComponent_Template_button_click_83_listener() { return ctx.registerStudent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "REGISTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "h3", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "STATUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "mat-chip-list", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](93, CandidateRegistrationComponent_mat_chip_93_Template, 2, 1, "mat-chip", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "Bulk upload eligble students");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedStudent.reg_num);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.checkLoadedApplication());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.checkLoadedApplication());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.candidateType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.candidateTypeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedStudent.department);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.challengePassed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedStudent.fullname);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedStudent.sex);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedStudent.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedStudent.lga);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](49, 26, ctx.selectedStudent.subject_1), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.searchDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedStudent.subject_1_score);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](57, 28, ctx.selectedStudent.subject_2), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.searchDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedStudent.subject_2_score);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](65, 30, ctx.selectedStudent.subject_3), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.searchDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedStudent.subject_3_score);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.searchDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.searchDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedStudent.english_score);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.calculateUTMEAgg(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.challengePassed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.statusMessage);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipList"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["UpperCasePipe"]], styles: [".for-english[_ngcontent-%COMP%] {\n  padding-top: 22px;\n}\n\n.for-english-group[_ngcontent-%COMP%] {\n  padding-left: 30px;\n}\n\n.utmefont[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\n.score-background[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  background-color: #F0F0F0;\n}\n\n.score-color[_ngcontent-%COMP%] {\n  background-color: #F0F0F0;\n}\n\n.dialogspacing[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\ninput[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.displayName[_ngcontent-%COMP%]:disabled {\n  background: white;\n  color: black;\n}\n\n.money-font[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.scoreInput[_ngcontent-%COMP%]:disabled {\n  color: black;\n}\n\n.center-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ninput[class~=bg-transparente][_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\nmat-chip[_ngcontent-%COMP%] {\n  min-width: 250px;\n  max-height: 60px;\n}\n\n.status-panel[_ngcontent-%COMP%] {\n  max-height: 620px;\n  overflow: auto;\n}\n\n.mat-card.scrollable-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.mat-card.scrollable-content[_ngcontent-%COMP%]    > .mat-card-title-group[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.mat-card.scrollable-content[_ngcontent-%COMP%]    > .mat-card-content[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n\n.mat-chip-list-wrapper[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n  clear: left;\n}\n\n.mat-chip-list-wrapper[_ngcontent-%COMP%]   .mat-chip-input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n\n.mat-chip-list-wrapper[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYW5kaWRhdGUtcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtBQUFGOztBQUlBO0VBQ0UsYUFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0FBREY7O0FBSUE7RUFFRSxZQUFBO0FBRkY7O0FBS0E7RUFBYyxrQkFBQTtBQURkOztBQUdBO0VBQ0UsNkJBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQVFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFMRjs7QUFPRTtFQUNFLGNBQUE7QUFMSjs7QUFRRTtFQUNFLGdCQUFBO0FBTko7O0FBWUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFURjs7QUFZQTtFQUNFLFdBQUE7QUFURjs7QUFZQSxzQ0FBQTs7QUFDQTtFQUNFLHNCQUFBO0FBVEYiLCJmaWxlIjoiY2FuZGlkYXRlLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3ItZW5nbGlzaCB7XHJcbiAgcGFkZGluZy10b3A6MjJweDtcclxuXHJcbn1cclxuXHJcbi5mb3ItZW5nbGlzaC1ncm91cCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4udXRtZWZvbnQge1xyXG4gIGZvbnQtc2l6ZTozMHB4XHJcblxyXG59XHJcbi5zY29yZS1iYWNrZ3JvdW5kIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6MjBweDtcclxuICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojRjBGMEYwO1xyXG59XHJcblxyXG4uc2NvcmUtY29sb3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6I0YwRjBGMDtcclxuXHJcbn1cclxuXHJcbi5kaWFsb2dzcGFjaW5nIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uZGlzcGxheU5hbWU6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm1vbmV5LWZvbnQge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnNjb3JlSW5wdXQ6ZGlzYWJsZWQge1xyXG5cclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jZW50ZXItaXRlbSB7dGV4dC1hbGlnbjpjZW50ZXI7fVxyXG5cclxuaW5wdXRbY2xhc3N+PVwiYmctdHJhbnNwYXJlbnRlXCJdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxubWF0LWNoaXAge1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgbWF4LWhlaWdodDogNjBweDtcclxufVxyXG5cclxuLnN0YXR1cy1wYW5lbCB7XHJcbiAgbWF4LWhlaWdodDogNjIwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi8vIC5zdGF0dXMtaW5mbyB7XHJcbi8vICAgb3ZlcmZsb3c6IGF1dG87XHJcbi8vICAgbWF4LWhlaWdodDppbmhlcml0O1xyXG4vLyB9XHJcblxyXG4ubWF0LWNhcmQuc2Nyb2xsYWJsZS1jb250ZW50IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgPiAubWF0LWNhcmQtdGl0bGUtZ3JvdXAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICA+IC5tYXQtY2FyZC1jb250ZW50IHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi5tYXQtY2hpcC1saXN0LXdyYXBwZXIgbWF0LWNoaXAge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNsZWFyOiBsZWZ0O1xyXG59XHJcblxyXG4ubWF0LWNoaXAtbGlzdC13cmFwcGVyIC5tYXQtY2hpcC1pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qKiBKdXN0IGZvciBhbGlnbiBjbG9zZSBpY29uL2J1dHRvbiAqL1xyXG4ubWF0LWNoaXAtbGlzdC13cmFwcGVyIG1hdC1jaGlwIC5tYXQtY2hpcC1yZW1vdmUge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "W3zb":
/*!********************************************!*\
  !*** ./src/app/topview/de/de.component.ts ***!
  \********************************************/
/*! exports provided: DeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeComponent", function() { return DeComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");











const _c0 = ["UploadFileInput"];
class DeComponent {
    constructor(http, formBuilder) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.color = 'primary';
        this.mode = 'determinate';
        this.spinnerValue = 0;
        this.title = 'api-nodejs2';
        this.loaderForFileUpload = false;
        this.fileName = '';
        this.uploadProgress = 0;
    }
    ngOnInit() {
        this.fileUploadForm = this.formBuilder.group({
            myfile: ['']
        });
        // this.uploadForm = this.formBuilder.group({
        //   profile: ['']
        // });
    }
    // @ts-ignore
    onFileSelect1(event) {
        let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            // console.log(file);
            // @ts-ignore
            if (!_.includes(af, file.type)) {
                alert('Only EXCEL Docs Allowed!');
            }
            else {
                this.fileInputLabel = file.name;
                // @ts-ignore
                this.fileUploadForm.get('myfile').setValue(file);
            }
        }
    }
    onFileSelect2(event) {
        let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            // console.log(file);
            // @ts-ignore
            if (!_.includes(af, file.type)) {
                alert('Only EXCEL Docs Allowed!');
            }
            else {
                this.fileInputLabel = file.name;
                // @ts-ignore
                this.fileUploadForm.get('myfile').setValue(file);
            }
        }
    }
    onFileSelect(event) {
        if (event.target.files.length > 0) {
            let fileReader = new FileReader();
            const file = event.target.files[0];
            fileReader.readAsArrayBuffer(file);
            // @ts-ignore
            this.fileUploadForm.get('myfile').setValue(file);
            // Upload() {
            fileReader.onload = (e) => {
                console.log('FILE READER ONLOAD RUN');
                this.arrayBuffer = fileReader.result;
                var data = new Uint8Array(this.arrayBuffer);
                this.arr = new Array();
                for (var i = 0; i != data.length; ++i) {
                    this.arr[i] = String.fromCharCode(data[i]);
                }
                this.bstr = this.arr.join("");
            };
        }
        // if (file) {
        //     this.fileName = file.name;
        //     const formData = new FormData();
        //     // @ts-ignore
        //     formData.append("file", this.fileUploadForm.get('myfile').value);
        //     const testData = ['HELPSO'];
        //     this.http.post<any>("http://localhost:3000/api/uploadutme", formData).subscribe(
        //       (res) => {
        //         console.log("SUCCESS")
        //         console.log(res);
        //       },
        //       (err) => {
        //         console.log("ERROR")
        //         console.log(err);
        //       }
        //     );;
        // }
    }
    reset() {
        this.uploadProgress = 0;
        // @ts-ignore
        this.uploadSub = null;
    }
    // @ts-ignore
    onFormSubmit() {
        // @ts-ignore
        // if (!this.fileUploadForm.get('myfile').value) {
        //   alert('Please fill valid details!');
        //   return false;
        // }
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        const formData = new FormData();
        // @ts-ignore
        formData.append('file', this.fileUploadForm.get('myfile').value);
        // @ts-ignore
        console.log('FILE UPLOAD VALUE::', this.fileUploadForm.get('myfile').value);
        // console.log('THIS IS FORMDATA-bstr::',formData, this.bstr)
        // @ts-ignore
        // console.warn('formData::', formData['file'])
        // console.warn('formData2::', formData.get('file'))
        const upload$ = this.http.post("http://localhost:3000/api/uploaddecandidate", formData, {
            // const upload$ = this.http.post("http://localhost:3000/api/uploadutme", formData, {
            reportProgress: true,
            observe: 'events'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            console.warn('formData3::', formData.get('file'));
            this.reset();
        }));
        this.uploadSub = upload$.subscribe(event => {
            if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].UploadProgress) {
                // @ts-ignore
                this.spinnerValue = Math.round(100 * (event.loaded / event.total));
            }
        });
    }
    onFormSubmit1() {
        const inputEl = this.uploadFileInput.nativeElement;
        // @ts-ignore
        const fileCount = inputEl.files.length;
        const formData = new FormData();
        const headers = new Headers();
        headers.set('Accept', 'application/json');
        headers.delete('Content-Type'); // mandate for accepting binary content
        if (fileCount > 0) {
            for (let i = 0; i < fileCount; i++) {
                // @ts-ignore
                formData.append('file', inputEl.files.item(i));
            }
            try {
                this.loaderForFileUpload = true;
                console.log('FORMDATA', formData);
                this.http
                    .post('http://localhost:3000/api/uploaddecandidate', formData)
                    // @ts-ignore
                    .subscribe(Response => {
                    // @ts-ignore
                    if (Response.status) {
                        console.log('File uploaded successfully', 'Success!', Response);
                    }
                    // @ts-ignore
                }, error => {
                    console.log('File contents mismatch', error.statusText);
                });
            }
            catch (e) {
                console.log('Error occured while posting uploaded file. See below message for details : \n');
                console.log(e);
            }
        }
    }
}
DeComponent.ɵfac = function DeComponent_Factory(t) { return new (t || DeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"])); };
DeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DeComponent, selectors: [["app-de"]], viewQuery: function DeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.uploadFileInput = _t.first);
    } }, decls: 22, vars: 3, consts: [[3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px", "fxLayoutGap.lt-md", "0px", 1, "input-row"], [1, "custom-file"], ["type", "file", "id", "customFile", "name", "myfile", "accept", ".xlsx", "multiple", "false", 1, "custom-file-input", 3, "change"], ["UploadFileInput", ""], [1, "example-margin", 3, "mode", "value"], ["mat-stroked-button", "", "color", "primary", "type", "submit"]], template: function DeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "DE Candidates Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function DeComponent_Template_form_ngSubmit_4_listener() { return ctx.onFormSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Choose File (.xlx or .xlsx)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DeComponent_Template_input_change_11_listener($event) { return ctx.onFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "mat-progress-spinner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Upload Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.fileUploadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", ctx.mode)("value", ctx.spinnerValue);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinner"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], styles: ["p[_ngcontent-%COMP%] {\r\n  font-family: Lato;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoiZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "YHdZ":
/*!************************************************************************!*\
  !*** ./src/app/topview/fresh-candidates/fresh-candidates.component.ts ***!
  \************************************************************************/
/*! exports provided: FreshCandidatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreshCandidatesComponent", function() { return FreshCandidatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FreshCandidatesComponent {
    constructor() { }
    ngOnInit() {
    }
}
FreshCandidatesComponent.ɵfac = function FreshCandidatesComponent_Factory(t) { return new (t || FreshCandidatesComponent)(); };
FreshCandidatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FreshCandidatesComponent, selectors: [["app-fresh-candidates"]], decls: 2, vars: 0, template: function FreshCandidatesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "fresh-candidates works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcmVzaC1jYW5kaWRhdGVzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "YilV":
/*!********************************************************************************!*\
  !*** ./src/app/shared/tables/settings-passmark/settings-passmark.component.ts ***!
  \********************************************************************************/
/*! exports provided: SettingsPassmarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPassmarkComponent", function() { return SettingsPassmarkComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _pipes_passmark_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/passmark.pipe */ "KIC3");
/* harmony import */ var _utilities_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/bottom-sheet/bottom-sheet.component */ "AvYe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_application_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/application.service */ "AQhQ");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/utility.service */ "A1CT");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "FKr1");























function SettingsPassmarkComponent_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SettingsPassmarkComponent_mat_icon_6_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); ctx_r15.filterValues = ""; return ctx_r15.applyFilter(ctx_r15.filterValues); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SettingsPassmarkComponent_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SettingsPassmarkComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "ACADEMIC YEAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SettingsPassmarkComponent_td_17_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SettingsPassmarkComponent_td_17_span_1_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const row_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; return row_r17.year = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", row_r17.year);
} }
function SettingsPassmarkComponent_td_17_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r17.year, "");
} }
function SettingsPassmarkComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SettingsPassmarkComponent_td_17_span_1_Template, 3, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SettingsPassmarkComponent_td_17_span_2_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r18 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.getStatusOfChange(i_r18) && ctx_r4.newEntry);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r4.getStatusOfChange(i_r18) || !ctx_r4.newEntry);
} }
function SettingsPassmarkComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " PASSMARK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SettingsPassmarkComponent_td_20_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-form-field", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SettingsPassmarkComponent_td_20_span_1_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32); const row_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; return row_r26.passmark = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", row_r26.passmark);
} }
function SettingsPassmarkComponent_td_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r26.passmark, "");
} }
function SettingsPassmarkComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SettingsPassmarkComponent_td_20_span_1_Template, 3, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SettingsPassmarkComponent_td_20_span_2_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r27 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.getStatusOfChange(i_r27));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r6.getStatusOfChange(i_r27));
} }
function SettingsPassmarkComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " IS CURRENT? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SettingsPassmarkComponent_td_23_span_1_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", stats_r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", stats_r40, " ");
} }
function SettingsPassmarkComponent_td_23_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-form-field", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "CURRENT?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SettingsPassmarkComponent_td_23_span_1_Template_mat_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43); const row_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; return row_r35.current = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, SettingsPassmarkComponent_td_23_span_1_mat_option_5_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", row_r35.current);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r37.statusList);
} }
function SettingsPassmarkComponent_td_23_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r35.current, "");
} }
function SettingsPassmarkComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SettingsPassmarkComponent_td_23_span_1_Template, 6, 2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SettingsPassmarkComponent_td_23_span_2_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r36 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.getStatusOfChange(i_r36));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r8.getStatusOfChange(i_r36));
} }
function SettingsPassmarkComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "ACTION ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SettingsPassmarkComponent_td_26_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SettingsPassmarkComponent_td_26_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const row_r46 = ctx_r50.$implicit; const i_r47 = ctx_r50.index; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); ctx_r49.updateDrink(row_r46, i_r47, false); return ctx_r49.setStatusOfChange(i_r47, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SettingsPassmarkComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SettingsPassmarkComponent_td_26_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r53); const i_r47 = ctx.index; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); ctx_r52.reset(); return ctx_r52.setStatusOfChange(i_r47, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SettingsPassmarkComponent_td_26_button_4_Template, 3, 0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SettingsPassmarkComponent_td_26_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r53); const row_r46 = ctx.$implicit; const i_r47 = ctx.index; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r54.updateDrink(row_r46, i_r47, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "remove_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r47 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r10.getStatusOfChange(i_r47));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r10.getStatusOfChange(i_r47));
} }
function SettingsPassmarkComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 37);
} }
function SettingsPassmarkComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 38);
} }
function SettingsPassmarkComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r0.value, "\"");
} }
const _c0 = function () { return [10, 15, 25]; };
class SettingsPassmarkComponent {
    constructor(
    // private drinkPipe: DrinkPipe,
    passmarkPipe, userService, utilityService, bottomSheet) {
        this.passmarkPipe = passmarkPipe;
        this.userService = userService;
        this.utilityService = utilityService;
        this.bottomSheet = bottomSheet;
        this.displayedColumns = ['year', 'passmark', 'current', 'action'];
        this.statusList = [0, 1];
        this.title = '';
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.statusChangeList = [];
        this.newEntry = false;
        this.selectedDish = {};
        this.filterValues = '';
        this.promptAnswer = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.drinkAttribute = [];
        this.drinkType = [];
        this.loadMenu();
        // settingService.loadDrinkAttribute();
        // settingService.loadDrinkType();
        this.loadSettings();
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    loadSettings() {
        // this.settingService.DrinkTypeList.subscribe((val) => {
        //   if (val) {
        //     this.drinkType = val;
        //   }
        // });
    }
    loadMenu() {
        this.userService.getPassmarkInfo();
        // this.barService.getMenu();
        this.userService.passMarkList.subscribe((val) => {
            // this.dataSource.data =  (val);
            this.dataSource.data = (val);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this.statusChangeList = [];
            for (let i = 0; i < this.dataSource.data.length; i++) {
                // this.paymentTypeList[i] = 'Walk-in';
                this.statusChangeList[i] = false;
            }
        });
    }
    setStatusOfChange(i, status) {
        this.statusChangeList[i] = status;
    }
    getStatusOfChange(i) {
        return this.statusChangeList[i];
    }
    // getDefValue(row: PassMark): boolean {
    //   let answer = false;
    //   if (row.notDefault)
    //    { answer= true; }
    // return answer;
    // var width = document.getElementById('foo').offsetWidth;
    // }
    // saveDish(): void {
    //   // this.barService.createDrink(this.selectedDish as Drink);
    // }
    reset() {
        if (this.newEntry) {
            const tempData = this.dataSource.data;
            tempData.splice(0, 1);
            this.statusChangeList.splice(0, 1);
            this.dataSource.data = tempData;
        }
        for (let i = 0; i < this.statusChangeList.length; i++) {
            this.statusChangeList[i] = false;
        }
        this.newEntry = false;
    }
    newDrink() {
        this.reset();
        const tempData = this.dataSource.data;
        this.selectedDish = {};
        tempData.splice(0, 0, this.selectedDish);
        this.dataSource.data = tempData;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        for (let i = 0; i < this.dataSource.data.length; i++) {
            this.statusChangeList[i] = false;
        }
        this.newEntry = true;
        // this.doEdit('');
        this.setStatusOfChange(0, true);
        // this.loadMenu();
    }
    updateDrink(aUser, index, toBeDeleted) {
        this.selectedDish = aUser;
        // console.log("SELECTED DISH::::", this.selectedDish);
        if (this.newEntry) {
            if (!toBeDeleted) {
                this.userService.setPassmarkInfo(aUser).subscribe((data) => {
                    if (data) {
                        this.newEntry = false;
                        this.reset();
                        this.loadMenu();
                    }
                });
            }
            else {
                this.newEntry = false;
                if (this.filterValues === '') {
                    this.removeDrink(index);
                }
                else {
                    this.loadMenu();
                }
                this.reset();
            }
        }
        else {
            if (toBeDeleted) {
                this.promptAnswer.next(0);
                // const message = 'WARNING!! YOU ARE ABOUT TO DELETE A DISH! Continue?';
                this.openBottomSheet();
                // this.openSnackBar(message, 'close');
                this.promptAnswer.subscribe((val) => {
                    if (val === 1) {
                        this.userService.deletePassmarkInfo(this.selectedDish).subscribe((val2) => {
                            if (val2) {
                                if (this.filterValues === '') {
                                    this.removeDrink(index);
                                }
                                else {
                                    this.loadMenu();
                                }
                            }
                        });
                    }
                });
            }
            else {
                this.userService.editPassmarkInfo(this.selectedDish);
            }
        }
    }
    openBottomSheet() {
        const sheetRef = this.bottomSheet.open(_utilities_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_5__["BottomSheetComponent"], {
        // data: {name: 'User'}
        });
        sheetRef.afterDismissed().subscribe(data => {
            if (data && data.message === 'Cancel') {
            }
            if (data && data.message === 'Status') {
                this.promptAnswer.next(1);
            }
        });
    }
    removeDrink(i) {
        const temp = this.dataSource.data;
        this.dataSource.data = this.utilityService.sliceTable(i, this.paginator, temp);
    }
    // doEdit(NameRow: string): void {
    //   console.log('REST SETTINGS: ', NameRow );
    //   console.log('REST SETTINGS: ', this.dataSource.data );
    // }
    applyFilter(aFilterValue) {
        // const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = aFilterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
SettingsPassmarkComponent.ɵfac = function SettingsPassmarkComponent_Factory(t) { return new (t || SettingsPassmarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_pipes_passmark_pipe__WEBPACK_IMPORTED_MODULE_4__["PassmarkPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_application_service__WEBPACK_IMPORTED_MODULE_7__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheet"])); };
SettingsPassmarkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SettingsPassmarkComponent, selectors: [["app-settings-passmark"]], viewQuery: function SettingsPassmarkComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([_pipes_passmark_pipe__WEBPACK_IMPORTED_MODULE_4__["PassmarkPipe"]])], decls: 32, vars: 11, consts: [[1, "mat-elevation-z8"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px", "fxLayoutGap.lt-md", "0px", 1, "input-row"], ["appearance", "outline", "fxFlex", "70", 2, "width", "95%", "padding", "20px"], ["matInput", "", "autocomplete", "off", "placeholder", "SEARCH FOR PASSMARK", 3, "ngModel", "keyup", "ngModelChange"], ["input", ""], ["matSuffix", "", "mat-button", "", "mat-icon-button", ""], [3, "click", 4, "ngIf"], [4, "ngIf"], ["mat-raised-button", "", "fxFlex", "", 1, "typicalbutton", 3, "click"], ["color", "primary", 1, "matIconSpacing", "mat-elevation-z8"], ["mat-table", "", "matSort", "", 1, "full-width-table", 3, "dataSource"], ["matColumnDef", "year"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "passmark"], ["matColumnDef", "current"], ["matColumnDef", "action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], [3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["matInput", "", "type", "text", "placeholder", "ACADEMIC YEAR", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["appearance", "outline"], ["matInput", "", "type", "number", "placeholder", "PASSMARK", "autocomplete", "off", 1, "level2-bar", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-header-cell", ""], ["mat-icon-button", "", 3, "disabled", "click"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-icon-button", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function SettingsPassmarkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SettingsPassmarkComponent_Template_input_keyup_3_listener() { return ctx.applyFilter(ctx.filterValues); })("ngModelChange", function SettingsPassmarkComponent_Template_input_ngModelChange_3_listener($event) { return ctx.filterValues = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, SettingsPassmarkComponent_mat_icon_6_Template, 2, 0, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, SettingsPassmarkComponent_mat_icon_7_Template, 2, 0, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Filter for passmark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SettingsPassmarkComponent_Template_button_click_10_listener() { return ctx.newDrink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " ADD PASSMARK");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](15, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, SettingsPassmarkComponent_th_16_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, SettingsPassmarkComponent_td_17_Template, 3, 2, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](18, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, SettingsPassmarkComponent_th_19_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, SettingsPassmarkComponent_td_20_Template, 3, 2, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](21, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, SettingsPassmarkComponent_th_22_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, SettingsPassmarkComponent_td_23_Template, 3, 2, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](24, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, SettingsPassmarkComponent_th_25_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, SettingsPassmarkComponent_td_26_Template, 8, 2, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, SettingsPassmarkComponent_tr_27_Template, 1, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, SettingsPassmarkComponent_tr_28_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, SettingsPassmarkComponent_tr_29_Template, 3, 1, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "mat-paginator", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.filterValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.filterValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.filterValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", (ctx.dataSource == null ? null : ctx.dataSource.data).length)("pageIndex", 0)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c0));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatHint"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\ntr.example-element-row[_ngcontent-%COMP%]:hover {\r\n  background: whitesmoke;\r\n}\r\n\r\ntr.example-element-row[_ngcontent-%COMP%]:active {\r\n  background: #efefef;\r\n}\r\n\r\n.typicalbutton[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  margin: 20px;\r\n  \r\n  border-block-color: black;\r\n  background-color: #e7e7e7;\r\n  min-height: 100px;\r\n  text-transform: uppercase;\r\n  font-size: 18px;\r\n\r\n\r\n\r\n}\r\n\r\n.level2-bar[_ngcontent-%COMP%] {\r\n  \r\n  font-size: 18px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLXBhc3NtYXJrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZUFBZTs7OztBQUlqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCIiwiZmlsZSI6InNldHRpbmdzLXBhc3NtYXJrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG59XHJcblxyXG5cclxuLnR5cGljYWxidXR0b24ge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIC8qIG1hcmdpbi1yaWdodDogMjBweDsgKi9cclxuICBib3JkZXItYmxvY2stY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbi5sZXZlbDItYmFyIHtcclxuICAvKiBtaW4td2lkdGg6IDIwMHB4OyAqL1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material/material.module */ "hctd");
/* harmony import */ var _topview_utme_utme_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./topview/utme/utme.component */ "PhIg");
/* harmony import */ var _topview_de_de_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./topview/de/de.component */ "W3zb");
/* harmony import */ var _topview_prescience_prescience_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./topview/prescience/prescience.component */ "kBp5");
/* harmony import */ var _topview_jupeb_jupeb_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./topview/jupeb/jupeb.component */ "q1q8");
/* harmony import */ var _topview_sup_sup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./topview/sup/sup.component */ "dNvb");
/* harmony import */ var _topview_fresh_candidates_fresh_candidates_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./topview/fresh-candidates/fresh-candidates.component */ "YHdZ");
/* harmony import */ var _topview_candidate_registration_candidate_registration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./topview/candidate-registration/candidate-registration.component */ "Ta2s");
/* harmony import */ var _topview_candidate_admission_candidate_admission_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./topview/candidate-admission/candidate-admission.component */ "6FnD");
/* harmony import */ var _topview_settings_settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./topview/settings/settings.component */ "ppiG");
/* harmony import */ var _topview_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./topview/dashboard/dashboard.component */ "Gyom");
/* harmony import */ var _topview_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./topview/home/home.component */ "bniG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");




















// import { PassmarkPipe } from './shared/pipes/passmark.pipe';
// import { PassmarkPipe } from './pipes/passmark.pipe';
// import { SettingMainComponent } from './shared/components/others/setting-main/setting-main.component';
// import { SettingsPassmarkComponent } from 'src/app/shared/tables/settings-passmark/settings-passmark.component';
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            // FullwidthModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
            // FlexLayoutModule,
            // MatTabsModule,
            // MatIconModule,
            // MatButtonModule,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _topview_utme_utme_component__WEBPACK_IMPORTED_MODULE_8__["UtmeComponent"],
        _topview_de_de_component__WEBPACK_IMPORTED_MODULE_9__["DeComponent"],
        _topview_prescience_prescience_component__WEBPACK_IMPORTED_MODULE_10__["PrescienceComponent"],
        _topview_jupeb_jupeb_component__WEBPACK_IMPORTED_MODULE_11__["JupebComponent"],
        _topview_sup_sup_component__WEBPACK_IMPORTED_MODULE_12__["SupComponent"],
        _topview_fresh_candidates_fresh_candidates_component__WEBPACK_IMPORTED_MODULE_13__["FreshCandidatesComponent"],
        _topview_candidate_registration_candidate_registration_component__WEBPACK_IMPORTED_MODULE_14__["CandidateRegistrationComponent"],
        _topview_candidate_admission_candidate_admission_component__WEBPACK_IMPORTED_MODULE_15__["CandidateAdmissionComponent"],
        _topview_settings_settings_component__WEBPACK_IMPORTED_MODULE_16__["SettingsComponent"],
        _topview_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
        _topview_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        // FullwidthModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
        // FlexLayoutModule,
        // MatTabsModule,
        // MatIconModule,
        // MatButtonModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();


/***/ }),

/***/ "aF9I":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A9 All rights reserved 2022.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDivider"]], styles: ["footer[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0EiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxucGFkZGluZzogMjBweDtcclxuYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "aZ8m":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");







class HeaderComponent {
    constructor() {
        this.toggleStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    toggleSideBar() {
        this.toggleStatus.emit();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], outputs: { toggleStatus: "toggleStatus" }, decls: 23, vars: 1, consts: [["mat-icon-button", "", 3, "click"], ["fxFlex", "", "flexLayout", "row", "fxLayoutGap", "20px", "fxLayoutAlign", "flex-end"], ["mat-icon-button", ""], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() { return ctx.toggleSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "admit.api");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "help_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "person_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-menu", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Sign out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"]], styles: ["header[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: skyblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsYUFBQTtFQUNBLHlCQUFBO0FBQUYiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuXHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xyXG5cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "bniG":
/*!************************************************!*\
  !*** ./src/app/topview/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 0, consts: [["fxFlex", ""], ["fxLayout", "column", 1, "dialogspacing"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px", "fxLayoutGap.lt-md", "0px", 1, "input-row"], ["fxFlex", "30"], [1, "wrapper"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.aSpacing[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.cardfont[_ngcontent-%COMP%] {\n  font-size: 30px;\n  \n  bottom: 8px;\n  right: 16px;\n  \n}\n\n.stats-cards[_ngcontent-%COMP%] {\n  height: 100px;\n  margin: 2px;\n}\n\n\n\n.dialogspacing[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  min-height: 60vh;\n  position: relative;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0UsYUFBQTtFQUNDLHNCQUFBO0VBQ0EsWUFBQTtBQVBIOztBQVlBO0VBQ0UsYUFBQTtBQVRGOztBQWFBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0YsV0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQVZBOztBQWVBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUFaSjs7QUF1QkE7O0dBQUE7O0FBSUE7RUFDRSxhQUFBO0FBckJGOztBQTBCQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxzQkFBQTtBQXhCRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gOmhvc3R7XHJcbi8vICAgd2lkdGg6MTAwJTtcclxuLy8gfVxyXG4vLyAud2lkZ2V0LWNvbnRhaW5lciB7XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgaGVpZ2h0OiA0MDBweDtcclxuLy8gfVxyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgIGhlaWdodDogMTAwJTtcclxuXHJcblxyXG59XHJcblxyXG4uYVNwYWNpbmcge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4uY2FyZGZvbnQge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICAvKiB0ZXh0LWFsaWduOiByaWdodDsgKi9cclxuYm90dG9tOiA4cHg7XHJcbnJpZ2h0OiAxNnB4O1xyXG4vKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xyXG59XHJcblxyXG5cclxuXHJcbi5zdGF0cy1jYXJkcyB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcbi8vIG1hdC1jYXJkIGEge1xyXG4vLyAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgY29sb3I6IGJsYWNrO1xyXG4vLyAgIG9iamVjdC1wb3NpdGlvbjogYm90dG9tO1xyXG5cclxuLy8gfVxyXG5cclxuLyogLm1hdC1ncmlkLXRpbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxufSAqL1xyXG5cclxuLmRpYWxvZ3NwYWNpbmcge1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLndyYXBwZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDYwdmg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vd3d3LmRyb3Bib3guY29tL3MvdHNjNnBtbXZsdzcwNWU5L2ZkZWNhZGUuanBnP2RsPTFcIikgbm8tcmVwZWF0IHJpZ2h0IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "dNvb":
/*!**********************************************!*\
  !*** ./src/app/topview/sup/sup.component.ts ***!
  \**********************************************/
/*! exports provided: SupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupComponent", function() { return SupComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");











const _c0 = ["UploadFileInput"];
class SupComponent {
    constructor(http, formBuilder) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.color = 'primary';
        this.mode = 'determinate';
        this.spinnerValue = 0;
        this.title = 'api-nodejs2';
        this.loaderForFileUpload = false;
        this.fileName = '';
        this.uploadProgress = 0;
    }
    ngOnInit() {
        this.fileUploadForm = this.formBuilder.group({
            myfile: ['']
        });
        // this.uploadForm = this.formBuilder.group({
        //   profile: ['']
        // });
    }
    // @ts-ignore
    onFileSelect1(event) {
        let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            // console.log(file);
            // @ts-ignore
            if (!_.includes(af, file.type)) {
                alert('Only EXCEL Docs Allowed!');
            }
            else {
                this.fileInputLabel = file.name;
                // @ts-ignore
                this.fileUploadForm.get('myfile').setValue(file);
            }
        }
    }
    onFileSelect2(event) {
        let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            // console.log(file);
            // @ts-ignore
            if (!_.includes(af, file.type)) {
                alert('Only EXCEL Docs Allowed!');
            }
            else {
                this.fileInputLabel = file.name;
                // @ts-ignore
                this.fileUploadForm.get('myfile').setValue(file);
            }
        }
    }
    onFileSelect(event) {
        if (event.target.files.length > 0) {
            let fileReader = new FileReader();
            const file = event.target.files[0];
            fileReader.readAsArrayBuffer(file);
            // @ts-ignore
            this.fileUploadForm.get('myfile').setValue(file);
            // Upload() {
            fileReader.onload = (e) => {
                console.log('FILE READER ONLOAD RUN');
                this.arrayBuffer = fileReader.result;
                var data = new Uint8Array(this.arrayBuffer);
                this.arr = new Array();
                for (var i = 0; i != data.length; ++i) {
                    this.arr[i] = String.fromCharCode(data[i]);
                }
                this.bstr = this.arr.join("");
            };
        }
        // if (file) {
        //     this.fileName = file.name;
        //     const formData = new FormData();
        //     // @ts-ignore
        //     formData.append("file", this.fileUploadForm.get('myfile').value);
        //     const testData = ['HELPSO'];
        //     this.http.post<any>("http://localhost:3000/api/uploadutme", formData).subscribe(
        //       (res) => {
        //         console.log("SUCCESS")
        //         console.log(res);
        //       },
        //       (err) => {
        //         console.log("ERROR")
        //         console.log(err);
        //       }
        //     );;
        // }
    }
    reset() {
        this.uploadProgress = 0;
        // @ts-ignore
        this.uploadSub = null;
    }
    // @ts-ignore
    onFormSubmit() {
        // @ts-ignore
        // if (!this.fileUploadForm.get('myfile').value) {
        //   alert('Please fill valid details!');
        //   return false;
        // }
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        const formData = new FormData();
        // @ts-ignore
        formData.append('file', this.fileUploadForm.get('myfile').value);
        // @ts-ignore
        console.log('FILE UPLOAD VALUE::', this.fileUploadForm.get('myfile').value);
        // console.log('THIS IS FORMDATA-bstr::',formData, this.bstr)
        // @ts-ignore
        // console.warn('formData::', formData['file'])
        // console.warn('formData2::', formData.get('file'))
        const upload$ = this.http.post("http://localhost:3000/api/uploadpresciencecandidate", formData, {
            // const upload$ = this.http.post("http://localhost:3000/api/uploadutme", formData, {
            reportProgress: true,
            observe: 'events'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            console.warn('formData3::', formData.get('file'));
            this.reset();
        }));
        this.uploadSub = upload$.subscribe(event => {
            if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].UploadProgress) {
                // @ts-ignore
                this.spinnerValue = Math.round(100 * (event.loaded / event.total));
            }
        });
    }
    onFormSubmit1() {
        const inputEl = this.uploadFileInput.nativeElement;
        // @ts-ignore
        const fileCount = inputEl.files.length;
        const formData = new FormData();
        const headers = new Headers();
        headers.set('Accept', 'application/json');
        headers.delete('Content-Type'); // mandate for accepting binary content
        if (fileCount > 0) {
            for (let i = 0; i < fileCount; i++) {
                // @ts-ignore
                formData.append('file', inputEl.files.item(i));
            }
            try {
                this.loaderForFileUpload = true;
                console.log('FORMDATA', formData);
                this.http
                    .post('http://localhost:3000/api/uploadsupcandidate', formData)
                    // @ts-ignore
                    .subscribe(Response => {
                    // @ts-ignore
                    if (Response.status) {
                        console.log('File uploaded successfully', 'Success!', Response);
                    }
                    // @ts-ignore
                }, error => {
                    console.log('File contents mismatch', error.statusText);
                });
            }
            catch (e) {
                console.log('Error occured while posting uploaded file. See below message for details : \n');
                console.log(e);
            }
        }
    }
}
SupComponent.ɵfac = function SupComponent_Factory(t) { return new (t || SupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"])); };
SupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SupComponent, selectors: [["app-sup"]], viewQuery: function SupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.uploadFileInput = _t.first);
    } }, decls: 22, vars: 3, consts: [[3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px", "fxLayoutGap.lt-md", "0px", 1, "input-row"], [1, "custom-file"], ["type", "file", "id", "customFile", "name", "myfile", "accept", ".xlsx", "multiple", "false", 1, "custom-file-input", 3, "change"], ["UploadFileInput", ""], [1, "example-margin", 3, "mode", "value"], ["mat-stroked-button", "", "color", "primary", "type", "submit"]], template: function SupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "SUPPLEMENTARY Candidates Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SupComponent_Template_form_ngSubmit_4_listener() { return ctx.onFormSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Choose File (.xlx or .xlsx)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function SupComponent_Template_input_change_11_listener($event) { return ctx.onFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "mat-progress-spinner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Upload Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.fileUploadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", ctx.mode)("value", ctx.spinnerValue);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinner"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/core */ "fXoL");

















// import {MatFormFieldModule} from '@angular/material/form-field';








// import { DatePipe } from '@angular/common';











// import { MatDialog } from '@angular/material/dialog';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';


class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_36__["HttpClientModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_32__["MatButtonToggleModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__["MatBottomSheetModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__["MatAutocompleteModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_33__["MatBadgeModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"]
        ], _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_36__["HttpClientModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_32__["MatButtonToggleModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__["MatBottomSheetModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__["MatAutocompleteModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_33__["MatBadgeModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_36__["HttpClientModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_32__["MatButtonToggleModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__["MatBottomSheetModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__["MatAutocompleteModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_33__["MatBadgeModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"]], exports: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_36__["HttpClientModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_32__["MatButtonToggleModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__["MatBottomSheetModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__["MatAutocompleteModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_33__["MatBadgeModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"]] }); })();


/***/ }),

/***/ "kBp5":
/*!************************************************************!*\
  !*** ./src/app/topview/prescience/prescience.component.ts ***!
  \************************************************************/
/*! exports provided: PrescienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescienceComponent", function() { return PrescienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PrescienceComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrescienceComponent.ɵfac = function PrescienceComponent_Factory(t) { return new (t || PrescienceComponent)(); };
PrescienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrescienceComponent, selectors: [["app-prescience"]], decls: 2, vars: 0, template: function PrescienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "prescience works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVzY2llbmNlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "ppiG":
/*!********************************************************!*\
  !*** ./src/app/topview/settings/settings.component.ts ***!
  \********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _shared_tables_settings_passmark_settings_passmark_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/tables/settings-passmark/settings-passmark.component */ "YilV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






function SettingsComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "check_box");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " PASSMARK SETTINGS ");
} }
function SettingsComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "checklist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " PROGRAMME CUTOFF SETTINGS ");
} }
function SettingsComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "format_list_numbered");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " ADMISSION QUOTA SETTINGS ");
} }
class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 22, vars: 0, consts: [["mat-tab-label", ""], [1, "example-tab-icon"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SETTINGS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SettingsComponent_ng_template_4_Template, 3, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Set passmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-settings-passmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SettingsComponent_ng_template_11_Template, 3, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Set cutoff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SettingsComponent_ng_template_17_Template, 3, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Set admissions quota");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabLabel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _shared_tables_settings_passmark_settings_passmark_component__WEBPACK_IMPORTED_MODULE_4__["SettingsPassmarkComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: [".dialogspacing[_ngcontent-%COMP%] {\r\n  padding: 30px;\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%] {\r\n  min-height: 400px;\r\n}\r\n\r\n.mat-card-clicks[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n  min-height: 100px;\r\n\r\n  \r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  user-select: none;\r\n-webkit-user-select: none;\r\n-moz-user-select: none;\r\n-ms-user-select: none;\r\n\r\n-webkit-user-drag: none;\r\n-webkit-tap-highlight-color: transparent;\r\n\r\n\r\n\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n\r\n\r\n}\r\n\r\n.card[_ngcontent-%COMP%] { cursor: pointer; }\r\n\r\n.mat-stepper-horizontal[_ngcontent-%COMP%] {\r\n  margin-top: 8px;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n  margin-top: 16px;\r\n}\r\n\r\n.example-margin[_ngcontent-%COMP%] {\r\n  margin: 0 12px;\r\n}\r\n\r\n.typicalbutton[_ngcontent-%COMP%] {\r\n  border-block-color: black;\r\n  background-color: #e7e7e7;\r\n  min-height: 42px;\r\n  text-transform: uppercase;\r\n  margin: 10px;\r\n  min-width: 300px;\r\n}\r\n\r\n.typicalbutton2[_ngcontent-%COMP%] {\r\n  border-block-color: black;\r\n  \r\n  min-height: 42px;\r\n  text-transform: uppercase;\r\n  margin: 10px;\r\n}\r\n\r\n.matIconSpacing[_ngcontent-%COMP%] {\r\n  margin-right: 18px;\r\n  }\r\n\r\n.example-radio-group[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 10px 0;\r\n  }\r\n\r\n.example-radio-button[_ngcontent-%COMP%] {\r\n    margin: 10px 25px;\r\n    line-height: 2px;\r\n  }\r\n\r\n.signSpacing[_ngcontent-%COMP%] {\r\n      margin-left: 10px;\r\n      font-weight: bold;\r\n  }\r\n\r\n.example-chip-list[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n\r\nmat-chip[_ngcontent-%COMP%] {\r\n      max-width: 230px;\r\n    }\r\n\r\n.my-align[_ngcontent-%COMP%] {\r\n      align-content:left;\r\n    }\r\n\r\n.my-align[_ngcontent-%COMP%] {\r\n      align-content:center;\r\n    }\r\n\r\n.my-top-spacing[_ngcontent-%COMP%] {\r\n      margin-top:50px;\r\n    }\r\n\r\n.example-tab-icon[_ngcontent-%COMP%] {\r\n      margin-right: 8px;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCOztFQUVqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7QUFDbkIseUJBQXlCO0FBQ3pCLHNCQUFzQjtBQUN0QixxQkFBcUI7O0FBRXJCLHVCQUF1QjtBQUN2Qix3Q0FBd0M7O0FBRXhDLHdCQUF3Qjs7QUFFeEI7O0FBRUE7RUFDRSx1QkFBdUI7OztBQUd6Qjs7QUFFQSxRQUFRLGVBQWUsRUFBRTs7QUFHekI7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQU9BO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQjs7QUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0FBRUE7TUFDSSxpQkFBaUI7TUFDakIsaUJBQWlCO0VBQ3JCOztBQUNBO01BQ0ksV0FBVztJQUNiOztBQUVBO01BQ0UsZ0JBQWdCO0lBQ2xCOztBQUVBO01BQ0Usa0JBQWtCO0lBQ3BCOztBQUVBO01BQ0Usb0JBQW9CO0lBQ3RCOztBQUVBO01BQ0UsZUFBZTtJQUNqQjs7QUFFQTtNQUNFLGlCQUFpQjtJQUNuQiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZ3NwYWNpbmcge1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZCB7XHJcbiAgbWluLWhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1jbGlja3Mge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuXHJcbiAgLyogcGFkZGluZzogMnB4OyAqL1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbi13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbi1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbi1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbi13ZWJraXQtdXNlci1kcmFnOiBub25lO1xyXG4td2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG5cclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcblxyXG59XHJcblxyXG4uY2FyZCB7IGN1cnNvcjogcG9pbnRlcjsgfVxyXG5cclxuXHJcbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4uZXhhbXBsZS1tYXJnaW4ge1xyXG4gIG1hcmdpbjogMCAxMnB4O1xyXG59XHJcblxyXG4udHlwaWNhbGJ1dHRvbiB7XHJcbiAgYm9yZGVyLWJsb2NrLWNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O1xyXG4gIG1pbi1oZWlnaHQ6IDQycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLnR5cGljYWxidXR0b24yIHtcclxuICBib3JkZXItYmxvY2stY29sb3I6IGJsYWNrO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7ICovXHJcbiAgbWluLWhlaWdodDogNDJweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLm1hdEljb25TcGFjaW5nIHtcclxuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1yYWRpby1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMTBweCAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDJweDtcclxuICB9XHJcblxyXG4gIC5zaWduU3BhY2luZyB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmV4YW1wbGUtY2hpcC1saXN0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgbWF0LWNoaXAge1xyXG4gICAgICBtYXgtd2lkdGg6IDIzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teS1hbGlnbiB7XHJcbiAgICAgIGFsaWduLWNvbnRlbnQ6bGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAubXktYWxpZ24ge1xyXG4gICAgICBhbGlnbi1jb250ZW50OmNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAubXktdG9wLXNwYWNpbmcge1xyXG4gICAgICBtYXJnaW4tdG9wOjUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmV4YW1wbGUtdGFiLWljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIH1cclxuIl19 */"] });


/***/ }),

/***/ "q1q8":
/*!**************************************************!*\
  !*** ./src/app/topview/jupeb/jupeb.component.ts ***!
  \**************************************************/
/*! exports provided: JupebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JupebComponent", function() { return JupebComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");











const _c0 = ["UploadFileInput"];
class JupebComponent {
    constructor(http, formBuilder) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.color = 'primary';
        this.mode = 'determinate';
        this.spinnerValue = 0;
        this.title = 'api-nodejs2';
        this.loaderForFileUpload = false;
        this.fileName = '';
        this.uploadProgress = 0;
    }
    ngOnInit() {
        this.fileUploadForm = this.formBuilder.group({
            myfile: ['']
        });
        // this.uploadForm = this.formBuilder.group({
        //   profile: ['']
        // });
    }
    // @ts-ignore
    onFileSelect1(event) {
        let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            // console.log(file);
            // @ts-ignore
            if (!_.includes(af, file.type)) {
                alert('Only EXCEL Docs Allowed!');
            }
            else {
                this.fileInputLabel = file.name;
                // @ts-ignore
                this.fileUploadForm.get('myfile').setValue(file);
            }
        }
    }
    onFileSelect2(event) {
        let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            // console.log(file);
            // @ts-ignore
            if (!_.includes(af, file.type)) {
                alert('Only EXCEL Docs Allowed!');
            }
            else {
                this.fileInputLabel = file.name;
                // @ts-ignore
                this.fileUploadForm.get('myfile').setValue(file);
            }
        }
    }
    onFileSelect(event) {
        if (event.target.files.length > 0) {
            let fileReader = new FileReader();
            const file = event.target.files[0];
            fileReader.readAsArrayBuffer(file);
            // @ts-ignore
            this.fileUploadForm.get('myfile').setValue(file);
            // Upload() {
            fileReader.onload = (e) => {
                console.log('FILE READER ONLOAD RUN');
                this.arrayBuffer = fileReader.result;
                var data = new Uint8Array(this.arrayBuffer);
                this.arr = new Array();
                for (var i = 0; i != data.length; ++i) {
                    this.arr[i] = String.fromCharCode(data[i]);
                }
                this.bstr = this.arr.join("");
            };
        }
        // if (file) {
        //     this.fileName = file.name;
        //     const formData = new FormData();
        //     // @ts-ignore
        //     formData.append("file", this.fileUploadForm.get('myfile').value);
        //     const testData = ['HELPSO'];
        //     this.http.post<any>("http://localhost:3000/api/uploadutme", formData).subscribe(
        //       (res) => {
        //         console.log("SUCCESS")
        //         console.log(res);
        //       },
        //       (err) => {
        //         console.log("ERROR")
        //         console.log(err);
        //       }
        //     );;
        // }
    }
    reset() {
        this.uploadProgress = 0;
        // @ts-ignore
        this.uploadSub = null;
    }
    // @ts-ignore
    onFormSubmit() {
        // @ts-ignore
        // if (!this.fileUploadForm.get('myfile').value) {
        //   alert('Please fill valid details!');
        //   return false;
        // }
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        const formData = new FormData();
        // @ts-ignore
        formData.append('file', this.fileUploadForm.get('myfile').value);
        // @ts-ignore
        console.log('FILE UPLOAD VALUE::', this.fileUploadForm.get('myfile').value);
        // console.log('THIS IS FORMDATA-bstr::',formData, this.bstr)
        // @ts-ignore
        // console.warn('formData::', formData['file'])
        // console.warn('formData2::', formData.get('file'))
        const upload$ = this.http.post("http://localhost:3000/api/uploadjupebcandidate", formData, {
            // const upload$ = this.http.post("http://localhost:3000/api/uploadutme", formData, {
            reportProgress: true,
            observe: 'events'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            console.warn('formData3::', formData.get('file'));
            this.reset();
        }));
        this.uploadSub = upload$.subscribe(event => {
            if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].UploadProgress) {
                // @ts-ignore
                this.spinnerValue = Math.round(100 * (event.loaded / event.total));
            }
        });
    }
    onFormSubmit1() {
        const inputEl = this.uploadFileInput.nativeElement;
        // @ts-ignore
        const fileCount = inputEl.files.length;
        const formData = new FormData();
        const headers = new Headers();
        headers.set('Accept', 'application/json');
        headers.delete('Content-Type'); // mandate for accepting binary content
        if (fileCount > 0) {
            for (let i = 0; i < fileCount; i++) {
                // @ts-ignore
                formData.append('file', inputEl.files.item(i));
            }
            try {
                this.loaderForFileUpload = true;
                console.log('FORMDATA', formData);
                this.http
                    .post('http://localhost:3000/api/uploaddecandidate', formData)
                    // @ts-ignore
                    .subscribe(Response => {
                    // @ts-ignore
                    if (Response.status) {
                        console.log('File uploaded successfully', 'Success!', Response);
                    }
                    // @ts-ignore
                }, error => {
                    console.log('File contents mismatch', error.statusText);
                });
            }
            catch (e) {
                console.log('Error occured while posting uploaded file. See below message for details : \n');
                console.log(e);
            }
        }
    }
}
JupebComponent.ɵfac = function JupebComponent_Factory(t) { return new (t || JupebComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"])); };
JupebComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: JupebComponent, selectors: [["app-jupeb"]], viewQuery: function JupebComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.uploadFileInput = _t.first);
    } }, decls: 22, vars: 3, consts: [[3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px", "fxLayoutGap.lt-md", "0px", 1, "input-row"], [1, "custom-file"], ["type", "file", "id", "customFile", "name", "myfile", "accept", ".xlsx", "multiple", "false", 1, "custom-file-input", 3, "change"], ["UploadFileInput", ""], [1, "example-margin", 3, "mode", "value"], ["mat-stroked-button", "", "color", "primary", "type", "submit"]], template: function JupebComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "JUPEB Candidates Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function JupebComponent_Template_form_ngSubmit_4_listener() { return ctx.onFormSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Choose File (.xlx or .xlsx)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function JupebComponent_Template_input_change_11_listener($event) { return ctx.onFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "mat-progress-spinner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Upload Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.fileUploadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", ctx.mode)("value", ctx.spinnerValue);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinner"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqdXBlYi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "r0B7":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/app-disable.directive.ts ***!
  \************************************************************/
/*! exports provided: AppDisableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDisableDirective", function() { return AppDisableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const DISABLED = 'disabled';
const APP_DISABLED = 'app-disabled';
const TAB_INDEX = 'tabindex';
const TAG_ANCHOR = 'a';
class AppDisableDirective {
    constructor(eleRef, renderer) {
        this.eleRef = eleRef;
        this.renderer = renderer;
        this.appDisable = true;
    }
    ngOnChanges() {
        this.disableElement(this.eleRef.nativeElement);
    }
    ngAfterViewInit() {
        this.disableElement(this.eleRef.nativeElement);
    }
    disableElement(element) {
        if (this.appDisable) {
            if (!element.hasAttribute(DISABLED)) {
                this.renderer.setAttribute(element, APP_DISABLED, '');
                this.renderer.setAttribute(element, DISABLED, 'true');
                // disabling anchor tab keyboard event
                if (element.tagName.toLowerCase() === TAG_ANCHOR) {
                    this.renderer.setAttribute(element, TAB_INDEX, '-1');
                }
            }
        }
        else {
            if (element.hasAttribute(APP_DISABLED)) {
                if (element.getAttribute('disabled') !== '') {
                    element.removeAttribute(DISABLED);
                }
                element.removeAttribute(APP_DISABLED);
                if (element.tagName.toLowerCase() === TAG_ANCHOR) {
                    element.removeAttribute(TAB_INDEX);
                }
            }
        }
        if (element.children) {
            for (let ele of element.children) {
                this.disableElement(ele);
            }
        }
    }
}
AppDisableDirective.ɵfac = function AppDisableDirective_Factory(t) { return new (t || AppDisableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
AppDisableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AppDisableDirective, selectors: [["", "appDisable", ""]], inputs: { appDisable: "appDisable" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_defaultsidenav_defaultsidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/defaultsidenav/defaultsidenav.component */ "7HpW");
/* harmony import */ var _topview_candidate_admission_candidate_admission_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topview/candidate-admission/candidate-admission.component */ "6FnD");
/* harmony import */ var _topview_candidate_registration_candidate_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topview/candidate-registration/candidate-registration.component */ "Ta2s");
/* harmony import */ var _topview_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topview/dashboard/dashboard.component */ "Gyom");
/* harmony import */ var _topview_de_de_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topview/de/de.component */ "W3zb");
/* harmony import */ var _topview_fresh_candidates_fresh_candidates_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./topview/fresh-candidates/fresh-candidates.component */ "YHdZ");
/* harmony import */ var _topview_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./topview/home/home.component */ "bniG");
/* harmony import */ var _topview_jupeb_jupeb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./topview/jupeb/jupeb.component */ "q1q8");
/* harmony import */ var _topview_prescience_prescience_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./topview/prescience/prescience.component */ "kBp5");
/* harmony import */ var _topview_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./topview/settings/settings.component */ "ppiG");
/* harmony import */ var _topview_sup_sup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./topview/sup/sup.component */ "dNvb");
/* harmony import */ var _topview_utme_utme_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./topview/utme/utme.component */ "PhIg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");

// import { AuthGuard } from './auth.guard';
// import { DefaultComponent } from './layouts/default/default.component';

// import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';













const routes = [
    //   {path: 'login',
    //   component: LoginComponent
    // },
    { path: 'nav',
        component: _layouts_defaultsidenav_defaultsidenav_component__WEBPACK_IMPORTED_MODULE_1__["DefaultsidenavComponent"],
        // canActivate: [AuthGuard],
        children: [
            {
                path: '',
                outlet: 'nav',
                component: _layouts_defaultsidenav_defaultsidenav_component__WEBPACK_IMPORTED_MODULE_1__["DefaultsidenavComponent"]
            },
            { path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            { path: 'home', component: _topview_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
            { path: 'dashboard2', component: _topview_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
            { path: 'utme', component: _topview_utme_utme_component__WEBPACK_IMPORTED_MODULE_12__["UtmeComponent"] },
            { path: 'de', component: _topview_de_de_component__WEBPACK_IMPORTED_MODULE_5__["DeComponent"] },
            { path: 'prescience', component: _topview_prescience_prescience_component__WEBPACK_IMPORTED_MODULE_9__["PrescienceComponent"] },
            { path: 'jupeb', component: _topview_jupeb_jupeb_component__WEBPACK_IMPORTED_MODULE_8__["JupebComponent"] },
            { path: 'sup', component: _topview_sup_sup_component__WEBPACK_IMPORTED_MODULE_11__["SupComponent"] },
            { path: 'fresh-graduates', component: _topview_fresh_candidates_fresh_candidates_component__WEBPACK_IMPORTED_MODULE_6__["FreshCandidatesComponent"] },
            { path: 'candidate-admission', component: _topview_candidate_admission_candidate_admission_component__WEBPACK_IMPORTED_MODULE_2__["CandidateAdmissionComponent"] },
            { path: 'candidate-registration', component: _topview_candidate_registration_candidate_registration_component__WEBPACK_IMPORTED_MODULE_3__["CandidateRegistrationComponent"] },
            {
                path: 'settings',
                component: _topview_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"]
            },
        ]
    },
    { path: '',
        redirectTo: '/nav',
        pathMatch: 'full'
    },
];
// const routes: Routes = [
// {path: '',
//   component: DefaultsidenavComponent,
//   children: [
//     { path: '', component: HomeComponent },
//     { path: 'dashboard2', component: DashboardComponent },
//     { path: 'staffinformation', component: StaffinformationComponent },
//     { path: 'discipline-and-queries', component: DisciplineAndQueriesComponent },
//     { path: 'leave-management', component: LeaveManagementComponent },
//   {
//     path: 'settings',
//     component: SettingsComponent
// },
//   ]
// },
// {
//   path: '', component: FullwidthComponent,
//   children: [
//     {
//       path: 'login',
//       component: LoginComponent
//     },
//   ]
// }
// ];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map