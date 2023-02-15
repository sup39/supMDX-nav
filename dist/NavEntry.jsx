"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavEntry = void 0;
var react_1 = require("react");
var link_1 = require("next/link");
function NavEntry(_a) {
    var _b = _a.entry, label = _b.label, link = _b.link, children = _b.children, dir = _a.dir, here = _a.here, childrenJSX = _a.children;
    var href = dir + link;
    var isHere = href.replace(/\/$/, '') === here; // remove trailing slash
    var isRHere = isHere || here.startsWith(href); // here or is children
    var _c = (0, react_1.useState)(isRHere), toggle = _c[0], setToggle = _c[1];
    var entryCls = 'nav-entry' + (isHere ? ' nav-here' : '');
    return (children === null || children === void 0 ? void 0 : children.length) ? <div className={'nav-dir' + (toggle ? ' nav-fold-open' : '')}><>
    <div className={entryCls}>
      <link_1.default href={href}>{label}</link_1.default>
      <svg viewBox="0 0 8 8" onClick={function () { return setToggle(function (e) { return !e; }); }}><polyline points="6 3 4 5 2 3"></polyline></svg>
    </div>
    {isHere ? childrenJSX : <></>}
    <div className='nav-dir-child'>{children.map(function (entry) { return <NavEntry key={entry.link} entry={entry} dir={href} here={here}>{childrenJSX}</NavEntry>; })}</div>
  </></div> : <div className={entryCls}>
    <link_1.default href={href}>{label}</link_1.default>
  </div>;
}
exports.NavEntry = NavEntry;
