'use strict';

var React = require('react');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var addTrailingSlash = function (url) { return url.endsWith('/') ? url : url + '/'; };
function NavEntry(_a) {
    var _b = _a.entry, label = _b.label, path = _b.path, children = _b.children, dir = _a.dir, here = _a.here, childrenJSX = _a.children;
    // if path is not URL, prepend dir (and trailing slash)
    var href = path.includes('://') ? path : addTrailingSlash(dir) + path;
    var hrefDir = addTrailingSlash(href);
    var isHere = hrefDir === addTrailingSlash(here); // compared with trailing slash
    var isRHere = isHere || here.startsWith(hrefDir); // here OR children
    var _c = React.useState(isRHere), toggle = _c[0], setToggle = _c[1];
    var entryCls = 'nav-entry' + (isHere ? ' nav-here' : '');
    return (children === null || children === void 0 ? void 0 : children.length) ? React.createElement("div", { className: 'nav-dir' + (toggle ? ' nav-fold-open' : '') },
        React.createElement(React.Fragment, null,
            React.createElement("div", { className: entryCls },
                React.createElement("a", { href: href }, label),
                React.createElement("svg", { viewBox: "0 0 8 8", onClick: function () { return setToggle(function (e) { return !e; }); } },
                    React.createElement("polyline", { points: "6 3 4 5 2 3" }))),
            isHere ? childrenJSX : React.createElement(React.Fragment, null),
            React.createElement("div", { className: 'nav-dir-child' }, children.map(function (entry) {
                return React.createElement(NavEntry, { key: entry.path, entry: entry, dir: hrefDir, here: here }, childrenJSX);
            })))) : React.createElement("div", { className: entryCls },
        React.createElement("a", { href: href }, label));
}

function NavBase(_a) {
    var children = _a.children, headings = _a.headings, pathname = _a.pathname, entries = _a.entries, className = _a.className;
    var headingsJSX = React.createElement("ul", { className: "" }, headings.map(function (_a) {
        var label = _a.label, id = _a.id;
        return React.createElement("li", { key: id },
            React.createElement("a", { href: '#' + id }, label));
    }));
    return React.createElement("nav", { className: className },
        children,
        React.createElement("div", { className: "nav-root" },
            entries.map(function (entry) { return React.createElement(NavEntry, { key: entry.path, entry: entry, dir: '/', here: pathname }); }),
            headingsJSX));
}

function NavHeader(_a) {
    var _b, _c, _d, _e, _f;
    var config = _a.config, onToggleFold = _a.onToggleFold;
    var title = config.title, subtitle = config.subtitle, icon0 = config.icon;
    var icon = typeof icon0 === 'string' ? { href: icon0 } : icon0;
    return React.createElement("header", null,
        React.createElement("a", { href: "/", id: "icon-link" },
            (icon === null || icon === void 0 ? void 0 : icon.href) && React.createElement("img", { className: "icon", src: icon === null || icon === void 0 ? void 0 : icon.href, alt: (_b = icon === null || icon === void 0 ? void 0 : icon.alt) !== null && _b !== void 0 ? _b : 'icon', width: (_d = (_c = icon === null || icon === void 0 ? void 0 : icon.width) !== null && _c !== void 0 ? _c : icon === null || icon === void 0 ? void 0 : icon.size) !== null && _d !== void 0 ? _d : 96, height: (_f = (_e = icon === null || icon === void 0 ? void 0 : icon.height) !== null && _e !== void 0 ? _e : icon === null || icon === void 0 ? void 0 : icon.size) !== null && _f !== void 0 ? _f : 96 }),
            React.createElement("div", { className: "icon-text" },
                React.createElement("div", null, title),
                React.createElement("div", null, subtitle))),
        React.createElement("div", { className: "menu-toggle", onClick: onToggleFold }));
}

function Nav(_a) {
    var config = _a.config, children = _a.children, props = __rest(_a, ["config", "children"]);
    var _b = React.useState(false), navFold = _b[0], setNavFold = _b[1];
    return (React.createElement(NavBase, __assign({ className: navFold ? 'open' : '', entries: config.nav }, props),
        React.createElement(NavHeader, { config: config.site, onToggleFold: function () { return setNavFold(function (e) { return !e; }); } }),
        children));
}

exports.Nav = Nav;
exports.NavBase = NavBase;
exports.NavEntry = NavEntry;
exports.NavHeader = NavHeader;
//# sourceMappingURL=index.js.map
