webpackJsonp([0,4],{

/***/ 119:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_pipe__ = __webpack_require__(603);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SearchPipeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchPipeModule = (function () {
    function SearchPipeModule() {
    }
    SearchPipeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* BrowserModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__search_pipe__["a" /* SearchPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__search_pipe__["a" /* SearchPipe */]]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchPipeModule);
    return SearchPipeModule;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/search.pipe.module.js.map

/***/ },

/***/ 120:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort_pipe__ = __webpack_require__(605);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SortPipeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SortPipeModule = (function () {
    function SortPipeModule() {
    }
    SortPipeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* BrowserModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__sort_pipe__["a" /* SortPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__sort_pipe__["a" /* SortPipe */]]
        }), 
        __metadata('design:paramtypes', [])
    ], SortPipeModule);
    return SortPipeModule;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/sort.pipe.module.js.map

/***/ },

/***/ 121:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AlbumService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlbumService = (function () {
    function AlbumService(http) {
        this.http = http;
    }
    AlbumService.prototype.addAlbum = function (model, dataUrl) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var body = {
            artist: model.artist,
            genres: model.genres,
            year: model.year,
            name: model.name,
            songs: model.songs,
            dataUrl: dataUrl
        };
        console.log(body);
        return this.http.post('/api/album', body, options)
            .map(function (response) {
            return response.json();
        });
    };
    AlbumService.prototype.getAlbums = function () {
        return this.http.get('/api/albums')
            .map(function (response) {
            return response.json().data;
        });
    };
    AlbumService.prototype.getAlbum = function (id) {
        return this.http.get('/api/albums/' + id)
            .map(function (response) {
            return response.json().data;
        });
    };
    AlbumService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AlbumService);
    return AlbumService;
    var _a;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/album.service.js.map

/***/ },

/***/ 122:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globalEventsManager__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isAdminEventManager__ = __webpack_require__(234);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = (function () {
    function AuthenticationService(http, globalEventsManager, isAdminEventManager) {
        this.http = http;
        this.globalEventsManager = globalEventsManager;
        this.isAdminEventManager = isAdminEventManager;
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var body = JSON.stringify({ username: username, password: password });
        return this.http.post('/api/authenticate', body, options)
            .map(function (response) {
            //console.log(response.json().result);
            // login successful if there's a jwt token in the response
            var token = response.json().auth_token;
            var role = response.json().role;
            var favoriteArtists = response.json().favoriteArtists;
            var favoriteAlbums = response.json().favoriteAlbums;
            var favoriteSongs = response.json().favoriteSongs;
            if (token) {
                // set token property
                _this.token = token;
                if (role == 'Admin') {
                    _this.isAdminEventManager.showAdminNav(true);
                }
                else {
                    _this.isAdminEventManager.showAdminNav(false);
                }
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, favoriteArtists: favoriteArtists, favoriteAlbums: favoriteAlbums, favoriteSongs: favoriteSongs, token: token, role: role }));
                _this.globalEventsManager.showNavBar(true);
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                _this.globalEventsManager.showNavBar(false);
                _this.isAdminEventManager.showAdminNav(false);
                return false;
            }
        });
    };
    AuthenticationService.prototype.register = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var body = JSON.stringify(user);
        return this.http.post('/api/register', body, options)
            .map(function (response) {
            if (response.status === 201) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        this.globalEventsManager.showNavBar(false);
        this.isAdminEventManager.showAdminNav(false);
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__globalEventsManager__["a" /* GlobalEventsManager */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__globalEventsManager__["a" /* GlobalEventsManager */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__isAdminEventManager__["a" /* IsAdminEventsManager */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__isAdminEventManager__["a" /* IsAdminEventsManager */]) === 'function' && _c) || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/authentication.service.js.map

/***/ },

/***/ 123:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SongService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SongService = (function () {
    function SongService(http) {
        this.http = http;
    }
    SongService.prototype.addSong = function (model) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var body = {
            name: model.name,
            artist: model.artist,
            duration: model.duration,
        };
        return this.http.post('/api/song', body, options)
            .map(function (response) {
            return response.json();
        });
    };
    SongService.prototype.getSong = function (id) {
        return this.http.get('/api/songs/' + id)
            .map(function (response) {
            return response.json().data;
        });
    };
    SongService.prototype.getSongs = function () {
        return this.http.get('api/songs')
            .map(function (response) {
            return response.json().data;
        });
    };
    SongService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], SongService);
    return SongService;
    var _a;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/song.service.js.map

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (immutable) */ exports["a"] = routerTransition;

function routerTransition() {
    return slideToLeft();
}
function slideToLeft() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'initial', width: '100%', height: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'initial', width: '100%', height: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'fixed', display: 'inline-block', height: '100%', transform: 'translateX(100%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0%)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'fixed', display: 'inline-block', height: '100%', transform: 'translateX(0%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(-100%)' }))
        ]),
    ]);
}
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/router.animations.js.map

/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globalEventsManager__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http, globalEventsManager) {
        this.http = http;
        this.globalEventsManager = globalEventsManager;
    }
    UserService.prototype.getUser = function (username) {
        return this.http.get('/api/users/' + username)
            .map(function (response) {
            return response.json().data;
        });
    };
    UserService.prototype.getUsers = function () {
        return this.http.get('/api/users')
            .map(function (response) {
            return response.json().data;
        });
    };
    UserService.prototype.follow = function (currentUsername, username, operation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        // if operation is true - follow; if operation is false - unfollow
        var body = { currentUsername: currentUsername, username: username, operation: operation };
        return this.http.put('/api/follow', body, options)
            .map(function (response) {
            if (response.status === 201) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    UserService.prototype.favoriteSong = function (currentUsername, song, operation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        // if operation is true - follow; if operation is false - unfollow
        var body = { currentUsername: currentUsername, song: song, operation: operation };
        return this.http.put('/api/favorite-song', body, options)
            .map(function (response) {
            if (response.status === 201) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    UserService.prototype.favoriteArtist = function (currentUsername, artist, operation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        // if operation is true - follow; if operation is false - unfollow
        var body = { currentUsername: currentUsername, artist: artist, operation: operation };
        return this.http.put('/api/favorite-artist', body, options)
            .map(function (response) {
            if (response.status === 201) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    UserService.prototype.favoriteAlbum = function (currentUsername, album, operation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        // if operation is true - follow; if operation is false - unfollow
        var body = { currentUsername: currentUsername, album: album, operation: operation };
        return this.http.put('/api/favorite-album', body, options)
            .map(function (response) {
            if (response.status === 201) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    UserService.prototype.updateUserProfilePicture = function (username, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var body = { username: username, data: data };
        return this.http.put('/api/profile/profile-picture', body, options)
            .map(function (response) {
            if (response.status === 201) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    UserService.prototype.updateInformation = function (firstName, lastName, email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var body = { firstName: firstName, lastName: lastName, email: email };
        return this.http.put('/api/profile/profile-information', body, options)
            .map(function (response) {
            if (response.status === 201) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    UserService.prototype.updatePassword = function (oldPassword, newPassword) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var body = { oldPassword: oldPassword, newPassword: newPassword };
        return this.http.put('/api/profile/password', body, options)
            .map(function (response) {
            if (response.status === 201) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    UserService.prototype.updateUserRole = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var body = { username: username };
        return this.http.put('/api/role', body, options)
            .map(function (response) {
            if (response.status === 201) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    UserService.prototype.demoteAdmin = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var body = { username: username };
        return this.http.put('/api/demote', body, options)
            .map(function (response) {
            if (response.status === 201) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__globalEventsManager__["a" /* GlobalEventsManager */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__globalEventsManager__["a" /* GlobalEventsManager */]) === 'function' && _b) || Object])
    ], UserService);
    return UserService;
    var _a, _b;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/user.service.js.map

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__song_duration_pipe__ = __webpack_require__(604);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SongDurationPipeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SongDurationPipeModule = (function () {
    function SongDurationPipeModule() {
    }
    SongDurationPipeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* BrowserModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__song_duration_pipe__["a" /* SongDurationPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__song_duration_pipe__["a" /* SongDurationPipe */]]
        }), 
        __metadata('design:paramtypes', [])
    ], SongDurationPipeModule);
    return SongDurationPipeModule;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/song-duration.pipe.module.js.map

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return IsAdminEventsManager; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IsAdminEventsManager = (function () {
    function IsAdminEventsManager() {
        this._showAdminNav = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.showAdminNavEmitter = this._showAdminNav.asObservable();
    }
    IsAdminEventsManager.prototype.showAdminNav = function (ifShow) {
        this._showAdminNav.next(ifShow);
    };
    IsAdminEventsManager = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], IsAdminEventsManager);
    return IsAdminEventsManager;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/isAdminEventManager.js.map

/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageService = (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.getMessages = function () {
        return this.http.get('/api/messages')
            .map(function (response) {
            return response.json().data;
        });
    };
    MessageService.prototype.getMessage = function (id) {
        return this.http.get('/api/messages/' + id)
            .map(function (response) {
            return response.json().data;
        });
    };
    MessageService.prototype.updateStatus = function (id, username, status) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var body = { username: username, status: status };
        return this.http.put('/api/messages/' + id, body, options)
            .map(function (response) {
            if (response.status === 201) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    MessageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], MessageService);
    return MessageService;
    var _a;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/message.service.js.map

/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_home_home_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_auth_login_login_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_auth_register_register_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_auth_logout_logout_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_profile_profile_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_contact_contact_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_artists_all_artists_artists_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_artists_detailed_artist_detailed_artist_component__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_albums_all_albums_albums_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_albums_detailed_album_detailed_album_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_songs_all_songs_songs_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_users_all_users_users_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modules_users_detailed_user_detailed_user_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_admin_addArtist_addArtist_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modules_admin_addAlbum_addAlbum_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modules_admin_addSong_addSong_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modules_admin_updateUserRole_update_role_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__modules_messages_all_messages_messages_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__modules_messages_detailed_message_detailed_message_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__modules_error_error_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__guards_admin_guard__ = __webpack_require__(356);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return appRoutes; });






















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__modules_home_home_component__["a" /* HomeComponent */] },
    { path: 'artists', component: __WEBPACK_IMPORTED_MODULE_6__modules_artists_all_artists_artists_component__["a" /* ArtistsComponent */] },
    { path: 'artists/:id', component: __WEBPACK_IMPORTED_MODULE_7__modules_artists_detailed_artist_detailed_artist_component__["a" /* DetailedArtistComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'albums', component: __WEBPACK_IMPORTED_MODULE_8__modules_albums_all_albums_albums_component__["a" /* AlbumsComponent */] },
    { path: 'albums/:id', component: __WEBPACK_IMPORTED_MODULE_9__modules_albums_detailed_album_detailed_album_component__["a" /* DetailedAlbumComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'songs', component: __WEBPACK_IMPORTED_MODULE_10__modules_songs_all_songs_songs_component__["a" /* SongsComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_11__modules_users_all_users_users_component__["a" /* UsersComponent */] },
    { path: 'users/:username', component: __WEBPACK_IMPORTED_MODULE_12__modules_users_detailed_user_detailed_user_component__["a" /* DetailedUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_5__modules_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__modules_auth_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__modules_auth_register_register_component__["a" /* RegisterComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_3__modules_auth_logout_logout_component__["a" /* LogoutComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_4__modules_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'admin/add-artist', component: __WEBPACK_IMPORTED_MODULE_13__modules_admin_addArtist_addArtist_component__["a" /* AddArtistComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_21__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'admin/add-album', component: __WEBPACK_IMPORTED_MODULE_14__modules_admin_addAlbum_addAlbum_component__["a" /* AddAlbumComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_21__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'admin/add-song', component: __WEBPACK_IMPORTED_MODULE_15__modules_admin_addSong_addSong_component__["a" /* AddSongComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_21__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'admin/update-user-role', component: __WEBPACK_IMPORTED_MODULE_16__modules_admin_updateUserRole_update_role_component__["a" /* UpdateRoleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_21__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'admin/messages', component: __WEBPACK_IMPORTED_MODULE_17__modules_messages_all_messages_messages_component__["a" /* MessagesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_21__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'admin/messages/:id', component: __WEBPACK_IMPORTED_MODULE_18__modules_messages_detailed_message_detailed_message_component__["a" /* DetailedMessageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_21__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'error', component: __WEBPACK_IMPORTED_MODULE_19__modules_error_error_component__["a" /* ErrorComponent */] },
    { path: '**', redirectTo: 'error' }
];
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/routes.js.map

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(806),
            styles: [__webpack_require__(763)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/app.component.js.map

/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AdminGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminGuard = (function () {
    function AdminGuard(router) {
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.role == 'Admin') {
            // if admin status so return true
            return true;
        }
        // otherwise redirect to home page
        this.router.navigate(['/']);
        return false;
    };
    AdminGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], AdminGuard);
    return AdminGuard;
    var _a;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/admin.guard.js.map

/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/auth.guard.js.map

/***/ },

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_album_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_artist_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_router_animations__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_notifications__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AddAlbumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddAlbumComponent = (function () {
    function AddAlbumComponent(router, albumService, artistService, notificationsService) {
        this.router = router;
        this.albumService = albumService;
        this.artistService = artistService;
        this.notificationsService = notificationsService;
        this.model = {};
    }
    AddAlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.songs = [{ value: "" }];
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };
        this.genresCollection = ["Pop", "Jazz", "Metal", "Rock", "Hip-Hop", "Rap", "Electronic", "Country", "Blues"];
        this.fileName = 'No file chosen';
        this.suggestedArtists = [];
        this.subscription = this.artistService.getArtistsNames()
            .subscribe(function (artists) {
            artists.forEach(function (a) {
                _this.suggestedArtists.push(a.name);
            });
            console.log(_this.suggestedArtists);
        });
    };
    AddAlbumComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AddAlbumComponent.prototype.addAlbum = function () {
        var _this = this;
        var album = {};
        album["songs"] = [];
        this.songs.forEach((function (x) { return album["songs"].push(x.value); }));
        album["genres"] = this.genr;
        album["artist"] = this.model.artist;
        album["year"] = this.model.year;
        album["name"] = this.model.name;
        if (this.file.type === 'image/jpeg' || this.file.type === 'image/png') {
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(this.file);
            reader_1.onload = function () {
                var dataUrl = reader_1.result;
                _this.albumService.addAlbum(album, dataUrl)
                    .subscribe(function (res) {
                    if (res) {
                        _this.notificationsService.success('', 'Successfully added new album');
                        _this.fileName = 'No file chosen';
                        _this.songs = [{ value: "" }];
                    }
                    else {
                        _this.notificationsService.error('', 'Problem occured while adding a new album. Please try again later.');
                        _this.songs = [{ value: "" }];
                    }
                }, function (error) {
                    var message = JSON.parse(error._body);
                    _this.notificationsService.error('', message);
                    _this.songs = [{ value: "" }];
                });
            };
        }
        else {
            this.notificationsService.alert('', 'Please upload .jped or .png file.');
        }
    };
    AddAlbumComponent.prototype.addSongInput = function () {
        event.preventDefault();
        this.songs.push({ value: '' });
    };
    AddAlbumComponent.prototype.onProfilePictureUpload = function (event) {
        event.preventDefault();
        this.file = event.target.files[0];
        this.fileName = this.file.name;
    };
    AddAlbumComponent.prototype.change = function (options) {
        this.genr = Array.apply(null, options) // convert to real array
            .filter(function (option) { return option.selected; })
            .map(function (option) { return option.value; });
    };
    AddAlbumComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addAlbum',
            template: __webpack_require__(807),
            styles: [__webpack_require__(764)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__animations_router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_album_service__["a" /* AlbumService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_album_service__["a" /* AlbumService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_artist_service__["a" /* ArtistService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_artist_service__["a" /* ArtistService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"]) === 'function' && _d) || Object])
    ], AddAlbumComponent);
    return AddAlbumComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/addAlbum.component.js.map

/***/ },

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_artist_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_router_animations__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AddArtistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddArtistComponent = (function () {
    function AddArtistComponent(router, artistService, notificationsService) {
        this.router = router;
        this.artistService = artistService;
        this.notificationsService = notificationsService;
        this.model = {};
    }
    AddArtistComponent.prototype.ngOnInit = function () {
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };
        this.genresCollection = ["Pop", "Jazz", "Metal", "Rock", "Hip-Hop", "Rap", "Electronic", "Country", "Blues"];
        this.fileName = 'No file chosen';
    };
    AddArtistComponent.prototype.change = function (options) {
        this.genr = Array.apply(null, options) // convert to real array
            .filter(function (option) { return option.selected; })
            .map(function (option) { return option.value; });
    };
    AddArtistComponent.prototype.addArtist = function () {
        var _this = this;
        var artist = {};
        artist["yearsActive"] = this.model.from + ' - ' + this.model.to;
        artist["genres"] = this.genr;
        artist["name"] = this.model.name;
        artist["bio"] = this.model.bio;
        artist["nationality"] = this.model.nationality;
        if (this.file.type === 'image/jpeg' || this.file.type === 'image/png') {
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(this.file);
            reader_1.onload = function () {
                var dataUrl = reader_1.result;
                _this.artistService.addArtist(artist, dataUrl)
                    .subscribe(function (res) {
                    if (res) {
                        _this.notificationsService.success('', 'Successfully added new artist');
                        _this.fileName = 'No file chosen';
                    }
                    else {
                        _this.notificationsService.error('', 'Problem occured while adding a new artist. Please try again later.');
                    }
                }, function (error) {
                    var message = JSON.parse(error._body);
                    _this.notificationsService.error('', message);
                });
            };
        }
        else {
            this.notificationsService.alert('', 'Please upload .jped or .png file.');
        }
    };
    AddArtistComponent.prototype.onProfilePictureUpload = function (event) {
        event.preventDefault();
        this.file = event.target.files[0];
        this.fileName = this.file.name;
    };
    AddArtistComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addArtist',
            template: __webpack_require__(808),
            styles: [__webpack_require__(765)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__animations_router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_artist_service__["a" /* ArtistService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_artist_service__["a" /* ArtistService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"]) === 'function' && _c) || Object])
    ], AddArtistComponent);
    return AddArtistComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/addArtist.component.js.map

/***/ },

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_song_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_artist_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_router_animations__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_notifications__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AddSongComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddSongComponent = (function () {
    function AddSongComponent(router, songService, artistService, notificationsService) {
        this.router = router;
        this.songService = songService;
        this.artistService = artistService;
        this.notificationsService = notificationsService;
        this.model = {};
    }
    AddSongComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };
        this.suggestedArtists = [];
        this.subscription = this.artistService.getArtistsNames()
            .subscribe(function (artists) {
            artists.forEach(function (a) {
                _this.suggestedArtists.push(a.name);
            });
            console.log(_this.suggestedArtists);
        });
    };
    AddSongComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AddSongComponent.prototype.addSong = function () {
        var _this = this;
        this.songService.addSong(this.model)
            .subscribe(function (result) {
            if (result) {
                _this.notificationsService.success('', 'Successfully added new song');
            }
            else {
                _this.notificationsService.error('', 'Problem occured while adding a new song. Please try again later.');
            }
        }, function (error) {
            var message = JSON.parse(error._body);
            _this.notificationsService.error('', message);
        });
    };
    AddSongComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addArtist',
            template: __webpack_require__(809),
            styles: [__webpack_require__(766)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__animations_router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_song_service__["a" /* SongService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_song_service__["a" /* SongService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_artist_service__["a" /* ArtistService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_artist_service__["a" /* ArtistService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"]) === 'function' && _d) || Object])
    ], AddSongComponent);
    return AddSongComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/addSong.component.js.map

/***/ },

/***/ 361:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_router_animations__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UpdateRoleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateRoleComponent = (function () {
    function UpdateRoleComponent(router, userService, notificationsService) {
        this.router = router;
        this.userService = userService;
        this.notificationsService = notificationsService;
        this.model = {};
        this.usernames = [];
        this.admins = [];
        this.users = [];
    }
    UpdateRoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };
        this.userService.getUsers()
            .subscribe(function (res) {
            res.forEach(function (user) {
                if (user.role == 'User') {
                    _this.usernames.push(user.username);
                    _this.users.push(user);
                }
                else {
                    _this.admins.push(user);
                }
            });
        });
    };
    UpdateRoleComponent.prototype.updateRole = function () {
        var _this = this;
        var username = this.model.username;
        this.userService.updateUserRole(this.model.username)
            .subscribe(function (res) {
            if (res) {
                _this.notificationsService.success('', 'Succesfuly updated ' + username + 's role to admin');
                for (var _i = 0, _a = _this.users; _i < _a.length; _i++) {
                    var user = _a[_i];
                    if (username == user.username) {
                        _this.admins.push(user);
                        break;
                    }
                }
            }
            else {
                _this.notificationsService.error('', 'Unsuccesfuly updated ' + _this.model.username + 's role to admin.Please try again later!');
            }
        });
    };
    UpdateRoleComponent.prototype.removeFromAdmins = function (user) {
        var _this = this;
        this.userService.demoteAdmin(user.username)
            .subscribe(function (res) {
            if (res) {
                _this.admins = _this.admins.filter(function (x) { return x.username != user.username; });
                _this.users.push(user);
                _this.usernames.push(user.username);
                _this.notificationsService.success('', 'Succesfuly demoted ' + user.username + 's role to user');
            }
            else {
                _this.notificationsService.error('', 'Unsuccesfuly demote ' + user.username + 's role to user.Please try again later!');
            }
        });
    };
    UpdateRoleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update-role',
            template: __webpack_require__(811),
            styles: [__webpack_require__(768)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__animations_router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"]) === 'function' && _c) || Object])
    ], UpdateRoleComponent);
    return UpdateRoleComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/update-role.component.js.map

/***/ },

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_album_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_router_animations__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AlbumsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlbumsComponent = (function () {
    function AlbumsComponent(albumService) {
        this.albumService = albumService;
        this.parameters = ['name'];
        this.searchPattern = '';
        this.genres = ["All", "Pop", "Jazz", "Metal", "Rock", "Hip-Hop", "Rap", "Electronic", "Country", "Blues"];
        this.sortTypes = ['Name'];
        this.sortOrders = ['Ascending', 'Descending'];
        this.genre = this.genres[0];
        this.sortType = this.sortTypes[0];
        this.sortOrder = this.sortOrders[0];
    }
    AlbumsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.albumService.getAlbums()
            .subscribe(function (albums) {
            _this.albums = albums;
        });
    };
    AlbumsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlbumsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-albums',
            template: __webpack_require__(813),
            styles: [__webpack_require__(770)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations_router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' },
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_album_service__["a" /* AlbumService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_album_service__["a" /* AlbumService */]) === 'function' && _a) || Object])
    ], AlbumsComponent);
    return AlbumsComponent;
    var _a;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/albums.component.js.map

/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_album_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animations_router_animations__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DetailedAlbumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailedAlbumComponent = (function () {
    function DetailedAlbumComponent(router, routeParams, notificationsService, albumService, userService) {
        this.router = router;
        this.routeParams = routeParams;
        this.notificationsService = notificationsService;
        this.albumService = albumService;
        this.userService = userService;
    }
    DetailedAlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUsername = currentUser.username;
        this.subscription = this.routeParams.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.updateAlbumInformation(_this.id);
        });
    };
    DetailedAlbumComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DetailedAlbumComponent.prototype.updateAlbumInformation = function (id) {
        var _this = this;
        this.userService.getUser(this.currentUsername)
            .subscribe(function (user) {
            _this.albumService.getAlbum(id)
                .subscribe(function (album) {
                _this.album = album;
                _this.name = album.name;
                _this.artist = album.artist;
                _this.year = album.year;
                _this.imgUrl = album.imgUrl;
                _this.songs = album.songs;
                _this.genres = album.genres;
                _this.favorited = false;
                if (user.favoriteAlbums.find(function (al) { return al._id == _this.id; })) {
                    _this.favorited = true;
                }
            }, function (error) {
                _this.router.navigate(['error']);
            });
        }, function (error) {
            _this.router.navigate(['error']);
        });
    };
    ;
    DetailedAlbumComponent.prototype.addFavoriteAlbum = function () {
        var _this = this;
        this.userService.favoriteAlbum(this.currentUsername, this.album, true)
            .subscribe(function (result) {
            if (result) {
                _this.notificationsService.success('', 'Successfully added album to favorites');
            }
            else {
                _this.notificationsService.error('', "Unsuccessfully added album to favorites. Please try again later.");
            }
        });
    };
    DetailedAlbumComponent.prototype.removeFavoriteAlbum = function () {
        var _this = this;
        this.userService.favoriteAlbum(this.currentUsername, this.album, false)
            .subscribe(function (result) {
            if (result) {
                _this.notificationsService.success('', 'Successfully removed album from favorites');
            }
            else {
                _this.notificationsService.error('', "Unsuccessfully removed album from favorites. Please try again later.");
            }
        });
    };
    DetailedAlbumComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detailed-album',
            template: __webpack_require__(814),
            styles: [__webpack_require__(771)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__animations_router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' },
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_album_service__["a" /* AlbumService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_album_service__["a" /* AlbumService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _e) || Object])
    ], DetailedAlbumComponent);
    return DetailedAlbumComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/detailed-album.component.js.map

/***/ },

/***/ 364:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_artist_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_router_animations__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ArtistsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtistsComponent = (function () {
    function ArtistsComponent(artistService) {
        this.artistService = artistService;
        this.parameters = ['name'];
        this.searchPattern = '';
        this.genres = ["All", "Pop", "Jazz", "Metal", "Rock", "Hip-Hop", "Rap", "Electronic", "Country", "Blues"];
        this.sortTypes = ['Name'];
        this.sortOrders = ['Ascending', 'Descending'];
        this.genre = this.genres[0];
        this.sortType = this.sortTypes[0];
        this.sortOrder = this.sortOrders[0];
    }
    ArtistsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.artistService.getArtists()
            .subscribe(function (artists) {
            _this.artists = artists;
        });
    };
    ArtistsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ArtistsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-artists',
            template: __webpack_require__(817),
            styles: [__webpack_require__(774)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations_router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' },
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_artist_service__["a" /* ArtistService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_artist_service__["a" /* ArtistService */]) === 'function' && _a) || Object])
    ], ArtistsComponent);
    return ArtistsComponent;
    var _a;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/artists.component.js.map

/***/ },

/***/ 365:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_artist_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animations_router_animations__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DetailedArtistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailedArtistComponent = (function () {
    function DetailedArtistComponent(router, routeParams, notificationsService, artistService, userService) {
        this.router = router;
        this.routeParams = routeParams;
        this.notificationsService = notificationsService;
        this.artistService = artistService;
        this.userService = userService;
    }
    DetailedArtistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUsername = currentUser.username;
        this.subscription = this.routeParams.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.updateArtistInformation(_this.id);
        });
    };
    DetailedArtistComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DetailedArtistComponent.prototype.updateArtistInformation = function (id) {
        var _this = this;
        this.userService.getUser(this.currentUsername)
            .subscribe(function (user) {
            _this.artistService.getArtist(id)
                .subscribe(function (artist) {
                _this.artist = artist;
                _this.name = artist.name;
                _this.nationality = artist.nationality;
                _this.yearsActive = artist.yearsActive;
                _this.bio = artist.bio;
                _this.imgUrl = artist.imgUrl;
                _this.singles = artist.singles;
                _this.albums = artist.albums;
                _this.genres = artist.genres;
                _this.favorited = false;
                if (user.favoriteArtists.find(function (ar) { return ar._id == _this.id; })) {
                    _this.favorited = true;
                }
            }, function (error) {
                _this.router.navigate(['error']);
            });
        }, function (error) {
            _this.router.navigate(['error']);
        });
    };
    ;
    DetailedArtistComponent.prototype.addFavoriteArtist = function () {
        var _this = this;
        this.userService.favoriteArtist(this.currentUsername, this.artist, true)
            .subscribe(function (result) {
            if (result) {
                _this.notificationsService.success('', 'Successfully added artist to favorites');
            }
            else {
                _this.notificationsService.error('', "Unsuccessfully added artist to favorites. Please try again later.");
            }
        });
    };
    DetailedArtistComponent.prototype.removeFavoriteArtist = function () {
        var _this = this;
        this.userService.favoriteArtist(this.currentUsername, this.artist, false)
            .subscribe(function (result) {
            if (result) {
                _this.notificationsService.success('', 'Successfully removed artist from favorites');
            }
            else {
                _this.notificationsService.error('', "Unsuccessfully removed artist from favorites. Please try again later.");
            }
        });
    };
    DetailedArtistComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detailed-artist',
            template: __webpack_require__(820),
            styles: [__webpack_require__(777)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__animations_router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' },
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_artist_service__["a" /* ArtistService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_artist_service__["a" /* ArtistService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _e) || Object])
    ], DetailedArtistComponent);
    return DetailedArtistComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/detailed-artist.component.js.map

/***/ },

/***/ 366:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globalEventsManager__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animations_router_animations__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(router, authenticationService, notificationsService, globalEventsManager) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.notificationsService = notificationsService;
        this.globalEventsManager = globalEventsManager;
        this.model = {};
        this.isAuth = 'false';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authenticationService.logout();
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (result) {
            if (result === true) {
                var username = JSON.parse(localStorage["currentUser"]).username;
                _this.notificationsService.success('', "Welcome " + username + ".");
                setTimeout(function () { return _this.router.navigate(['/']); }, 2000);
            }
            else {
                _this.notificationsService.error('', 'Username or password is incorrect.');
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(822),
            styles: [__webpack_require__(779)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__animations_router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_globalEventsManager__["a" /* GlobalEventsManager */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_globalEventsManager__["a" /* GlobalEventsManager */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/login.component.js.map

/***/ },

/***/ 367:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globalEventsManager__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__(122);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = (function () {
    function LogoutComponent(router, authenticationService, globalEventsManager) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.globalEventsManager = globalEventsManager;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.authenticationService.logout();
        this.router.navigate(['/']);
    };
    LogoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: ''
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_globalEventsManager__["a" /* GlobalEventsManager */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_globalEventsManager__["a" /* GlobalEventsManager */]) === 'function' && _c) || Object])
    ], LogoutComponent);
    return LogoutComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/logout.component.js.map

/***/ },

/***/ 368:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_globalEventsManager__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animations_router_animations__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_user_model__ = __webpack_require__(566);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterComponent = (function () {
    function RegisterComponent(fb, router, authenticationService, notificationsService, globalEventsManager) {
        this.fb = fb;
        this.router = router;
        this.authenticationService = authenticationService;
        this.notificationsService = notificationsService;
        this.globalEventsManager = globalEventsManager;
        this.model = {};
        this.isAuth = 'false';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };
        this.user = this.fb.group({
            'username': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3)])],
            'firstName': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3)])],
            'lastName': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3)])],
            'email': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(/^([\w\d\-\._]+@[\w\d]+\.[\w]{2,3})$/)])],
            'password': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(4)])],
            'confirmPassword': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(4)])]
        });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.model = this.user.value;
        var user = new __WEBPACK_IMPORTED_MODULE_7__models_user_model__["a" /* User */](this.model.username, this.model.password, this.model.firstName, this.model.lastName, this.model.email, 'default-avatar.jpg', [], [], [], [], []);
        this.authenticationService.register(user)
            .subscribe(function (result) {
            if (result === true) {
                _this.notificationsService.success('', 'Successful registration. Please login.');
                setTimeout(function () { return _this.router.navigate(['login']); }, 2000);
            }
        }, function (error) {
            var message = JSON.parse(error._body);
            _this.notificationsService.error('', message);
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(823),
            styles: [__webpack_require__(780)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__animations_router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_globalEventsManager__["a" /* GlobalEventsManager */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_globalEventsManager__["a" /* GlobalEventsManager */]) === 'function' && _e) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/register.component.js.map

/***/ },

/***/ 369:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globalEventsManager__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_contact_service__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animations_router_animations__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_contact_model__ = __webpack_require__(565);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContactComponent = (function () {
    function ContactComponent(router, notificationsService, contactService, globalEventsManager) {
        this.router = router;
        this.notificationsService = notificationsService;
        this.contactService = contactService;
        this.globalEventsManager = globalEventsManager;
        this.model = {};
        this.isAuth = 'false';
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };
    };
    ContactComponent.prototype.contact = function () {
        var _this = this;
        var contact = new __WEBPACK_IMPORTED_MODULE_6__models_contact_model__["a" /* Contact */](this.model.name, this.model.email, this.model.title, this.model.content);
        this.contactService.contact(contact)
            .subscribe(function (result) {
            if (result === true) {
                _this.notificationsService.success('', 'Successful sending. We will reply as soon as possible.');
                setTimeout(function () { return _this.router.navigate(['']); }, 2000);
            }
        }, function (error) {
            var message = JSON.parse(error._body);
            _this.notificationsService.error('', message);
        });
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(824),
            styles: [__webpack_require__(781)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__animations_router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_contact_service__["a" /* ContactService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_contact_service__["a" /* ContactService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_globalEventsManager__["a" /* GlobalEventsManager */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_globalEventsManager__["a" /* GlobalEventsManager */]) === 'function' && _d) || Object])
    ], ContactComponent);
    return ContactComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/contact.component.js.map

/***/ },

/***/ 370:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_router_animations__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(825),
            styles: [__webpack_require__(782)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__animations_router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }), 
        __metadata('design:paramtypes', [])
    ], ErrorComponent);
    return ErrorComponent;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/error.component.js.map

/***/ },

/***/ 371:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_router_animations__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(827),
            styles: [__webpack_require__(784)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__animations_router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/home.component.js.map

/***/ },

/***/ 372:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_router_animations__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MessagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessagesComponent = (function () {
    function MessagesComponent(messageService, notificationsService) {
        this.messageService = messageService;
        this.notificationsService = notificationsService;
        this.parameters = ['title', 'email'];
        this.searchPattern = '';
        this.statuses = ['Not Processed', 'In Process', 'Processed'];
        this.sortTypes = ['Send On', 'Title', 'Email'];
        this.sortOrders = ['Descending', 'Ascending'];
        this.status = this.statuses[0];
        this.sortType = this.sortTypes[0];
        this.sortOrder = this.sortOrders[0];
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };
        this.subscription = this.messageService.getMessages()
            .subscribe(function (result) {
            _this.messages = result;
        });
    };
    MessagesComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MessagesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(829),
            styles: [__webpack_require__(786)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__animations_router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]) === 'function' && _b) || Object])
    ], MessagesComponent);
    return MessagesComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/messages.component.js.map

/***/ },

/***/ 373:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animations_router_animations__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DetailedMessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailedMessageComponent = (function () {
    function DetailedMessageComponent(router, routeParams, notificationsService, messageService, userService) {
        this.router = router;
        this.routeParams = routeParams;
        this.notificationsService = notificationsService;
        this.messageService = messageService;
        this.userService = userService;
    }
    DetailedMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUsername = currentUser.username;
        this.statuses = ["Not Processed", "In Process", "Processed"];
        this.subscription = this.routeParams.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.updateMessageInformation(_this.id);
        });
    };
    DetailedMessageComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DetailedMessageComponent.prototype.updateMessageInformation = function (id) {
        var _this = this;
        this.messageService.getMessage(id)
            .subscribe(function (message) {
            _this.message = message;
            _this.name = message.name;
            _this.email = message.email;
            _this.title = message.title;
            _this.sendOn = message.sendOn;
            _this.content = message.content;
            _this.processedBy = message.processedBy;
            _this.status = message.status;
        }, function (error) {
            _this.router.navigate(['error']);
        });
    };
    ;
    DetailedMessageComponent.prototype.updateStatus = function () {
        var _this = this;
        this.messageService.updateStatus(this.id, this.currentUsername, this.status)
            .subscribe(function (result) {
            if (result) {
                _this.notificationsService.success('', 'Successfully updated message status');
                _this.updateMessageInformation(_this.id);
            }
            else {
                _this.notificationsService.error('', "Unsuccessfully updated message status. Please try again later.");
            }
        });
    };
    DetailedMessageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detailed-message',
            template: __webpack_require__(830),
            styles: [__webpack_require__(787)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__animations_router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' },
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _e) || Object])
    ], DetailedMessageComponent);
    return DetailedMessageComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/detailed-message.component.js.map

/***/ },

/***/ 374:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_router_animations__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(router, routeParams, notificationsService, userService) {
        this.router = router;
        this.routeParams = routeParams;
        this.notificationsService = notificationsService;
        this.userService = userService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.updateUserInformation(currentUser.username);
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProfileComponent.prototype.updateUserInformation = function (username) {
        var _this = this;
        this.subscription = this.userService.getUser(username)
            .subscribe(function (user) {
            _this.user = user;
            _this.username = user.username;
            _this.email = user.email;
            _this.firstName = user.firstName;
            _this.lastName = user.lastName;
            _this.avatar = user.avatar;
            _this.followers = user.followers;
            _this.followings = user.followings;
            _this.favoriteArtists = user.favoriteArtists;
            _this.favoriteAlbums = user.favoriteAlbums;
            _this.favoriteSongs = user.favoriteSongs;
        }, function (error) {
            _this.router.navigate(['error']);
        });
    };
    ;
    ProfileComponent.prototype.informationUpdated = function (username) {
        this.updateUserInformation(username);
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(835),
            styles: [__webpack_require__(792)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__animations_router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' },
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _d) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/profile.component.js.map

/***/ },

/***/ 375:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_router_animations__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_song_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SongsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SongsComponent = (function () {
    function SongsComponent(songService, userService, notificationsService) {
        this.songService = songService;
        this.userService = userService;
        this.notificationsService = notificationsService;
        this.parameters = ['name', 'artist', 'album'];
        this.searchPattern = '';
        this.sortTypes = ['Name', 'Artist', 'Album'];
        this.sortOrders = ['Ascending', 'Descending'];
        this.sortType = this.sortTypes[0];
        this.sortOrder = this.sortOrders[0];
    }
    SongsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.showIcons = true;
        if (currentUser) {
            this.currentUsername = currentUser.username;
            this.userService.getUser(this.currentUsername)
                .subscribe(function (result) {
                _this.favoriteSongs = result.favoriteSongs;
                _this.updateSongsList();
            }, function (err) {
                console.log('problem');
            });
        }
        else {
            this.showIcons = false;
            this.updateSongsList();
        }
    };
    SongsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SongsComponent.prototype.updateSongsList = function () {
        var _this = this;
        this.subscription = this.songService.getSongs()
            .subscribe(function (result) {
            _this.songs = result;
            _this.songs.forEach(function (s) {
                if (_this.favoriteSongs.filter(function (fs) { return fs._id == s._id; }).length > 0) {
                    s.contains = true;
                }
                else {
                    s.contains = false;
                }
            });
        });
    };
    SongsComponent.prototype.addFavoriteSong = function (song) {
        var _this = this;
        this.userService.favoriteSong(this.currentUsername, song, true)
            .subscribe(function (result) {
            if (result) {
                _this.notificationsService.success('', 'Successfully added song to favorites');
            }
            else {
                _this.notificationsService.error('', "Unsuccessfully added song to favorites. Please try again later.");
            }
        });
    };
    SongsComponent.prototype.removeFavoriteSong = function (song) {
        var _this = this;
        this.userService.favoriteSong(this.currentUsername, song, false)
            .subscribe(function (result) {
            if (result) {
                _this.notificationsService.success('', 'Successfully removed song from favorites');
            }
            else {
                _this.notificationsService.error('', "Unsuccessfully removed song from favorites. Please try again later.");
            }
        });
    };
    SongsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-songs',
            template: __webpack_require__(839),
            styles: [__webpack_require__(796)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__animations_router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_song_service__["a" /* SongService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_song_service__["a" /* SongService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"]) === 'function' && _c) || Object])
    ], SongsComponent);
    return SongsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/songs.component.js.map

/***/ },

/***/ 376:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_router_animations__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = (function () {
    function UsersComponent(userService) {
        this.userService = userService;
        this.parameters = ['username', 'firstName', 'lastName'];
        this.searchPattern = '';
        this.sortTypes = ['Username', 'First Name', 'Last Name'];
        this.sortOrders = ['Ascending', 'Descending'];
        this.sortType = this.sortTypes[0];
        this.sortOrder = this.sortOrders[0];
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.userService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    UsersComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    UsersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(841),
            styles: [__webpack_require__(798)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations_router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' },
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], UsersComponent);
    return UsersComponent;
    var _a;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/users.component.js.map

/***/ },

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_router_animations__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DetailedUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailedUserComponent = (function () {
    function DetailedUserComponent(router, routeParams, notificationsService, userService) {
        this.router = router;
        this.routeParams = routeParams;
        this.notificationsService = notificationsService;
        this.userService = userService;
    }
    DetailedUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUsername = currentUser.username;
        this.subscription = this.routeParams.params.subscribe(function (params) {
            var username = params['username'];
            _this.updateUserInformation(username);
        });
    };
    DetailedUserComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DetailedUserComponent.prototype.updateUserInformation = function (username) {
        var _this = this;
        this.userService.getUser(username)
            .subscribe(function (user) {
            _this.user = user;
            _this.username = user.username;
            _this.email = user.email;
            _this.firstName = user.firstName;
            _this.lastName = user.lastName;
            _this.avatar = user.avatar;
            _this.followers = user.followers;
            _this.followings = user.followings;
            _this.favoriteArtists = user.favoriteArtists;
            _this.favoriteAlbums = user.favoriteAlbums;
            _this.favoriteSongs = user.favoriteSongs;
            _this.followed = false;
            for (var _i = 0, _a = _this.followers; _i < _a.length; _i++) {
                var follower = _a[_i];
                if (follower.username === _this.currentUsername) {
                    _this.followed = true;
                    break;
                }
            }
        }, function (error) {
            _this.router.navigate(['error']);
        });
    };
    ;
    DetailedUserComponent.prototype.follow = function () {
        var _this = this;
        this.userService.follow(this.currentUsername, this.username, true)
            .subscribe(function (result) {
            if (result) {
                _this.notificationsService.success('', "Successfully followed " + _this.username + ".");
                _this.updateUserInformation(_this.username);
            }
            else {
                _this.notificationsService.error('', "Unsuccessfully followed " + _this.username + ". Please try again later.");
            }
        });
    };
    DetailedUserComponent.prototype.unfollow = function () {
        var _this = this;
        this.userService.follow(this.currentUsername, this.username, false)
            .subscribe(function (result) {
            if (result) {
                _this.notificationsService.success('', "Successfully unfollowed " + _this.username + ".");
                _this.updateUserInformation(_this.username);
            }
            else {
                _this.notificationsService.error('', "Unsuccessfully unfollowed " + _this.username + ". Please try again later.");
            }
        });
    };
    DetailedUserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detailed-user',
            template: __webpack_require__(844),
            styles: [__webpack_require__(801)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__animations_router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' },
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _d) || Object])
    ], DetailedUserComponent);
    return DetailedUserComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/detailed-user.component.js.map

/***/ },

/***/ 378:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_genre_pipe__ = __webpack_require__(600);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FilterGenrePipeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilterGenrePipeModule = (function () {
    function FilterGenrePipeModule() {
    }
    FilterGenrePipeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* BrowserModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__filter_genre_pipe__["a" /* FilterGenrePipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__filter_genre_pipe__["a" /* FilterGenrePipe */]]
        }), 
        __metadata('design:paramtypes', [])
    ], FilterGenrePipeModule);
    return FilterGenrePipeModule;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/filter-genre.pipe.module.js.map

/***/ },

/***/ 379:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globalEventsManager__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactService = (function () {
    function ContactService(http, globalEventsManager) {
        this.http = http;
        this.globalEventsManager = globalEventsManager;
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    ContactService.prototype.contact = function (contact) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var body = JSON.stringify(contact);
        return this.http.post('/api/contact', body, options)
            .map(function (response) {
            if (response.status === 201) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    ContactService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__globalEventsManager__["a" /* GlobalEventsManager */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__globalEventsManager__["a" /* GlobalEventsManager */]) === 'function' && _b) || Object])
    ], ContactService);
    return ContactService;
    var _a, _b;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/contact.service.js.map

/***/ },

/***/ 437:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 437;


/***/ },

/***/ 438:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(564);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/main.js.map

/***/ },

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GlobalEventsManager; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalEventsManager = (function () {
    function GlobalEventsManager() {
        this._showNavBar = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.showNavBarEmitter = this._showNavBar.asObservable();
    }
    GlobalEventsManager.prototype.showNavBar = function (ifShow) {
        this._showNavBar.next(ifShow);
    };
    GlobalEventsManager = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], GlobalEventsManager);
    return GlobalEventsManager;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/globalEventsManager.js.map

/***/ },

/***/ 562:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_home_home_module__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_auth_auth_module__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_navigation_app_nav_module__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_profile_profile_module__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_contact_contact_module__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_artists_artists_module__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_albums_albums_module__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modules_songs_songs_module__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_users_users_module__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modules_admin_admin_module__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modules_messages_messages_module__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modules_error_error_module__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__config_routes__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__modules_navigation_app_nav_component__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__modules_footer_app_footer_component__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_authentication_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_user_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_globalEventsManager__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_isAdminEventManager__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__guards_admin_guard__ = __webpack_require__(356);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__config_routes__["a" /* appRoutes */], { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_5__modules_home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_6__modules_auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_7__modules_navigation_app_nav_module__["a" /* NavigationModule */],
                __WEBPACK_IMPORTED_MODULE_8__modules_profile_profile_module__["a" /* ProfileModule */],
                __WEBPACK_IMPORTED_MODULE_9__modules_contact_contact_module__["a" /* ContactModule */],
                __WEBPACK_IMPORTED_MODULE_10__modules_artists_artists_module__["a" /* ArtistsModule */],
                __WEBPACK_IMPORTED_MODULE_11__modules_albums_albums_module__["a" /* AlbumsModule */],
                __WEBPACK_IMPORTED_MODULE_12__modules_songs_songs_module__["a" /* SongsModule */],
                __WEBPACK_IMPORTED_MODULE_13__modules_users_users_module__["a" /* UsersModule */],
                __WEBPACK_IMPORTED_MODULE_14__modules_admin_admin_module__["a" /* AdminModule */],
                __WEBPACK_IMPORTED_MODULE_15__modules_messages_messages_module__["a" /* MessagesModule */],
                __WEBPACK_IMPORTED_MODULE_16__modules_error_error_module__["a" /* ErrorModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_19__modules_navigation_app_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_20__modules_footer_app_footer_component__["a" /* FooterComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_26__guards_admin_guard__["a" /* AdminGuard */],
                __WEBPACK_IMPORTED_MODULE_23__services_globalEventsManager__["a" /* GlobalEventsManager */],
                __WEBPACK_IMPORTED_MODULE_24__services_isAdminEventManager__["a" /* IsAdminEventsManager */],
                __WEBPACK_IMPORTED_MODULE_22__services_user_service__["a" /* UserService */]
            ],
            exports: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/app.module.js.map

/***/ },

/***/ 563:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DefaultImageDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefaultImageDirective = (function () {
    function DefaultImageDirective(el) {
    }
    DefaultImageDirective.prototype.ngOnInit = function () {
    };
    DefaultImageDirective.prototype.updateUrl = function () {
        this.src = this.default;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], DefaultImageDirective.prototype, "src", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], DefaultImageDirective.prototype, "default", void 0);
    DefaultImageDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: 'img[default]',
            host: {
                '(error)': 'updateUrl()',
                '[src]': 'src'
            }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], DefaultImageDirective);
    return DefaultImageDirective;
    var _a;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/default-image-backup.directive.js.map

/***/ },

/***/ 564:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(562);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/index.js.map

/***/ },

/***/ 565:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Contact; });
var Contact = (function () {
    function Contact(name, email, title, content) {
        this.name = name;
        this.email = email;
        this.title = title;
        this.content = content;
    }
    return Contact;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/contact.model.js.map

/***/ },

/***/ 566:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return User; });
var User = (function () {
    function User(username, password, firstName, lastName, email, avatar, followers, followings, favoriteArtists, favoriteAlbums, favoriteSongs) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.avatar = avatar;
        this.followers = followers;
        this.followings = followings;
        this.favoriteArtists = favoriteArtists;
        this.favoriteAlbums = favoriteAlbums;
        this.favoriteSongs = favoriteSongs;
    }
    return User;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/user.model.js.map

/***/ },

/***/ 567:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_routes__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_addArtist_addArtist_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_artist_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_addAlbum_addAlbum_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_album_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_song_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_addSong_addSong_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_updateUserRole_update_role_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__node_modules_angular2_notifications__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__node_modules_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__node_modules_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_auto_complete__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_pagination__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__admin_updateUserRole_list_admins_list_admins_component__ = __webpack_require__(568);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_12__node_modules_angular2_notifications__["SimpleNotificationsModule"],
                __WEBPACK_IMPORTED_MODULE_13_ng2_auto_complete__["Ng2AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_14_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__config_routes__["a" /* appRoutes */], { useHash: true })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__admin_addArtist_addArtist_component__["a" /* AddArtistComponent */],
                __WEBPACK_IMPORTED_MODULE_7__admin_addAlbum_addAlbum_component__["a" /* AddAlbumComponent */],
                __WEBPACK_IMPORTED_MODULE_10__admin_addSong_addSong_component__["a" /* AddSongComponent */],
                __WEBPACK_IMPORTED_MODULE_11__admin_updateUserRole_update_role_component__["a" /* UpdateRoleComponent */],
                __WEBPACK_IMPORTED_MODULE_15__admin_updateUserRole_list_admins_list_admins_component__["a" /* AdminsListComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_artist_service__["a" /* ArtistService */],
                __WEBPACK_IMPORTED_MODULE_8__services_album_service__["a" /* AlbumService */],
                __WEBPACK_IMPORTED_MODULE_9__services_song_service__["a" /* SongService */],
                __WEBPACK_IMPORTED_MODULE_12__node_modules_angular2_notifications__["NotificationsService"],
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminModule);
    return AdminModule;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/admin.module.js.map

/***/ },

/***/ 568:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AdminsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminsListComponent = (function () {
    function AdminsListComponent(routeParams) {
        this.routeParams = routeParams;
        this.removedFromAdmins = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AdminsListComponent.prototype.ngOnInit = function () {
    };
    AdminsListComponent.prototype.removeFromAdmins = function (username) {
        var removed = this.admins.find(function (x) { return x.username == username; });
        this.removedFromAdmins.emit(removed);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], AdminsListComponent.prototype, "admins", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], AdminsListComponent.prototype, "removedFromAdmins", void 0);
    AdminsListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-list',
            template: __webpack_require__(810),
            styles: [__webpack_require__(767)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], AdminsListComponent);
    return AdminsListComponent;
    var _a;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/list-admins.component.js.map

/***/ },

/***/ 569:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_search_pipe_module__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_sort_pipe_module__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_filter_genre_pipe_module__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config_routes__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_pagination__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__all_albums_albums_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__all_albums_albums_list_albums_list_component__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__detailed_album_detailed_album_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__detailed_album_songs_list_songs_list_component__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_album_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__node_modules_angular2_notifications__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__node_modules_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__node_modules_angular2_notifications__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AlbumsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AlbumsModule = (function () {
    function AlbumsModule() {
    }
    AlbumsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_15__node_modules_angular2_notifications__["SimpleNotificationsModule"],
                __WEBPACK_IMPORTED_MODULE_9_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_search_pipe_module__["a" /* SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_sort_pipe_module__["a" /* SortPipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__pipes_filter_genre_pipe_module__["a" /* FilterGenrePipeModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__config_routes__["a" /* appRoutes */], { useHash: true })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__all_albums_albums_component__["a" /* AlbumsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__all_albums_albums_list_albums_list_component__["a" /* AlbumsListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__detailed_album_detailed_album_component__["a" /* DetailedAlbumComponent */],
                __WEBPACK_IMPORTED_MODULE_13__detailed_album_songs_list_songs_list_component__["a" /* SongsListComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__services_album_service__["a" /* AlbumService */],
                __WEBPACK_IMPORTED_MODULE_15__node_modules_angular2_notifications__["NotificationsService"]
            ],
            exports: []
        }), 
        __metadata('design:paramtypes', [])
    ], AlbumsModule);
    return AlbumsModule;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/albums.module.js.map

/***/ },

/***/ 570:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AlbumsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlbumsListComponent = (function () {
    function AlbumsListComponent(routeParams) {
        this.routeParams = routeParams;
    }
    AlbumsListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], AlbumsListComponent.prototype, "albums", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], AlbumsListComponent.prototype, "searchPattern", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], AlbumsListComponent.prototype, "parameters", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], AlbumsListComponent.prototype, "sortType", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], AlbumsListComponent.prototype, "sortOrder", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], AlbumsListComponent.prototype, "genre", void 0);
    AlbumsListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-albums-list',
            template: __webpack_require__(812),
            styles: [__webpack_require__(769)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], AlbumsListComponent);
    return AlbumsListComponent;
    var _a;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/albums-list.component.js.map

/***/ },

/***/ 571:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SongsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SongsListComponent = (function () {
    function SongsListComponent(routeParams) {
        this.routeParams = routeParams;
    }
    SongsListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], SongsListComponent.prototype, "songsList", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], SongsListComponent.prototype, "artist", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], SongsListComponent.prototype, "album", void 0);
    SongsListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-songs-list',
            template: __webpack_require__(815),
            styles: [__webpack_require__(772)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], SongsListComponent);
    return SongsListComponent;
    var _a;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/songs-list.component.js.map

/***/ },

/***/ 572:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ArtistsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArtistsListComponent = (function () {
    function ArtistsListComponent(routeParams) {
        this.routeParams = routeParams;
    }
    ArtistsListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], ArtistsListComponent.prototype, "artists", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], ArtistsListComponent.prototype, "searchPattern", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], ArtistsListComponent.prototype, "parameters", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], ArtistsListComponent.prototype, "sortType", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], ArtistsListComponent.prototype, "sortOrder", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], ArtistsListComponent.prototype, "genre", void 0);
    ArtistsListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-artists-list',
            template: __webpack_require__(816),
            styles: [__webpack_require__(773)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], ArtistsListComponent);
    return ArtistsListComponent;
    var _a;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/artists-list.component.js.map

/***/ },

/***/ 573:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_search_pipe_module__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_sort_pipe_module__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_filter_genre_pipe_module__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config_routes__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_pagination__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__all_artists_artists_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__all_artists_artists_list_artists_list_component__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__detailed_artist_detailed_artist_component__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__detailed_artist_about_about_component__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__detailed_artist_albums_list_albums_list_component__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__detailed_artist_singles_list_singles_list_component__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_artist_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__node_modules_angular2_notifications__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__node_modules_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__node_modules_angular2_notifications__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ArtistsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var ArtistsModule = (function () {
    function ArtistsModule() {
    }
    ArtistsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_17__node_modules_angular2_notifications__["SimpleNotificationsModule"],
                __WEBPACK_IMPORTED_MODULE_9_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_search_pipe_module__["a" /* SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_sort_pipe_module__["a" /* SortPipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__pipes_filter_genre_pipe_module__["a" /* FilterGenrePipeModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__config_routes__["a" /* appRoutes */], { useHash: true })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__all_artists_artists_component__["a" /* ArtistsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__all_artists_artists_list_artists_list_component__["a" /* ArtistsListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__detailed_artist_detailed_artist_component__["a" /* DetailedArtistComponent */],
                __WEBPACK_IMPORTED_MODULE_13__detailed_artist_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__detailed_artist_albums_list_albums_list_component__["a" /* AlbumsListComponent */],
                __WEBPACK_IMPORTED_MODULE_15__detailed_artist_singles_list_singles_list_component__["a" /* SinglesListComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__services_artist_service__["a" /* ArtistService */],
                __WEBPACK_IMPORTED_MODULE_17__node_modules_angular2_notifications__["NotificationsService"]
            ],
            exports: []
        }), 
        __metadata('design:paramtypes', [])
    ], ArtistsModule);
    return ArtistsModule;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/artists.module.js.map

/***/ },

/***/ 574:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(routeParams) {
        this.routeParams = routeParams;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], AboutComponent.prototype, "bio", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], AboutComponent.prototype, "yearsActive", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], AboutComponent.prototype, "genres", void 0);
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(818),
            styles: [__webpack_require__(775)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], AboutComponent);
    return AboutComponent;
    var _a;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/about.component.js.map

/***/ },

/***/ 575:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AlbumsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlbumsListComponent = (function () {
    function AlbumsListComponent(routeParams) {
        this.routeParams = routeParams;
    }
    AlbumsListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], AlbumsListComponent.prototype, "albumsList", void 0);
    AlbumsListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-albums-list',
            template: __webpack_require__(819),
            styles: [__webpack_require__(776)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], AlbumsListComponent);
    return AlbumsListComponent;
    var _a;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/albums-list.component.js.map

/***/ },

/***/ 576:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SinglesListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SinglesListComponent = (function () {
    function SinglesListComponent(routeParams) {
        this.routeParams = routeParams;
    }
    SinglesListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], SinglesListComponent.prototype, "singlesList", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], SinglesListComponent.prototype, "artist", void 0);
    SinglesListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-singles-list',
            template: __webpack_require__(821),
            styles: [__webpack_require__(778)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], SinglesListComponent);
    return SinglesListComponent;
    var _a;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/singles-list.component.js.map

/***/ },

/***/ 577:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_routes__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logout_logout_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_angular2_notifications__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__node_modules_angular2_notifications__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_9__node_modules_angular2_notifications__["SimpleNotificationsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__config_routes__["a" /* appRoutes */], { useHash: true })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__logout_logout_component__["a" /* LogoutComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_9__node_modules_angular2_notifications__["NotificationsService"]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AuthModule);
    return AuthModule;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/auth.module.js.map

/***/ },

/***/ 578:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_contact_service__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_angular2_notifications__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__node_modules_angular2_notifications__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactModule = (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__node_modules_angular2_notifications__["SimpleNotificationsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__contact_component__["a" /* ContactComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_contact_service__["a" /* ContactService */],
                __WEBPACK_IMPORTED_MODULE_5__node_modules_angular2_notifications__["NotificationsService"]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactModule);
    return ContactModule;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/contact.module.js.map

/***/ },

/***/ 579:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_component__ = __webpack_require__(370);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ErrorModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorModule = (function () {
    function ErrorModule() {
    }
    ErrorModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__error_component__["a" /* ErrorComponent */]
            ],
            exports: [],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ErrorModule);
    return ErrorModule;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/error.module.js.map

/***/ },

/***/ 580:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(826),
            styles: [__webpack_require__(783)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/app-footer.component.js.map

/***/ },

/***/ 581:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_routes__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_component__ = __webpack_require__(371);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__config_routes__["a" /* appRoutes */], { useHash: true })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* HomeComponent */]
            ],
            exports: [],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/home.module.js.map

/***/ },

/***/ 582:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MessagesListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesListComponent = (function () {
    function MessagesListComponent(routeParams) {
        this.routeParams = routeParams;
    }
    MessagesListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], MessagesListComponent.prototype, "messages", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], MessagesListComponent.prototype, "status", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], MessagesListComponent.prototype, "searchPattern", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], MessagesListComponent.prototype, "parameters", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], MessagesListComponent.prototype, "sortType", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], MessagesListComponent.prototype, "sortOrder", void 0);
    MessagesListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-messages-list',
            template: __webpack_require__(828),
            styles: [__webpack_require__(785)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], MessagesListComponent);
    return MessagesListComponent;
    var _a;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/messages-list.component.js.map

/***/ },

/***/ 583:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_routes__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_pagination__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_search_pipe_module__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_sort_pipe_module__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_filter_status_pipe_module__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__all_messages_messages_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__all_messages_messages_list_messages_list_component__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__node_modules_angular2_notifications__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__node_modules_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__node_modules_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__detailed_message_detailed_message_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_message_service__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_user_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MessagesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var MessagesModule = (function () {
    function MessagesModule() {
    }
    MessagesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__all_messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__all_messages_messages_list_messages_list_component__["a" /* MessagesListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__detailed_message_detailed_message_component__["a" /* DetailedMessageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_12__node_modules_angular2_notifications__["SimpleNotificationsModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_8__pipes_sort_pipe_module__["a" /* SortPipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__pipes_search_pipe_module__["a" /* SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_9__pipes_filter_status_pipe_module__["a" /* FilterStatusPipeModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__config_routes__["a" /* appRoutes */], { useHash: true })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__services_message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_15__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_12__node_modules_angular2_notifications__["NotificationsService"]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MessagesModule);
    return MessagesModule;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/messages.module.js.map

/***/ },

/***/ 584:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_globalEventsManager__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_isAdminEventManager__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = (function () {
    function NavComponent(router, globalEventsManager, isAdminEventManager) {
        var _this = this;
        this.router = router;
        this.globalEventsManager = globalEventsManager;
        this.isAdminEventManager = isAdminEventManager;
        this.user = localStorage.getItem('currentUser') ? true : false;
        this.globalEventsManager.showNavBarEmitter.subscribe(function (mode) {
            // mode will be null the first time it is created, so you need to igonore it when null
            if (mode !== null) {
                _this.user = mode;
            }
        });
        this.isAdminEventManager.showAdminNavEmitter.subscribe(function (mode) {
            if (mode !== null) {
                _this.isAdmin = mode;
            }
        });
    }
    NavComponent.prototype.ngOnInit = function () {
        this.user = localStorage.getItem('currentUser') ? true : false;
        var currentUser = localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser'));
        this.username = currentUser && currentUser.username;
        this.isAdmin = currentUser && currentUser.role == 'Admin';
    };
    NavComponent.prototype.ngDoCheck = function () {
        if (localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser')).username !== this.username) {
            var currentUser = localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser'));
            this.username = currentUser && currentUser.username;
        }
        if (localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser')).role !== 'Admin' && this.isAdmin) {
            this.isAdmin = false;
        }
        if (localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser')).role !== 'User' && !this.isAdmin) {
            this.isAdmin = true;
        }
    };
    NavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(831),
            styles: [__webpack_require__(788)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_globalEventsManager__["a" /* GlobalEventsManager */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_globalEventsManager__["a" /* GlobalEventsManager */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_isAdminEventManager__["a" /* IsAdminEventsManager */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_isAdminEventManager__["a" /* IsAdminEventsManager */]) === 'function' && _c) || Object])
    ], NavComponent);
    return NavComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/app-nav.component.js.map

/***/ },

/***/ 585:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_routes__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavigationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationModule = (function () {
    function NavigationModule() {
    }
    NavigationModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__config_routes__["a" /* appRoutes */], { useHash: true })
            ],
            exports: [],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationModule);
    return NavigationModule;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/app-nav.module.js.map

/***/ },

/***/ 586:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AlbumsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlbumsListComponent = (function () {
    function AlbumsListComponent(routeParams) {
        this.routeParams = routeParams;
    }
    AlbumsListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], AlbumsListComponent.prototype, "albumsList", void 0);
    AlbumsListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-favorite-albums-list',
            template: __webpack_require__(832),
            styles: [__webpack_require__(789)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], AlbumsListComponent);
    return AlbumsListComponent;
    var _a;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/albums-list.component.js.map

/***/ },

/***/ 587:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ArtistsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArtistsListComponent = (function () {
    function ArtistsListComponent(routeParams) {
        this.routeParams = routeParams;
    }
    ArtistsListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], ArtistsListComponent.prototype, "artistsList", void 0);
    ArtistsListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-favorite-artists-list',
            template: __webpack_require__(833),
            styles: [__webpack_require__(790)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], ArtistsListComponent);
    return ArtistsListComponent;
    var _a;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/artists-list.component.js.map

/***/ },

/***/ 588:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FollowListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FollowListComponent = (function () {
    function FollowListComponent(routeParams) {
        this.routeParams = routeParams;
    }
    FollowListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], FollowListComponent.prototype, "followList", void 0);
    FollowListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-follow-list',
            template: __webpack_require__(834),
            styles: [__webpack_require__(791)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], FollowListComponent);
    return FollowListComponent;
    var _a;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/follow-list.component.js.map

/***/ },

/***/ 589:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_routes__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_pagination__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_settings_component__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__follow_list_follow_list_component__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__artists_list_artists_list_component__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__albums_list_albums_list_component__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__songs_list_songs_list_component__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__node_modules_angular2_notifications__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__node_modules_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__node_modules_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_song_duration_pipe_module__ = __webpack_require__(233);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProfileModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var ProfileModule = (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_14__node_modules_angular2_notifications__["SimpleNotificationsModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_15__pipes_song_duration_pipe_module__["a" /* SongDurationPipeModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__config_routes__["a" /* appRoutes */], { useHash: true })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_8__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__follow_list_follow_list_component__["a" /* FollowListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__artists_list_artists_list_component__["a" /* ArtistsListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__albums_list_albums_list_component__["a" /* AlbumsListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__songs_list_songs_list_component__["a" /* SongsListComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_14__node_modules_angular2_notifications__["NotificationsService"]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileModule);
    return ProfileModule;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/profile.module.js.map

/***/ },

/***/ 590:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsComponent = (function () {
    function SettingsComponent(router, routeParams, notificationsService, userService) {
        this.router = router;
        this.routeParams = routeParams;
        this.notificationsService = notificationsService;
        this.userService = userService;
        this.model = {};
        this.informationUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };
        this.fileName = 'No file chosen';
    };
    SettingsComponent.prototype.onProfilePictureUpload = function (event) {
        event.preventDefault();
        this.file = event.target.files[0];
        this.fileName = this.file.name;
    };
    SettingsComponent.prototype.uploadProfilePicture = function () {
        var _this = this;
        if (this.file.type === 'image/jpeg' || this.file.type === 'image/png') {
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(this.file);
            reader_1.onload = function () {
                var username = JSON.parse(localStorage.getItem('currentUser')).username;
                var dataUrl = reader_1.result;
                _this.userService.updateUserProfilePicture(username, dataUrl)
                    .subscribe(function (res) {
                    if (res) {
                        _this.notificationsService.success('', 'Successfully saved profile picture');
                        _this.fileName = 'No file chosen';
                        _this.informationUpdated.emit();
                    }
                    else {
                        _this.notificationsService.error('', 'Problem occured with saving the picture. Please try again later.');
                    }
                }, function (error) {
                    var message = JSON.parse(error._body);
                    _this.notificationsService.error('', message);
                });
            };
        }
        else {
            this.notificationsService.alert('', 'Please upload .jped or .png file.');
        }
    };
    SettingsComponent.prototype.updateInformation = function () {
        var _this = this;
        this.userService.updateInformation(this.model.firstName, this.model.lastName, this.model.email)
            .subscribe(function (result) {
            if (result === true) {
                _this.notificationsService.success('', 'Successfully updated information');
                _this.informationUpdated.emit();
            }
            else {
                _this.notificationsService.error('', 'Problem occured while updating your information. Please try again later.');
            }
        }, function (error) {
            var message = JSON.parse(error._body);
            _this.notificationsService.error('', message);
        });
    };
    SettingsComponent.prototype.updatePassword = function () {
        var _this = this;
        this.userService.updatePassword(this.model.oldPassword, this.model.newPassword)
            .subscribe(function (result) {
            if (result === true) {
                _this.notificationsService.success('', 'Successfully updated password');
            }
            else {
                _this.notificationsService.error('', 'Problem occured while updating your password. Please try again later.');
            }
        }, function (error) {
            var message = JSON.parse(error._body);
            _this.notificationsService.error('', message);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], SettingsComponent.prototype, "uFirstName", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], SettingsComponent.prototype, "uLastName", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], SettingsComponent.prototype, "uEmail", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], SettingsComponent.prototype, "informationUpdated", void 0);
    SettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(836),
            styles: [__webpack_require__(793)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _d) || Object])
    ], SettingsComponent);
    return SettingsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/settings.component.js.map

/***/ },

/***/ 591:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SongsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SongsListComponent = (function () {
    function SongsListComponent(routeParams) {
        this.routeParams = routeParams;
    }
    SongsListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], SongsListComponent.prototype, "songsList", void 0);
    SongsListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-favorite-songs-list',
            template: __webpack_require__(837),
            styles: [__webpack_require__(794)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], SongsListComponent);
    return SongsListComponent;
    var _a;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/songs-list.component.js.map

/***/ },

/***/ 592:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_song_service__ = __webpack_require__(123);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SongsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SongsListComponent = (function () {
    function SongsListComponent(routeParams, songService) {
        this.routeParams = routeParams;
        this.songService = songService;
        this.addFavoriteActivated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.removeFavoriteActivated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SongsListComponent.prototype.ngOnInit = function () {
    };
    SongsListComponent.prototype.addFavoriteSong = function (event) {
        var _this = this;
        var song;
        event.preventDefault();
        this.songService.getSong(event.path["1"].id)
            .subscribe(function (res) {
            song = res;
            _this.addFavoriteActivated.emit(song);
        }, function (err) {
            console.log(err);
        });
    };
    SongsListComponent.prototype.removeFavoriteSong = function (event) {
        var _this = this;
        var song;
        event.preventDefault();
        this.songService.getSong(event.path["1"].id)
            .subscribe(function (res) {
            song = res;
            _this.removeFavoriteActivated.emit(song);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], SongsListComponent.prototype, "songs", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], SongsListComponent.prototype, "searchPattern", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], SongsListComponent.prototype, "parameters", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], SongsListComponent.prototype, "sortType", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], SongsListComponent.prototype, "sortOrder", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], SongsListComponent.prototype, "showIcons", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], SongsListComponent.prototype, "favoriteSongs", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], SongsListComponent.prototype, "addFavoriteActivated", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], SongsListComponent.prototype, "removeFavoriteActivated", void 0);
    SongsListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-songs-list',
            template: __webpack_require__(838),
            styles: [__webpack_require__(795)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_song_service__["a" /* SongService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_song_service__["a" /* SongService */]) === 'function' && _b) || Object])
    ], SongsListComponent);
    return SongsListComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/songs-list.component.js.map

/***/ },

/***/ 593:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_routes__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_pagination__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_search_pipe_module__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_sort_pipe_module__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_song_duration_pipe_module__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__songs_all_songs_songs_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__songs_all_songs_songs_list_songs_list_component__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__node_modules_angular2_notifications__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__node_modules_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__node_modules_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_song_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SongsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var SongsModule = (function () {
    function SongsModule() {
    }
    SongsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__songs_all_songs_songs_component__["a" /* SongsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__songs_all_songs_songs_list_songs_list_component__["a" /* SongsListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_12__node_modules_angular2_notifications__["SimpleNotificationsModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_8__pipes_sort_pipe_module__["a" /* SortPipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__pipes_search_pipe_module__["a" /* SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_9__pipes_song_duration_pipe_module__["a" /* SongDurationPipeModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__config_routes__["a" /* appRoutes */], { useHash: true })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__services_song_service__["a" /* SongService */],
                __WEBPACK_IMPORTED_MODULE_14__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_12__node_modules_angular2_notifications__["NotificationsService"]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SongsModule);
    return SongsModule;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/songs.module.js.map

/***/ },

/***/ 594:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UsersListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersListComponent = (function () {
    function UsersListComponent(routeParams) {
        this.routeParams = routeParams;
    }
    UsersListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], UsersListComponent.prototype, "users", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], UsersListComponent.prototype, "searchPattern", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], UsersListComponent.prototype, "parameters", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], UsersListComponent.prototype, "sortType", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], UsersListComponent.prototype, "sortOrder", void 0);
    UsersListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users-list',
            template: __webpack_require__(840),
            styles: [__webpack_require__(797)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], UsersListComponent);
    return UsersListComponent;
    var _a;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/users-list.component.js.map

/***/ },

/***/ 595:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AlbumsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlbumsListComponent = (function () {
    function AlbumsListComponent(routeParams) {
        this.routeParams = routeParams;
    }
    AlbumsListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], AlbumsListComponent.prototype, "albumsList", void 0);
    AlbumsListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-favorite-albums-list',
            template: __webpack_require__(842),
            styles: [__webpack_require__(799)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], AlbumsListComponent);
    return AlbumsListComponent;
    var _a;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/albums-list.component.js.map

/***/ },

/***/ 596:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ArtistsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArtistsListComponent = (function () {
    function ArtistsListComponent(routeParams) {
        this.routeParams = routeParams;
    }
    ArtistsListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], ArtistsListComponent.prototype, "artistsList", void 0);
    ArtistsListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-favorite-artists-list',
            template: __webpack_require__(843),
            styles: [__webpack_require__(800)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], ArtistsListComponent);
    return ArtistsListComponent;
    var _a;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/artists-list.component.js.map

/***/ },

/***/ 597:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FollowListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FollowListComponent = (function () {
    function FollowListComponent(routeParams) {
        this.routeParams = routeParams;
    }
    FollowListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], FollowListComponent.prototype, "followList", void 0);
    FollowListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-follow-list',
            template: __webpack_require__(845),
            styles: [__webpack_require__(802)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], FollowListComponent);
    return FollowListComponent;
    var _a;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/follow-list.component.js.map

/***/ },

/***/ 598:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SongsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SongsListComponent = (function () {
    function SongsListComponent(routeParams) {
        this.routeParams = routeParams;
    }
    SongsListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], SongsListComponent.prototype, "songsList", void 0);
    SongsListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-favorite-songs-list',
            template: __webpack_require__(846),
            styles: [__webpack_require__(803)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], SongsListComponent);
    return SongsListComponent;
    var _a;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/songs-list.component.js.map

/***/ },

/***/ 599:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_routes__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_pagination__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__all_users_users_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__all_users_users_list_users_list_component__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__detailed_user_detailed_user_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__detailed_user_follow_list_follow_list_component__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__detailed_user_artists_list_artists_list_component__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__detailed_user_albums_list_albums_list_component__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__detailed_user_songs_list_songs_list_component__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__node_modules_angular2_notifications__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__node_modules_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__node_modules_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_search_pipe_module__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_sort_pipe_module__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_song_duration_pipe_module__ = __webpack_require__(233);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UsersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var UsersModule = (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_15__node_modules_angular2_notifications__["SimpleNotificationsModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_search_pipe_module__["a" /* SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_sort_pipe_module__["a" /* SortPipeModule */],
                __WEBPACK_IMPORTED_MODULE_18__pipes_song_duration_pipe_module__["a" /* SongDurationPipeModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__config_routes__["a" /* appRoutes */], { useHash: true })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__all_users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_8__all_users_users_list_users_list_component__["a" /* UsersListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__detailed_user_detailed_user_component__["a" /* DetailedUserComponent */],
                __WEBPACK_IMPORTED_MODULE_10__detailed_user_follow_list_follow_list_component__["a" /* FollowListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__detailed_user_artists_list_artists_list_component__["a" /* ArtistsListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__detailed_user_albums_list_albums_list_component__["a" /* AlbumsListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__detailed_user_songs_list_songs_list_component__["a" /* SongsListComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_15__node_modules_angular2_notifications__["NotificationsService"]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersModule);
    return UsersModule;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/users.module.js.map

/***/ },

/***/ 600:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FilterGenrePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterGenrePipe = (function () {
    function FilterGenrePipe() {
    }
    FilterGenrePipe.prototype.transform = function (collection, genre) {
        if (!collection) {
            return null;
        }
        if (!genre || genre === 'All') {
            return collection;
        }
        return collection.filter(function (c) { return c.genres.includes(genre); });
    };
    FilterGenrePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterGenre'
        }), 
        __metadata('design:paramtypes', [])
    ], FilterGenrePipe);
    return FilterGenrePipe;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/filter-genre.pipe.js.map

/***/ },

/***/ 601:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_status_pipe__ = __webpack_require__(602);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FilterStatusPipeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilterStatusPipeModule = (function () {
    function FilterStatusPipeModule() {
    }
    FilterStatusPipeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* BrowserModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__filter_status_pipe__["a" /* FilterStatusPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__filter_status_pipe__["a" /* FilterStatusPipe */]]
        }), 
        __metadata('design:paramtypes', [])
    ], FilterStatusPipeModule);
    return FilterStatusPipeModule;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/filter-status.pipe.module.js.map

/***/ },

/***/ 602:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FilterStatusPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterStatusPipe = (function () {
    function FilterStatusPipe() {
    }
    FilterStatusPipe.prototype.transform = function (collection, status) {
        if (!collection) {
            return null;
        }
        return collection.filter(function (c) { return c.status === status; });
    };
    FilterStatusPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterStatus'
        }), 
        __metadata('design:paramtypes', [])
    ], FilterStatusPipe);
    return FilterStatusPipe;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/filter-status.pipe.js.map

/***/ },

/***/ 603:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SearchPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (collection, parameters, searchWord) {
        if (!collection) {
            return null;
        }
        searchWord = searchWord.toLowerCase();
        return collection.filter(function (element) {
            var isFound = false;
            for (var _i = 0, parameters_1 = parameters; _i < parameters_1.length; _i++) {
                var parameter = parameters_1[_i];
                if (element[parameter].toLowerCase().indexOf(searchWord) >= 0) {
                    isFound = true;
                    break;
                }
            }
            return isFound;
        });
    };
    SearchPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'search'
        }), 
        __metadata('design:paramtypes', [])
    ], SearchPipe);
    return SearchPipe;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/search.pipe.js.map

/***/ },

/***/ 604:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SongDurationPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SongDurationPipe = (function () {
    function SongDurationPipe() {
    }
    SongDurationPipe.prototype.transform = function (duration) {
        if (!duration) {
            return null;
        }
        var time = Number(duration);
        duration = "" + Math.floor(time / 60) + ":";
        duration += time % 60 < 10 ? "0" + time % 60 : time % 60;
        return duration;
    };
    SongDurationPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'songDuration'
        }), 
        __metadata('design:paramtypes', [])
    ], SongDurationPipe);
    return SongDurationPipe;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/song-duration.pipe.js.map

/***/ },

/***/ 605:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SortPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortPipe = (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (collection, sortType, sortOrder) {
        if (!collection) {
            return null;
        }
        sortType = sortType.replace(/^./, function (m) { return m.toLowerCase(); }).replace(/\s/, "");
        sortOrder = sortOrder.toLowerCase();
        var order = sortOrder === 'descending' ? -1 : 1;
        return collection.sort(function (x, y) {
            var result;
            result = x[sortType].localeCompare(y[sortType]);
            return result * order;
        });
    };
    SortPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'sort'
        }), 
        __metadata('design:paramtypes', [])
    ], SortPipe);
    return SortPipe;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/sort.pipe.js.map

/***/ },

/***/ 606:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/environment.js.map

/***/ },

/***/ 607:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(863);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/polyfills.js.map

/***/ },

/***/ 763:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 764:
/***/ function(module, exports) {

module.exports = ".addAlbum-content {\r\n    background-color: #FFFFFF;\r\n    padding: 40px 0px;\r\n}\r\n\r\n.addAlbum-content .form-legend {\r\n    text-align: center;\r\n}\r\n\r\n.addAlbum-content .btn-addAlbum {\r\n    width: 195px;\r\n    margin: 15px 0px;\r\n}\r\n\r\n.addAlbum-content  .album-submit {\r\n    text-align: center;\r\n}\r\n\r\nselect {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.picture-btn {\r\n    min-width: 150px;\r\n}\r\n\r\n.fileName {\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    padding-left: 5px;\r\n}\r\n\r\n.fileSelect {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.add-song-wrapper {\r\n    text-align: right;\r\n}\r\n\r\n@media (max-width: 767px ) {\r\n    .add-song-wrapper {\r\n        text-align: right;\r\n    }\r\n}"

/***/ },

/***/ 765:
/***/ function(module, exports) {

module.exports = ".addArtist-content {\r\n    background-color: #FFFFFF;\r\n    padding: 40px 0px;\r\n}\r\n\r\n.addArtist-content .form-legend {\r\n    text-align: center;\r\n}\r\n\r\n.addArtist-content .btn-addArtist {\r\n    width: 195px;\r\n    margin: 15px 0px;\r\n}\r\n\r\n.addArtist-content  .artist-submit {\r\n    text-align: center;\r\n}\r\n\r\nselect {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.picture-btn {\r\n    min-width: 150px;\r\n}\r\n\r\n.fileName {\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    padding-left: 5px;\r\n}\r\n\r\n.fileSelect {\r\n    margin-bottom: 20px;\r\n}"

/***/ },

/***/ 766:
/***/ function(module, exports) {

module.exports = ".addSong-content {\r\n    background-color: #FFFFFF;\r\n    padding: 40px 0px;\r\n}\r\n\r\n.addSong-content .form-legend {\r\n    text-align: center;\r\n}\r\n\r\n.addSong-content .btn-addSong {\r\n    width: 195px;\r\n    margin: 15px 0px;\r\n}\r\n\r\n.addSong-content  .song-submit {\r\n    text-align: center;\r\n}"

/***/ },

/***/ 767:
/***/ function(module, exports) {

module.exports = ".admins-list {\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n.admins-list h2 {\r\n    text-align: center;\r\n}\r\n\r\n.admins-list ul {\r\n    list-style: none;\r\n    padding: 0px;\r\n}\r\n\r\n.admin-info-header {\r\n    display: inline-block;\r\n    width: 100%;\r\n    border-bottom: 1px solid #F1F1F1;\r\n    padding: 10px 0px;\r\n    color: #25b09c;\r\n}\r\n\r\n.admin-info {\r\n    display: inline-block;\r\n    width: 100%;\r\n    border-bottom: 1px solid #F1F1F1;\r\n    padding: 10px 0px;\r\n}\r\n\r\n.admin-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.admins-pagination {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n}\r\n\r\n.admins-pagination *{\r\n    font-size: 18px !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.admins-pagination .current{\r\n    background-color: #2c3e50 !important;\r\n}\r\n\r\n.admins-pagination span{\r\n    margin: 0px 5px !important;\r\n}\r\n\r\n.admins-pagination a:hover{\r\n    background-color: inherit !important;\r\n    text-decoration: none !important;\r\n    color: #25b09c !important;\r\n    cursor: pointer;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .admin-info-header {\r\n        display: none;\r\n    }\r\n}"

/***/ },

/***/ 768:
/***/ function(module, exports) {

module.exports = ".updateRole-content {\r\n    background-color: #FFFFFF;\r\n    padding: 40px 0px;\r\n}\r\n\r\n.updateRole-content .form-legend {\r\n    text-align: center;\r\n}\r\n\r\n.updateRole-content .btn-updateRole {\r\n    width: 195px;\r\n    margin: 15px 0px;\r\n}\r\n\r\n.updateRole-content  .update-role-submit {\r\n    text-align: center;\r\n}"

/***/ },

/***/ 769:
/***/ function(module, exports) {

module.exports = ".albums-list {\r\n    margin: 15px 0px;\r\n    display:block;\r\n    overflow:auto;\r\n}\r\n\r\n.album-info {\r\n    background-color: #F5F5F5;\r\n    text-align: center;\r\n}\r\n\r\n.album-info a{\r\n    color: #2c3e50;\r\n}\r\n\r\n.album-info a:hover{\r\n    text-decoration: none;\r\n}\r\n\r\n.album-info .albumname {\r\n    font-size: 18px;\r\n    padding: 5px 0px 10px 0px;\r\n    margin: 0px;\r\n}\r\n\r\n.albums-pagination {\r\n    text-align: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.albums-pagination *{\r\n    font-size: 18px !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.albums-pagination .current{\r\n    background-color: #2c3e50 !important;\r\n}\r\n\r\n.albums-pagination span{\r\n    margin: 0px 5px !important;\r\n}\r\n\r\n.albums-pagination a:hover{\r\n    background-color: inherit !important;\r\n    text-decoration: none !important;\r\n    color: #25b09c !important;\r\n    cursor: pointer;\r\n}"

/***/ },

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globalEventsManager__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ArtistService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArtistService = (function () {
    function ArtistService(http, globalEventsManager) {
        this.http = http;
        this.globalEventsManager = globalEventsManager;
    }
    ArtistService.prototype.addArtist = function (model, dataUrl) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var body = {
            name: model.name,
            genres: model.genres,
            yearsActive: model.yearsActive,
            nationality: model.nationality,
            bio: model.bio,
            dataUrl: dataUrl
        };
        return this.http.post('/api/artist', body, options)
            .map(function (response) {
            return response.json();
        });
    };
    ArtistService.prototype.getArtistsNames = function () {
        return this.http.get('/api/artists-names')
            .map(function (response) {
            return response.json().data;
        });
    };
    ArtistService.prototype.getArtists = function () {
        return this.http.get('/api/artists')
            .map(function (response) {
            return response.json().data;
        });
    };
    ArtistService.prototype.getArtist = function (id) {
        return this.http.get('/api/artists/' + id)
            .map(function (response) {
            return response.json().data;
        });
    };
    ArtistService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__globalEventsManager__["a" /* GlobalEventsManager */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__globalEventsManager__["a" /* GlobalEventsManager */]) === 'function' && _b) || Object])
    ], ArtistService);
    return ArtistService;
    var _a, _b;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/artist.service.js.map

/***/ },

/***/ 770:
/***/ function(module, exports) {

module.exports = ".albums-content {\r\n    background-color: #FFFFFF;\r\n    height: 100%;\r\n    padding: 30px 15px;\r\n}\r\n\r\n.albums-content ul{\r\n    list-style: none;\r\n    padding: 0px;\r\n}\r\n\r\n.albums-content .albums-form {\r\n    margin: 15px 0px;\r\n    display:block;\r\n    overflow:auto;\r\n}\r\n\r\n.albums-content .albums-list {\r\n    margin: 15px 0px;\r\n    display:block;\r\n    overflow:auto;\r\n}\r\n\r\n.albums-content .albums-option {\r\n    padding: 0px 0px 0px 15px;\r\n    display: inline-block;\r\n}\r\n\r\n.albums-content .albums-option .albums-sub-option{\r\n    padding: 0px 0px 0px 15px;\r\n}\r\n\r\n.albums-content .albums-option .albums-sub-option-label{\r\n    text-align: right;\r\n    vertical-align: middle;\r\n    padding: 10px 0px;\r\n}\r\n\r\n.image-container {\r\n    width: 100%;\r\n    padding-top: 100%;\r\n    overflow: hidden;\r\n    position: relative;\r\n    background-color: #F5F5F5;\r\n    display: inline-block;\r\n}\r\n\r\n.image-container img {\r\n    position: absolute;\r\n    top: -9999px;\r\n    bottom: -9999px;\r\n    left: -9999px;\r\n    right: -9999px;\r\n    margin: auto;\r\n\r\n    max-height: 100%;\r\n}\r\n\r\n.album-info {\r\n    background-color: #F5F5F5;\r\n    text-align: center;\r\n}\r\n\r\n.album-info a{\r\n    color: #2c3e50;\r\n}\r\n\r\n.album-info a:hover{\r\n    text-decoration: none;\r\n}\r\n\r\n.album-info .albumname {\r\n    font-size: 18px;\r\n    margin: 5px 0px;\r\n}\r\n\r\n.album-info .name {\r\n    padding: 5px 0px 10px 0px;\r\n}\r\n\r\n.albums-pagination {\r\n    text-align: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.albums-pagination *{\r\n    font-size: 18px !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.albums-pagination .current{\r\n    background-color: #2c3e50 !important;\r\n}\r\n\r\n.albums-pagination span{\r\n    margin: 0px 5px !important;\r\n}\r\n\r\n.albums-pagination a:hover{\r\n    background-color: inherit !important;\r\n    text-decoration: none !important;\r\n    color: #25b09c !important;\r\n    cursor: pointer;\r\n}"

/***/ },

/***/ 771:
/***/ function(module, exports) {

module.exports = ".detailed-album-content {\n    background-color: #FFFFFF;\n    height: 100%;\n    padding: 15px 30px 15px 30px;\n}\n\n.detailed-album-content .profile-header{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    background-image: url('../../../../assets/images/albums-cover.jpg');\n    padding: 15px 15px 10px 15px;\n}\n\n.detailed-album-content .profile-image {\n    text-align: center;\n    padding: 0px;\n}\n\n.detailed-album-content img {\n    display: inline-block;\n    min-height: auto;\n}\n\n.detailed-album-content .profile-information {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    padding-bottom: 10px;\n}\n\n.detailed-album-content .profile-albumname {\n    font-size: 3em;\n    margin: 5px 0px 0px 20px;\n    color: #FCFCFC;\n}\n\n.detailed-album-content .profile-nationality {\n    font-size: 1.1em;\n    margin: 0px 0px 0px 20px;\n    color: #DDDDDD;\n    text-transform: uppercase;\n    letter-spacing: 0.15em;\n}\n\n.detailed-album-content .profile-follow {\n    text-align: right;\n}\n\n.detailed-album-content .btn-follow {\n    width: 100%;\n}\n\n.detailed-album-content ul{\n    list-style: none;\n    padding: 0px;\n}\n\n.detailed-album-content .image-container {\n    width: 100%;\n    padding-top: 100%;\n    overflow: hidden;\n    position: relative;\n    background-color: #F5F5F5;\n    display: inline-block;\n}\n\n.detailed-album-content .image-container img {\n    position: absolute;\n    top: -9999px;\n    bottom: -9999px;\n    left: -9999px;\n    right: -9999px;\n    margin: auto;\n    max-height: 100%;\n}\n\n\n@media (max-width: 767px) {\n    .detailed-album-content .profile-information {\n        text-align: center;\n    }\n\n    .detailed-album-content .profile-header{\n        display: initial;\n        background: none;\n    }\n\n    .detailed-album-content .profile-albumname {\n        font-size: 3em;\n        margin: 0px;\n        color: #2d3e50;\n    }\n    .detailed-album-content .profile-nationality {\n        font-size: 1.1em;\n        margin: 0px;\n        color: #2d3e50;\n        text-transform: uppercase;\n        letter-spacing: 0.15em;\n    }\n\n    .detailed-album-content .header-wrapper {\n        width: 100%;\n        text-align: center;\n    }\n\n    .detailed-album-content .profile-follow {\n        text-align: center;\n        margin-top: 20px;\n    }\n}"

/***/ },

/***/ 772:
/***/ function(module, exports) {

module.exports = ".songs-list {\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n.songs-list ul {\r\n    list-style: none;\r\n    padding: 0px;\r\n}\r\n\r\n.song-info-header {\r\n    display: inline-block;\r\n    width: 100%;\r\n    border-bottom: 1px solid #F1F1F1;\r\n    padding: 10px 0px;\r\n    color: #25b09c;\r\n}\r\n\r\n.song-info {\r\n    display: inline-block;\r\n    width: 100%;\r\n    border-bottom: 1px solid #F1F1F1;\r\n    padding: 10px 0px;\r\n}\r\n\r\n.songs-pagination {\r\n    text-align: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.songs-pagination *{\r\n    font-size: 18px !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.songs-pagination .current{\r\n    background-color: #2c3e50 !important;\r\n}\r\n\r\n.songs-pagination span{\r\n    margin: 0px 5px !important;\r\n}\r\n\r\n.songs-pagination a:hover{\r\n    background-color: inherit !important;\r\n    text-decoration: none !important;\r\n    color: #25b09c !important;\r\n    cursor: pointer;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .song-info-header {\r\n        display: none;\r\n    }\r\n}"

/***/ },

/***/ 773:
/***/ function(module, exports) {

module.exports = ".artists-list {\r\n    margin: 15px 0px;\r\n    display:block;\r\n    overflow:auto;\r\n}\r\n\r\n.artist-info {\r\n    background-color: #F5F5F5;\r\n    text-align: center;\r\n}\r\n\r\n.artist-info a{\r\n    color: #2c3e50;\r\n}\r\n\r\n.artist-info a:hover{\r\n    text-decoration: none;\r\n}\r\n\r\n.artist-info .artistname {\r\n    font-size: 18px;\r\n    padding: 5px 0px 10px 0px;\r\n    margin: 0px;\r\n}\r\n\r\n.artists-pagination {\r\n    text-align: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.artists-pagination *{\r\n    font-size: 18px !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.artists-pagination .current{\r\n    background-color: #2c3e50 !important;\r\n}\r\n\r\n.artists-pagination span{\r\n    margin: 0px 5px !important;\r\n}\r\n\r\n.artists-pagination a:hover{\r\n    background-color: inherit !important;\r\n    text-decoration: none !important;\r\n    color: #25b09c !important;\r\n    cursor: pointer;\r\n}"

/***/ },

/***/ 774:
/***/ function(module, exports) {

module.exports = ".artists-content {\r\n    background-color: #FFFFFF;\r\n    height: 100%;\r\n    padding: 30px 15px;\r\n}\r\n\r\n.artists-content ul{\r\n    list-style: none;\r\n    padding: 0px;\r\n}\r\n\r\n.artists-content .artists-form {\r\n    margin: 15px 0px;\r\n    display:block;\r\n    overflow:auto;\r\n}\r\n\r\n.artists-content .artists-list {\r\n    margin: 15px 0px;\r\n    display:block;\r\n    overflow:auto;\r\n}\r\n\r\n.artists-content .artists-option {\r\n    padding: 0px 0px 0px 15px;\r\n    display: inline-block;\r\n}\r\n\r\n.artists-content .artists-option .artists-sub-option{\r\n    padding: 0px 0px 0px 15px;\r\n}\r\n\r\n.artists-content .artists-option .artists-sub-option-label{\r\n    text-align: right;\r\n    vertical-align: middle;\r\n    padding: 10px 0px;\r\n}\r\n\r\n.image-container {\r\n    width: 100%;\r\n    padding-top: 100%;\r\n    overflow: hidden;\r\n    position: relative;\r\n    background-color: #F5F5F5;\r\n    display: inline-block;\r\n}\r\n\r\n.image-container img {\r\n    position: absolute;\r\n    top: -9999px;\r\n    bottom: -9999px;\r\n    left: -9999px;\r\n    right: -9999px;\r\n    margin: auto;\r\n\r\n    max-height: 100%;\r\n}\r\n\r\n.artist-info {\r\n    background-color: #F5F5F5;\r\n    text-align: center;\r\n}\r\n\r\n.artist-info a{\r\n    color: #2c3e50;\r\n}\r\n\r\n.artist-info a:hover{\r\n    text-decoration: none;\r\n}\r\n\r\n.artist-info .artistname {\r\n    font-size: 18px;\r\n    margin: 5px 0px;\r\n}\r\n\r\n.artist-info .name {\r\n    padding: 5px 0px 10px 0px;\r\n}\r\n\r\n.artists-pagination {\r\n    text-align: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.artists-pagination *{\r\n    font-size: 18px !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.artists-pagination .current{\r\n    background-color: #2c3e50 !important;\r\n}\r\n\r\n.artists-pagination span{\r\n    margin: 0px 5px !important;\r\n}\r\n\r\n.artists-pagination a:hover{\r\n    background-color: inherit !important;\r\n    text-decoration: none !important;\r\n    color: #25b09c !important;\r\n    cursor: pointer;\r\n}"

/***/ },

/***/ 775:
/***/ function(module, exports) {

module.exports = ".about-component {\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    padding-right: 15px;\r\n}\r\n\r\n.genres ul {\r\n    display: inline-block;\r\n    margin: 0px;\r\n}\r\n\r\n.genres ul li {\r\n    display: inline-block;\r\n    padding-right: 15px;\r\n}\r\n\r\n.bio {\r\n    margin-bottom: 20px;\r\n}"

/***/ },

/***/ 776:
/***/ function(module, exports) {

module.exports = ".albums-list {\r\n    margin: 15px 0px;\r\n    display:block;\r\n    overflow:auto;\r\n}\r\n\r\n.album-info {\r\n    background-color: #F5F5F5;\r\n    text-align: center;\r\n}\r\n\r\n.album-info a{\r\n    color: #2c3e50;\r\n}\r\n\r\n.album-info a:hover{\r\n    text-decoration: none;\r\n}\r\n\r\n.album-info .albumname {\r\n    font-size: 14px;\r\n    padding: 5px 0px;\r\n}\r\n\r\n.albums-pagination {\r\n    text-align: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.albums-pagination *{\r\n    font-size: 18px !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.albums-pagination .current{\r\n    background-color: #2c3e50 !important;\r\n}\r\n\r\n.albums-pagination span{\r\n    margin: 0px 5px !important;\r\n}\r\n\r\n.albums-pagination a:hover{\r\n    background-color: inherit !important;\r\n    text-decoration: none !important;\r\n    color: #25b09c !important;\r\n    cursor: pointer;\r\n}"

/***/ },

/***/ 777:
/***/ function(module, exports) {

module.exports = ".detailed-artist-content {\n    background-color: #FFFFFF;\n    height: 100%;\n    padding: 15px 30px 15px 30px;\n}\n\n.detailed-artist-content .profile-header{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    background-image: url('../../../../assets/images/artists-cover.jpg');\n    padding: 15px 15px 10px 15px;\n}\n\n.detailed-artist-content .profile-image {\n    text-align: center;\n    padding: 0px;\n}\n\n.detailed-artist-content img {\n    display: inline-block;\n    min-height: auto;\n}\n\n.detailed-artist-content .profile-information {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    padding-bottom: 10px;\n}\n\n.detailed-artist-content .profile-artistname {\n    font-size: 3em;\n    margin: 5px 0px 0px 20px;\n    color: #FCFCFC;\n}\n\n.detailed-artist-content .profile-nationality {\n    font-size: 1.1em;\n    margin: 0px 0px 0px 20px;\n    color: #DDDDDD;\n    text-transform: uppercase;\n    letter-spacing: 0.15em;\n}\n\n.detailed-artist-content .profile-follow {\n    text-align: right;\n}\n\n.detailed-artist-content .btn-follow {\n    width: 100%;\n}\n\n.detailed-artist-content ul{\n    list-style: none;\n    padding: 0px;\n}\n\n.detailed-artist-content .image-container {\n    width: 100%;\n    padding-top: 100%;\n    overflow: hidden;\n    position: relative;\n    background-color: #F5F5F5;\n    display: inline-block;\n}\n\n.detailed-artist-content .image-container img {\n    position: absolute;\n    top: -9999px;\n    bottom: -9999px;\n    left: -9999px;\n    right: -9999px;\n    margin: auto;\n    max-height: 100%;\n}\n\n\n@media (max-width: 767px) {\n    .detailed-artist-content .profile-information {\n        text-align: center;\n    }\n\n    .detailed-artist-content .profile-header{\n        display: initial;\n        background: none;\n    }\n\n    .detailed-artist-content .profile-artistname {\n        font-size: 3em;\n        margin: 0px;\n        color: #2d3e50;\n    }\n    .detailed-artist-content .profile-nationality {\n        font-size: 1.1em;\n        margin: 0px;\n        color: #2d3e50;\n        text-transform: uppercase;\n        letter-spacing: 0.15em;\n    }\n\n    .detailed-artist-content .header-wrapper {\n        width: 100%;\n        text-align: center;\n    }\n\n    .detailed-artist-content .profile-follow {\n        text-align: center;\n        margin-top: 20px;\n    }\n}"

/***/ },

/***/ 778:
/***/ function(module, exports) {

module.exports = ".singles-list {\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n.singles-list ul {\r\n    list-style: none;\r\n    padding: 0px;\r\n}\r\n\r\n.single-info-header {\r\n    display: inline-block;\r\n    width: 100%;\r\n    border-bottom: 1px solid #F1F1F1;\r\n    padding: 10px 0px;\r\n    color: #25b09c;\r\n}\r\n\r\n.single-info {\r\n    display: inline-block;\r\n    width: 100%;\r\n    border-bottom: 1px solid #F1F1F1;\r\n    padding: 10px 0px;\r\n}\r\n\r\n.singles-pagination {\r\n    text-align: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.singles-pagination *{\r\n    font-size: 18px !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.singles-pagination .current{\r\n    background-color: #2c3e50 !important;\r\n}\r\n\r\n.singles-pagination span{\r\n    margin: 0px 5px !important;\r\n}\r\n\r\n.singles-pagination a:hover{\r\n    background-color: inherit !important;\r\n    text-decoration: none !important;\r\n    color: #25b09c !important;\r\n    cursor: pointer;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .singles-info-header {\r\n        display: none;\r\n    }\r\n}"

/***/ },

/***/ 779:
/***/ function(module, exports) {

module.exports = ".login-content {\r\n    background-color: #FFFFFF;\r\n    padding: 40px 0px;\r\n}\r\n\r\n.login-content .form-legend {\r\n    text-align: center;\r\n}\r\n\r\n.login-content .btn-login {\r\n    width: 195px;\r\n    margin: 15px 0px;\r\n}\r\n\r\n.login-content .login-submit {\r\n    text-align: center;\r\n}"

/***/ },

/***/ 780:
/***/ function(module, exports) {

module.exports = ".register-content {\r\n    background-color: #FFFFFF;\r\n    padding: 40px 0px;\r\n}\r\n\r\n.register-content .form-legend {\r\n    text-align: center;\r\n}\r\n\r\n.register-content .btn-register {\r\n    width: 195px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.register-content .register-submit {\r\n    text-align: center;\r\n}"

/***/ },

/***/ 781:
/***/ function(module, exports) {

module.exports = ".contact-content {\r\n    background-color: #FFFFFF;\r\n    padding: 40px 0px;\r\n}\r\n\r\n.contact-content .form-legend {\r\n    text-align: center;\r\n}\r\n\r\n.contact-content .btn-contact {\r\n    width: 195px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.contact-content .contact-submit {\r\n    text-align: center;\r\n}"

/***/ },

/***/ 782:
/***/ function(module, exports) {

module.exports = ".error-content {\r\n    background-color: #FFFFFF;\r\n    height: 80vh;\r\n}\r\n\r\n.error-content .centered {\r\n    position: relative;\r\n    top: 25%;\r\n    text-align: center;\r\n    left: 50%;\r\n    z-index: 1;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n.error-content .centered .responsive {\r\n    max-width: 100%;\r\n    height: auto;\r\n}"

/***/ },

/***/ 783:
/***/ function(module, exports) {

module.exports = "footer {\r\n    display: inline-block;\r\n    width: 100%;\r\n    background-color: #2c3e50;\r\n    padding: 20px;\r\n    font-size: 14px;\r\n    color: #FFFFFF;\r\n    text-align: center;\r\n}\r\n\r\nfooter a{\r\n    text-decoration: none;\r\n    color: #FFFFFF;\r\n}\r\n\r\nfooter a:hover{\r\n    text-decoration: none;\r\n    color: #25b09c;\r\n}"

/***/ },

/***/ 784:
/***/ function(module, exports) {

module.exports = ".home-content {\r\n    background-color: #FFFFFF;\r\n    height: 80vh;\r\n}\r\n\r\n.home-content .centered {\r\n    position: relative;\r\n    top: 30%;\r\n    text-align: center;\r\n    left: 50%;\r\n    z-index: 1;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n.home-content .centered .responsive {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.home-content .centered .slogan {\r\n    text-transform: uppercase;\r\n    letter-spacing: 1vw;\r\n    font-size: 24px;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.home-content .centered .btn-home {\r\n    background-color: transparent;\r\n    border: 0.35vh solid #2c3e50;\r\n    color: #2c3e50;\r\n    width: 100%;\r\n    font-weight: 500;\r\n    text-transform: uppercase;\r\n    font-size: 20px;\r\n    letter-spacing: 2px;\r\n    margin: 65px 0px;\r\n}\r\n\r\n.home-content .centered .btn-home:hover {\r\n    background-color: #2c3e50;\r\n    color: #FFFFFF;\r\n}"

/***/ },

/***/ 785:
/***/ function(module, exports) {

module.exports = ".messages-list {\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n.messages-list ul {\r\n    list-style: none;\r\n    padding: 0px;\r\n}\r\n\r\n.message-info-header {\r\n    display: inline-block;\r\n    width: 100%;\r\n    border-bottom: 1px solid #F1F1F1;\r\n    padding: 10px 0px;\r\n    color: #25b09c;\r\n}\r\n\r\n.message-info {\r\n    display: inline-block;\r\n    width: 100%;\r\n    border-bottom: 1px solid #F1F1F1;\r\n    padding: 10px 0px;\r\n}\r\n\r\n.message-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.messages-pagination {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n}\r\n\r\n.messages-pagination *{\r\n    font-size: 18px !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.messages-pagination .current{\r\n    background-color: #2c3e50 !important;\r\n}\r\n\r\n.messages-pagination span{\r\n    margin: 0px 5px !important;\r\n}\r\n\r\n.messages-pagination a:hover{\r\n    background-color: inherit !important;\r\n    text-decoration: none !important;\r\n    color: #25b09c !important;\r\n    cursor: pointer;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .message-info-header {\r\n        display: none;\r\n    }\r\n}"

/***/ },

/***/ 786:
/***/ function(module, exports) {

module.exports = ".messages-content {\r\n    background-color: #FFFFFF;\r\n    height: 100%;\r\n    padding: 30px 15px;\r\n}\r\n\r\n.messages-content .messages-form {\r\n    margin: 15px 0px;\r\n    display:block;\r\n    overflow:auto;\r\n}\r\n\r\n.messages-content .messages-list {\r\n    margin: 15px 0px;\r\n    display:block;\r\n    overflow:auto;\r\n}\r\n\r\n.messages-content .messages-option {\r\n    padding: 0px 0px 0px 15px;\r\n    display: inline-block;\r\n}\r\n\r\n.messages-content .messages-option .messages-sub-option{\r\n    padding: 0px 0px 0px 15px;\r\n}\r\n\r\n.messages-content .messages-option .messages-sub-option-label{\r\n    text-align: right;\r\n    vertical-align: middle;\r\n    padding: 10px 0px;\r\n}\r\n\r\n.messages-pagination {\r\n    text-align: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.messages-pagination *{\r\n    font-size: 18px !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.messages-pagination .current{\r\n    background-color: #2c3e50 !important;\r\n}\r\n\r\n.messages-pagination span{\r\n    margin: 0px 5px !important;\r\n}\r\n\r\n.messages-pagination a:hover{\r\n    background-color: inherit !important;\r\n    text-decoration: none !important;\r\n    color: #25b09c !important;\r\n    cursor: pointer;\r\n}"

/***/ },

/***/ 787:
/***/ function(module, exports) {

module.exports = ".detailed-message-content {\r\n    background-color: #FFFFFF;\r\n    height: 100%;\r\n    padding: 15px 30px 15px 30px;\r\n}\r\n\r\n.detailed-message-content .message-header {\r\n    font-size: 16px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.detailed-message-content .message-footer {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.detailed-message-content .message-option {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}"

/***/ },

/***/ 788:
/***/ function(module, exports) {

module.exports = ".navbar-default .navbar-brand {\r\n    padding: 17.5px 15px;\r\n}\r\n\r\n.navbar-default .navbar-nav .login:before{\r\n    width: 13px;\r\n    height: 10px;\r\n    content: \"\";\r\n    background: url(\"../../../assets/images/login-icon.png\");\r\n    position: relative;\r\n    display: inline-block;\r\n    margin-right: 7px;\r\n}\r\n\r\n.navbar-default .navbar-nav .login:hover:before, .navbar-default .navbar-nav .login:focus:before{\r\n    width: 13px;\r\n    height: 10px;\r\n    content: \"\";\r\n    background: url(\"../../../assets/images/login-icon-active.png\");\r\n    position: relative;\r\n    display: inline-block;\r\n    margin-right: 7px;\r\n}\r\n\r\n.navbar-default .navbar-nav .logout:before{\r\n    width: 14px;\r\n    height: 10px;\r\n    content: \"\";\r\n    background: url(\"../../../assets/images/logout-icon.png\");\r\n    position: relative;\r\n    display: inline-block;\r\n    margin-right: 7px;\r\n}\r\n\r\n.navbar-default .navbar-nav .logout:hover:before, .navbar-default .navbar-nav .logout:focus:before{\r\n    width: 14px;\r\n    height: 10px;\r\n    content: \"\";\r\n    background: url(\"../../../assets/images/logout-icon-active.png\");\r\n    position: relative;\r\n    display: inline-block;\r\n    margin-right: 7px;\r\n}"

/***/ },

/***/ 789:
/***/ function(module, exports) {

module.exports = ".albums-list {\r\n    margin: 15px 0px;\r\n    display:block;\r\n    overflow:auto;\r\n}\r\n\r\n.album-info {\r\n    background-color: #F5F5F5;\r\n    text-align: center;\r\n}\r\n\r\n.album-info a{\r\n    color: #2c3e50;\r\n}\r\n\r\n.album-info a:hover{\r\n    text-decoration: none;\r\n}\r\n\r\n.album-info .albumname {\r\n    font-size: 14px;\r\n    padding: 5px 0px;\r\n}\r\n\r\n.albums-pagination {\r\n    text-align: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.albums-pagination *{\r\n    font-size: 18px !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.albums-pagination .current{\r\n    background-color: #2c3e50 !important;\r\n}\r\n\r\n.albums-pagination span{\r\n    margin: 0px 5px !important;\r\n}\r\n\r\n.albums-pagination a:hover{\r\n    background-color: inherit !important;\r\n    text-decoration: none !important;\r\n    color: #25b09c !important;\r\n    cursor: pointer;\r\n}"

/***/ },

/***/ 790:
/***/ function(module, exports) {

module.exports = ".artists-list {\r\n    margin: 15px 0px;\r\n    display:block;\r\n    overflow:auto;\r\n}\r\n\r\n.artist-info {\r\n    background-color: #F5F5F5;\r\n    text-align: center;\r\n}\r\n\r\n.artist-info a{\r\n    color: #2c3e50;\r\n}\r\n\r\n.artist-info a:hover{\r\n    text-decoration: none;\r\n}\r\n\r\n.artist-info .artistname {\r\n    font-size: 14px;\r\n    padding: 5px 0px;\r\n}\r\n\r\n.artists-pagination {\r\n    text-align: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.artists-pagination *{\r\n    font-size: 18px !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.artists-pagination .current{\r\n    background-color: #2c3e50 !important;\r\n}\r\n\r\n.artists-pagination span{\r\n    margin: 0px 5px !important;\r\n}\r\n\r\n.artists-pagination a:hover{\r\n    background-color: inherit !important;\r\n    text-decoration: none !important;\r\n    color: #25b09c !important;\r\n    cursor: pointer;\r\n}"

/***/ },

/***/ 791:
/***/ function(module, exports) {

module.exports = ".users-list {\r\n    margin: 15px 0px;\r\n    display:block;\r\n    overflow:auto;\r\n}\r\n\r\n.user-info {\r\n    background-color: #F5F5F5;\r\n    text-align: center;\r\n}\r\n\r\n.user-info a{\r\n    color: #2c3e50;\r\n}\r\n\r\n.user-info a:hover{\r\n    text-decoration: none;\r\n}\r\n\r\n.user-info .username {\r\n    font-size: 14px;\r\n    padding: 5px 0px;\r\n}\r\n\r\n.users-pagination {\r\n    text-align: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.users-pagination *{\r\n    font-size: 18px !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.users-pagination .current{\r\n    background-color: #2c3e50 !important;\r\n}\r\n\r\n.users-pagination span{\r\n    margin: 0px 5px !important;\r\n}\r\n\r\n.users-pagination a:hover{\r\n    background-color: inherit !important;\r\n    text-decoration: none !important;\r\n    color: #25b09c !important;\r\n    cursor: pointer;\r\n}"

/***/ },

/***/ 792:
/***/ function(module, exports) {

module.exports = ".profile-content {\r\n    background-color: #FFFFFF;\r\n    height: 100%;\r\n    padding: 30px;\r\n}\r\n\r\n.profile-content .profile-header{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: end;\r\n        -ms-flex-align: end;\r\n            align-items: flex-end;\r\n}\r\n\r\n.profile-content .profile-image {\r\n    text-align: center;\r\n}\r\n\r\n.profile-content img {\r\n    display: inline-block;\r\n    min-height: auto;\r\n}\r\n\r\n.profile-content .profile-information {\r\n    margin-top: 30px;\r\n\r\n}\r\n\r\n.profile-content .profile-username {\r\n    font-size: 3em;\r\n    margin: 10px 0px 0px 20px;\r\n}\r\n\r\n.profile-content .profile-names {\r\n    font-size: 1.5em;\r\n    margin: 10px 0px 0px 20px;\r\n    color: #25b09c;\r\n}\r\n\r\n.profile-content .profile-follow {\r\n    text-align: right;\r\n    margin-top: 20px;\r\n}\r\n\r\n.profile-content .btn-follow {\r\n    width: 100%;\r\n}\r\n\r\n.profile-content .users-list {\r\n    margin: 15px 0px;\r\n    display:block;\r\n    overflow:auto;\r\n}\r\n\r\n.profile-content ul{\r\n    list-style: none;\r\n    padding: 0px;\r\n}\r\n\r\n.profile-content .image-container {\r\n    width: 100%;\r\n    padding-top: 100%;\r\n    overflow: hidden;\r\n    position: relative;\r\n    background-color: #F5F5F5;\r\n    display: inline-block;\r\n}\r\n\r\n.profile-content .image-container img {\r\n    position: absolute;\r\n    top: -9999px;\r\n    bottom: -9999px;\r\n    left: -9999px;\r\n    right: -9999px;\r\n    margin: auto;\r\n\r\n    max-height: 100%;\r\n}\r\n\r\n.profile-content .user-info {\r\n    background-color: #F5F5F5;\r\n    text-align: center;\r\n}\r\n\r\n.profile-content .user-info a{\r\n    color: #2c3e50;\r\n}\r\n\r\n.profile-content .user-info a:hover{\r\n    text-decoration: none;\r\n}\r\n\r\n.profile-content .user-info .username {\r\n    font-size: 18px;\r\n    padding: 5px 0px;\r\n}\r\n\r\n.users-pagination {\r\n    text-align: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.users-pagination *{\r\n    font-size: 18px !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.users-pagination .current{\r\n    background-color: #2c3e50 !important;\r\n}\r\n\r\n.users-pagination span{\r\n    margin: 0px 5px !important;\r\n}\r\n\r\n.users-pagination a:hover{\r\n    background-color: inherit !important;\r\n    text-decoration: none !important;\r\n    color: #25b09c !important;\r\n    cursor: pointer;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .profile-content .profile-information {\r\n        text-align: center;\r\n    }\r\n\r\n    .profile-content .profile-header{\r\n        display: initial;\r\n    }\r\n\r\n    .profile-content .profile-follow {\r\n        text-align: center;\r\n    }\r\n}"

/***/ },

/***/ 793:
/***/ function(module, exports) {

module.exports = ".personal-information .form-legend {\r\n    text-align: center;\r\n    font-size: 20px;\r\n    margin: 0px 0px 15px 0px;\r\n}\r\n\r\n.personal-information .form-group {\r\n    margin: 5px 0px;\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n.personal-information .form-group label{\r\n    text-align: right;\r\n    padding: 10px 0px;\r\n}\r\n\r\n.password .form-legend {\r\n    text-align: center;\r\n    font-size: 20px;\r\n    margin: 0px 0px 15px 0px;\r\n}\r\n\r\n.password .form-group {\r\n    margin: 5px 0px;\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n.password .form-group label{\r\n    text-align: right;\r\n    padding: 10px 0px;\r\n}\r\n\r\n.fileName {\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    padding-left: 5px;\r\n}\r\n\r\n.fileSelect {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.picture-btn {\r\n    min-width: 150px;\r\n}\r\n@media (max-width: 767px) {\r\n    .personal-information .form-group label{\r\n        text-align: left;\r\n        padding: 0px 15px;\r\n    }\r\n}"

/***/ },

/***/ 794:
/***/ function(module, exports) {

module.exports = ".songs-list {\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n.songs-list ul {\r\n    list-style: none;\r\n    padding: 0px;\r\n}\r\n\r\n.song-info-header {\r\n    display: inline-block;\r\n    width: 100%;\r\n    border-bottom: 1px solid #F1F1F1;\r\n    padding: 10px 0px;\r\n    color: #25b09c;\r\n}\r\n\r\n.song-info {\r\n    display: inline-block;\r\n    width: 100%;\r\n    border-bottom: 1px solid #F1F1F1;\r\n    padding: 10px 0px;\r\n}\r\n\r\n.songs-pagination {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n}\r\n\r\n.songs-pagination *{\r\n    font-size: 18px !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.songs-pagination .current{\r\n    background-color: #2c3e50 !important;\r\n}\r\n\r\n.songs-pagination span{\r\n    margin: 0px 5px !important;\r\n}\r\n\r\n.songs-pagination a:hover{\r\n    background-color: inherit !important;\r\n    text-decoration: none !important;\r\n    color: #25b09c !important;\r\n    cursor: pointer;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .song-info-header {\r\n        display: none;\r\n    }\r\n}"

/***/ },

/***/ 795:
/***/ function(module, exports) {

module.exports = ".songs-list {\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n.songs-list ul {\r\n    list-style: none;\r\n    padding: 0px;\r\n}\r\n\r\n.song-info-header {\r\n    display: inline-block;\r\n    width: 100%;\r\n    border-bottom: 1px solid #F1F1F1;\r\n    padding: 10px 0px;\r\n    color: #25b09c;\r\n}\r\n\r\n.song-info {\r\n    display: inline-block;\r\n    width: 100%;\r\n    border-bottom: 1px solid #F1F1F1;\r\n    padding: 10px 0px;\r\n}\r\n\r\n.songs-pagination {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n}\r\n\r\n.songs-pagination *{\r\n    font-size: 18px !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.songs-pagination .current{\r\n    background-color: #2c3e50 !important;\r\n}\r\n\r\n.songs-pagination span{\r\n    margin: 0px 5px !important;\r\n}\r\n\r\n.songs-pagination a:hover{\r\n    background-color: inherit !important;\r\n    text-decoration: none !important;\r\n    color: #25b09c !important;\r\n    cursor: pointer;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .song-info-header {\r\n        display: none;\r\n    }\r\n}"

/***/ },

/***/ 796:
/***/ function(module, exports) {

module.exports = ".songs-content {\r\n    background-color: #FFFFFF;\r\n    height: 100%;\r\n    padding: 30px 15px;\r\n}\r\n\r\n.songs-content .songs-form {\r\n    margin: 15px 0px;\r\n    display:block;\r\n    overflow:auto;\r\n}\r\n\r\n.songs-content .songs-list {\r\n    margin: 15px 0px;\r\n    display:block;\r\n    overflow:auto;\r\n}\r\n\r\n.songs-content .songs-option {\r\n    padding: 0px 0px 0px 15px;\r\n    display: inline-block;\r\n}\r\n\r\n.songs-content .songs-option .songs-sub-option{\r\n    padding: 0px 0px 0px 15px;\r\n}\r\n\r\n.songs-content .songs-option .songs-sub-option-label{\r\n    text-align: right;\r\n    vertical-align: middle;\r\n    padding: 10px 0px;\r\n}\r\n\r\n.songs-pagination {\r\n    text-align: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.songs-pagination *{\r\n    font-size: 18px !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.songs-pagination .current{\r\n    background-color: #2c3e50 !important;\r\n}\r\n\r\n.songs-pagination span{\r\n    margin: 0px 5px !important;\r\n}\r\n\r\n.songs-pagination a:hover{\r\n    background-color: inherit !important;\r\n    text-decoration: none !important;\r\n    color: #25b09c !important;\r\n    cursor: pointer;\r\n}"

/***/ },

/***/ 797:
/***/ function(module, exports) {

module.exports = ".users-list {\r\n    margin: 15px 0px;\r\n    display:block;\r\n    overflow:auto;\r\n}\r\n\r\n.user-info {\r\n    background-color: #F5F5F5;\r\n    text-align: center;\r\n}\r\n\r\n.user-info a{\r\n    color: #2c3e50;\r\n}\r\n\r\n.user-info a:hover{\r\n    text-decoration: none;\r\n}\r\n\r\n.user-info .username {\r\n    font-size: 18px;\r\n    margin: 0px;\r\n}\r\n\r\n.user-info .name {\r\n    font-size: 14px;\r\n    padding: 5px 0px 10px 0px;\r\n    margin: 0px;\r\n}\r\n\r\n.users-pagination {\r\n    text-align: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.users-pagination *{\r\n    font-size: 18px !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.users-pagination .current{\r\n    background-color: #2c3e50 !important;\r\n}\r\n\r\n.users-pagination span{\r\n    margin: 0px 5px !important;\r\n}\r\n\r\n.users-pagination a:hover{\r\n    background-color: inherit !important;\r\n    text-decoration: none !important;\r\n    color: #25b09c !important;\r\n    cursor: pointer;\r\n}"

/***/ },

/***/ 798:
/***/ function(module, exports) {

module.exports = ".users-content {\r\n    background-color: #FFFFFF;\r\n    height: 100%;\r\n    padding: 30px 15px;\r\n}\r\n\r\n.users-content ul{\r\n    list-style: none;\r\n    padding: 0px;\r\n}\r\n\r\n.users-content .users-form {\r\n    margin: 15px 0px;\r\n    display:block;\r\n    overflow:auto;\r\n}\r\n\r\n.users-content .users-list {\r\n    margin: 15px 0px;\r\n    display:block;\r\n    overflow:auto;\r\n}\r\n\r\n.users-content .users-option {\r\n    padding: 0px 0px 0px 15px;\r\n    display: inline-block;\r\n}\r\n\r\n.users-content .users-option .users-sub-option{\r\n    padding: 0px 0px 0px 15px;\r\n}\r\n\r\n.users-content .users-option .users-sub-option-label{\r\n    text-align: right;\r\n    vertical-align: middle;\r\n    padding: 10px 0px;\r\n}\r\n\r\n.image-container {\r\n    width: 100%;\r\n    padding-top: 100%;\r\n    overflow: hidden;\r\n    position: relative;\r\n    background-color: #F5F5F5;\r\n    display: inline-block;\r\n}\r\n\r\n.image-container img {\r\n    position: absolute;\r\n    top: -9999px;\r\n    bottom: -9999px;\r\n    left: -9999px;\r\n    right: -9999px;\r\n    margin: auto;\r\n\r\n    max-height: 100%;\r\n}\r\n\r\n.user-info {\r\n    background-color: #F5F5F5;\r\n    text-align: center;\r\n}\r\n\r\n.user-info a{\r\n    color: #2c3e50;\r\n}\r\n\r\n.user-info a:hover{\r\n    text-decoration: none;\r\n}\r\n\r\n.users-pagination {\r\n    text-align: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.users-pagination *{\r\n    font-size: 18px !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.users-pagination .current{\r\n    background-color: #2c3e50 !important;\r\n}\r\n\r\n.users-pagination span{\r\n    margin: 0px 5px !important;\r\n}\r\n\r\n.users-pagination a:hover{\r\n    background-color: inherit !important;\r\n    text-decoration: none !important;\r\n    color: #25b09c !important;\r\n    cursor: pointer;\r\n}"

/***/ },

/***/ 799:
/***/ function(module, exports) {

module.exports = ".albums-list {\r\n    margin: 15px 0px;\r\n    display:block;\r\n    overflow:auto;\r\n}\r\n\r\n.album-info {\r\n    background-color: #F5F5F5;\r\n    text-align: center;\r\n}\r\n\r\n.album-info a{\r\n    color: #2c3e50;\r\n}\r\n\r\n.album-info a:hover{\r\n    text-decoration: none;\r\n}\r\n\r\n.album-info .albumname {\r\n    font-size: 14px;\r\n    padding: 5px 0px;\r\n}\r\n\r\n.albums-pagination {\r\n    text-align: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.albums-pagination *{\r\n    font-size: 18px !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.albums-pagination .current{\r\n    background-color: #2c3e50 !important;\r\n}\r\n\r\n.albums-pagination span{\r\n    margin: 0px 5px !important;\r\n}\r\n\r\n.albums-pagination a:hover{\r\n    background-color: inherit !important;\r\n    text-decoration: none !important;\r\n    color: #25b09c !important;\r\n    cursor: pointer;\r\n}"

/***/ },

/***/ 800:
/***/ function(module, exports) {

module.exports = ".artists-list {\r\n    margin: 15px 0px;\r\n    display:block;\r\n    overflow:auto;\r\n}\r\n\r\n.artist-info {\r\n    background-color: #F5F5F5;\r\n    text-align: center;\r\n}\r\n\r\n.artist-info a{\r\n    color: #2c3e50;\r\n}\r\n\r\n.artist-info a:hover{\r\n    text-decoration: none;\r\n}\r\n\r\n.artist-info .artistname {\r\n    font-size: 14px;\r\n    padding: 5px 0px;\r\n}\r\n\r\n.artists-pagination {\r\n    text-align: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.artists-pagination *{\r\n    font-size: 18px !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.artists-pagination .current{\r\n    background-color: #2c3e50 !important;\r\n}\r\n\r\n.artists-pagination span{\r\n    margin: 0px 5px !important;\r\n}\r\n\r\n.artists-pagination a:hover{\r\n    background-color: inherit !important;\r\n    text-decoration: none !important;\r\n    color: #25b09c !important;\r\n    cursor: pointer;\r\n}"

/***/ },

/***/ 801:
/***/ function(module, exports) {

module.exports = ".detailed-user-content {\r\n    background-color: #FFFFFF;\r\n    height: 100%;\r\n    padding: 30px;\r\n}\r\n\r\n.detailed-user-content .image-container img {\r\n    position: absolute;\r\n    top: -9999px;\r\n    bottom: -9999px;\r\n    left: -9999px;\r\n    right: -9999px;\r\n    margin: auto;\r\n    max-height: 100%;\r\n}\r\n\r\n.detailed-user-content .profile-header{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: stretch;\r\n        -ms-flex-align: stretch;\r\n            align-items: stretch;\r\n}\r\n\r\n.detailed-user-content .profile-image {\r\n    text-align: center;\r\n}\r\n\r\n.detailed-user-content img {\r\n    display: inline-block;\r\n    min-height: auto;\r\n}\r\n\r\n.detailed-user-content .profile-information {\r\n    margin-top: 30px;\r\n\r\n}\r\n\r\n.detailed-user-content .profile-username {\r\n    font-size: 3em;\r\n    margin: 10px 0px 0px 20px;\r\n}\r\n\r\n.detailed-user-content .profile-names {\r\n    font-size: 1.5em;\r\n    margin: 10px 0px 0px 20px;\r\n    color: #25b09c;\r\n}\r\n\r\n.detailed-user-content .profile-follow {\r\n    text-align: right;\r\n}\r\n\r\n.detailed-user-content .btn-follow {\r\n    width: 100%;\r\n}\r\n\r\n.detailed-user-content ul{\r\n    list-style: none;\r\n    padding: 0px;\r\n}\r\n\r\n.detailed-user-content .image-container {\r\n    width: 100%;\r\n    padding-top: 100%;\r\n    overflow: hidden;\r\n    position: relative;\r\n    background-color: #F5F5F5;\r\n    display: inline-block;\r\n}\r\n\r\n\r\n@media (max-width: 767px) {\r\n    .detailed-user-content .profile-information {\r\n        text-align: center;\r\n    }\r\n\r\n    .detailed-user-content .profile-header{\r\n        display: initial;\r\n    }\r\n\r\n    .detailed-user-content .profile-follow {\r\n        text-align: center;\r\n        margin-top: 20px;\r\n    }\r\n}"

/***/ },

/***/ 802:
/***/ function(module, exports) {

module.exports = ".users-list {\r\n    margin: 15px 0px;\r\n    display:block;\r\n    overflow:auto;\r\n}\r\n\r\n.user-info {\r\n    background-color: #F5F5F5;\r\n    text-align: center;\r\n}\r\n\r\n.user-info a{\r\n    color: #2c3e50;\r\n}\r\n\r\n.user-info a:hover{\r\n    text-decoration: none;\r\n}\r\n\r\n.user-info .username {\r\n    font-size: 14px;\r\n    padding: 5px 0px;\r\n}\r\n\r\n.users-pagination {\r\n    text-align: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.users-pagination *{\r\n    font-size: 18px !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.users-pagination .current{\r\n    background-color: #2c3e50 !important;\r\n}\r\n\r\n.users-pagination span{\r\n    margin: 0px 5px !important;\r\n}\r\n\r\n.users-pagination a:hover{\r\n    background-color: inherit !important;\r\n    text-decoration: none !important;\r\n    color: #25b09c !important;\r\n    cursor: pointer;\r\n}"

/***/ },

/***/ 803:
/***/ function(module, exports) {

module.exports = ".songs-list {\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n.songs-list ul {\r\n    list-style: none;\r\n    padding: 0px;\r\n}\r\n\r\n.song-info-header {\r\n    display: inline-block;\r\n    width: 100%;\r\n    border-bottom: 1px solid #F1F1F1;\r\n    padding: 10px 0px;\r\n    color: #25b09c;\r\n}\r\n\r\n.song-info {\r\n    display: inline-block;\r\n    width: 100%;\r\n    border-bottom: 1px solid #F1F1F1;\r\n    padding: 10px 0px;\r\n}\r\n\r\n.songs-pagination {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n}\r\n\r\n.songs-pagination *{\r\n    font-size: 18px !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.songs-pagination .current{\r\n    background-color: #2c3e50 !important;\r\n}\r\n\r\n.songs-pagination span{\r\n    margin: 0px 5px !important;\r\n}\r\n\r\n.songs-pagination a:hover{\r\n    background-color: inherit !important;\r\n    text-decoration: none !important;\r\n    color: #25b09c !important;\r\n    cursor: pointer;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .song-info-header {\r\n        display: none;\r\n    }\r\n}"

/***/ },

/***/ 806:
/***/ function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<main>\r\n    <router-outlet></router-outlet>\r\n</main>\r\n<app-footer></app-footer>"

/***/ },

/***/ 807:
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 addAlbum-content\">\r\n    <div class=\"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2\">\r\n    <h2 class=\"form-legend\">Add Album</h2>\r\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && addAlbum(); f.reset()\" #f=\"ngForm\" novalidate>\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Name</label>\r\n            <input type=\"text\"  class=\"form-control\" name=\"name\" [(ngModel)]=\"model.name\" #name=\"ngModel\" required />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"artist\">Artist</label>\r\n            <input auto-complete type=\"text\" class=\"form-control\" name=\"artist\" [(ngModel)]=\"model.artist\" [source]=\"suggestedArtists\" [min-chars]=\"2\" artist=\"ngModel\" required />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"year\">Year</label>\r\n            <input type=\"text\"  class=\"form-control\" name=\"year\" [(ngModel)]=\"model.year\" #year=\"ngModel\" required />\r\n        </div>\r\n        <div>\r\n            <label for=\"genres\">Genres</label>\r\n            <select multiple=\"\" class=\"form-control\" name=\"genres\" (change)=\"change($event.target.options)\" >\r\n                 <option *ngFor=\"let genre of genresCollection\" value=\"{{genre}}\">{{genre}}</option>\r\n            </select>\r\n        </div>\r\n        <div *ngFor=\"let input of songs; let i = index\" class=\"form-group\">\r\n            <label for=\"{{i}}\">Song {{i + 1}} </label>\r\n            <input type=\"text\" class=\"form-control\" name=\"{{i}}\" [(ngModel)]=\"input.value\" required />\r\n        </div>\r\n        <div class=\"add-song-wrapper\">\r\n            <a (click)=\"addSongInput()\" href=\"#\">\r\n                <img src=\"../../../../assets/images/new-input-icon.png\" alt=\"Add Input\"  class=\"add-input\">\r\n            </a>\r\n        </div>\r\n        <div class=\"form-group\">\r\n           <label for=\"imgUrl\">Image</label>\r\n           <div class=\"fileSelect\">\r\n               <label for=\"input-avatar\" class=\"btn btn-default btn-sm picture-btn\">Browse</label>\r\n               <input type=\"file\" (change)=\"onProfilePictureUpload($event)\" id=\"input-avatar\" class=\"hidden\">\r\n               <div class=\"fileName\">\r\n                   {{fileName}}\r\n               </div>\r\n           </div>\r\n       </div>\r\n        <div class=\"album-submit\">\r\n            <div class=\"form-group\">\r\n                <button [disabled]=\"!f.form.valid || fileName == 'No file chosen'\"  class=\"btn btn-primary btn-addAlbum\">Submit</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    </div>\r\n    <simple-notifications [options]=\"options\"></simple-notifications>\r\n</div>"

/***/ },

/***/ 808:
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 addArtist-content\">\r\n    <div class=\"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2\">\r\n        <h2 class=\"form-legend\">Add Artist</h2>\r\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && addArtist(); f.reset()\" #f=\"ngForm\" novalidate>\r\n            <div class=\"form-group\">\r\n                <label for=\"name\">Name</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"model.name\" #name=\"ngModel\" required />\r\n            </div>\r\n            <div>\r\n             <select multiple=\"\" class=\"form-control\"  (change)=\"change($event.target.options)\" >\r\n              <option *ngFor=\"let genre of genresCollection\" value=\"{{genre}}\">{{genre}}</option>\r\n            </select>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-xs-6\">\r\n                    <label for=\"from\">Active Years</label>\r\n                    <input type=\"text\" placeholder=\"From\" class=\"form-control\" name=\"from\" [(ngModel)]=\"model.from\" #from=\"ngModel\" required />\r\n                </div>\r\n                <div class=\"form-group col-xs-6\">\r\n                    <label for=\"from\">&nbsp;</label>\r\n                    <input type=\"text\" placeholder=\"To\" class=\"form-control\" name=\"to\" [(ngModel)]=\"model.to\" #to=\"ngModel\" required />\r\n                </div>\r\n            </div>\r\n             <div class=\"form-group\">\r\n                <label for=\"nationality\">Nationality</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"nationality\" [(ngModel)]=\"model.nationality\" #nationality=\"ngModel\" required />\r\n            </div>\r\n             <div class=\"form-group\">\r\n                <label for=\"imgUrl\">Image</label>\r\n                <div class=\"fileSelect\">\r\n                    <label for=\"input-avatar\" class=\"btn btn-default btn-sm picture-btn\">Browse</label>\r\n                    <input type=\"file\" (change)=\"onProfilePictureUpload($event)\" id=\"input-avatar\" class=\"hidden\">\r\n                    <div class=\"fileName\">\r\n                        {{fileName}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"bio\">Biography</label>\r\n                <textarea class=\"form-control\" row=\"5\" name=\"bio\" [(ngModel)]=\"model.bio\" #bio=\"ngModel\" required></textarea>\r\n            </div>\r\n            <div class=\"artist-submit\">\r\n                <div class=\"form-group\">\r\n                    <button [disabled]=\"!f.form.valid || fileName == 'No file chosen'\"  class=\"btn btn-primary btn-addArtist\">Submit</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <simple-notifications [options]=\"options\"></simple-notifications>\r\n</div>"

/***/ },

/***/ 809:
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 addSong-content\">\r\n    <div class=\"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2\">\r\n    <h2 class=\"form-legend\">Add Song</h2>\r\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && addSong(); f.reset()\" #f=\"ngForm\" novalidate>\r\n            <div class=\"form-group\">\r\n                <label for=\"name\">Song name</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"model.name\" #name=\"ngModel\" required />\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"artist\">Artist</label>\r\n                <input auto-complete type=\"text\" class=\"form-control\" name=\"artist\" [(ngModel)]=\"model.artist\" [source]=\"suggestedArtists\" [min-chars]=\"2\" #artist=\"ngModel\" required />\r\n            </div>\r\n             <div class=\"form-group\">\r\n                <label for=\"duration\">Duration in seconds</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"duration\" [(ngModel)]=\"model.duration\" #duration=\"ngModel\" required />\r\n            </div>\r\n            <div class=\"song-submit\">\r\n                <div class=\"form-group\">\r\n                    <button [disabled]=\"!f.form.valid\"  class=\"btn btn-primary btn-addSong\">Submit</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <simple-notifications [options]=\"options\"></simple-notifications>\r\n\r\n</div>"

/***/ },

/***/ 810:
/***/ function(module, exports) {

module.exports = "<div class=\"admins-list\">\r\n     <h2 class=\"form-legend\">Admins</h2>\r\n    <ul>\r\n        <li class=\"col-xs-12 container\">\r\n            <div class=\"admin-info-header\">\r\n                <div class=\"admin-container\">\r\n                    <div class=\"col-sm-3\">\r\n                        USERNAME\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                        FIRST NAME\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                        LAST NAME\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li *ngFor=\"let admin of admins  | paginate: { itemsPerPage: 15, currentPage: p }\" class=\"col-xs-12 container\">\r\n            <div class=\"admin-info\">\r\n                <div class=\"admin-container\">\r\n                    <div class=\"col-sm-3\">\r\n                        {{admin.username}}\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                        {{admin.firstName}}\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                        {{admin.lastName}}\r\n                    </div>\r\n                    <div  class=\"col-sm-1\">\r\n                      <button  (click)=\"removeFromAdmins(admin.username)\" class=\"btn btn-sm btn-default btn-remove\">Remove</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class=\"admins-pagination\">\r\n    <pagination-controls directionLinks=\"false\" maxSize=\"3\" (pageChange)=\"p = $event\"></pagination-controls>\r\n</div>"

/***/ },

/***/ 811:
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 updateRole-content\">\r\n    <div class=\"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2\">\r\n    <h2 class=\"form-legend\">Add Admin</h2>\r\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && updateRole(); f.reset()\" #f=\"ngForm\" novalidate>\r\n            <div class=\"form-group\">\r\n                <label for=\"name\">Username</label>\r\n                <input auto-complete type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"model.username\" #name=\"ngModel\" [source]=\"usernames\"  [min-chars]=\"2\" required />\r\n            </div>\r\n            <div class=\"update-role-submit\">\r\n                <div class=\"form-group\">\r\n                    <button [disabled]=\"!f.form.valid\"  class=\"btn btn-primary btn-updateRole\">Submit</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <app-admin-list (removedFromAdmins)=\"removeFromAdmins($event)\"  [admins]=\"admins\"></app-admin-list>\r\n    <simple-notifications [options]=\"options\"></simple-notifications>\r\n\r\n</div>"

/***/ },

/***/ 812:
/***/ function(module, exports) {

module.exports = "<div class=\"albums-list\">\r\n    <ul>\r\n        <li *ngFor=\"let album of albums | filterGenre:genre | search: parameters:searchPattern | sort: sortType:sortOrder | paginate: { itemsPerPage: 12, currentPage: p }\" class=\"col-xs-6 col-sm-3 col-md-2 container\">\r\n            <div class=\"album-info\">\r\n                <a [routerLink]=\"['/albums/',album._id]\" [routerLinkActive]=\"['active']\">\r\n                    <div class=\"album-container\">\r\n                        <div class=\"image-container\">\r\n                            <img src=\"../../../assets/images/album-pictures/{{album.imgUrl}}\" default=\"../../../assets/images/album-pictures/default-album.jpg\" alt=\"{{album.name}}\" />\r\n                        </div>\r\n                        <p class=\"albumname\">{{album.name}}</p>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class=\"albums-pagination\">\r\n    <pagination-controls directionLinks=\"false\" maxSize=\"3\" (pageChange)=\"p = $event\"></pagination-controls>\r\n</div>"

/***/ },

/***/ 813:
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-10 col-xs-offset-1 albums-content\">\r\n    <div class=\"albums-form\">\r\n        <div class=\"form-group col-sm-4 col-lg-4\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchPattern\" placeholder=\"Search...\" />\r\n        </div>\r\n        <div class=\"form-group col-sm-8 col-lg-8\">\r\n            <div class=\"col-xs-12 col-md-4 albums-option\">\r\n                <label class=\"col-xs-4 control-label albums-sub-option albums-sub-option-label\" for=\"sort-type\">Order by</label>\r\n                <div class=\"col-xs-8 albums-sub-option\">\r\n                    <select class=\"form-control\" id=\"sort-type\" [(ngModel)]=\"sortType\">\r\n                        <option *ngFor=\"let type of sortTypes\" [value]=\"type\">{{type}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-12 col-md-4 albums-option\">\r\n                <label class=\"col-xs-4 control-label albums-sub-option albums-sub-option-label\" for=\"sort-order\">Order in</label>\r\n                <div class=\"col-xs-8 albums-sub-option\">\r\n                    <select class=\"form-control\" id=\"sort-order\" [(ngModel)]=\"sortOrder\">\r\n                        <option *ngFor=\"let order of sortOrders\" [value]=\"order\">{{order}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-12 col-md-4 albums-option\">\r\n                <label class=\"col-xs-4 control-label albums-sub-option albums-sub-option-label\" for=\"sort-order\">Filter by</label>\r\n                <div class=\"col-xs-8 albums-sub-option\">\r\n                    <select class=\"form-control\" id=\"genre-filter\" [(ngModel)]=\"genre\">\r\n                        <option *ngFor=\"let g of genres\" [value]=\"g\">{{g}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <app-albums-list [genre]=\"genre\" [albums]=\"albums\" [searchPattern]=\"searchPattern\" [parameters]=\"parameters\" [sortType]=\"sortType\" [sortOrder]=\"sortOrder\"></app-albums-list>\r\n</div>"

/***/ },

/***/ 814:
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-10 col-xs-offset-1 detailed-album-content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"row main-row profile-header\">\r\n                <div class=\"col-sm-3 col-md-2 col-lg-2 profile-image\">\r\n                    <div class=\"image-container\">\r\n                        <img src=\"../../../assets/images/album-pictures/{{imgUrl}}\" default=\"../../../assets/images/album-pictures/default-album.jpg\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-5 col-md-6 col-lg-6 profile-information\">\r\n                    <div class=\"header-wrapper\">\r\n                        <div class=\"row\">\r\n                            <h1 class=\"profile-albumname\">{{name}}</h1>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <h2 class=\"profile-nationality\">{{artist}}</h2>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4 col-md-4 col-lg-4 profile-follow\">\r\n                    <button *ngIf=\"!favorited\" (click)=\"addFavoriteAlbum();favorited=true;\" class=\"btn btn-primary btn-favorite\">Add to favorites</button>\r\n                    <button *ngIf=\"favorited\" (click)=\"removeFavoriteAlbum();favorited=false;\" class=\"btn btn-default btn-favorite\">Remove from favorites</button>\r\n                </div>\r\n            </div>\r\n            <hr>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <app-songs-list [album]=\"name\" [artist]=\"artist\" [songsList]=\"songs\"></app-songs-list>\r\n    </div>\r\n    <simple-notifications [options]=\"options \"></simple-notifications>\r\n</div>"

/***/ },

/***/ 815:
/***/ function(module, exports) {

module.exports = "<div class=\"songs-list\">\r\n    <ul>\r\n        <li class=\"col-xs-12 container\">\r\n            <div class=\"song-info-header\">\r\n                <div class=\"song-container\">\r\n                    <div class=\"col-sm-4\">\r\n                        SONG\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        ARTIST\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        ALBUM\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li *ngFor=\"let song of songsList | paginate: { id: 'songs', itemsPerPage: 10, currentPage: s }\" class=\"container col-xs-12\">\r\n            <div class=\"song-info\">\r\n                <div class=\"song-container\">\r\n                    <div class=\"col-sm-4\">\r\n                        {{song.name}}\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        {{artist}}\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        {{album}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class=\"songs-pagination\">\r\n    <pagination-controls id=\"songs\" directionLinks=\"false\" maxSize=\"3\" (pageChange)=\"s = $event\"></pagination-controls>\r\n</div>"

/***/ },

/***/ 816:
/***/ function(module, exports) {

module.exports = "<div class=\"artists-list\">\r\n    <ul>\r\n        <li *ngFor=\"let artist of artists | filterGenre:genre | search: parameters:searchPattern | sort: sortType:sortOrder | paginate: { itemsPerPage: 12, currentPage: p }\" class=\"col-xs-6 col-sm-3 col-md-2 container\">\r\n            <div class=\"artist-info\">\r\n                <a [routerLink]=\"['/artists/',artist._id]\" [routerLinkActive]=\"['active']\">\r\n                    <div class=\"artist-container\">\r\n                        <div class=\"image-container\">\r\n                            <img src=\"../../../assets/images/artist-pictures/{{artist.imgUrl}}\" default=\"../../../assets/images/artist-pictures/default-artist.jpg\" alt=\"{{artist.name}}\" />\r\n                        </div>\r\n                        <p class=\"artistname\">{{artist.name}}</p>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class=\"artists-pagination\">\r\n    <pagination-controls directionLinks=\"false\" maxSize=\"3\" (pageChange)=\"p = $event\"></pagination-controls>\r\n</div>"

/***/ },

/***/ 817:
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-10 col-xs-offset-1 artists-content\">\r\n    <div class=\"artists-form\">\r\n        <div class=\"form-group col-sm-4 col-lg-4\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchPattern\" placeholder=\"Search...\" />\r\n        </div>\r\n        <div class=\"form-group col-sm-8 col-lg-8\">\r\n            <div class=\"col-xs-12 col-md-4 artists-option\">\r\n                <label class=\"col-xs-4 control-label artists-sub-option artists-sub-option-label\" for=\"sort-type\">Order by</label>\r\n                <div class=\"col-xs-8 artists-sub-option\">\r\n                    <select class=\"form-control\" id=\"sort-type\" [(ngModel)]=\"sortType\">\r\n                        <option *ngFor=\"let type of sortTypes\" [value]=\"type\">{{type}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-12 col-md-4 artists-option\">\r\n                <label class=\"col-xs-4 control-label artists-sub-option artists-sub-option-label\" for=\"sort-order\">Order in</label>\r\n                <div class=\"col-xs-8 artists-sub-option\">\r\n                    <select class=\"form-control\" id=\"sort-order\" [(ngModel)]=\"sortOrder\">\r\n                        <option *ngFor=\"let order of sortOrders\" [value]=\"order\">{{order}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-12 col-md-4 artists-option\">\r\n                <label class=\"col-xs-4 control-label artists-sub-option artists-sub-option-label\" for=\"sort-order\">Filter by</label>\r\n                <div class=\"col-xs-8 artists-sub-option\">\r\n                    <select class=\"form-control\" id=\"genre-filter\" [(ngModel)]=\"genre\">\r\n                        <option *ngFor=\"let g of genres\" [value]=\"g\">{{g}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <app-artists-list [genre]=\"genre\" [artists]=\"artists\" [searchPattern]=\"searchPattern\" [parameters]=\"parameters\" [sortType]=\"sortType\" [sortOrder]=\"sortOrder\"></app-artists-list>\r\n</div>"

/***/ },

/***/ 818:
/***/ function(module, exports) {

module.exports = "<div class=\"about-container col-xs-12\">\r\n    <div class=\"active-years\">\r\n        <span class=\"about-component\"> Active years </span> {{yearsActive}}\r\n    </div>\r\n    <div class=\"genres\">\r\n        <span class=\"about-component\"> Genres </span>\r\n        <ul>\r\n            <li *ngFor=\"let genre of genres\">\r\n                {{genre}}\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div>\r\n        <hr>\r\n    </div>\r\n    <div class=\"bio\">\r\n        {{bio}}\r\n    </div>\r\n</div>"

/***/ },

/***/ 819:
/***/ function(module, exports) {

module.exports = "<div class=\"albums-list\">\r\n    <ul>\r\n        <li *ngFor=\"let album of albumsList | paginate: { id: 'albums', itemsPerPage: 6, currentPage: q }\" class=\"col-xs-4 col-sm-3 col-md-2 container\">\r\n            <div class=\"album-info\">\r\n                <a [routerLink]=\"['/albums/',album.id]\" [routerLinkActive]=\"['active']\">\r\n                    <div class=\"album-container\">\r\n                        <div class=\"image-container\">\r\n                            <img src=\"../../../assets/images/album-pictures/{{album.imgUrl}}\" default=\"../../../assets/images/album-pictures/default-album.jpg\" alt=\"{{album.name}}\"/>\r\n                        </div>\r\n                        <p class=\"albumname\">{{album.name}}</p>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class=\"albums-pagination\">\r\n    <pagination-controls id=\"albums\" directionLinks=\"false\" maxSize=\"3\" (pageChange)=\"q = $event\"></pagination-controls>\r\n</div>"

/***/ },

/***/ 820:
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-10 col-xs-offset-1 detailed-artist-content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"row main-row profile-header\">\r\n                <div class=\"col-sm-3 col-md-2 col-lg-2 profile-image\">\r\n                    <div class=\"image-container\">\r\n                        <img src=\"../../../assets/images/artist-pictures/{{imgUrl}}\" default=\"../../../assets/images/artist-pictures/default-artist.jpg\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6 col-md-7 col-lg-7 profile-information\">\r\n                    <div class=\"header-wrapper\">\r\n                        <div class=\"row\">\r\n                            <h1 class=\"profile-artistname\">{{name}}</h1>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <h2 class=\"profile-nationality\">{{nationality}}</h2>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-3 col-md-3 col-lg-3 profile-follow\">\r\n                    <button *ngIf=\"!favorited\" (click)=\"addFavoriteArtist();favorited=true;\" class=\"btn btn-primary btn-favorite\">Add to favorites</button>\r\n                    <button *ngIf=\"favorited\" (click)=\"removeFavoriteArtist();favorited=false;\" class=\"btn btn-default btn-favorite\">Remove from favorites</button>\r\n                </div>\r\n            </div>\r\n            <hr>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n            <ul class=\"nav nav-pills nav-stacked\">\r\n                <li class=\"active\"><a href=\"#about\" data-toggle=\"pill\" aria-expanded=\"true\">About</a></li>\r\n                <li class=\"\"><a href=\"#albums\" data-toggle=\"pill\" aria-expanded=\"true\">Albums</a></li>\r\n                <li><a href=\"#singles\" data-toggle=\"pill\" aria-expanded=\"false\">Singles</a></li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"col-md-9\">\r\n            <div class=\"tab-content\" id=\"my-tab-content\">\r\n                <div class=\"tab-pane fade active in\" id=\"about\">\r\n                    <div id=\"artists-info\">\r\n                        <app-about [genres]=\"genres\" [bio]=\"bio\" [yearsActive]=\"yearsActive\"></app-about>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tab-pane fade\" id=\"albums\">\r\n                    <div id=\"albums-info\">\r\n                        <app-albums-list [albumsList]=\"albums\"></app-albums-list>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tab-pane fade\" id=\"singles\">\r\n                    <div id=\"songs-info\">\r\n                        <app-singles-list [artist]=\"name\" [singlesList]=\"singles\"></app-singles-list>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <simple-notifications [options]=\"options \"></simple-notifications>\r\n</div>"

/***/ },

/***/ 821:
/***/ function(module, exports) {

module.exports = "<div class=\"singles-list\">\r\n    <ul>\r\n        <li class=\"col-xs-12 container\">\r\n            <div class=\"single-info-header\">\r\n                <div class=\"single-container\">\r\n                    <div class=\"col-sm-4\">\r\n                        SONG\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        ARTIST\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        ALBUM\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li *ngFor=\"let single of singlesList | paginate: { id: 'singles', itemsPerPage: 10, currentPage: s }\" class=\"container col-xs-12\">\r\n            <div class=\"single-info\">\r\n                <div class=\"single-container\">\r\n                    <div class=\"col-sm-4\">\r\n                        {{single.name}}\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        {{artist}}\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        Single\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class=\"singles-pagination\">\r\n    <pagination-controls id=\"singles\" directionLinks=\"false\" maxSize=\"3\" (pageChange)=\"s = $event\"></pagination-controls>\r\n</div>"

/***/ },

/***/ 822:
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 login-content\">\r\n    <div class=\"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2\">\r\n        <h2 class=\"form-legend\">Login</h2>\r\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n                <label for=\"username\">Username</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n                <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n                <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n            </div>\r\n            <div class=\"login-submit\">\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-primary btn-login\">Login</button>\r\n                </div>\r\n                <a [routerLink]=\"['/register']\">Don't have an account? Register now.</a>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <simple-notifications [options]=\"options \"></simple-notifications>\r\n</div>"

/***/ },

/***/ 823:
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 register-content\">\r\n    <div class=\"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2\">\r\n        <h2 class=\"form-legend\">Register</h2>\r\n        <form name=\"form\" [formGroup]=\"user\" (ngSubmit)=\"register(); f.reset()\" #f=\"ngForm\">\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': !user.controls['username'].valid && user.controls['username'].touched }\">\r\n                <label for=\"username\">Username</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"username\" formControlName=\"username\" />\r\n                <div class=\"text-danger\" *ngIf=\"!user.controls['username'].valid && user.controls['username'].touched\">Username must be atleast 3 symbols.</div>\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': !user.controls['password'].valid && user.controls['password'].touched }\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" name=\"password\" formControlName=\"password\" />\r\n                <div class=\"text-danger\" *ngIf=\"!user.controls['password'].valid && user.controls['password'].touched\">Password must be at least 4 symbols</div>\r\n            </div>\r\n             <div class=\"form-group\" [ngClass]=\"{ 'has-error': !user.controls['confirmPassword'].valid && user.controls['confirmPassword'].touched || user.controls['password'].value != user.controls['confirmPassword'].value }\">\r\n                <label for=\"confirmPassword\">Confirm Password</label>\r\n                <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" formControlName=\"confirmPassword\" />\r\n                <div class=\"text-danger\" *ngIf=\"!user.controls['confirmPassword'].valid && user.controls['confirmPassword'].touched || user.controls['password'].value != user.controls['confirmPassword'].value\">Confirm password must be at least 4 symbols and match password</div>\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': !user.controls['firstName'].valid && user.controls['firstName'].touched }\">\r\n                <label for=\"firstName\">First name</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"firstName\" formControlName=\"firstName\" />\r\n                <div class=\"text-danger\" *ngIf=\"!user.controls['firstName'].valid && user.controls['firstName'].touched\">First name must be at least 3 symbols.</div>\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': !user.controls['lastName'].valid && user.controls['lastName'].touched }\">\r\n                <label for=\"lastName\">Last name</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"lastName\" formControlName=\"lastName\" />\r\n                <div class=\"text-danger\" *ngIf=\"!user.controls['lastName'].valid && user.controls['lastName'].touched\">Last name must be atleast 3 symbols.</div>\r\n            </div>\r\n             <div class=\"form-group\" [ngClass]=\"{ 'has-error': !user.controls['email'].valid && user.controls['email'].touched }\">\r\n                <label for=\"email\">Email</label>\r\n                <input type=\"email\" class=\"form-control\" name=\"email\" formControlName=\"email\"/>\r\n                <div class=\"text-danger\" *ngIf=\"!user.controls['email'].valid && user.controls['email'].touched\">Email must be in the right format (e.g. user@mail.com)</div>\r\n            </div>\r\n            <div class=\"register-submit\">\r\n                <div class=\"form-group\">\r\n                    <button [disabled]=\"!f.valid || user.controls['password'].value != user.controls['confirmPassword'].value\" class=\"btn btn-primary btn-register\">Register</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <simple-notifications [options]=\"options \"></simple-notifications>\r\n</div>"

/***/ },

/***/ 824:
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 contact-content\">\r\n    <div class=\"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2\">\r\n        <h2 class=\"form-legend\">Contact us</h2>\r\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && contact()\" #f=\"ngForm\" novalidate>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !name.valid }\">\r\n                <label for=\"name\">Name</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"model.name\" #name=\"ngModel\" required />\r\n                <div *ngIf=\"f.submitted && !name.valid\" class=\"help-block\">Name is required</div>\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n               <label for=\"email\">Email</label>\r\n               <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\r\n               <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\r\n           </div>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !title.valid }\">\r\n                <label for=\"title\">Title</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"model.title\" #title=\"ngModel\" required />\r\n                <div *ngIf=\"f.submitted && !title.valid\" class=\"help-block\">Title is required</div>\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !content.valid }\">\r\n                <label for=\"content\">Content</label>\r\n                <textarea class=\"form-control\" rows=\"8\" name=\"content\" [(ngModel)]=\"model.content\" #content=\"ngModel\" required ></textarea>\r\n                <div *ngIf=\"f.submitted && !content.valid\" class=\"help-block\">Content is required</div>\r\n            </div>\r\n            <div class=\"contact-submit\">\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-primary btn-contact\">Send</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <simple-notifications [options]=\"options \"></simple-notifications>\r\n</div>"

/***/ },

/***/ 825:
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-10 col-xs-offset-1 error-content\">\r\n    <div class=\"centered\">\r\n        <div class=\"col-xs-10 col-xs-offset-1\">\r\n            <img src=\"../../../assets/images/error.png\" class=\"responsive\" alt=\"Music Taste\">\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },

/***/ 826:
/***/ function(module, exports) {

module.exports = "<footer id=\"footer\">\r\n    <div>\r\n        <span>Telerik Academy 2016-2017 &nbsp;<a href=\"https://github.com/Team-Directive17-Angular2\">Team Directive 17</a></span>\r\n    </div>\r\n</footer>"

/***/ },

/***/ 827:
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-10 col-xs-offset-1 home-content\">\r\n    <div class=\"centered\">\r\n        <div class=\"col-xs-10 col-xs-offset-1\">\r\n            <img src=\"../../../assets/images/logo-large.png\" class=\"responsive\" alt=\"Music Taste\">\r\n        </div>\r\n        <div class=\"col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4\">\r\n            <a [routerLink]=\"['/login']\" class=\"btn btn-primary btn-default btn-home\">Join now</a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },

/***/ 828:
/***/ function(module, exports) {

module.exports = "<div class=\"messages-list\">\r\n    <ul>\r\n        <li class=\"col-xs-12 container\">\r\n            <div class=\"message-info-header\">\r\n                <div class=\"message-container\">\r\n                    <div class=\"col-sm-3\">\r\n                        TITLE\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                        EMAIL\r\n                    </div>\r\n                    <div class=\"col-sm-2\">\r\n                        DATE\r\n                    </div>\r\n                    <div class=\"col-sm-2\">\r\n                        STATUS\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li *ngFor=\"let message of messages | filterStatus:status | search: parameters:searchPattern | sort: sortType:sortOrder | paginate: { itemsPerPage: 15, currentPage: p }\" class=\"col-xs-12 container\">\r\n            <div class=\"message-info\">\r\n                <div class=\"message-container\">\r\n                    <div class=\"col-sm-3\">\r\n                        {{message.title}}\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                        {{message.email}}\r\n                    </div>\r\n                    <div class=\"col-sm-2\">\r\n                        {{message.sendOn | date: 'short' }}\r\n                    </div>\r\n                    <div class=\"col-sm-2\">\r\n                        {{message.status}}\r\n                    </div>\r\n                    <div  class=\"col-sm-2\">\r\n                        <a [routerLink]=\"['./',message._id]\" class=\"btn btn-primary btn-sm\">Details</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class=\"messages-pagination\">\r\n    <pagination-controls directionLinks=\"false\" maxSize=\"3\" (pageChange)=\"p = $event\"></pagination-controls>\r\n</div>"

/***/ },

/***/ 829:
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-10 col-xs-offset-1 messages-content\">\r\n    <div class=\"messages-form\">\r\n        <div class=\"form-group col-sm-4 col-lg-4\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchPattern\" placeholder=\"Search...\" />\r\n        </div>\r\n        <div class=\"form-group col-sm-8 col-lg-8\">\r\n            <div class=\"col-xs-12 col-md-4 messages-option\">\r\n                <label class=\"col-xs-4 control-label messages-sub-option messages-sub-option-label\" for=\"sort-type\">Order by</label>\r\n                <div class=\"col-xs-8 messages-sub-option\">\r\n                    <select class=\"form-control\" id=\"sort-type\" [(ngModel)]=\"sortType\">\r\n                        <option *ngFor=\"let type of sortTypes\" [value]=\"type\">{{type}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-12 col-md-4 messages-option\">\r\n                <label class=\"col-xs-4 control-label messages-sub-option messages-sub-option-label\" for=\"sort-order\">Order in</label>\r\n                <div class=\"col-xs-8 messages-sub-option\">\r\n                    <select class=\"form-control\" id=\"sort-order\" [(ngModel)]=\"sortOrder\">\r\n                        <option *ngFor=\"let order of sortOrders\" [value]=\"order\">{{order}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-12 col-md-4 messages-option\">\r\n                <label class=\"col-xs-4 control-label messages-sub-option messages-sub-option-label\" for=\"status-filter\">Filter by</label>\r\n                <div class=\"col-xs-8 messages-sub-option\">\r\n                    <select class=\"form-control\" id=\"status-filter\" [(ngModel)]=\"status\">\r\n                        <option *ngFor=\"let st of statuses\" [value]=\"st\">{{st}}</option>\r\n                    </select>\r\n                </div>\n            </div>\r\n        </div>\r\n    </div>\r\n    <app-messages-list [messages]=\"messages\" [status]=\"status\" [searchPattern]=\"searchPattern\" [parameters]=\"parameters\" [sortType]=\"sortType\" [sortOrder]=\"sortOrder\"></app-messages-list>\r\n    <simple-notifications [options]=\"options\"></simple-notifications>\r\n</div>"

/***/ },

/***/ 830:
/***/ function(module, exports) {

module.exports = "<div  class=\"col-xs-10 col-xs-offset-1 detailed-message-content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"row message-header\">\r\n                <div class=\"col-lg-5\"><span>{{name}} ({{email}})</span></div>\r\n                <div class=\"col-lg-4\"><span>{{title}}</span></div>\r\n                <div class=\"col-lg-3\"><span>{{sendOn | date}}</span></div>\r\n            </div>\r\n            <hr>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-9\"><span>{{content}}</span></div>\r\n            </div>\r\n            <hr>\r\n            <div class=\"message-footer\">\r\n                <div class=\"col-xs-12 col-sm-8\"><span>Processed by: {{processedBy}}</span></div>\r\n                <div class=\"col-xs-12 col-md-4 message-option\">\r\n                    <label class=\"col-xs-4 control-label message-sub-option messages-sub-option-label\" for=\"status-change\">Status</label>\r\n                    <div class=\"col-xs-8 message-sub-option\">\r\n                        <select (change)=\"updateStatus()\" class=\"form-control\" id=\"status-change\" [(ngModel)]=\"status\">\r\n                            <option *ngFor=\"let st of statuses\" [value]=\"st\">{{st}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <simple-notifications [options]=\"options \"></simple-notifications>\r\n</div>"

/***/ },

/***/ 831:
/***/ function(module, exports) {

module.exports = "<header id=\"header\">\r\n    <nav class=\"navbar navbar-default\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"navbar-header\">\r\n                <a class=\"navbar-brand\" [routerLink]=\"['/']\"><img class=\"img-responsive\" src=\"../../../assets/images/logo.png\" alt=\"\"></a>\r\n                <button class=\"navbar-toggle collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-main\">\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                </button>\r\n            </div>\r\n            <div class=\"navbar-collapse collapse\" id=\"navbar-main\">\r\n                <ul class=\"nav navbar-nav\">\r\n                    <li><a [routerLink]=\"['/']\">Home</a></li>\r\n                     <li *ngIf =\"user && isAdmin\" class=\"dropdown\">\r\n                        <a class=\"dropdown-toggle\" id=\"services\" data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"true\">Administration<span class=\"caret\"></span></a>\r\n                        <ul class=\"dropdown-menu\" aria-labelledby=\"services\">\r\n                        <li><a [routerLink]=\"['admin/add-artist']\">Add Artists</a></li>\r\n                        <li><a [routerLink]=\"['admin/add-album']\">Add Albums</a></li>\r\n                        <li><a [routerLink]=\"['admin/add-song']\">Add Songs</a></li>\r\n                        <li><a [routerLink]=\"['admin/update-user-role']\">Update user's role</a></li>\r\n                        <li><a [routerLink]=\"['admin/messages']\">Messages</a></li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"dropdown\">\r\n                        <a class=\"dropdown-toggle\" id=\"services\" data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"true\">Browse<span class=\"caret\"></span></a>\r\n                        <ul class=\"dropdown-menu\" aria-labelledby=\"services\">\r\n                        <li><a [routerLink]=\"['/artists']\">Artists</a></li>\r\n                        <li><a [routerLink]=\"['/albums']\">Albums</a></li>\r\n                        <li><a [routerLink]=\"['/songs']\">Songs</a></li>\r\n                        </ul>\r\n                    </li>\r\n                    <li><a [routerLink]=\"['/users']\">Community</a></li>\r\n                </ul>\r\n                <ul class=\"nav navbar-nav navbar-right\"(login)=\"isAuth($event)\">\r\n                    <li><a [routerLink]=\"['/contact']\" [routerLinkActive]=\"['active']\">Contact</a></li>\r\n                    <li [style.display]=\"user? 'none' : 'inherit'\"><a class=\"login\" [routerLink]=\"['/login']\" id=\"nav-login\">Login</a></li>\r\n                    <li *ngIf=\"user\"><a [routerLink]=\"['/profile']\" [routerLinkActive]=\"['active']\" id=\"nav-profile\">{{username}}</a></li>\r\n                    <li [style.display]=\"user? 'inherit' : 'none'\"><a class=\"logout\" [routerLink]=\"['/logout']\" [routerLinkActive]=\"['active']\" id=\"nav-logout\">Logout</a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</header>"

/***/ },

/***/ 832:
/***/ function(module, exports) {

module.exports = "<div class=\"albums-list\">\r\n    <ul>\r\n        <li *ngFor=\"let album of albumsList | paginate: { id: 'albums', itemsPerPage: 6, currentPage: t }\" class=\"col-xs-4 col-sm-3 col-md-2 container\">\r\n            <div class=\"album-info\">\r\n                <a [routerLink]=\"['/albums/',album._id]\" [routerLinkActive]=\"['active']\">\r\n                    <div class=\"album-container\">\r\n                        <div class=\"image-container\">\r\n                            <img src=\"../../../assets/images/album-pictures/{{album.imgUrl}}\" default=\"../../../assets/images/album-pictures/default-album.jpg\" alt=\"{{album.name}}\"/>\r\n                        </div>\r\n                        <p class=\"albumname\">{{album.name}}</p>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class=\"albums-pagination\">\r\n    <pagination-controls id=\"albums\" directionLinks=\"false\" maxSize=\"3\" (pageChange)=\"t = $event\"></pagination-controls>\r\n</div>"

/***/ },

/***/ 833:
/***/ function(module, exports) {

module.exports = "<div class=\"artists-list\">\r\n    <ul>\r\n        <li *ngFor=\"let artist of artistsList | paginate: { id: 'artists', itemsPerPage: 6, currentPage: r }\" class=\"col-xs-4 col-sm-3 col-md-2 container\">\r\n            <div class=\"artist-info\">\r\n                <a [routerLink]=\"['/artists/',artist._id]\" [routerLinkActive]=\"['active']\">\r\n                    <div class=\"artist-container\">\r\n                        <div class=\"image-container\">\r\n                            <img src=\"../../../assets/images/artist-pictures/{{artist.imgUrl}}\" default=\"../../../assets/images/artist-pictures/default-artist.jpg\" alt=\"{{artist.name}}\"/>\r\n                        </div>\r\n                        <p class=\"artistname\">{{artist.name}}</p>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class=\"artists-pagination\">\r\n    <pagination-controls id=\"artists\" directionLinks=\"false\" maxSize=\"3\" (pageChange)=\"r = $event\"></pagination-controls>\r\n</div>"

/***/ },

/***/ 834:
/***/ function(module, exports) {

module.exports = "<div class=\"users-list\">\r\n    <ul>\r\n        <li *ngFor=\"let follower of followList | paginate: { id: 'followers', itemsPerPage: 6, currentPage: s }\" class=\"col-xs-4 col-sm-3 col-md-2 container\">\r\n            <div class=\"user-info\">\r\n                <a [routerLink]=\"['/users/',follower.username]\" [routerLinkActive]=\"['active']\">\r\n                    <div class=\"user-container\">\r\n                        <div class=\"image-container\">\r\n                            <img src=\"../../../assets/images/profile-pictures/{{follower.avatar}}\" default=\"../../../assets/images/profile-pictures/default-avatar.jpg\" alt=\"{{follower.username}}\"/>\r\n                        </div>\r\n                        <p class=\"username\">{{follower.username}}</p>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class=\"users-pagination\">\r\n    <pagination-controls id=\"followers\" directionLinks=\"false\" maxSize=\"3\" (pageChange)=\"s = $event\"></pagination-controls>\r\n</div>"

/***/ },

/***/ 835:
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-10 col-xs-offset-1 profile-content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"row main-row profile-header\">\r\n                <div class=\"col-sm-3 col-md-2 profile-image\">\r\n                    <div class=\"image-container\">\r\n                        <img src=\"../../../assets/images/profile-pictures/{{avatar}}\" default=\"../../../assets/images/profile-pictures/default-avatar.jpg\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-9 col-md-10 profile-information\">\r\n                    <div>\r\n                        <div class=\"row\">\r\n                            <h1 class=\"profile-username\">{{username}}</h1></div>\r\n                        <div class=\"row\">\r\n                            <h2 class=\"profile-names\">{{firstName}} {{lastName}}</h2></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <hr>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n            <ul class=\"nav nav-pills nav-stacked\">\r\n                <li class=\"active\"><a href=\"#settings\" data-toggle=\"pill\" aria-expanded=\"true\">Settings</a></li>\r\n                <li><a href=\"#artists\" data-toggle=\"pill\" aria-expanded=\"true\">Artists</a></li>\r\n                <li><a href=\"#albums\" data-toggle=\"pill\" aria-expanded=\"true\">Albums</a></li>\r\n                <li><a href=\"#songs\" data-toggle=\"pill\" aria-expanded=\"false\">Songs</a></li>\r\n                <li><a href=\"#followers\" data-toggle=\"pill\" aria-expanded=\"false\">Followers</a></li>\r\n                <li><a href=\"#followings\" data-toggle=\"pill\" aria-expanded=\"false\">Followings</a></li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"col-md-9\">\r\n            <div class=\"tab-content\" id=\"my-tab-content\">\r\n                <div class=\"tab-pane fade active in\" id=\"settings\">\r\n                    <app-settings (informationUpdated)=\"informationUpdated(username)\" [uFirstName]=\"firstName\" [uLastName]=\"lastName\" [uEmail]=\"email\"></app-settings>\r\n                </div>\r\n                <div class=\"tab-pane fade active in\" id=\"artists\">\r\n                    <app-favorite-artists-list [artistsList]=\"favoriteArtists\"></app-favorite-artists-list>\r\n                </div>\r\n                <div class=\"tab-pane fade\" id=\"albums\">\r\n                    <div id=\"albums-info\">\r\n                        <app-favorite-albums-list [albumsList]=\"favoriteAlbums\"></app-favorite-albums-list>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tab-pane fade\" id=\"songs\">\r\n                    <div id=\"songs-info\">\r\n                        <app-favorite-songs-list [songsList]=\"favoriteSongs\"></app-favorite-songs-list>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tab-pane fade\" id=\"followers\">\r\n                    <app-follow-list [followList]=\"followers\"></app-follow-list>\r\n                </div>\r\n                <div class=\"tab-pane fade\" id=\"followings\">\r\n                    <app-follow-list [followList]=\"followings\"></app-follow-list>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <simple-notifications [options]=\"options \"></simple-notifications>\r\n</div>"

/***/ },

/***/ 836:
/***/ function(module, exports) {

module.exports = "<div id=\"settings-container\">\r\n    <div class=\"col-xs-12\">\r\n        <div class=\"fileSelect\">\r\n            <label for=\"input-avatar\" class=\"btn btn-default btn-sm picture-btn\">Browse</label>\r\n            <input type=\"file\" (change)=\"onProfilePictureUpload($event)\" id=\"input-avatar\" class=\"hidden\">\r\n            <div class=\"fileName\">\r\n                {{fileName}}\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <button (click)=\"uploadProfilePicture()\" class=\"btn btn-primary btn-sm picture-btn\">Upload</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xs-12\"><hr></div>\r\n    <div class=\"col-xs-12 personal-information\">\r\n        <h2 class=\"form-legend\">Personal Information</h2>\r\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && updateInformation(); f.reset()\" #f=\"ngForm\" novalidate>\r\n            <div class=\"form-group\">\r\n                <label for=\"firstName\" class=\"col-xs-12 col-sm-3\">First Name</label>\r\n                <div class=\"col-xs-12 col-sm-8\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required [placeholder]=\"uFirstName\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"lastName\" class=\"col-xs-12 col-sm-3\">Last Name</label>\r\n                <div class=\"col-xs-12 col-sm-8\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required [placeholder]=\"uLastName\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"email\" class=\"col-xs-12 col-sm-3\">Email</label>\r\n                <div class=\"col-xs-12 col-sm-8\">\r\n                    <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required [placeholder]=\"uEmail\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-8 col-sm-offset-3 information-submit\">\r\n                <div class=\"form-group\">\r\n                    <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!f.form.valid\">Update information</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"col-xs-12\"><hr></div>\r\n    <div class=\"col-xs-12 password\">\r\n        <h2 class=\"form-legend\">Password</h2>\r\n        <form name=\"form\" (ngSubmit)=\"f2.form.valid && updatePassword(); f2.reset()\" #f2=\"ngForm\" novalidate>\r\n            <div class=\"form-group\">\r\n                <label for=\"oldPassword\" class=\"col-xs-12 col-sm-3\">Old password</label>\r\n                <div class=\"col-xs-12 col-sm-8\">\r\n                    <input type=\"password\" class=\"form-control\" name=\"oldPassword\" [(ngModel)]=\"model.oldPassword\" #oldPassword=\"ngModel\" required />\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"newPassword\" class=\"col-xs-12 col-sm-3\">New password</label>\r\n                <div class=\"col-xs-12 col-sm-8\">\r\n                    <input type=\"password\" class=\"form-control\" name=\"newPassword\" [(ngModel)]=\"model.newPassword\" #newPassword=\"ngModel\" required/>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"confirmPassword\" class=\"col-xs-12 col-sm-3\">Confirm password</label>\r\n                <div class=\"col-xs-12 col-sm-8\">\r\n                    <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" [(ngModel)]=\"model.confirmPassword\" #confirmPassword=\"ngModel\" required/>\r\n                </div>\r\n                <div *ngIf=\"newPassword.value != confirmPassword.value\" class=\"help-block col-xs-12 col-sm-8\"> Passwords should match </div>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-8 col-sm-offset-3 password-submit\">\r\n                <div class=\"form-group\">\r\n                    <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!f2.form.valid || newPassword.value != confirmPassword.value\">Update password</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ },

/***/ 837:
/***/ function(module, exports) {

module.exports = "<div class=\"songs-list\">\r\n    <ul>\r\n        <li class=\"col-xs-12 container\">\r\n            <div class=\"song-info-header\">\r\n                <div class=\"song-container\">\r\n                    <div class=\"col-sm-3\">\r\n                        SONG\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                        ARTIST\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                        ALBUM\r\n                    </div>\r\n                    <div class=\"col-sm-2\">\r\n                        DURATION\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li *ngFor=\"let song of songsList | paginate: { id: 'songs', itemsPerPage: 6, currentPage: v }\" class=\"col-xs-12 container\">\r\n            <div class=\"song-info\">\r\n                <div class=\"song-container\">\r\n                    <div class=\"col-sm-3\">\r\n                        {{song.name}}\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                        {{song.artist}}\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                        {{song.album}}\r\n                    </div>\r\n                    <div class=\"col-sm-2\">\r\n                        {{song.duration | songDuration}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class=\"songs-pagination\">\r\n    <pagination-controls id=\"songs\" directionLinks=\"false\" maxSize=\"3\" (pageChange)=\"v = $event\"></pagination-controls>\r\n</div>"

/***/ },

/***/ 838:
/***/ function(module, exports) {

module.exports = "<div class=\"songs-list\">\r\n    <ul>\r\n        <li class=\"col-xs-12 container\">\r\n            <div class=\"song-info-header\">\r\n                <div class=\"song-container\">\r\n                    <div class=\"col-sm-3\">\r\n                        SONG\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                        ARTIST\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                        ALBUM\r\n                    </div>\r\n                    <div class=\"col-sm-2\">\r\n                        DURATION\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li *ngFor=\"let song of songs | search: parameters:searchPattern | sort: sortType:sortOrder | paginate: { itemsPerPage: 15, currentPage: p }\" class=\"col-xs-12 container\">\r\n            <div class=\"song-info\">\r\n                <div class=\"song-container\">\r\n                    <div class=\"col-sm-3\">\r\n                        {{song.name}}\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                        {{song.artist}}\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                        {{song.album}}\r\n                    </div>\r\n                    <div class=\"col-sm-2\">\r\n                        {{song.duration | songDuration}}\r\n                    </div>\r\n                    <div *ngIf=\"showIcons && !song.contains\" class=\"col-sm-1\">\r\n                        <a [id]=\"song._id\" (click)=\"addFavoriteSong($event); song.contains=true\" href=\"#\">\r\n                            <img src=\"../../../../../assets/images/favorite-icon.png\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                    <div *ngIf=\"showIcons && song.contains\" class=\"col-sm-1\">\r\n                        <a [id]=\"song._id\" (click)=\"removeFavoriteSong($event); song.contains=false\" href=\"#\">\r\n                            <img src=\"../../../../../assets/images/unfavorite-icon.png\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class=\"songs-pagination\">\r\n    <pagination-controls directionLinks=\"false\" maxSize=\"3\" (pageChange)=\"p = $event\"></pagination-controls>\r\n</div>"

/***/ },

/***/ 839:
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-10 col-xs-offset-1 songs-content\">\r\n    <div class=\"songs-form\">\r\n        <div class=\"form-group col-sm-4 col-lg-4\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchPattern\" placeholder=\"Search...\" />\r\n        </div>\r\n        <div class=\"form-group col-sm-8 col-lg-8\">\r\n            <div class=\"col-xs-12 col-sm-6 songs-option\">\r\n                <label class=\"col-xs-4 control-label songs-sub-option songs-sub-option-label\" for=\"sort-type\">Order by</label>\r\n                <div class=\"col-xs-8 songs-sub-option\">\r\n                    <select class=\"form-control\" id=\"sort-type\" [(ngModel)]=\"sortType\">\r\n                        <option *ngFor=\"let type of sortTypes\" [value]=\"type\">{{type}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-6 songs-option\">\r\n                <label class=\"col-xs-4 control-label songs-sub-option songs-sub-option-label\" for=\"sort-order\">Order in</label>\r\n                <div class=\"col-xs-8 songs-sub-option\">\r\n                    <select class=\"form-control\" id=\"sort-order\" [(ngModel)]=\"sortOrder\">\r\n                        <option *ngFor=\"let order of sortOrders\" [value]=\"order\">{{order}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <app-songs-list (addFavoriteActivated)=\"addFavoriteSong($event)\" (removeFavoriteActivated)=\"removeFavoriteSong($event)\" [favoriteSongs]=\"favoriteSongs\" [showIcons]=\"showIcons\" [songs]=\"songs\" [searchPattern]=\"searchPattern\" [parameters]=\"parameters\" [sortType]=\"sortType\" [sortOrder]=\"sortOrder\"></app-songs-list>\r\n    <simple-notifications [options]=\"options\"></simple-notifications>\r\n</div>"

/***/ },

/***/ 840:
/***/ function(module, exports) {

module.exports = "<div class=\"users-list\">\r\n    <ul>\r\n        <li *ngFor=\"let user of users | search: parameters:searchPattern | sort: sortType:sortOrder | paginate: { itemsPerPage: 12, currentPage: p }\" class=\"col-xs-6 col-sm-3 col-md-2 container\">\r\n            <div class=\"user-info\">\r\n                <a [routerLink]=\"['/users/',user.username]\" [routerLinkActive]=\"['active']\">\r\n                    <div class=\"user-container\">\r\n                        <div class=\"image-container\">\r\n                            <img src=\"../../../assets/images/profile-pictures/{{user.avatar}}\" default=\"../../../assets/images/profile-pictures/default-avatar.jpg\" alt=\"{{user.username}}\" />\r\n                        </div>\r\n                        <p class=\"username\">{{user.username}}</p>\r\n                        <p class=\"name\">{{user.firstName}} {{user.lastName}}</p>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class=\"users-pagination\">\r\n    <pagination-controls directionLinks=\"false\" maxSize=\"3\" (pageChange)=\"p = $event\"></pagination-controls>\r\n</div>"

/***/ },

/***/ 841:
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-10 col-xs-offset-1 users-content\">\r\n    <div class=\"users-form\">\r\n        <div class=\"form-group col-sm-4 col-lg-4\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchPattern\" placeholder=\"Search...\" />\r\n        </div>\r\n        <div class=\"form-group col-sm-8 col-lg-8\">\r\n            <div class=\"col-xs-12 col-sm-6 users-option\">\r\n                <label class=\"col-xs-4 control-label users-sub-option users-sub-option-label\" for=\"sort-type\">Order by</label>\r\n                <div class=\"col-xs-8 users-sub-option\">\r\n                    <select class=\"form-control\" id=\"sort-type\" [(ngModel)]=\"sortType\">\r\n                        <option *ngFor=\"let type of sortTypes\" [value]=\"type\">{{type}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-6 users-option\">\r\n                <label class=\"col-xs-4 control-label users-sub-option users-sub-option-label\" for=\"sort-order\">Order in</label>\r\n                <div class=\"col-xs-8 users-sub-option\">\r\n                    <select class=\"form-control\" id=\"sort-order\" [(ngModel)]=\"sortOrder\">\r\n                        <option *ngFor=\"let order of sortOrders\" [value]=\"order\">{{order}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <app-users-list [users]=\"users\" [searchPattern]=\"searchPattern\" [parameters]=\"parameters\" [sortType]=\"sortType\" [sortOrder]=\"sortOrder\"></app-users-list>\r\n</div>"

/***/ },

/***/ 842:
/***/ function(module, exports) {

module.exports = "<div class=\"albums-list\">\r\n    <ul>\r\n        <li *ngFor=\"let album of albumsList | paginate: { id: 'albums', itemsPerPage: 6, currentPage: t }\" class=\"col-xs-4 col-sm-3 col-md-2 container\">\r\n            <div class=\"album-info\">\r\n                <a [routerLink]=\"['/albums/',album._id]\" [routerLinkActive]=\"['active']\">\r\n                    <div class=\"album-container\">\r\n                        <div class=\"image-container\">\r\n                            <img src=\"../../../assets/images/album-pictures/{{album.imgUrl}}\" default=\"../../../assets/images/album-pictures/default-album.jpg\" alt=\"{{album.name}}\"/>\r\n                        </div>\r\n                        <p class=\"albumname\">{{album.name}}</p>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class=\"albums-pagination\">\r\n    <pagination-controls id=\"albums\" directionLinks=\"false\" maxSize=\"3\" (pageChange)=\"t = $event\"></pagination-controls>\r\n</div>"

/***/ },

/***/ 843:
/***/ function(module, exports) {

module.exports = "<div class=\"artists-list\">\r\n    <ul>\r\n        <li *ngFor=\"let artist of artistsList | paginate: { id: 'artists', itemsPerPage: 6, currentPage: r }\" class=\"col-xs-4 col-sm-3 col-md-2 container\">\r\n            <div class=\"artist-info\">\r\n                <a [routerLink]=\"['/artists/',artist._id]\" [routerLinkActive]=\"['active']\">\r\n                    <div class=\"artist-container\">\r\n                        <div class=\"image-container\">\r\n                            <img src=\"../../../assets/images/artist-pictures/{{artist.imgUrl}}\" default=\"../../../assets/images/artist-pictures/default-artist.jpg\" alt=\"{{artist.name}}\"/>\r\n                        </div>\r\n                        <p class=\"artistname\">{{artist.name}}</p>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class=\"artists-pagination\">\r\n    <pagination-controls id=\"artists\" directionLinks=\"false\" maxSize=\"3\" (pageChange)=\"r = $event\"></pagination-controls>\r\n</div>"

/***/ },

/***/ 844:
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-10 col-xs-offset-1 detailed-user-content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"row main-row profile-header\">\r\n                <div class=\"col-sm-3 col-md-2 col-lg-2 profile-image\">\r\n                    <div class=\"image-container\">\r\n                        <img src=\"../../../assets/images/profile-pictures/{{avatar}}\" default=\"../../../assets/images/profile-pictures/default-avatar.jpg\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6 col-md-8 col-lg-8 profile-information\">\r\n                    <div>\r\n                        <div class=\"row\">\r\n                            <h1 class=\"profile-username\">{{username}}</h1></div>\r\n                        <div class=\"row\">\r\n                            <h2 class=\"profile-names\">{{firstName}} {{lastName}}</h2></div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"currentUsername != username\" class=\"col-sm-3 col-md-3 col-lg-2 profile-follow\">\r\n                    <button *ngIf=\"!followed\" (click)=\"follow()\" class=\"btn btn-primary btn-follow\">FOLLOW</button>\r\n                    <button *ngIf=\"followed\" (click)=\"unfollow()\" class=\"btn btn-default btn-follow\">UNFOLLOW</button>\r\n                </div>\r\n            </div>\r\n            <hr>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n            <ul class=\"nav nav-pills nav-stacked\">\r\n                <li class=\"active\"><a href=\"#artists\" data-toggle=\"pill\" aria-expanded=\"true\">Artists</a></li>\r\n                <li class=\"\"><a href=\"#albums\" data-toggle=\"pill\" aria-expanded=\"true\">Albums</a></li>\r\n                <li><a href=\"#songs\" data-toggle=\"pill\" aria-expanded=\"false\">Songs</a></li>\r\n                <li><a href=\"#followers\" data-toggle=\"pill\" aria-expanded=\"false\">Followers</a></li>\r\n                <li><a href=\"#followings\" data-toggle=\"pill\" aria-expanded=\"false\">Followings</a></li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"col-md-9\">\r\n            <div class=\"tab-content\" id=\"my-tab-content\">\r\n                <div class=\"tab-pane fade active in\" id=\"artists\">\r\n                    <app-favorite-artists-list [artistsList]=\"favoriteArtists\"></app-favorite-artists-list>\r\n                </div>\r\n                <div class=\"tab-pane fade\" id=\"albums\">\r\n                    <div id=\"albums-info\">\r\n                        <app-favorite-albums-list [albumsList]=\"favoriteAlbums\"></app-favorite-albums-list>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tab-pane fade\" id=\"songs\">\r\n                    <div id=\"songs-info\">\r\n                        <app-favorite-songs-list [songsList]=\"favoriteSongs\"></app-favorite-songs-list>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tab-pane fade\" id=\"followers\">\r\n                    <app-follow-list [followList]=\"followers\"></app-follow-list>\r\n                </div>\r\n                <div class=\"tab-pane fade\" id=\"followings\">\r\n                    <app-follow-list [followList]=\"followings\"></app-follow-list>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <simple-notifications [options]=\"options \"></simple-notifications>\r\n</div>"

/***/ },

/***/ 845:
/***/ function(module, exports) {

module.exports = "<div class=\"users-list\">\r\n    <ul>\r\n        <li *ngFor=\"let follower of followList | paginate: { id: 'followers', itemsPerPage: 6, currentPage: s }\" class=\"col-xs-4 col-sm-3 col-md-2 container\">\r\n            <div class=\"user-info\">\r\n                <a [routerLink]=\"['/users/',follower.username]\" [routerLinkActive]=\"['active']\">\r\n                    <div class=\"user-container\">\r\n                        <div class=\"image-container\">\r\n                            <img src=\"../../../assets/images/profile-pictures/{{follower.avatar}}\" default=\"../../../assets/images/profile-pictures/default-avatar.jpg\" alt=\"{{follower.username}}\"/>\r\n                        </div>\r\n                        <p class=\"username\">{{follower.username}}</p>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class=\"users-pagination\">\r\n    <pagination-controls id=\"followers\" directionLinks=\"false\" maxSize=\"3\" (pageChange)=\"s = $event\"></pagination-controls>\r\n</div>"

/***/ },

/***/ 846:
/***/ function(module, exports) {

module.exports = "<div class=\"songs-list\">\r\n    <ul>\r\n        <li class=\"col-xs-12 container\">\r\n            <div class=\"song-info-header\">\r\n                <div class=\"song-container\">\r\n                    <div class=\"col-sm-3\">\r\n                        SONG\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                        ARTIST\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                        ALBUM\r\n                    </div>\r\n                    <div class=\"col-sm-2\">\r\n                        DURATION\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li *ngFor=\"let song of songsList | paginate: { id: 'songs', itemsPerPage: 6, currentPage: v }\" class=\"col-xs-12 container\">\r\n            <div class=\"song-info\">\r\n                <div class=\"song-container\">\r\n                    <div class=\"col-sm-3\">\r\n                        {{song.name}}\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                        {{song.artist}}\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                        {{song.album}}\r\n                    </div>\r\n                    <div class=\"col-sm-2\">\r\n                        {{song.duration | songDuration}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class=\"songs-pagination\">\r\n    <pagination-controls id=\"songs\" directionLinks=\"false\" maxSize=\"3\" (pageChange)=\"v = $event\"></pagination-controls>\r\n</div>"

/***/ },

/***/ 864:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(438);


/***/ },

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__default_image_backup_directive__ = __webpack_require__(563);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DirectivesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__default_image_backup_directive__["a" /* DefaultImageDirective */],
            ],
            providers: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__default_image_backup_directive__["a" /* DefaultImageDirective */]]
        }), 
        __metadata('design:paramtypes', [])
    ], DirectivesModule);
    return DirectivesModule;
}());
//# sourceMappingURL=D:/Telerik Academy/Angular2/angular2-course-project/Angular2-Course-Project/src/directives.module.js.map

/***/ }

},[864]);
//# sourceMappingURL=main.bundle.map