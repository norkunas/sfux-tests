(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_live_component_styles_live_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-live-component/styles/live.css */ "./vendor/symfony/ux-live-component/assets/styles/live.css");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'live': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-live-component/dist/live_controller.js */ "./vendor/symfony/ux-live-component/assets/dist/live_controller.js")),
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application


/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./vendor/symfony/ux-live-component/assets/dist/live_controller.js":
/*!*************************************************************************!*\
  !*** ./vendor/symfony/ux-live-component/assets/dist/live_controller.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component),
/* harmony export */   "default": () => (/* binding */ default_1),
/* harmony export */   "getComponent": () => (/* binding */ getComponent)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.dot-all.js */ "./node_modules/core-js/modules/es.regexp.dot-all.js");
/* harmony import */ var core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.regexp.sticky.js */ "./node_modules/core-js/modules/es.regexp.sticky.js");
/* harmony import */ var core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




























































function parseDirectives(content) {
  var directives = [];
  if (!content) {
    return directives;
  }
  var currentActionName = '';
  var currentArgumentName = '';
  var currentArgumentValue = '';
  var currentArguments = [];
  var currentNamedArguments = {};
  var currentModifiers = [];
  var state = 'action';
  var getLastActionName = function getLastActionName() {
    if (currentActionName) {
      return currentActionName;
    }
    if (directives.length === 0) {
      throw new Error('Could not find any directives');
    }
    return directives[directives.length - 1].action;
  };
  var pushInstruction = function pushInstruction() {
    directives.push({
      action: currentActionName,
      args: currentArguments,
      named: currentNamedArguments,
      modifiers: currentModifiers,
      getString: function getString() {
        return content;
      }
    });
    currentActionName = '';
    currentArgumentName = '';
    currentArgumentValue = '';
    currentArguments = [];
    currentNamedArguments = {};
    currentModifiers = [];
    state = 'action';
  };
  var pushArgument = function pushArgument() {
    var mixedArgTypesError = function mixedArgTypesError() {
      throw new Error("Normal and named arguments cannot be mixed inside \"".concat(currentActionName, "()\""));
    };
    if (currentArgumentName) {
      if (currentArguments.length > 0) {
        mixedArgTypesError();
      }
      currentNamedArguments[currentArgumentName.trim()] = currentArgumentValue;
    } else {
      if (Object.keys(currentNamedArguments).length > 0) {
        mixedArgTypesError();
      }
      currentArguments.push(currentArgumentValue.trim());
    }
    currentArgumentName = '';
    currentArgumentValue = '';
  };
  var pushModifier = function pushModifier() {
    if (currentArguments.length > 1) {
      throw new Error("The modifier \"".concat(currentActionName, "()\" does not support multiple arguments."));
    }
    if (Object.keys(currentNamedArguments).length > 0) {
      throw new Error("The modifier \"".concat(currentActionName, "()\" does not support named arguments."));
    }
    currentModifiers.push({
      name: currentActionName,
      value: currentArguments.length > 0 ? currentArguments[0] : null
    });
    currentActionName = '';
    currentArgumentName = '';
    currentArguments = [];
    state = 'action';
  };
  for (var i = 0; i < content.length; i++) {
    var _char = content[i];
    switch (state) {
      case 'action':
        if (_char === '(') {
          state = 'arguments';
          break;
        }
        if (_char === ' ') {
          if (currentActionName) {
            pushInstruction();
          }
          break;
        }
        if (_char === '|') {
          pushModifier();
          break;
        }
        currentActionName += _char;
        break;
      case 'arguments':
        if (_char === ')') {
          pushArgument();
          state = 'after_arguments';
          break;
        }
        if (_char === ',') {
          pushArgument();
          break;
        }
        if (_char === '=') {
          currentArgumentName = currentArgumentValue;
          currentArgumentValue = '';
          break;
        }
        currentArgumentValue += _char;
        break;
      case 'after_arguments':
        if (_char === '|') {
          pushModifier();
          break;
        }
        if (_char !== ' ') {
          throw new Error("Missing space after ".concat(getLastActionName(), "()"));
        }
        pushInstruction();
        break;
    }
  }
  switch (state) {
    case 'action':
    case 'after_arguments':
      if (currentActionName) {
        pushInstruction();
      }
      break;
    default:
      throw new Error("Did you forget to add a closing \")\" after \"".concat(currentActionName, "\"?"));
  }
  return directives;
}
function combineSpacedArray(parts) {
  var finalParts = [];
  parts.forEach(function (part) {
    finalParts.push.apply(finalParts, _toConsumableArray(part.split(' ')));
  });
  return finalParts;
}
function normalizeModelName(model) {
  return model.replace(/\[]$/, '').split('[').map(function (s) {
    return s.replace(']', '');
  }).join('.');
}
function getValueFromElement(element, valueStore) {
  if (element instanceof HTMLInputElement) {
    if (element.type === 'checkbox') {
      var modelNameData = getModelDirectiveFromElement(element);
      if (modelNameData === null) {
        return null;
      }
      var modelValue = valueStore.get(modelNameData.action);
      if (Array.isArray(modelValue)) {
        return getMultipleCheckboxValue(element, modelValue);
      }
      return element.checked ? inputValue(element) : null;
    }
    return inputValue(element);
  }
  if (element instanceof HTMLSelectElement) {
    if (element.multiple) {
      return Array.from(element.selectedOptions).map(function (el) {
        return el.value;
      });
    }
    return element.value;
  }
  if (element.dataset.value) {
    return element.dataset.value;
  }
  if ('value' in element) {
    return element.value;
  }
  if (element.hasAttribute('value')) {
    return element.getAttribute('value');
  }
  return null;
}
function setValueOnElement(element, value) {
  if (element instanceof HTMLInputElement) {
    if (element.type === 'file') {
      return;
    }
    if (element.type === 'radio') {
      element.checked = element.value == value;
      return;
    }
    if (element.type === 'checkbox') {
      if (Array.isArray(value)) {
        var valueFound = false;
        value.forEach(function (val) {
          if (val == element.value) {
            valueFound = true;
          }
        });
        element.checked = valueFound;
      } else {
        element.checked = element.value == value;
      }
      return;
    }
  }
  if (element instanceof HTMLSelectElement) {
    var arrayWrappedValue = [].concat(value).map(function (value) {
      return value + '';
    });
    Array.from(element.options).forEach(function (option) {
      option.selected = arrayWrappedValue.includes(option.value);
    });
    return;
  }
  value = value === undefined ? '' : value;
  element.value = value;
}
function getAllModelDirectiveFromElements(element) {
  if (!element.dataset.model) {
    return [];
  }
  var directives = parseDirectives(element.dataset.model);
  directives.forEach(function (directive) {
    if (directive.args.length > 0 || directive.named.length > 0) {
      throw new Error("The data-model=\"".concat(element.dataset.model, "\" format is invalid: it does not support passing arguments to the model."));
    }
    directive.action = normalizeModelName(directive.action);
  });
  return directives;
}
function getModelDirectiveFromElement(element) {
  var throwOnMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var dataModelDirectives = getAllModelDirectiveFromElements(element);
  if (dataModelDirectives.length > 0) {
    return dataModelDirectives[0];
  }
  if (element.getAttribute('name')) {
    var formElement = element.closest('form');
    if (formElement && 'model' in formElement.dataset) {
      var directives = parseDirectives(formElement.dataset.model || '*');
      var directive = directives[0];
      if (directive.args.length > 0 || directive.named.length > 0) {
        throw new Error("The data-model=\"".concat(formElement.dataset.model, "\" format is invalid: it does not support passing arguments to the model."));
      }
      directive.action = normalizeModelName(element.getAttribute('name'));
      return directive;
    }
  }
  if (!throwOnMissing) {
    return null;
  }
  throw new Error("Cannot determine the model name for \"".concat(getElementAsTagText(element), "\": the element must either have a \"data-model\" (or \"name\" attribute living inside a <form data-model=\"*\">)."));
}
function elementBelongsToThisComponent(element, component) {
  if (component.element === element) {
    return true;
  }
  if (!component.element.contains(element)) {
    return false;
  }
  var foundChildComponent = false;
  component.getChildren().forEach(function (childComponent) {
    if (foundChildComponent) {
      return;
    }
    if (childComponent.element === element || childComponent.element.contains(element)) {
      foundChildComponent = true;
    }
  });
  return !foundChildComponent;
}
function cloneHTMLElement(element) {
  var newElement = element.cloneNode(true);
  if (!(newElement instanceof HTMLElement)) {
    throw new Error('Could not clone element');
  }
  return newElement;
}
function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  if (template.content.childElementCount > 1) {
    throw new Error("Component HTML contains ".concat(template.content.childElementCount, " elements, but only 1 root element is allowed."));
  }
  var child = template.content.firstElementChild;
  if (!child) {
    throw new Error('Child not found');
  }
  if (!(child instanceof HTMLElement)) {
    throw new Error("Created element is not an HTMLElement: ".concat(html.trim()));
  }
  return child;
}
function cloneElementWithNewTagName(element, newTag) {
  var originalTag = element.tagName;
  var startRX = new RegExp('^<' + originalTag, 'i');
  var endRX = new RegExp(originalTag + '>$', 'i');
  var startSubst = '<' + newTag;
  var endSubst = newTag + '>';
  var newHTML = element.outerHTML.replace(startRX, startSubst).replace(endRX, endSubst);
  return htmlToElement(newHTML);
}
function getElementAsTagText(element) {
  return element.innerHTML ? element.outerHTML.slice(0, element.outerHTML.indexOf(element.innerHTML)) : element.outerHTML;
}
var getMultipleCheckboxValue = function getMultipleCheckboxValue(element, currentValues) {
  var value = inputValue(element);
  var index = currentValues.indexOf(value);
  if (element.checked) {
    if (index === -1) {
      currentValues.push(value);
    }
    return currentValues;
  }
  if (index > -1) {
    currentValues.splice(index, 1);
  }
  return currentValues;
};
var inputValue = function inputValue(element) {
  return element.dataset.value ? element.dataset.value : element.value;
};
function getDeepData(data, propertyPath) {
  var _parseDeepData = parseDeepData(data, propertyPath),
    currentLevelData = _parseDeepData.currentLevelData,
    finalKey = _parseDeepData.finalKey;
  if (currentLevelData === undefined) {
    return undefined;
  }
  return currentLevelData[finalKey];
}
var parseDeepData = function parseDeepData(data, propertyPath) {
  var finalData = JSON.parse(JSON.stringify(data));
  var currentLevelData = finalData;
  var parts = propertyPath.split('.');
  for (var i = 0; i < parts.length - 1; i++) {
    currentLevelData = currentLevelData[parts[i]];
  }
  var finalKey = parts[parts.length - 1];
  return {
    currentLevelData: currentLevelData,
    finalData: finalData,
    finalKey: finalKey,
    parts: parts
  };
};
function setDeepData(data, propertyPath, value) {
  var _parseDeepData2 = parseDeepData(data, propertyPath),
    currentLevelData = _parseDeepData2.currentLevelData,
    finalData = _parseDeepData2.finalData,
    finalKey = _parseDeepData2.finalKey,
    parts = _parseDeepData2.parts;
  if (_typeof(currentLevelData) !== 'object') {
    var lastPart = parts.pop();
    if (typeof currentLevelData === 'undefined') {
      throw new Error("Cannot set data-model=\"".concat(propertyPath, "\". The parent \"").concat(parts.join('.'), "\" data does not exist. Did you forget to expose \"").concat(parts[0], "\" as a LiveProp?"));
    }
    throw new Error("Cannot set data-model=\"".concat(propertyPath, "\". The parent \"").concat(parts.join('.'), "\" data does not appear to be an object (it's \"").concat(currentLevelData, "\"). Did you forget to add exposed={\"").concat(lastPart, "\"} to its LiveProp?"));
  }
  if (currentLevelData[finalKey] === undefined) {
    var _lastPart = parts.pop();
    if (parts.length > 0) {
      throw new Error("The model name ".concat(propertyPath, " was never initialized. Did you forget to add exposed={\"").concat(_lastPart, "\"} to its LiveProp?"));
    } else {
      throw new Error("The model name \"".concat(propertyPath, "\" was never initialized. Did you forget to expose \"").concat(_lastPart, "\" as a LiveProp? Available models values are: ").concat(Object.keys(data).length > 0 ? Object.keys(data).join(', ') : '(none)'));
    }
  }
  currentLevelData[finalKey] = value;
  return finalData;
}
var ValueStore = /*#__PURE__*/function () {
  function ValueStore(props) {
    _classCallCheck(this, ValueStore);
    this.identifierKey = '@id';
    this.updatedModels = [];
    this.props = {};
    this.props = props;
  }
  _createClass(ValueStore, [{
    key: "get",
    value: function get(name) {
      var normalizedName = normalizeModelName(name);
      var value = getDeepData(this.props, normalizedName);
      if (null === value) {
        return value;
      }
      if (this.isPropNameTopLevel(normalizedName) && _typeof(value) === 'object' && value[this.identifierKey] !== undefined) {
        return value[this.identifierKey];
      }
      return value;
    }
  }, {
    key: "has",
    value: function has(name) {
      return this.get(name) !== undefined;
    }
  }, {
    key: "set",
    value: function set(name, value) {
      var normalizedName = normalizeModelName(name);
      if (this.isPropNameTopLevel(normalizedName) && this.props[normalizedName] !== null && _typeof(this.props[normalizedName]) === 'object' && this.props[normalizedName][this.identifierKey] !== undefined) {
        normalizedName = normalizedName + '.' + this.identifierKey;
      }
      var currentValue = this.get(normalizedName);
      if (currentValue !== value && !this.updatedModels.includes(normalizedName)) {
        this.updatedModels.push(normalizedName);
      }
      this.props = setDeepData(this.props, normalizedName, value);
      return currentValue !== value;
    }
  }, {
    key: "all",
    value: function all() {
      return Object.assign({}, this.props);
    }
  }, {
    key: "reinitializeAllProps",
    value: function reinitializeAllProps(props) {
      this.updatedModels = [];
      this.props = props;
    }
  }, {
    key: "reinitializeProvidedProps",
    value: function reinitializeProvidedProps(props) {
      var changed = false;
      for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        var currentIdentifier = this.get(key);
        var newIdentifier = this.findIdentifier(value);
        if (currentIdentifier !== newIdentifier) {
          changed = true;
          this.props[key] = value;
        }
      }
      return changed;
    }
  }, {
    key: "isPropNameTopLevel",
    value: function isPropNameTopLevel(key) {
      return key.indexOf('.') === -1;
    }
  }, {
    key: "findIdentifier",
    value: function findIdentifier(value) {
      if (_typeof(value) !== 'object' || value[this.identifierKey] === undefined) {
        return value;
      }
      return value[this.identifierKey];
    }
  }]);
  return ValueStore;
}();
var DOCUMENT_FRAGMENT_NODE = 11;
function morphAttrs(fromNode, toNode) {
  var toNodeAttrs = toNode.attributes;
  var attr;
  var attrName;
  var attrNamespaceURI;
  var attrValue;
  var fromValue;

  // document-fragments dont have attributes so lets not do anything
  if (toNode.nodeType === DOCUMENT_FRAGMENT_NODE || fromNode.nodeType === DOCUMENT_FRAGMENT_NODE) {
    return;
  }

  // update attributes on original DOM element
  for (var i = toNodeAttrs.length - 1; i >= 0; i--) {
    attr = toNodeAttrs[i];
    attrName = attr.name;
    attrNamespaceURI = attr.namespaceURI;
    attrValue = attr.value;
    if (attrNamespaceURI) {
      attrName = attr.localName || attrName;
      fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);
      if (fromValue !== attrValue) {
        if (attr.prefix === 'xmlns') {
          attrName = attr.name; // It's not allowed to set an attribute with the XMLNS namespace without specifying the `xmlns` prefix
        }

        fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
      }
    } else {
      fromValue = fromNode.getAttribute(attrName);
      if (fromValue !== attrValue) {
        fromNode.setAttribute(attrName, attrValue);
      }
    }
  }

  // Remove any extra attributes found on the original DOM element that
  // weren't found on the target element.
  var fromNodeAttrs = fromNode.attributes;
  for (var d = fromNodeAttrs.length - 1; d >= 0; d--) {
    attr = fromNodeAttrs[d];
    attrName = attr.name;
    attrNamespaceURI = attr.namespaceURI;
    if (attrNamespaceURI) {
      attrName = attr.localName || attrName;
      if (!toNode.hasAttributeNS(attrNamespaceURI, attrName)) {
        fromNode.removeAttributeNS(attrNamespaceURI, attrName);
      }
    } else {
      if (!toNode.hasAttribute(attrName)) {
        fromNode.removeAttribute(attrName);
      }
    }
  }
}
var range; // Create a range object for efficently rendering strings to elements.
var NS_XHTML = 'http://www.w3.org/1999/xhtml';
var doc = typeof document === 'undefined' ? undefined : document;
var HAS_TEMPLATE_SUPPORT = !!doc && 'content' in doc.createElement('template');
var HAS_RANGE_SUPPORT = !!doc && doc.createRange && 'createContextualFragment' in doc.createRange();
function createFragmentFromTemplate(str) {
  var template = doc.createElement('template');
  template.innerHTML = str;
  return template.content.childNodes[0];
}
function createFragmentFromRange(str) {
  if (!range) {
    range = doc.createRange();
    range.selectNode(doc.body);
  }
  var fragment = range.createContextualFragment(str);
  return fragment.childNodes[0];
}
function createFragmentFromWrap(str) {
  var fragment = doc.createElement('body');
  fragment.innerHTML = str;
  return fragment.childNodes[0];
}

/**
 * This is about the same
 * var html = new DOMParser().parseFromString(str, 'text/html');
 * return html.body.firstChild;
 *
 * @method toElement
 * @param {String} str
 */
function toElement(str) {
  str = str.trim();
  if (HAS_TEMPLATE_SUPPORT) {
    // avoid restrictions on content for things like `<tr><th>Hi</th></tr>` which
    // createContextualFragment doesn't support
    // <template> support not available in IE
    return createFragmentFromTemplate(str);
  } else if (HAS_RANGE_SUPPORT) {
    return createFragmentFromRange(str);
  }
  return createFragmentFromWrap(str);
}

/**
 * Returns true if two node's names are the same.
 *
 * NOTE: We don't bother checking `namespaceURI` because you will never find two HTML elements with the same
 *       nodeName and different namespace URIs.
 *
 * @param {Element} a
 * @param {Element} b The target element
 * @return {boolean}
 */
function compareNodeNames(fromEl, toEl) {
  var fromNodeName = fromEl.nodeName;
  var toNodeName = toEl.nodeName;
  var fromCodeStart, toCodeStart;
  if (fromNodeName === toNodeName) {
    return true;
  }
  fromCodeStart = fromNodeName.charCodeAt(0);
  toCodeStart = toNodeName.charCodeAt(0);

  // If the target element is a virtual DOM node or SVG node then we may
  // need to normalize the tag name before comparing. Normal HTML elements that are
  // in the "http://www.w3.org/1999/xhtml"
  // are converted to upper case
  if (fromCodeStart <= 90 && toCodeStart >= 97) {
    // from is upper and to is lower
    return fromNodeName === toNodeName.toUpperCase();
  } else if (toCodeStart <= 90 && fromCodeStart >= 97) {
    // to is upper and from is lower
    return toNodeName === fromNodeName.toUpperCase();
  } else {
    return false;
  }
}

/**
 * Create an element, optionally with a known namespace URI.
 *
 * @param {string} name the element name, e.g. 'div' or 'svg'
 * @param {string} [namespaceURI] the element's namespace URI, i.e. the value of
 * its `xmlns` attribute or its inferred namespace.
 *
 * @return {Element}
 */
function createElementNS(name, namespaceURI) {
  return !namespaceURI || namespaceURI === NS_XHTML ? doc.createElement(name) : doc.createElementNS(namespaceURI, name);
}

/**
 * Copies the children of one DOM element to another DOM element
 */
function moveChildren(fromEl, toEl) {
  var curChild = fromEl.firstChild;
  while (curChild) {
    var nextChild = curChild.nextSibling;
    toEl.appendChild(curChild);
    curChild = nextChild;
  }
  return toEl;
}
function syncBooleanAttrProp(fromEl, toEl, name) {
  if (fromEl[name] !== toEl[name]) {
    fromEl[name] = toEl[name];
    if (fromEl[name]) {
      fromEl.setAttribute(name, '');
    } else {
      fromEl.removeAttribute(name);
    }
  }
}
var specialElHandlers = {
  OPTION: function OPTION(fromEl, toEl) {
    var parentNode = fromEl.parentNode;
    if (parentNode) {
      var parentName = parentNode.nodeName.toUpperCase();
      if (parentName === 'OPTGROUP') {
        parentNode = parentNode.parentNode;
        parentName = parentNode && parentNode.nodeName.toUpperCase();
      }
      if (parentName === 'SELECT' && !parentNode.hasAttribute('multiple')) {
        if (fromEl.hasAttribute('selected') && !toEl.selected) {
          // Workaround for MS Edge bug where the 'selected' attribute can only be
          // removed if set to a non-empty value:
          // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12087679/
          fromEl.setAttribute('selected', 'selected');
          fromEl.removeAttribute('selected');
        }
        // We have to reset select element's selectedIndex to -1, otherwise setting
        // fromEl.selected using the syncBooleanAttrProp below has no effect.
        // The correct selectedIndex will be set in the SELECT special handler below.
        parentNode.selectedIndex = -1;
      }
    }
    syncBooleanAttrProp(fromEl, toEl, 'selected');
  },
  /**
   * The "value" attribute is special for the <input> element since it sets
   * the initial value. Changing the "value" attribute without changing the
   * "value" property will have no effect since it is only used to the set the
   * initial value.  Similar for the "checked" attribute, and "disabled".
   */
  INPUT: function INPUT(fromEl, toEl) {
    syncBooleanAttrProp(fromEl, toEl, 'checked');
    syncBooleanAttrProp(fromEl, toEl, 'disabled');
    if (fromEl.value !== toEl.value) {
      fromEl.value = toEl.value;
    }
    if (!toEl.hasAttribute('value')) {
      fromEl.removeAttribute('value');
    }
  },
  TEXTAREA: function TEXTAREA(fromEl, toEl) {
    var newValue = toEl.value;
    if (fromEl.value !== newValue) {
      fromEl.value = newValue;
    }
    var firstChild = fromEl.firstChild;
    if (firstChild) {
      // Needed for IE. Apparently IE sets the placeholder as the
      // node value and vise versa. This ignores an empty update.
      var oldValue = firstChild.nodeValue;
      if (oldValue == newValue || !newValue && oldValue == fromEl.placeholder) {
        return;
      }
      firstChild.nodeValue = newValue;
    }
  },
  SELECT: function SELECT(fromEl, toEl) {
    if (!toEl.hasAttribute('multiple')) {
      var selectedIndex = -1;
      var i = 0;
      // We have to loop through children of fromEl, not toEl since nodes can be moved
      // from toEl to fromEl directly when morphing.
      // At the time this special handler is invoked, all children have already been morphed
      // and appended to / removed from fromEl, so using fromEl here is safe and correct.
      var curChild = fromEl.firstChild;
      var optgroup;
      var nodeName;
      while (curChild) {
        nodeName = curChild.nodeName && curChild.nodeName.toUpperCase();
        if (nodeName === 'OPTGROUP') {
          optgroup = curChild;
          curChild = optgroup.firstChild;
        } else {
          if (nodeName === 'OPTION') {
            if (curChild.hasAttribute('selected')) {
              selectedIndex = i;
              break;
            }
            i++;
          }
          curChild = curChild.nextSibling;
          if (!curChild && optgroup) {
            curChild = optgroup.nextSibling;
            optgroup = null;
          }
        }
      }
      fromEl.selectedIndex = selectedIndex;
    }
  }
};
var ELEMENT_NODE = 1;
var DOCUMENT_FRAGMENT_NODE$1 = 11;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
function noop() {}
function defaultGetNodeKey(node) {
  if (node) {
    return node.getAttribute && node.getAttribute('id') || node.id;
  }
}
function morphdomFactory(morphAttrs) {
  return function morphdom(fromNode, toNode, options) {
    if (!options) {
      options = {};
    }
    if (typeof toNode === 'string') {
      if (fromNode.nodeName === '#document' || fromNode.nodeName === 'HTML' || fromNode.nodeName === 'BODY') {
        var toNodeHtml = toNode;
        toNode = doc.createElement('html');
        toNode.innerHTML = toNodeHtml;
      } else {
        toNode = toElement(toNode);
      }
    }
    var getNodeKey = options.getNodeKey || defaultGetNodeKey;
    var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
    var onNodeAdded = options.onNodeAdded || noop;
    var onBeforeElUpdated = options.onBeforeElUpdated || noop;
    var onElUpdated = options.onElUpdated || noop;
    var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
    var onNodeDiscarded = options.onNodeDiscarded || noop;
    var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
    var childrenOnly = options.childrenOnly === true;

    // This object is used as a lookup to quickly find all keyed elements in the original DOM tree.
    var fromNodesLookup = Object.create(null);
    var keyedRemovalList = [];
    function addKeyedRemoval(key) {
      keyedRemovalList.push(key);
    }
    function walkDiscardedChildNodes(node, skipKeyedNodes) {
      if (node.nodeType === ELEMENT_NODE) {
        var curChild = node.firstChild;
        while (curChild) {
          var key = undefined;
          if (skipKeyedNodes && (key = getNodeKey(curChild))) {
            // If we are skipping keyed nodes then we add the key
            // to a list so that it can be handled at the very end.
            addKeyedRemoval(key);
          } else {
            // Only report the node as discarded if it is not keyed. We do this because
            // at the end we loop through all keyed elements that were unmatched
            // and then discard them in one final pass.
            onNodeDiscarded(curChild);
            if (curChild.firstChild) {
              walkDiscardedChildNodes(curChild, skipKeyedNodes);
            }
          }
          curChild = curChild.nextSibling;
        }
      }
    }

    /**
     * Removes a DOM node out of the original DOM
     *
     * @param  {Node} node The node to remove
     * @param  {Node} parentNode The nodes parent
     * @param  {Boolean} skipKeyedNodes If true then elements with keys will be skipped and not discarded.
     * @return {undefined}
     */
    function removeNode(node, parentNode, skipKeyedNodes) {
      if (onBeforeNodeDiscarded(node) === false) {
        return;
      }
      if (parentNode) {
        parentNode.removeChild(node);
      }
      onNodeDiscarded(node);
      walkDiscardedChildNodes(node, skipKeyedNodes);
    }

    // // TreeWalker implementation is no faster, but keeping this around in case this changes in the future
    // function indexTree(root) {
    //     var treeWalker = document.createTreeWalker(
    //         root,
    //         NodeFilter.SHOW_ELEMENT);
    //
    //     var el;
    //     while((el = treeWalker.nextNode())) {
    //         var key = getNodeKey(el);
    //         if (key) {
    //             fromNodesLookup[key] = el;
    //         }
    //     }
    // }

    // // NodeIterator implementation is no faster, but keeping this around in case this changes in the future
    //
    // function indexTree(node) {
    //     var nodeIterator = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT);
    //     var el;
    //     while((el = nodeIterator.nextNode())) {
    //         var key = getNodeKey(el);
    //         if (key) {
    //             fromNodesLookup[key] = el;
    //         }
    //     }
    // }

    function indexTree(node) {
      if (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE$1) {
        var curChild = node.firstChild;
        while (curChild) {
          var key = getNodeKey(curChild);
          if (key) {
            fromNodesLookup[key] = curChild;
          }

          // Walk recursively
          indexTree(curChild);
          curChild = curChild.nextSibling;
        }
      }
    }
    indexTree(fromNode);
    function handleNodeAdded(el) {
      onNodeAdded(el);
      var curChild = el.firstChild;
      while (curChild) {
        var nextSibling = curChild.nextSibling;
        var key = getNodeKey(curChild);
        if (key) {
          var unmatchedFromEl = fromNodesLookup[key];
          // if we find a duplicate #id node in cache, replace `el` with cache value
          // and morph it to the child node.
          if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
            curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
            morphEl(unmatchedFromEl, curChild);
          } else {
            handleNodeAdded(curChild);
          }
        } else {
          // recursively call for curChild and it's children to see if we find something in
          // fromNodesLookup
          handleNodeAdded(curChild);
        }
        curChild = nextSibling;
      }
    }
    function cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey) {
      // We have processed all of the "to nodes". If curFromNodeChild is
      // non-null then we still have some from nodes left over that need
      // to be removed
      while (curFromNodeChild) {
        var fromNextSibling = curFromNodeChild.nextSibling;
        if (curFromNodeKey = getNodeKey(curFromNodeChild)) {
          // Since the node is keyed it might be matched up later so we defer
          // the actual removal to later
          addKeyedRemoval(curFromNodeKey);
        } else {
          // NOTE: we skip nested keyed nodes from being removed since there is
          //       still a chance they will be matched up later
          removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
        }

        curFromNodeChild = fromNextSibling;
      }
    }
    function morphEl(fromEl, toEl, childrenOnly) {
      var toElKey = getNodeKey(toEl);
      if (toElKey) {
        // If an element with an ID is being morphed then it will be in the final
        // DOM so clear it out of the saved elements collection
        delete fromNodesLookup[toElKey];
      }
      if (!childrenOnly) {
        // optional
        if (onBeforeElUpdated(fromEl, toEl) === false) {
          return;
        }

        // update attributes on original DOM element first
        morphAttrs(fromEl, toEl);
        // optional
        onElUpdated(fromEl);
        if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
          return;
        }
      }
      if (fromEl.nodeName !== 'TEXTAREA') {
        morphChildren(fromEl, toEl);
      } else {
        specialElHandlers.TEXTAREA(fromEl, toEl);
      }
    }
    function morphChildren(fromEl, toEl) {
      var curToNodeChild = toEl.firstChild;
      var curFromNodeChild = fromEl.firstChild;
      var curToNodeKey;
      var curFromNodeKey;
      var fromNextSibling;
      var toNextSibling;
      var matchingFromEl;

      // walk the children
      outer: while (curToNodeChild) {
        toNextSibling = curToNodeChild.nextSibling;
        curToNodeKey = getNodeKey(curToNodeChild);

        // walk the fromNode children all the way through
        while (curFromNodeChild) {
          fromNextSibling = curFromNodeChild.nextSibling;
          if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
            curToNodeChild = toNextSibling;
            curFromNodeChild = fromNextSibling;
            continue outer;
          }
          curFromNodeKey = getNodeKey(curFromNodeChild);
          var curFromNodeType = curFromNodeChild.nodeType;

          // this means if the curFromNodeChild doesnt have a match with the curToNodeChild
          var isCompatible = undefined;
          if (curFromNodeType === curToNodeChild.nodeType) {
            if (curFromNodeType === ELEMENT_NODE) {
              // Both nodes being compared are Element nodes

              if (curToNodeKey) {
                // The target node has a key so we want to match it up with the correct element
                // in the original DOM tree
                if (curToNodeKey !== curFromNodeKey) {
                  // The current element in the original DOM tree does not have a matching key so
                  // let's check our lookup to see if there is a matching element in the original
                  // DOM tree
                  if (matchingFromEl = fromNodesLookup[curToNodeKey]) {
                    if (fromNextSibling === matchingFromEl) {
                      // Special case for single element removals. To avoid removing the original
                      // DOM node out of the tree (since that can break CSS transitions, etc.),
                      // we will instead discard the current node and wait until the next
                      // iteration to properly match up the keyed target element with its matching
                      // element in the original tree
                      isCompatible = false;
                    } else {
                      // We found a matching keyed element somewhere in the original DOM tree.
                      // Let's move the original DOM node into the current position and morph
                      // it.

                      // NOTE: We use insertBefore instead of replaceChild because we want to go through
                      // the `removeNode()` function for the node that is being discarded so that
                      // all lifecycle hooks are correctly invoked
                      fromEl.insertBefore(matchingFromEl, curFromNodeChild);

                      // fromNextSibling = curFromNodeChild.nextSibling;

                      if (curFromNodeKey) {
                        // Since the node is keyed it might be matched up later so we defer
                        // the actual removal to later
                        addKeyedRemoval(curFromNodeKey);
                      } else {
                        // NOTE: we skip nested keyed nodes from being removed since there is
                        //       still a chance they will be matched up later
                        removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                      }

                      curFromNodeChild = matchingFromEl;
                    }
                  } else {
                    // The nodes are not compatible since the "to" node has a key and there
                    // is no matching keyed node in the source tree
                    isCompatible = false;
                  }
                }
              } else if (curFromNodeKey) {
                // The original has a key
                isCompatible = false;
              }
              isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);
              if (isCompatible) {
                // We found compatible DOM elements so transform
                // the current "from" node to match the current
                // target DOM node.
                // MORPH
                morphEl(curFromNodeChild, curToNodeChild);
              }
            } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
              // Both nodes being compared are Text or Comment nodes
              isCompatible = true;
              // Simply update nodeValue on the original node to
              // change the text value
              if (curFromNodeChild.nodeValue !== curToNodeChild.nodeValue) {
                curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
              }
            }
          }
          if (isCompatible) {
            // Advance both the "to" child and the "from" child since we found a match
            // Nothing else to do as we already recursively called morphChildren above
            curToNodeChild = toNextSibling;
            curFromNodeChild = fromNextSibling;
            continue outer;
          }

          // No compatible match so remove the old node from the DOM and continue trying to find a
          // match in the original DOM. However, we only do this if the from node is not keyed
          // since it is possible that a keyed node might match up with a node somewhere else in the
          // target tree and we don't want to discard it just yet since it still might find a
          // home in the final DOM tree. After everything is done we will remove any keyed nodes
          // that didn't find a home
          if (curFromNodeKey) {
            // Since the node is keyed it might be matched up later so we defer
            // the actual removal to later
            addKeyedRemoval(curFromNodeKey);
          } else {
            // NOTE: we skip nested keyed nodes from being removed since there is
            //       still a chance they will be matched up later
            removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
          }

          curFromNodeChild = fromNextSibling;
        } // END: while(curFromNodeChild) {}

        // If we got this far then we did not find a candidate match for
        // our "to node" and we exhausted all of the children "from"
        // nodes. Therefore, we will just append the current "to" node
        // to the end
        if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
          fromEl.appendChild(matchingFromEl);
          // MORPH
          morphEl(matchingFromEl, curToNodeChild);
        } else {
          var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);
          if (onBeforeNodeAddedResult !== false) {
            if (onBeforeNodeAddedResult) {
              curToNodeChild = onBeforeNodeAddedResult;
            }
            if (curToNodeChild.actualize) {
              curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
            }
            fromEl.appendChild(curToNodeChild);
            handleNodeAdded(curToNodeChild);
          }
        }
        curToNodeChild = toNextSibling;
        curFromNodeChild = fromNextSibling;
      }
      cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey);
      var specialElHandler = specialElHandlers[fromEl.nodeName];
      if (specialElHandler) {
        specialElHandler(fromEl, toEl);
      }
    } // END: morphChildren(...)

    var morphedNode = fromNode;
    var morphedNodeType = morphedNode.nodeType;
    var toNodeType = toNode.nodeType;
    if (!childrenOnly) {
      // Handle the case where we are given two DOM nodes that are not
      // compatible (e.g. <div> --> <span> or <div> --> TEXT)
      if (morphedNodeType === ELEMENT_NODE) {
        if (toNodeType === ELEMENT_NODE) {
          if (!compareNodeNames(fromNode, toNode)) {
            onNodeDiscarded(fromNode);
            morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
          }
        } else {
          // Going from an element node to a text node
          morphedNode = toNode;
        }
      } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) {
        // Text or comment node
        if (toNodeType === morphedNodeType) {
          if (morphedNode.nodeValue !== toNode.nodeValue) {
            morphedNode.nodeValue = toNode.nodeValue;
          }
          return morphedNode;
        } else {
          // Text node to something else
          morphedNode = toNode;
        }
      }
    }
    if (morphedNode === toNode) {
      // The "to node" was not compatible with the "from node" so we had to
      // toss out the "from node" and use the "to node"
      onNodeDiscarded(fromNode);
    } else {
      if (toNode.isSameNode && toNode.isSameNode(morphedNode)) {
        return;
      }
      morphEl(morphedNode, toNode, childrenOnly);

      // We now need to loop over any keyed nodes that might need to be
      // removed. We only do the removal if we know that the keyed node
      // never found a match. When a keyed node is matched up we remove
      // it out of fromNodesLookup and we use fromNodesLookup to determine
      // if a keyed node has been matched up or not
      if (keyedRemovalList) {
        for (var i = 0, len = keyedRemovalList.length; i < len; i++) {
          var elToRemove = fromNodesLookup[keyedRemovalList[i]];
          if (elToRemove) {
            removeNode(elToRemove, elToRemove.parentNode, false);
          }
        }
      }
    }
    if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
      if (morphedNode.actualize) {
        morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
      }
      // If we had to swap out the from node with a new node because the old
      // node was not compatible with the target node then we need to
      // replace the old DOM node in the original DOM tree. This is only
      // possible if the original DOM node was part of a DOM tree which
      // we know is the case if it has a parent node.
      fromNode.parentNode.replaceChild(morphedNode, fromNode);
    }
    return morphedNode;
  };
}
var morphdom = morphdomFactory(morphAttrs);
function normalizeAttributesForComparison(element) {
  var isFileInput = element instanceof HTMLInputElement && element.type === 'file';
  if (!isFileInput) {
    if ('value' in element) {
      element.setAttribute('value', element.value);
    } else if (element.hasAttribute('value')) {
      element.setAttribute('value', '');
    }
  }
  Array.from(element.children).forEach(function (child) {
    normalizeAttributesForComparison(child);
  });
}
function executeMorphdom(rootFromElement, rootToElement, modifiedFieldElements, getElementValue, childComponents, findChildComponent, getKeyFromElement) {
  var childComponentMap = new Map();
  childComponents.forEach(function (childComponent) {
    childComponentMap.set(childComponent.element, childComponent);
    if (!childComponent.id) {
      throw new Error('Child is missing id.');
    }
    var childComponentToElement = findChildComponent(childComponent.id, rootToElement);
    if (childComponentToElement && childComponentToElement.tagName !== childComponent.element.tagName) {
      var newTag = cloneElementWithNewTagName(childComponentToElement, childComponent.element.tagName);
      childComponentToElement.replaceWith(newTag);
    }
  });
  morphdom(rootFromElement, rootToElement, {
    getNodeKey: function getNodeKey(node) {
      if (!(node instanceof HTMLElement)) {
        return;
      }
      return getKeyFromElement(node);
    },
    onBeforeElUpdated: function onBeforeElUpdated(fromEl, toEl) {
      if (fromEl === rootFromElement) {
        return true;
      }
      if (!(fromEl instanceof HTMLElement || fromEl instanceof SVGElement) || !(toEl instanceof HTMLElement || toEl instanceof SVGElement)) {
        return false;
      }
      var childComponent = childComponentMap.get(fromEl) || false;
      if (childComponent) {
        return childComponent.updateFromNewElement(toEl);
      }
      if (modifiedFieldElements.includes(fromEl)) {
        setValueOnElement(toEl, getElementValue(fromEl));
      }
      if (fromEl instanceof HTMLElement && toEl instanceof HTMLElement && fromEl.isEqualNode(toEl)) {
        var normalizedFromEl = cloneHTMLElement(fromEl);
        normalizeAttributesForComparison(normalizedFromEl);
        var normalizedToEl = cloneHTMLElement(toEl);
        normalizeAttributesForComparison(normalizedToEl);
        if (normalizedFromEl.isEqualNode(normalizedToEl)) {
          return false;
        }
      }
      return !fromEl.hasAttribute('data-live-ignore');
    },
    onBeforeNodeDiscarded: function onBeforeNodeDiscarded(node) {
      if (!(node instanceof HTMLElement)) {
        return true;
      }
      return !node.hasAttribute('data-live-ignore');
    }
  });
}
var UnsyncedInputsTracker = /*#__PURE__*/function () {
  function UnsyncedInputsTracker(component, modelElementResolver) {
    var _this = this;
    _classCallCheck(this, UnsyncedInputsTracker);
    this.elementEventListeners = [{
      event: 'input',
      callback: function callback(event) {
        return _this.handleInputEvent(event);
      }
    }];
    this.component = component;
    this.modelElementResolver = modelElementResolver;
    this.unsyncedInputs = new UnsyncedInputContainer();
  }
  _createClass(UnsyncedInputsTracker, [{
    key: "activate",
    value: function activate() {
      var _this2 = this;
      this.elementEventListeners.forEach(function (_ref) {
        var event = _ref.event,
          callback = _ref.callback;
        _this2.component.element.addEventListener(event, callback);
      });
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      var _this3 = this;
      this.elementEventListeners.forEach(function (_ref2) {
        var event = _ref2.event,
          callback = _ref2.callback;
        _this3.component.element.removeEventListener(event, callback);
      });
    }
  }, {
    key: "markModelAsSynced",
    value: function markModelAsSynced(modelName) {
      this.unsyncedInputs.markModelAsSynced(modelName);
    }
  }, {
    key: "handleInputEvent",
    value: function handleInputEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElement(target);
    }
  }, {
    key: "updateModelFromElement",
    value: function updateModelFromElement(element) {
      if (!elementBelongsToThisComponent(element, this.component)) {
        return;
      }
      if (!(element instanceof HTMLElement)) {
        throw new Error('Could not update model for non HTMLElement');
      }
      var modelName = this.modelElementResolver.getModelName(element);
      this.unsyncedInputs.add(element, modelName);
    }
  }, {
    key: "getUnsyncedInputs",
    value: function getUnsyncedInputs() {
      return this.unsyncedInputs.allUnsyncedInputs();
    }
  }, {
    key: "getUnsyncedModels",
    value: function getUnsyncedModels() {
      return Array.from(this.unsyncedInputs.getUnsyncedModelNames());
    }
  }, {
    key: "resetUnsyncedFields",
    value: function resetUnsyncedFields() {
      this.unsyncedInputs.resetUnsyncedFields();
    }
  }]);
  return UnsyncedInputsTracker;
}();
var UnsyncedInputContainer = /*#__PURE__*/function () {
  function UnsyncedInputContainer() {
    _classCallCheck(this, UnsyncedInputContainer);
    this.unsyncedNonModelFields = [];
    this.unsyncedModelNames = [];
    this.unsyncedModelFields = new Map();
  }
  _createClass(UnsyncedInputContainer, [{
    key: "add",
    value: function add(element) {
      var modelName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (modelName) {
        this.unsyncedModelFields.set(modelName, element);
        if (!this.unsyncedModelNames.includes(modelName)) {
          this.unsyncedModelNames.push(modelName);
        }
        return;
      }
      this.unsyncedNonModelFields.push(element);
    }
  }, {
    key: "resetUnsyncedFields",
    value: function resetUnsyncedFields() {
      var _this4 = this;
      this.unsyncedModelFields.forEach(function (value, key) {
        if (!_this4.unsyncedModelNames.includes(key)) {
          _this4.unsyncedModelFields["delete"](key);
        }
      });
    }
  }, {
    key: "allUnsyncedInputs",
    value: function allUnsyncedInputs() {
      return [].concat(_toConsumableArray(this.unsyncedNonModelFields), _toConsumableArray(this.unsyncedModelFields.values()));
    }
  }, {
    key: "markModelAsSynced",
    value: function markModelAsSynced(modelName) {
      var index = this.unsyncedModelNames.indexOf(modelName);
      if (index !== -1) {
        this.unsyncedModelNames.splice(index, 1);
      }
    }
  }, {
    key: "getUnsyncedModelNames",
    value: function getUnsyncedModelNames() {
      return this.unsyncedModelNames;
    }
  }]);
  return UnsyncedInputContainer;
}();
var HookManager = /*#__PURE__*/function () {
  function HookManager() {
    _classCallCheck(this, HookManager);
    this.hooks = new Map();
  }
  _createClass(HookManager, [{
    key: "register",
    value: function register(hookName, callback) {
      var hooks = this.hooks.get(hookName) || [];
      hooks.push(callback);
      this.hooks.set(hookName, hooks);
    }
  }, {
    key: "unregister",
    value: function unregister(hookName, callback) {
      var hooks = this.hooks.get(hookName) || [];
      var index = hooks.indexOf(callback);
      if (index === -1) {
        return;
      }
      hooks.splice(index, 1);
      this.hooks.set(hookName, hooks);
    }
  }, {
    key: "triggerHook",
    value: function triggerHook(hookName) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var hooks = this.hooks.get(hookName) || [];
      hooks.forEach(function (callback) {
        callback.apply(void 0, args);
      });
    }
  }]);
  return HookManager;
}();
var BackendResponse = /*#__PURE__*/function () {
  function BackendResponse(response) {
    _classCallCheck(this, BackendResponse);
    this.response = response;
  }
  _createClass(BackendResponse, [{
    key: "getBody",
    value: function () {
      var _getBody = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.body) {
                _context.next = 4;
                break;
              }
              _context.next = 3;
              return this.response.text();
            case 3:
              this.body = _context.sent;
            case 4:
              return _context.abrupt("return", this.body);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getBody() {
        return _getBody.apply(this, arguments);
      }
      return getBody;
    }()
  }]);
  return BackendResponse;
}();
var ChildComponentWrapper = /*#__PURE__*/_createClass(function ChildComponentWrapper(component, modelBindings) {
  _classCallCheck(this, ChildComponentWrapper);
  this.component = component;
  this.modelBindings = modelBindings;
});
var Component = /*#__PURE__*/function () {
  function Component(element, props, fingerprint, id, backend, elementDriver) {
    _classCallCheck(this, Component);
    this.defaultDebounce = 150;
    this.backendRequest = null;
    this.pendingActions = [];
    this.isRequestPending = false;
    this.requestDebounceTimeout = null;
    this.children = new Map();
    this.parent = null;
    this.element = element;
    this.backend = backend;
    this.elementDriver = elementDriver;
    this.id = id;
    this.fingerprint = fingerprint;
    this.valueStore = new ValueStore(props);
    this.unsyncedInputsTracker = new UnsyncedInputsTracker(this, elementDriver);
    this.hooks = new HookManager();
    this.resetPromise();
    this.onChildComponentModelUpdate = this.onChildComponentModelUpdate.bind(this);
  }
  _createClass(Component, [{
    key: "addPlugin",
    value: function addPlugin(plugin) {
      plugin.attachToComponent(this);
    }
  }, {
    key: "connect",
    value: function connect() {
      this.hooks.triggerHook('connect', this);
      this.unsyncedInputsTracker.activate();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.hooks.triggerHook('disconnect', this);
      this.clearRequestDebounceTimeout();
      this.unsyncedInputsTracker.deactivate();
    }
  }, {
    key: "on",
    value: function on(hookName, callback) {
      this.hooks.register(hookName, callback);
    }
  }, {
    key: "off",
    value: function off(hookName, callback) {
      this.hooks.unregister(hookName, callback);
    }
  }, {
    key: "set",
    value: function set(model, value) {
      var reRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var debounce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var promise = this.nextRequestPromise;
      var modelName = normalizeModelName(model);
      var isChanged = this.valueStore.set(modelName, value);
      this.hooks.triggerHook('model:set', model, value, this);
      this.unsyncedInputsTracker.markModelAsSynced(modelName);
      if (reRender && isChanged) {
        this.debouncedStartRequest(debounce);
      }
      return promise;
    }
  }, {
    key: "getData",
    value: function getData(model) {
      var modelName = normalizeModelName(model);
      if (!this.valueStore.has(modelName)) {
        throw new Error("Invalid model \"".concat(model, "\"."));
      }
      return this.valueStore.get(modelName);
    }
  }, {
    key: "action",
    value: function action(name) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var debounce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var promise = this.nextRequestPromise;
      this.pendingActions.push({
        name: name,
        args: args
      });
      this.debouncedStartRequest(debounce);
      return promise;
    }
  }, {
    key: "render",
    value: function render() {
      var promise = this.nextRequestPromise;
      this.tryStartingRequest();
      return promise;
    }
  }, {
    key: "getUnsyncedModels",
    value: function getUnsyncedModels() {
      return this.unsyncedInputsTracker.getUnsyncedModels();
    }
  }, {
    key: "addChild",
    value: function addChild(child) {
      var modelBindings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      if (!child.id) {
        throw new Error('Children components must have an id.');
      }
      this.children.set(child.id, new ChildComponentWrapper(child, modelBindings));
      child.parent = this;
      child.on('model:set', this.onChildComponentModelUpdate);
    }
  }, {
    key: "removeChild",
    value: function removeChild(child) {
      if (!child.id) {
        throw new Error('Children components must have an id.');
      }
      this.children["delete"](child.id);
      child.parent = null;
      child.off('model:set', this.onChildComponentModelUpdate);
    }
  }, {
    key: "getParent",
    value: function getParent() {
      return this.parent;
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      var children = new Map();
      this.children.forEach(function (childComponent, id) {
        children.set(id, childComponent.component);
      });
      return children;
    }
  }, {
    key: "updateFromNewElement",
    value: function updateFromNewElement(toEl) {
      var props = this.elementDriver.getComponentProps(toEl);
      if (props === null) {
        return false;
      }
      var isChanged = this.valueStore.reinitializeProvidedProps(props);
      var fingerprint = toEl.dataset.liveFingerprintValue;
      if (fingerprint !== undefined) {
        this.fingerprint = fingerprint;
      }
      if (isChanged) {
        this.render();
      }
      return false;
    }
  }, {
    key: "onChildComponentModelUpdate",
    value: function onChildComponentModelUpdate(modelName, value, childComponent) {
      var _this5 = this;
      if (!childComponent.id) {
        throw new Error('Missing id');
      }
      var childWrapper = this.children.get(childComponent.id);
      if (!childWrapper) {
        throw new Error('Missing child');
      }
      childWrapper.modelBindings.forEach(function (modelBinding) {
        var childModelName = modelBinding.innerModelName || 'value';
        if (childModelName !== modelName) {
          return;
        }
        _this5.set(modelBinding.modelName, value, modelBinding.shouldRender, modelBinding.debounce);
      });
    }
  }, {
    key: "tryStartingRequest",
    value: function tryStartingRequest() {
      if (!this.backendRequest) {
        this.performRequest();
        return;
      }
      this.isRequestPending = true;
    }
  }, {
    key: "performRequest",
    value: function performRequest() {
      var _this6 = this;
      var thisPromiseResolve = this.nextRequestPromiseResolve;
      this.resetPromise();
      this.unsyncedInputsTracker.resetUnsyncedFields();
      this.backendRequest = this.backend.makeRequest(this.valueStore.all(), this.pendingActions, this.valueStore.updatedModels, this.getChildrenFingerprints());
      this.hooks.triggerHook('loading.state:started', this.element, this.backendRequest);
      this.pendingActions = [];
      this.valueStore.updatedModels = [];
      this.isRequestPending = false;
      this.backendRequest.promise.then( /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(response) {
          var backendResponse, html, headers, controls;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _this6.backendRequest = null;
                backendResponse = new BackendResponse(response);
                _context2.next = 4;
                return backendResponse.getBody();
              case 4:
                html = _context2.sent;
                headers = backendResponse.response.headers;
                if (!(headers.get('Content-Type') !== 'application/vnd.live-component+html' && !headers.get('X-Live-Redirect'))) {
                  _context2.next = 12;
                  break;
                }
                controls = {
                  displayError: true
                };
                _this6.hooks.triggerHook('response:error', backendResponse, controls);
                if (controls.displayError) {
                  _this6.renderError(html);
                }
                thisPromiseResolve(backendResponse);
                return _context2.abrupt("return", response);
              case 12:
                _this6.processRerender(html, backendResponse);
                thisPromiseResolve(backendResponse);
                if (_this6.isRequestPending) {
                  _this6.isRequestPending = false;
                  _this6.performRequest();
                }
                return _context2.abrupt("return", response);
              case 16:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x2) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "processRerender",
    value: function processRerender(html, backendResponse) {
      var _this7 = this;
      var controls = {
        shouldRender: true
      };
      this.hooks.triggerHook('render:started', html, backendResponse, controls);
      if (!controls.shouldRender) {
        return;
      }
      if (backendResponse.response.headers.get('Location')) {
        if (typeof Turbo !== 'undefined') {
          Turbo.visit(backendResponse.response.headers.get('Location'));
        } else {
          window.location.href = backendResponse.response.headers.get('Location') || '';
        }
        return;
      }
      this.hooks.triggerHook('loading.state:finished', this.element);
      var modifiedModelValues = {};
      this.valueStore.updatedModels.forEach(function (modelName) {
        modifiedModelValues[modelName] = _this7.valueStore.get(modelName);
      });
      var newElement;
      try {
        newElement = htmlToElement(html);
        if (!newElement.matches('[data-controller~=live]')) {
          throw new Error('A live component template must contain a single root controller element.');
        }
      } catch (error) {
        console.error('There was a problem with the component HTML returned:');
        throw error;
      }
      this.hooks.triggerHook('loading.state:finished', newElement);
      this.valueStore.reinitializeAllProps(this.elementDriver.getComponentProps(newElement));
      executeMorphdom(this.element, newElement, this.unsyncedInputsTracker.getUnsyncedInputs(), function (element) {
        return getValueFromElement(element, _this7.valueStore);
      }, Array.from(this.getChildren().values()), this.elementDriver.findChildComponentElement, this.elementDriver.getKeyFromElement);
      Object.keys(modifiedModelValues).forEach(function (modelName) {
        _this7.valueStore.set(modelName, modifiedModelValues[modelName]);
      });
      this.hooks.triggerHook('render:finished', this);
    }
  }, {
    key: "calculateDebounce",
    value: function calculateDebounce(debounce) {
      if (debounce === true) {
        return this.defaultDebounce;
      }
      if (debounce === false) {
        return 0;
      }
      return debounce;
    }
  }, {
    key: "clearRequestDebounceTimeout",
    value: function clearRequestDebounceTimeout() {
      if (this.requestDebounceTimeout) {
        clearTimeout(this.requestDebounceTimeout);
        this.requestDebounceTimeout = null;
      }
    }
  }, {
    key: "debouncedStartRequest",
    value: function debouncedStartRequest(debounce) {
      var _this8 = this;
      this.clearRequestDebounceTimeout();
      this.requestDebounceTimeout = window.setTimeout(function () {
        _this8.render();
      }, this.calculateDebounce(debounce));
    }
  }, {
    key: "renderError",
    value: function renderError(html) {
      var modal = document.getElementById('live-component-error');
      if (modal) {
        modal.innerHTML = '';
      } else {
        modal = document.createElement('div');
        modal.id = 'live-component-error';
        modal.style.padding = '50px';
        modal.style.backgroundColor = 'rgba(0, 0, 0, .5)';
        modal.style.zIndex = '100000';
        modal.style.position = 'fixed';
        modal.style.top = '0px';
        modal.style.bottom = '0px';
        modal.style.left = '0px';
        modal.style.right = '0px';
        modal.style.display = 'flex';
        modal.style.flexDirection = 'column';
      }
      var iframe = document.createElement('iframe');
      iframe.style.borderRadius = '5px';
      iframe.style.flexGrow = '1';
      modal.appendChild(iframe);
      document.body.prepend(modal);
      document.body.style.overflow = 'hidden';
      if (iframe.contentWindow) {
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(html);
        iframe.contentWindow.document.close();
      }
      var closeModal = function closeModal(modal) {
        if (modal) {
          modal.outerHTML = '';
        }
        document.body.style.overflow = 'visible';
      };
      modal.addEventListener('click', function () {
        return closeModal(modal);
      });
      modal.setAttribute('tabindex', '0');
      modal.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          closeModal(modal);
        }
      });
      modal.focus();
    }
  }, {
    key: "getChildrenFingerprints",
    value: function getChildrenFingerprints() {
      var fingerprints = {};
      this.children.forEach(function (childComponent) {
        var child = childComponent.component;
        if (!child.id) {
          throw new Error('missing id');
        }
        fingerprints[child.id] = child.fingerprint;
      });
      return fingerprints;
    }
  }, {
    key: "resetPromise",
    value: function resetPromise() {
      var _this9 = this;
      this.nextRequestPromise = new Promise(function (resolve) {
        _this9.nextRequestPromiseResolve = resolve;
      });
    }
  }]);
  return Component;
}();
function proxifyComponent(component) {
  return new Proxy(component, {
    get: function get(component, prop) {
      if (prop in component || typeof prop !== 'string') {
        if (typeof component[prop] === 'function') {
          var callable = component[prop];
          return function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            return callable.apply(component, args);
          };
        }
        return Reflect.get(component, prop);
      }
      if (component.valueStore.has(prop)) {
        return component.getData(prop);
      }
      return function (args) {
        return component.action.apply(component, [prop, args]);
      };
    },
    set: function set(target, property, value) {
      if (property in target) {
        target[property] = value;
        return true;
      }
      target.set(property, value);
      return true;
    }
  });
}
var BackendRequest = /*#__PURE__*/function () {
  function BackendRequest(promise, actions, updateModels) {
    var _this10 = this;
    _classCallCheck(this, BackendRequest);
    this.isResolved = false;
    this.promise = promise;
    this.promise.then(function (response) {
      _this10.isResolved = true;
      return response;
    });
    this.actions = actions;
    this.updatedModels = updateModels;
  }
  _createClass(BackendRequest, [{
    key: "containsOneOfActions",
    value: function containsOneOfActions(targetedActions) {
      return this.actions.filter(function (action) {
        return targetedActions.includes(action);
      }).length > 0;
    }
  }, {
    key: "areAnyModelsUpdated",
    value: function areAnyModelsUpdated(targetedModels) {
      return this.updatedModels.filter(function (model) {
        return targetedModels.includes(model);
      }).length > 0;
    }
  }]);
  return BackendRequest;
}();
var Backend = /*#__PURE__*/function () {
  function Backend(url) {
    var csrfToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _classCallCheck(this, Backend);
    this.url = url;
    this.csrfToken = csrfToken;
  }
  _createClass(Backend, [{
    key: "makeRequest",
    value: function makeRequest(data, actions, updatedModels, childrenFingerprints) {
      var splitUrl = this.url.split('?');
      var _splitUrl = _slicedToArray(splitUrl, 1),
        url = _splitUrl[0];
      var _splitUrl2 = _slicedToArray(splitUrl, 2),
        queryString = _splitUrl2[1];
      var params = new URLSearchParams(queryString || '');
      var fetchOptions = {};
      fetchOptions.headers = {
        Accept: 'application/vnd.live-component+html'
      };
      var hasFingerprints = Object.keys(childrenFingerprints).length > 0;
      var hasUpdatedModels = Object.keys(updatedModels).length > 0;
      if (actions.length === 0 && this.willDataFitInUrl(JSON.stringify(data), params, JSON.stringify(childrenFingerprints))) {
        params.set('data', JSON.stringify(data));
        if (hasFingerprints) {
          params.set('childrenFingerprints', JSON.stringify(childrenFingerprints));
        }
        updatedModels.forEach(function (model) {
          params.append('updatedModels[]', model);
        });
        fetchOptions.method = 'GET';
      } else {
        fetchOptions.method = 'POST';
        fetchOptions.headers['Content-Type'] = 'application/json';
        var requestData = {
          data: data
        };
        if (hasUpdatedModels) {
          requestData.updatedModels = updatedModels;
        }
        if (hasFingerprints) {
          requestData.childrenFingerprints = childrenFingerprints;
        }
        if (actions.length > 0) {
          if (this.csrfToken) {
            fetchOptions.headers['X-CSRF-TOKEN'] = this.csrfToken;
          }
          if (actions.length === 1) {
            requestData.args = actions[0].args;
            url += "/".concat(encodeURIComponent(actions[0].name));
          } else {
            url += '/_batch';
            requestData.actions = actions;
          }
        }
        fetchOptions.body = JSON.stringify(requestData);
      }
      var paramsString = params.toString();
      return new BackendRequest(fetch("".concat(url).concat(paramsString.length > 0 ? "?".concat(paramsString) : ''), fetchOptions), actions.map(function (backendAction) {
        return backendAction.name;
      }), updatedModels);
    }
  }, {
    key: "willDataFitInUrl",
    value: function willDataFitInUrl(dataJson, params, childrenFingerprintsJson) {
      var urlEncodedJsonData = new URLSearchParams(dataJson + childrenFingerprintsJson).toString();
      return (urlEncodedJsonData + params.toString()).length < 1500;
    }
  }]);
  return Backend;
}();
var StandardElementDriver = /*#__PURE__*/function () {
  function StandardElementDriver() {
    _classCallCheck(this, StandardElementDriver);
  }
  _createClass(StandardElementDriver, [{
    key: "getModelName",
    value: function getModelName(element) {
      var modelDirective = getModelDirectiveFromElement(element, false);
      if (!modelDirective) {
        return null;
      }
      return modelDirective.action;
    }
  }, {
    key: "getComponentProps",
    value: function getComponentProps(rootElement) {
      if (!rootElement.dataset.livePropsValue) {
        return null;
      }
      return JSON.parse(rootElement.dataset.livePropsValue);
    }
  }, {
    key: "findChildComponentElement",
    value: function findChildComponentElement(id, element) {
      return element.querySelector("[data-live-id=".concat(id, "]"));
    }
  }, {
    key: "getKeyFromElement",
    value: function getKeyFromElement(element) {
      return element.dataset.liveId || null;
    }
  }]);
  return StandardElementDriver;
}();
var LoadingPlugin = /*#__PURE__*/function () {
  function LoadingPlugin() {
    _classCallCheck(this, LoadingPlugin);
  }
  _createClass(LoadingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this11 = this;
      component.on('loading.state:started', function (element, request) {
        _this11.startLoading(element, request);
      });
      component.on('loading.state:finished', function (element) {
        _this11.finishLoading(element);
      });
      this.finishLoading(component.element);
    }
  }, {
    key: "startLoading",
    value: function startLoading(targetElement, backendRequest) {
      this.handleLoadingToggle(true, targetElement, backendRequest);
    }
  }, {
    key: "finishLoading",
    value: function finishLoading(targetElement) {
      this.handleLoadingToggle(false, targetElement, null);
    }
  }, {
    key: "handleLoadingToggle",
    value: function handleLoadingToggle(isLoading, targetElement, backendRequest) {
      var _this12 = this;
      if (isLoading) {
        this.addAttributes(targetElement, ['busy']);
      } else {
        this.removeAttributes(targetElement, ['busy']);
      }
      this.getLoadingDirectives(targetElement).forEach(function (_ref4) {
        var element = _ref4.element,
          directives = _ref4.directives;
        if (isLoading) {
          _this12.addAttributes(element, ['data-live-is-loading']);
        } else {
          _this12.removeAttributes(element, ['data-live-is-loading']);
        }
        directives.forEach(function (directive) {
          _this12.handleLoadingDirective(element, isLoading, directive, backendRequest);
        });
      });
    }
  }, {
    key: "handleLoadingDirective",
    value: function handleLoadingDirective(element, isLoading, directive, backendRequest) {
      var _this13 = this;
      var finalAction = parseLoadingAction(directive.action, isLoading);
      var targetedActions = [];
      var targetedModels = [];
      var delay = 0;
      var validModifiers = new Map();
      validModifiers.set('delay', function (modifier) {
        if (!isLoading) {
          return;
        }
        delay = modifier.value ? parseInt(modifier.value) : 200;
      });
      validModifiers.set('action', function (modifier) {
        if (!modifier.value) {
          throw new Error("The \"action\" in data-loading must have an action name - e.g. action(foo). It's missing for \"".concat(directive.getString(), "\""));
        }
        targetedActions.push(modifier.value);
      });
      validModifiers.set('model', function (modifier) {
        if (!modifier.value) {
          throw new Error("The \"model\" in data-loading must have an action name - e.g. model(foo). It's missing for \"".concat(directive.getString(), "\""));
        }
        targetedModels.push(modifier.value);
      });
      directive.modifiers.forEach(function (modifier) {
        var _a;
        if (validModifiers.has(modifier.name)) {
          var callable = (_a = validModifiers.get(modifier.name)) !== null && _a !== void 0 ? _a : function () {};
          callable(modifier);
          return;
        }
        throw new Error("Unknown modifier \"".concat(modifier.name, "\" used in data-loading=\"").concat(directive.getString(), "\". Available modifiers are: ").concat(Array.from(validModifiers.keys()).join(', '), "."));
      });
      if (isLoading && targetedActions.length > 0 && backendRequest && !backendRequest.containsOneOfActions(targetedActions)) {
        return;
      }
      if (isLoading && targetedModels.length > 0 && backendRequest && !backendRequest.areAnyModelsUpdated(targetedModels)) {
        return;
      }
      var loadingDirective;
      switch (finalAction) {
        case 'show':
          loadingDirective = function loadingDirective() {
            _this13.showElement(element);
          };
          break;
        case 'hide':
          loadingDirective = function loadingDirective() {
            return _this13.hideElement(element);
          };
          break;
        case 'addClass':
          loadingDirective = function loadingDirective() {
            return _this13.addClass(element, directive.args);
          };
          break;
        case 'removeClass':
          loadingDirective = function loadingDirective() {
            return _this13.removeClass(element, directive.args);
          };
          break;
        case 'addAttribute':
          loadingDirective = function loadingDirective() {
            return _this13.addAttributes(element, directive.args);
          };
          break;
        case 'removeAttribute':
          loadingDirective = function loadingDirective() {
            return _this13.removeAttributes(element, directive.args);
          };
          break;
        default:
          throw new Error("Unknown data-loading action \"".concat(finalAction, "\""));
      }
      if (delay) {
        window.setTimeout(function () {
          if (backendRequest && !backendRequest.isResolved) {
            loadingDirective();
          }
        }, delay);
        return;
      }
      loadingDirective();
    }
  }, {
    key: "getLoadingDirectives",
    value: function getLoadingDirectives(element) {
      var loadingDirectives = [];
      element.querySelectorAll('[data-loading]').forEach(function (element) {
        if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) {
          throw new Error('Invalid Element Type');
        }
        var directives = parseDirectives(element.dataset.loading || 'show');
        loadingDirectives.push({
          element: element,
          directives: directives
        });
      });
      return loadingDirectives;
    }
  }, {
    key: "showElement",
    value: function showElement(element) {
      element.style.display = 'inline-block';
    }
  }, {
    key: "hideElement",
    value: function hideElement(element) {
      element.style.display = 'none';
    }
  }, {
    key: "addClass",
    value: function addClass(element, classes) {
      var _element$classList;
      (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(combineSpacedArray(classes)));
    }
  }, {
    key: "removeClass",
    value: function removeClass(element, classes) {
      var _element$classList2;
      (_element$classList2 = element.classList).remove.apply(_element$classList2, _toConsumableArray(combineSpacedArray(classes)));
      if (element.classList.length === 0) {
        this.removeAttributes(element, ['class']);
      }
    }
  }, {
    key: "addAttributes",
    value: function addAttributes(element, attributes) {
      attributes.forEach(function (attribute) {
        element.setAttribute(attribute, '');
      });
    }
  }, {
    key: "removeAttributes",
    value: function removeAttributes(element, attributes) {
      attributes.forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    }
  }]);
  return LoadingPlugin;
}();
var parseLoadingAction = function parseLoadingAction(action, isLoading) {
  switch (action) {
    case 'show':
      return isLoading ? 'show' : 'hide';
    case 'hide':
      return isLoading ? 'hide' : 'show';
    case 'addClass':
      return isLoading ? 'addClass' : 'removeClass';
    case 'removeClass':
      return isLoading ? 'removeClass' : 'addClass';
    case 'addAttribute':
      return isLoading ? 'addAttribute' : 'removeAttribute';
    case 'removeAttribute':
      return isLoading ? 'removeAttribute' : 'addAttribute';
  }
  throw new Error("Unknown data-loading action \"".concat(action, "\""));
};
var ValidatedFieldsPlugin = /*#__PURE__*/function () {
  function ValidatedFieldsPlugin() {
    _classCallCheck(this, ValidatedFieldsPlugin);
  }
  _createClass(ValidatedFieldsPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this14 = this;
      component.on('model:set', function (modelName) {
        _this14.handleModelSet(modelName, component.valueStore);
      });
    }
  }, {
    key: "handleModelSet",
    value: function handleModelSet(modelName, valueStore) {
      if (valueStore.has('validatedFields')) {
        var validatedFields = _toConsumableArray(valueStore.get('validatedFields'));
        if (!validatedFields.includes(modelName)) {
          validatedFields.push(modelName);
        }
        valueStore.set('validatedFields', validatedFields);
      }
    }
  }]);
  return ValidatedFieldsPlugin;
}();
var PageUnloadingPlugin = /*#__PURE__*/function () {
  function PageUnloadingPlugin() {
    _classCallCheck(this, PageUnloadingPlugin);
    this.isConnected = false;
  }
  _createClass(PageUnloadingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this15 = this;
      component.on('render:started', function (html, response, controls) {
        if (!_this15.isConnected) {
          controls.shouldRender = false;
        }
      });
      component.on('connect', function () {
        _this15.isConnected = true;
      });
      component.on('disconnect', function () {
        _this15.isConnected = false;
      });
    }
  }]);
  return PageUnloadingPlugin;
}();
var PollingDirector = /*#__PURE__*/function () {
  function PollingDirector(component) {
    _classCallCheck(this, PollingDirector);
    this.isPollingActive = true;
    this.pollingIntervals = [];
    this.component = component;
  }
  _createClass(PollingDirector, [{
    key: "addPoll",
    value: function addPoll(actionName, duration) {
      this.polls.push({
        actionName: actionName,
        duration: duration
      });
      if (this.isPollingActive) {
        this.initiatePoll(actionName, duration);
      }
    }
  }, {
    key: "startAllPolling",
    value: function startAllPolling() {
      var _this16 = this;
      if (this.isPollingActive) {
        return;
      }
      this.isPollingActive = true;
      this.polls.forEach(function (_ref5) {
        var actionName = _ref5.actionName,
          duration = _ref5.duration;
        _this16.initiatePoll(actionName, duration);
      });
    }
  }, {
    key: "stopAllPolling",
    value: function stopAllPolling() {
      this.isPollingActive = false;
      this.pollingIntervals.forEach(function (interval) {
        clearInterval(interval);
      });
    }
  }, {
    key: "clearPolling",
    value: function clearPolling() {
      this.stopAllPolling();
      this.polls = [];
      this.startAllPolling();
    }
  }, {
    key: "initiatePoll",
    value: function initiatePoll(actionName, duration) {
      var _this17 = this;
      var callback;
      if (actionName === '$render') {
        callback = function callback() {
          _this17.component.render();
        };
      } else {
        callback = function callback() {
          _this17.component.action(actionName, {}, 0);
        };
      }
      var timer = setInterval(function () {
        callback();
      }, duration);
      this.pollingIntervals.push(timer);
    }
  }]);
  return PollingDirector;
}();
var PollingPlugin = /*#__PURE__*/function () {
  function PollingPlugin() {
    _classCallCheck(this, PollingPlugin);
  }
  _createClass(PollingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this18 = this;
      this.element = component.element;
      this.pollingDirector = new PollingDirector(component);
      this.initializePolling();
      component.on('connect', function () {
        _this18.pollingDirector.startAllPolling();
      });
      component.on('disconnect', function () {
        _this18.pollingDirector.stopAllPolling();
      });
      component.on('render:finished', function () {
        _this18.initializePolling();
      });
    }
  }, {
    key: "addPoll",
    value: function addPoll(actionName, duration) {
      this.pollingDirector.addPoll(actionName, duration);
    }
  }, {
    key: "clearPolling",
    value: function clearPolling() {
      this.pollingDirector.clearPolling();
    }
  }, {
    key: "initializePolling",
    value: function initializePolling() {
      var _this19 = this;
      this.clearPolling();
      if (this.element.dataset.poll === undefined) {
        return;
      }
      var rawPollConfig = this.element.dataset.poll;
      var directives = parseDirectives(rawPollConfig || '$render');
      directives.forEach(function (directive) {
        var duration = 2000;
        directive.modifiers.forEach(function (modifier) {
          switch (modifier.name) {
            case 'delay':
              if (modifier.value) {
                duration = parseInt(modifier.value);
              }
              break;
            default:
              console.warn("Unknown modifier \"".concat(modifier.name, "\" in data-poll \"").concat(rawPollConfig, "\"."));
          }
        });
        _this19.addPoll(directive.action, duration);
      });
    }
  }]);
  return PollingPlugin;
}();
var SetValueOntoModelFieldsPlugin = /*#__PURE__*/function () {
  function SetValueOntoModelFieldsPlugin() {
    _classCallCheck(this, SetValueOntoModelFieldsPlugin);
  }
  _createClass(SetValueOntoModelFieldsPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this20 = this;
      this.synchronizeValueOfModelFields(component);
      component.on('render:finished', function () {
        _this20.synchronizeValueOfModelFields(component);
      });
    }
  }, {
    key: "synchronizeValueOfModelFields",
    value: function synchronizeValueOfModelFields(component) {
      component.element.querySelectorAll('[data-model]').forEach(function (element) {
        if (!(element instanceof HTMLElement)) {
          throw new Error('Invalid element using data-model.');
        }
        if (element instanceof HTMLFormElement) {
          return;
        }
        if (!elementBelongsToThisComponent(element, component)) {
          return;
        }
        var modelDirective = getModelDirectiveFromElement(element);
        if (!modelDirective) {
          return;
        }
        var modelName = modelDirective.action;
        if (component.getUnsyncedModels().includes(modelName)) {
          return;
        }
        if (component.valueStore.has(modelName)) {
          setValueOnElement(element, component.valueStore.get(modelName));
        }
        if (element instanceof HTMLSelectElement && !element.multiple) {
          component.valueStore.set(modelName, getValueFromElement(element, component.valueStore));
        }
      });
    }
  }]);
  return SetValueOntoModelFieldsPlugin;
}();
function getModelBinding(modelDirective) {
  var shouldRender = true;
  var targetEventName = null;
  var debounce = false;
  modelDirective.modifiers.forEach(function (modifier) {
    switch (modifier.name) {
      case 'on':
        if (!modifier.value) {
          throw new Error("The \"on\" modifier in ".concat(modelDirective.getString(), " requires a value - e.g. on(change)."));
        }
        if (!['input', 'change'].includes(modifier.value)) {
          throw new Error("The \"on\" modifier in ".concat(modelDirective.getString(), " only accepts the arguments \"input\" or \"change\"."));
        }
        targetEventName = modifier.value;
        break;
      case 'norender':
        shouldRender = false;
        break;
      case 'debounce':
        debounce = modifier.value ? parseInt(modifier.value) : true;
        break;
      default:
        throw new Error("Unknown modifier \"".concat(modifier.name, "\" in data-model=\"").concat(modelDirective.getString(), "\"."));
    }
  });
  var _modelDirective$actio = modelDirective.action.split(':'),
    _modelDirective$actio2 = _slicedToArray(_modelDirective$actio, 2),
    modelName = _modelDirective$actio2[0],
    innerModelName = _modelDirective$actio2[1];
  return {
    modelName: modelName,
    innerModelName: innerModelName || null,
    shouldRender: shouldRender,
    debounce: debounce,
    targetEventName: targetEventName
  };
}
var ComponentRegistry = /*#__PURE__*/function () {
  function ComponentRegistry() {
    _classCallCheck(this, ComponentRegistry);
    this.components = new WeakMap();
  }
  _createClass(ComponentRegistry, [{
    key: "registerComponent",
    value: function registerComponent(element, definition) {
      this.components.set(element, definition);
    }
  }, {
    key: "unregisterComponent",
    value: function unregisterComponent(element) {
      this.components["delete"](element);
    }
  }, {
    key: "getComponent",
    value: function getComponent(element) {
      var _this21 = this;
      return new Promise(function (resolve, reject) {
        var count = 0;
        var maxCount = 10;
        var interval = setInterval(function () {
          var component = _this21.components.get(element);
          if (component) {
            resolve(component);
          }
          count++;
          if (count > maxCount) {
            clearInterval(interval);
            reject(new Error("Component not found for element ".concat(getElementAsTagText(element))));
          }
        }, 5);
      });
    }
  }]);
  return ComponentRegistry;
}();
var ComponentRegistry$1 = new ComponentRegistry();
var getComponent = function getComponent(element) {
  return ComponentRegistry$1.getComponent(element);
};
var default_1 = /*#__PURE__*/function (_Controller) {
  _inherits(default_1, _Controller);
  var _super = _createSuper(default_1);
  function default_1() {
    var _this22;
    _classCallCheck(this, default_1);
    _this22 = _super.apply(this, arguments);
    _this22.pendingActionTriggerModelElement = null;
    _this22.elementEventListeners = [{
      event: 'input',
      callback: function callback(event) {
        return _this22.handleInputEvent(event);
      }
    }, {
      event: 'change',
      callback: function callback(event) {
        return _this22.handleChangeEvent(event);
      }
    }, {
      event: 'live:connect',
      callback: function callback(event) {
        return _this22.handleConnectedControllerEvent(event);
      }
    }];
    return _this22;
  }
  _createClass(default_1, [{
    key: "initialize",
    value: function initialize() {
      var _this23 = this;
      this.handleDisconnectedChildControllerEvent = this.handleDisconnectedChildControllerEvent.bind(this);
      var id = this.element.dataset.liveId || null;
      this.component = new Component(this.element, this.propsValue, this.fingerprintValue, id, new Backend(this.urlValue, this.csrfValue), new StandardElementDriver());
      this.proxiedComponent = proxifyComponent(this.component);
      this.element.__component = this.proxiedComponent;
      if (this.hasDebounceValue) {
        this.component.defaultDebounce = this.debounceValue;
      }
      var plugins = [new LoadingPlugin(), new ValidatedFieldsPlugin(), new PageUnloadingPlugin(), new PollingPlugin(), new SetValueOntoModelFieldsPlugin()];
      plugins.forEach(function (plugin) {
        _this23.component.addPlugin(plugin);
      });
    }
  }, {
    key: "connect",
    value: function connect() {
      var _this24 = this;
      this.component.connect();
      this.elementEventListeners.forEach(function (_ref6) {
        var event = _ref6.event,
          callback = _ref6.callback;
        _this24.component.element.addEventListener(event, callback);
      });
      ComponentRegistry$1.registerComponent(this.element, this.component);
      this.dispatchEvent('connect');
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      var _this25 = this;
      this.component.disconnect();
      this.elementEventListeners.forEach(function (_ref7) {
        var event = _ref7.event,
          callback = _ref7.callback;
        _this25.component.element.removeEventListener(event, callback);
      });
      ComponentRegistry$1.unregisterComponent(this.element);
      this.dispatchEvent('disconnect');
    }
  }, {
    key: "update",
    value: function update(event) {
      if (event.type === 'input' || event.type === 'change') {
        throw new Error("Since LiveComponents 2.3, you no longer need data-action=\"live#update\" on form elements. Found on element: ".concat(getElementAsTagText(event.target)));
      }
      this.updateModelFromElementEvent(event.target, null);
    }
  }, {
    key: "action",
    value: function action(event) {
      var _this26 = this;
      var rawAction = event.currentTarget.dataset.actionName;
      var directives = parseDirectives(rawAction);
      var debounce = false;
      directives.forEach(function (directive) {
        var validModifiers = new Map();
        validModifiers.set('prevent', function () {
          event.preventDefault();
        });
        validModifiers.set('stop', function () {
          event.stopPropagation();
        });
        validModifiers.set('self', function () {
          if (event.target !== event.currentTarget) {
            return;
          }
        });
        validModifiers.set('debounce', function (modifier) {
          debounce = modifier.value ? parseInt(modifier.value) : true;
        });
        directive.modifiers.forEach(function (modifier) {
          var _a;
          if (validModifiers.has(modifier.name)) {
            var callable = (_a = validModifiers.get(modifier.name)) !== null && _a !== void 0 ? _a : function () {};
            callable(modifier);
            return;
          }
          console.warn("Unknown modifier ".concat(modifier.name, " in action \"").concat(rawAction, "\". Available modifiers are: ").concat(Array.from(validModifiers.keys()).join(', '), "."));
        });
        _this26.component.action(directive.action, directive.named, debounce);
        if (getModelDirectiveFromElement(event.currentTarget, false)) {
          _this26.pendingActionTriggerModelElement = event.currentTarget;
        }
      });
    }
  }, {
    key: "$render",
    value: function $render() {
      return this.component.render();
    }
  }, {
    key: "$updateModel",
    value: function $updateModel(model, value) {
      var shouldRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var debounce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return this.component.set(model, value, shouldRender, debounce);
    }
  }, {
    key: "handleInputEvent",
    value: function handleInputEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElementEvent(target, 'input');
    }
  }, {
    key: "handleChangeEvent",
    value: function handleChangeEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElementEvent(target, 'change');
    }
  }, {
    key: "updateModelFromElementEvent",
    value: function updateModelFromElementEvent(element, eventName) {
      if (!elementBelongsToThisComponent(element, this.component)) {
        return;
      }
      if (!(element instanceof HTMLElement)) {
        throw new Error('Could not update model for non HTMLElement');
      }
      var modelDirective = getModelDirectiveFromElement(element, false);
      if (!modelDirective) {
        return;
      }
      var modelBinding = getModelBinding(modelDirective);
      if (!modelBinding.targetEventName) {
        modelBinding.targetEventName = 'input';
      }
      if (this.pendingActionTriggerModelElement === element) {
        modelBinding.shouldRender = false;
      }
      if (eventName === 'change' && modelBinding.targetEventName === 'input') {
        modelBinding.targetEventName = 'change';
      }
      if (eventName && modelBinding.targetEventName !== eventName) {
        return;
      }
      if (false === modelBinding.debounce) {
        if (modelBinding.targetEventName === 'input') {
          modelBinding.debounce = true;
        } else {
          modelBinding.debounce = 0;
        }
      }
      var finalValue = getValueFromElement(element, this.component.valueStore);
      this.component.set(modelBinding.modelName, finalValue, modelBinding.shouldRender, modelBinding.debounce);
    }
  }, {
    key: "handleConnectedControllerEvent",
    value: function handleConnectedControllerEvent(event) {
      if (event.target === this.element) {
        return;
      }
      var childController = event.detail.controller;
      if (childController.component.getParent()) {
        return;
      }
      var modelDirectives = getAllModelDirectiveFromElements(childController.element);
      var modelBindings = modelDirectives.map(getModelBinding);
      this.component.addChild(childController.component, modelBindings);
      childController.element.addEventListener('live:disconnect', this.handleDisconnectedChildControllerEvent);
    }
  }, {
    key: "handleDisconnectedChildControllerEvent",
    value: function handleDisconnectedChildControllerEvent(event) {
      var childController = event.detail.controller;
      childController.element.removeEventListener('live:disconnect', this.handleDisconnectedChildControllerEvent);
      if (childController.component.getParent() !== this.component) {
        return;
      }
      this.component.removeChild(childController.component);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var canBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var cancelable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      detail.controller = this;
      detail.component = this.proxiedComponent;
      this.dispatch(name, {
        detail: detail,
        prefix: 'live',
        cancelable: cancelable,
        bubbles: canBubble
      });
    }
  }]);
  return default_1;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_59__.Controller);
default_1.values = {
  url: String,
  props: Object,
  csrf: String,
  debounce: {
    type: Number,
    "default": 150
  },
  id: String,
  fingerprint: String
};


/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./vendor/symfony/ux-live-component/assets/styles/live.css":
/*!*****************************************************************!*\
  !*** ./vendor/symfony/ux-live-component/assets/styles/live.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-0f9479"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0VBQ3hDNk4sRUFBRSxFQUFFbk8sTUFBTTtFQUNWeVYsV0FBVyxFQUFFelY7QUFDakIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzcxRUQ7Ozs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9hc3NldHMvZGlzdC9saXZlX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzNmYmEiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvYXNzZXRzL3N0eWxlcy9saXZlLmNzcz83NTVkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImltcG9ydCAnQHN5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvc3R5bGVzL2xpdmUuY3NzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ2xpdmUnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvZGlzdC9saXZlX2NvbnRyb2xsZXIuanMnKSxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5mdW5jdGlvbiBwYXJzZURpcmVjdGl2ZXMoY29udGVudCkge1xuICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBbXTtcbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG4gICAgfVxuICAgIGxldCBjdXJyZW50QWN0aW9uTmFtZSA9ICcnO1xuICAgIGxldCBjdXJyZW50QXJndW1lbnROYW1lID0gJyc7XG4gICAgbGV0IGN1cnJlbnRBcmd1bWVudFZhbHVlID0gJyc7XG4gICAgbGV0IGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcbiAgICBsZXQgY3VycmVudE5hbWVkQXJndW1lbnRzID0ge307XG4gICAgbGV0IGN1cnJlbnRNb2RpZmllcnMgPSBbXTtcbiAgICBsZXQgc3RhdGUgPSAnYWN0aW9uJztcbiAgICBjb25zdCBnZXRMYXN0QWN0aW9uTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRBY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEFjdGlvbk5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGFueSBkaXJlY3RpdmVzJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZXNbZGlyZWN0aXZlcy5sZW5ndGggLSAxXS5hY3Rpb247XG4gICAgfTtcbiAgICBjb25zdCBwdXNoSW5zdHJ1Y3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpcmVjdGl2ZXMucHVzaCh7XG4gICAgICAgICAgICBhY3Rpb246IGN1cnJlbnRBY3Rpb25OYW1lLFxuICAgICAgICAgICAgYXJnczogY3VycmVudEFyZ3VtZW50cyxcbiAgICAgICAgICAgIG5hbWVkOiBjdXJyZW50TmFtZWRBcmd1bWVudHMsXG4gICAgICAgICAgICBtb2RpZmllcnM6IGN1cnJlbnRNb2RpZmllcnMsXG4gICAgICAgICAgICBnZXRTdHJpbmc6ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnRBY3Rpb25OYW1lID0gJyc7XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudE5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50cyA9IFtdO1xuICAgICAgICBjdXJyZW50TmFtZWRBcmd1bWVudHMgPSB7fTtcbiAgICAgICAgY3VycmVudE1vZGlmaWVycyA9IFtdO1xuICAgICAgICBzdGF0ZSA9ICdhY3Rpb24nO1xuICAgIH07XG4gICAgY29uc3QgcHVzaEFyZ3VtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtaXhlZEFyZ1R5cGVzRXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vcm1hbCBhbmQgbmFtZWQgYXJndW1lbnRzIGNhbm5vdCBiZSBtaXhlZCBpbnNpZGUgXCIke2N1cnJlbnRBY3Rpb25OYW1lfSgpXCJgKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGN1cnJlbnRBcmd1bWVudE5hbWUpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50QXJndW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBtaXhlZEFyZ1R5cGVzRXJyb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnROYW1lZEFyZ3VtZW50c1tjdXJyZW50QXJndW1lbnROYW1lLnRyaW0oKV0gPSBjdXJyZW50QXJndW1lbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhjdXJyZW50TmFtZWRBcmd1bWVudHMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBtaXhlZEFyZ1R5cGVzRXJyb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRBcmd1bWVudHMucHVzaChjdXJyZW50QXJndW1lbnRWYWx1ZS50cmltKCkpO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudE5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICB9O1xuICAgIGNvbnN0IHB1c2hNb2RpZmllciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbW9kaWZpZXIgXCIke2N1cnJlbnRBY3Rpb25OYW1lfSgpXCIgZG9lcyBub3Qgc3VwcG9ydCBtdWx0aXBsZSBhcmd1bWVudHMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGN1cnJlbnROYW1lZEFyZ3VtZW50cykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbW9kaWZpZXIgXCIke2N1cnJlbnRBY3Rpb25OYW1lfSgpXCIgZG9lcyBub3Qgc3VwcG9ydCBuYW1lZCBhcmd1bWVudHMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudE1vZGlmaWVycy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IGN1cnJlbnRBY3Rpb25OYW1lLFxuICAgICAgICAgICAgdmFsdWU6IGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMCA/IGN1cnJlbnRBcmd1bWVudHNbMF0gOiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudEFjdGlvbk5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50TmFtZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnRzID0gW107XG4gICAgICAgIHN0YXRlID0gJ2FjdGlvbic7XG4gICAgfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hhciA9IGNvbnRlbnRbaV07XG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FjdGlvbic6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcoJykge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9ICdhcmd1bWVudHMnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcgJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1c2hJbnN0cnVjdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJ3wnKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hNb2RpZmllcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudEFjdGlvbk5hbWUgKz0gY2hhcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FyZ3VtZW50cyc6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcpJykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoQXJndW1lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAnYWZ0ZXJfYXJndW1lbnRzJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaEFyZ3VtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJz0nKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBcmd1bWVudE5hbWUgPSBjdXJyZW50QXJndW1lbnRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRBcmd1bWVudFZhbHVlICs9IGNoYXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhZnRlcl9hcmd1bWVudHMnOlxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnfCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaE1vZGlmaWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciAhPT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBzcGFjZSBhZnRlciAke2dldExhc3RBY3Rpb25OYW1lKCl9KClgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHVzaEluc3RydWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICBjYXNlICdhY3Rpb24nOlxuICAgICAgICBjYXNlICdhZnRlcl9hcmd1bWVudHMnOlxuICAgICAgICAgICAgaWYgKGN1cnJlbnRBY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICAgICAgcHVzaEluc3RydWN0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRGlkIHlvdSBmb3JnZXQgdG8gYWRkIGEgY2xvc2luZyBcIilcIiBhZnRlciBcIiR7Y3VycmVudEFjdGlvbk5hbWV9XCI/YCk7XG4gICAgfVxuICAgIHJldHVybiBkaXJlY3RpdmVzO1xufVxuXG5mdW5jdGlvbiBjb21iaW5lU3BhY2VkQXJyYXkocGFydHMpIHtcbiAgICBjb25zdCBmaW5hbFBhcnRzID0gW107XG4gICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4ge1xuICAgICAgICBmaW5hbFBhcnRzLnB1c2goLi4ucGFydC5zcGxpdCgnICcpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZmluYWxQYXJ0cztcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCkge1xuICAgIHJldHVybiAobW9kZWxcbiAgICAgICAgLnJlcGxhY2UoL1xcW10kLywgJycpXG4gICAgICAgIC5zcGxpdCgnWycpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgnXScsICcnKTtcbiAgICB9KVxuICAgICAgICAuam9pbignLicpKTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB2YWx1ZVN0b3JlKSB7XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vZGVsTmFtZURhdGEgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKG1vZGVsTmFtZURhdGEgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1vZGVsVmFsdWUgPSB2YWx1ZVN0b3JlLmdldChtb2RlbE5hbWVEYXRhLmFjdGlvbik7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtb2RlbFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUoZWxlbWVudCwgbW9kZWxWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jaGVja2VkID8gaW5wdXRWYWx1ZShlbGVtZW50KSA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlucHV0VmFsdWUoZWxlbWVudCk7XG4gICAgfVxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuc2VsZWN0ZWRPcHRpb25zKS5tYXAoKGVsKSA9PiBlbC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQudmFsdWU7XG4gICAgfVxuICAgIGlmIChlbGVtZW50LmRhdGFzZXQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZGF0YXNldC52YWx1ZTtcbiAgICB9XG4gICAgaWYgKCd2YWx1ZScgaW4gZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBzZXRWYWx1ZU9uRWxlbWVudChlbGVtZW50LCB2YWx1ZSkge1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBlbGVtZW50LnZhbHVlID09IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZUZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT0gZWxlbWVudC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSB2YWx1ZUZvdW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gZWxlbWVudC52YWx1ZSA9PSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGFycmF5V3JhcHBlZFZhbHVlID0gW10uY29uY2F0KHZhbHVlKS5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgKyAnJztcbiAgICAgICAgfSk7XG4gICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5vcHRpb25zKS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGFycmF5V3JhcHBlZFZhbHVlLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhbHVlID0gdmFsdWUgPT09IHVuZGVmaW5lZCA/ICcnIDogdmFsdWU7XG4gICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xufVxuZnVuY3Rpb24gZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudC5kYXRhc2V0Lm1vZGVsKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhlbGVtZW50LmRhdGFzZXQubW9kZWwpO1xuICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgIGlmIChkaXJlY3RpdmUuYXJncy5sZW5ndGggPiAwIHx8IGRpcmVjdGl2ZS5uYW1lZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkYXRhLW1vZGVsPVwiJHtlbGVtZW50LmRhdGFzZXQubW9kZWx9XCIgZm9ybWF0IGlzIGludmFsaWQ6IGl0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZyBhcmd1bWVudHMgdG8gdGhlIG1vZGVsLmApO1xuICAgICAgICB9XG4gICAgICAgIGRpcmVjdGl2ZS5hY3Rpb24gPSBub3JtYWxpemVNb2RlbE5hbWUoZGlyZWN0aXZlLmFjdGlvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG59XG5mdW5jdGlvbiBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRocm93T25NaXNzaW5nID0gdHJ1ZSkge1xuICAgIGNvbnN0IGRhdGFNb2RlbERpcmVjdGl2ZXMgPSBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyhlbGVtZW50KTtcbiAgICBpZiAoZGF0YU1vZGVsRGlyZWN0aXZlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBkYXRhTW9kZWxEaXJlY3RpdmVzWzBdO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSkge1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudCA9IGVsZW1lbnQuY2xvc2VzdCgnZm9ybScpO1xuICAgICAgICBpZiAoZm9ybUVsZW1lbnQgJiYgJ21vZGVsJyBpbiBmb3JtRWxlbWVudC5kYXRhc2V0KSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKGZvcm1FbGVtZW50LmRhdGFzZXQubW9kZWwgfHwgJyonKTtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IGRpcmVjdGl2ZXNbMF07XG4gICAgICAgICAgICBpZiAoZGlyZWN0aXZlLmFyZ3MubGVuZ3RoID4gMCB8fCBkaXJlY3RpdmUubmFtZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRhdGEtbW9kZWw9XCIke2Zvcm1FbGVtZW50LmRhdGFzZXQubW9kZWx9XCIgZm9ybWF0IGlzIGludmFsaWQ6IGl0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZyBhcmd1bWVudHMgdG8gdGhlIG1vZGVsLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlyZWN0aXZlLmFjdGlvbiA9IG5vcm1hbGl6ZU1vZGVsTmFtZShlbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpKTtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aHJvd09uTWlzc2luZykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZGV0ZXJtaW5lIHRoZSBtb2RlbCBuYW1lIGZvciBcIiR7Z2V0RWxlbWVudEFzVGFnVGV4dChlbGVtZW50KX1cIjogdGhlIGVsZW1lbnQgbXVzdCBlaXRoZXIgaGF2ZSBhIFwiZGF0YS1tb2RlbFwiIChvciBcIm5hbWVcIiBhdHRyaWJ1dGUgbGl2aW5nIGluc2lkZSBhIDxmb3JtIGRhdGEtbW9kZWw9XCIqXCI+KS5gKTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIGNvbXBvbmVudCkge1xuICAgIGlmIChjb21wb25lbnQuZWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFjb21wb25lbnQuZWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBmb3VuZENoaWxkQ29tcG9uZW50ID0gZmFsc2U7XG4gICAgY29tcG9uZW50LmdldENoaWxkcmVuKCkuZm9yRWFjaCgoY2hpbGRDb21wb25lbnQpID0+IHtcbiAgICAgICAgaWYgKGZvdW5kQ2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGRDb21wb25lbnQuZWxlbWVudCA9PT0gZWxlbWVudCB8fCBjaGlsZENvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBmb3VuZENoaWxkQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAhZm91bmRDaGlsZENvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGNsb25lSFRNTEVsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICBpZiAoIShuZXdFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGNsb25lIGVsZW1lbnQnKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5mdW5jdGlvbiBodG1sVG9FbGVtZW50KGh0bWwpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgaHRtbCA9IGh0bWwudHJpbSgpO1xuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgaWYgKHRlbXBsYXRlLmNvbnRlbnQuY2hpbGRFbGVtZW50Q291bnQgPiAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ29tcG9uZW50IEhUTUwgY29udGFpbnMgJHt0ZW1wbGF0ZS5jb250ZW50LmNoaWxkRWxlbWVudENvdW50fSBlbGVtZW50cywgYnV0IG9ubHkgMSByb290IGVsZW1lbnQgaXMgYWxsb3dlZC5gKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGQgPSB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGlsZCBub3QgZm91bmQnKTtcbiAgICB9XG4gICAgaWYgKCEoY2hpbGQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDcmVhdGVkIGVsZW1lbnQgaXMgbm90IGFuIEhUTUxFbGVtZW50OiAke2h0bWwudHJpbSgpfWApO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGQ7XG59XG5mdW5jdGlvbiBjbG9uZUVsZW1lbnRXaXRoTmV3VGFnTmFtZShlbGVtZW50LCBuZXdUYWcpIHtcbiAgICBjb25zdCBvcmlnaW5hbFRhZyA9IGVsZW1lbnQudGFnTmFtZTtcbiAgICBjb25zdCBzdGFydFJYID0gbmV3IFJlZ0V4cCgnXjwnICsgb3JpZ2luYWxUYWcsICdpJyk7XG4gICAgY29uc3QgZW5kUlggPSBuZXcgUmVnRXhwKG9yaWdpbmFsVGFnICsgJz4kJywgJ2knKTtcbiAgICBjb25zdCBzdGFydFN1YnN0ID0gJzwnICsgbmV3VGFnO1xuICAgIGNvbnN0IGVuZFN1YnN0ID0gbmV3VGFnICsgJz4nO1xuICAgIGNvbnN0IG5ld0hUTUwgPSBlbGVtZW50Lm91dGVySFRNTC5yZXBsYWNlKHN0YXJ0UlgsIHN0YXJ0U3Vic3QpLnJlcGxhY2UoZW5kUlgsIGVuZFN1YnN0KTtcbiAgICByZXR1cm4gaHRtbFRvRWxlbWVudChuZXdIVE1MKTtcbn1cbmZ1bmN0aW9uIGdldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmlubmVySFRNTFxuICAgICAgICA/IGVsZW1lbnQub3V0ZXJIVE1MLnNsaWNlKDAsIGVsZW1lbnQub3V0ZXJIVE1MLmluZGV4T2YoZWxlbWVudC5pbm5lckhUTUwpKVxuICAgICAgICA6IGVsZW1lbnQub3V0ZXJIVE1MO1xufVxuY29uc3QgZ2V0TXVsdGlwbGVDaGVja2JveFZhbHVlID0gZnVuY3Rpb24gKGVsZW1lbnQsIGN1cnJlbnRWYWx1ZXMpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGlucHV0VmFsdWUoZWxlbWVudCk7XG4gICAgY29uc3QgaW5kZXggPSBjdXJyZW50VmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgIGlmIChlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgY3VycmVudFZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudFZhbHVlcztcbiAgICB9XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgY3VycmVudFZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudFZhbHVlcztcbn07XG5jb25zdCBpbnB1dFZhbHVlID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0LnZhbHVlID8gZWxlbWVudC5kYXRhc2V0LnZhbHVlIDogZWxlbWVudC52YWx1ZTtcbn07XG5cbmZ1bmN0aW9uIGdldERlZXBEYXRhKGRhdGEsIHByb3BlcnR5UGF0aCkge1xuICAgIGNvbnN0IHsgY3VycmVudExldmVsRGF0YSwgZmluYWxLZXkgfSA9IHBhcnNlRGVlcERhdGEoZGF0YSwgcHJvcGVydHlQYXRoKTtcbiAgICBpZiAoY3VycmVudExldmVsRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50TGV2ZWxEYXRhW2ZpbmFsS2V5XTtcbn1cbmNvbnN0IHBhcnNlRGVlcERhdGEgPSBmdW5jdGlvbiAoZGF0YSwgcHJvcGVydHlQYXRoKSB7XG4gICAgY29uc3QgZmluYWxEYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgbGV0IGN1cnJlbnRMZXZlbERhdGEgPSBmaW5hbERhdGE7XG4gICAgY29uc3QgcGFydHMgPSBwcm9wZXJ0eVBhdGguc3BsaXQoJy4nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICBjdXJyZW50TGV2ZWxEYXRhID0gY3VycmVudExldmVsRGF0YVtwYXJ0c1tpXV07XG4gICAgfVxuICAgIGNvbnN0IGZpbmFsS2V5ID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudExldmVsRGF0YSxcbiAgICAgICAgZmluYWxEYXRhLFxuICAgICAgICBmaW5hbEtleSxcbiAgICAgICAgcGFydHMsXG4gICAgfTtcbn07XG5mdW5jdGlvbiBzZXREZWVwRGF0YShkYXRhLCBwcm9wZXJ0eVBhdGgsIHZhbHVlKSB7XG4gICAgY29uc3QgeyBjdXJyZW50TGV2ZWxEYXRhLCBmaW5hbERhdGEsIGZpbmFsS2V5LCBwYXJ0cyB9ID0gcGFyc2VEZWVwRGF0YShkYXRhLCBwcm9wZXJ0eVBhdGgpO1xuICAgIGlmICh0eXBlb2YgY3VycmVudExldmVsRGF0YSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgbGFzdFBhcnQgPSBwYXJ0cy5wb3AoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50TGV2ZWxEYXRhID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3Qgc2V0IGRhdGEtbW9kZWw9XCIke3Byb3BlcnR5UGF0aH1cIi4gVGhlIHBhcmVudCBcIiR7cGFydHMuam9pbignLicpfVwiIGRhdGEgZG9lcyBub3QgZXhpc3QuIERpZCB5b3UgZm9yZ2V0IHRvIGV4cG9zZSBcIiR7cGFydHNbMF19XCIgYXMgYSBMaXZlUHJvcD9gKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBzZXQgZGF0YS1tb2RlbD1cIiR7cHJvcGVydHlQYXRofVwiLiBUaGUgcGFyZW50IFwiJHtwYXJ0cy5qb2luKCcuJyl9XCIgZGF0YSBkb2VzIG5vdCBhcHBlYXIgdG8gYmUgYW4gb2JqZWN0IChpdCdzIFwiJHtjdXJyZW50TGV2ZWxEYXRhfVwiKS4gRGlkIHlvdSBmb3JnZXQgdG8gYWRkIGV4cG9zZWQ9e1wiJHtsYXN0UGFydH1cIn0gdG8gaXRzIExpdmVQcm9wP2ApO1xuICAgIH1cbiAgICBpZiAoY3VycmVudExldmVsRGF0YVtmaW5hbEtleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBsYXN0UGFydCA9IHBhcnRzLnBvcCgpO1xuICAgICAgICBpZiAocGFydHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbW9kZWwgbmFtZSAke3Byb3BlcnR5UGF0aH0gd2FzIG5ldmVyIGluaXRpYWxpemVkLiBEaWQgeW91IGZvcmdldCB0byBhZGQgZXhwb3NlZD17XCIke2xhc3RQYXJ0fVwifSB0byBpdHMgTGl2ZVByb3A/YCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtb2RlbCBuYW1lIFwiJHtwcm9wZXJ0eVBhdGh9XCIgd2FzIG5ldmVyIGluaXRpYWxpemVkLiBEaWQgeW91IGZvcmdldCB0byBleHBvc2UgXCIke2xhc3RQYXJ0fVwiIGFzIGEgTGl2ZVByb3A/IEF2YWlsYWJsZSBtb2RlbHMgdmFsdWVzIGFyZTogJHtPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPiAwID8gT2JqZWN0LmtleXMoZGF0YSkuam9pbignLCAnKSA6ICcobm9uZSknfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGN1cnJlbnRMZXZlbERhdGFbZmluYWxLZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIGZpbmFsRGF0YTtcbn1cblxuY2xhc3MgVmFsdWVTdG9yZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5pZGVudGlmaWVyS2V5ID0gJ0BpZCc7XG4gICAgICAgIHRoaXMudXBkYXRlZE1vZGVscyA9IFtdO1xuICAgICAgICB0aGlzLnByb3BzID0ge307XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICB9XG4gICAgZ2V0KG5hbWUpIHtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZE5hbWUgPSBub3JtYWxpemVNb2RlbE5hbWUobmFtZSk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0RGVlcERhdGEodGhpcy5wcm9wcywgbm9ybWFsaXplZE5hbWUpO1xuICAgICAgICBpZiAobnVsbCA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1Byb3BOYW1lVG9wTGV2ZWwobm9ybWFsaXplZE5hbWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWVbdGhpcy5pZGVudGlmaWVyS2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVbdGhpcy5pZGVudGlmaWVyS2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGhhcyhuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChuYW1lKSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzZXQobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgbGV0IG5vcm1hbGl6ZWROYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG5hbWUpO1xuICAgICAgICBpZiAodGhpcy5pc1Byb3BOYW1lVG9wTGV2ZWwobm9ybWFsaXplZE5hbWUpXG4gICAgICAgICAgICAmJiB0aGlzLnByb3BzW25vcm1hbGl6ZWROYW1lXSAhPT0gbnVsbFxuICAgICAgICAgICAgJiYgdHlwZW9mIHRoaXMucHJvcHNbbm9ybWFsaXplZE5hbWVdID09PSAnb2JqZWN0J1xuICAgICAgICAgICAgJiYgdGhpcy5wcm9wc1tub3JtYWxpemVkTmFtZV1bdGhpcy5pZGVudGlmaWVyS2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZWROYW1lICsgJy4nICsgdGhpcy5pZGVudGlmaWVyS2V5O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZ2V0KG5vcm1hbGl6ZWROYW1lKTtcbiAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSAhPT0gdmFsdWUgJiYgIXRoaXMudXBkYXRlZE1vZGVscy5pbmNsdWRlcyhub3JtYWxpemVkTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlZE1vZGVscy5wdXNoKG5vcm1hbGl6ZWROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzID0gc2V0RGVlcERhdGEodGhpcy5wcm9wcywgbm9ybWFsaXplZE5hbWUsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRWYWx1ZSAhPT0gdmFsdWU7XG4gICAgfVxuICAgIGFsbCgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpO1xuICAgIH1cbiAgICByZWluaXRpYWxpemVBbGxQcm9wcyhwcm9wcykge1xuICAgICAgICB0aGlzLnVwZGF0ZWRNb2RlbHMgPSBbXTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIH1cbiAgICByZWluaXRpYWxpemVQcm92aWRlZFByb3BzKHByb3BzKSB7XG4gICAgICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudElkZW50aWZpZXIgPSB0aGlzLmdldChrZXkpO1xuICAgICAgICAgICAgY29uc3QgbmV3SWRlbnRpZmllciA9IHRoaXMuZmluZElkZW50aWZpZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRJZGVudGlmaWVyICE9PSBuZXdJZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYW5nZWQ7XG4gICAgfVxuICAgIGlzUHJvcE5hbWVUb3BMZXZlbChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGtleS5pbmRleE9mKCcuJykgPT09IC0xO1xuICAgIH1cbiAgICBmaW5kSWRlbnRpZmllcih2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZVt0aGlzLmlkZW50aWZpZXJLZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWVbdGhpcy5pZGVudGlmaWVyS2V5XTtcbiAgICB9XG59XG5cbnZhciBET0NVTUVOVF9GUkFHTUVOVF9OT0RFID0gMTE7XG5cbmZ1bmN0aW9uIG1vcnBoQXR0cnMoZnJvbU5vZGUsIHRvTm9kZSkge1xuICAgIHZhciB0b05vZGVBdHRycyA9IHRvTm9kZS5hdHRyaWJ1dGVzO1xuICAgIHZhciBhdHRyO1xuICAgIHZhciBhdHRyTmFtZTtcbiAgICB2YXIgYXR0ck5hbWVzcGFjZVVSSTtcbiAgICB2YXIgYXR0clZhbHVlO1xuICAgIHZhciBmcm9tVmFsdWU7XG5cbiAgICAvLyBkb2N1bWVudC1mcmFnbWVudHMgZG9udCBoYXZlIGF0dHJpYnV0ZXMgc28gbGV0cyBub3QgZG8gYW55dGhpbmdcbiAgICBpZiAodG9Ob2RlLm5vZGVUeXBlID09PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFIHx8IGZyb21Ob2RlLm5vZGVUeXBlID09PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIGF0dHJpYnV0ZXMgb24gb3JpZ2luYWwgRE9NIGVsZW1lbnRcbiAgICBmb3IgKHZhciBpID0gdG9Ob2RlQXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgYXR0ciA9IHRvTm9kZUF0dHJzW2ldO1xuICAgICAgICBhdHRyTmFtZSA9IGF0dHIubmFtZTtcbiAgICAgICAgYXR0ck5hbWVzcGFjZVVSSSA9IGF0dHIubmFtZXNwYWNlVVJJO1xuICAgICAgICBhdHRyVmFsdWUgPSBhdHRyLnZhbHVlO1xuXG4gICAgICAgIGlmIChhdHRyTmFtZXNwYWNlVVJJKSB7XG4gICAgICAgICAgICBhdHRyTmFtZSA9IGF0dHIubG9jYWxOYW1lIHx8IGF0dHJOYW1lO1xuICAgICAgICAgICAgZnJvbVZhbHVlID0gZnJvbU5vZGUuZ2V0QXR0cmlidXRlTlMoYXR0ck5hbWVzcGFjZVVSSSwgYXR0ck5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoZnJvbVZhbHVlICE9PSBhdHRyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0ci5wcmVmaXggPT09ICd4bWxucycpe1xuICAgICAgICAgICAgICAgICAgICBhdHRyTmFtZSA9IGF0dHIubmFtZTsgLy8gSXQncyBub3QgYWxsb3dlZCB0byBzZXQgYW4gYXR0cmlidXRlIHdpdGggdGhlIFhNTE5TIG5hbWVzcGFjZSB3aXRob3V0IHNwZWNpZnlpbmcgdGhlIGB4bWxuc2AgcHJlZml4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZyb21Ob2RlLnNldEF0dHJpYnV0ZU5TKGF0dHJOYW1lc3BhY2VVUkksIGF0dHJOYW1lLCBhdHRyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnJvbVZhbHVlID0gZnJvbU5vZGUuZ2V0QXR0cmlidXRlKGF0dHJOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGZyb21WYWx1ZSAhPT0gYXR0clZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZnJvbU5vZGUuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFueSBleHRyYSBhdHRyaWJ1dGVzIGZvdW5kIG9uIHRoZSBvcmlnaW5hbCBET00gZWxlbWVudCB0aGF0XG4gICAgLy8gd2VyZW4ndCBmb3VuZCBvbiB0aGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAgdmFyIGZyb21Ob2RlQXR0cnMgPSBmcm9tTm9kZS5hdHRyaWJ1dGVzO1xuXG4gICAgZm9yICh2YXIgZCA9IGZyb21Ob2RlQXR0cnMubGVuZ3RoIC0gMTsgZCA+PSAwOyBkLS0pIHtcbiAgICAgICAgYXR0ciA9IGZyb21Ob2RlQXR0cnNbZF07XG4gICAgICAgIGF0dHJOYW1lID0gYXR0ci5uYW1lO1xuICAgICAgICBhdHRyTmFtZXNwYWNlVVJJID0gYXR0ci5uYW1lc3BhY2VVUkk7XG5cbiAgICAgICAgaWYgKGF0dHJOYW1lc3BhY2VVUkkpIHtcbiAgICAgICAgICAgIGF0dHJOYW1lID0gYXR0ci5sb2NhbE5hbWUgfHwgYXR0ck5hbWU7XG5cbiAgICAgICAgICAgIGlmICghdG9Ob2RlLmhhc0F0dHJpYnV0ZU5TKGF0dHJOYW1lc3BhY2VVUkksIGF0dHJOYW1lKSkge1xuICAgICAgICAgICAgICAgIGZyb21Ob2RlLnJlbW92ZUF0dHJpYnV0ZU5TKGF0dHJOYW1lc3BhY2VVUkksIGF0dHJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdG9Ob2RlLmhhc0F0dHJpYnV0ZShhdHRyTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBmcm9tTm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG52YXIgcmFuZ2U7IC8vIENyZWF0ZSBhIHJhbmdlIG9iamVjdCBmb3IgZWZmaWNlbnRseSByZW5kZXJpbmcgc3RyaW5ncyB0byBlbGVtZW50cy5cbnZhciBOU19YSFRNTCA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcblxudmFyIGRvYyA9IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBkb2N1bWVudDtcbnZhciBIQVNfVEVNUExBVEVfU1VQUE9SVCA9ICEhZG9jICYmICdjb250ZW50JyBpbiBkb2MuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnZhciBIQVNfUkFOR0VfU1VQUE9SVCA9ICEhZG9jICYmIGRvYy5jcmVhdGVSYW5nZSAmJiAnY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50JyBpbiBkb2MuY3JlYXRlUmFuZ2UoKTtcblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRGcm9tVGVtcGxhdGUoc3RyKSB7XG4gICAgdmFyIHRlbXBsYXRlID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gc3RyO1xuICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmNoaWxkTm9kZXNbMF07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50RnJvbVJhbmdlKHN0cikge1xuICAgIGlmICghcmFuZ2UpIHtcbiAgICAgICAgcmFuZ2UgPSBkb2MuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZShkb2MuYm9keSk7XG4gICAgfVxuXG4gICAgdmFyIGZyYWdtZW50ID0gcmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KHN0cik7XG4gICAgcmV0dXJuIGZyYWdtZW50LmNoaWxkTm9kZXNbMF07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50RnJvbVdyYXAoc3RyKSB7XG4gICAgdmFyIGZyYWdtZW50ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2JvZHknKTtcbiAgICBmcmFnbWVudC5pbm5lckhUTUwgPSBzdHI7XG4gICAgcmV0dXJuIGZyYWdtZW50LmNoaWxkTm9kZXNbMF07XG59XG5cbi8qKlxuICogVGhpcyBpcyBhYm91dCB0aGUgc2FtZVxuICogdmFyIGh0bWwgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHN0ciwgJ3RleHQvaHRtbCcpO1xuICogcmV0dXJuIGh0bWwuYm9keS5maXJzdENoaWxkO1xuICpcbiAqIEBtZXRob2QgdG9FbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKi9cbmZ1bmN0aW9uIHRvRWxlbWVudChzdHIpIHtcbiAgICBzdHIgPSBzdHIudHJpbSgpO1xuICAgIGlmIChIQVNfVEVNUExBVEVfU1VQUE9SVCkge1xuICAgICAgLy8gYXZvaWQgcmVzdHJpY3Rpb25zIG9uIGNvbnRlbnQgZm9yIHRoaW5ncyBsaWtlIGA8dHI+PHRoPkhpPC90aD48L3RyPmAgd2hpY2hcbiAgICAgIC8vIGNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCBkb2Vzbid0IHN1cHBvcnRcbiAgICAgIC8vIDx0ZW1wbGF0ZT4gc3VwcG9ydCBub3QgYXZhaWxhYmxlIGluIElFXG4gICAgICByZXR1cm4gY3JlYXRlRnJhZ21lbnRGcm9tVGVtcGxhdGUoc3RyKTtcbiAgICB9IGVsc2UgaWYgKEhBU19SQU5HRV9TVVBQT1JUKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRnJhZ21lbnRGcm9tUmFuZ2Uoc3RyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlRnJhZ21lbnRGcm9tV3JhcChzdHIpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0d28gbm9kZSdzIG5hbWVzIGFyZSB0aGUgc2FtZS5cbiAqXG4gKiBOT1RFOiBXZSBkb24ndCBib3RoZXIgY2hlY2tpbmcgYG5hbWVzcGFjZVVSSWAgYmVjYXVzZSB5b3Ugd2lsbCBuZXZlciBmaW5kIHR3byBIVE1MIGVsZW1lbnRzIHdpdGggdGhlIHNhbWVcbiAqICAgICAgIG5vZGVOYW1lIGFuZCBkaWZmZXJlbnQgbmFtZXNwYWNlIFVSSXMuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBhXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGIgVGhlIHRhcmdldCBlbGVtZW50XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBjb21wYXJlTm9kZU5hbWVzKGZyb21FbCwgdG9FbCkge1xuICAgIHZhciBmcm9tTm9kZU5hbWUgPSBmcm9tRWwubm9kZU5hbWU7XG4gICAgdmFyIHRvTm9kZU5hbWUgPSB0b0VsLm5vZGVOYW1lO1xuICAgIHZhciBmcm9tQ29kZVN0YXJ0LCB0b0NvZGVTdGFydDtcblxuICAgIGlmIChmcm9tTm9kZU5hbWUgPT09IHRvTm9kZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnJvbUNvZGVTdGFydCA9IGZyb21Ob2RlTmFtZS5jaGFyQ29kZUF0KDApO1xuICAgIHRvQ29kZVN0YXJ0ID0gdG9Ob2RlTmFtZS5jaGFyQ29kZUF0KDApO1xuXG4gICAgLy8gSWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIGEgdmlydHVhbCBET00gbm9kZSBvciBTVkcgbm9kZSB0aGVuIHdlIG1heVxuICAgIC8vIG5lZWQgdG8gbm9ybWFsaXplIHRoZSB0YWcgbmFtZSBiZWZvcmUgY29tcGFyaW5nLiBOb3JtYWwgSFRNTCBlbGVtZW50cyB0aGF0IGFyZVxuICAgIC8vIGluIHRoZSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIlxuICAgIC8vIGFyZSBjb252ZXJ0ZWQgdG8gdXBwZXIgY2FzZVxuICAgIGlmIChmcm9tQ29kZVN0YXJ0IDw9IDkwICYmIHRvQ29kZVN0YXJ0ID49IDk3KSB7IC8vIGZyb20gaXMgdXBwZXIgYW5kIHRvIGlzIGxvd2VyXG4gICAgICAgIHJldHVybiBmcm9tTm9kZU5hbWUgPT09IHRvTm9kZU5hbWUudG9VcHBlckNhc2UoKTtcbiAgICB9IGVsc2UgaWYgKHRvQ29kZVN0YXJ0IDw9IDkwICYmIGZyb21Db2RlU3RhcnQgPj0gOTcpIHsgLy8gdG8gaXMgdXBwZXIgYW5kIGZyb20gaXMgbG93ZXJcbiAgICAgICAgcmV0dXJuIHRvTm9kZU5hbWUgPT09IGZyb21Ob2RlTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGVsZW1lbnQsIG9wdGlvbmFsbHkgd2l0aCBhIGtub3duIG5hbWVzcGFjZSBVUkkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgdGhlIGVsZW1lbnQgbmFtZSwgZS5nLiAnZGl2JyBvciAnc3ZnJ1xuICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lc3BhY2VVUkldIHRoZSBlbGVtZW50J3MgbmFtZXNwYWNlIFVSSSwgaS5lLiB0aGUgdmFsdWUgb2ZcbiAqIGl0cyBgeG1sbnNgIGF0dHJpYnV0ZSBvciBpdHMgaW5mZXJyZWQgbmFtZXNwYWNlLlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnROUyhuYW1lLCBuYW1lc3BhY2VVUkkpIHtcbiAgICByZXR1cm4gIW5hbWVzcGFjZVVSSSB8fCBuYW1lc3BhY2VVUkkgPT09IE5TX1hIVE1MID9cbiAgICAgICAgZG9jLmNyZWF0ZUVsZW1lbnQobmFtZSkgOlxuICAgICAgICBkb2MuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZVVSSSwgbmFtZSk7XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSBjaGlsZHJlbiBvZiBvbmUgRE9NIGVsZW1lbnQgdG8gYW5vdGhlciBET00gZWxlbWVudFxuICovXG5mdW5jdGlvbiBtb3ZlQ2hpbGRyZW4oZnJvbUVsLCB0b0VsKSB7XG4gICAgdmFyIGN1ckNoaWxkID0gZnJvbUVsLmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUgKGN1ckNoaWxkKSB7XG4gICAgICAgIHZhciBuZXh0Q2hpbGQgPSBjdXJDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgdG9FbC5hcHBlbmRDaGlsZChjdXJDaGlsZCk7XG4gICAgICAgIGN1ckNoaWxkID0gbmV4dENoaWxkO1xuICAgIH1cbiAgICByZXR1cm4gdG9FbDtcbn1cblxuZnVuY3Rpb24gc3luY0Jvb2xlYW5BdHRyUHJvcChmcm9tRWwsIHRvRWwsIG5hbWUpIHtcbiAgICBpZiAoZnJvbUVsW25hbWVdICE9PSB0b0VsW25hbWVdKSB7XG4gICAgICAgIGZyb21FbFtuYW1lXSA9IHRvRWxbbmFtZV07XG4gICAgICAgIGlmIChmcm9tRWxbbmFtZV0pIHtcbiAgICAgICAgICAgIGZyb21FbC5zZXRBdHRyaWJ1dGUobmFtZSwgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnJvbUVsLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxudmFyIHNwZWNpYWxFbEhhbmRsZXJzID0ge1xuICAgIE9QVElPTjogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgIHZhciBwYXJlbnROb2RlID0gZnJvbUVsLnBhcmVudE5vZGU7XG4gICAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50TmFtZSA9IHBhcmVudE5vZGUubm9kZU5hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnROYW1lID09PSAnT1BUR1JPVVAnKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICBwYXJlbnROYW1lID0gcGFyZW50Tm9kZSAmJiBwYXJlbnROb2RlLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyZW50TmFtZSA9PT0gJ1NFTEVDVCcgJiYgIXBhcmVudE5vZGUuaGFzQXR0cmlidXRlKCdtdWx0aXBsZScpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZyb21FbC5oYXNBdHRyaWJ1dGUoJ3NlbGVjdGVkJykgJiYgIXRvRWwuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgTVMgRWRnZSBidWcgd2hlcmUgdGhlICdzZWxlY3RlZCcgYXR0cmlidXRlIGNhbiBvbmx5IGJlXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZWQgaWYgc2V0IHRvIGEgbm9uLWVtcHR5IHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMjA4NzY3OS9cbiAgICAgICAgICAgICAgICAgICAgZnJvbUVsLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZnJvbUVsLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byByZXNldCBzZWxlY3QgZWxlbWVudCdzIHNlbGVjdGVkSW5kZXggdG8gLTEsIG90aGVyd2lzZSBzZXR0aW5nXG4gICAgICAgICAgICAgICAgLy8gZnJvbUVsLnNlbGVjdGVkIHVzaW5nIHRoZSBzeW5jQm9vbGVhbkF0dHJQcm9wIGJlbG93IGhhcyBubyBlZmZlY3QuXG4gICAgICAgICAgICAgICAgLy8gVGhlIGNvcnJlY3Qgc2VsZWN0ZWRJbmRleCB3aWxsIGJlIHNldCBpbiB0aGUgU0VMRUNUIHNwZWNpYWwgaGFuZGxlciBiZWxvdy5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnNlbGVjdGVkSW5kZXggPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzeW5jQm9vbGVhbkF0dHJQcm9wKGZyb21FbCwgdG9FbCwgJ3NlbGVjdGVkJyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUaGUgXCJ2YWx1ZVwiIGF0dHJpYnV0ZSBpcyBzcGVjaWFsIGZvciB0aGUgPGlucHV0PiBlbGVtZW50IHNpbmNlIGl0IHNldHNcbiAgICAgKiB0aGUgaW5pdGlhbCB2YWx1ZS4gQ2hhbmdpbmcgdGhlIFwidmFsdWVcIiBhdHRyaWJ1dGUgd2l0aG91dCBjaGFuZ2luZyB0aGVcbiAgICAgKiBcInZhbHVlXCIgcHJvcGVydHkgd2lsbCBoYXZlIG5vIGVmZmVjdCBzaW5jZSBpdCBpcyBvbmx5IHVzZWQgdG8gdGhlIHNldCB0aGVcbiAgICAgKiBpbml0aWFsIHZhbHVlLiAgU2ltaWxhciBmb3IgdGhlIFwiY2hlY2tlZFwiIGF0dHJpYnV0ZSwgYW5kIFwiZGlzYWJsZWRcIi5cbiAgICAgKi9cbiAgICBJTlBVVDogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgIHN5bmNCb29sZWFuQXR0clByb3AoZnJvbUVsLCB0b0VsLCAnY2hlY2tlZCcpO1xuICAgICAgICBzeW5jQm9vbGVhbkF0dHJQcm9wKGZyb21FbCwgdG9FbCwgJ2Rpc2FibGVkJyk7XG5cbiAgICAgICAgaWYgKGZyb21FbC52YWx1ZSAhPT0gdG9FbC52YWx1ZSkge1xuICAgICAgICAgICAgZnJvbUVsLnZhbHVlID0gdG9FbC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdG9FbC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgIGZyb21FbC5yZW1vdmVBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgVEVYVEFSRUE6IGZ1bmN0aW9uKGZyb21FbCwgdG9FbCkge1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSB0b0VsLnZhbHVlO1xuICAgICAgICBpZiAoZnJvbUVsLnZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgZnJvbUVsLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZmlyc3RDaGlsZCA9IGZyb21FbC5maXJzdENoaWxkO1xuICAgICAgICBpZiAoZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgLy8gTmVlZGVkIGZvciBJRS4gQXBwYXJlbnRseSBJRSBzZXRzIHRoZSBwbGFjZWhvbGRlciBhcyB0aGVcbiAgICAgICAgICAgIC8vIG5vZGUgdmFsdWUgYW5kIHZpc2UgdmVyc2EuIFRoaXMgaWdub3JlcyBhbiBlbXB0eSB1cGRhdGUuXG4gICAgICAgICAgICB2YXIgb2xkVmFsdWUgPSBmaXJzdENoaWxkLm5vZGVWYWx1ZTtcblxuICAgICAgICAgICAgaWYgKG9sZFZhbHVlID09IG5ld1ZhbHVlIHx8ICghbmV3VmFsdWUgJiYgb2xkVmFsdWUgPT0gZnJvbUVsLnBsYWNlaG9sZGVyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmlyc3RDaGlsZC5ub2RlVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgU0VMRUNUOiBmdW5jdGlvbihmcm9tRWwsIHRvRWwpIHtcbiAgICAgICAgaWYgKCF0b0VsLmhhc0F0dHJpYnV0ZSgnbXVsdGlwbGUnKSkge1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSAtMTtcbiAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gbG9vcCB0aHJvdWdoIGNoaWxkcmVuIG9mIGZyb21FbCwgbm90IHRvRWwgc2luY2Ugbm9kZXMgY2FuIGJlIG1vdmVkXG4gICAgICAgICAgICAvLyBmcm9tIHRvRWwgdG8gZnJvbUVsIGRpcmVjdGx5IHdoZW4gbW9ycGhpbmcuXG4gICAgICAgICAgICAvLyBBdCB0aGUgdGltZSB0aGlzIHNwZWNpYWwgaGFuZGxlciBpcyBpbnZva2VkLCBhbGwgY2hpbGRyZW4gaGF2ZSBhbHJlYWR5IGJlZW4gbW9ycGhlZFxuICAgICAgICAgICAgLy8gYW5kIGFwcGVuZGVkIHRvIC8gcmVtb3ZlZCBmcm9tIGZyb21FbCwgc28gdXNpbmcgZnJvbUVsIGhlcmUgaXMgc2FmZSBhbmQgY29ycmVjdC5cbiAgICAgICAgICAgIHZhciBjdXJDaGlsZCA9IGZyb21FbC5maXJzdENoaWxkO1xuICAgICAgICAgICAgdmFyIG9wdGdyb3VwO1xuICAgICAgICAgICAgdmFyIG5vZGVOYW1lO1xuICAgICAgICAgICAgd2hpbGUoY3VyQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICBub2RlTmFtZSA9IGN1ckNoaWxkLm5vZGVOYW1lICYmIGN1ckNoaWxkLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGVOYW1lID09PSAnT1BUR1JPVVAnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGdyb3VwID0gY3VyQ2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgIGN1ckNoaWxkID0gb3B0Z3JvdXAuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZU5hbWUgPT09ICdPUFRJT04nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyQ2hpbGQuaGFzQXR0cmlidXRlKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBjdXJDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJDaGlsZCAmJiBvcHRncm91cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBvcHRncm91cC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGdyb3VwID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnJvbUVsLnNlbGVjdGVkSW5kZXggPSBzZWxlY3RlZEluZGV4O1xuICAgICAgICB9XG4gICAgfVxufTtcblxudmFyIEVMRU1FTlRfTk9ERSA9IDE7XG52YXIgRE9DVU1FTlRfRlJBR01FTlRfTk9ERSQxID0gMTE7XG52YXIgVEVYVF9OT0RFID0gMztcbnZhciBDT01NRU5UX05PREUgPSA4O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gZGVmYXVsdEdldE5vZGVLZXkobm9kZSkge1xuICBpZiAobm9kZSkge1xuICAgICAgcmV0dXJuIChub2RlLmdldEF0dHJpYnV0ZSAmJiBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSkgfHwgbm9kZS5pZDtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3JwaGRvbUZhY3RvcnkobW9ycGhBdHRycykge1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1vcnBoZG9tKGZyb21Ob2RlLCB0b05vZGUsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRvTm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChmcm9tTm9kZS5ub2RlTmFtZSA9PT0gJyNkb2N1bWVudCcgfHwgZnJvbU5vZGUubm9kZU5hbWUgPT09ICdIVE1MJyB8fCBmcm9tTm9kZS5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRvTm9kZUh0bWwgPSB0b05vZGU7XG4gICAgICAgICAgICAgICAgdG9Ob2RlID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2h0bWwnKTtcbiAgICAgICAgICAgICAgICB0b05vZGUuaW5uZXJIVE1MID0gdG9Ob2RlSHRtbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9Ob2RlID0gdG9FbGVtZW50KHRvTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZ2V0Tm9kZUtleSA9IG9wdGlvbnMuZ2V0Tm9kZUtleSB8fCBkZWZhdWx0R2V0Tm9kZUtleTtcbiAgICAgICAgdmFyIG9uQmVmb3JlTm9kZUFkZGVkID0gb3B0aW9ucy5vbkJlZm9yZU5vZGVBZGRlZCB8fCBub29wO1xuICAgICAgICB2YXIgb25Ob2RlQWRkZWQgPSBvcHRpb25zLm9uTm9kZUFkZGVkIHx8IG5vb3A7XG4gICAgICAgIHZhciBvbkJlZm9yZUVsVXBkYXRlZCA9IG9wdGlvbnMub25CZWZvcmVFbFVwZGF0ZWQgfHwgbm9vcDtcbiAgICAgICAgdmFyIG9uRWxVcGRhdGVkID0gb3B0aW9ucy5vbkVsVXBkYXRlZCB8fCBub29wO1xuICAgICAgICB2YXIgb25CZWZvcmVOb2RlRGlzY2FyZGVkID0gb3B0aW9ucy5vbkJlZm9yZU5vZGVEaXNjYXJkZWQgfHwgbm9vcDtcbiAgICAgICAgdmFyIG9uTm9kZURpc2NhcmRlZCA9IG9wdGlvbnMub25Ob2RlRGlzY2FyZGVkIHx8IG5vb3A7XG4gICAgICAgIHZhciBvbkJlZm9yZUVsQ2hpbGRyZW5VcGRhdGVkID0gb3B0aW9ucy5vbkJlZm9yZUVsQ2hpbGRyZW5VcGRhdGVkIHx8IG5vb3A7XG4gICAgICAgIHZhciBjaGlsZHJlbk9ubHkgPSBvcHRpb25zLmNoaWxkcmVuT25seSA9PT0gdHJ1ZTtcblxuICAgICAgICAvLyBUaGlzIG9iamVjdCBpcyB1c2VkIGFzIGEgbG9va3VwIHRvIHF1aWNrbHkgZmluZCBhbGwga2V5ZWQgZWxlbWVudHMgaW4gdGhlIG9yaWdpbmFsIERPTSB0cmVlLlxuICAgICAgICB2YXIgZnJvbU5vZGVzTG9va3VwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIGtleWVkUmVtb3ZhbExpc3QgPSBbXTtcblxuICAgICAgICBmdW5jdGlvbiBhZGRLZXllZFJlbW92YWwoa2V5KSB7XG4gICAgICAgICAgICBrZXllZFJlbW92YWxMaXN0LnB1c2goa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHdhbGtEaXNjYXJkZWRDaGlsZE5vZGVzKG5vZGUsIHNraXBLZXllZE5vZGVzKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1ckNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgICAgICAgICAgIHdoaWxlIChjdXJDaGlsZCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNraXBLZXllZE5vZGVzICYmIChrZXkgPSBnZXROb2RlS2V5KGN1ckNoaWxkKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGFyZSBza2lwcGluZyBrZXllZCBub2RlcyB0aGVuIHdlIGFkZCB0aGUga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIGxpc3Qgc28gdGhhdCBpdCBjYW4gYmUgaGFuZGxlZCBhdCB0aGUgdmVyeSBlbmQuXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRLZXllZFJlbW92YWwoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgcmVwb3J0IHRoZSBub2RlIGFzIGRpc2NhcmRlZCBpZiBpdCBpcyBub3Qga2V5ZWQuIFdlIGRvIHRoaXMgYmVjYXVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXQgdGhlIGVuZCB3ZSBsb29wIHRocm91Z2ggYWxsIGtleWVkIGVsZW1lbnRzIHRoYXQgd2VyZSB1bm1hdGNoZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCB0aGVuIGRpc2NhcmQgdGhlbSBpbiBvbmUgZmluYWwgcGFzcy5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTm9kZURpc2NhcmRlZChjdXJDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyQ2hpbGQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGtEaXNjYXJkZWRDaGlsZE5vZGVzKGN1ckNoaWxkLCBza2lwS2V5ZWROb2Rlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjdXJDaGlsZCA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmVzIGEgRE9NIG5vZGUgb3V0IG9mIHRoZSBvcmlnaW5hbCBET01cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtICB7Tm9kZX0gbm9kZSBUaGUgbm9kZSB0byByZW1vdmVcbiAgICAgICAgICogQHBhcmFtICB7Tm9kZX0gcGFyZW50Tm9kZSBUaGUgbm9kZXMgcGFyZW50XG4gICAgICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IHNraXBLZXllZE5vZGVzIElmIHRydWUgdGhlbiBlbGVtZW50cyB3aXRoIGtleXMgd2lsbCBiZSBza2lwcGVkIGFuZCBub3QgZGlzY2FyZGVkLlxuICAgICAgICAgKiBAcmV0dXJuIHt1bmRlZmluZWR9XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUsIHBhcmVudE5vZGUsIHNraXBLZXllZE5vZGVzKSB7XG4gICAgICAgICAgICBpZiAob25CZWZvcmVOb2RlRGlzY2FyZGVkKG5vZGUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvbk5vZGVEaXNjYXJkZWQobm9kZSk7XG4gICAgICAgICAgICB3YWxrRGlzY2FyZGVkQ2hpbGROb2Rlcyhub2RlLCBza2lwS2V5ZWROb2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAvLyBUcmVlV2Fsa2VyIGltcGxlbWVudGF0aW9uIGlzIG5vIGZhc3RlciwgYnV0IGtlZXBpbmcgdGhpcyBhcm91bmQgaW4gY2FzZSB0aGlzIGNoYW5nZXMgaW4gdGhlIGZ1dHVyZVxuICAgICAgICAvLyBmdW5jdGlvbiBpbmRleFRyZWUocm9vdCkge1xuICAgICAgICAvLyAgICAgdmFyIHRyZWVXYWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgICAgICAvLyAgICAgICAgIHJvb3QsXG4gICAgICAgIC8vICAgICAgICAgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgdmFyIGVsO1xuICAgICAgICAvLyAgICAgd2hpbGUoKGVsID0gdHJlZVdhbGtlci5uZXh0Tm9kZSgpKSkge1xuICAgICAgICAvLyAgICAgICAgIHZhciBrZXkgPSBnZXROb2RlS2V5KGVsKTtcbiAgICAgICAgLy8gICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGZyb21Ob2Rlc0xvb2t1cFtrZXldID0gZWw7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gLy8gTm9kZUl0ZXJhdG9yIGltcGxlbWVudGF0aW9uIGlzIG5vIGZhc3RlciwgYnV0IGtlZXBpbmcgdGhpcyBhcm91bmQgaW4gY2FzZSB0aGlzIGNoYW5nZXMgaW4gdGhlIGZ1dHVyZVxuICAgICAgICAvL1xuICAgICAgICAvLyBmdW5jdGlvbiBpbmRleFRyZWUobm9kZSkge1xuICAgICAgICAvLyAgICAgdmFyIG5vZGVJdGVyYXRvciA9IGRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihub2RlLCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCk7XG4gICAgICAgIC8vICAgICB2YXIgZWw7XG4gICAgICAgIC8vICAgICB3aGlsZSgoZWwgPSBub2RlSXRlcmF0b3IubmV4dE5vZGUoKSkpIHtcbiAgICAgICAgLy8gICAgICAgICB2YXIga2V5ID0gZ2V0Tm9kZUtleShlbCk7XG4gICAgICAgIC8vICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAvLyAgICAgICAgICAgICBmcm9tTm9kZXNMb29rdXBba2V5XSA9IGVsO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluZGV4VHJlZShub2RlKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFIHx8IG5vZGUubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUkMSkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJDaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoY3VyQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IGdldE5vZGVLZXkoY3VyQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tTm9kZXNMb29rdXBba2V5XSA9IGN1ckNoaWxkO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gV2FsayByZWN1cnNpdmVseVxuICAgICAgICAgICAgICAgICAgICBpbmRleFRyZWUoY3VyQ2hpbGQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGN1ckNoaWxkID0gY3VyQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXhUcmVlKGZyb21Ob2RlKTtcblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVOb2RlQWRkZWQoZWwpIHtcbiAgICAgICAgICAgIG9uTm9kZUFkZGVkKGVsKTtcblxuICAgICAgICAgICAgdmFyIGN1ckNoaWxkID0gZWwuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHdoaWxlIChjdXJDaGlsZCkge1xuICAgICAgICAgICAgICAgIHZhciBuZXh0U2libGluZyA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGdldE5vZGVLZXkoY3VyQ2hpbGQpO1xuICAgICAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVubWF0Y2hlZEZyb21FbCA9IGZyb21Ob2Rlc0xvb2t1cFtrZXldO1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB3ZSBmaW5kIGEgZHVwbGljYXRlICNpZCBub2RlIGluIGNhY2hlLCByZXBsYWNlIGBlbGAgd2l0aCBjYWNoZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAvLyBhbmQgbW9ycGggaXQgdG8gdGhlIGNoaWxkIG5vZGUuXG4gICAgICAgICAgICAgICAgICAgIGlmICh1bm1hdGNoZWRGcm9tRWwgJiYgY29tcGFyZU5vZGVOYW1lcyhjdXJDaGlsZCwgdW5tYXRjaGVkRnJvbUVsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyQ2hpbGQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodW5tYXRjaGVkRnJvbUVsLCBjdXJDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3JwaEVsKHVubWF0Y2hlZEZyb21FbCwgY3VyQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU5vZGVBZGRlZChjdXJDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgLy8gcmVjdXJzaXZlbHkgY2FsbCBmb3IgY3VyQ2hpbGQgYW5kIGl0J3MgY2hpbGRyZW4gdG8gc2VlIGlmIHdlIGZpbmQgc29tZXRoaW5nIGluXG4gICAgICAgICAgICAgICAgICAvLyBmcm9tTm9kZXNMb29rdXBcbiAgICAgICAgICAgICAgICAgIGhhbmRsZU5vZGVBZGRlZChjdXJDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBuZXh0U2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFudXBGcm9tRWwoZnJvbUVsLCBjdXJGcm9tTm9kZUNoaWxkLCBjdXJGcm9tTm9kZUtleSkge1xuICAgICAgICAgICAgLy8gV2UgaGF2ZSBwcm9jZXNzZWQgYWxsIG9mIHRoZSBcInRvIG5vZGVzXCIuIElmIGN1ckZyb21Ob2RlQ2hpbGQgaXNcbiAgICAgICAgICAgIC8vIG5vbi1udWxsIHRoZW4gd2Ugc3RpbGwgaGF2ZSBzb21lIGZyb20gbm9kZXMgbGVmdCBvdmVyIHRoYXQgbmVlZFxuICAgICAgICAgICAgLy8gdG8gYmUgcmVtb3ZlZFxuICAgICAgICAgICAgd2hpbGUgKGN1ckZyb21Ob2RlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZnJvbU5leHRTaWJsaW5nID0gY3VyRnJvbU5vZGVDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICBpZiAoKGN1ckZyb21Ob2RlS2V5ID0gZ2V0Tm9kZUtleShjdXJGcm9tTm9kZUNoaWxkKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2luY2UgdGhlIG5vZGUgaXMga2V5ZWQgaXQgbWlnaHQgYmUgbWF0Y2hlZCB1cCBsYXRlciBzbyB3ZSBkZWZlclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYWN0dWFsIHJlbW92YWwgdG8gbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgYWRkS2V5ZWRSZW1vdmFsKGN1ckZyb21Ob2RlS2V5KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBOT1RFOiB3ZSBza2lwIG5lc3RlZCBrZXllZCBub2RlcyBmcm9tIGJlaW5nIHJlbW92ZWQgc2luY2UgdGhlcmUgaXNcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgc3RpbGwgYSBjaGFuY2UgdGhleSB3aWxsIGJlIG1hdGNoZWQgdXAgbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTm9kZShjdXJGcm9tTm9kZUNoaWxkLCBmcm9tRWwsIHRydWUgLyogc2tpcCBrZXllZCBub2RlcyAqLyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtb3JwaEVsKGZyb21FbCwgdG9FbCwgY2hpbGRyZW5Pbmx5KSB7XG4gICAgICAgICAgICB2YXIgdG9FbEtleSA9IGdldE5vZGVLZXkodG9FbCk7XG5cbiAgICAgICAgICAgIGlmICh0b0VsS2V5KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYW4gZWxlbWVudCB3aXRoIGFuIElEIGlzIGJlaW5nIG1vcnBoZWQgdGhlbiBpdCB3aWxsIGJlIGluIHRoZSBmaW5hbFxuICAgICAgICAgICAgICAgIC8vIERPTSBzbyBjbGVhciBpdCBvdXQgb2YgdGhlIHNhdmVkIGVsZW1lbnRzIGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICBkZWxldGUgZnJvbU5vZGVzTG9va3VwW3RvRWxLZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWNoaWxkcmVuT25seSkge1xuICAgICAgICAgICAgICAgIC8vIG9wdGlvbmFsXG4gICAgICAgICAgICAgICAgaWYgKG9uQmVmb3JlRWxVcGRhdGVkKGZyb21FbCwgdG9FbCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgYXR0cmlidXRlcyBvbiBvcmlnaW5hbCBET00gZWxlbWVudCBmaXJzdFxuICAgICAgICAgICAgICAgIG1vcnBoQXR0cnMoZnJvbUVsLCB0b0VsKTtcbiAgICAgICAgICAgICAgICAvLyBvcHRpb25hbFxuICAgICAgICAgICAgICAgIG9uRWxVcGRhdGVkKGZyb21FbCk7XG5cbiAgICAgICAgICAgICAgICBpZiAob25CZWZvcmVFbENoaWxkcmVuVXBkYXRlZChmcm9tRWwsIHRvRWwpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZnJvbUVsLm5vZGVOYW1lICE9PSAnVEVYVEFSRUEnKSB7XG4gICAgICAgICAgICAgIG1vcnBoQ2hpbGRyZW4oZnJvbUVsLCB0b0VsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNwZWNpYWxFbEhhbmRsZXJzLlRFWFRBUkVBKGZyb21FbCwgdG9FbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtb3JwaENoaWxkcmVuKGZyb21FbCwgdG9FbCkge1xuICAgICAgICAgICAgdmFyIGN1clRvTm9kZUNoaWxkID0gdG9FbC5maXJzdENoaWxkO1xuICAgICAgICAgICAgdmFyIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tRWwuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHZhciBjdXJUb05vZGVLZXk7XG4gICAgICAgICAgICB2YXIgY3VyRnJvbU5vZGVLZXk7XG5cbiAgICAgICAgICAgIHZhciBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB2YXIgdG9OZXh0U2libGluZztcbiAgICAgICAgICAgIHZhciBtYXRjaGluZ0Zyb21FbDtcblxuICAgICAgICAgICAgLy8gd2FsayB0aGUgY2hpbGRyZW5cbiAgICAgICAgICAgIG91dGVyOiB3aGlsZSAoY3VyVG9Ob2RlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICB0b05leHRTaWJsaW5nID0gY3VyVG9Ob2RlQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgY3VyVG9Ob2RlS2V5ID0gZ2V0Tm9kZUtleShjdXJUb05vZGVDaGlsZCk7XG5cbiAgICAgICAgICAgICAgICAvLyB3YWxrIHRoZSBmcm9tTm9kZSBjaGlsZHJlbiBhbGwgdGhlIHdheSB0aHJvdWdoXG4gICAgICAgICAgICAgICAgd2hpbGUgKGN1ckZyb21Ob2RlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbU5leHRTaWJsaW5nID0gY3VyRnJvbU5vZGVDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VyVG9Ob2RlQ2hpbGQuaXNTYW1lTm9kZSAmJiBjdXJUb05vZGVDaGlsZC5pc1NhbWVOb2RlKGN1ckZyb21Ob2RlQ2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IHRvTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjdXJGcm9tTm9kZUtleSA9IGdldE5vZGVLZXkoY3VyRnJvbU5vZGVDaGlsZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1ckZyb21Ob2RlVHlwZSA9IGN1ckZyb21Ob2RlQ2hpbGQubm9kZVR5cGU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBtZWFucyBpZiB0aGUgY3VyRnJvbU5vZGVDaGlsZCBkb2VzbnQgaGF2ZSBhIG1hdGNoIHdpdGggdGhlIGN1clRvTm9kZUNoaWxkXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0NvbXBhdGlibGUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlVHlwZSA9PT0gY3VyVG9Ob2RlQ2hpbGQubm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJGcm9tTm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJvdGggbm9kZXMgYmVpbmcgY29tcGFyZWQgYXJlIEVsZW1lbnQgbm9kZXNcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJUb05vZGVLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHRhcmdldCBub2RlIGhhcyBhIGtleSBzbyB3ZSB3YW50IHRvIG1hdGNoIGl0IHVwIHdpdGggdGhlIGNvcnJlY3QgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbiB0aGUgb3JpZ2luYWwgRE9NIHRyZWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1clRvTm9kZUtleSAhPT0gY3VyRnJvbU5vZGVLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBjdXJyZW50IGVsZW1lbnQgaW4gdGhlIG9yaWdpbmFsIERPTSB0cmVlIGRvZXMgbm90IGhhdmUgYSBtYXRjaGluZyBrZXkgc29cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCdzIGNoZWNrIG91ciBsb29rdXAgdG8gc2VlIGlmIHRoZXJlIGlzIGEgbWF0Y2hpbmcgZWxlbWVudCBpbiB0aGUgb3JpZ2luYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERPTSB0cmVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKG1hdGNoaW5nRnJvbUVsID0gZnJvbU5vZGVzTG9va3VwW2N1clRvTm9kZUtleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZyb21OZXh0U2libGluZyA9PT0gbWF0Y2hpbmdGcm9tRWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3BlY2lhbCBjYXNlIGZvciBzaW5nbGUgZWxlbWVudCByZW1vdmFscy4gVG8gYXZvaWQgcmVtb3ZpbmcgdGhlIG9yaWdpbmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERPTSBub2RlIG91dCBvZiB0aGUgdHJlZSAoc2luY2UgdGhhdCBjYW4gYnJlYWsgQ1NTIHRyYW5zaXRpb25zLCBldGMuKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2Ugd2lsbCBpbnN0ZWFkIGRpc2NhcmQgdGhlIGN1cnJlbnQgbm9kZSBhbmQgd2FpdCB1bnRpbCB0aGUgbmV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpdGVyYXRpb24gdG8gcHJvcGVybHkgbWF0Y2ggdXAgdGhlIGtleWVkIHRhcmdldCBlbGVtZW50IHdpdGggaXRzIG1hdGNoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVsZW1lbnQgaW4gdGhlIG9yaWdpbmFsIHRyZWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgZm91bmQgYSBtYXRjaGluZyBrZXllZCBlbGVtZW50IHNvbWV3aGVyZSBpbiB0aGUgb3JpZ2luYWwgRE9NIHRyZWUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExldCdzIG1vdmUgdGhlIG9yaWdpbmFsIERPTSBub2RlIGludG8gdGhlIGN1cnJlbnQgcG9zaXRpb24gYW5kIG1vcnBoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0LlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5PVEU6IFdlIHVzZSBpbnNlcnRCZWZvcmUgaW5zdGVhZCBvZiByZXBsYWNlQ2hpbGQgYmVjYXVzZSB3ZSB3YW50IHRvIGdvIHRocm91Z2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGByZW1vdmVOb2RlKClgIGZ1bmN0aW9uIGZvciB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGRpc2NhcmRlZCBzbyB0aGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsbCBsaWZlY3ljbGUgaG9va3MgYXJlIGNvcnJlY3RseSBpbnZva2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21FbC5pbnNlcnRCZWZvcmUobWF0Y2hpbmdGcm9tRWwsIGN1ckZyb21Ob2RlQ2hpbGQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZyb21OZXh0U2libGluZyA9IGN1ckZyb21Ob2RlQ2hpbGQubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSB0aGUgbm9kZSBpcyBrZXllZCBpdCBtaWdodCBiZSBtYXRjaGVkIHVwIGxhdGVyIHNvIHdlIGRlZmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYWN0dWFsIHJlbW92YWwgdG8gbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZEtleWVkUmVtb3ZhbChjdXJGcm9tTm9kZUtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOT1RFOiB3ZSBza2lwIG5lc3RlZCBrZXllZCBub2RlcyBmcm9tIGJlaW5nIHJlbW92ZWQgc2luY2UgdGhlcmUgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHN0aWxsIGEgY2hhbmNlIHRoZXkgd2lsbCBiZSBtYXRjaGVkIHVwIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVOb2RlKGN1ckZyb21Ob2RlQ2hpbGQsIGZyb21FbCwgdHJ1ZSAvKiBza2lwIGtleWVkIG5vZGVzICovKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBtYXRjaGluZ0Zyb21FbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBub2RlcyBhcmUgbm90IGNvbXBhdGlibGUgc2luY2UgdGhlIFwidG9cIiBub2RlIGhhcyBhIGtleSBhbmQgdGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpcyBubyBtYXRjaGluZyBrZXllZCBub2RlIGluIHRoZSBzb3VyY2UgdHJlZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ29tcGF0aWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJGcm9tTm9kZUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgb3JpZ2luYWwgaGFzIGEga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ29tcGF0aWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ29tcGF0aWJsZSA9IGlzQ29tcGF0aWJsZSAhPT0gZmFsc2UgJiYgY29tcGFyZU5vZGVOYW1lcyhjdXJGcm9tTm9kZUNoaWxkLCBjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ29tcGF0aWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBmb3VuZCBjb21wYXRpYmxlIERPTSBlbGVtZW50cyBzbyB0cmFuc2Zvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGN1cnJlbnQgXCJmcm9tXCIgbm9kZSB0byBtYXRjaCB0aGUgY3VycmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0YXJnZXQgRE9NIG5vZGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1PUlBIXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoRWwoY3VyRnJvbU5vZGVDaGlsZCwgY3VyVG9Ob2RlQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJGcm9tTm9kZVR5cGUgPT09IFRFWFRfTk9ERSB8fCBjdXJGcm9tTm9kZVR5cGUgPT0gQ09NTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQm90aCBub2RlcyBiZWluZyBjb21wYXJlZCBhcmUgVGV4dCBvciBDb21tZW50IG5vZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW1wbHkgdXBkYXRlIG5vZGVWYWx1ZSBvbiB0aGUgb3JpZ2luYWwgbm9kZSB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoYW5nZSB0aGUgdGV4dCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJGcm9tTm9kZUNoaWxkLm5vZGVWYWx1ZSAhPT0gY3VyVG9Ob2RlQ2hpbGQubm9kZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQubm9kZVZhbHVlID0gY3VyVG9Ob2RlQ2hpbGQubm9kZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ29tcGF0aWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWR2YW5jZSBib3RoIHRoZSBcInRvXCIgY2hpbGQgYW5kIHRoZSBcImZyb21cIiBjaGlsZCBzaW5jZSB3ZSBmb3VuZCBhIG1hdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3RoaW5nIGVsc2UgdG8gZG8gYXMgd2UgYWxyZWFkeSByZWN1cnNpdmVseSBjYWxsZWQgbW9ycGhDaGlsZHJlbiBhYm92ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyVG9Ob2RlQ2hpbGQgPSB0b05leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21OZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gY29tcGF0aWJsZSBtYXRjaCBzbyByZW1vdmUgdGhlIG9sZCBub2RlIGZyb20gdGhlIERPTSBhbmQgY29udGludWUgdHJ5aW5nIHRvIGZpbmQgYVxuICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaCBpbiB0aGUgb3JpZ2luYWwgRE9NLiBIb3dldmVyLCB3ZSBvbmx5IGRvIHRoaXMgaWYgdGhlIGZyb20gbm9kZSBpcyBub3Qga2V5ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gc2luY2UgaXQgaXMgcG9zc2libGUgdGhhdCBhIGtleWVkIG5vZGUgbWlnaHQgbWF0Y2ggdXAgd2l0aCBhIG5vZGUgc29tZXdoZXJlIGVsc2UgaW4gdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHRhcmdldCB0cmVlIGFuZCB3ZSBkb24ndCB3YW50IHRvIGRpc2NhcmQgaXQganVzdCB5ZXQgc2luY2UgaXQgc3RpbGwgbWlnaHQgZmluZCBhXG4gICAgICAgICAgICAgICAgICAgIC8vIGhvbWUgaW4gdGhlIGZpbmFsIERPTSB0cmVlLiBBZnRlciBldmVyeXRoaW5nIGlzIGRvbmUgd2Ugd2lsbCByZW1vdmUgYW55IGtleWVkIG5vZGVzXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoYXQgZGlkbid0IGZpbmQgYSBob21lXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJGcm9tTm9kZUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2luY2UgdGhlIG5vZGUgaXMga2V5ZWQgaXQgbWlnaHQgYmUgbWF0Y2hlZCB1cCBsYXRlciBzbyB3ZSBkZWZlclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGFjdHVhbCByZW1vdmFsIHRvIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRLZXllZFJlbW92YWwoY3VyRnJvbU5vZGVLZXkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTk9URTogd2Ugc2tpcCBuZXN0ZWQga2V5ZWQgbm9kZXMgZnJvbSBiZWluZyByZW1vdmVkIHNpbmNlIHRoZXJlIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBzdGlsbCBhIGNoYW5jZSB0aGV5IHdpbGwgYmUgbWF0Y2hlZCB1cCBsYXRlclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTm9kZShjdXJGcm9tTm9kZUNoaWxkLCBmcm9tRWwsIHRydWUgLyogc2tpcCBrZXllZCBub2RlcyAqLyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIH0gLy8gRU5EOiB3aGlsZShjdXJGcm9tTm9kZUNoaWxkKSB7fVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgZ290IHRoaXMgZmFyIHRoZW4gd2UgZGlkIG5vdCBmaW5kIGEgY2FuZGlkYXRlIG1hdGNoIGZvclxuICAgICAgICAgICAgICAgIC8vIG91ciBcInRvIG5vZGVcIiBhbmQgd2UgZXhoYXVzdGVkIGFsbCBvZiB0aGUgY2hpbGRyZW4gXCJmcm9tXCJcbiAgICAgICAgICAgICAgICAvLyBub2Rlcy4gVGhlcmVmb3JlLCB3ZSB3aWxsIGp1c3QgYXBwZW5kIHRoZSBjdXJyZW50IFwidG9cIiBub2RlXG4gICAgICAgICAgICAgICAgLy8gdG8gdGhlIGVuZFxuICAgICAgICAgICAgICAgIGlmIChjdXJUb05vZGVLZXkgJiYgKG1hdGNoaW5nRnJvbUVsID0gZnJvbU5vZGVzTG9va3VwW2N1clRvTm9kZUtleV0pICYmIGNvbXBhcmVOb2RlTmFtZXMobWF0Y2hpbmdGcm9tRWwsIGN1clRvTm9kZUNoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tRWwuYXBwZW5kQ2hpbGQobWF0Y2hpbmdGcm9tRWwpO1xuICAgICAgICAgICAgICAgICAgICAvLyBNT1JQSFxuICAgICAgICAgICAgICAgICAgICBtb3JwaEVsKG1hdGNoaW5nRnJvbUVsLCBjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9uQmVmb3JlTm9kZUFkZGVkUmVzdWx0ID0gb25CZWZvcmVOb2RlQWRkZWQoY3VyVG9Ob2RlQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob25CZWZvcmVOb2RlQWRkZWRSZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25CZWZvcmVOb2RlQWRkZWRSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IG9uQmVmb3JlTm9kZUFkZGVkUmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyVG9Ob2RlQ2hpbGQuYWN0dWFsaXplKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyVG9Ob2RlQ2hpbGQgPSBjdXJUb05vZGVDaGlsZC5hY3R1YWxpemUoZnJvbUVsLm93bmVyRG9jdW1lbnQgfHwgZG9jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21FbC5hcHBlbmRDaGlsZChjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOb2RlQWRkZWQoY3VyVG9Ob2RlQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3VyVG9Ob2RlQ2hpbGQgPSB0b05leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNsZWFudXBGcm9tRWwoZnJvbUVsLCBjdXJGcm9tTm9kZUNoaWxkLCBjdXJGcm9tTm9kZUtleSk7XG5cbiAgICAgICAgICAgIHZhciBzcGVjaWFsRWxIYW5kbGVyID0gc3BlY2lhbEVsSGFuZGxlcnNbZnJvbUVsLm5vZGVOYW1lXTtcbiAgICAgICAgICAgIGlmIChzcGVjaWFsRWxIYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgc3BlY2lhbEVsSGFuZGxlcihmcm9tRWwsIHRvRWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IC8vIEVORDogbW9ycGhDaGlsZHJlbiguLi4pXG5cbiAgICAgICAgdmFyIG1vcnBoZWROb2RlID0gZnJvbU5vZGU7XG4gICAgICAgIHZhciBtb3JwaGVkTm9kZVR5cGUgPSBtb3JwaGVkTm9kZS5ub2RlVHlwZTtcbiAgICAgICAgdmFyIHRvTm9kZVR5cGUgPSB0b05vZGUubm9kZVR5cGU7XG5cbiAgICAgICAgaWYgKCFjaGlsZHJlbk9ubHkpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVyZSB3ZSBhcmUgZ2l2ZW4gdHdvIERPTSBub2RlcyB0aGF0IGFyZSBub3RcbiAgICAgICAgICAgIC8vIGNvbXBhdGlibGUgKGUuZy4gPGRpdj4gLS0+IDxzcGFuPiBvciA8ZGl2PiAtLT4gVEVYVClcbiAgICAgICAgICAgIGlmIChtb3JwaGVkTm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgIGlmICh0b05vZGVUeXBlID09PSBFTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wYXJlTm9kZU5hbWVzKGZyb21Ob2RlLCB0b05vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbk5vZGVEaXNjYXJkZWQoZnJvbU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhlZE5vZGUgPSBtb3ZlQ2hpbGRyZW4oZnJvbU5vZGUsIGNyZWF0ZUVsZW1lbnROUyh0b05vZGUubm9kZU5hbWUsIHRvTm9kZS5uYW1lc3BhY2VVUkkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdvaW5nIGZyb20gYW4gZWxlbWVudCBub2RlIHRvIGEgdGV4dCBub2RlXG4gICAgICAgICAgICAgICAgICAgIG1vcnBoZWROb2RlID0gdG9Ob2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobW9ycGhlZE5vZGVUeXBlID09PSBURVhUX05PREUgfHwgbW9ycGhlZE5vZGVUeXBlID09PSBDT01NRU5UX05PREUpIHsgLy8gVGV4dCBvciBjb21tZW50IG5vZGVcbiAgICAgICAgICAgICAgICBpZiAodG9Ob2RlVHlwZSA9PT0gbW9ycGhlZE5vZGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb3JwaGVkTm9kZS5ub2RlVmFsdWUgIT09IHRvTm9kZS5ub2RlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoZWROb2RlLm5vZGVWYWx1ZSA9IHRvTm9kZS5ub2RlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9ycGhlZE5vZGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGV4dCBub2RlIHRvIHNvbWV0aGluZyBlbHNlXG4gICAgICAgICAgICAgICAgICAgIG1vcnBoZWROb2RlID0gdG9Ob2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb3JwaGVkTm9kZSA9PT0gdG9Ob2RlKSB7XG4gICAgICAgICAgICAvLyBUaGUgXCJ0byBub2RlXCIgd2FzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlIFwiZnJvbSBub2RlXCIgc28gd2UgaGFkIHRvXG4gICAgICAgICAgICAvLyB0b3NzIG91dCB0aGUgXCJmcm9tIG5vZGVcIiBhbmQgdXNlIHRoZSBcInRvIG5vZGVcIlxuICAgICAgICAgICAgb25Ob2RlRGlzY2FyZGVkKGZyb21Ob2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0b05vZGUuaXNTYW1lTm9kZSAmJiB0b05vZGUuaXNTYW1lTm9kZShtb3JwaGVkTm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vcnBoRWwobW9ycGhlZE5vZGUsIHRvTm9kZSwgY2hpbGRyZW5Pbmx5KTtcblxuICAgICAgICAgICAgLy8gV2Ugbm93IG5lZWQgdG8gbG9vcCBvdmVyIGFueSBrZXllZCBub2RlcyB0aGF0IG1pZ2h0IG5lZWQgdG8gYmVcbiAgICAgICAgICAgIC8vIHJlbW92ZWQuIFdlIG9ubHkgZG8gdGhlIHJlbW92YWwgaWYgd2Uga25vdyB0aGF0IHRoZSBrZXllZCBub2RlXG4gICAgICAgICAgICAvLyBuZXZlciBmb3VuZCBhIG1hdGNoLiBXaGVuIGEga2V5ZWQgbm9kZSBpcyBtYXRjaGVkIHVwIHdlIHJlbW92ZVxuICAgICAgICAgICAgLy8gaXQgb3V0IG9mIGZyb21Ob2Rlc0xvb2t1cCBhbmQgd2UgdXNlIGZyb21Ob2Rlc0xvb2t1cCB0byBkZXRlcm1pbmVcbiAgICAgICAgICAgIC8vIGlmIGEga2V5ZWQgbm9kZSBoYXMgYmVlbiBtYXRjaGVkIHVwIG9yIG5vdFxuICAgICAgICAgICAgaWYgKGtleWVkUmVtb3ZhbExpc3QpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTAsIGxlbj1rZXllZFJlbW92YWxMaXN0Lmxlbmd0aDsgaTxsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxUb1JlbW92ZSA9IGZyb21Ob2Rlc0xvb2t1cFtrZXllZFJlbW92YWxMaXN0W2ldXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsVG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZU5vZGUoZWxUb1JlbW92ZSwgZWxUb1JlbW92ZS5wYXJlbnROb2RlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNoaWxkcmVuT25seSAmJiBtb3JwaGVkTm9kZSAhPT0gZnJvbU5vZGUgJiYgZnJvbU5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgaWYgKG1vcnBoZWROb2RlLmFjdHVhbGl6ZSkge1xuICAgICAgICAgICAgICAgIG1vcnBoZWROb2RlID0gbW9ycGhlZE5vZGUuYWN0dWFsaXplKGZyb21Ob2RlLm93bmVyRG9jdW1lbnQgfHwgZG9jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHdlIGhhZCB0byBzd2FwIG91dCB0aGUgZnJvbSBub2RlIHdpdGggYSBuZXcgbm9kZSBiZWNhdXNlIHRoZSBvbGRcbiAgICAgICAgICAgIC8vIG5vZGUgd2FzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlIHRhcmdldCBub2RlIHRoZW4gd2UgbmVlZCB0b1xuICAgICAgICAgICAgLy8gcmVwbGFjZSB0aGUgb2xkIERPTSBub2RlIGluIHRoZSBvcmlnaW5hbCBET00gdHJlZS4gVGhpcyBpcyBvbmx5XG4gICAgICAgICAgICAvLyBwb3NzaWJsZSBpZiB0aGUgb3JpZ2luYWwgRE9NIG5vZGUgd2FzIHBhcnQgb2YgYSBET00gdHJlZSB3aGljaFxuICAgICAgICAgICAgLy8gd2Uga25vdyBpcyB0aGUgY2FzZSBpZiBpdCBoYXMgYSBwYXJlbnQgbm9kZS5cbiAgICAgICAgICAgIGZyb21Ob2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1vcnBoZWROb2RlLCBmcm9tTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbW9ycGhlZE5vZGU7XG4gICAgfTtcbn1cblxudmFyIG1vcnBoZG9tID0gbW9ycGhkb21GYWN0b3J5KG1vcnBoQXR0cnMpO1xuXG5mdW5jdGlvbiBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihlbGVtZW50KSB7XG4gICAgY29uc3QgaXNGaWxlSW5wdXQgPSBlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiBlbGVtZW50LnR5cGUgPT09ICdmaWxlJztcbiAgICBpZiAoIWlzRmlsZUlucHV0KSB7XG4gICAgICAgIGlmICgndmFsdWUnIGluIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGVsZW1lbnQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihjaGlsZCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVNb3JwaGRvbShyb290RnJvbUVsZW1lbnQsIHJvb3RUb0VsZW1lbnQsIG1vZGlmaWVkRmllbGRFbGVtZW50cywgZ2V0RWxlbWVudFZhbHVlLCBjaGlsZENvbXBvbmVudHMsIGZpbmRDaGlsZENvbXBvbmVudCwgZ2V0S2V5RnJvbUVsZW1lbnQpIHtcbiAgICBjb25zdCBjaGlsZENvbXBvbmVudE1hcCA9IG5ldyBNYXAoKTtcbiAgICBjaGlsZENvbXBvbmVudHMuZm9yRWFjaCgoY2hpbGRDb21wb25lbnQpID0+IHtcbiAgICAgICAgY2hpbGRDb21wb25lbnRNYXAuc2V0KGNoaWxkQ29tcG9uZW50LmVsZW1lbnQsIGNoaWxkQ29tcG9uZW50KTtcbiAgICAgICAgaWYgKCFjaGlsZENvbXBvbmVudC5pZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGlsZCBpcyBtaXNzaW5nIGlkLicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50VG9FbGVtZW50ID0gZmluZENoaWxkQ29tcG9uZW50KGNoaWxkQ29tcG9uZW50LmlkLCByb290VG9FbGVtZW50KTtcbiAgICAgICAgaWYgKGNoaWxkQ29tcG9uZW50VG9FbGVtZW50ICYmIGNoaWxkQ29tcG9uZW50VG9FbGVtZW50LnRhZ05hbWUgIT09IGNoaWxkQ29tcG9uZW50LmVsZW1lbnQudGFnTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgbmV3VGFnID0gY2xvbmVFbGVtZW50V2l0aE5ld1RhZ05hbWUoY2hpbGRDb21wb25lbnRUb0VsZW1lbnQsIGNoaWxkQ29tcG9uZW50LmVsZW1lbnQudGFnTmFtZSk7XG4gICAgICAgICAgICBjaGlsZENvbXBvbmVudFRvRWxlbWVudC5yZXBsYWNlV2l0aChuZXdUYWcpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgbW9ycGhkb20ocm9vdEZyb21FbGVtZW50LCByb290VG9FbGVtZW50LCB7XG4gICAgICAgIGdldE5vZGVLZXk6IChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldEtleUZyb21FbGVtZW50KG5vZGUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkJlZm9yZUVsVXBkYXRlZDogKGZyb21FbCwgdG9FbCkgPT4ge1xuICAgICAgICAgICAgaWYgKGZyb21FbCA9PT0gcm9vdEZyb21FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIShmcm9tRWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBmcm9tRWwgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB8fFxuICAgICAgICAgICAgICAgICEodG9FbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHRvRWwgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50ID0gY2hpbGRDb21wb25lbnRNYXAuZ2V0KGZyb21FbCkgfHwgZmFsc2U7XG4gICAgICAgICAgICBpZiAoY2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRDb21wb25lbnQudXBkYXRlRnJvbU5ld0VsZW1lbnQodG9FbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobW9kaWZpZWRGaWVsZEVsZW1lbnRzLmluY2x1ZGVzKGZyb21FbCkpIHtcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZU9uRWxlbWVudCh0b0VsLCBnZXRFbGVtZW50VmFsdWUoZnJvbUVsKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZnJvbUVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdG9FbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIGZyb21FbC5pc0VxdWFsTm9kZSh0b0VsKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRGcm9tRWwgPSBjbG9uZUhUTUxFbGVtZW50KGZyb21FbCk7XG4gICAgICAgICAgICAgICAgbm9ybWFsaXplQXR0cmlidXRlc0ZvckNvbXBhcmlzb24obm9ybWFsaXplZEZyb21FbCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFRvRWwgPSBjbG9uZUhUTUxFbGVtZW50KHRvRWwpO1xuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKG5vcm1hbGl6ZWRUb0VsKTtcbiAgICAgICAgICAgICAgICBpZiAobm9ybWFsaXplZEZyb21FbC5pc0VxdWFsTm9kZShub3JtYWxpemVkVG9FbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAhZnJvbUVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1saXZlLWlnbm9yZScpO1xuICAgICAgICB9LFxuICAgICAgICBvbkJlZm9yZU5vZGVEaXNjYXJkZWQobm9kZSkge1xuICAgICAgICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICFub2RlLmhhc0F0dHJpYnV0ZSgnZGF0YS1saXZlLWlnbm9yZScpO1xuICAgICAgICB9LFxuICAgIH0pO1xufVxuXG5jbGFzcyBVbnN5bmNlZElucHV0c1RyYWNrZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudCwgbW9kZWxFbGVtZW50UmVzb2x2ZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMgPSBbXG4gICAgICAgICAgICB7IGV2ZW50OiAnaW5wdXQnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIH0sXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLm1vZGVsRWxlbWVudFJlc29sdmVyID0gbW9kZWxFbGVtZW50UmVzb2x2ZXI7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMgPSBuZXcgVW5zeW5jZWRJbnB1dENvbnRhaW5lcigpO1xuICAgIH1cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZWFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSkge1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzLm1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSk7XG4gICAgfVxuICAgIGhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudCh0YXJnZXQpO1xuICAgIH1cbiAgICB1cGRhdGVNb2RlbEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCB0aGlzLmNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCB1cGRhdGUgbW9kZWwgZm9yIG5vbiBIVE1MRWxlbWVudCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IHRoaXMubW9kZWxFbGVtZW50UmVzb2x2ZXIuZ2V0TW9kZWxOYW1lKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzLmFkZChlbGVtZW50LCBtb2RlbE5hbWUpO1xuICAgIH1cbiAgICBnZXRVbnN5bmNlZElucHV0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5zeW5jZWRJbnB1dHMuYWxsVW5zeW5jZWRJbnB1dHMoKTtcbiAgICB9XG4gICAgZ2V0VW5zeW5jZWRNb2RlbHMoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMudW5zeW5jZWRJbnB1dHMuZ2V0VW5zeW5jZWRNb2RlbE5hbWVzKCkpO1xuICAgIH1cbiAgICByZXNldFVuc3luY2VkRmllbGRzKCkge1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzLnJlc2V0VW5zeW5jZWRGaWVsZHMoKTtcbiAgICB9XG59XG5jbGFzcyBVbnN5bmNlZElucHV0Q29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51bnN5bmNlZE5vbk1vZGVsRmllbGRzID0gW107XG4gICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzID0gW107XG4gICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgYWRkKGVsZW1lbnQsIG1vZGVsTmFtZSA9IG51bGwpIHtcbiAgICAgICAgaWYgKG1vZGVsTmFtZSkge1xuICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLnNldChtb2RlbE5hbWUsIGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5pbmNsdWRlcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMucHVzaChtb2RlbE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudW5zeW5jZWROb25Nb2RlbEZpZWxkcy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXNldFVuc3luY2VkRmllbGRzKCkge1xuICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWxsVW5zeW5jZWRJbnB1dHMoKSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy51bnN5bmNlZE5vbk1vZGVsRmllbGRzLCAuLi50aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMudmFsdWVzKCldO1xuICAgIH1cbiAgICBtYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5pbmRleE9mKG1vZGVsTmFtZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0VW5zeW5jZWRNb2RlbE5hbWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bnN5bmNlZE1vZGVsTmFtZXM7XG4gICAgfVxufVxuXG5jbGFzcyBIb29rTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHJlZ2lzdGVyKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBob29rcyA9IHRoaXMuaG9va3MuZ2V0KGhvb2tOYW1lKSB8fCBbXTtcbiAgICAgICAgaG9va3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHRoaXMuaG9va3Muc2V0KGhvb2tOYW1lLCBob29rcyk7XG4gICAgfVxuICAgIHVucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGhvb2tzID0gdGhpcy5ob29rcy5nZXQoaG9va05hbWUpIHx8IFtdO1xuICAgICAgICBjb25zdCBpbmRleCA9IGhvb2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaG9va3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5ob29rcy5zZXQoaG9va05hbWUsIGhvb2tzKTtcbiAgICB9XG4gICAgdHJpZ2dlckhvb2soaG9va05hbWUsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLmdldChob29rTmFtZSkgfHwgW107XG4gICAgICAgIGhvb2tzLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayguLi5hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBCYWNrZW5kUmVzcG9uc2Uge1xuICAgIGNvbnN0cnVjdG9yKHJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0Qm9keSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJvZHkpIHtcbiAgICAgICAgICAgIHRoaXMuYm9keSA9IGF3YWl0IHRoaXMucmVzcG9uc2UudGV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmJvZHk7XG4gICAgfVxufVxuXG5jbGFzcyBDaGlsZENvbXBvbmVudFdyYXBwZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudCwgbW9kZWxCaW5kaW5ncykge1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5tb2RlbEJpbmRpbmdzID0gbW9kZWxCaW5kaW5ncztcbiAgICB9XG59XG5jbGFzcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHByb3BzLCBmaW5nZXJwcmludCwgaWQsIGJhY2tlbmQsIGVsZW1lbnREcml2ZXIpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0RGVib3VuY2UgPSAxNTA7XG4gICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QgPSBudWxsO1xuICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25zID0gW107XG4gICAgICAgIHRoaXMuaXNSZXF1ZXN0UGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuYmFja2VuZCA9IGJhY2tlbmQ7XG4gICAgICAgIHRoaXMuZWxlbWVudERyaXZlciA9IGVsZW1lbnREcml2ZXI7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5maW5nZXJwcmludCA9IGZpbmdlcnByaW50O1xuICAgICAgICB0aGlzLnZhbHVlU3RvcmUgPSBuZXcgVmFsdWVTdG9yZShwcm9wcyk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyID0gbmV3IFVuc3luY2VkSW5wdXRzVHJhY2tlcih0aGlzLCBlbGVtZW50RHJpdmVyKTtcbiAgICAgICAgdGhpcy5ob29rcyA9IG5ldyBIb29rTWFuYWdlcigpO1xuICAgICAgICB0aGlzLnJlc2V0UHJvbWlzZSgpO1xuICAgICAgICB0aGlzLm9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZSA9IHRoaXMub25DaGlsZENvbXBvbmVudE1vZGVsVXBkYXRlLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGFkZFBsdWdpbihwbHVnaW4pIHtcbiAgICAgICAgcGx1Z2luLmF0dGFjaFRvQ29tcG9uZW50KHRoaXMpO1xuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdjb25uZWN0JywgdGhpcyk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLmFjdGl2YXRlKCk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ2Rpc2Nvbm5lY3QnLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuZGVhY3RpdmF0ZSgpO1xuICAgIH1cbiAgICBvbihob29rTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5ob29rcy5yZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBvZmYoaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaG9va3MudW5yZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBzZXQobW9kZWwsIHZhbHVlLCByZVJlbmRlciA9IGZhbHNlLCBkZWJvdW5jZSA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZTtcbiAgICAgICAgY29uc3QgbW9kZWxOYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKTtcbiAgICAgICAgY29uc3QgaXNDaGFuZ2VkID0gdGhpcy52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnbW9kZWw6c2V0JywgbW9kZWwsIHZhbHVlLCB0aGlzKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIubWFya01vZGVsQXNTeW5jZWQobW9kZWxOYW1lKTtcbiAgICAgICAgaWYgKHJlUmVuZGVyICYmIGlzQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5kZWJvdW5jZWRTdGFydFJlcXVlc3QoZGVib3VuY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBnZXREYXRhKG1vZGVsKSB7XG4gICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCk7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZVN0b3JlLmhhcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbW9kZWwgXCIke21vZGVsfVwiLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZSk7XG4gICAgfVxuICAgIGFjdGlvbihuYW1lLCBhcmdzID0ge30sIGRlYm91bmNlID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlO1xuICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGFyZ3NcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGVib3VuY2VkU3RhcnRSZXF1ZXN0KGRlYm91bmNlKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlO1xuICAgICAgICB0aGlzLnRyeVN0YXJ0aW5nUmVxdWVzdCgpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgZ2V0VW5zeW5jZWRNb2RlbHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5nZXRVbnN5bmNlZE1vZGVscygpO1xuICAgIH1cbiAgICBhZGRDaGlsZChjaGlsZCwgbW9kZWxCaW5kaW5ncyA9IFtdKSB7XG4gICAgICAgIGlmICghY2hpbGQuaWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2hpbGRyZW4gY29tcG9uZW50cyBtdXN0IGhhdmUgYW4gaWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zZXQoY2hpbGQuaWQsIG5ldyBDaGlsZENvbXBvbmVudFdyYXBwZXIoY2hpbGQsIG1vZGVsQmluZGluZ3MpKTtcbiAgICAgICAgY2hpbGQucGFyZW50ID0gdGhpcztcbiAgICAgICAgY2hpbGQub24oJ21vZGVsOnNldCcsIHRoaXMub25DaGlsZENvbXBvbmVudE1vZGVsVXBkYXRlKTtcbiAgICB9XG4gICAgcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgaWYgKCFjaGlsZC5pZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGlsZHJlbiBjb21wb25lbnRzIG11c3QgaGF2ZSBhbiBpZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoaWxkcmVuLmRlbGV0ZShjaGlsZC5pZCk7XG4gICAgICAgIGNoaWxkLnBhcmVudCA9IG51bGw7XG4gICAgICAgIGNoaWxkLm9mZignbW9kZWw6c2V0JywgdGhpcy5vbkNoaWxkQ29tcG9uZW50TW9kZWxVcGRhdGUpO1xuICAgIH1cbiAgICBnZXRQYXJlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudDtcbiAgICB9XG4gICAgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkQ29tcG9uZW50LCBpZCkgPT4ge1xuICAgICAgICAgICAgY2hpbGRyZW4uc2V0KGlkLCBjaGlsZENvbXBvbmVudC5jb21wb25lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgIH1cbiAgICB1cGRhdGVGcm9tTmV3RWxlbWVudCh0b0VsKSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5lbGVtZW50RHJpdmVyLmdldENvbXBvbmVudFByb3BzKHRvRWwpO1xuICAgICAgICBpZiAocHJvcHMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc0NoYW5nZWQgPSB0aGlzLnZhbHVlU3RvcmUucmVpbml0aWFsaXplUHJvdmlkZWRQcm9wcyhwcm9wcyk7XG4gICAgICAgIGNvbnN0IGZpbmdlcnByaW50ID0gdG9FbC5kYXRhc2V0LmxpdmVGaW5nZXJwcmludFZhbHVlO1xuICAgICAgICBpZiAoZmluZ2VycHJpbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5maW5nZXJwcmludCA9IGZpbmdlcnByaW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvbkNoaWxkQ29tcG9uZW50TW9kZWxVcGRhdGUobW9kZWxOYW1lLCB2YWx1ZSwgY2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgaWYgKCFjaGlsZENvbXBvbmVudC5pZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGlkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hpbGRXcmFwcGVyID0gdGhpcy5jaGlsZHJlbi5nZXQoY2hpbGRDb21wb25lbnQuaWQpO1xuICAgICAgICBpZiAoIWNoaWxkV3JhcHBlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGNoaWxkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRXcmFwcGVyLm1vZGVsQmluZGluZ3MuZm9yRWFjaCgobW9kZWxCaW5kaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE1vZGVsTmFtZSA9IG1vZGVsQmluZGluZy5pbm5lck1vZGVsTmFtZSB8fCAndmFsdWUnO1xuICAgICAgICAgICAgaWYgKGNoaWxkTW9kZWxOYW1lICE9PSBtb2RlbE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldChtb2RlbEJpbmRpbmcubW9kZWxOYW1lLCB2YWx1ZSwgbW9kZWxCaW5kaW5nLnNob3VsZFJlbmRlciwgbW9kZWxCaW5kaW5nLmRlYm91bmNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHRyeVN0YXJ0aW5nUmVxdWVzdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJhY2tlbmRSZXF1ZXN0KSB7XG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1SZXF1ZXN0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgcGVyZm9ybVJlcXVlc3QoKSB7XG4gICAgICAgIGNvbnN0IHRoaXNQcm9taXNlUmVzb2x2ZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlUmVzb2x2ZTtcbiAgICAgICAgdGhpcy5yZXNldFByb21pc2UoKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIucmVzZXRVbnN5bmNlZEZpZWxkcygpO1xuICAgICAgICB0aGlzLmJhY2tlbmRSZXF1ZXN0ID0gdGhpcy5iYWNrZW5kLm1ha2VSZXF1ZXN0KHRoaXMudmFsdWVTdG9yZS5hbGwoKSwgdGhpcy5wZW5kaW5nQWN0aW9ucywgdGhpcy52YWx1ZVN0b3JlLnVwZGF0ZWRNb2RlbHMsIHRoaXMuZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMoKSk7XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ2xvYWRpbmcuc3RhdGU6c3RhcnRlZCcsIHRoaXMuZWxlbWVudCwgdGhpcy5iYWNrZW5kUmVxdWVzdCk7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnVwZGF0ZWRNb2RlbHMgPSBbXTtcbiAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QucHJvbWlzZS50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdCA9IG51bGw7XG4gICAgICAgICAgICBjb25zdCBiYWNrZW5kUmVzcG9uc2UgPSBuZXcgQmFja2VuZFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCBiYWNrZW5kUmVzcG9uc2UuZ2V0Qm9keSgpO1xuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzO1xuICAgICAgICAgICAgaWYgKGhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSAhPT0gJ2FwcGxpY2F0aW9uL3ZuZC5saXZlLWNvbXBvbmVudCtodG1sJyAmJiAhaGVhZGVycy5nZXQoJ1gtTGl2ZS1SZWRpcmVjdCcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJvbHMgPSB7IGRpc3BsYXlFcnJvcjogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ3Jlc3BvbnNlOmVycm9yJywgYmFja2VuZFJlc3BvbnNlLCBjb250cm9scyk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xzLmRpc3BsYXlFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckVycm9yKGh0bWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzUHJvbWlzZVJlc29sdmUoYmFja2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NSZXJlbmRlcihodG1sLCBiYWNrZW5kUmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpc1Byb21pc2VSZXNvbHZlKGJhY2tlbmRSZXNwb25zZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1JlcXVlc3RQZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wZXJmb3JtUmVxdWVzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJvY2Vzc1JlcmVuZGVyKGh0bWwsIGJhY2tlbmRSZXNwb25zZSkge1xuICAgICAgICBjb25zdCBjb250cm9scyA9IHsgc2hvdWxkUmVuZGVyOiB0cnVlIH07XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ3JlbmRlcjpzdGFydGVkJywgaHRtbCwgYmFja2VuZFJlc3BvbnNlLCBjb250cm9scyk7XG4gICAgICAgIGlmICghY29udHJvbHMuc2hvdWxkUmVuZGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldCgnTG9jYXRpb24nKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBUdXJibyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBUdXJiby52aXNpdChiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycy5nZXQoJ0xvY2F0aW9uJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycy5nZXQoJ0xvY2F0aW9uJykgfHwgJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnbG9hZGluZy5zdGF0ZTpmaW5pc2hlZCcsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IG1vZGlmaWVkTW9kZWxWYWx1ZXMgPSB7fTtcbiAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnVwZGF0ZWRNb2RlbHMuZm9yRWFjaCgobW9kZWxOYW1lKSA9PiB7XG4gICAgICAgICAgICBtb2RpZmllZE1vZGVsVmFsdWVzW21vZGVsTmFtZV0gPSB0aGlzLnZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgbmV3RWxlbWVudDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBodG1sVG9FbGVtZW50KGh0bWwpO1xuICAgICAgICAgICAgaWYgKCFuZXdFbGVtZW50Lm1hdGNoZXMoJ1tkYXRhLWNvbnRyb2xsZXJ+PWxpdmVdJykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgbGl2ZSBjb21wb25lbnQgdGVtcGxhdGUgbXVzdCBjb250YWluIGEgc2luZ2xlIHJvb3QgY29udHJvbGxlciBlbGVtZW50LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHRoZSBjb21wb25lbnQgSFRNTCByZXR1cm5lZDonKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ2xvYWRpbmcuc3RhdGU6ZmluaXNoZWQnLCBuZXdFbGVtZW50KTtcbiAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnJlaW5pdGlhbGl6ZUFsbFByb3BzKHRoaXMuZWxlbWVudERyaXZlci5nZXRDb21wb25lbnRQcm9wcyhuZXdFbGVtZW50KSk7XG4gICAgICAgIGV4ZWN1dGVNb3JwaGRvbSh0aGlzLmVsZW1lbnQsIG5ld0VsZW1lbnQsIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLmdldFVuc3luY2VkSW5wdXRzKCksIChlbGVtZW50KSA9PiBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRoaXMudmFsdWVTdG9yZSksIEFycmF5LmZyb20odGhpcy5nZXRDaGlsZHJlbigpLnZhbHVlcygpKSwgdGhpcy5lbGVtZW50RHJpdmVyLmZpbmRDaGlsZENvbXBvbmVudEVsZW1lbnQsIHRoaXMuZWxlbWVudERyaXZlci5nZXRLZXlGcm9tRWxlbWVudCk7XG4gICAgICAgIE9iamVjdC5rZXlzKG1vZGlmaWVkTW9kZWxWYWx1ZXMpLmZvckVhY2goKG1vZGVsTmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIG1vZGlmaWVkTW9kZWxWYWx1ZXNbbW9kZWxOYW1lXSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdyZW5kZXI6ZmluaXNoZWQnLCB0aGlzKTtcbiAgICB9XG4gICAgY2FsY3VsYXRlRGVib3VuY2UoZGVib3VuY2UpIHtcbiAgICAgICAgaWYgKGRlYm91bmNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0RGVib3VuY2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlYm91bmNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlYm91bmNlO1xuICAgIH1cbiAgICBjbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWJvdW5jZWRTdGFydFJlcXVlc3QoZGVib3VuY2UpIHtcbiAgICAgICAgdGhpcy5jbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSwgdGhpcy5jYWxjdWxhdGVEZWJvdW5jZShkZWJvdW5jZSkpO1xuICAgIH1cbiAgICByZW5kZXJFcnJvcihodG1sKSB7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXZlLWNvbXBvbmVudC1lcnJvcicpO1xuICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgIG1vZGFsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1vZGFsLmlkID0gJ2xpdmUtY29tcG9uZW50LWVycm9yJztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnBhZGRpbmcgPSAnNTBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLCAwLCAwLCAuNSknO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuekluZGV4ID0gJzEwMDAwMCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmJvdHRvbSA9ICcwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUucmlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgIGlmcmFtZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNXB4JztcbiAgICAgICAgaWZyYW1lLnN0eWxlLmZsZXhHcm93ID0gJzEnO1xuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQobW9kYWwpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIGlmIChpZnJhbWUuY29udGVudFdpbmRvdykge1xuICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQub3BlbigpO1xuICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQud3JpdGUoaHRtbCk7XG4gICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAobW9kYWwpID0+IHtcbiAgICAgICAgICAgIGlmIChtb2RhbCkge1xuICAgICAgICAgICAgICAgIG1vZGFsLm91dGVySFRNTCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcbiAgICAgICAgfTtcbiAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZU1vZGFsKG1vZGFsKSk7XG4gICAgICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtb2RhbC5mb2N1cygpO1xuICAgIH1cbiAgICBnZXRDaGlsZHJlbkZpbmdlcnByaW50cygpIHtcbiAgICAgICAgY29uc3QgZmluZ2VycHJpbnRzID0ge307XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGRDb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRDb21wb25lbnQuY29tcG9uZW50O1xuICAgICAgICAgICAgaWYgKCFjaGlsZC5pZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluZ2VycHJpbnRzW2NoaWxkLmlkXSA9IGNoaWxkLmZpbmdlcnByaW50O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZpbmdlcnByaW50cztcbiAgICB9XG4gICAgcmVzZXRQcm9taXNlKCkge1xuICAgICAgICB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBwcm94aWZ5Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHJldHVybiBuZXcgUHJveHkoY29tcG9uZW50LCB7XG4gICAgICAgIGdldChjb21wb25lbnQsIHByb3ApIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNvbXBvbmVudCB8fCB0eXBlb2YgcHJvcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudFtwcm9wXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYWJsZSA9IGNvbXBvbmVudFtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGFibGUuYXBwbHkoY29tcG9uZW50LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KGNvbXBvbmVudCwgcHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LnZhbHVlU3RvcmUuaGFzKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5nZXREYXRhKHByb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5hY3Rpb24uYXBwbHkoY29tcG9uZW50LCBbcHJvcCwgYXJnc10pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAocHJvcGVydHkgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0LnNldChwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5cbmNsYXNzIEJhY2tlbmRSZXF1ZXN0IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9taXNlLCBhY3Rpb25zLCB1cGRhdGVNb2RlbHMpIHtcbiAgICAgICAgdGhpcy5pc1Jlc29sdmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgIHRoaXMucHJvbWlzZS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1Jlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgICAgIHRoaXMudXBkYXRlZE1vZGVscyA9IHVwZGF0ZU1vZGVscztcbiAgICB9XG4gICAgY29udGFpbnNPbmVPZkFjdGlvbnModGFyZ2V0ZWRBY3Rpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbnMuZmlsdGVyKChhY3Rpb24pID0+IHRhcmdldGVkQWN0aW9ucy5pbmNsdWRlcyhhY3Rpb24pKS5sZW5ndGggPiAwO1xuICAgIH1cbiAgICBhcmVBbnlNb2RlbHNVcGRhdGVkKHRhcmdldGVkTW9kZWxzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZWRNb2RlbHMuZmlsdGVyKChtb2RlbCkgPT4gdGFyZ2V0ZWRNb2RlbHMuaW5jbHVkZXMobW9kZWwpKS5sZW5ndGggPiAwO1xuICAgIH1cbn1cblxuY2xhc3MgQmFja2VuZCB7XG4gICAgY29uc3RydWN0b3IodXJsLCBjc3JmVG9rZW4gPSBudWxsKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLmNzcmZUb2tlbiA9IGNzcmZUb2tlbjtcbiAgICB9XG4gICAgbWFrZVJlcXVlc3QoZGF0YSwgYWN0aW9ucywgdXBkYXRlZE1vZGVscywgY2hpbGRyZW5GaW5nZXJwcmludHMpIHtcbiAgICAgICAgY29uc3Qgc3BsaXRVcmwgPSB0aGlzLnVybC5zcGxpdCgnPycpO1xuICAgICAgICBsZXQgW3VybF0gPSBzcGxpdFVybDtcbiAgICAgICAgY29uc3QgWywgcXVlcnlTdHJpbmddID0gc3BsaXRVcmw7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcgfHwgJycpO1xuICAgICAgICBjb25zdCBmZXRjaE9wdGlvbnMgPSB7fTtcbiAgICAgICAgZmV0Y2hPcHRpb25zLmhlYWRlcnMgPSB7XG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi92bmQubGl2ZS1jb21wb25lbnQraHRtbCcsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGhhc0ZpbmdlcnByaW50cyA9IE9iamVjdC5rZXlzKGNoaWxkcmVuRmluZ2VycHJpbnRzKS5sZW5ndGggPiAwO1xuICAgICAgICBjb25zdCBoYXNVcGRhdGVkTW9kZWxzID0gT2JqZWN0LmtleXModXBkYXRlZE1vZGVscykubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICB0aGlzLndpbGxEYXRhRml0SW5VcmwoSlNPTi5zdHJpbmdpZnkoZGF0YSksIHBhcmFtcywgSlNPTi5zdHJpbmdpZnkoY2hpbGRyZW5GaW5nZXJwcmludHMpKSkge1xuICAgICAgICAgICAgcGFyYW1zLnNldCgnZGF0YScsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgIGlmIChoYXNGaW5nZXJwcmludHMpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuc2V0KCdjaGlsZHJlbkZpbmdlcnByaW50cycsIEpTT04uc3RyaW5naWZ5KGNoaWxkcmVuRmluZ2VycHJpbnRzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVkTW9kZWxzLmZvckVhY2goKG1vZGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLmFwcGVuZCgndXBkYXRlZE1vZGVsc1tdJywgbW9kZWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMubWV0aG9kID0gJ0dFVCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMubWV0aG9kID0gJ1BPU1QnO1xuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdERhdGEgPSB7IGRhdGEgfTtcbiAgICAgICAgICAgIGlmIChoYXNVcGRhdGVkTW9kZWxzKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdERhdGEudXBkYXRlZE1vZGVscyA9IHVwZGF0ZWRNb2RlbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGFzRmluZ2VycHJpbnRzKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdERhdGEuY2hpbGRyZW5GaW5nZXJwcmludHMgPSBjaGlsZHJlbkZpbmdlcnByaW50cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jc3JmVG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmhlYWRlcnNbJ1gtQ1NSRi1UT0tFTiddID0gdGhpcy5jc3JmVG9rZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0RGF0YS5hcmdzID0gYWN0aW9uc1swXS5hcmdzO1xuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gYC8ke2VuY29kZVVSSUNvbXBvbmVudChhY3Rpb25zWzBdLm5hbWUpfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJy9fYmF0Y2gnO1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0RGF0YS5hY3Rpb25zID0gYWN0aW9ucztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KHJlcXVlc3REYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBCYWNrZW5kUmVxdWVzdChmZXRjaChgJHt1cmx9JHtwYXJhbXNTdHJpbmcubGVuZ3RoID4gMCA/IGA/JHtwYXJhbXNTdHJpbmd9YCA6ICcnfWAsIGZldGNoT3B0aW9ucyksIGFjdGlvbnMubWFwKChiYWNrZW5kQWN0aW9uKSA9PiBiYWNrZW5kQWN0aW9uLm5hbWUpLCB1cGRhdGVkTW9kZWxzKTtcbiAgICB9XG4gICAgd2lsbERhdGFGaXRJblVybChkYXRhSnNvbiwgcGFyYW1zLCBjaGlsZHJlbkZpbmdlcnByaW50c0pzb24pIHtcbiAgICAgICAgY29uc3QgdXJsRW5jb2RlZEpzb25EYXRhID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhkYXRhSnNvbiArIGNoaWxkcmVuRmluZ2VycHJpbnRzSnNvbikudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuICh1cmxFbmNvZGVkSnNvbkRhdGEgKyBwYXJhbXMudG9TdHJpbmcoKSkubGVuZ3RoIDwgMTUwMDtcbiAgICB9XG59XG5cbmNsYXNzIFN0YW5kYXJkRWxlbWVudERyaXZlciB7XG4gICAgZ2V0TW9kZWxOYW1lKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgaWYgKCFtb2RlbERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZGVsRGlyZWN0aXZlLmFjdGlvbjtcbiAgICB9XG4gICAgZ2V0Q29tcG9uZW50UHJvcHMocm9vdEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFyb290RWxlbWVudC5kYXRhc2V0LmxpdmVQcm9wc1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShyb290RWxlbWVudC5kYXRhc2V0LmxpdmVQcm9wc1ZhbHVlKTtcbiAgICB9XG4gICAgZmluZENoaWxkQ29tcG9uZW50RWxlbWVudChpZCwgZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1saXZlLWlkPSR7aWR9XWApO1xuICAgIH1cbiAgICBnZXRLZXlGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmRhdGFzZXQubGl2ZUlkIHx8IG51bGw7XG4gICAgfVxufVxuXG5jbGFzcyBMb2FkaW5nUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdsb2FkaW5nLnN0YXRlOnN0YXJ0ZWQnLCAoZWxlbWVudCwgcmVxdWVzdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGFydExvYWRpbmcoZWxlbWVudCwgcmVxdWVzdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ2xvYWRpbmcuc3RhdGU6ZmluaXNoZWQnLCAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5maW5pc2hMb2FkaW5nKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5maW5pc2hMb2FkaW5nKGNvbXBvbmVudC5lbGVtZW50KTtcbiAgICB9XG4gICAgc3RhcnRMb2FkaW5nKHRhcmdldEVsZW1lbnQsIGJhY2tlbmRSZXF1ZXN0KSB7XG4gICAgICAgIHRoaXMuaGFuZGxlTG9hZGluZ1RvZ2dsZSh0cnVlLCB0YXJnZXRFbGVtZW50LCBiYWNrZW5kUmVxdWVzdCk7XG4gICAgfVxuICAgIGZpbmlzaExvYWRpbmcodGFyZ2V0RWxlbWVudCkge1xuICAgICAgICB0aGlzLmhhbmRsZUxvYWRpbmdUb2dnbGUoZmFsc2UsIHRhcmdldEVsZW1lbnQsIG51bGwpO1xuICAgIH1cbiAgICBoYW5kbGVMb2FkaW5nVG9nZ2xlKGlzTG9hZGluZywgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpIHtcbiAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5hZGRBdHRyaWJ1dGVzKHRhcmdldEVsZW1lbnQsIFsnYnVzeSddKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlcyh0YXJnZXRFbGVtZW50LCBbJ2J1c3knXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRMb2FkaW5nRGlyZWN0aXZlcyh0YXJnZXRFbGVtZW50KS5mb3JFYWNoKCh7IGVsZW1lbnQsIGRpcmVjdGl2ZXMgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQXR0cmlidXRlcyhlbGVtZW50LCBbJ2RhdGEtbGl2ZS1pcy1sb2FkaW5nJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVzKGVsZW1lbnQsIFsnZGF0YS1saXZlLWlzLWxvYWRpbmcnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTG9hZGluZ0RpcmVjdGl2ZShlbGVtZW50LCBpc0xvYWRpbmcsIGRpcmVjdGl2ZSwgYmFja2VuZFJlcXVlc3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVMb2FkaW5nRGlyZWN0aXZlKGVsZW1lbnQsIGlzTG9hZGluZywgZGlyZWN0aXZlLCBiYWNrZW5kUmVxdWVzdCkge1xuICAgICAgICBjb25zdCBmaW5hbEFjdGlvbiA9IHBhcnNlTG9hZGluZ0FjdGlvbihkaXJlY3RpdmUuYWN0aW9uLCBpc0xvYWRpbmcpO1xuICAgICAgICBjb25zdCB0YXJnZXRlZEFjdGlvbnMgPSBbXTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ZWRNb2RlbHMgPSBbXTtcbiAgICAgICAgbGV0IGRlbGF5ID0gMDtcbiAgICAgICAgY29uc3QgdmFsaWRNb2RpZmllcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnZGVsYXknLCAobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgIGlmICghaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsYXkgPSBtb2RpZmllci52YWx1ZSA/IHBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IDIwMDtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnYWN0aW9uJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJhY3Rpb25cIiBpbiBkYXRhLWxvYWRpbmcgbXVzdCBoYXZlIGFuIGFjdGlvbiBuYW1lIC0gZS5nLiBhY3Rpb24oZm9vKS4gSXQncyBtaXNzaW5nIGZvciBcIiR7ZGlyZWN0aXZlLmdldFN0cmluZygpfVwiYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXRlZEFjdGlvbnMucHVzaChtb2RpZmllci52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ21vZGVsJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJtb2RlbFwiIGluIGRhdGEtbG9hZGluZyBtdXN0IGhhdmUgYW4gYWN0aW9uIG5hbWUgLSBlLmcuIG1vZGVsKGZvbykuIEl0J3MgbWlzc2luZyBmb3IgXCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0ZWRNb2RlbHMucHVzaChtb2RpZmllci52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAodmFsaWRNb2RpZmllcnMuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FsbGFibGUgPSAoX2EgPSB2YWxpZE1vZGlmaWVycy5nZXQobW9kaWZpZXIubmFtZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICgoKSA9PiB7IH0pO1xuICAgICAgICAgICAgICAgIGNhbGxhYmxlKG1vZGlmaWVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgdXNlZCBpbiBkYXRhLWxvYWRpbmc9XCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cIi4gQXZhaWxhYmxlIG1vZGlmaWVycyBhcmU6ICR7QXJyYXkuZnJvbSh2YWxpZE1vZGlmaWVycy5rZXlzKCkpLmpvaW4oJywgJyl9LmApO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlzTG9hZGluZyAmJiB0YXJnZXRlZEFjdGlvbnMubGVuZ3RoID4gMCAmJiBiYWNrZW5kUmVxdWVzdCAmJiAhYmFja2VuZFJlcXVlc3QuY29udGFpbnNPbmVPZkFjdGlvbnModGFyZ2V0ZWRBY3Rpb25zKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0xvYWRpbmcgJiYgdGFyZ2V0ZWRNb2RlbHMubGVuZ3RoID4gMCAmJiBiYWNrZW5kUmVxdWVzdCAmJiAhYmFja2VuZFJlcXVlc3QuYXJlQW55TW9kZWxzVXBkYXRlZCh0YXJnZXRlZE1vZGVscykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbG9hZGluZ0RpcmVjdGl2ZTtcbiAgICAgICAgc3dpdGNoIChmaW5hbEFjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnc2hvdyc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaGlkZSc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuaGlkZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhZGRDbGFzcyc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuYWRkQ2xhc3MoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVtb3ZlQ2xhc3MnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLnJlbW92ZUNsYXNzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FkZEF0dHJpYnV0ZSc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuYWRkQXR0cmlidXRlcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZW1vdmVBdHRyaWJ1dGUnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLnJlbW92ZUF0dHJpYnV0ZXMoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZGF0YS1sb2FkaW5nIGFjdGlvbiBcIiR7ZmluYWxBY3Rpb259XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVsYXkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYmFja2VuZFJlcXVlc3QgJiYgIWJhY2tlbmRSZXF1ZXN0LmlzUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsb2FkaW5nRGlyZWN0aXZlKCk7XG4gICAgfVxuICAgIGdldExvYWRpbmdEaXJlY3RpdmVzKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbG9hZGluZ0RpcmVjdGl2ZXMgPSBbXTtcbiAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1sb2FkaW5nXScpLmZvckVhY2goKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSAmJiAhKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBFbGVtZW50IFR5cGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZWxlbWVudC5kYXRhc2V0LmxvYWRpbmcgfHwgJ3Nob3cnKTtcbiAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmVzLnB1c2goe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBsb2FkaW5nRGlyZWN0aXZlcztcbiAgICB9XG4gICAgc2hvd0VsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICB9XG4gICAgaGlkZUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICAgIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzZXMpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNvbWJpbmVTcGFjZWRBcnJheShjbGFzc2VzKSk7XG4gICAgfVxuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzZXMpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLmNvbWJpbmVTcGFjZWRBcnJheShjbGFzc2VzKSk7XG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBbJ2NsYXNzJ10pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCAnJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW1vdmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmNvbnN0IHBhcnNlTG9hZGluZ0FjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb24sIGlzTG9hZGluZykge1xuICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJ3Nob3cnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdzaG93JyA6ICdoaWRlJztcbiAgICAgICAgY2FzZSAnaGlkZSc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ2hpZGUnIDogJ3Nob3cnO1xuICAgICAgICBjYXNlICdhZGRDbGFzcyc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyc7XG4gICAgICAgIGNhc2UgJ3JlbW92ZUNsYXNzJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAncmVtb3ZlQ2xhc3MnIDogJ2FkZENsYXNzJztcbiAgICAgICAgY2FzZSAnYWRkQXR0cmlidXRlJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAnYWRkQXR0cmlidXRlJyA6ICdyZW1vdmVBdHRyaWJ1dGUnO1xuICAgICAgICBjYXNlICdyZW1vdmVBdHRyaWJ1dGUnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdyZW1vdmVBdHRyaWJ1dGUnIDogJ2FkZEF0dHJpYnV0ZSc7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBkYXRhLWxvYWRpbmcgYWN0aW9uIFwiJHthY3Rpb259XCJgKTtcbn07XG5cbmNsYXNzIFZhbGlkYXRlZEZpZWxkc1BsdWdpbiB7XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5vbignbW9kZWw6c2V0JywgKG1vZGVsTmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVNb2RlbFNldChtb2RlbE5hbWUsIGNvbXBvbmVudC52YWx1ZVN0b3JlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZU1vZGVsU2V0KG1vZGVsTmFtZSwgdmFsdWVTdG9yZSkge1xuICAgICAgICBpZiAodmFsdWVTdG9yZS5oYXMoJ3ZhbGlkYXRlZEZpZWxkcycpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBbLi4udmFsdWVTdG9yZS5nZXQoJ3ZhbGlkYXRlZEZpZWxkcycpXTtcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVkRmllbGRzLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZWRGaWVsZHMucHVzaChtb2RlbE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWVTdG9yZS5zZXQoJ3ZhbGlkYXRlZEZpZWxkcycsIHZhbGlkYXRlZEZpZWxkcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFBhZ2VVbmxvYWRpbmdQbHVnaW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQub24oJ3JlbmRlcjpzdGFydGVkJywgKGh0bWwsIHJlc3BvbnNlLCBjb250cm9scykgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbHMuc2hvdWxkUmVuZGVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBQb2xsaW5nRGlyZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9sbGluZ0ludGVydmFscyA9IFtdO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB9XG4gICAgYWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICB0aGlzLnBvbGxzLnB1c2goeyBhY3Rpb25OYW1lLCBkdXJhdGlvbiB9KTtcbiAgICAgICAgaWYgKHRoaXMuaXNQb2xsaW5nQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnRBbGxQb2xsaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5pc1BvbGxpbmdBY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9sbHMuZm9yRWFjaCgoeyBhY3Rpb25OYW1lLCBkdXJhdGlvbiB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdG9wQWxsUG9sbGluZygpIHtcbiAgICAgICAgdGhpcy5pc1BvbGxpbmdBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb2xsaW5nSW50ZXJ2YWxzLmZvckVhY2goKGludGVydmFsKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNsZWFyUG9sbGluZygpIHtcbiAgICAgICAgdGhpcy5zdG9wQWxsUG9sbGluZygpO1xuICAgICAgICB0aGlzLnBvbGxzID0gW107XG4gICAgICAgIHRoaXMuc3RhcnRBbGxQb2xsaW5nKCk7XG4gICAgfVxuICAgIGluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICBsZXQgY2FsbGJhY2s7XG4gICAgICAgIGlmIChhY3Rpb25OYW1lID09PSAnJHJlbmRlcicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LnJlbmRlcigpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmFjdGlvbihhY3Rpb25OYW1lLCB7fSwgMCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgICB0aGlzLnBvbGxpbmdJbnRlcnZhbHMucHVzaCh0aW1lcik7XG4gICAgfVxufVxuXG5jbGFzcyBQb2xsaW5nUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gY29tcG9uZW50LmVsZW1lbnQ7XG4gICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yID0gbmV3IFBvbGxpbmdEaXJlY3Rvcihjb21wb25lbnQpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVQb2xsaW5nKCk7XG4gICAgICAgIGNvbXBvbmVudC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yLnN0YXJ0QWxsUG9sbGluZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb2xsaW5nRGlyZWN0b3Iuc3RvcEFsbFBvbGxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbigncmVuZGVyOmZpbmlzaGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplUG9sbGluZygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5hZGRQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKTtcbiAgICB9XG4gICAgY2xlYXJQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5jbGVhclBvbGxpbmcoKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZVBvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQb2xsaW5nKCk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQuZGF0YXNldC5wb2xsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYXdQb2xsQ29uZmlnID0gdGhpcy5lbGVtZW50LmRhdGFzZXQucG9sbDtcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhyYXdQb2xsQ29uZmlnIHx8ICckcmVuZGVyJyk7XG4gICAgICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZHVyYXRpb24gPSAyMDAwO1xuICAgICAgICAgICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kaWZpZXIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZWxheSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IHBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIG1vZGlmaWVyIFwiJHttb2RpZmllci5uYW1lfVwiIGluIGRhdGEtcG9sbCBcIiR7cmF3UG9sbENvbmZpZ31cIi5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuYWRkUG9sbChkaXJlY3RpdmUuYWN0aW9uLCBkdXJhdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY2xhc3MgU2V0VmFsdWVPbnRvTW9kZWxGaWVsZHNQbHVnaW4ge1xuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLnN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzKGNvbXBvbmVudCk7XG4gICAgICAgIGNvbXBvbmVudC5vbigncmVuZGVyOmZpbmlzaGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyhjb21wb25lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGVsXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZWxlbWVudCB1c2luZyBkYXRhLW1vZGVsLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtb2RlbERpcmVjdGl2ZSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoIW1vZGVsRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbW9kZWxOYW1lID0gbW9kZWxEaXJlY3RpdmUuYWN0aW9uO1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5nZXRVbnN5bmNlZE1vZGVscygpLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LnZhbHVlU3RvcmUuaGFzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZU9uRWxlbWVudChlbGVtZW50LCBjb21wb25lbnQudmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50ICYmICFlbGVtZW50Lm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnZhbHVlU3RvcmUuc2V0KG1vZGVsTmFtZSwgZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCBjb21wb25lbnQudmFsdWVTdG9yZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldE1vZGVsQmluZGluZyAobW9kZWxEaXJlY3RpdmUpIHtcbiAgICBsZXQgc2hvdWxkUmVuZGVyID0gdHJ1ZTtcbiAgICBsZXQgdGFyZ2V0RXZlbnROYW1lID0gbnVsbDtcbiAgICBsZXQgZGVib3VuY2UgPSBmYWxzZTtcbiAgICBtb2RlbERpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgc3dpdGNoIChtb2RpZmllci5uYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdvbic6XG4gICAgICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcIm9uXCIgbW9kaWZpZXIgaW4gJHttb2RlbERpcmVjdGl2ZS5nZXRTdHJpbmcoKX0gcmVxdWlyZXMgYSB2YWx1ZSAtIGUuZy4gb24oY2hhbmdlKS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFbJ2lucHV0JywgJ2NoYW5nZSddLmluY2x1ZGVzKG1vZGlmaWVyLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcIm9uXCIgbW9kaWZpZXIgaW4gJHttb2RlbERpcmVjdGl2ZS5nZXRTdHJpbmcoKX0gb25seSBhY2NlcHRzIHRoZSBhcmd1bWVudHMgXCJpbnB1dFwiIG9yIFwiY2hhbmdlXCIuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhcmdldEV2ZW50TmFtZSA9IG1vZGlmaWVyLnZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbm9yZW5kZXInOlxuICAgICAgICAgICAgICAgIHNob3VsZFJlbmRlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGVib3VuY2UnOlxuICAgICAgICAgICAgICAgIGRlYm91bmNlID0gbW9kaWZpZXIudmFsdWUgPyBwYXJzZUludChtb2RpZmllci52YWx1ZSkgOiB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgaW4gZGF0YS1tb2RlbD1cIiR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCIuYCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBbbW9kZWxOYW1lLCBpbm5lck1vZGVsTmFtZV0gPSBtb2RlbERpcmVjdGl2ZS5hY3Rpb24uc3BsaXQoJzonKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBtb2RlbE5hbWUsXG4gICAgICAgIGlubmVyTW9kZWxOYW1lOiBpbm5lck1vZGVsTmFtZSB8fCBudWxsLFxuICAgICAgICBzaG91bGRSZW5kZXIsXG4gICAgICAgIGRlYm91bmNlLFxuICAgICAgICB0YXJnZXRFdmVudE5hbWVcbiAgICB9O1xufVxuXG5jb25zdCBDb21wb25lbnRSZWdpc3RyeSA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gbmV3IFdlYWtNYXAoKTtcbiAgICB9XG4gICAgcmVnaXN0ZXJDb21wb25lbnQoZWxlbWVudCwgZGVmaW5pdGlvbikge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc2V0KGVsZW1lbnQsIGRlZmluaXRpb24pO1xuICAgIH1cbiAgICB1bnJlZ2lzdGVyQ29tcG9uZW50KGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICB9XG4gICAgZ2V0Q29tcG9uZW50KGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zdCBtYXhDb3VudCA9IDEwO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzLmdldChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPiBtYXhDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgQ29tcG9uZW50IG5vdCBmb3VuZCBmb3IgZWxlbWVudCAke2dldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCl9YCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDUpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xudmFyIENvbXBvbmVudFJlZ2lzdHJ5JDEgPSBuZXcgQ29tcG9uZW50UmVnaXN0cnkoKTtcblxuY29uc3QgZ2V0Q29tcG9uZW50ID0gKGVsZW1lbnQpID0+IENvbXBvbmVudFJlZ2lzdHJ5JDEuZ2V0Q29tcG9uZW50KGVsZW1lbnQpO1xuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycyA9IFtcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdpbnB1dCcsIGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXRFdmVudChldmVudCkgfSxcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdjaGFuZ2UnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUNoYW5nZUV2ZW50KGV2ZW50KSB9LFxuICAgICAgICAgICAgeyBldmVudDogJ2xpdmU6Y29ubmVjdCcsIGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlQ29ubmVjdGVkQ29udHJvbGxlckV2ZW50KGV2ZW50KSB9LFxuICAgICAgICBdO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmhhbmRsZURpc2Nvbm5lY3RlZENoaWxkQ29udHJvbGxlckV2ZW50ID0gdGhpcy5oYW5kbGVEaXNjb25uZWN0ZWRDaGlsZENvbnRyb2xsZXJFdmVudC5iaW5kKHRoaXMpO1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMuZWxlbWVudC5kYXRhc2V0LmxpdmVJZCB8fCBudWxsO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQodGhpcy5lbGVtZW50LCB0aGlzLnByb3BzVmFsdWUsIHRoaXMuZmluZ2VycHJpbnRWYWx1ZSwgaWQsIG5ldyBCYWNrZW5kKHRoaXMudXJsVmFsdWUsIHRoaXMuY3NyZlZhbHVlKSwgbmV3IFN0YW5kYXJkRWxlbWVudERyaXZlcigpKTtcbiAgICAgICAgdGhpcy5wcm94aWVkQ29tcG9uZW50ID0gcHJveGlmeUNvbXBvbmVudCh0aGlzLmNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5fX2NvbXBvbmVudCA9IHRoaXMucHJveGllZENvbXBvbmVudDtcbiAgICAgICAgaWYgKHRoaXMuaGFzRGVib3VuY2VWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZGVmYXVsdERlYm91bmNlID0gdGhpcy5kZWJvdW5jZVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBsdWdpbnMgPSBbXG4gICAgICAgICAgICBuZXcgTG9hZGluZ1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IFZhbGlkYXRlZEZpZWxkc1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IFBhZ2VVbmxvYWRpbmdQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBQb2xsaW5nUGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgU2V0VmFsdWVPbnRvTW9kZWxGaWVsZHNQbHVnaW4oKSxcbiAgICAgICAgXTtcbiAgICAgICAgcGx1Z2lucy5mb3JFYWNoKChwbHVnaW4pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmFkZFBsdWdpbihwbHVnaW4pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuY29ubmVjdCgpO1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIENvbXBvbmVudFJlZ2lzdHJ5JDEucmVnaXN0ZXJDb21wb25lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29ubmVjdCcpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5kaXNjb25uZWN0KCk7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgQ29tcG9uZW50UmVnaXN0cnkkMS51bnJlZ2lzdGVyQ29tcG9uZW50KHRoaXMuZWxlbWVudCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnZGlzY29ubmVjdCcpO1xuICAgIH1cbiAgICB1cGRhdGUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdpbnB1dCcgfHwgZXZlbnQudHlwZSA9PT0gJ2NoYW5nZScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU2luY2UgTGl2ZUNvbXBvbmVudHMgMi4zLCB5b3Ugbm8gbG9uZ2VyIG5lZWQgZGF0YS1hY3Rpb249XCJsaXZlI3VwZGF0ZVwiIG9uIGZvcm0gZWxlbWVudHMuIEZvdW5kIG9uIGVsZW1lbnQ6ICR7Z2V0RWxlbWVudEFzVGFnVGV4dChldmVudC50YXJnZXQpfWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KGV2ZW50LnRhcmdldCwgbnVsbCk7XG4gICAgfVxuICAgIGFjdGlvbihldmVudCkge1xuICAgICAgICBjb25zdCByYXdBY3Rpb24gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuYWN0aW9uTmFtZTtcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhyYXdBY3Rpb24pO1xuICAgICAgICBsZXQgZGVib3VuY2UgPSBmYWxzZTtcbiAgICAgICAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkTW9kaWZpZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdwcmV2ZW50JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnc3RvcCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdzZWxmJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdkZWJvdW5jZScsIChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgICAgIGRlYm91bmNlID0gbW9kaWZpZXIudmFsdWUgPyBwYXJzZUludChtb2RpZmllci52YWx1ZSkgOiB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZE1vZGlmaWVycy5oYXMobW9kaWZpZXIubmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGFibGUgPSAoX2EgPSB2YWxpZE1vZGlmaWVycy5nZXQobW9kaWZpZXIubmFtZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICgoKSA9PiB7IH0pO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYWJsZShtb2RpZmllcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIG1vZGlmaWVyICR7bW9kaWZpZXIubmFtZX0gaW4gYWN0aW9uIFwiJHtyYXdBY3Rpb259XCIuIEF2YWlsYWJsZSBtb2RpZmllcnMgYXJlOiAke0FycmF5LmZyb20odmFsaWRNb2RpZmllcnMua2V5cygpKS5qb2luKCcsICcpfS5gKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuYWN0aW9uKGRpcmVjdGl2ZS5hY3Rpb24sIGRpcmVjdGl2ZS5uYW1lZCwgZGVib3VuY2UpO1xuICAgICAgICAgICAgaWYgKGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZXZlbnQuY3VycmVudFRhcmdldCwgZmFsc2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nQWN0aW9uVHJpZ2dlck1vZGVsRWxlbWVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAkcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQucmVuZGVyKCk7XG4gICAgfVxuICAgICR1cGRhdGVNb2RlbChtb2RlbCwgdmFsdWUsIHNob3VsZFJlbmRlciA9IHRydWUsIGRlYm91bmNlID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQuc2V0KG1vZGVsLCB2YWx1ZSwgc2hvdWxkUmVuZGVyLCBkZWJvdW5jZSk7XG4gICAgfVxuICAgIGhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KHRhcmdldCwgJ2lucHV0Jyk7XG4gICAgfVxuICAgIGhhbmRsZUNoYW5nZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudCh0YXJnZXQsICdjaGFuZ2UnKTtcbiAgICB9XG4gICAgdXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KGVsZW1lbnQsIGV2ZW50TmFtZSkge1xuICAgICAgICBpZiAoIWVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHVwZGF0ZSBtb2RlbCBmb3Igbm9uIEhUTUxFbGVtZW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgaWYgKCFtb2RlbERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZGVsQmluZGluZyA9IGdldE1vZGVsQmluZGluZyhtb2RlbERpcmVjdGl2ZSk7XG4gICAgICAgIGlmICghbW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSkge1xuICAgICAgICAgICAgbW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSA9ICdpbnB1dCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgIG1vZGVsQmluZGluZy5zaG91bGRSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnY2hhbmdlJyAmJiBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID0gJ2NoYW5nZSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50TmFtZSAmJiBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lICE9PSBldmVudE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmFsc2UgPT09IG1vZGVsQmluZGluZy5kZWJvdW5jZSkge1xuICAgICAgICAgICAgaWYgKG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgICAgICBtb2RlbEJpbmRpbmcuZGVib3VuY2UgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbW9kZWxCaW5kaW5nLmRlYm91bmNlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaW5hbFZhbHVlID0gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB0aGlzLmNvbXBvbmVudC52YWx1ZVN0b3JlKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuc2V0KG1vZGVsQmluZGluZy5tb2RlbE5hbWUsIGZpbmFsVmFsdWUsIG1vZGVsQmluZGluZy5zaG91bGRSZW5kZXIsIG1vZGVsQmluZGluZy5kZWJvdW5jZSk7XG4gICAgfVxuICAgIGhhbmRsZUNvbm5lY3RlZENvbnRyb2xsZXJFdmVudChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjaGlsZENvbnRyb2xsZXIgPSBldmVudC5kZXRhaWwuY29udHJvbGxlcjtcbiAgICAgICAgaWYgKGNoaWxkQ29udHJvbGxlci5jb21wb25lbnQuZ2V0UGFyZW50KCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RlbERpcmVjdGl2ZXMgPSBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyhjaGlsZENvbnRyb2xsZXIuZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IG1vZGVsQmluZGluZ3MgPSBtb2RlbERpcmVjdGl2ZXMubWFwKGdldE1vZGVsQmluZGluZyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmFkZENoaWxkKGNoaWxkQ29udHJvbGxlci5jb21wb25lbnQsIG1vZGVsQmluZGluZ3MpO1xuICAgICAgICBjaGlsZENvbnRyb2xsZXIuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdsaXZlOmRpc2Nvbm5lY3QnLCB0aGlzLmhhbmRsZURpc2Nvbm5lY3RlZENoaWxkQ29udHJvbGxlckV2ZW50KTtcbiAgICB9XG4gICAgaGFuZGxlRGlzY29ubmVjdGVkQ2hpbGRDb250cm9sbGVyRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgY2hpbGRDb250cm9sbGVyID0gZXZlbnQuZGV0YWlsLmNvbnRyb2xsZXI7XG4gICAgICAgIGNoaWxkQ29udHJvbGxlci5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xpdmU6ZGlzY29ubmVjdCcsIHRoaXMuaGFuZGxlRGlzY29ubmVjdGVkQ2hpbGRDb250cm9sbGVyRXZlbnQpO1xuICAgICAgICBpZiAoY2hpbGRDb250cm9sbGVyLmNvbXBvbmVudC5nZXRQYXJlbnQoKSAhPT0gdGhpcy5jb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudC5yZW1vdmVDaGlsZChjaGlsZENvbnRyb2xsZXIuY29tcG9uZW50KTtcbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBkZXRhaWwgPSB7fSwgY2FuQnViYmxlID0gdHJ1ZSwgY2FuY2VsYWJsZSA9IGZhbHNlKSB7XG4gICAgICAgIGRldGFpbC5jb250cm9sbGVyID0gdGhpcztcbiAgICAgICAgZGV0YWlsLmNvbXBvbmVudCA9IHRoaXMucHJveGllZENvbXBvbmVudDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaChuYW1lLCB7IGRldGFpbCwgcHJlZml4OiAnbGl2ZScsIGNhbmNlbGFibGUsIGJ1YmJsZXM6IGNhbkJ1YmJsZSB9KTtcbiAgICB9XG59XG5kZWZhdWx0XzEudmFsdWVzID0ge1xuICAgIHVybDogU3RyaW5nLFxuICAgIHByb3BzOiBPYmplY3QsXG4gICAgY3NyZjogU3RyaW5nLFxuICAgIGRlYm91bmNlOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMTUwIH0sXG4gICAgaWQ6IFN0cmluZyxcbiAgICBmaW5nZXJwcmludDogU3RyaW5nLFxufTtcblxuZXhwb3J0IHsgQ29tcG9uZW50LCBkZWZhdWx0XzEgYXMgZGVmYXVsdCwgZ2V0Q29tcG9uZW50IH07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlZmF1bHQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImRlc2MiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiX3NsaWNlZFRvQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiX2kiLCJfcyIsIl9lIiwiX3giLCJfciIsIl9hcnIiLCJfbiIsIl9kIiwiQXJyYXkiLCJpc0FycmF5IiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiX3RvUHJvcGVydHlLZXkiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfdG9QcmltaXRpdmUiLCJTdHJpbmciLCJpbnB1dCIsImhpbnQiLCJwcmltIiwidG9QcmltaXRpdmUiLCJyZXMiLCJOdW1iZXIiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJfaXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwibyIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwibiIsInRvU3RyaW5nIiwiZnJvbSIsInRlc3QiLCJsZW4iLCJhcnIyIiwicGFyc2VEaXJlY3RpdmVzIiwiY29udGVudCIsImRpcmVjdGl2ZXMiLCJjdXJyZW50QWN0aW9uTmFtZSIsImN1cnJlbnRBcmd1bWVudE5hbWUiLCJjdXJyZW50QXJndW1lbnRWYWx1ZSIsImN1cnJlbnRBcmd1bWVudHMiLCJjdXJyZW50TmFtZWRBcmd1bWVudHMiLCJjdXJyZW50TW9kaWZpZXJzIiwiZ2V0TGFzdEFjdGlvbk5hbWUiLCJhY3Rpb24iLCJwdXNoSW5zdHJ1Y3Rpb24iLCJuYW1lZCIsIm1vZGlmaWVycyIsImdldFN0cmluZyIsInB1c2hBcmd1bWVudCIsIm1peGVkQXJnVHlwZXNFcnJvciIsImNvbmNhdCIsInRyaW0iLCJwdXNoTW9kaWZpZXIiLCJjaGFyIiwiY29tYmluZVNwYWNlZEFycmF5IiwicGFydHMiLCJmaW5hbFBhcnRzIiwicGFydCIsInNwbGl0Iiwibm9ybWFsaXplTW9kZWxOYW1lIiwibW9kZWwiLCJyZXBsYWNlIiwibWFwIiwicyIsImpvaW4iLCJnZXRWYWx1ZUZyb21FbGVtZW50IiwidmFsdWVTdG9yZSIsIkhUTUxJbnB1dEVsZW1lbnQiLCJtb2RlbE5hbWVEYXRhIiwiZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudCIsIm1vZGVsVmFsdWUiLCJnZXQiLCJnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUiLCJjaGVja2VkIiwiaW5wdXRWYWx1ZSIsIkhUTUxTZWxlY3RFbGVtZW50IiwibXVsdGlwbGUiLCJzZWxlY3RlZE9wdGlvbnMiLCJlbCIsImRhdGFzZXQiLCJoYXNBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRWYWx1ZU9uRWxlbWVudCIsInZhbHVlRm91bmQiLCJhcnJheVdyYXBwZWRWYWx1ZSIsIm9wdGlvbnMiLCJvcHRpb24iLCJzZWxlY3RlZCIsImluY2x1ZGVzIiwiZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMiLCJkaXJlY3RpdmUiLCJ0aHJvd09uTWlzc2luZyIsImRhdGFNb2RlbERpcmVjdGl2ZXMiLCJmb3JtRWxlbWVudCIsImNsb3Nlc3QiLCJnZXRFbGVtZW50QXNUYWdUZXh0IiwiZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQiLCJjb21wb25lbnQiLCJjb250YWlucyIsImZvdW5kQ2hpbGRDb21wb25lbnQiLCJnZXRDaGlsZHJlbiIsImNoaWxkQ29tcG9uZW50IiwiY2xvbmVIVE1MRWxlbWVudCIsIm5ld0VsZW1lbnQiLCJjbG9uZU5vZGUiLCJIVE1MRWxlbWVudCIsImh0bWxUb0VsZW1lbnQiLCJodG1sIiwidGVtcGxhdGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJjaGlsZEVsZW1lbnRDb3VudCIsImNoaWxkIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJjbG9uZUVsZW1lbnRXaXRoTmV3VGFnTmFtZSIsIm5ld1RhZyIsIm9yaWdpbmFsVGFnIiwidGFnTmFtZSIsInN0YXJ0UlgiLCJSZWdFeHAiLCJlbmRSWCIsInN0YXJ0U3Vic3QiLCJlbmRTdWJzdCIsIm5ld0hUTUwiLCJvdXRlckhUTUwiLCJpbmRleE9mIiwiY3VycmVudFZhbHVlcyIsImluZGV4Iiwic3BsaWNlIiwiZ2V0RGVlcERhdGEiLCJkYXRhIiwicHJvcGVydHlQYXRoIiwiX3BhcnNlRGVlcERhdGEiLCJwYXJzZURlZXBEYXRhIiwiY3VycmVudExldmVsRGF0YSIsImZpbmFsS2V5IiwiZmluYWxEYXRhIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic2V0RGVlcERhdGEiLCJfcGFyc2VEZWVwRGF0YTIiLCJsYXN0UGFydCIsIlZhbHVlU3RvcmUiLCJpZGVudGlmaWVyS2V5IiwidXBkYXRlZE1vZGVscyIsIm5vcm1hbGl6ZWROYW1lIiwiaXNQcm9wTmFtZVRvcExldmVsIiwiaGFzIiwic2V0IiwiY3VycmVudFZhbHVlIiwiYWxsIiwiYXNzaWduIiwicmVpbml0aWFsaXplQWxsUHJvcHMiLCJyZWluaXRpYWxpemVQcm92aWRlZFByb3BzIiwiY2hhbmdlZCIsIl9PYmplY3QkZW50cmllcyIsImVudHJpZXMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJjdXJyZW50SWRlbnRpZmllciIsIm5ld0lkZW50aWZpZXIiLCJmaW5kSWRlbnRpZmllciIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJtb3JwaEF0dHJzIiwiZnJvbU5vZGUiLCJ0b05vZGUiLCJ0b05vZGVBdHRycyIsImF0dHJpYnV0ZXMiLCJhdHRyIiwiYXR0ck5hbWUiLCJhdHRyTmFtZXNwYWNlVVJJIiwiYXR0clZhbHVlIiwiZnJvbVZhbHVlIiwibm9kZVR5cGUiLCJuYW1lc3BhY2VVUkkiLCJsb2NhbE5hbWUiLCJnZXRBdHRyaWJ1dGVOUyIsInByZWZpeCIsInNldEF0dHJpYnV0ZU5TIiwic2V0QXR0cmlidXRlIiwiZnJvbU5vZGVBdHRycyIsImQiLCJoYXNBdHRyaWJ1dGVOUyIsInJlbW92ZUF0dHJpYnV0ZU5TIiwicmVtb3ZlQXR0cmlidXRlIiwicmFuZ2UiLCJOU19YSFRNTCIsImRvYyIsIkhBU19URU1QTEFURV9TVVBQT1JUIiwiSEFTX1JBTkdFX1NVUFBPUlQiLCJjcmVhdGVSYW5nZSIsImNyZWF0ZUZyYWdtZW50RnJvbVRlbXBsYXRlIiwic3RyIiwiY2hpbGROb2RlcyIsImNyZWF0ZUZyYWdtZW50RnJvbVJhbmdlIiwic2VsZWN0Tm9kZSIsImJvZHkiLCJmcmFnbWVudCIsImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCIsImNyZWF0ZUZyYWdtZW50RnJvbVdyYXAiLCJ0b0VsZW1lbnQiLCJjb21wYXJlTm9kZU5hbWVzIiwiZnJvbUVsIiwidG9FbCIsImZyb21Ob2RlTmFtZSIsIm5vZGVOYW1lIiwidG9Ob2RlTmFtZSIsImZyb21Db2RlU3RhcnQiLCJ0b0NvZGVTdGFydCIsImNoYXJDb2RlQXQiLCJ0b1VwcGVyQ2FzZSIsImNyZWF0ZUVsZW1lbnROUyIsIm1vdmVDaGlsZHJlbiIsImN1ckNoaWxkIiwiZmlyc3RDaGlsZCIsIm5leHRDaGlsZCIsIm5leHRTaWJsaW5nIiwiYXBwZW5kQ2hpbGQiLCJzeW5jQm9vbGVhbkF0dHJQcm9wIiwic3BlY2lhbEVsSGFuZGxlcnMiLCJPUFRJT04iLCJwYXJlbnROb2RlIiwicGFyZW50TmFtZSIsInNlbGVjdGVkSW5kZXgiLCJJTlBVVCIsIlRFWFRBUkVBIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsIm5vZGVWYWx1ZSIsInBsYWNlaG9sZGVyIiwiU0VMRUNUIiwib3B0Z3JvdXAiLCJFTEVNRU5UX05PREUiLCJET0NVTUVOVF9GUkFHTUVOVF9OT0RFJDEiLCJURVhUX05PREUiLCJDT01NRU5UX05PREUiLCJub29wIiwiZGVmYXVsdEdldE5vZGVLZXkiLCJub2RlIiwiaWQiLCJtb3JwaGRvbUZhY3RvcnkiLCJtb3JwaGRvbSIsInRvTm9kZUh0bWwiLCJnZXROb2RlS2V5Iiwib25CZWZvcmVOb2RlQWRkZWQiLCJvbk5vZGVBZGRlZCIsIm9uQmVmb3JlRWxVcGRhdGVkIiwib25FbFVwZGF0ZWQiLCJvbkJlZm9yZU5vZGVEaXNjYXJkZWQiLCJvbk5vZGVEaXNjYXJkZWQiLCJvbkJlZm9yZUVsQ2hpbGRyZW5VcGRhdGVkIiwiY2hpbGRyZW5Pbmx5IiwiZnJvbU5vZGVzTG9va3VwIiwia2V5ZWRSZW1vdmFsTGlzdCIsImFkZEtleWVkUmVtb3ZhbCIsIndhbGtEaXNjYXJkZWRDaGlsZE5vZGVzIiwic2tpcEtleWVkTm9kZXMiLCJyZW1vdmVOb2RlIiwicmVtb3ZlQ2hpbGQiLCJpbmRleFRyZWUiLCJoYW5kbGVOb2RlQWRkZWQiLCJ1bm1hdGNoZWRGcm9tRWwiLCJyZXBsYWNlQ2hpbGQiLCJtb3JwaEVsIiwiY2xlYW51cEZyb21FbCIsImN1ckZyb21Ob2RlQ2hpbGQiLCJjdXJGcm9tTm9kZUtleSIsImZyb21OZXh0U2libGluZyIsInRvRWxLZXkiLCJtb3JwaENoaWxkcmVuIiwiY3VyVG9Ob2RlQ2hpbGQiLCJjdXJUb05vZGVLZXkiLCJ0b05leHRTaWJsaW5nIiwibWF0Y2hpbmdGcm9tRWwiLCJvdXRlciIsImlzU2FtZU5vZGUiLCJjdXJGcm9tTm9kZVR5cGUiLCJpc0NvbXBhdGlibGUiLCJpbnNlcnRCZWZvcmUiLCJvbkJlZm9yZU5vZGVBZGRlZFJlc3VsdCIsImFjdHVhbGl6ZSIsIm93bmVyRG9jdW1lbnQiLCJzcGVjaWFsRWxIYW5kbGVyIiwibW9ycGhlZE5vZGUiLCJtb3JwaGVkTm9kZVR5cGUiLCJ0b05vZGVUeXBlIiwiZWxUb1JlbW92ZSIsIm5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uIiwiaXNGaWxlSW5wdXQiLCJjaGlsZHJlbiIsImV4ZWN1dGVNb3JwaGRvbSIsInJvb3RGcm9tRWxlbWVudCIsInJvb3RUb0VsZW1lbnQiLCJtb2RpZmllZEZpZWxkRWxlbWVudHMiLCJnZXRFbGVtZW50VmFsdWUiLCJjaGlsZENvbXBvbmVudHMiLCJmaW5kQ2hpbGRDb21wb25lbnQiLCJnZXRLZXlGcm9tRWxlbWVudCIsImNoaWxkQ29tcG9uZW50TWFwIiwiTWFwIiwiY2hpbGRDb21wb25lbnRUb0VsZW1lbnQiLCJyZXBsYWNlV2l0aCIsIlNWR0VsZW1lbnQiLCJ1cGRhdGVGcm9tTmV3RWxlbWVudCIsImlzRXF1YWxOb2RlIiwibm9ybWFsaXplZEZyb21FbCIsIm5vcm1hbGl6ZWRUb0VsIiwiVW5zeW5jZWRJbnB1dHNUcmFja2VyIiwibW9kZWxFbGVtZW50UmVzb2x2ZXIiLCJfdGhpcyIsImVsZW1lbnRFdmVudExpc3RlbmVycyIsImV2ZW50IiwiY2FsbGJhY2siLCJoYW5kbGVJbnB1dEV2ZW50IiwidW5zeW5jZWRJbnB1dHMiLCJVbnN5bmNlZElucHV0Q29udGFpbmVyIiwiYWN0aXZhdGUiLCJfdGhpczIiLCJfcmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlYWN0aXZhdGUiLCJfdGhpczMiLCJfcmVmMiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXJrTW9kZWxBc1N5bmNlZCIsIm1vZGVsTmFtZSIsInVwZGF0ZU1vZGVsRnJvbUVsZW1lbnQiLCJnZXRNb2RlbE5hbWUiLCJhZGQiLCJnZXRVbnN5bmNlZElucHV0cyIsImFsbFVuc3luY2VkSW5wdXRzIiwiZ2V0VW5zeW5jZWRNb2RlbHMiLCJnZXRVbnN5bmNlZE1vZGVsTmFtZXMiLCJyZXNldFVuc3luY2VkRmllbGRzIiwidW5zeW5jZWROb25Nb2RlbEZpZWxkcyIsInVuc3luY2VkTW9kZWxOYW1lcyIsInVuc3luY2VkTW9kZWxGaWVsZHMiLCJfdGhpczQiLCJIb29rTWFuYWdlciIsImhvb2tzIiwicmVnaXN0ZXIiLCJob29rTmFtZSIsInVucmVnaXN0ZXIiLCJ0cmlnZ2VySG9vayIsIl9sZW4iLCJfa2V5IiwiQmFja2VuZFJlc3BvbnNlIiwicmVzcG9uc2UiLCJfZ2V0Qm9keSIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwidGV4dCIsImdldEJvZHkiLCJDaGlsZENvbXBvbmVudFdyYXBwZXIiLCJtb2RlbEJpbmRpbmdzIiwiQ29tcG9uZW50IiwiZmluZ2VycHJpbnQiLCJiYWNrZW5kIiwiZWxlbWVudERyaXZlciIsImRlZmF1bHREZWJvdW5jZSIsImJhY2tlbmRSZXF1ZXN0IiwicGVuZGluZ0FjdGlvbnMiLCJpc1JlcXVlc3RQZW5kaW5nIiwicmVxdWVzdERlYm91bmNlVGltZW91dCIsInBhcmVudCIsInVuc3luY2VkSW5wdXRzVHJhY2tlciIsInJlc2V0UHJvbWlzZSIsIm9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZSIsImJpbmQiLCJhZGRQbHVnaW4iLCJwbHVnaW4iLCJhdHRhY2hUb0NvbXBvbmVudCIsImRpc2Nvbm5lY3QiLCJjbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQiLCJvbiIsIm9mZiIsInJlUmVuZGVyIiwiZGVib3VuY2UiLCJwcm9taXNlIiwibmV4dFJlcXVlc3RQcm9taXNlIiwiaXNDaGFuZ2VkIiwiZGVib3VuY2VkU3RhcnRSZXF1ZXN0IiwiZ2V0RGF0YSIsInJlbmRlciIsInRyeVN0YXJ0aW5nUmVxdWVzdCIsImFkZENoaWxkIiwiZ2V0UGFyZW50IiwiZ2V0Q29tcG9uZW50UHJvcHMiLCJsaXZlRmluZ2VycHJpbnRWYWx1ZSIsIl90aGlzNSIsImNoaWxkV3JhcHBlciIsIm1vZGVsQmluZGluZyIsImNoaWxkTW9kZWxOYW1lIiwiaW5uZXJNb2RlbE5hbWUiLCJzaG91bGRSZW5kZXIiLCJwZXJmb3JtUmVxdWVzdCIsIl90aGlzNiIsInRoaXNQcm9taXNlUmVzb2x2ZSIsIm5leHRSZXF1ZXN0UHJvbWlzZVJlc29sdmUiLCJtYWtlUmVxdWVzdCIsImdldENoaWxkcmVuRmluZ2VycHJpbnRzIiwiX3JlZjMiLCJfY2FsbGVlMiIsImJhY2tlbmRSZXNwb25zZSIsImhlYWRlcnMiLCJjb250cm9scyIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImRpc3BsYXlFcnJvciIsInJlbmRlckVycm9yIiwicHJvY2Vzc1JlcmVuZGVyIiwiX3gyIiwiX3RoaXM3IiwiVHVyYm8iLCJ2aXNpdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIm1vZGlmaWVkTW9kZWxWYWx1ZXMiLCJtYXRjaGVzIiwiY29uc29sZSIsImZpbmRDaGlsZENvbXBvbmVudEVsZW1lbnQiLCJjYWxjdWxhdGVEZWJvdW5jZSIsImNsZWFyVGltZW91dCIsIl90aGlzOCIsInNldFRpbWVvdXQiLCJtb2RhbCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImlmcmFtZSIsImJvcmRlclJhZGl1cyIsImZsZXhHcm93IiwicHJlcGVuZCIsIm92ZXJmbG93IiwiY29udGVudFdpbmRvdyIsIm9wZW4iLCJ3cml0ZSIsImNsb3NlIiwiY2xvc2VNb2RhbCIsImUiLCJmb2N1cyIsImZpbmdlcnByaW50cyIsIl90aGlzOSIsInByb3hpZnlDb21wb25lbnQiLCJQcm94eSIsInByb3AiLCJjYWxsYWJsZSIsIl9sZW4yIiwiX2tleTIiLCJSZWZsZWN0IiwicHJvcGVydHkiLCJCYWNrZW5kUmVxdWVzdCIsImFjdGlvbnMiLCJ1cGRhdGVNb2RlbHMiLCJfdGhpczEwIiwiaXNSZXNvbHZlZCIsImNvbnRhaW5zT25lT2ZBY3Rpb25zIiwidGFyZ2V0ZWRBY3Rpb25zIiwiZmlsdGVyIiwiYXJlQW55TW9kZWxzVXBkYXRlZCIsInRhcmdldGVkTW9kZWxzIiwiQmFja2VuZCIsInVybCIsImNzcmZUb2tlbiIsImNoaWxkcmVuRmluZ2VycHJpbnRzIiwic3BsaXRVcmwiLCJfc3BsaXRVcmwiLCJfc3BsaXRVcmwyIiwicXVlcnlTdHJpbmciLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJmZXRjaE9wdGlvbnMiLCJBY2NlcHQiLCJoYXNGaW5nZXJwcmludHMiLCJoYXNVcGRhdGVkTW9kZWxzIiwid2lsbERhdGFGaXRJblVybCIsImFwcGVuZCIsInJlcXVlc3REYXRhIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zU3RyaW5nIiwiZmV0Y2giLCJiYWNrZW5kQWN0aW9uIiwiZGF0YUpzb24iLCJjaGlsZHJlbkZpbmdlcnByaW50c0pzb24iLCJ1cmxFbmNvZGVkSnNvbkRhdGEiLCJTdGFuZGFyZEVsZW1lbnREcml2ZXIiLCJtb2RlbERpcmVjdGl2ZSIsInJvb3RFbGVtZW50IiwibGl2ZVByb3BzVmFsdWUiLCJxdWVyeVNlbGVjdG9yIiwibGl2ZUlkIiwiTG9hZGluZ1BsdWdpbiIsIl90aGlzMTEiLCJyZXF1ZXN0Iiwic3RhcnRMb2FkaW5nIiwiZmluaXNoTG9hZGluZyIsInRhcmdldEVsZW1lbnQiLCJoYW5kbGVMb2FkaW5nVG9nZ2xlIiwiaXNMb2FkaW5nIiwiX3RoaXMxMiIsImFkZEF0dHJpYnV0ZXMiLCJyZW1vdmVBdHRyaWJ1dGVzIiwiZ2V0TG9hZGluZ0RpcmVjdGl2ZXMiLCJfcmVmNCIsImhhbmRsZUxvYWRpbmdEaXJlY3RpdmUiLCJfdGhpczEzIiwiZmluYWxBY3Rpb24iLCJwYXJzZUxvYWRpbmdBY3Rpb24iLCJkZWxheSIsInZhbGlkTW9kaWZpZXJzIiwibW9kaWZpZXIiLCJwYXJzZUludCIsIl9hIiwibG9hZGluZ0RpcmVjdGl2ZSIsInNob3dFbGVtZW50IiwiaGlkZUVsZW1lbnQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwibG9hZGluZ0RpcmVjdGl2ZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibG9hZGluZyIsImNsYXNzZXMiLCJfZWxlbWVudCRjbGFzc0xpc3QiLCJjbGFzc0xpc3QiLCJfZWxlbWVudCRjbGFzc0xpc3QyIiwicmVtb3ZlIiwiYXR0cmlidXRlIiwiVmFsaWRhdGVkRmllbGRzUGx1Z2luIiwiX3RoaXMxNCIsImhhbmRsZU1vZGVsU2V0IiwidmFsaWRhdGVkRmllbGRzIiwiUGFnZVVubG9hZGluZ1BsdWdpbiIsImlzQ29ubmVjdGVkIiwiX3RoaXMxNSIsIlBvbGxpbmdEaXJlY3RvciIsImlzUG9sbGluZ0FjdGl2ZSIsInBvbGxpbmdJbnRlcnZhbHMiLCJhZGRQb2xsIiwiYWN0aW9uTmFtZSIsImR1cmF0aW9uIiwicG9sbHMiLCJpbml0aWF0ZVBvbGwiLCJzdGFydEFsbFBvbGxpbmciLCJfdGhpczE2IiwiX3JlZjUiLCJzdG9wQWxsUG9sbGluZyIsImludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImNsZWFyUG9sbGluZyIsIl90aGlzMTciLCJ0aW1lciIsInNldEludGVydmFsIiwiUG9sbGluZ1BsdWdpbiIsIl90aGlzMTgiLCJwb2xsaW5nRGlyZWN0b3IiLCJpbml0aWFsaXplUG9sbGluZyIsIl90aGlzMTkiLCJwb2xsIiwicmF3UG9sbENvbmZpZyIsIndhcm4iLCJTZXRWYWx1ZU9udG9Nb2RlbEZpZWxkc1BsdWdpbiIsIl90aGlzMjAiLCJzeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyIsIkhUTUxGb3JtRWxlbWVudCIsImdldE1vZGVsQmluZGluZyIsInRhcmdldEV2ZW50TmFtZSIsIl9tb2RlbERpcmVjdGl2ZSRhY3RpbyIsIl9tb2RlbERpcmVjdGl2ZSRhY3RpbzIiLCJDb21wb25lbnRSZWdpc3RyeSIsImNvbXBvbmVudHMiLCJXZWFrTWFwIiwicmVnaXN0ZXJDb21wb25lbnQiLCJkZWZpbml0aW9uIiwidW5yZWdpc3RlckNvbXBvbmVudCIsImdldENvbXBvbmVudCIsIl90aGlzMjEiLCJjb3VudCIsIm1heENvdW50IiwiQ29tcG9uZW50UmVnaXN0cnkkMSIsImRlZmF1bHRfMSIsIl90aGlzMjIiLCJwZW5kaW5nQWN0aW9uVHJpZ2dlck1vZGVsRWxlbWVudCIsImhhbmRsZUNoYW5nZUV2ZW50IiwiaGFuZGxlQ29ubmVjdGVkQ29udHJvbGxlckV2ZW50IiwiaW5pdGlhbGl6ZSIsIl90aGlzMjMiLCJoYW5kbGVEaXNjb25uZWN0ZWRDaGlsZENvbnRyb2xsZXJFdmVudCIsInByb3BzVmFsdWUiLCJmaW5nZXJwcmludFZhbHVlIiwidXJsVmFsdWUiLCJjc3JmVmFsdWUiLCJwcm94aWVkQ29tcG9uZW50IiwiX19jb21wb25lbnQiLCJoYXNEZWJvdW5jZVZhbHVlIiwiZGVib3VuY2VWYWx1ZSIsInBsdWdpbnMiLCJfdGhpczI0IiwiX3JlZjYiLCJkaXNwYXRjaEV2ZW50IiwiX3RoaXMyNSIsIl9yZWY3IiwidXBkYXRlIiwidXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50IiwiX3RoaXMyNiIsInJhd0FjdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIiRyZW5kZXIiLCIkdXBkYXRlTW9kZWwiLCJldmVudE5hbWUiLCJmaW5hbFZhbHVlIiwiY2hpbGRDb250cm9sbGVyIiwiZGV0YWlsIiwiY29udHJvbGxlciIsIm1vZGVsRGlyZWN0aXZlcyIsImNhbkJ1YmJsZSIsImNhbmNlbGFibGUiLCJkaXNwYXRjaCIsImJ1YmJsZXMiLCJjc3JmIl0sInNvdXJjZVJvb3QiOiIifQ==