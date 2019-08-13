/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/db/chirps.ts":
/*!*********************************!*\
  !*** ./src/server/db/chirps.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar _this = this;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/server/db/index.ts\");\nvar all = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {\n    return [2 /*return*/, index_1.Query('SELECT users.name, chirps.* FROM chirps JOIN users ON users.id = chirps.userid ORDER BY _created DESC')];\n}); }); };\nvar one = function (id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {\n    return [2 /*return*/, index_1.Query('SELECT users.name, chirps.* FROM chirps JOIN users ON users.id = chirps.userid WHERE userid = ?', [id])];\n}); }); };\nvar post = function (userid, chirp, location) { return __awaiter(_this, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        return [2 /*return*/, index_1.Query('INSERT INTO chirps (userid, chirp, location) value (?)', [userid, chirp, location])];\n    });\n}); };\nvar remove = function (id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {\n    return [2 /*return*/, index_1.Query('DELETE FROM chirps WHERE id = ?', [id])];\n}); }); };\nvar update = function (id, chirp) { return __awaiter(_this, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        return [2 /*return*/, index_1.Query('UPDATE chirps SET chirp = ? WHERE id = ' + id + '', [chirp])];\n    });\n}); };\nexports.default = {\n    all: all,\n    one: one,\n    post: post,\n    remove: remove,\n    update: update\n};\n\n\n//# sourceURL=webpack:///./src/server/db/chirps.ts?");

/***/ }),

/***/ "./src/server/db/index.ts":
/*!********************************!*\
  !*** ./src/server/db/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\nvar chirps_1 = __webpack_require__(/*! ./chirps */ \"./src/server/db/chirps.ts\");\nvar mentions_1 = __webpack_require__(/*! ./mentions */ \"./src/server/db/mentions.ts\");\nvar users_1 = __webpack_require__(/*! ./users */ \"./src/server/db/users.ts\");\nexports.Connection = mysql.createConnection({\n    host: 'localhost',\n    port: 3306,\n    user: 'chirprapp',\n    password: 'null',\n    database: 'chirper'\n});\n//Makes Query to db\nexports.Query = function (query, values) {\n    return new Promise(function (resolve, reject) {\n        exports.Connection.query(query, [values], function (err, results) {\n            if (err)\n                return reject(err);\n            return resolve(results);\n        });\n    });\n};\nexports.default = {\n    Chirps: chirps_1.default,\n    Mentions: mentions_1.default,\n    Users: users_1.default\n};\n\n\n//# sourceURL=webpack:///./src/server/db/index.ts?");

/***/ }),

/***/ "./src/server/db/mentions.ts":
/*!***********************************!*\
  !*** ./src/server/db/mentions.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/server/db/index.ts\");\nvar getUserMentions = function (userid) { return index_1.Query('CALL spGetMentions(?);', [userid]); };\nexports.default = {\n    getUserMentions: getUserMentions\n};\n\n\n//# sourceURL=webpack:///./src/server/db/mentions.ts?");

/***/ }),

/***/ "./src/server/db/users.ts":
/*!********************************!*\
  !*** ./src/server/db/users.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/server/db/index.ts\");\nvar getAllUsers = function () { return index_1.Query('SELECT id, name FROM users;'); };\nvar findUserByName = function (name) { return index_1.Query('CALL spFindUserByName(?)', [name]); };\nexports.default = {\n    getAllUsers: getAllUsers,\n    findUserByName: findUserByName\n};\n\n\n//# sourceURL=webpack:///./src/server/db/users.ts?");

/***/ }),

/***/ "./src/server/routes.ts":
/*!******************************!*\
  !*** ./src/server/routes.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar _this = this;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express = __webpack_require__(/*! express */ \"express\");\nvar db_1 = __webpack_require__(/*! ./db */ \"./src/server/db/index.ts\");\nvar router = express.Router();\nrouter.get('/api/hello', function (req, res, next) {\n    res.json('World');\n});\nrouter.get('/api/chirps', function (req, res) { return __awaiter(_this, void 0, void 0, function () {\n    var _a, _b, error_1;\n    return __generator(this, function (_c) {\n        switch (_c.label) {\n            case 0:\n                _c.trys.push([0, 2, , 3]);\n                _b = (_a = res).json;\n                return [4 /*yield*/, db_1.default.Chirps.all()];\n            case 1:\n                _b.apply(_a, [_c.sent()]);\n                return [3 /*break*/, 3];\n            case 2:\n                error_1 = _c.sent();\n                console.log(error_1);\n                res.sendStatus(500);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.get('/api/chirps/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {\n    var _a, _b, error_2;\n    return __generator(this, function (_c) {\n        switch (_c.label) {\n            case 0:\n                _c.trys.push([0, 2, , 3]);\n                _b = (_a = res).json;\n                return [4 /*yield*/, db_1.default.Chirps.one(req.params.id)];\n            case 1:\n                _b.apply(_a, [(_c.sent())]);\n                return [3 /*break*/, 3];\n            case 2:\n                error_2 = _c.sent();\n                console.log(error_2);\n                res.sendStatus(500);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.post('/api/chirps', function (req, res) { return __awaiter(_this, void 0, void 0, function () {\n    var _a, _b, error_3;\n    return __generator(this, function (_c) {\n        switch (_c.label) {\n            case 0:\n                _c.trys.push([0, 2, , 3]);\n                _b = (_a = res).json;\n                return [4 /*yield*/, db_1.default.Chirps.post(req.body.userid, req.body.chirp, req.body.location)];\n            case 1:\n                _b.apply(_a, [(_c.sent())]);\n                return [3 /*break*/, 3];\n            case 2:\n                error_3 = _c.sent();\n                console.log(error_3);\n                res.sendStatus(500);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.delete('/api/chirps/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {\n    var _a, _b, error_4;\n    return __generator(this, function (_c) {\n        switch (_c.label) {\n            case 0:\n                _c.trys.push([0, 2, , 3]);\n                _b = (_a = res).json;\n                return [4 /*yield*/, db_1.default.Chirps.remove(req.params.id)];\n            case 1:\n                _b.apply(_a, [(_c.sent())]);\n                return [3 /*break*/, 3];\n            case 2:\n                error_4 = _c.sent();\n                console.log(error_4);\n                res.sendStatus(500);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.put('/api/chirps/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {\n    var _a, _b, error_5;\n    return __generator(this, function (_c) {\n        switch (_c.label) {\n            case 0:\n                _c.trys.push([0, 2, , 3]);\n                _b = (_a = res).json;\n                return [4 /*yield*/, db_1.default.Chirps.update(req.params.id, req.body.chirp)];\n            case 1:\n                _b.apply(_a, [(_c.sent())]);\n                return [3 /*break*/, 3];\n            case 2:\n                error_5 = _c.sent();\n                console.log(error_5);\n                res.sendStatus(500);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.get('/api/mentions/:userid', function (req, res) { return __awaiter(_this, void 0, void 0, function () {\n    var r, error_6;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, db_1.default.Mentions.getUserMentions(req.params.userid)];\n            case 1:\n                r = (_a.sent())[0];\n                res.json(r);\n                return [3 /*break*/, 3];\n            case 2:\n                error_6 = _a.sent();\n                console.log(error_6);\n                res.sendStatus(500);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.get('/api/users/', function (req, res) { return __awaiter(_this, void 0, void 0, function () {\n    var r, error_7;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, db_1.default.Users.getAllUsers()];\n            case 1:\n                r = _a.sent();\n                res.json(r);\n                return [3 /*break*/, 3];\n            case 2:\n                error_7 = _a.sent();\n                console.log(error_7);\n                res.sendStatus(500);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar path = __webpack_require__(/*! path */ \"path\");\nvar express = __webpack_require__(/*! express */ \"express\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes.ts\");\nvar app = express();\nvar p = path.join(__dirname, '../public');\nconsole.log(p);\napp.use(express.static(p));\napp.use(express.json());\napp.use(routes_1.default);\napp.get('*', function (req, res) {\n    res.sendFile(path.join(__dirname, '../public/index.html'));\n});\nvar port = process.env.PORT || 3000;\napp.listen(port, function () {\n    console.log(\"Server listening on port: \" + port);\n});\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql\");\n\n//# sourceURL=webpack:///external_%22mysql%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });