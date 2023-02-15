"use strict";
'use client';
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var NavBase_1 = require("./NavBase");
var NavHeader_1 = require("./NavHeader");
function Nav(_a) {
    var config = _a.config, children = _a.children, props = __rest(_a, ["config", "children"]);
    var _b = (0, react_1.useState)(false), navFold = _b[0], setNavFold = _b[1];
    return (<NavBase_1.NavBase className={navFold ? 'open' : ''} entries={config.nav} {...props}>
      <NavHeader_1.NavHeader config={config.site} onToggleFold={function () { return setNavFold(function (e) { return !e; }); }}/>
      {children}
    </NavBase_1.NavBase>);
}
exports.default = Nav;
