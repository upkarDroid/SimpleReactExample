'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.makeAPIQuery = exports.makeRequestPromise = undefined;var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _nodeFetch = require('node-fetch');var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
var _querystring = require('querystring');var _querystring2 = _interopRequireDefault(_querystring);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
// import routeController from './routeController';
// import { json } from 'body-parser';

var makeAPIQuery = function makeAPIQuery(paramsObj, additionalParams) {
    if (!paramsObj.hasOwnProperty("zpwa")) {
        paramsObj["zpwa"] = true;
    }
    return _querystring2.default.stringify(_extends({}, paramsObj, additionalParams));
};

var makeRequestPromise = function makeRequestPromise(url) {
    var headers = new _nodeFetch2.default.Headers();


    headers.set("User-Agent", "Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Mobile Safari/537.36");

    headers.set('Accept', 'application/json');
    var options = {
        headers: headers,
        // redirect: 'manual',
        redirect: "manual" };


    return (0, _nodeFetch2.default)(url, options).
    then(function (response) {return response.json();}).
    catch(console.log);
};exports.




makeRequestPromise = makeRequestPromise;exports.makeAPIQuery = makeAPIQuery;
//# sourceMappingURL=route.js.map