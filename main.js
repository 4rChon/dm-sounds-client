(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bendb\Desktop\Desktop Files\Side Projects\DMSounds\dm-sounds\src\main.ts */"zUnb");


/***/ }),

/***/ "0KgF":
/*!***************************************************************************!*\
  !*** ./src/app/playlist/playlist-settings/playlist-settings.component.ts ***!
  \***************************************************************************/
/*! exports provided: PlaylistSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistSettingsComponent", function() { return PlaylistSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_loop_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/loop.enum */ "Q4k7");



class PlaylistSettingsComponent {
    constructor() {
        this.shuffle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onShuffle(event) {
        this.shuffle.emit(event.target.checked);
    }
    onLoop(event) {
        const value = event.target.value;
        if (value === 'loopSingle') {
            this.loop.emit(src_app_common_loop_enum__WEBPACK_IMPORTED_MODULE_1__["LoopType"].SINGLE);
        }
        else if (value === 'loopAll') {
            this.loop.emit(src_app_common_loop_enum__WEBPACK_IMPORTED_MODULE_1__["LoopType"].ALL);
        }
        this.loop.emit(src_app_common_loop_enum__WEBPACK_IMPORTED_MODULE_1__["LoopType"].NONE);
    }
}
PlaylistSettingsComponent.ɵfac = function PlaylistSettingsComponent_Factory(t) { return new (t || PlaylistSettingsComponent)(); };
PlaylistSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaylistSettingsComponent, selectors: [["app-playlist-settings"]], outputs: { shuffle: "shuffle", loop: "loop" }, decls: 18, vars: 0, consts: [["type", "checkbox", 3, "click"], ["type", "radio", "id", "loop-single", "name", "loop", "value", "loopSingle", 3, "click"], ["type", "radio", "id", "loop-all", "name", "loop", "value", "loopAll", 3, "click"], ["type", "radio", "id", "loop-none", "name", "loop", "value", "loopNone", 3, "click"]], template: function PlaylistSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistSettingsComponent_Template_input_click_3_listener($event) { return ctx.onShuffle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Shuffle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistSettingsComponent_Template_input_click_8_listener($event) { return ctx.onLoop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Loop sound ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistSettingsComponent_Template_input_click_12_listener($event) { return ctx.onLoop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Loop playlist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistSettingsComponent_Template_input_click_16_listener($event) { return ctx.onLoop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Don't loop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaylistSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-playlist-settings',
                templateUrl: 'playlist-settings.component.html',
            }]
    }], function () { return []; }, { shuffle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], loop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "3S+d":
/*!****************************************!*\
  !*** ./src/app/common/ytpl.service.ts ***!
  \****************************************/
/*! exports provided: YTPLService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YTPLService", function() { return YTPLService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class YTPLService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.jsonHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'content-type': 'application/json' });
    }
    getPlaylistItems(url) {
        return this.httpClient.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api}/playlist/${url}`, {
            headers: this.jsonHeaders,
        });
    }
}
YTPLService.ɵfac = function YTPLService_Factory(t) { return new (t || YTPLService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
YTPLService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: YTPLService, factory: YTPLService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](YTPLService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


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
    api: 'http://localhost:3000',
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

/***/ "GIcy":
/*!**********************************************!*\
  !*** ./src/app/playlist/playlist.service.ts ***!
  \**********************************************/
/*! exports provided: PlaylistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistService", function() { return PlaylistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PlaylistService {
    constructor() {
        this.playlists = {};
    }
    addPlaylist(playlist) {
        this.playlists[playlist.id] = playlist;
    }
    removePlaylist(id) {
        delete this.playlists[id];
    }
    replacePlaylist(firstPlaylistId, secondPlaylist) {
        this.removePlaylist(firstPlaylistId);
        this.addPlaylist(secondPlaylist);
    }
}
PlaylistService.ɵfac = function PlaylistService_Factory(t) { return new (t || PlaylistService)(); };
PlaylistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlaylistService, factory: PlaylistService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaylistService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "HMGD":
/*!************************************************!*\
  !*** ./src/app/playlist/playlist.component.ts ***!
  \************************************************/
/*! exports provided: PlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistComponent", function() { return PlaylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_loop_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/loop.enum */ "Q4k7");
/* harmony import */ var _playlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playlist */ "uwmL");
/* harmony import */ var _playlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playlist.service */ "GIcy");
/* harmony import */ var _common_ytpl_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/ytpl.service */ "3S+d");
/* harmony import */ var _common_ytdl_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/ytdl.service */ "OijL");
/* harmony import */ var _playlist_controls_playlist_controls_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playlist-controls/playlist-controls.component */ "qH9w");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _playlist_settings_playlist_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./playlist-settings/playlist-settings.component */ "0KgF");
/* harmony import */ var _audio_audio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../audio/audio.component */ "ebS6");











function PlaylistComponent_app_audio_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-audio", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loop", ctx_r0.isLoopSingle())("audioSrc", ctx_r0.playlist == null ? null : ctx_r0.playlist.getCurrentAudioId());
} }
class PlaylistComponent {
    constructor(playlistService, ytplService, ytdlService) {
        this.playlistService = playlistService;
        this.ytplService = ytplService;
        this.ytdlService = ytdlService;
        this.playlistId = '';
    }
    ngOnInit() {
        this.ytplService.getPlaylistItems(this.playlistId).subscribe((model) => {
            this.playlist = new _playlist__WEBPACK_IMPORTED_MODULE_2__["Playlist"](model, this.ytdlService, true);
            this.playlistService.addPlaylist(this.playlist);
        });
    }
    isLoopSingle() {
        var _a;
        return ((_a = this.playlist) === null || _a === void 0 ? void 0 : _a.loop) === _common_loop_enum__WEBPACK_IMPORTED_MODULE_1__["LoopType"].SINGLE;
    }
    onNext() {
        var _a;
        (_a = this.playlist) === null || _a === void 0 ? void 0 : _a.next();
    }
    onPrev() {
        var _a;
        (_a = this.playlist) === null || _a === void 0 ? void 0 : _a.prev();
    }
    onPlay() {
        var _a;
        (_a = this.playlist) === null || _a === void 0 ? void 0 : _a.play();
    }
    onStop() {
        var _a;
        (_a = this.playlist) === null || _a === void 0 ? void 0 : _a.stop();
    }
    onShuffle(shuffle) {
        var _a;
        (_a = this.playlist) === null || _a === void 0 ? void 0 : _a.setShuffle(shuffle);
    }
    onLoop(loop) {
        var _a;
        (_a = this.playlist) === null || _a === void 0 ? void 0 : _a.setLoop(loop);
    }
    removePlaylist() {
        var _a;
        (_a = this.playlist) === null || _a === void 0 ? void 0 : _a.stop();
        this.playlistService.removePlaylist(this.playlistId);
    }
    ngOnDestroy() {
        this.removePlaylist();
    }
}
PlaylistComponent.ɵfac = function PlaylistComponent_Factory(t) { return new (t || PlaylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_playlist_service__WEBPACK_IMPORTED_MODULE_3__["PlaylistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_ytpl_service__WEBPACK_IMPORTED_MODULE_4__["YTPLService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_ytdl_service__WEBPACK_IMPORTED_MODULE_5__["YTDLService"])); };
PlaylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaylistComponent, selectors: [["app-playlist"]], inputs: { playlistId: "playlistId" }, decls: 8, vars: 2, consts: [[3, "play", "stop", "next", "prev"], [3, "loop", "audioSrc", 4, "ngIf"], [3, "shuffle", "loop"], [3, "loop", "audioSrc"]], template: function PlaylistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Current Sound: ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-playlist-controls", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("play", function PlaylistComponent_Template_app_playlist_controls_play_5_listener() { return ctx.onPlay(); })("stop", function PlaylistComponent_Template_app_playlist_controls_stop_5_listener() { return ctx.onStop(); })("next", function PlaylistComponent_Template_app_playlist_controls_next_5_listener() { return ctx.onNext(); })("prev", function PlaylistComponent_Template_app_playlist_controls_prev_5_listener() { return ctx.onPrev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlaylistComponent_app_audio_6_Template, 1, 2, "app-audio", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-playlist-settings", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("shuffle", function PlaylistComponent_Template_app_playlist_settings_shuffle_7_listener($event) { return ctx.onShuffle($event); })("loop", function PlaylistComponent_Template_app_playlist_settings_loop_7_listener($event) { return ctx.onLoop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.playlist == null ? null : ctx.playlist.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playlist);
    } }, directives: [_playlist_controls_playlist_controls_component__WEBPACK_IMPORTED_MODULE_6__["PlaylistControlsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _playlist_settings_playlist_settings_component__WEBPACK_IMPORTED_MODULE_8__["PlaylistSettingsComponent"], _audio_audio_component__WEBPACK_IMPORTED_MODULE_9__["AudioComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaylistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-playlist',
                templateUrl: 'playlist.component.html',
            }]
    }], function () { return [{ type: _playlist_service__WEBPACK_IMPORTED_MODULE_3__["PlaylistService"] }, { type: _common_ytpl_service__WEBPACK_IMPORTED_MODULE_4__["YTPLService"] }, { type: _common_ytdl_service__WEBPACK_IMPORTED_MODULE_5__["YTDLService"] }]; }, { playlistId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "OijL":
/*!****************************************!*\
  !*** ./src/app/common/ytdl.service.ts ***!
  \****************************************/
/*! exports provided: YTDLService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YTDLService", function() { return YTDLService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class YTDLService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAudioStream(url) {
        return this.httpClient.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api}/stream/${url}`, {
            responseType: 'arraybuffer',
        });
    }
}
YTDLService.ɵfac = function YTDLService_Factory(t) { return new (t || YTDLService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
YTDLService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: YTDLService, factory: YTDLService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YTDLService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Q4k7":
/*!*************************************!*\
  !*** ./src/app/common/loop.enum.ts ***!
  \*************************************/
/*! exports provided: LoopType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoopType", function() { return LoopType; });
var LoopType;
(function (LoopType) {
    LoopType[LoopType["SINGLE"] = 0] = "SINGLE";
    LoopType[LoopType["ALL"] = 1] = "ALL";
    LoopType[LoopType["NONE"] = 2] = "NONE";
})(LoopType || (LoopType = {}));


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



class AppComponent {
    constructor() {
        this.title = 'dm-sounds';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [["routerLink", "/temp", "routerLinkActive", "active"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Temp Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50Lmxlc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _temp_temp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./temp/temp.component */ "bsyy");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _audio_audio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./audio/audio.component */ "ebS6");
/* harmony import */ var _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./playlist/playlist.component */ "HMGD");
/* harmony import */ var _playlist_playlist_settings_playlist_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./playlist/playlist-settings/playlist-settings.component */ "0KgF");
/* harmony import */ var _playlist_playlist_controls_playlist_controls_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./playlist/playlist-controls/playlist-controls.component */ "qH9w");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _temp_temp_component__WEBPACK_IMPORTED_MODULE_5__["TempComponent"],
        _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_8__["PlaylistComponent"],
        _playlist_playlist_settings_playlist_settings_component__WEBPACK_IMPORTED_MODULE_9__["PlaylistSettingsComponent"],
        _playlist_playlist_controls_playlist_controls_component__WEBPACK_IMPORTED_MODULE_10__["PlaylistControlsComponent"],
        _audio_audio_component__WEBPACK_IMPORTED_MODULE_7__["AudioComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _temp_temp_component__WEBPACK_IMPORTED_MODULE_5__["TempComponent"],
                    _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_8__["PlaylistComponent"],
                    _playlist_playlist_settings_playlist_settings_component__WEBPACK_IMPORTED_MODULE_9__["PlaylistSettingsComponent"],
                    _playlist_playlist_controls_playlist_controls_component__WEBPACK_IMPORTED_MODULE_10__["PlaylistControlsComponent"],
                    _audio_audio_component__WEBPACK_IMPORTED_MODULE_7__["AudioComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "bsyy":
/*!****************************************!*\
  !*** ./src/app/temp/temp.component.ts ***!
  \****************************************/
/*! exports provided: TempComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempComponent", function() { return TempComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../playlist/playlist.component */ "HMGD");






function TempComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-playlist", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playlist_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playlistId", playlist_r1);
} }
class TempComponent {
    constructor() {
        this.playlists = [];
        this.playlistId = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.audioIds = new Set();
        this.playlistItems = new Array();
        this.playlistIndex = -1;
        this.currentItemId = '';
    }
    addAudioStream(audioId) {
        this.audioIds.add(audioId);
    }
    removeAudioStream(audioId) {
        this.audioIds.delete(audioId);
    }
    onSubmit() {
        this.playlists.push(this.playlistId.value);
    }
    // public onSubmit(): void {
    //   this.ytplService
    //     .getPlaylistItems(this.playlistId.value)
    //     .subscribe((data) => {
    //       this.playlistItems = data;
    //       this.playlistIndex = 0;
    //       this.playSong(this.playlistIndex);
    //     });
    // }
    playSong(index) {
        const item = this.playlistItems[index];
        if (this.currentItemId !== '') {
            this.removeAudioStream(this.currentItemId);
        }
        this.audioIds.add(item.id);
        this.currentItemId = item.id;
    }
    nextSong() {
        this.playSong(++this.playlistIndex);
    }
    prevSong() {
        this.playSong(--this.playlistIndex);
    }
}
TempComponent.ɵfac = function TempComponent_Factory(t) { return new (t || TempComponent)(); };
TempComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TempComponent, selectors: [["app-temp"]], decls: 7, vars: 2, consts: [[3, "ngSubmit"], ["id", "ytpl-id", "type", "text", 3, "formControl"], ["type", "submit"], [4, "ngFor", "ngForOf"], [3, "playlistId"]], template: function TempComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TempComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Youtube Playlist Id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Stream");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TempComponent_div_6_Template, 2, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.playlistId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.playlists);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_3__["PlaylistComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TempComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-temp',
                templateUrl: 'temp.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ebS6":
/*!******************************************!*\
  !*** ./src/app/audio/audio.component.ts ***!
  \******************************************/
/*! exports provided: AudioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioComponent", function() { return AudioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AudioComponent {
}
AudioComponent.ɵfac = function AudioComponent_Factory(t) { return new (t || AudioComponent)(); };
AudioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AudioComponent, selectors: [["app-audio"]], inputs: { audioSrc: "audioSrc", loop: "loop" }, decls: 3, vars: 2, consts: [["autoplay", "", "controls", "", 3, "loop"], ["type", "audio/mp3", 3, "src"]], template: function AudioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "audio", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Unsupported Audio Element\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loop", ctx.loop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/stream/", ctx.audioSrc, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AudioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-audio',
                templateUrl: 'audio.component.html',
            }]
    }], null, { audioSrc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "qH9w":
/*!***************************************************************************!*\
  !*** ./src/app/playlist/playlist-controls/playlist-controls.component.ts ***!
  \***************************************************************************/
/*! exports provided: PlaylistControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistControlsComponent", function() { return PlaylistControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PlaylistControlsComponent {
    constructor() {
        this.play = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.prev = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
PlaylistControlsComponent.ɵfac = function PlaylistControlsComponent_Factory(t) { return new (t || PlaylistControlsComponent)(); };
PlaylistControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaylistControlsComponent, selectors: [["app-playlist-controls"]], outputs: { play: "play", stop: "stop", prev: "prev", next: "next" }, decls: 9, vars: 0, consts: [[3, "click"]], template: function PlaylistControlsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistControlsComponent_Template_button_click_1_listener() { return ctx.play.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistControlsComponent_Template_button_click_3_listener() { return ctx.stop.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Stop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistControlsComponent_Template_button_click_5_listener() { return ctx.prev.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistControlsComponent_Template_button_click_7_listener() { return ctx.next.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaylistControlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-playlist-controls',
                templateUrl: 'playlist-controls.component.html',
            }]
    }], null, { play: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], stop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], prev: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], next: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "uwmL":
/*!**************************************!*\
  !*** ./src/app/playlist/playlist.ts ***!
  \**************************************/
/*! exports provided: Playlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Playlist", function() { return Playlist; });
/* harmony import */ var _common_loop_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/loop.enum */ "Q4k7");

class Playlist {
    constructor(model, ytdlService, autoplay = false, shuffle = false, loop = _common_loop_enum__WEBPACK_IMPORTED_MODULE_0__["LoopType"].NONE) {
        this.ytdlService = ytdlService;
        this.autoplay = autoplay;
        this.shuffle = shuffle;
        this.loop = loop;
        this.currentIndex = 0;
        this.history = [];
        this.id = model.id;
        this.items = model.items;
        this.title = model.title;
        this.audioContext = new AudioContext();
        this.audioSource = this.audioContext.createBufferSource();
        if (autoplay) {
            this.play();
        }
    }
    setShuffle(shuffle) {
        console.log(`shuffle: ${shuffle}`);
        this.shuffle = shuffle;
    }
    setLoop(loop) {
        console.log(loop);
        this.loop = loop;
    }
    play(index) {
        if (index === undefined) {
            console.log(`playing ${this.currentIndex}`);
            this.streamAudio(this.items[this.currentIndex].id);
            return;
        }
        if (index < 0 || index >= this.items.length) {
            return;
        }
        const itemId = this.items[index].id;
        this.streamAudio(itemId);
    }
    stop() {
        if (this.audioContext.state === 'running') {
            this.audioSource.stop();
            this.audioContext.close();
        }
        console.log('stopping');
    }
    next() {
        console.log('next');
        this.stop();
        if (this.currentIndex > -1 && this.currentIndex < this.items.length) {
            this.history.push(this.currentIndex);
        }
        this.currentIndex = this.getNextIndex();
        this.play(this.currentIndex);
    }
    prev() {
        console.log('prev');
        this.stop();
        if (this.history.length > 0) {
            this.currentIndex = this.history.pop();
            this.play(this.currentIndex);
        }
    }
    getCurrentAudioId() {
        if (this.currentIndex >= 0 && this.currentIndex < this.items.length) {
            return this.items[this.currentIndex].id;
        }
        return '';
    }
    streamAudio(id) {
        this.ytdlService.getAudioStream(id).subscribe((stream) => {
            this.audioContext
                .decodeAudioData(stream)
                .then((value) => {
                this.audioSource.buffer = value;
                this.audioSource.connect(this.audioContext.destination);
                this.audioSource.start();
                this.audioSource.loop = this.loop === _common_loop_enum__WEBPACK_IMPORTED_MODULE_0__["LoopType"].SINGLE;
                console.log(`playing ${id}`);
            })
                .catch((err) => console.log(err));
        });
    }
    getNextIndex() {
        if (this.loop === _common_loop_enum__WEBPACK_IMPORTED_MODULE_0__["LoopType"].SINGLE) {
            return this.currentIndex;
        }
        if (this.shuffle) {
            return Math.floor(Math.random() * Math.floor(this.items.length));
        }
        else {
            if (this.currentIndex === this.items.length - 1) {
                if (this.loop === _common_loop_enum__WEBPACK_IMPORTED_MODULE_0__["LoopType"].ALL) {
                    return 0;
                }
                return -1;
            }
            return this.currentIndex + 1;
        }
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _temp_temp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./temp/temp.component */ "bsyy");





const routes = [{ path: 'temp', component: _temp_temp_component__WEBPACK_IMPORTED_MODULE_2__["TempComponent"] }];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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