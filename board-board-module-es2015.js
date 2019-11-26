(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["board-board-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/board/components/card-item/card-item.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board/components/card-item/card-item.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-list class=\"card-item\" [class.done]=\"isDoneSelection\" [ngStyle]=\"{'background-color': color}\">\r\n  <mat-list-item class=\"card-item__task\" (click)=\"toggleItem()\">{{card.name}}</mat-list-item>\r\n  <ng-container *ngIf=\"showAll\">\r\n    <mat-list-item class=\"card-item__desc\">{{card.description}}</mat-list-item>\r\n    <mat-list-item class=\"card-item__date\">{{ card.dueDate | date:'dd LLL yyyy' }}</mat-list-item>\r\n    <mat-list-item class=\"card-item__user\">{{card.assignee.firstName}} {{card.assignee.lastName}}</mat-list-item>\r\n    <div class=\"card-item__button-row\">\r\n      <!-- <button [routerLink]=\"['edit', this.cardGroup, this.card.id]\" mat-flat-button (click)=\"onEdit()\" color=\"primary\">Edit</button> -->\r\n      <button mat-flat-button (click)=\"onEdit()\" color=\"primary\" >Edit</button>\r\n      <button mat-flat-button (click)=\"onRemove()\" color=\"warn\">Remove</button>\r\n    </div>\r\n  </ng-container>\r\n</mat-list>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/board/components/card-list/card-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board/components/card-list/card-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-list role=\"list\" class=\"card-list\">\r\n  <h2 class=\"card-list__name\">{{ cardList.name }}</h2>\r\n  <app-card-item\r\n    *ngFor = \"let card of cardList.cards | searchFilter: searchCriterion\"\r\n    [isDoneSelection] = \"cardList.isDoneSelection\"\r\n    [card] = \"card\"\r\n    (removeCard)=\"onRemoveCard($event)\"\r\n    (editCard)=\"onEditCard($event)\"\r\n    [cardGroup]=\"cardList.id\"\r\n  >\r\n  </app-card-item>\r\n  <!-- <button [routerLink]=\"['create', this.cardList.id]\" mat-button class='page-header__button' (click)=\"onCreateCard()\">+ Create card</button> -->\r\n  <button mat-button class='page-header__button' (click)=\"onCreateCard()\">+ Create card</button>\r\n</mat-list>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/board/components/toolbar/toolbar.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board/components/toolbar/toolbar.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class='toolbar'>\r\n    <div class=\"toolbar__container\">\r\n      <mat-form-field class=\"toolbar__input\">\r\n        <input matInput [(ngModel)]=\"searchCriterion\" placeholder=\"Name\">\r\n      </mat-form-field>\r\n      <button mat-button class='toolbar__search' (click)=\"onSearch()\">Search</button>\r\n    </div>\r\n  </section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/board/pages/board/board.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board/pages/board/board.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-toolbar (search)=\"onSearch($event)\"></app-toolbar>\r\n<section class=\"board\">\r\n  <app-card-list\r\n  *ngFor = \"let item of items\"\r\n  [cardList] = \"item\"\r\n  [searchCriterion] = \"searchCriterion\"\r\n  (removeCard)=\"onRemoveCard($event)\"\r\n  (addCard)=\"onCreateCard($event)\"\r\n  (editCard)=\"onEditCard($event)\"\r\n  >\r\n  </app-card-list>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/board/pages/edit/edit.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board/pages/edit/edit.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"itemForm\" class=\"edit-form\" (submit)=\"save()\">\r\n  <mat-form-field>\r\n    <input matInput type=\"text\" [value]=\"currentItem.name\" formControlName=\"name\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput type=\"text\" [value]=\"currentItem.description\" formControlName=\"desc\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <mat-select placeholder=\"Select\" formControlName=\"user\" *ngFor=\"let user of userList\">\r\n      <mat-option value=\"option\" [value]=\"user.lastName\">{{user.firstName + ' ' + user.lastName}}</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <label for=\"date\">Due date</label>\r\n    <input id=\"date\" matInput type=\"date\" formControlName=\"date\" [value]=\"currentItem.dueDate | date: 'yyyy-MM-dd'\">\r\n  </mat-form-field>\r\n  <div class=\"edit-form__button-group\">\r\n    <button type=\"submit\" mat-button>Save</button>\r\n    <button (click)=\"cancel()\" mat-button color=\"accent\">Cancel</button>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./src/app/board/board-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/board/board-routing.module.ts ***!
  \***********************************************/
/*! exports provided: BoardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardRoutingModule", function() { return BoardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pages_edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/edit/edit.component */ "./src/app/board/pages/edit/edit.component.ts");
/* harmony import */ var _pages_board_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/board/board.component */ "./src/app/board/pages/board/board.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");






const routes = [
    { path: '', component: _pages_board_board_component__WEBPACK_IMPORTED_MODULE_2__["BoardComponent"], canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]], canLoad: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'edit/:group/:id', component: _pages_edit_edit_component__WEBPACK_IMPORTED_MODULE_1__["EditComponent"] },
    { path: 'create/:group', component: _pages_edit_edit_component__WEBPACK_IMPORTED_MODULE_1__["EditComponent"] }
];
let BoardRoutingModule = class BoardRoutingModule {
};
BoardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], BoardRoutingModule);



/***/ }),

/***/ "./src/app/board/board.module.ts":
/*!***************************************!*\
  !*** ./src/app/board/board.module.ts ***!
  \***************************************/
/*! exports provided: BoardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardModule", function() { return BoardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_board_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/board.service */ "./src/app/board/services/board.service.ts");
/* harmony import */ var _pages_board_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/board/board.component */ "./src/app/board/pages/board/board.component.ts");
/* harmony import */ var _components_card_item_card_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/card-item/card-item.component */ "./src/app/board/components/card-item/card-item.component.ts");
/* harmony import */ var _components_card_list_card_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/card-list/card-list.component */ "./src/app/board/components/card-list/card-list.component.ts");
/* harmony import */ var _pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/search-filter.pipe */ "./src/app/board/pipes/search-filter.pipe.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _board_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./board-routing.module */ "./src/app/board/board-routing.module.ts");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "./src/app/board/components/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pages_edit_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/edit/edit.component */ "./src/app/board/pages/edit/edit.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");













let BoardModule = class BoardModule {
};
BoardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        declarations: [
            _pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["SearchFilterPipe"],
            _components_card_list_card_list_component__WEBPACK_IMPORTED_MODULE_4__["CardListComponent"],
            _components_card_item_card_item_component__WEBPACK_IMPORTED_MODULE_3__["CardItemComponent"],
            _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_9__["ToolbarComponent"],
            _pages_board_board_component__WEBPACK_IMPORTED_MODULE_2__["BoardComponent"],
            _pages_edit_edit_component__WEBPACK_IMPORTED_MODULE_11__["EditComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _board_routing_module__WEBPACK_IMPORTED_MODULE_8__["BoardRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"]
        ],
        exports: [
            _pages_board_board_component__WEBPACK_IMPORTED_MODULE_2__["BoardComponent"]
        ],
        providers: [
            _services_board_service__WEBPACK_IMPORTED_MODULE_1__["BoardService"]
        ]
    })
], BoardModule);



/***/ }),

/***/ "./src/app/board/components/card-item/card-item.component.sass":
/*!*********************************************************************!*\
  !*** ./src/app/board/components/card-item/card-item.component.sass ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-item {\n  border: 1px solid black;\n  margin: 10px 0;\n}\n.card-item__task {\n  font-weight: bold;\n}\n.card-item__date {\n  font-size: 0.7em;\n  color: #bbbbbb;\n}\n.card-item__user {\n  font-size: 0.9em;\n  color: #aaaaaa;\n}\n.card-item__button-row {\n  display: flex;\n  justify-content: space-around;\n  padding: 0 0 15px 0;\n}\n.done {\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvY29tcG9uZW50cy9jYXJkLWl0ZW0vQzpcXFVzZXJzXFxnZXJhc1xcRGVza3RvcFxcanNcXGFuZ3VsYXItbGVhcm4vc3JjXFxhcHBcXGJvYXJkXFxjb21wb25lbnRzXFxjYXJkLWl0ZW1cXGNhcmQtaXRlbS5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvYm9hcmQvY29tcG9uZW50cy9jYXJkLWl0ZW0vY2FyZC1pdGVtLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0FDQ0Y7QURBRTtFQUNFLGlCQUFBO0FDRUo7QURERTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ0dKO0FERkU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNJSjtBREhFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNLSjtBREpBO0VBQ0UsNkJBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkL2NvbXBvbmVudHMvY2FyZC1pdGVtL2NhcmQtaXRlbS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWl0ZW1cclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFja1xyXG4gIG1hcmdpbjogMTBweCAwXHJcbiAgJl9fdGFza1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcclxuICAmX19kYXRlXHJcbiAgICBmb250LXNpemU6IDAuN2VtXHJcbiAgICBjb2xvcjogI2JiYmJiYlxyXG4gICZfX3VzZXJcclxuICAgIGZvbnQtc2l6ZTogMC45ZW1cclxuICAgIGNvbG9yOiAjYWFhYWFhXHJcbiAgJl9fYnV0dG9uLXJvd1xyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmRcclxuICAgIHBhZGRpbmc6ICAwIDAgMTVweCAwXHJcbi5kb25lXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2hcclxuIiwiLmNhcmQtaXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW46IDEwcHggMDtcbn1cbi5jYXJkLWl0ZW1fX3Rhc2sge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jYXJkLWl0ZW1fX2RhdGUge1xuICBmb250LXNpemU6IDAuN2VtO1xuICBjb2xvcjogI2JiYmJiYjtcbn1cbi5jYXJkLWl0ZW1fX3VzZXIge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogI2FhYWFhYTtcbn1cbi5jYXJkLWl0ZW1fX2J1dHRvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogMCAwIDE1cHggMDtcbn1cblxuLmRvbmUge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/board/components/card-item/card-item.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/board/components/card-item/card-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: CardItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardItemComponent", function() { return CardItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardItemComponent = class CardItemComponent {
    constructor() {
        this.editCard = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removeCard = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showAll = false;
    }
    toggleItem() {
        this.showAll = !this.showAll;
    }
    onEdit() {
        this.editCard.emit(this.card);
    }
    onRemove() {
        this.removeCard.emit(this.card);
    }
    ngOnInit() {
        let fixDate = new Date('11-20-2019');
        let cardDate = this.card.dueDate;
        let one_day = 1000 * 60 * 60 * 24;
        let diffDay = +fixDate - +cardDate;
        let days = diffDay / one_day;
        if (days < 4) {
            this.color = 'red';
        }
        else if (days < 8) {
            this.color = 'yellow';
        }
        else {
            this.color = 'inherit';
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardItemComponent.prototype, "cardGroup", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardItemComponent.prototype, "card", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardItemComponent.prototype, "isDoneSelection", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CardItemComponent.prototype, "editCard", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CardItemComponent.prototype, "removeCard", void 0);
CardItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/board/components/card-item/card-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card-item.component.sass */ "./src/app/board/components/card-item/card-item.component.sass")).default]
    })
], CardItemComponent);



/***/ }),

/***/ "./src/app/board/components/card-list/card-list.component.sass":
/*!*********************************************************************!*\
  !*** ./src/app/board/components/card-list/card-list.component.sass ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-list {\n  padding: 0px 15px;\n  border: 1px solid black;\n  margin: 0 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvY29tcG9uZW50cy9jYXJkLWxpc3QvQzpcXFVzZXJzXFxnZXJhc1xcRGVza3RvcFxcanNcXGFuZ3VsYXItbGVhcm4vc3JjXFxhcHBcXGJvYXJkXFxjb21wb25lbnRzXFxjYXJkLWxpc3RcXGNhcmQtbGlzdC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvYm9hcmQvY29tcG9uZW50cy9jYXJkLWxpc3QvY2FyZC1saXN0LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkL2NvbXBvbmVudHMvY2FyZC1saXN0L2NhcmQtbGlzdC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWxpc3RcclxuICBwYWRkaW5nOiAwcHggMTVweFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrXHJcbiAgbWFyZ2luOiAwIDE1cHhcclxuIiwiLmNhcmQtbGlzdCB7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luOiAwIDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/board/components/card-list/card-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/board/components/card-list/card-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: CardListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardListComponent", function() { return CardListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardListComponent = class CardListComponent {
    constructor() {
        this.editCard = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removeCard = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addCard = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onRemoveCard(card) {
        this.removeCard.emit({
            card,
            list: this.cardList
        });
    }
    onEditCard(card) {
        this.editCard.emit({
            card,
            list: this.cardList
        });
    }
    onCreateCard() {
        this.addCard.emit(this.cardList);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardListComponent.prototype, "searchCriterion", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardListComponent.prototype, "cardList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CardListComponent.prototype, "editCard", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CardListComponent.prototype, "removeCard", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CardListComponent.prototype, "addCard", void 0);
CardListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/board/components/card-list/card-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card-list.component.sass */ "./src/app/board/components/card-list/card-list.component.sass")).default]
    })
], CardListComponent);



/***/ }),

/***/ "./src/app/board/components/toolbar/toolbar.component.sass":
/*!*****************************************************************!*\
  !*** ./src/app/board/components/toolbar/toolbar.component.sass ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar__container {\n  width: 1200px;\n  margin: auto;\n  padding: 10px 0;\n  display: flex;\n}\n.toolbar__button {\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvY29tcG9uZW50cy90b29sYmFyL0M6XFxVc2Vyc1xcZ2VyYXNcXERlc2t0b3BcXGpzXFxhbmd1bGFyLWxlYXJuL3NyY1xcYXBwXFxib2FyZFxcY29tcG9uZW50c1xcdG9vbGJhclxcdG9vbGJhci5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvYm9hcmQvY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDQUo7QURDRTtFQUNFLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ib2FyZC9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyXHJcbiAgJl9fY29udGFpbmVyXHJcbiAgICB3aWR0aDogMTIwMHB4XHJcbiAgICBtYXJnaW46IGF1dG9cclxuICAgIHBhZGRpbmc6IDEwcHggMFxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICZfX2J1dHRvblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxyXG4iLCIudG9vbGJhcl9fY29udGFpbmVyIHtcbiAgd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udG9vbGJhcl9fYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/board/components/toolbar/toolbar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/board/components/toolbar/toolbar.component.ts ***!
  \***************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ToolbarComponent = class ToolbarComponent {
    constructor() {
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onSearch() {
        this.search.emit(this.searchCriterion);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ToolbarComponent.prototype, "search", void 0);
ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toolbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/board/components/toolbar/toolbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toolbar.component.sass */ "./src/app/board/components/toolbar/toolbar.component.sass")).default]
    })
], ToolbarComponent);



/***/ }),

/***/ "./src/app/board/pages/board/board.component.sass":
/*!********************************************************!*\
  !*** ./src/app/board/pages/board/board.component.sass ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".board {\n  width: 1200px;\n  margin: auto;\n  padding: 10px 0;\n  display: flex;\n  justify-content: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvcGFnZXMvYm9hcmQvQzpcXFVzZXJzXFxnZXJhc1xcRGVza3RvcFxcanNcXGFuZ3VsYXItbGVhcm4vc3JjXFxhcHBcXGJvYXJkXFxwYWdlc1xcYm9hcmRcXGJvYXJkLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9ib2FyZC9wYWdlcy9ib2FyZC9ib2FyZC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYm9hcmQvcGFnZXMvYm9hcmQvYm9hcmQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9hcmRcclxuICB3aWR0aDogMTIwMHB4XHJcbiAgbWFyZ2luOiBhdXRvXHJcbiAgcGFkZGluZzogMTBweCAwXHJcbiAgZGlzcGxheTogZmxleFxyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydFxyXG4iLCIuYm9hcmQge1xuICB3aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/board/pages/board/board.component.ts":
/*!******************************************************!*\
  !*** ./src/app/board/pages/board/board.component.ts ***!
  \******************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_board_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/board.service */ "./src/app/board/services/board.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let BoardComponent = class BoardComponent {
    constructor(bs) {
        this.bs = bs;
    }
    onRemoveCard(data) {
        this.bs.removeCard(data);
    }
    onCreateCard(data) {
        this.bs.goToCreatePage(data);
    }
    onEditCard(data) {
        this.bs.goToEditPage(data);
    }
    ngOnInit() {
        this.items = this.bs.items;
    }
    onSearch(str) {
        this.searchCriterion = str;
    }
};
BoardComponent.ctorParameters = () => [
    { type: _services_board_service__WEBPACK_IMPORTED_MODULE_1__["BoardService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], BoardComponent.prototype, "searchCriterion", void 0);
BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-board',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/board/pages/board/board.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./board.component.sass */ "./src/app/board/pages/board/board.component.sass")).default]
    })
], BoardComponent);



/***/ }),

/***/ "./src/app/board/pages/edit/edit.component.sass":
/*!******************************************************!*\
  !*** ./src/app/board/pages/edit/edit.component.sass ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edit-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvcGFnZXMvZWRpdC9DOlxcVXNlcnNcXGdlcmFzXFxEZXNrdG9wXFxqc1xcYW5ndWxhci1sZWFybi9zcmNcXGFwcFxcYm9hcmRcXHBhZ2VzXFxlZGl0XFxlZGl0LmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9ib2FyZC9wYWdlcy9lZGl0L2VkaXQuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYm9hcmQvcGFnZXMvZWRpdC9lZGl0LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtZm9ybVxyXG4gIGRpc3BsYXk6IGZsZXhcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxuICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgbWFyZ2luOiAyMHB4XHJcbiIsIi5lZGl0LWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/board/pages/edit/edit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/board/pages/edit/edit.component.ts ***!
  \****************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_board_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/board.service */ "./src/app/board/services/board.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let EditComponent = class EditComponent {
    constructor(fromBuilder, bs, route, router) {
        this.fromBuilder = fromBuilder;
        this.bs = bs;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        const { group, id } = this.route.snapshot.params;
        this.groupId = group;
        this.itemId = id;
        this.userList = this.bs.userList;
        this.currentItem = {
            id: '' + this.bs.getNextIdGroup(group),
            name: 'Name',
            description: 'Description',
            dueDate: new Date(),
            assignee: this.bs.userList[0],
        };
        if (!!id) {
            this.currentItem = this.bs.items[group].cards[id];
        }
        this.itemForm = this.fromBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            desc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            user: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    save() {
        if (!!this.route.snapshot.params.id) {
            this.bs.editItem(this.groupId, this.itemId, this.itemForm.value);
        }
        else {
            this.bs.createItem(this.groupId, this.itemForm.value);
        }
        this.router.navigate(['/board']);
    }
    cancel() {
        this.router.navigate(['/board']);
    }
};
EditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_board_service__WEBPACK_IMPORTED_MODULE_1__["BoardService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/board/pages/edit/edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit.component.sass */ "./src/app/board/pages/edit/edit.component.sass")).default]
    })
], EditComponent);



/***/ }),

/***/ "./src/app/board/pipes/search-filter.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/board/pipes/search-filter.pipe.ts ***!
  \***************************************************/
/*! exports provided: SearchFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterPipe", function() { return SearchFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchFilterPipe = class SearchFilterPipe {
    transform(cards, searchCriterion) {
        return searchCriterion ?
            cards.filter((item) => !!item.name.toLocaleLowerCase().match(`${searchCriterion.toLocaleLowerCase()}`)
                || !!item.description.toLocaleLowerCase().match(`${searchCriterion.toLocaleLowerCase()}`))
            : cards;
    }
};
SearchFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'searchFilter'
    })
], SearchFilterPipe);



/***/ }),

/***/ "./src/app/board/services/board.service.ts":
/*!*************************************************!*\
  !*** ./src/app/board/services/board.service.ts ***!
  \*************************************************/
/*! exports provided: BoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardService", function() { return BoardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let BoardService = class BoardService {
    constructor(router) {
        this.router = router;
        this.user = {
            id: '1',
            firstName: 'Yauheni',
            lastName: 'Herasimenka'
        };
        this.userList = [this.user];
        this.items = [
            {
                id: '1',
                name: 'Backlog',
                cards: [
                    {
                        id: "11",
                        name: "Task 1",
                        description: "desc",
                        dueDate: new Date("11-11-2019"),
                        assignee: this.user
                    }, {
                        id: "12",
                        name: "Task 2",
                        description: "desc",
                        dueDate: new Date("11-11-2019"),
                        assignee: this.user
                    }, {
                        id: "13",
                        name: "Task 3",
                        description: "desc",
                        dueDate: new Date("11-11-2019"),
                        assignee: this.user
                    }
                ],
                isDoneSelection: false
            }, {
                id: '2',
                name: 'In progress',
                cards: [
                    {
                        id: "21",
                        name: "Task 4",
                        description: "desc",
                        dueDate: new Date("11-13-2019"),
                        assignee: this.user
                    }, {
                        id: "22",
                        name: "Task 5",
                        description: "desc",
                        dueDate: new Date("11-17-2019"),
                        assignee: this.user
                    }, {
                        id: "23",
                        name: "Task 6",
                        description: "desc",
                        dueDate: new Date("11-11-2019"),
                        assignee: this.user
                    }
                ],
                isDoneSelection: false
            }, {
                id: '3',
                name: 'Done',
                cards: [
                    {
                        id: "31",
                        name: "Task 7",
                        description: "desc",
                        dueDate: new Date("11-11-2019"),
                        assignee: this.user
                    }, {
                        id: "32",
                        name: "Task 8",
                        description: "desc",
                        dueDate: new Date("11-11-2019"),
                        assignee: this.user
                    }, {
                        id: "33",
                        name: "Task 9",
                        description: "Geras",
                        dueDate: new Date("11-11-2019"),
                        assignee: this.user
                    }
                ],
                isDoneSelection: true
            },
        ];
    }
    getNextIdGroup(groupId) {
        return +this.items[groupId].cards[this.items[groupId].cards.length - 1].id + 1;
    }
    editItem(groupId, itemId, data) {
        const item = this.items[groupId].cards[itemId];
        item.name = data.name;
        item.description = data.desc;
        item.dueDate = new Date(data.date);
    }
    createItem(groupId, data) {
        const card = {
            id: '' + this.getNextIdGroup(groupId),
            name: data.name,
            description: data.desc,
            dueDate: new Date(data.date),
            assignee: this.user
        };
        this.items[groupId].cards.push(card);
    }
    removeCard({ card, list }) {
        list.cards.splice(list.cards.indexOf(card), 1);
    }
    goToCreatePage(list) {
        const groupId = this.items.indexOf(list);
        this.router.navigateByUrl('/create/' + groupId);
    }
    goToEditPage({ card, list }) {
        const groupId = this.items.indexOf(list);
        const cardId = this.items[groupId].cards.indexOf(card);
        this.router.navigateByUrl('/edit/' + groupId + '/' + cardId);
    }
};
BoardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
BoardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], BoardService);



/***/ })

}]);
//# sourceMappingURL=board-board-module-es2015.js.map